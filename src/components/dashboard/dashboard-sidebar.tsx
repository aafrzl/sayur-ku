'use client';

import { useSidebar } from "@/hooks/useSidebar";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import DashboardNav from "./dashboard-nav";

export default function DashboardSidebar() {
  const { isOpen, toggle } = useSidebar();
  const [status, setStatus] = useState(false);

  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  }

  return (
    <aside
      className={cn(
        "relative border-r pt-14 md:block",
        status && "duration-500 ease-in-out transition-all",
        isOpen ? "w-72" : "w-[78px]",
      )}
    >
      <ArrowRight
        className={cn("absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-foreground w-8 h-8 transition-all duration-300 ease-in-out",
          isOpen && "rotate-180"
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mt-4 space-y-2">
            <DashboardNav />
          </div>
        </div>
      </div>
    </aside>
  )
}
