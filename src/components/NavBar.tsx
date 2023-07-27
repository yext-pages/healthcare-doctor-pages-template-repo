import BodyText from "./atoms/BodyText";
import Selector from "./atoms/Selector";

export interface NavBarProps {
  items: {
    id: string;
    label?: string;
  }[];
  onSelect?: (id: string) => void;
}

export const initialProps: NavBarProps = {
  items: [{ id: "About" }, { id: "Insurances" }, { id: "Locations" }],
};

export default function NavBar({ items, onSelect }: NavBarProps) {
  const handleSelect = (id: string) => {
    onSelect?.(id);
  };

  return (
    <div className="mx-auto max-w-5xl">
      <div className=" h-16 justify-between border-b hidden sm:flex">
        <div className="flex">
          <div className="ml-6 flex space-x-8">
            {items.map(({ label, id }) => (
              <button
                key={id}
                className={`inline-flex items-center px-1 pt-1 border-transparent hover:border-green border-b-2 text-sm font-medium`}
                onClick={() => handleSelect(id)}
              >
                <BodyText text={label ?? id} />
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="block px-10 sm:hidden">
        <Selector items={items} onSelect={onSelect} />
      </div>
    </div>
  );
}
