"use client";

import GalleryScreen from "@/components/GalleryScreen";
import HighlightsScreen from "@/components/HighlightsScreen";
import HomeScreen from "@/components/HomeScreen"
import OverviewScreen from "@/components/OverviewScreen"
import RatingScreen from "@/components/RatingScreen";
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSub, DropdownMenuSubTrigger, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { EllipsisIcon } from "lucide-react";
import { useEffect, useState } from "react"

const NAV_ITEMS = [
  { label: "Home", value: "home", href: "#" },
  { label: "Overview", value: "overview", href: "#overview" },
  { label: "Highlights", value: "highlights", href: "#highlights" },
  { label: "Gallery", value: "gallery", href: "#gallery" },
  { label: "Rating", value: "rating", href: "#rating" },
]

export default function Page() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setActiveTab(hash || "home");
    }

    handleHashChange();

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-svh">
      <header className="z-[999] shadow-xl shadow-white/10 fixed top-2 left-1/2 backdrop-blur-sm bg-black/50 -translate-x-1/2 flex gap-4 h-fit border p-3 rounded-2xl">
        <Tabs value={activeTab} className="mx-auto" orientation="horizontal">
          <TabsList variant={'line'}>
            {NAV_ITEMS.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                asChild
              >
                <a href={item.href}>{item.label}</a>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </header>
      <main>
        <HomeScreen />
        <OverviewScreen />
        <HighlightsScreen />
        <GalleryScreen />
        <RatingScreen />
      </main>
    </div>
  )
}
