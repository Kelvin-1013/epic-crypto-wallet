import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";
import { Wallet, Send, ArrowDownToLine, Settings, Layers } from "lucide-react";

export const WalletLayout = () => {
  const location = useLocation();
  const [currentPath] = useState(location.pathname);

  const navItems = [
    { icon: Wallet, label: "Wallet", path: "/dashboard" },
    { icon: Send, label: "Send", path: "/send" },
    { icon: ArrowDownToLine, label: "Receive", path: "/receive" },
    { icon: Layers, label: "Tokens", path: "/tokens" },
    { icon: Settings, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="min-h-screen bg-wallet-background">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-xl">
        <div className="flex flex-col h-screen">
          <main className="flex-1 overflow-y-auto">
            <Outlet />
          </main>
          <nav className="border-t border-wallet-border">
            <div className="flex justify-around p-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex flex-col items-center space-y-1 ${
                    currentPath === item.path
                      ? "text-wallet-primary"
                      : "text-wallet-foreground/60 hover:text-wallet-primary"
                  }`}
                >
                  <item.icon className="w-6 h-6" />
                  <span className="text-xs">{item.label}</span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default WalletLayout;