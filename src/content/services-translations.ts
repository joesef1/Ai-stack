export const SERVICE_TRANSLATIONS = {
  en: {
    "Artificial Intelligence Solutions": "Artificial Intelligence Solutions",
    "Application Development": "Application Development",
    "Website Development": "Website Development",
    "AI-powered insights for smarter decisions and future growth.": "AI-powered insights for smarter decisions and future growth.",
    "Smart apps to optimize performance and increase engagement.": "Smart apps to optimize performance and increase engagement.",
    "Innovative website designs that boost credibility and enhance user experience.": "Innovative website designs that boost credibility and enhance user experience.",
    "Machine Learning": "Machine Learning",
    "Predictive Analytics": "Predictive Analytics",
    "Integrated Solutions for Intelligent Automation (RPA)": "Integrated Solutions for Intelligent Automation (RPA)",
    "E-commerce Store Applications": "E-commerce Store Applications",
    "Booking Applications": "Booking Applications",
    "Educational Platform Applications": "Educational Platform Applications",
    "Professional and Corporate Websites": "Professional and Corporate Websites",
    "Educational Platforms": "Educational Platforms",
    "Online Stores": "Online Stores",
  },
  ar: {
    "Artificial Intelligence Solutions": "حلول الذكاء الاصطناعي",
    "Application Development": "تطوير التطبيقات",
    "Website Development": "تطوير المواقع الإلكترونية",
    "AI-powered insights for smarter decisions and future growth.": "رؤى مدعومة بالذكاء الاصطناعي لقرارات أذكى ونمو مستقبلي.",
    "Smart apps to optimize performance and increase engagement.": "تطبيقات ذكية لتحسين الأداء وزيادة التفاعل.",
    "Innovative website designs that boost credibility and enhance user experience.": "تصاميم مواقع مبتكرة تعزز المصداقية وتحسن تجربة المستخدم.",
    "Machine Learning": "التعلم الآلي",
    "Predictive Analytics": "التحليلات التنبؤية",
    "Integrated Solutions for Intelligent Automation (RPA)": "حلول متكاملة للأتمتة الذكية (RPA)",
    "E-commerce Store Applications": "تطبيقات المتاجر الإلكترونية",
    "Booking Applications": "تطبيقات الحجز",
    "Educational Platform Applications": "تطبيقات المنصات التعليمية",
    "Professional and Corporate Websites": "مواقع احترافية وشركات",
    "Educational Platforms": "منصات تعليمية",
    "Online Stores": "متاجر إلكترونية",
  },
};

export function translateService(text: string, language: "en" | "ar"): string {
  return SERVICE_TRANSLATIONS[language][text as keyof typeof SERVICE_TRANSLATIONS.en] || text;
}
