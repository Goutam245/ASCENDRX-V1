import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-accent",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-cyan to-cyan-glow text-navy-deep shadow-button hover:shadow-glow hover:scale-105 active:scale-100",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border-2 border-cyan/50 bg-transparent text-cyan hover:bg-cyan/10 hover:border-cyan hover:shadow-glow-sm",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: 
          "text-foreground hover:bg-white/5 hover:text-cyan",
        link: 
          "text-cyan underline-offset-4 hover:underline",
        hero:
          "bg-gradient-to-r from-cyan via-cyan-glow to-cyan text-navy-deep font-bold shadow-button hover:shadow-glow-lg hover:scale-105 active:scale-100 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
        "hero-outline":
          "border-2 border-white/30 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 hover:border-cyan/50 hover:text-cyan hover:shadow-glow-sm",
        gold:
          "bg-gradient-to-r from-gold to-gold-light text-navy-deep font-bold shadow-glow-gold hover:scale-105 active:scale-100",
        purple:
          "bg-gradient-to-r from-purple to-purple-deep text-white font-bold shadow-glow-purple hover:scale-105 active:scale-100",
        glass:
          "bg-white/10 backdrop-blur-xl border border-white/20 text-white hover:bg-white/20 hover:border-cyan/30",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
