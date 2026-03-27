import { EllipsisIcon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback } from "./ui/avatar";

export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6 selection:bg-cyan-500/30">
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-pink-600/20 blur-[120px]" />
      </div>

      <main className="relative z-10 max-w-4xl w-full">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl shadow-2xl">
          
          <header className="space-y-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest text-cyan-400 uppercase bg-cyan-400/10 rounded-full">
              Jersey City, NJ
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
              Justin Storm's Journey at <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">LSC</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed">
              From the deep space wonders of the Jennifer Chalsty Planetarium 
              to the heights of the Infinity Climber—here is a look into my 
              personal exploration of science and technology.
            </p>
          </header>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#overview" className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-colors duration-300">
              Overview
            </a>
          </div>

          <footer className="mt-12 pt-8 border-t border-white/5 flex gap-8 text-slate-500 text-sm">
            <div>
              <p className="font-bold text-slate-300">100+</p>
              <p>Exhibits Explored</p>
            </div>
            <div>
              <p className="font-bold text-slate-300">Infinity</p>
              <p>Curiosity Sparked</p>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}