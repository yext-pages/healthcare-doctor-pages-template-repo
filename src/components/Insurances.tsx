import GridContainer from "./atoms/GridContainer";
import BodyText from "./atoms/BodyText";
import HStack from "./atoms/HStack";
import useWindowSize from "../hooks/useWindowSize";

export default function Insurances({ insurances }) {
  const { width } = useWindowSize();

  return (
    <GridContainer
      columnCount= {3}
      classname="pt-1 px-12 pb-10"
    >
      {insurances?.map((insurance, i) => (
        <HStack key={`insurance-${i}`}>
          <BodyText className="pb-12 text-center" text={insurance} />
        </HStack>
      ))}
    </GridContainer>
  );
}
