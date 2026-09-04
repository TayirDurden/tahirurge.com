import React from 'react';

interface UrgeIQLogoProps {
  size?: number;
  className?: string;
  withBg?: boolean;
}

export const UrgeIQLogo: React.FC<UrgeIQLogoProps> = ({
  size = 36,
  className = '',
  withBg = true,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Koyu Arka Plan Gradyanı */}
        <linearGradient id="urgeBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f172a" />
          <stop offset="100%" stopColor="#020617" />
        </linearGradient>

        {/* Ü & Tebessüm İndigo-Mor Dinamik Gradyanı */}
        <linearGradient id="urgeStrokeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818cf8" />
          <stop offset="50%" stopColor="#6366f1" />
          <stop offset="100%" stopColor="#a855f7" />
        </linearGradient>

        {/* Hafif Işıma / Glow Efekti */}
        <filter id="urgeGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#6366f1" floodOpacity="0.3" />
        </filter>
      </defs>

      {/* Squircle Arka Plan */}
      {withBg && (
        <rect
          width="512"
          height="512"
          rx="128"
          fill="url(#urgeBgGrad)"
          stroke="#1e293b"
          strokeWidth="6"
        />
      )}

      {/* "Ü" Harfi / Tebessüm Sembolü */}
      <g filter={withBg ? "url(#urgeGlow)" : undefined}>
        {/* Sol Göz / Sol Ümlaut Noktası */}
        <circle cx="180" cy="144" r="28" fill="url(#urgeStrokeGrad)" />

        {/* Sağ Göz / Sağ Ümlaut Noktası */}
        <circle cx="332" cy="144" r="28" fill="url(#urgeStrokeGrad)" />

        {/* "U" Gövdesi & Geniş Tebessüm */}
        <path
          d="M 180 224 V 288 C 180 376, 332 376, 332 288 V 224"
          stroke="url(#urgeStrokeGrad)"
          strokeWidth="46"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
};

export default UrgeIQLogo;
