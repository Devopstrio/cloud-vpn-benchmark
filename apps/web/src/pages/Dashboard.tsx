import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import { Activity, Zap, Shield, DollarSign, ExternalLink, RefreshCcw } from 'lucide-react';

const latencyData = [
  { name: '00:00', azure: 22, aws: 45, gcp: 15 },
  { name: '04:00', azure: 24, aws: 48, gcp: 18 },
  { name: '08:00', azure: 35, aws: 55, gcp: 25 },
  { name: '12:00', azure: 28, aws: 42, gcp: 14 },
  { name: '16:00', azure: 42, aws: 65, gcp: 30 },
  { name: '20:00', azure: 25, aws: 40, gcp: 16 },
  { name: '23:59', azure: 22, aws: 44, gcp: 15 },
];

const throughputData = [
  { name: 'T-1', value: 850 },
  { name: 'T-2', value: 720 },
  { name: 'T-3', value: 940 },
  { name: 'T-4', value: 880 },
  { name: 'T-5', value: 1200 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-12 animate-fade-in">
      {/* Header */}
      <div className="flex justify-between items-end border-b border-slate-800 pb-8">
        <div>
          <h1 className="text-5xl font-black text-white tracking-tighter">Network Intelligence</h1>
          <p className="text-slate-400 mt-3 text-xl max-w-2xl font-medium italic">Continuous multi-cloud VPN performance evaluation and resilience benchmarking.</p>
        </div>
        <div className="flex gap-4">
          <button className="bg-slate-900 border border-slate-800 text-slate-300 px-6 py-3 rounded-2xl font-bold hover:bg-slate-800 transition flex items-center gap-2">
             <RefreshCcw size={18} /> Re-Probe All
          </button>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-2xl font-bold transition shadow-xl shadow-blue-900/40 flex items-center gap-2">
             <Zap size={18} /> New Benchmark
          </button>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Avg Latency (Global)" value="28.4ms" change="-2.1" icon={<Activity className="text-blue-400" />} />
        <StatCard title="Tunnel Goodput" value="94.2%" change="Optimal" icon={<Zap className="text-emerald-400" />} />
        <StatCard title="Encryption Health" value="100%" change="Secured" icon={<Shield className="text-indigo-400" />} />
        <StatCard title="Network TCO" value="$4,200" change="-$450" icon={<DollarSign className="text-yellow-400" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Latency Comparison */}
        <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800 p-10 rounded-[3rem] backdrop-blur-3xl shadow-2xl">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
              Multi-Cloud Latency (ms)
            </h2>
            <div className="flex gap-4">
              <LegendItem label="Azure" color="#3b82f6" />
              <LegendItem label="AWS" color="#f59e0b" />
              <LegendItem label="GCP" color="#10b981" />
            </div>
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={latencyData}>
                <defs>
                  <linearGradient id="colorAzure" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} dy={10} />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '16px' }}
                />
                <Area type="monotone" dataKey="azure" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorAzure)" />
                <Area type="monotone" dataKey="aws" stroke="#f59e0b" strokeWidth={3} fill="transparent" />
                <Area type="monotone" dataKey="gcp" stroke="#10b981" strokeWidth={3} fill="transparent" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Throughput Pulse */}
        <div className="bg-slate-900/40 border border-slate-800 p-10 rounded-[3rem] backdrop-blur-3xl shadow-2xl">
          <h2 className="text-2xl font-bold mb-10 text-white flex items-center gap-3">
            <span className="w-2 h-8 bg-emerald-500 rounded-full"></span>
            Throughput Pulse (Mbps)
          </h2>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={throughputData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis dataKey="name" hide />
                <YAxis stroke="#64748b" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                   contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '12px' }}
                />
                <Line type="stepAfter" dataKey="value" stroke="#10b981" strokeWidth={4} dot={{ r: 6, fill: '#10b981', strokeWidth: 2, stroke: '#0f172a' }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 space-y-4">
             <AlertItem title="Tunnel Flap: DC-to-Azure" description="BGP Session reset detected 2 times in 1h" severity="high" />
             <AlertItem title="High Jitter: AWS us-west-2" description="Latency variance exceeded 15ms threshold" severity="medium" />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, value, change, icon }: any) => (
  <div className="bg-slate-900/40 border border-slate-800 p-8 rounded-[2.5rem] hover:border-blue-500/30 transition-all group overflow-hidden relative shadow-2xl">
    <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:opacity-10 transition-opacity transform group-hover:scale-150 duration-1000 rotate-12">
       {React.cloneElement(icon, { size: 160 })}
    </div>
    <div className="relative z-10">
      <div className="p-4 bg-slate-950 rounded-2xl w-fit mb-6 border border-slate-800/50 shadow-inner group-hover:scale-110 transition duration-500">{icon}</div>
      <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mb-1">{title}</p>
      <div className="flex items-end gap-3">
        <p className="text-4xl font-black text-white tracking-tighter">{value}</p>
        <span className={`text-[11px] font-black pb-1.5 ${change.startsWith('-') ? 'text-emerald-400' : 'text-blue-400'}`}>{change}</span>
      </div>
    </div>
  </div>
);

const LegendItem = ({ label, color }: any) => (
  <div className="flex items-center gap-2">
    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }}></div>
    <span className="text-xs font-bold text-slate-400">{label}</span>
  </div>
);

const AlertItem = ({ title, description, severity }: any) => (
  <div className="flex items-center justify-between p-4 bg-slate-950/50 border border-slate-800 rounded-2xl hover:bg-slate-800/50 transition cursor-pointer group">
    <div className="flex gap-4">
      <div className={`w-1 h-10 rounded-full ${severity === 'high' ? 'bg-rose-500 shadow-[0_0_10px_#f43f5e]' : 'bg-yellow-500'}`}></div>
      <div>
        <p className="text-sm font-bold text-slate-100 group-hover:text-blue-400 transition">{title}</p>
        <p className="text-xs text-slate-500">{description}</p>
      </div>
    </div>
    <ExternalLink size={16} className="text-slate-700 group-hover:text-white transition" />
  </div>
);

export default Dashboard;
