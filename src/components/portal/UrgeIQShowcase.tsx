import React from 'react';
import { 
  TrendingUp, 
  Database, 
  Layers, 
  Cpu, 
  ArrowUpRight,
  ShieldCheck,
  Server,
  Sparkles
} from 'lucide-react';
import { PortalContent } from '../../types/portal';
import { UrgeIQLogo } from '../common/UrgeIQLogo';

interface UrgeIQShowcaseProps {
  content: PortalContent;
  version?: string;
}

export const UrgeIQShowcase: React.FC<UrgeIQShowcaseProps> = ({ content, version }) => {
  const { urgeiqSection } = content;

  const getFeatureIcon = (iconName?: string) => {
    switch (iconName) {
      case 'trending-up':
        return <TrendingUp className="w-5 h-5 text-indigo-600" />;
      case 'database':
        return <Database className="w-5 h-5 text-indigo-600" />;
      case 'layers':
        return <Layers className="w-5 h-5 text-indigo-600" />;
      case 'cpu':
        return <Cpu className="w-5 h-5 text-indigo-600" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-600" />;
    }
  };

  return (
    <section id="urgeiq-section" className="py-20 md:py-28 relative overflow-hidden bg-white/60 border-y border-neutral-200/60">
      
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-indigo-100/30 via-purple-100/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-200/70 text-indigo-700 text-[11px] font-semibold tracking-wider uppercase mb-3.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 animate-pulse" />
            <span>{urgeiqSection.badge}</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-neutral-900 tracking-tight mb-4">
            {urgeiqSection.title}
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 font-sans leading-relaxed">
            {urgeiqSection.subtitle}
          </p>
        </div>

        {/* Hero Product Banner Card */}
        <div className="bg-gradient-to-br from-neutral-900 via-slate-900 to-neutral-950 text-white rounded-3xl p-6 sm:p-10 border border-neutral-800 shadow-xl mb-16 relative overflow-hidden group">
          
          {/* Ambient geometric light */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Product overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <UrgeIQLogo size={48} withBg={true} className="shadow-lg ring-1 ring-white/10 rounded-2xl" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tight text-white font-sans">UrgeIQ</span>
                    <span className="px-2 py-0.5 rounded-md bg-indigo-500/20 border border-indigo-400/30 text-[10px] font-medium text-indigo-300">
                      v{version || '0.19.0'} Production
                    </span>
                  </div>
                  <span className="text-xs text-neutral-400 font-sans">POS Control & Financial Operating System</span>
                </div>
              </div>

              <p className="text-sm text-neutral-300 leading-relaxed font-sans">
                {urgeiqSection.description}
              </p>

              {/* Live Link Button */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={urgeiqSection.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold inline-flex items-center gap-2 transition-all shadow-md hover:shadow-indigo-500/25 active:scale-98"
                >
                  <span>{urgeiqSection.liveUrlText}</span>
                  <ArrowUpRight className="w-4 h-4 text-indigo-200" />
                </a>

                <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 text-[11px] text-neutral-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Gerçek Zamanlı Çift Yönlü Eşitleme</span>
                </div>
              </div>
            </div>

            {/* Right Column: Visual Architecture Matrix */}
            <div className="lg:col-span-5 bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-xs space-y-4">
              <div className="text-[11px] uppercase tracking-widest text-indigo-300 font-semibold flex items-center justify-between">
                <span>Mimari Veri Akışı</span>
                <span className="text-[10px] text-neutral-400 lowercase">live sync</span>
              </div>

              {/* Data Flow Diagram Node */}
              <div className="space-y-2.5 text-xs">
                
                {/* Node 1: Bank POS Routing */}
                <div className="p-3 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-indigo-950 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                      <TrendingUp className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-[11px]">Çoklu Banka POS Matrisi</p>
                      <p className="text-[10px] text-neutral-400">Dinamik Komisyon Optimizasyonu</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono font-medium">En Düşük Oran</span>
                </div>

                {/* Node 2: Core Processing */}
                <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-500/40 flex items-center justify-between ring-1 ring-indigo-500/20">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-indigo-600/30 border border-indigo-400/40 flex items-center justify-center text-indigo-300">
                      <Cpu className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-medium text-indigo-200 text-[11px]">UrgeIQ Karar Motoru</p>
                      <p className="text-[10px] text-indigo-300/70">Gerçek Zamanlı Net PnL Hesabı</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-indigo-300 font-mono font-medium">Anlık Kâr/Zarar</span>
                </div>

                {/* Node 3: Database Sync */}
                <div className="p-3 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-lg bg-neutral-700 border border-neutral-600 flex items-center justify-center text-neutral-300">
                      <Server className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <p className="font-medium text-white text-[11px]">MSSQL ↔ Supabase</p>
                      <p className="text-[10px] text-neutral-400">Yerel ERP & Bulut Çift Yönlü Köprü</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-emerald-400 font-mono font-medium">Senkronize</span>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* 3 Key Operational Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {urgeiqSection.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-2xs hover:border-neutral-300 transition-all flex flex-col justify-between"
            >
              <div className="mb-3">
                <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium block mb-1">
                  {metric.label}
                </span>
                <div className="text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight font-sans">
                  {metric.value}
                </div>
              </div>
              <p className="text-xs text-neutral-500 leading-relaxed font-sans pt-3 border-t border-neutral-100">
                {metric.subtext}
              </p>
            </div>
          ))}
        </div>

        {/* 4 Architectural Features Grid */}
        <div className="mb-14">
          <h3 className="text-xs uppercase tracking-widest text-neutral-400 font-semibold mb-6 block text-center sm:text-left">
            {urgeiqSection.featuresTitle}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {urgeiqSection.features.map((feature, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 border border-neutral-200/80 shadow-2xs hover:shadow-md hover:border-indigo-200 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getFeatureIcon(feature.iconName)}
                  </div>
                  {feature.badge && (
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-neutral-100 text-neutral-600 border border-neutral-200/60">
                      {feature.badge}
                    </span>
                  )}
                </div>

                <h4 className="font-sans text-base font-bold text-neutral-900 mb-2 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-500 leading-relaxed font-sans">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Stack Tags */}
        <div className="p-6 rounded-2xl bg-neutral-50/80 border border-neutral-200/70 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-700">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{urgeiqSection.techStackTitle}:</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {urgeiqSection.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-2.5 py-1 rounded-lg bg-white border border-neutral-200/80 text-[11px] font-medium text-neutral-600 shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
