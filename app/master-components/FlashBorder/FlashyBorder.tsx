import * as React from "react";
import { cn } from "~/lib/utils";

function FlashyBorder({ children }: { children: React.ReactNode }) {
  return (
    <Card className="relative group overflow-hidden rounded-lg">
      <CardContent className="p-1 bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400  bg-300% animate-gradient">
        {children}
      </CardContent>
    </Card>
  );
}

export default FlashyBorder;

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
));
Card.displayName = "Card";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";
