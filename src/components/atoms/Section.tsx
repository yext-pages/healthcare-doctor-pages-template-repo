import { twMerge } from "tailwind-merge";
import HeadingText from "./HeadingText";
import CenteredContainer from "./CenteredContainer";

export interface SectionProps {
  children?: React.ReactNode;
  outerContainerClassname?: string;
  innerContainerClassname?: string;
  title?: string;
}

export const initialProps: SectionProps = {
  title: "Section Title",
};

export default function Section({
  children,
  outerContainerClassname,
  innerContainerClassname,
  title,
}: SectionProps) {
  return (
    <section className={twMerge(`py-14`, outerContainerClassname)}>
      <CenteredContainer
        classname={twMerge(`max-w-5xl`, innerContainerClassname)}
      >
        {title && <HeadingText text={title} level="Heading 2" />}
        {children}
      </CenteredContainer>
    </section>
  );
}
