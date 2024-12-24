import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Eye, Copy } from "lucide-react";

export function RecoveryPhrase() {
  const [revealed, setRevealed] = useState(false);
  const mockPhrase = [
    "voice", "slam", "february", "wonder", "aerobic", "page",
    "shrimp", "repair", "spawn", "hover", "aerobic", "exile"
  ];

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">Write down your Secret Recovery Phrase</h2>
        <p className="text-muted-foreground">
          Write down this 12-word Secret Recovery Phrase and save it in a place
          that you trust and only you can access.
        </p>
      </div>

      <div className="space-y-2">
        <h3 className="font-semibold">Tips:</h3>
        <ul className="text-sm text-muted-foreground list-disc list-inside">
          <li>Write down and store in multiple secret places</li>
          <li>Store in a safe deposit box</li>
        </ul>
      </div>

      {!revealed ? (
        <div className="bg-gray-900 text-white p-8 rounded-lg text-center space-y-4">
          <Eye className="w-6 h-6 mx-auto text-gray-400" />
          <p className="text-sm">Make sure nobody is looking</p>
          <Button
            onClick={() => setRevealed(true)}
            variant="secondary"
            className="w-full"
          >
            Reveal Secret Recovery Phrase
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-3">
            {mockPhrase.map((word, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 border rounded p-2"
              >
                <span className="text-muted-foreground">{index + 1}.</span>
                <span>{word}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setRevealed(false)}
              className="text-primary"
            >
              <Eye className="w-4 h-4 mr-2" />
              Hide seed phrase
            </Button>
            <Button variant="outline" size="sm" className="text-primary">
              <Copy className="w-4 h-4 mr-2" />
              Copy to clipboard
            </Button>
          </div>
        </div>
      )}

      <Button className="w-full" disabled={!revealed}>
        Next
      </Button>
    </div>
  );
}