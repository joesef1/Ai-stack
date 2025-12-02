"use client";
import { Mail, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ScrollView } from "./scroll-view";
import { useLanguage } from "@/contexts/language-context";

export default function FeaturesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-32 bg-gray-50 dark:bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <ScrollView>
                <h2 className="text-4xl font-semibold lg:text-5xl">
                  {t("getInTouch")}
                </h2>
              </ScrollView>
              <ScrollView>
                <p className="mt-6">
                  {t("contactFormDesc")}
                </p>
              </ScrollView>
            </div>
            <ScrollView delay={0.2}>
              <ul className="mt-8 divide-y border-y *:flex *:items-center *:gap-3 *:py-3">
                <li>
                  <Link href="#link" className="hover:text-accent-foreground">
                    <Mail className="size-5 mr-2 inline" />
                    <span>info@ai-stack.net</span>
                  </Link>
                </li>
                <li>
                  <Link href="#link" className="hover:text-accent-foreground">
                    <PhoneCall className="size-5 mr-2 inline" />
                    <span>+966 50 124 6756</span>
                  </Link>
                </li>
              </ul>
            </ScrollView>
          </div>
          <div className="lg:col-span-3">
            <ScrollView>
              <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16 w-full">
                <div>
                  <h3 className="text-lg font-semibold">
                    {t("letsGetYouToTheRightPlace")}
                  </h3>
                  <p className="mt-4 text-sm">
                    {t("reachOutDesc")}
                  </p>
                </div>

                <form
                  action=""
                  className="**:[&>label]:block mt-12 space-y-6 *:space-y-3"
                >
                  <div>
                    <Label htmlFor="name">{t("fullName")}</Label>
                    <Input type="text" id="name" required />
                  </div>

                  <div>
                    <Label htmlFor="email">{t("workEmail")}</Label>
                    <Input type="email" id="email" required />
                  </div>

                  <div>
                    <Label htmlFor="msg">{t("message")}</Label>
                    <Textarea id="msg" rows={3} />
                  </div>

                  <Button>{t("submit")}</Button>
                </form>
              </Card>
            </ScrollView>
          </div>
        </div>
      </div>
    </section>
  );
}
