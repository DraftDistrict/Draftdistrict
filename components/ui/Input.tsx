import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export const fieldClassName =
  "min-h-12 w-full border border-line bg-graphite px-4 text-sm text-bone placeholder:text-fog/60 transition-colors focus:border-ember focus:outline-none";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldClassName, className)} {...props} />;
}
