import { Coins } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const mockTokens = [
  { 
    symbol: "EPIC", 
    name: "EPIC Chain",
    balance: "1000.00", 
    value: "$5000.00",
    change: "+5.2%",
    icon: "/lovable-uploads/494568f3-687f-407a-b017-776640e7dd18.png"
  },
  { 
    symbol: "ETH", 
    name: "Ethereum",
    balance: "0.5", 
    value: "$1000.00",
    change: "-2.1%",
    icon: "⟠"
  },
  { 
    symbol: "BTC", 
    name: "Bitcoin",
    balance: "0.1", 
    value: "$4000.00",
    change: "+1.3%",
    icon: "₿"
  },
];

export function Tokens() {
  return (
    <div className="p-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground flex items-center gap-2">
          <Coins className="w-6 h-6 text-wallet-primary" />
          Tokens
        </h1>
        <p className="text-sm text-muted-foreground">Manage your tokens</p>
      </div>

      <ScrollArea className="h-[calc(100vh-200px)]">
        <div className="space-y-4">
          {mockTokens.map((token) => (
            <div
              key={token.symbol}
              className="p-4 bg-white rounded-lg border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {token.symbol === "EPIC" ? (
                    <img src={token.icon} alt="EPIC" className="w-8 h-8" />
                  ) : (
                    <div className="text-2xl">{token.icon}</div>
                  )}
                  <div>
                    <h3 className="font-medium">{token.name}</h3>
                    <p className="text-sm text-muted-foreground">{token.symbol}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{token.value}</p>
                  <p className="text-sm text-muted-foreground">
                    {token.balance} {token.symbol}
                  </p>
                  <span className={`text-xs ${token.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                    {token.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}

export default Tokens;