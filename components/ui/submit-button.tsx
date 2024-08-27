import { LoaderCircle } from "lucide-react";
import { Button, buttonVariants } from "./button";
import { useFormStatus } from "react-dom";
import { VariantProps } from "class-variance-authority";
import { ReactNode } from "react";

type SubmitButton = {
  children: ReactNode;
  variant?: "default" | "window";
  className?: string;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
};

export const SubmitButton = ({
  children,
  className,
  variant,
  size,
}: SubmitButton) => {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      variant={variant || "default"}
      className={`flex gap-2 ${pending ? "opacity-70" : "opacity-100"} ${className}`}
      size={size || "default"}
      disabled={pending}
    >
      {pending && <LoaderCircle className="animate-spin" />}
      {pending && size == "icon" ? <></> : children}
    </Button>
  );
};
