"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  ChevronDown,
  MessageSquare,
  ArrowRight,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface FormState {
  name: string;
  email: string;
  department: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: "",
  email: "",
  department: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    // Client-side quick validation
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      setErrorMessage("Please enter your full name.");
      return;
    }
    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      setErrorMessage("Message must be at least 10 characters long.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.department || "General Inquiry",
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error ||
            "Unable to submit message at this time. Please send an email directly to crescentcluboffinance26@gmail.com."
        );
      }

      setSuccessMessage(
        data.message ||
          "Thank you! Your message has been received. Our team will review your inquiry shortly."
      );
      setFormData(INITIAL_FORM);
    } catch (err: unknown) {
      const msg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while sending your message.";
      setErrorMessage(msg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="send-message"
      className="relative rounded-[28px] sm:rounded-[32px] bg-[#14243A] text-[#F7F5EF] p-8 sm:p-10 md:p-11 border border-[#1E334D] shadow-2xl overflow-hidden flex flex-col justify-between"
    >
      {/* Decorative Gold Architectural Grid Line Art in bottom right corner */}
      <div
        className="absolute -bottom-4 -right-4 w-72 h-72 opacity-20 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 280 280"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#B69A58]"
        >
          {/* Subtle curved dynamic financial contours */}
          <path
            d="M 280 20 C 200 60, 160 140, 120 280"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M 280 70 C 220 100, 180 170, 150 280"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
          {/* Architectural facade silhouette lines */}
          <line x1="80" y1="280" x2="80" y2="200" stroke="currentColor" strokeWidth="1" />
          <line x1="120" y1="280" x2="120" y2="180" stroke="currentColor" strokeWidth="1" />
          <line x1="160" y1="280" x2="160" y2="160" stroke="currentColor" strokeWidth="1" />
          <line x1="200" y1="280" x2="200" y2="140" stroke="currentColor" strokeWidth="1" />
          <line x1="240" y1="280" x2="240" y2="120" stroke="currentColor" strokeWidth="1" />
          <rect x="130" y="210" width="18" height="24" stroke="currentColor" strokeWidth="1" />
          <rect x="170" y="190" width="18" height="24" stroke="currentColor" strokeWidth="1" />
          <rect x="210" y="170" width="18" height="24" stroke="currentColor" strokeWidth="1" />
          <rect x="170" y="230" width="18" height="24" stroke="currentColor" strokeWidth="1" />
          <rect x="210" y="210" width="18" height="24" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* Header Info matching Image 1 */}
      <div className="relative space-y-2 mb-6">
        <span className="text-[11px] font-bold tracking-widest text-[#B69A58] uppercase block">
          GET IN TOUCH
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#F7F5EF] leading-tight">
          Drop us a <span className="text-[#B69A58] font-normal italic">Message</span>
        </h2>
        <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed pt-1">
          Have a question, feedback, or just want to say hello? We’re here to help.
        </p>
      </div>

      {/* Form or Success State */}
      {successMessage ? (
        <div className="relative rounded-2xl bg-emerald-950/40 border border-emerald-500/40 p-6 text-emerald-100 space-y-4 my-auto">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-6 w-6 text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-bold text-white">
                Message Sent
              </h3>
              <p className="text-xs sm:text-sm text-emerald-200/90 leading-relaxed">
                {successMessage}
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => setSuccessMessage(null)}
            className="border-emerald-500/50 text-white hover:bg-emerald-800/40 text-xs mt-2"
          >
            Send Another Message
          </Button>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="relative space-y-4"
          noValidate
        >
          {errorMessage && (
            <div
              role="alert"
              className="rounded-xl bg-rose-950/50 border border-rose-500/40 p-3 text-xs text-rose-200 flex items-start gap-2.5"
            >
              <AlertCircle className="h-4 w-4 text-rose-400 shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Name Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="contact-name"
              className="text-xs font-medium text-[#F7F5EF] block"
            >
              Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                <User className="h-4 w-4" />
              </div>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                disabled={isSubmitting}
                value={formData.name}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full h-11 pl-10 pr-3.5 rounded-xl bg-[#0F1D30] text-[#F7F5EF] text-xs sm:text-sm border border-white/10 focus:border-[#B69A58] focus:ring-1 focus:ring-[#B69A58] placeholder:text-[#64748B] transition-colors disabled:opacity-50"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="contact-email"
              className="text-xs font-medium text-[#F7F5EF] block"
            >
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                <Mail className="h-4 w-4" />
              </div>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                disabled={isSubmitting}
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full h-11 pl-10 pr-3.5 rounded-xl bg-[#0F1D30] text-[#F7F5EF] text-xs sm:text-sm border border-white/10 focus:border-[#B69A58] focus:ring-1 focus:ring-[#B69A58] placeholder:text-[#64748B] transition-colors disabled:opacity-50"
              />
            </div>
          </div>

          {/* Subject / Department Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="contact-department"
              className="text-xs font-medium text-[#F7F5EF] block"
            >
              Subject / Department
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#64748B]">
                <User className="h-4 w-4" />
              </div>
              <select
                id="contact-department"
                name="department"
                disabled={isSubmitting}
                value={formData.department}
                onChange={handleChange}
                className="w-full h-11 pl-10 pr-10 rounded-xl bg-[#0F1D30] text-[#F7F5EF] text-xs sm:text-sm border border-white/10 focus:border-[#B69A58] focus:ring-1 focus:ring-[#B69A58] transition-colors disabled:opacity-50 appearance-none cursor-pointer"
              >
                <option value="" className="bg-[#0F1D30] text-[#94A3B8]">
                  Select Department
                </option>
                <option value="General Inquiries" className="bg-[#0F1D30] text-white">
                  General Inquiries
                </option>
                <option value="Research & Trading" className="bg-[#0F1D30] text-white">
                  Research & Trading
                </option>
                <option value="Technology & Quant" className="bg-[#0F1D30] text-white">
                  Technology & Quant
                </option>
                <option value="Events & Operations" className="bg-[#0F1D30] text-white">
                  Events & Operations
                </option>
                <option value="Corporate Relations" className="bg-[#0F1D30] text-white">
                  Corporate Relations
                </option>
              </select>
              <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-[#64748B]">
                <ChevronDown className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div className="space-y-1.5">
            <label
              htmlFor="contact-message"
              className="text-xs font-medium text-[#F7F5EF] block"
            >
              Message
            </label>
            <div className="relative">
              <div className="absolute top-3 left-3.5 pointer-events-none text-[#64748B]">
                <MessageSquare className="h-4 w-4" />
              </div>
              <textarea
                id="contact-message"
                name="message"
                rows={3}
                required
                disabled={isSubmitting}
                value={formData.message}
                onChange={handleChange}
                placeholder="Your idea or message..."
                className="w-full pl-10 pr-3.5 py-2.5 rounded-xl bg-[#0F1D30] text-[#F7F5EF] text-xs sm:text-sm border border-white/10 focus:border-[#B69A58] focus:ring-1 focus:ring-[#B69A58] placeholder:text-[#64748B] transition-colors resize-none disabled:opacity-50"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-11 sm:h-12 bg-[#B69A58] hover:bg-[#a68a48] text-[#14243A] font-bold text-xs sm:text-sm rounded-xl shadow-md hover:shadow-lg transition-all inline-flex items-center justify-center gap-2 cursor-pointer disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </form>
      )}
    </div>
  );
}
