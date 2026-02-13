"use client";

import { useState } from "react";
import { saveProjectLead } from "../actions"; // Import the server action

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
    
    // Save to Neon Database via Server Action
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
      <section className="pt-32 pb-24 px-6 flex justify-center">
        <div className="w-full max-w-md bg-[#e0d7c6] border border-[#cbbfa8] p-8 rounded-3xl shadow-2xl text-center space-y-6 animate-in zoom-in duration-300">
          <div className="w-16 h-16 bg-white/50 text-green-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">Request Sent!</h2>
          <p className="text-gray-700 text-sm">A custom proposal and feedback will be sent to:</p>
          <p className="text-yellow-900 font-bold bg-[#d6ccb8] px-3 py-1 rounded-lg border border-[#cbbfa8] inline-block">
            {formData.email}
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="block w-full text-sm text-gray-600 hover:text-gray-900 transition-colors pt-4 font-medium"
          >
            ← Back to Home
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="w-full max-w-md bg-[#e0d7c6] border border-[#cbbfa8] rounded-3xl shadow-xl relative overflow-hidden">
        
        {/* Progress & Step Indicator Header */}
        <div className="bg-[#d6ccb8]/50 border-b border-[#cbbfa8] px-6 py-4 flex justify-between items-center">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-900/60">
            Step {step} / 3
          </span>
          <div className="flex gap-1">
            {[1, 2, 3].map((s) => (
              <div 
                key={s} 
                className={`h-1 w-6 rounded-full transition-all duration-300 ${s <= step ? 'bg-yellow-800' : 'bg-white/40'}`} 
              />
            ))}
          </div>
        </div>

        <div className="p-6 md:p-8 relative">
          {isSubmitting && (
            <div className="absolute inset-0 bg-[#e0d7c6]/90 backdrop-blur-sm z-50 flex flex-col items-center justify-center space-y-3">
              <div className="w-10 h-10 border-4 border-yellow-800 border-t-transparent rounded-full animate-spin"></div>
              <p className="text-xs font-bold text-yellow-900 uppercase tracking-tighter">Storing Requirements...</p>
            </div>
          )}

          {/* STEP 1 */}
          {step === 1 && (
            <div className="space-y-5 animate-in fade-in slide-in-from-bottom-2">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-gray-900">Project Type</h2>
                <p className="text-xs text-gray-700 font-medium">What are we building today?</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {projectOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFormData({ ...formData, projectType: opt })}
                    className={`py-3 px-2 text-xs rounded-xl border transition-all ${
                      formData.projectType === opt 
                      ? "border-yellow-800 bg-[#d6ccb8] text-yellow-900 font-bold shadow-sm" 
                      : "border-[#cbbfa8] hover:border-yellow-800 text-gray-700 bg-white/20"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <textarea
                className="w-full p-4 text-sm rounded-xl border border-[#cbbfa8] focus:border-yellow-800 outline-none resize-none transition-all bg-white/30 placeholder:text-gray-500"
                rows={3}
                placeholder="Briefly describe key features..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
              />
              <button 
                disabled={!formData.projectType || !formData.details}
                onClick={nextStep}
                className="w-full bg-yellow-800 text-white font-bold py-4 rounded-xl hover:bg-yellow-900 disabled:opacity-50 transition-all shadow-md active:scale-[0.98]"
              >
                Next
              </button>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="space-y-5 animate-in fade-in slide-in-from-right-2">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-gray-900">Budget Range</h2>
                <p className="text-xs text-gray-700 font-medium">Helps us select the best tech stack.</p>
              </div>
              <div className="space-y-2">
                {budgetOptions.map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setFormData({ ...formData, budget: opt })}
                    className={`w-full py-4 text-sm text-center rounded-xl border transition-all ${
                      formData.budget === opt 
                      ? "border-yellow-800 bg-[#d6ccb8] text-yellow-900 font-bold shadow-sm" 
                      : "border-[#cbbfa8] hover:border-yellow-800 text-gray-700 bg-white/20"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <button onClick={prevStep} className="text-xs font-bold text-gray-600 hover:text-gray-900">Back</button>
                <button 
                  disabled={!formData.budget}
                  onClick={nextStep}
                  className="flex-grow bg-yellow-800 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-yellow-900 transition-all"
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <form onSubmit={handleSubmit} className="space-y-5 animate-in fade-in slide-in-from-right-2">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-gray-900">Contact Info</h2>
                <p className="text-xs text-gray-700 font-medium">Where should we send the proposal?</p>
              </div>
              <div className="space-y-4">
                <input
                  type="email"
                  required
                  className="w-full p-4 rounded-xl border border-[#cbbfa8] focus:border-yellow-800 outline-none transition-all bg-white/30 text-sm placeholder:text-gray-500"
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <p className="text-[10px] text-gray-600 text-center leading-tight font-medium">
                  We'll analyze your requirements and send a custom proposal and feedback on your project.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <button type="button" onClick={prevStep} className="text-xs font-bold text-gray-600 hover:text-gray-900">Back</button>
                <button 
                  type="submit"
                  className="flex-grow bg-green-700 text-white font-bold py-4 rounded-xl hover:bg-green-800 transition-all shadow-lg active:scale-[0.98]"
                >
                  Get My Proposal
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}