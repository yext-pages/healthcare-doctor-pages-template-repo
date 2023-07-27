import { Image, ComplexImageType, ImageType } from "@yext/pages/components";
import useWindowSize from "../../hooks/useWindowSize";

export interface AvatarProps {
  image?: ImageType | ComplexImageType;
}

export default function Avatar({ image }: AvatarProps) {
  if (!image) return null;

  const { width } = useWindowSize();

  return (
    <Image
      image={image}
      layout="fixed"
      height={width && width < 640 ? 101 : 254}
      width={width && width < 640 ? 101 : 254}
      className="inline-block rounded-full"
    />
  );
}
