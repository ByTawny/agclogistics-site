import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase transition-colors",
  {
    variants: {
      variant: {
        default: "bg-[#eff6ff] text-[#1d4ed8]",
        accent: "bg-[#ecfdf5] text-[#065f46]",
        secondary: "bg-[#f8fafc] text-[#475569] border border-[#e2e8f0]",
        outline: "border border-[#0b5fff] text-[#0b5fff]",
        white: "bg-white/20 text-white border border-white/30",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
