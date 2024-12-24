import { useState } from "react";
import { WalletCreationLayout } from "@/components/wallet-creation/WalletCreationLayout";
import { WelcomeScreen } from "@/components/wallet-creation/WelcomeScreen";
import { CreatePassword } from "@/components/wallet-creation/CreatePassword";
import { SecureWallet } from "@/components/wallet-creation/SecureWallet";
import { RecoveryPhrase } from "@/components/wallet-creation/RecoveryPhrase";
import { Congratulations } from "@/components/wallet-creation/Congratulations";

interface StepComponentProps {
  onNext: () => void;
}

export function WalletCreation() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const StepComponents: React.FC<StepComponentProps>[] = [
    WelcomeScreen,
    CreatePassword,
    SecureWallet,
    RecoveryPhrase,
    Congratulations,
  ];

  const CurrentStepComponent = StepComponents[step];

  return (
    <WalletCreationLayout>
      <CurrentStepComponent onNext={handleNext} />
    </WalletCreationLayout>
  );
}

export default WalletCreation;