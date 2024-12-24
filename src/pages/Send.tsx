import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const Send = () => {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");
  const { toast } = useToast();

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock transaction
    toast({
      title: "Transaction Sent",
      description: `Sent ${amount} EPIC to ${address}`,
    });
    setAddress("");
    setAmount("");
  };

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">Send EPIC</h1>
        <p className="text-sm text-muted-foreground">Send EPIC tokens to another address</p>
      </div>
      
      <form onSubmit={handleSend} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="address" className="text-sm font-medium">Recipient Address</label>
          <Input
            id="address"
            placeholder="Enter recipient address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="amount" className="text-sm font-medium">Amount</label>
          <Input
            id="amount"
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
            min="0"
            step="0.000001"
          />
        </div>

        <Button type="submit" className="w-full">
          Send EPIC
        </Button>
      </form>
    </div>
  );
};

export default Send;