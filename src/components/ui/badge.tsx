import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold font-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow",
        outline: 
          "text-foreground border-border",
        cyan:
          "border-cyan/30 bg-cyan/10 text-cyan",
        purple:
          "border-purple/30 bg-purple/10 text-purple",
        gold:
          "border-gold/30 bg-gold/10 text-gold",
        success:
          "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
        glass:
          "border-white/20 bg-white/10 text-white backdrop-blur-sm",
        purity:
          "border-cyan/50 bg-gradient-to-r from-cyan/20 to-cyan/10 text-cyan font-mono",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
