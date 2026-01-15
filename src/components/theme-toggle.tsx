"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <Button variant="ghost" size="sm" className="gap-2" disabled>
                <Sun className="size-4" />
            </Button>
        );
    }

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="gap-2"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <>
                    <Sun className="size-4" />
                    <span className="text-sm font-medium">Light</span>
                </>
            ) : (
                <>
                    <Moon className="size-4" />
                    <span className="text-sm font-medium">Dark</span>
                </>
            )}
        </Button>
    );
}
