import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  const { toast } = useToast();
  const [notifications, setNotifications] = useState(true);
  const [network, setNetwork] = useState("mainnet");

  const handleNetworkChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNetwork(e.target.value);
    toast({
      title: "Network Changed",
      description: `Switched to ${e.target.value}`,
    });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-sm text-muted-foreground">Manage your wallet settings</p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium">Network</label>
          <select
            value={network}
            onChange={handleNetworkChange}
            className="w-full p-2 rounded-md border border-input bg-background"
          >
            <option value="mainnet">EPIC Mainnet</option>
            <option value="testnet">EPIC Testnet</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Notifications</p>
            <p className="text-sm text-muted-foreground">Receive transaction notifications</p>
          </div>
          <Switch
            checked={notifications}
            onCheckedChange={setNotifications}
          />
        </div>

        <Button
          variant="destructive"
          className="w-full"
          onClick={() => {
            toast({
              title: "Wallet Reset",
              description: "Your wallet has been reset",
            });
          }}
        >
          Reset Wallet
        </Button>
      </div>
    </div>
  );
};

export default Settings;