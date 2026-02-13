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
      <section className="h-[100dvh] w-full flex items-center justify-center px-4 overflow-hidden">
        <div className="w-full max-w-sm bg-[#e0d7c6] p-8 rounded-[2rem] shadow-2xl text-center space-y-4">
          <div className="w-16 h-16 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
          </div>
          <h2 className="text-2xl font-black text-gray-900">Sent!</h2>
          <Link href="/" className="block w-full bg-gray-900 text-white py-4 rounded-xl font-bold">Return Home</Link>
        </div>
      </section>
    );
  }

  return (
    /* h-[100dvh] locks the section to exactly one screen height */
    <section className="h-[100dvh] w-full flex items-center justify-center px-4 overflow-hidden pt-12">
      <div className="w-full max-w-sm bg-[#e0d7c6]/95 backdrop-blur-md border border-[#cbbfa8] rounded-[2rem] shadow-2xl relative overflow-hidden">
        
        {/* Compact Header */}
        <div className="bg-[#d6ccb8]/60 border-b border-[#cbbfa8] px-6 py-3 flex justify-between items-center">
          <span className="text-[10px] font-black uppercase text-gray-600">Step {step}/3</span>
          <div className="flex gap-1.5">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`h-1 w-6 rounded-full ${s <= step ? 'bg-[#77581f]' : 'bg-white/30'}`} />
            ))}
          </div>
        </div>

        <div className="p-5 md:p-8">
          {isSubmitting && (
            <div className="absolute inset-0 bg-[#e0d7c6]/95 z-50 flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-[#77581f] border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-4 animate-in fade-in zoom-in-95">
              <h2 className="text-xl font-black text-gray-900 leading-none">Project Type</h2>
              <div className="grid grid-cols-2 gap-2">
                {projectOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFormData({ ...formData, projectType: opt })}
                    className={`py-3 text-xs font-bold rounded-xl border transition-all ${
                      formData.projectType === opt ? "bg-[#77581f] text-white" : "bg-white/40 text-gray-700 border-[#cbbfa8]"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <textarea
                className="w-full p-4 text-sm rounded-xl border border-[#cbbfa8] bg-white/50 outline-none h-24"
                placeholder="What are we building?"
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              />
              <button disabled={!formData.projectType || !formData.details} onClick={nextStep} className="w-full bg-gray-900 text-white font-bold py-4 rounded-xl disabled:opacity-30">
                Next
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-4 animate-in fade-in slide-in-from-right-4">
              <h2 className="text-xl font-black text-gray-900">Budget</h2>
              <div className="grid grid-cols-1 gap-2">
                {budgetOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFormData({ ...formData, budget: opt })}
                    className={`py-4 text-sm font-bold rounded-xl border ${
                      formData.budget === opt ? "bg-[#77581f] text-white" : "bg-white/40 text-gray-700 border-[#cbbfa8]"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <button onClick={prevStep} className="text-xs font-bold text-gray-500 uppercase">Back</button>
                <button disabled={!formData.budget} onClick={nextStep} className="flex-grow bg-gray-900 text-white font-bold py-4 rounded-xl">Continue</button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-4 animate-in fade-in slide-in-from-right-4">
              <h2 className="text-xl font-black text-gray-900">Contact</h2>
              <input
                type="email"
                required
                className="w-full p-4 rounded-xl border border-[#cbbfa8] bg-white/50 text-base"
                placeholder="email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <p className="text-[10px] text-gray-600 text-center px-4 font-medium">We'll send your custom technical breakdown within 24 hours.</p>
              <div className="flex gap-3">
                <button type="button" onClick={prevStep} className="text-xs font-bold text-gray-500 uppercase">Back</button>
                <button type="submit" className="flex-grow bg-green-700 text-white font-black py-4 rounded-xl">Send Request</button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}