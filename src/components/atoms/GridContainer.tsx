import * as React from "react";
import { HexColor } from "@yext/studio";
import { TailwindSize } from "../../types/tailwind";
import { twMerge } from "tailwind-merge";

export interface GridContainerProps {
  children?: React.ReactNode;
  backgroundColor?: HexColor;
  rowCount?: number;
  columnCount?: number;
  rowGap?: TailwindSize;
  columnGap?: TailwindSize;
  classname?: string;
}

export const initialProps: GridContainerProps = {
  backgroundColor: "#ffffff",
  columnCount: 1,
  rowGap: "0",
  columnGap: "0",
};

export default function GridContainer({
  children,
  backgroundColor,
  rowCount,
  columnCount,
  rowGap,
  columnGap,
  classname,
}: GridContainerProps) {
  const computedClassname = twMerge(
    `grid grid-rows-${rowCount} grid-cols-3 bg-${backgroundColor} gap-x-${rowGap} gap-y-${columnGap}`,
    classname
  );
  return <div className={computedClassname}>{children}</div>;
}
