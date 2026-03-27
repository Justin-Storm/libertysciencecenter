"use client";

import GalleryScreen from "@/components/GalleryScreen";
import HighlightsScreen from "@/components/HighlightsScreen";
import HomeScreen from "@/components/HomeScreen"
import OverviewScreen from "@/components/OverviewScreen"
import RatingScreen from "@/components/RatingScreen";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useEffect, useState } from "react"

const NAV_ITEMS = [
  { label: "Home", value: "home", id: "home" },
  { label: "Overview", value: "overview", id: "overview" },
  { label: "Highlights", value: "highlights", id: "highlights" },
  { label: "Gallery", value: "gallery", id: "gallery" },
  { label: "Rating", value: "rating", id: "rating" },
]

export default function Page() {
  const [activeTab, setActiveTab] = useState("home");

  useEffect(() => {
    // 1. Setup the Observer
    const observerOptions = {
      root: null,
      // threshold: 0.5 means when 50% of the section is visible
      threshold: 0.5,
      // rootMargin adjusts the detection area (top -80px to account for header height)
      rootMargin: "-80px 0px -20% 0px" 
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // 2. Observe all sections that have an ID matching our NAV_ITEMS
    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Smooth scroll helper
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-svh bg-slate-950 scroll-smooth">
      <header className="z-[999] shadow-xl shadow-white/5 fixed top-4 left-1/2 backdrop-blur-md bg-black/40 -translate-x-1/2 flex gap-4 h-fit border border-white/10 p-2 rounded-2xl">
        <Tabs value={activeTab} className="mx-auto">
          <TabsList variant={'line'}>
            {NAV_ITEMS.map((item) => (
              <TabsTrigger
                key={item.value}
                value={item.value}
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </header>

      <main>
        {/* Ensure your HomeScreen has id="home" */}
        <div id="home">
          <HomeScreen />
        </div>
        <OverviewScreen />
        <HighlightsScreen />
        <GalleryScreen />
        <RatingScreen />
      </main>
    </div>
  )
}