"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SignOutButton } from "@/components/sign-out-button";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import {
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { api } from "@/lib/axios";

type UserProfile = {
  username: string;
  avatar_url: string | null;
};

export function ProfileFooter({ slug }: { slug: string }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [hasLoadError, setHasLoadError] = useState(false);

  useEffect(() => {
    let active = true;

    api
      .get<UserProfile>("/v1/auth/me")
      .then(({ data }) => {
        if (active) setProfile(data);
      })
      .catch(() => {
        if (active) setHasLoadError(true);
      });

    return () => {
      active = false;
    };
  }, []);

  const username = profile?.username || slug;
  const avatarFallback = username.slice(0, 2).toUpperCase();

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <div className="flex min-w-0 items-center gap-1">
          <Link
            href={`https://github.com/${encodeURIComponent(username)}`}
            target="_blank"
            rel="noreferrer"
            className="flex min-w-0 flex-1 items-center gap-3 rounded-md px-1 py-1.5 outline-none hover:bg-sidebar-accent focus-visible:ring-2 focus-visible:ring-sidebar-ring group-data-[collapsible=icon]:hidden"
            aria-label={`View ${username}'s GitHub profile`}
          >
            <Avatar>
              {profile?.avatar_url && (
                <AvatarImage src={profile.avatar_url} alt={`${username}'s avatar`} />
              )}
              <AvatarFallback>{avatarFallback}</AvatarFallback>
            </Avatar>
            <div className="flex min-w-0 flex-1 flex-col leading-tight">
              <span className="truncate text-xs font-medium text-foreground">
                {username}
              </span>
              <span className="flex items-center gap-1 truncate text-[10px] text-muted-foreground">
                GitHub profile
                <ExternalLink
                  aria-hidden="true"
                  className="size-2.5 shrink-0"
                />
              </span>
            </div>
          </Link>
          <SignOutButton />
        </div>
        {hasLoadError && (
          <p className="px-1 pt-1 text-[10px] text-destructive" role="status">
            Could not load GitHub profile details.
          </p>
        )}
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
