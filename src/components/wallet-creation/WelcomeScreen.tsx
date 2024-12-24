import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Link } from "react-router-dom";

export function WelcomeScreen() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="space-y-6 text-center">
      <h2 className="text-2xl font-bold">Let's get started</h2>
      <p className="text-muted-foreground">
        Trusted by millions, EPIC Chain Wallet is a secure wallet making the world
        of web3 accessible to all.
      </p>

      <div className="aspect-square max-w-[200px] mx-auto">
        <img
          src="/placeholder.svg"
          alt="EPIC Chain Logo"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex items-center space-x-2 justify-center">
        <Checkbox
          id="terms"
          checked={agreed}
          onCheckedChange={(checked) => setAgreed(checked as boolean)}
        />
        <label
          htmlFor="terms"
          className="text-sm text-muted-foreground cursor-pointer"
        >
          I agree to EPIC Chain's{" "}
          <Link to="/terms" className="text-primary hover:underline">
            Terms of use
          </Link>
        </label>
      </div>

      <div className="space-y-3">
        <Button
          className="w-full"
          disabled={!agreed}
          onClick={() => {
            // Navigate to create password step
          }}
        >
          Create a new wallet
        </Button>
        <Button variant="outline" className="w-full">
          Import an existing wallet
        </Button>
      </div>
    </div>
  );
}