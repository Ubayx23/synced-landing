import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow } from "@/components/primitives/Eyebrow";
import { FadeUp } from "@/components/primitives/FadeUp";

const faqs: { q: string; a: string }[] = [
  {
    q: "What makes Synced different from MyFitnessPal or Whoop?",
    a: "Most apps track either food or recovery in isolation. Synced ties them together. You see which pre-workout meals correlate with your best sessions, not just abstract calorie totals or sleep scores.",
  },
  {
    q: "Do I need to count macros?",
    a: "No. Logging is quick-tap from a personal meal list you build over time. Macros are optional, not required to use the app.",
  },
  {
    q: "When does it launch?",
    a: "TestFlight is rolling out to founding members in the coming weeks. Public iOS launch follows shortly after.",
  },
  {
    q: "Is there an Android version?",
    a: "Not at launch. iOS first, while we tune the readiness model. Android is on the roadmap.",
  },
  {
    q: "What does it cost?",
    a: "Free for founding members, forever. Public pricing will be announced at launch and will include a free tier.",
  },
];

export function FAQ() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <FadeUp className="mb-3 flex justify-center">
          <Eyebrow accent>FAQ</Eyebrow>
        </FadeUp>
        <FadeUp delay={80} className="mb-10 text-center">
          <h2 className="text-3xl font-bold tracking-display text-syn-text md:text-4xl">
            Things people ask.
          </h2>
        </FadeUp>
        <FadeUp delay={140}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem key={f.q} value={`item-${i}`}>
                <AccordionTrigger>{f.q}</AccordionTrigger>
                <AccordionContent>{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeUp>
      </div>
    </section>
  );
}
