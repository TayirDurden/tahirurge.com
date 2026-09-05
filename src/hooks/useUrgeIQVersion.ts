import { useState, useEffect } from 'react';

const FALLBACK_VERSION = '0.19.0';
const PNL_PACKAGE_JSON_URL = 'https://raw.githubusercontent.com/TayirDurden/PnL/main/package.json';
const CACHE_KEY = 'urgeiq_pnl_version';
const CACHE_TTL_MS = 10 * 60 * 1000; // 10 dakika önbellek

interface CachedVersion {
  version: string;
  timestamp: number;
}

export const useUrgeIQVersion = (): string => {
  const [version, setVersion] = useState<string>(() => {
    try {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed: CachedVersion = JSON.parse(cached);
        if (Date.now() - parsed.timestamp < CACHE_TTL_MS) {
          return parsed.version;
        }
      }
    } catch {
      // ignore storage error
    }
    return FALLBACK_VERSION;
  });

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const fetchLatestVersion = async () => {
      try {
        const response = await fetch(PNL_PACKAGE_JSON_URL, {
          signal: controller.signal,
          cache: 'no-cache',
        });

        if (!response.ok) return;

        const data = await response.json();
        if (data && typeof data.version === 'string' && isMounted) {
          setVersion(data.version);
          try {
            sessionStorage.setItem(
              CACHE_KEY,
              JSON.stringify({ version: data.version, timestamp: Date.now() })
            );
          } catch {
            // ignore storage error
          }
        }
      } catch {
        // Ağ hatası veya iptal durumunda fallback sürümde kalır
      }
    };

    fetchLatestVersion();

    return () => {
      isMounted = false;
      controller.abort();
    };
  }, []);

  return version;
};
