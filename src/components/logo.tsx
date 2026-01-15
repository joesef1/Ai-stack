"use client";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export const Logo = ({ className }: { className?: string }) => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Use resolvedTheme to get the actual theme (handles 'system' preference)
  const currentTheme = mounted ? resolvedTheme : 'dark';
  const logoSrc = currentTheme === 'dark' ? '/ai-stack-dark.png' : '/ai-stack-light.png';

  return (
    <img
      className={cn(
        "h-10 w-auto object-contain transition-all duration-500",
        className
      )}
      src={logoSrc}
      alt="AI Stack Logo"
      width="826"
    />
  );
};

export const LogoStroke = ({ className }: { className?: string }) => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? resolvedTheme : 'dark';
  const logoSrc = currentTheme === 'dark' ? '/ai-stack-dark.png' : '/ai-stack-light.png';

  return (
    <img
      className={cn(
        "h-10 w-auto object-contain transition-all duration-500",
        className
      )}
      src={logoSrc}
      alt="AI Stack Logo"
      width="826"
    />
  );
};
