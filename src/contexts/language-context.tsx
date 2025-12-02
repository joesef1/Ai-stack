"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");

    useEffect(() => {
        // Load language from localStorage
        const savedLang = localStorage.getItem("language") as Language;
        if (savedLang) {
            setLanguageState(savedLang);
            document.documentElement.lang = savedLang;
            document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
        }
    }, []);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("language", lang);
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    };

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within LanguageProvider");
    }
    return context;
}

const translations: Record<Language, Record<string, string>> = {
    en: {
        // Navigation
        home: "Home",
        about: "About Us",
        contact: "Contact Us",
        services: "Services",

        // Hero Section
        heroTitle: "Digital solutions that drive your Vision 2030 ambitions.",
        heroDescription: "Discover how AI-STACK can contribute to your business growth through web development, applications, and AI solutions that support your digital transformation in line with Vision 2030. We provide innovative and efficient services to enhance your efficiency and digital presence.",
        readMore: "Read More",
        contactUs: "Contact Us",

        // Services
        servicesTitle: "Design That Works for You",
        servicesDescription: "At Lume Studio, we create designs that are more than just visually appealing. They're built to solve problems, connect with audience, and drive results. Whether you're starting fresh or refining your existing identity, we've got you covered.",

        // Service Items
        aiSolutions: "Artificial Intelligence Solutions",
        aiDescription: "AI-powered insights for smarter decisions and future growth.",
        appDevelopment: "Application Development",
        appDescription: "Smart apps to optimize performance and increase engagement.",
        webDevelopment: "Website Development",
        webDescription: "Innovative website designs that boost credibility and enhance user experience.",

        // About
        aboutTitle: "About Us",
        aboutDescription: "Lume Studio was born from a simple idea—great design should do more than just look good; it should make an impact. What started as a passion for creativity turned into a full-fledged design agency dedicated to helping brands tell their stories, connect with audiences, and stand out in a crowded world.",

        // About Principles
        creativityTitle: "Creativity with Purpose",
        creativityDesc: "Our designs aren't just pretty; they're built to solve problems and make an impact.",
        collaborationTitle: "Collaboration is Key",
        collaborationDesc: "We work with you, not just for you. Great ideas come from teamwork.",
        honestyTitle: "Honest & Transparent",
        honestyDesc: "No confusing jargon or hidden fees. Just clear communication and real results.",
        detailsTitle: "Details Matter",
        detailsDesc: "The little things make a big difference. We sweat the small stuff, so you don't have to.",

        // Contact
        contactTitle: "Get in Touch",
        contactDescription: "Have a project in mind? Let's talk about how we can help bring your vision to life.",

        // Service Details
        aboutThisService: "About This Service",
        serviceDetailDesc1: "service is designed to help businesses achieve their digital transformation goals. We combine cutting-edge technology with industry best practices to deliver solutions that drive real results.",
        serviceDetailDesc2: "Whether you're looking to streamline operations, enhance customer experience, or unlock new growth opportunities, our team of experts is here to help you succeed.",

        // Stats
        statsTitle: "Driven by Design. Backed by Results.",
        statsDescription: "At ai-stack, our applications aren't just beautiful — they're built to solve problems, engage users, and deliver results. Whether you're beginning or improving, we've got you covered.",
        projectsLaunched: "Projects Launched",
        averageClientGrowth: "Average Client Growth",
        yearsInGame: "Years in the Game",

        // About Principles
        onTimeDelivery: "On-Time Delivery",
        onTimeDeliveryDesc: "We ensure timely project delivery to help you achieve your goals as quickly as possible.",
        quality: "Quality",
        qualityDesc: "We adhere to the highest quality standards to provide you with an exceptional experience that drives your project's success.",
        innovation: "Innovation",
        innovationDesc: "We deliver creative and unique solutions tailored to your business needs, helping you stand out.",
        continuousCommunication: "Continuous Communication",
        continuousCommunicationDesc: "We provide comprehensive support and ongoing communication to ensure your complete satisfaction with our services.",
        aboutUsDesc: "At ai-stack, our applications aren't just beautiful — they're built to solve problems, engage users, and deliver results. Whether you're beginning or improving, we've got you covered.",

        // Contact Form
        getInTouch: "Get in touch",
        contactFormDesc: "We'd love to hear from you! Feel free to reach out to us for any inquiries or to schedule a call.",
        letsGetYouToTheRightPlace: "Let's get you to the right place",
        reachOutDesc: "Reach out to our sales team! We're eager to learn more about how you plan to use our application.",
        fullName: "Full name",
        workEmail: "Work Email",
        message: "Message",
        submit: "Submit",

        // Footer
        allRightsReserved: "All rights reserved",

        // Common
        viewDetails: "View Details",
        keyFeatures: "Key Features",
        view: "View",
    },
    ar: {
        // Navigation
        home: "الرئيسية",
        about: "من نحن",
        contact: "اتصل بنا",
        services: "الخدمات",

        // Hero Section
        heroTitle: "حلول رقمية تدعم طموحات رؤية 2030",
        heroDescription: "اكتشف كيف يمكن لـ AI-STACK المساهمة في نمو أعمالك من خلال تطوير المواقع والتطبيقات وحلول الذكاء الاصطناعي التي تدعم تحولك الرقمي بما يتماشى مع رؤية 2030. نقدم خدمات مبتكرة وفعالة لتعزيز كفاءتك وحضورك الرقمي.",
        readMore: "اقرأ المزيد",
        contactUs: "تواصل معنا",

        // Services
        servicesTitle: "تصميم يعمل من أجلك",
        servicesDescription: "في Lume Studio، نصنع تصاميم أكثر من مجرد جاذبية بصرية. إنها مصممة لحل المشكلات والتواصل مع الجمهور وتحقيق النتائج. سواء كنت تبدأ من الصفر أو تحسن هويتك الحالية، نحن هنا لمساعدتك.",

        // Service Items
        aiSolutions: "حلول الذكاء الاصطناعي",
        aiDescription: "رؤى مدعومة بالذكاء الاصطناعي لقرارات أذكى ونمو مستقبلي.",
        appDevelopment: "تطوير التطبيقات",
        appDescription: "تطبيقات ذكية لتحسين الأداء وزيادة التفاعل.",
        webDevelopment: "تطوير المواقع الإلكترونية",
        webDescription: "تصاميم مواقع مبتكرة تعزز المصداقية وتحسن تجربة المستخدم.",

        // About
        aboutTitle: "من نحن",
        aboutDescription: "ولدت Lume Studio من فكرة بسيطة - يجب أن يفعل التصميم الرائع أكثر من مجرد أن يبدو جيدًا؛ يجب أن يحدث تأثيرًا. ما بدأ كشغف بالإبداع تحول إلى وكالة تصميم كاملة مكرسة لمساعدة العلامات التجارية على سرد قصصها والتواصل مع الجماهير والتميز في عالم مزدحم.",

        // About Principles
        creativityTitle: "إبداع بهدف",
        creativityDesc: "تصاميمنا ليست جميلة فقط؛ إنها مصممة لحل المشكلات وإحداث تأثير.",
        collaborationTitle: "التعاون هو المفتاح",
        collaborationDesc: "نعمل معك، وليس فقط من أجلك. الأفكار العظيمة تأتي من العمل الجماعي.",
        honestyTitle: "صادقون وشفافون",
        honestyDesc: "لا مصطلحات معقدة أو رسوم مخفية. فقط تواصل واضح ونتائج حقيقية.",
        detailsTitle: "التفاصيل مهمة",
        detailsDesc: "الأشياء الصغيرة تحدث فرقًا كبيرًا. نحن نهتم بالتفاصيل الدقيقة، حتى لا تضطر أنت لذلك.",

        // Contact
        contactTitle: "تواصل معنا",
        contactDescription: "هل لديك مشروع في ذهنك؟ دعنا نتحدث عن كيف يمكننا مساعدتك في تحقيق رؤيتك.",

        // Service Details
        aboutThisService: "عن هذه الخدمة",
        serviceDetailDesc1: "تم تصميم خدمتنا لمساعدة الشركات على تحقيق أهداف التحول الرقمي. نجمع بين التكنولوجيا المتطورة وأفضل ممارسات الصناعة لتقديم حلول تحقق نتائج حقيقية.",
        serviceDetailDesc2: "سواء كنت تتطلع إلى تبسيط العمليات أو تحسين تجربة العملاء أو فتح فرص نمو جديدة، فريق خبرائنا هنا لمساعدتك على النجاح.",

        // Stats
        statsTitle: "مدفوعون بالتصميم. مدعومون بالنتائج.",
        statsDescription: "في ai-stack، تطبيقاتنا ليست جميلة فقط - إنها مصممة لحل المشكلات وإشراك المستخدمين وتحقيق النتائج. سواء كنت تبدأ أو تحسن، نحن هنا لمساعدتك.",
        projectsLaunched: "مشروع تم إطلاقه",
        averageClientGrowth: "متوسط نمو العملاء",
        yearsInGame: "سنوات من الخبرة",

        // About Principles
        onTimeDelivery: "التسليم في الوقت المحدد",
        onTimeDeliveryDesc: "نضمن تسليم المشروع في الوقت المحدد لمساعدتك على تحقيق أهدافك في أسرع وقت ممكن.",
        quality: "الجودة",
        qualityDesc: "نلتزم بأعلى معايير الجودة لنقدم لك تجربة استثنائية تدفع نجاح مشروعك.",
        innovation: "الابتكار",
        innovationDesc: "نقدم حلولاً إبداعية وفريدة مصممة خصيصًا لاحتياجات عملك، مما يساعدك على التميز.",
        continuousCommunication: "التواصل المستمر",
        continuousCommunicationDesc: "نقدم دعمًا شاملاً وتواصلاً مستمرًا لضمان رضاك الكامل عن خدماتنا.",
        aboutUsDesc: "في ai-stack، تطبيقاتنا ليست جميلة فقط - إنها مصممة لحل المشكلات وإشراك المستخدمين وتحقيق النتائج. سواء كنت تبدأ أو تحسن، نحن هنا لمساعدتك.",

        // Contact Form
        getInTouch: "تواصل معنا",
        contactFormDesc: "نحب أن نسمع منك! لا تتردد في التواصل معنا لأي استفسارات أو لجدولة مكالمة.",
        letsGetYouToTheRightPlace: "دعنا نوصلك إلى المكان الصحيح",
        reachOutDesc: "تواصل مع فريق المبيعات لدينا! نحن متحمسون لمعرفة المزيد عن كيفية استخدامك لتطبيقنا.",
        fullName: "الاسم الكامل",
        workEmail: "البريد الإلكتروني للعمل",
        message: "الرسالة",
        submit: "إرسال",

        // Footer
        allRightsReserved: "جميع الحقوق محفوظة",

        // Common
        viewDetails: "عرض التفاصيل",
        keyFeatures: "الميزات الرئيسية",
        view: "عرض",
    },
};
