"use client"

import { MailIcon, CheckCircle2Icon } from "lucide-react"
import { Button } from "@/components/ui/button"

interface VerifyEmailScreenProps {
  onBackToLogin: () => void
}

export function VerifyEmailScreen({ onBackToLogin }: VerifyEmailScreenProps) {
  return (
    <div className="flex flex-col items-center text-center py-6 space-y-6">
      <div className="relative">
        <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
          <MailIcon className="w-10 h-10 text-primary" />
        </div>
        <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
          <CheckCircle2Icon className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-foreground">
          Check your email
        </h3>
        <p className="text-muted-foreground max-w-sm">
          We&apos;ve sent you a verification link. Please verify your email
          before logging in.
        </p>
      </div>

      <div className="w-full space-y-3 pt-2">
        <Button variant="outline" className="w-full h-11" onClick={onBackToLogin}>
          Back to login
        </Button>
        <p className="text-sm text-muted-foreground">
          Didn&apos;t receive the email?{" "}
          <button className="text-primary font-medium hover:underline">
            Resend
          </button>
        </p>
      </div>
    </div>
  )
}
