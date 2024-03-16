import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  const sidebarItem = [
    {
      id: 1,
      label: "Learn",
      href: "/learn",
      iconSrc: "/learn.svg",
    },
    {
      id: 2,
      label: "Leaderboard",
      href: "/leaderboard",
      iconSrc: "/leaderboard.svg",
    },
    {
      id: 3,
      label: "Quests",
      href: "/quests",
      iconSrc: "/quests.svg",
    },
    {
      id: 4,
      label: "shop",
      href: "/shop",
      iconSrc: "/shop.svg",
    },
  ];

  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/mascot.svg" height={40} width={40} alt="Mascot" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Duolingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        {sidebarItem.map((item) => (
          <SidebarItem
            key={item.id}
            label={item.label}
            href={item.href}
            iconSrc={item.iconSrc}
          />
        ))}
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl="/" />
        </ClerkLoaded>
      </div>
    </div>
  );
};
