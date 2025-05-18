// components/GlowingButton.tsx
import { Button } from "@/components/ui/button";
import "../glow-button.css"

export function GlowingButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="glowing-button-wrapper">
      <Button className="glowing-button">
        {children}
      </Button>
    </div>
  );
}
