import { cn } from "@/lib/utils";

interface WalletCreationLayoutProps {
  children: React.ReactNode;
  className?: string;
}

export function WalletCreationLayout({
  children,
  className,
}: WalletCreationLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-wallet-primary/5 to-wallet-secondary/5">
      <div
        className={cn(
          "container max-w-lg mx-auto px-4 py-8 space-y-8",
          className
        )}
      >
        <div className="text-center space-y-2">
          <img
            src="/placeholder.svg"
            alt="EPIC Chain"
            className="w-16 h-16 mx-auto"
          />
          <h1 className="text-2xl font-bold text-wallet-foreground">
            EPIC Chain Wallet
          </h1>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-8">{children}</div>
      </div>
    </div>
  );
}