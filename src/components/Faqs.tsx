import BodyText from "./atoms/BodyText";
import VStack from "./atoms/VStack";

export interface FaqsProps {
  faqs?: {
    question?: string;
    answer?: string;
  }[];
}

export default function Faqs({ faqs }: FaqsProps) {
  return (
    <VStack classname="gap-y-16">
      {faqs
        ?.filter((faq) => faq.question && faq.answer)
        .map((faq, idx) => {
          return (
            <VStack key={idx} classname="gap-y-6">
              <BodyText weight="Bold" text={faq.question as string} />
              <BodyText text={faq.answer as string} />
            </VStack>
          );
        })}
    </VStack>
  );
}
