import { twMerge } from "tailwind-merge";

export interface HStackProps {
  children?: React.ReactNode;
  classname?: string;
}

const HStack = ({ children, classname }: HStackProps) => {
  return <div className={twMerge("flex", classname)}>{children}</div>;
};

export default HStack;
