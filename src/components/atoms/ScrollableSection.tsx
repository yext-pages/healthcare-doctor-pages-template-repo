import { ReactNode, useContext, useEffect, useRef } from "react";
import { ScrollableContext } from "../ScrollingContainer";
import { twMerge } from "tailwind-merge";
import CenteredContainer from "./CenteredContainer";
import HeadingText from "./HeadingText";
import { v4 as uuid } from "uuid";

export interface ScrollableSectionProps {
  title: string;
  children?: ReactNode;
  outerContainerClassname?: string;
  innerContainerClassname?: string;
}

export const initialProps = {
  title: "Section Title",
};

// Scrollable.Section
export const ScrollableSection = ({
  title,
  children,
  outerContainerClassname,
  innerContainerClassname,
}: ScrollableSectionProps) => {
  const { registerSection } = useContext(ScrollableContext)!;
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const id = uuid();
  // useRef(uuid()).current;

  useEffect(() => {
    registerSection(id, title, sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={twMerge(`py-14`, outerContainerClassname)}
    >
      <CenteredContainer
        classname={twMerge(`max-w-5xl`, innerContainerClassname)}
      >
        {title && (
          <HeadingText text={title} level="Heading 2" classname="pb-16" />
        )}
        {children}
      </CenteredContainer>
    </section>
  );
};
