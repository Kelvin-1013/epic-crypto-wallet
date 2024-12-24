import { Copy, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const WalletDashboard = () => {
  const networks = [
    { name: "EPIC Mainnet", id: "epic-mainnet" },
    { name: "Ethereum", id: "ethereum" },
    { name: "Polygon", id: "polygon" },
  ];

  const mockTransactions = [
    {
      id: 1,
      type: "Received",
      amount: "100 EPIC",
      from: "0x1234...5678",
      date: "2024-02-20",
    },
    {
      id: 2,
      type: "Sent",
      amount: "50 EPIC",
      to: "0x8765...4321",
      date: "2024-02-19",
    },
  ];

  const address = "0xd914...1234";

  return (
    <div className="p-6 animate-fade-in">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-wallet-foreground">My Wallet</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              EPIC Mainnet
              <ChevronDown className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            {networks.map((network) => (
              <DropdownMenuItem key={network.id}>
                {network.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="bg-gradient-to-br from-wallet-primary to-wallet-secondary rounded-2xl p-6 text-white mb-6">
        <div className="text-sm mb-2">Total Balance</div>
        <div className="text-3xl font-bold mb-4">1,234.56 EPIC</div>
        <div className="flex items-center text-sm">
          <span className="truncate">{address}</span>
          <Button
            variant="ghost"
            size="icon"
            className="ml-2 text-white hover:text-white/80"
            onClick={() => navigator.clipboard.writeText(address)}
          >
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-4">Recent Transactions</h2>
        <div className="space-y-4">
          {mockTransactions.map((tx) => (
            <div
              key={tx.id}
              className="flex justify-between items-center p-4 bg-white rounded-lg border border-wallet-border"
            >
              <div>
                <div className="font-medium">{tx.type}</div>
                <div className="text-sm text-gray-500">
                  {tx.from ? `From: ${tx.from}` : `To: ${tx.to}`}
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium">{tx.amount}</div>
                <div className="text-sm text-gray-500">{tx.date}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WalletDashboard;