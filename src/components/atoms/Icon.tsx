import { FaStar } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import { BiHomeHeart } from "react-icons/bi";
import {
  FaSchool,
  FaHospital,
  FaStethoscope,
  FaLanguage,
  FaVenusMars,
  FaHashtag,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { TbFileCertificate } from "react-icons/tb";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import { TailwindSize } from "../../types/tailwind";

export type IconName =
  | "home"
  | "star"
  | "hand"
  | "file-certificate"
  | "hashtag"
  | "school"
  | "hospital"
  | "language"
  | "stethoscope"
  | "venus-mars"
  | "chevron-left"
  | "chevron-right";

const icons: Record<IconName, IconType> = {
  "file-certificate": TbFileCertificate,
  hashtag: FaHashtag,
  home: BiHomeHeart,
  hospital: FaHospital,
  language: FaLanguage,
  school: FaSchool,
  stethoscope: FaStethoscope,
  "venus-mars": FaVenusMars,
  star: FaStar,
  hand: FaHandHoldingMedical,
  "chevron-left": FaChevronLeft,
  "chevron-right": FaChevronRight,
};

export interface IconProps {
  name?: IconName;
  color?:
    | "light-green"
    | "yellow"
    | "dark-gray"
    | "blue"
    | "green"
    | "dark-green";
  width?: TailwindSize;
  height?: TailwindSize;
  classname?: string;
}

const colors = {
  "light-green": "#4F6A4E",
  yellow: "#F2C94C",
  "dark-gray": "#333333",
  blue: "#2F80ED",
  green: "#219653",
  "dark-green": "#27AE60",
};

export const initialProps: IconProps = {
  name: "star",
  color: "dark-gray",
  width: "20",
  height: "20",
  classname: "",
};

export default function Icon({
  name,
  color,
  width,
  height,
  classname,
}: IconProps) {
  const IconComponent = icons[name ?? "star"];
  const computedClassname = twMerge(
    `h-${height} w-${width} text-${color}`,
    classname ?? initialProps.classname
  );
  return (
    <IconComponent
      className={computedClassname}
      // style={{ fill: color ? colors[color] : colors[initialProps.color] }}
    />
  );
}
