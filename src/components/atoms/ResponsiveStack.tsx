import * as React from "react";
import { twMerge } from "tailwind-merge";

export interface ResponsiveStackProps {
  children?: React.ReactNode;
  className?: string;
  // className?: string;
  // direction?: "row" | "column";
  // justifyContent?: "start" | "end" | "center" | "between" | "around";
  // alignItems?: "start" | "end" | "center" | "baseline" | "stretch";
  // wrap?: "wrap" | "nowrap" | "wrap-reverse";
  // gap?: "none" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
}

// export const initialProps = {
//   direction: "row",
//   justifyContent: "start",
//   alignItems: "start",
//   wrap: "wrap",
//   gap: "none",
// };

const ResponsiveStack = ({
  children,
  className,
}: // className,
// direction,
// justifyContent,
// alignItems,
// wrap,
// gap,
ResponsiveStackProps) => {
  return (
    <div className={twMerge(`flex flex-col sm:flex-row`, className)}>
      {children}
    </div>
  );
};

export default ResponsiveStack;
