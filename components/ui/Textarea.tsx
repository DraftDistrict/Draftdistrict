import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { fieldClassName } from "@/components/ui/Input";

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(fieldClassName, "min-h-28 py-3", className)} {...props} />;
}
