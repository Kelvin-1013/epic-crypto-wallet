import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export function CreatePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const passwordStrength = password.length >= 8 ? "Strong" : "Weak";

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">Create password</h2>
        <p className="text-muted-foreground">
          This password will unlock your EPIC Chain wallet only on this device.
          EPIC Chain cannot recover this password.
        </p>
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="New password (8 characters min)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </button>
          </div>
          <p className="text-sm text-muted-foreground">
            Password strength: {passwordStrength}
          </p>
        </div>

        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Confirm password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <div className="flex items-center space-x-2">
          <input type="checkbox" id="understand" className="rounded" />
          <label htmlFor="understand" className="text-sm text-muted-foreground">
            I understand that EPIC Chain cannot recover this password for me.{" "}
            <a href="#" className="text-primary hover:underline">
              Learn more
            </a>
          </label>
        </div>
      </div>

      <Button
        className="w-full"
        disabled={
          password.length < 8 ||
          password !== confirmPassword ||
          !password ||
          !confirmPassword
        }
      >
        Create a new wallet
      </Button>
    </div>
  );
}