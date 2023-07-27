import BodyText from "./atoms/BodyText";
import GridContainer from "./atoms/GridContainer";
import HStack from "./atoms/HStack";
import HeadingText from "./atoms/HeadingText";
import Icon, { IconName } from "./atoms/Icon";
import VStack from "./atoms/VStack";

export interface DoctorBackgroundProps {
  items?: {
    icon?: IconName;
    name: string;
    details?: string[];
  }[];
}

export default function DoctorBackground({ items }: DoctorBackgroundProps) {
  return (
    <GridContainer classname="gap-y-10 sm:grid-cols-2" columnGap="10">
      {items?.map((item, i) => (
        <HStack key={`item-${i}`}>
          {item.name && (
            <Icon
              width="10"
              height="10"
              name={item.icon}
              classname="pt-3 w-10 h-10"
              color="green"
            />
          )}
          <VStack classname="pl-4">
            <HeadingText text={item.name} level="Heading 4" />
            <ul className="">
              {item.details?.map((detail, j) => (
                <li key={`detail-${j}`} className="mt-3">
                  <BodyText text={detail} />
                </li>
              ))}
            </ul>
          </VStack>
        </HStack>
      ))}
    </GridContainer>
  );
}
