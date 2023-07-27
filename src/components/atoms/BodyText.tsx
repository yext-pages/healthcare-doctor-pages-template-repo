import { twMerge } from "tailwind-merge";
export interface BodyTextProps {
  text: string;
  weight?: "Regular" | "Bold";
  color?: "text-dark-gray" | "text-green" | "text-yellow" | "text-blue";
  className?: string;
}

export const initialProps: BodyTextProps = {
  text: "Header",
  weight: "Regular",
  color: "text-dark-gray",
};

export default function BodyText({
  text,
  weight,
  color,
  className,
}: BodyTextProps) {
  return (
    <p
      className={twMerge(
        `text-base ${color} ${
          weight === "Bold" ? "font-sans-bold" : "font-sans-regular"
        }`,
        className
      )}
    >
      {text}
    </p>
  );
}
