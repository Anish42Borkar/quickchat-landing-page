"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { SignupForm } from "@/components/signup-form"
import { LoginForm } from "@/components/login-form"
import { VerifyEmailScreen } from "@/components/verify-email-screen"

type AuthView = "login" | "signup" | "verify"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialView?: "login" | "signup"
}

export function AuthModal({
  isOpen,
  onClose,
  initialView = "login",
}: AuthModalProps) {
  const [view, setView] = useState<AuthView>(initialView)

  useEffect(() => {
    if (isOpen) {
      setView(initialView)
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen, initialView])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    if (isOpen) {
      window.addEventListener("keydown", handleEscape)
    }
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  const handleSignupSuccess = () => {
    setView("verify")
  }

  const handleLoginSuccess = () => {
    console.log("User logged in successfully!")
    onClose()
  }

  const handleBackToLogin = () => {
    setView("login")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md mx-4 bg-background rounded-xl border border-border p-6 shadow-xl animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
        >
          <X className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </button>

        {view === "login" && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">
                Welcome back
              </h2>
              <p className="text-sm text-muted-foreground">
                Sign in to continue to Pulse
              </p>
            </div>
            <LoginForm onSuccess={handleLoginSuccess} />
            <div className="text-center text-sm">
              <span className="text-muted-foreground">
                Don&apos;t have an account?{" "}
              </span>
              <button
                className="text-foreground font-medium hover:underline"
                onClick={() => setView("signup")}
              >
                Sign up
              </button>
            </div>
          </div>
        )}

        {view === "signup" && (
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-semibold text-foreground">
                Create an account
              </h2>
              <p className="text-sm text-muted-foreground">
                Get started with Pulse for free
              </p>
            </div>
            <SignupForm onSuccess={handleSignupSuccess} />
            <div className="text-center text-sm">
              <span className="text-muted-foreground">
                Already have an account?{" "}
              </span>
              <button
                className="text-foreground font-medium hover:underline"
                onClick={() => setView("login")}
              >
                Sign in
              </button>
            </div>
          </div>
        )}

        {view === "verify" && (
          <VerifyEmailScreen onBackToLogin={handleBackToLogin} />
        )}
      </div>
    </div>
  )
}
