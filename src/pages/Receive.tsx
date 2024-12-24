import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Receive = () => {
  const { toast } = useToast();
  // Mock wallet address
  const walletAddress = "epic1qp9ls7mg6x...3qk8v";

  const copyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    toast({
      title: "Address Copied",
      description: "Wallet address copied to clipboard",
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">Receive EPIC</h1>
        <p className="text-sm text-muted-foreground">Your EPIC wallet address</p>
      </div>

      <div className="p-4 bg-muted rounded-lg">
        <p className="text-sm font-mono break-all">{walletAddress}</p>
      </div>

      <Button onClick={copyAddress} className="w-full">
        Copy Address
      </Button>
    </div>
  );
};

export default Receive;