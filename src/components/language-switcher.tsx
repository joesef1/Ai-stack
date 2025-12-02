"use client";
import { useLanguage } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import { Languages } from "lucide-react";

export function LanguageSwitcher() {
    const { language, setLanguage } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "ar" : "en");
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={toggleLanguage}
            className="gap-2"
            aria-label="Switch language"
        >
            <Languages className="size-4" />
            <span className="text-sm font-medium">
                {language === "en" ? "العربية" : "English"}
            </span>
        </Button>
    );
}
