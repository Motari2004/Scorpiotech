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
    if (result.success) {
      setIsSubmitted(true);
    } else {
      alert("Database connection error. Please try again.");
    }
  };

  const projectOptions = ["Website", "SaaS", "Automation", "Bot", "Backend"];
  const budgetOptions = ["$20 - $100", "$100 - $500", "$500 - $1k", "$1k - $5k", "$50k+"];

  if (isSubmitted) {
    return (
      /* Reduced pt-32 to pt-12 for mobile to fix the 'big distance' issue */
      <section className="pt-12 md:pt-32 pb-24 px-4 flex justify-center min-h-[80vh] items-center">
        <div className="w-full max-w-md bg-[#e0d7c6]/95 backdrop-blur-md border border-[#cbbfa8] p-8 rounded-3xl shadow-2xl text-center space-y-6 animate-in zoom-in duration-300">
          <div className="w-20 h-20 bg-green-100 text-green-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-black text-gray-900">Success!</h2>
          <p className="text-gray-700 font-medium">We've received your brief. A custom proposal will be sent to:</p>
          <div className="text-[#77581f] font-bold bg-white/50 px-4 py-2 rounded-xl border border-[#cbbfa8] inline-block">
            {formData.email}
          </div>
          <Link 
            href="/"
            className="block w-full bg-gray-900 text-white py-4 rounded-2xl font-bold transition-all hover:opacity-90 mt-4"
          >
            Return Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    /* Removed large top padding to fix the 'too much space' issue */
    <section className="pt-8 md:pt-24 pb-20 px-4 flex flex-col items-center">
      <div className="w-full max-w-md bg-[#e0d7c6]/95 backdrop-blur-md border border-[#cbbfa8] rounded-[2.5rem] shadow-2xl relative overflow-hidden">
        
        {/* Step Indicator Header */}
        <div className="bg-[#d6ccb8]/60 border-b border-[#cbbfa8] px-8 py-5 flex justify-between items-center">
          <span className="text-xs font-black uppercase tracking-widest text-gray-800">
            Step {step} of 3
          </span>
          <div className="flex gap-2">
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={`h-1.5 w-8 rounded-full transition-all duration-500 ${s <= step ? 'bg-[#77581f]' : 'bg-white/30'}`} 
              />
            ))}
          </div>
        </div>

        <div className="p-6 md:p-10 relative">
          {isSubmitting && (
            <div className="absolute inset-0 bg-[#e0d7c6]/95 backdrop-blur-md z-50 flex flex-col items-center justify-center space-y-4">
              <div className="w-12 h-12 border-4 border-[#77581f] border-t-transparent rounded-full animate-spin"></div>
              <p className="text-sm font-bold text-gray-800 animate-pulse">TRANSMITTING BRIEF...</p>
            </div>
          )}

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-gray-900">Project Type</h2>
                <p className="text-sm text-gray-700 font-medium">Select the category that fits best.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {projectOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFormData({ ...formData, projectType: opt })}
                    className={`py-4 px-2 text-sm font-bold rounded-2xl border transition-all active:scale-95 ${
                      formData.projectType === opt 
                      ? "border-[#77581f] bg-[#77581f] text-white shadow-lg shadow-[#77581f]/20" 
                      : "border-[#cbbfa8] text-gray-700 bg-white/40 hover:border-[#77581f]"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <textarea
                className="w-full p-5 text-base rounded-2xl border border-[#cbbfa8] focus:ring-2 focus:ring-[#77581f] focus:border-transparent outline-none resize-none transition-all bg-white/50 placeholder:text-gray-500"
                rows={4}
                placeholder="Ex: I need a bot that scrapes real estate data daily..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              />
              <button 
                disabled={!formData.projectType || !formData.details}
                onClick={nextStep}
                className="w-full bg-gray-900 text-white font-black py-5 rounded-2xl hover:bg-black disabled:opacity-30 transition-all shadow-xl active:scale-[0.98] text-lg"
              >
                Next Step
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-gray-900">Budget Range</h2>
                <p className="text-sm text-gray-700 font-medium">Helps us determine the architecture.</p>
              </div>
              <div className="space-y-3">
                {budgetOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFormData({ ...formData, budget: opt })}
                    className={`w-full py-5 text-base font-bold text-center rounded-2xl border transition-all active:scale-[0.99] ${
                      formData.budget === opt 
                      ? "border-[#77581f] bg-[#77581f] text-white shadow-lg" 
                      : "border-[#cbbfa8] text-gray-700 bg-white/40 hover:border-[#77581f]"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-4 pt-4">
                <button onClick={prevStep} className="text-sm font-black text-gray-500 hover:text-gray-900 px-2">BACK</button>
                <button 
                  disabled={!formData.budget}
                  onClick={nextStep}
                  className="flex-grow bg-gray-900 text-white font-black py-5 rounded-2xl shadow-xl hover:bg-black transition-all text-lg"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
              <div className="space-y-2">
                <h2 className="text-2xl font-black text-gray-900">Final Step</h2>
                <p className="text-sm text-gray-700 font-medium">Where should we send your analysis?</p>
              </div>
              <div className="space-y-4">
                <input
                  type="email"
                  required
                  className="w-full p-5 rounded-2xl border border-[#cbbfa8] focus:ring-2 focus:ring-[#77581f] outline-none transition-all bg-white/50 text-lg placeholder:text-gray-400"
                  placeholder="name@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <div className="bg-[#d6ccb8]/40 p-4 rounded-xl border border-[#cbbfa8]/50">
                   <p className="text-xs text-gray-700 text-center leading-relaxed font-semibold">
                    We will review your project and send a custom technical breakdown within 24 hours.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <button type="button" onClick={prevStep} className="text-sm font-black text-gray-500 hover:text-gray-900 px-2">BACK</button>
                <button 
                  type="submit"
                  className="flex-grow bg-green-700 text-white font-black py-5 rounded-2xl hover:bg-green-800 transition-all shadow-xl active:scale-[0.98] text-lg"
                >
                  Send Request
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}