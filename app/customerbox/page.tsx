"use client";

import { useState } from "react";
import { saveProjectLead } from "../actions"; 
import Link from "next/link";

export default function CustomerBoxPage() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    projectType: "",
    details: "",
    budget: "",
    email: "",
  });

  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => s - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const result = await saveProjectLead(formData);
    setIsSubmitting(false);
    if (result.success) setIsSubmitted(true);
  };

  // Expanded Professional List
  const projectOptions = [
    "Website", 
    "SaaS", 
    "Automation", 
    "Telegram Bot", 
    "WhatsApp Bot", 
    "E-commerce Store",
    "Personalized AI Chatbot",
    "Scheduling System", 
    "News/Media Portal",
    "CRM",
    "Community Forum",
    "Internal Business Tools",
    "Linguistic Tools",
    "Data Scraper",
    "Inventory Management", 
    "API Solution"
    
  ];
  
  const budgetOptions = ["$20 - $100", "$100 - $500", "$500 - $1k", "$1k - $5k+"];

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-black/20 backdrop-blur-sm">
        <div className="w-full max-w-xs bg-[#e0d7c6] p-8 rounded-[2rem] shadow-2xl text-center space-y-4 animate-in zoom-in-95 duration-300">
          <h2 className="text-2xl font-black text-gray-900">Success!</h2>
          <p className="text-sm text-gray-700 font-medium leading-tight">Your brief has been received. We will analyze it shortly.</p>
          <Link href="/" className="block w-full bg-gray-900 text-white py-4 rounded-2xl font-bold text-sm">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 h-[100dvh] w-full flex items-center justify-center px-4 z-40 pointer-events-none">
      
      <div className="w-full max-w-sm bg-[#e0d7c6]/95 backdrop-blur-md border border-[#cbbfa8] rounded-[2.5rem] shadow-2xl relative overflow-hidden pointer-events-auto">
        
        {/* Progress Header */}
        <div className="bg-[#d6ccb8]/60 border-b border-[#cbbfa8] px-6 py-3 flex justify-between items-center">
          <span className="text-[10px] font-black uppercase tracking-tighter text-gray-600">Step {step} of 3</span>
          <div className="flex gap-1.5">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`h-1 w-6 rounded-full transition-all duration-300 ${s <= step ? 'bg-[#77581f]' : 'bg-white/30'}`} />
            ))}
          </div>
        </div>

        <div className="p-6">
          {isSubmitting && (
            <div className="absolute inset-0 bg-[#e0d7c6]/95 z-50 flex flex-col items-center justify-center space-y-2">
              <div className="w-10 h-10 border-4 border-[#77581f] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-[10px] font-black text-[#77581f] animate-pulse">TRANSMITTING...</p>
            </div>
          )}

          {/* STEP 1: Project Type Selection */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
              <h2 className="text-xl font-black text-gray-900">Project Type</h2>
              
              {/* Added h-48 and overflow-y-auto so the list doesn't break the box height */}
              <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto pr-1 custom-scrollbar">
                {projectOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFormData({ ...formData, projectType: opt })}
                    className={`py-3 text-[10px] md:text-xs font-bold rounded-xl border transition-all active:scale-95 ${
                      formData.projectType === opt ? "bg-[#77581f] text-white border-[#77581f] shadow-lg" : "bg-white/40 text-gray-700 border-[#cbbfa8]"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>

              <textarea
                className="w-full p-4 text-sm rounded-xl border border-[#cbbfa8] bg-white/50 outline-none h-20 resize-none focus:border-[#77581f] transition-all"
                placeholder="Tell us a little more about your needs..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              />
              <button 
                disabled={!formData.projectType || !formData.details} 
                onClick={nextStep} 
                className="w-full bg-gray-900 text-white font-black py-4 rounded-2xl text-sm disabled:opacity-30 active:scale-[0.98] transition-transform"
              >
                Next
              </button>
            </div>
          )}

          {/* STEP 2: Budget */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-xl font-black text-gray-900">Budget Range</h2>
              <div className="grid grid-cols-1 gap-2">
                {budgetOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFormData({ ...formData, budget: opt })}
                    className={`py-4 text-sm font-bold rounded-xl border transition-all active:scale-[0.99] ${
                      formData.budget === opt ? "bg-[#77581f] text-white border-[#77581f]" : "bg-white/40 text-gray-700 border-[#cbbfa8]"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <div className="flex gap-3 pt-2">
                <button onClick={prevStep} className="text-xs font-black text-gray-500 uppercase px-4">Back</button>
                <button 
                  disabled={!formData.budget} 
                  onClick={nextStep} 
                  className="flex-grow bg-gray-900 text-white font-black py-4 rounded-2xl text-sm shadow-xl"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Email */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-xl font-black text-gray-900">Contact Info</h2>
              <input
                type="email"
                required
                className="w-full p-4 rounded-xl border border-[#cbbfa8] bg-white/50 text-base focus:border-[#77581f] outline-none"
                placeholder="email@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <div className="bg-white/20 p-3 rounded-lg border border-[#cbbfa8]/30">
                <p className="text-[10px] text-gray-600 text-center font-bold uppercase leading-tight">
                   Our engineering team will analyze your project data. We will reach out via email with our feedback and recommended next steps.
                </p>
              </div>
              <div className="flex gap-3 pt-2">
                <button type="button" onClick={prevStep} className="text-xs font-black text-gray-500 uppercase px-4">Back</button>
                <button type="submit" className="flex-grow bg-green-700 text-white font-black py-4 rounded-2xl text-sm shadow-lg active:scale-95 transition-transform">
                  Send Brief
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}