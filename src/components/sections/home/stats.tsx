"use client";
import { ScrollView } from "@/components/scroll-view";
import { motion } from "motion/react";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function StatsSection() {
  const { t } = useLanguage();
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? resolvedTheme : 'dark';
  const logoSrc = currentTheme === 'dark' ? '/ai-stack-dark.png' : '/ai-stack-light.png';

  return (
    <section className="py-12 md:py-20 relative overflow-hidden" id="stats">
      {/* Background Logo */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
        <Image
          src={logoSrc}
          alt="AI Stack Logo Background"
          width={400}
          height={400}
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain"
        />
      </div>

      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 relative z-10">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              {t("statsTitle")}
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p>
              {t("statsDescription")}
            </p>
          </ScrollView>
        </div>
        <ScrollView stagger delay={0.04}>
          <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold">+120</div>
              <p>{t("projectsLaunched")}</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold">40%</div>
              <p>{t("averageClientGrowth")}</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold">5+</div>
              <p>{t("yearsInGame")}</p>
            </motion.div>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
