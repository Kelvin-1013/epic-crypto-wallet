import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { PartyPopper } from "lucide-react";

export function Congratulations() {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 text-center">
      <div className="space-y-2">
        <div className="flex justify-center">
          <PartyPopper className="w-12 h-12 text-wallet-primary" />
        </div>
        <h2 className="text-2xl font-bold">Congratulations!</h2>
        <p className="text-muted-foreground">
          Your wallet is protected and ready to use. You can find your Secret
          Recovery Phrase in Settings {'>>'} Security &amp; Privacy.
        </p>
      </div>

      <div className="space-y-2 text-sm text-muted-foreground">
        <p>
          Keep a reminder of your Secret Recovery Phrase somewhere safe. If you
          lose it, no one can help you get it back. Even worse, you won&apos;t be able
          to access your wallet ever again.{" "}
          <a href="#" className="text-primary hover:underline">
            Learn more
          </a>
        </p>
      </div>

      <div className="space-y-4">
        <Button
          variant="outline"
          className="w-full"
          onClick={() => {
            // Add settings management logic here
          }}
        >
          Manage default privacy settings
        </Button>
        <Button
          className="w-full"
          onClick={() => navigate("/dashboard")}
        >
          Start using EPIC Chain
        </Button>
      </div>

      <div className="text-sm text-muted-foreground">
        <a
          href="https://twitter.com/epicchain"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          Follow us on Twitter
        </a>
      </div>
    </div>
  );
}

export default Congratulations;