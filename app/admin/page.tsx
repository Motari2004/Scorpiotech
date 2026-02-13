"use client";

import { useState, useEffect } from "react";
// Ensure you have: export interface ProjectLead { ... } in your actions.ts
import { getProjectLeads, ProjectLead } from "../actions";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [leads, setLeads] = useState<ProjectLead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem("scorpio_admin_session") === "true") {
      fetchLeads();
    } else {
      setLoading(false);
    }
  }, []);

  const fetchLeads = async () => {
    const data = await getProjectLeads();
    setLeads(data);
    setIsAuthenticated(true);
    setLoading(false);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "Hopefrey2004") {
      sessionStorage.setItem("scorpio_admin_session", "true");
      fetchLeads();
    } else {
      alert("Invalid Admin Key");
      setPassword("");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#e0d7c6] flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-yellow-800 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      // Gradient background for the Login Screen
      <section className="min-h-screen bg-gradient-to-br from-[#d6ccb8] via-[#e0d7c6] to-[#f5f0e6] flex items-center justify-center px-6">
        <form 
          onSubmit={handleLogin} 
          className="w-full max-w-sm bg-white/40 backdrop-blur-md border border-white/20 p-10 rounded-[2.5rem] shadow-2xl space-y-8 animate-in fade-in zoom-in duration-500"
        >
          <div className="text-center space-y-3">
            <h1 className="text-2xl font-black text-gray-900 tracking-tighter uppercase">Vault Access</h1>
            <p className="text-[10px] text-yellow-900/60 font-black uppercase tracking-[0.2em]">Authorized Personnel Only</p>
          </div>

          <div className="space-y-4">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              autoFocus
              autoComplete="new-password"
              className="w-full bg-white/40 border border-[#cbbfa8] p-5 rounded-2xl outline-none focus:border-yellow-800 text-center font-mono text-lg transition-all"
            />
            <button type="submit" className="w-full bg-yellow-800 text-white font-black py-5 rounded-2xl hover:bg-yellow-900 transition-all uppercase text-xs tracking-widest shadow-lg">
              Verify Identity
            </button>
          </div>
        </form>
      </section>
    );
  }

  return (
    // Gradient background for the Main Dashboard
    <main className="min-h-screen bg-gradient-to-tr from-[#f5f0e6] via-[#e0d7c6] to-[#d6ccb8] pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto space-y-10">
        
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h2 className="text-[10px] font-black text-yellow-800 uppercase tracking-[0.4em]">Intelligence Report</h2>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight">Project Inbound</h1>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/40 backdrop-blur-sm border border-[#cbbfa8] px-6 py-3 rounded-2xl shadow-sm">
              <span className="block text-[9px] font-black text-gray-500 uppercase tracking-widest mb-1">Leads Captured</span>
              <span className="text-2xl font-black text-yellow-900">{leads.length}</span>
            </div>
            <button 
              onClick={() => { sessionStorage.clear(); window.location.reload(); }}
              className="p-4 bg-white/20 hover:bg-red-500 hover:text-white text-gray-400 rounded-2xl border border-[#cbbfa8] transition-all shadow-sm"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </header>

        {/* Glassmorphism Table Container */}
        <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-[2.5rem] shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#d6ccb8]/40 border-b border-[#cbbfa8]/50 text-yellow-900 text-[10px] uppercase font-black tracking-widest">
                  <th className="px-8 py-6">Date</th>
                  <th className="px-8 py-6">Client Identity</th>
                  <th className="px-8 py-6">Sector</th>
                  <th className="px-8 py-6">Capital</th>
                  <th className="px-8 py-6">Briefing</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#cbbfa8]/30">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-white/20 transition-colors group">
                    <td className="px-8 py-6 text-[11px] text-gray-500 font-bold">
                      {new Date(lead.created_at).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </td>
                    <td className="px-8 py-6">
                      <div className="text-sm font-black text-gray-900 group-hover:text-yellow-900 transition-colors">{lead.email}</div>
                    </td>
                    <td className="px-8 py-6">
                      <span className="bg-[#d6ccb8]/60 text-yellow-900 text-[9px] font-black px-3 py-1.5 rounded-lg border border-[#cbbfa8] uppercase">
                        {lead.project_type}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-sm font-mono font-black text-green-800">
                      {lead.budget}
                    </td>
                    <td className="px-8 py-6 max-w-sm">
                      <p className="text-xs text-gray-600 leading-relaxed line-clamp-2 italic">
                        "{lead.details}"
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {leads.length === 0 && (
            <div className="py-32 text-center text-gray-400 italic text-sm font-medium">
              The frequency is silent. No leads detected.
            </div>
          )}
        </div>
      </div>
    </main>
  );
}