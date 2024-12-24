import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export function SecureWallet() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">Secure your wallet</h2>
        <p className="text-muted-foreground">
          Before getting started, watch this short video to learn about your Secret
          Recovery Phrase and how to keep your wallet safe.
        </p>
      </div>

      <AspectRatio ratio={16 / 9} className="bg-muted rounded-lg overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400" />
      </AspectRatio>

      <div className="space-y-4">
        <Button className="w-full">
          Secure my wallet (recommended)
        </Button>
        <Button variant="outline" className="w-full">
          Remind me later (not recommended)
        </Button>
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="font-semibold">What is a Secret Recovery Phrase?</h3>
          <p className="text-sm text-muted-foreground">
            Your Secret Recovery Phrase is a 12-word phrase that is the "master
            key" to your wallet and your funds
          </p>
        </div>

        <div>
          <h3 className="font-semibold">How do I save my Secret Recovery Phrase?</h3>
          <ul className="text-sm text-muted-foreground list-disc list-inside">
            <li>Write down and store in multiple secret places</li>
            <li>Store in a safe deposit box</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">Should I share my Secret Recovery Phrase?</h3>
          <p className="text-sm text-muted-foreground">
            Never, ever share your Secret Recovery Phrase, not even with EPIC Chain!
          </p>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg">
          <p className="text-sm text-blue-800">
            If someone asks for your recovery phrase they are likely trying to scam
            you and steal your wallet funds.
          </p>
        </div>
      </div>
    </div>
  );
}