import { HexColor } from "@yext/studio";
import Icon, { IconName } from "./atoms/Icon";

export interface HeaderProps {
  backgroundColor?: HexColor;
  iconName?: IconName;
}

export const initialProps = {
  backgroundColor: "#EDF0EB",
};

const Header = ({ backgroundColor, iconName }: HeaderProps) => {
  return (
    <header
      className={`fixed top-0 left-0 w-full h-24 z-50 flex items-center  px-4 sm:px-7 `}
      style={{ backgroundColor }}
    >
      <Icon color="green" name={iconName} height={9} width={9} />
      {/* TODO: Search */}
    </header>
  );
};

export default Header;
