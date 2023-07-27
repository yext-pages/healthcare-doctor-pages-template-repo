import {
  createContext,
  useRef,
  useState,
  ReactNode,
  MutableRefObject,
} from "react";
import NavBar from "./NavBar";

// Define the context types
export interface ScrollableContext {
  sectionRefs: MutableRefObject<{ [key: string]: HTMLDivElement | null }>;
  sectionTitles: { [key: string]: string };
  registerSection: (
    sectionId: string,
    title: string,
    element: HTMLDivElement | null
  ) => void;
  scrollToSection: (sectionId: string) => void;
}

// Create the Scrollable context
export const ScrollableContext = createContext<ScrollableContext | undefined>(
  undefined
);

interface ScrollableContainerProps {
  children: ReactNode;
}

export const ScrollableContainer = ({ children }: ScrollableContainerProps) => {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [sectionTitles, setSectionTitles] = useState<{ [key: string]: string }>(
    {}
  );

  const registerSection = (
    sectionId: string,
    title: string,
    element: HTMLDivElement | null
  ) => {
    console.log("registering section", sectionId, title, element);
    sectionRefs.current[sectionId] = element;
    setSectionTitles((prevTitles) => ({ ...prevTitles, [sectionId]: title }));
  };

  const scrollToSection = (sectionId: string) => {
    sectionRefs.current[sectionId]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ScrollableContext.Provider
      value={{ sectionRefs, sectionTitles, registerSection, scrollToSection }}
    >
      <NavBar
        items={Object.keys(sectionTitles).map((id) => ({
          id,
          label: sectionTitles[id],
        }))}
        onSelect={scrollToSection}
      />
      {children}
    </ScrollableContext.Provider>
  );
};
