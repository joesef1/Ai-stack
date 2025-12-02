"use client";
import { useLanguage } from "@/contexts/language-context";
import { translateService } from "@/content/services-translations";

interface TranslatedTextProps {
    text: string;
    type?: "service" | "general";
}

export function TranslatedText({ text, type = "general" }: TranslatedTextProps) {
    const { language, t } = useLanguage();

    if (type === "service") {
        return <>{translateService(text, language)}</>;
    }

    return <>{t(text) || text}</>;
}
