import { cn } from "@/lib/utils";

type BoxProps = React.HTMLAttributes<HTMLDivElement>;

export function Box({ className, ...props }: BoxProps) {
  return <div className={cn(className)} {...props} />;
}
