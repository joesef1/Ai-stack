import { SERVICES_LIST } from "@/content/services";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import FooterSection from "@/components/footer";
import { ScrollView } from "@/components/scroll-view";

export async function generateStaticParams() {
    return SERVICES_LIST.map((service) => ({
        slug: service.slug,
    }));
}

export default async function ServiceDetailsPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const service = SERVICES_LIST.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    return (
        <main className="min-h-screen">
            <section className="py-16 md:py-32">
                <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
                    <div className="relative z-10 mx-auto max-w-3xl space-y-6 text-center">
                        <ScrollView>
                            <h1 className="text-4xl font-medium lg:text-5xl">
                                {service.name}
                            </h1>
                        </ScrollView>
                        <ScrollView delay={0.2}>
                            <p className="text-lg text-muted-foreground">
                                {service.description}
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
                            <h2 className="text-2xl font-medium">Key Features</h2>
                            <div className="flex flex-wrap gap-2">
                                {service.tags.map((tag, index) => (
                                    <Badge key={index} variant="secondary" className="text-sm">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </ScrollView>

                    <ScrollView delay={0.5}>
                        <div className="mx-auto max-w-3xl space-y-6">
                            <h2 className="text-2xl font-medium">About This Service</h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Our {service.name.toLowerCase()} service is designed to help businesses
                                    achieve their digital transformation goals. We combine cutting-edge
                                    technology with industry best practices to deliver solutions that
                                    drive real results.
                                </p>
                                <p>
                                    Whether you're looking to streamline operations, enhance customer
                                    experience, or unlock new growth opportunities, our team of experts
                                    is here to help you succeed.
                                </p>
                            </div>
                        </div>
                    </ScrollView>
                </div>
            </section>
            <FooterSection />
        </main>
    );
}
