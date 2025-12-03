"use client";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ScrollView } from "@/components/scroll-view";
import { useLanguage } from "@/contexts/language-context";
import { translateService } from "@/content/services-translations";

interface ServiceDetailsContentProps {
    service: {
        name: string;
        description: string;
        img: string;
        tags: string[];
    };
}

export function ServiceDetailsContent({ service }: ServiceDetailsContentProps) {
    const { t, language } = useLanguage();

    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
                    <ScrollView>
                        <h1 className="text-4xl font-medium lg:text-5xl">
                            {translateService(service.name, language)}
                        </h1>
                    </ScrollView>
                    <ScrollView delay={0.2}>
                        <p className="text-lg text-muted-foreground">
                            {translateService(service.description, language)}
                        </p>
                    </ScrollView>
                </div>

                <ScrollView delay={0.3}>
                    <div className="mx-auto max-w-3xl">
                        <Image
                            src={service.img}
                            alt={service.name}
                            height="480"
                            width="720"
                            loading="lazy"
                            className="rounded-2xl object-cover w-full aspect-[16/9]"
                        />
                    </div>
                </ScrollView>

                <ScrollView delay={0.4}>
                    <div className="mx-auto max-w-3xl space-y-6">
                        <h2 className="text-2xl font-medium">{t("keyFeatures")}</h2>
                        <div className="flex flex-wrap gap-2">
                            {service.tags.map((tag, index) => (
                                <Badge key={index} variant="secondary" className="text-sm">
                                    {translateService(tag, language)}
                                </Badge>
                            ))}
                        </div>
                    </div>
                </ScrollView>

                <ScrollView delay={0.5}>
                    <div className="mx-auto max-w-3xl space-y-6">
                        <h2 className="text-2xl font-medium">{t("aboutThisService")}</h2>
                        <div className="space-y-4 text-muted-foreground">
                            <p>
                                {language === "en"
                                    ? `Our ${service.name.toLowerCase()} ${t("serviceDetailDesc1")}`
                                    : `${t("serviceDetailDesc1")}`
                                }
                            </p>
                            <p>
                                {t("serviceDetailDesc2")}
                            </p>
                        </div>
                    </div>
                </ScrollView>
            </div>
        </section>
    );
}
