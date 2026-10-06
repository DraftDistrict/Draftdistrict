import type { SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { fieldClassName } from "@/components/ui/Input";

export function Select({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn(fieldClassName, className)} {...props}>
      {children}
    </select>
  );
}
