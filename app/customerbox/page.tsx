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

  const projectOptions = ["Website", "SaaS", "Automation", "Bot", "Backend"];
  const budgetOptions = ["$20 - $100", "$100 - $500", "$500 - $1k", "$1k - $5k"];

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 flex items-center justify-center p-4 z-50">
        <div className="w-full max-w-xs bg-[#e0d7c6] p-6 rounded-[2rem] shadow-2xl text-center space-y-4">
          <h2 className="text-xl font-black text-gray-900">Request Sent!</h2>
          <Link href="/" className="block w-full bg-gray-900 text-white py-3 rounded-xl font-bold text-sm">Return Home</Link>
        </div>
      </div>
    );
  }

  return (
    /* 'fixed inset-0' ignores all padding from your layout/main tags 
       and centers the box perfectly in the viewport.
    */
    <div className="fixed inset-0 flex items-center justify-center px-4 py-2 z-40 pointer-events-none">
      <div className="w-full max-w-sm bg-[#e0d7c6]/95 backdrop-blur-md border border-[#cbbfa8] rounded-[2rem] shadow-2xl relative overflow-hidden pointer-events-auto">
        
        {/* Very Compact Header */}
        <div className="bg-[#d6ccb8]/60 border-b border-[#cbbfa8] px-5 py-2 flex justify-between items-center">
          <span className="text-[9px] font-black uppercase text-gray-600">Step {step}/3</span>
          <div className="flex gap-1">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`h-1 w-5 rounded-full ${s <= step ? 'bg-[#77581f]' : 'bg-white/30'}`} />
            ))}
          </div>
        </div>

        <div className="p-5">
          {isSubmitting && (
            <div className="absolute inset-0 bg-[#e0d7c6]/95 z-50 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-[#77581f] border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-3 animate-in fade-in zoom-in-95">
              <h2 className="text-lg font-black text-gray-900">Project Type</h2>
              <div className="grid grid-cols-2 gap-2">
                {projectOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFormData({ ...formData, projectType: opt })}
                    className={`py-2.5 text-[11px] font-bold rounded-lg border transition-all ${
                      formData.projectType === opt ? "bg-[#77581f] text-white" : "bg-white/40 text-gray-700 border-[#cbbfa8]"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <textarea
                className="w-full p-3 text-xs rounded-xl border border-[#cbbfa8] bg-white/50 outline-none h-20 resize-none"
                placeholder="What are we building?"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              />
              <button disabled={!formData.projectType || !formData.details} onClick={nextStep} className="w-full bg-gray-900 text-white font-bold py-3.5 rounded-xl text-sm disabled:opacity-30">
                Next
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-3 animate-in fade-in slide-in-from-right-4">
              <h2 className="text-lg font-black text-gray-900">Budget</h2>
              <div className="grid grid-cols-1 gap-1.5">
                {budgetOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFormData({ ...formData, budget: opt })}
                    className={`py-3.5 text-xs font-bold rounded-lg border ${
                      formData.budget === opt ? "bg-[#77581f] text-white" : "bg-white/40 text-gray-700 border-[#cbbfa8]"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <div className="flex gap-2 pt-2">
                <button onClick={prevStep} className="text-[10px] font-black text-gray-500 uppercase px-2">Back</button>
                <button disabled={!formData.budget} onClick={nextStep} className="flex-grow bg-gray-900 text-white font-bold py-3.5 rounded-xl text-sm">Continue</button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-3 animate-in fade-in slide-in-from-right-4">
              <h2 className="text-lg font-black text-gray-900">Contact</h2>
              <input
                type="email"
                required
                className="w-full p-3 rounded-xl border border-[#cbbfa8] bg-white/50 text-sm"
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <p className="text-[9px] text-gray-600 text-center px-4 font-bold uppercase tracking-tighter">Fast response guaranteed.</p>
              <div className="flex gap-2 pt-2">
                <button type="button" onClick={prevStep} className="text-[10px] font-black text-gray-500 uppercase px-2">Back</button>
                <button type="submit" className="flex-grow bg-green-700 text-white font-black py-3.5 rounded-xl text-sm">Send Brief</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}