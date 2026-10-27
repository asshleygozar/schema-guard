"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { LogOut, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LoadingScreen } from "@/components/loading-screen";
import { api } from "@/lib/axios";

export function SignOutButton() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function signOut() {
    setError(null);
    startTransition(async () => {
      try {
        await api.post("/v1/auth/logout");
        router.replace("/");
      } catch {
        setError("Could not sign out. Please try again.");
      }
    });
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              disabled={isPending}
              aria-label="Open account menu"
            />
          }
        >
          <MoreHorizontal aria-hidden="true" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" side="top" className="w-40">
          <DropdownMenuItem
            variant="destructive"
            onClick={signOut}
            disabled={isPending}
          >
            <LogOut aria-hidden="true" />
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {error && (
        <p
          className="fixed bottom-4 right-4 z-[60] max-w-sm rounded-md border border-destructive/30 bg-background px-4 py-3 text-sm text-destructive shadow-lg"
          role="alert"
        >
          {error}
        </p>
      )}
      {isPending && <LoadingScreen message="Signing out..." />}
    </>
  );
}
