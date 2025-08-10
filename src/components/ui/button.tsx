import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/src/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring/30 focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-primary/90 via-primary to-primary/80 text-primary-foreground shadow-lg hover:shadow-xl hover:scale-105 hover:from-primary hover:to-primary/90 border border-primary/20 backdrop-blur-sm",
        destructive:
          "bg-gradient-to-br from-destructive/90 via-destructive to-destructive/80 text-white shadow-lg hover:shadow-xl hover:scale-105 hover:from-destructive hover:to-destructive/90 border border-destructive/20 backdrop-blur-sm",
        outline:
          "bg-gradient-to-br from-background/80 via-background/60 to-background/80 text-foreground shadow-lg hover:shadow-xl hover:scale-105 hover:from-background/90 hover:to-background/70 border border-border/50 backdrop-blur-sm hover:border-border/80",
        secondary:
          "bg-gradient-to-br from-secondary/90 via-secondary to-secondary/80 text-secondary-foreground shadow-lg hover:shadow-xl hover:scale-105 hover:from-secondary hover:to-secondary/90 border border-secondary/20 backdrop-blur-sm",
        ghost:
          "bg-gradient-to-br from-transparent via-accent/20 to-transparent text-foreground hover:from-accent/30 hover:via-accent/40 hover:to-accent/30 border border-transparent hover:border-accent/30 backdrop-blur-sm",
        link: "text-primary underline-offset-4 hover:underline bg-transparent shadow-none hover:scale-105",
      },
      size: {
        default: "h-10 px-6 py-2.5 has-[>svg]:px-4",
        sm: "h-9 rounded-xl gap-1.5 px-4 has-[>svg]:px-3",
        lg: "h-12 rounded-2xl px-8 has-[>svg]:px-6",
        icon: "size-10 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {/* Liquid glass shine effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      {props.children}
    </Comp>
  )
}

export { Button, buttonVariants }
