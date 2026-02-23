import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-[#0b5fff] text-white hover:bg-[#0044cc] focus-visible:ring-[#0b5fff] shadow-sm hover:shadow-md",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 focus-visible:ring-red-500",
        outline:
          "border-2 border-[#0b5fff] text-[#0b5fff] bg-transparent hover:bg-[#0b5fff] hover:text-white focus-visible:ring-[#0b5fff]",
        secondary:
          "bg-[#f8fafc] text-[#0f172a] hover:bg-[#e2e8f0] focus-visible:ring-slate-300 border border-[#e2e8f0]",
        ghost:
          "text-[#0f172a] hover:bg-[#f8fafc] focus-visible:ring-slate-300",
        link:
          "text-[#0b5fff] underline-offset-4 hover:underline focus-visible:ring-[#0b5fff]",
        accent:
          "bg-[#10b981] text-white hover:bg-[#059669] focus-visible:ring-[#10b981] shadow-sm hover:shadow-md",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-12 rounded-xl px-8 text-base",
        xl: "h-14 rounded-xl px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
