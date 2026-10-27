import { LoaderCircle } from "lucide-react";

type LoadingScreenProps = {
  message?: string;
};

export function LoadingScreen({ message = "Loading..." }: LoadingScreenProps) {
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-background"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-3 text-sm font-medium text-muted-foreground">
        <LoaderCircle className="size-5 animate-spin text-primary" aria-hidden="true" />
        <span>{message}</span>
      </div>
    </div>
  );
}
