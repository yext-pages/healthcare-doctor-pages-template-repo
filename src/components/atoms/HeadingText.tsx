import { twMerge } from "tailwind-merge";

export interface HeadingTextProps {
  text: string;
  level: "Heading 1" | "Heading 2" | "Heading 3" | "Heading 4";
  classname?: string;
}

export const initialProps: HeadingTextProps = {
  text: "Header",
  level: "Heading 1",
};

export default function HeadingText({
  level,
  text,
  classname,
}: HeadingTextProps) {
  switch (level) {
    case "Heading 1":
      return (
        <h1 className={twMerge("text-3xl font-serif-bold", classname)}>
          {text}
        </h1>
      );
    case "Heading 2":
      return (
        <h2 className={twMerge("text-2xl font-serif-bold", classname)}>
          {text}
        </h2>
      );
    case "Heading 3":
      return (
        <h3 className={twMerge("text-xl font-serif-bold", classname)}>
          {text}
        </h3>
      );
    case "Heading 4":
      return (
        <h4 className={twMerge("text-lg font-serif-bold", classname)}>
          {text}
        </h4>
      );
  }
}
