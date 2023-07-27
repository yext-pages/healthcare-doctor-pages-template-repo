import { twMerge } from "tailwind-merge";

export interface VStackProps {
  children?: React.ReactNode;
  classname?: string;
}

const VStack = ({ classname, children }: VStackProps) => {
  return <div className={twMerge(`flex flex-col`, classname)}>{children}</div>;
};

export default VStack;
