import { SERVICES_LIST } from "@/content/services";
import { notFound } from "next/navigation";
import FooterSection from "@/components/footer";
import { ServiceDetailsContent } from "@/components/service-details-content";

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
            <ServiceDetailsContent service={service} />
            <FooterSection />
        </main>
    );
}
