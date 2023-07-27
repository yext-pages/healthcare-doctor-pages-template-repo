import BodyText from "./atoms/BodyText";
import VStack from "./atoms/VStack";

const times = ["8:00 AM", "10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"];

// mock function that gets today's date and the next 4 days
export function getDates() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();
  const dates = [];
  for (let i = 0; i < 5; i++) {
    dates.push(`${mm}/${Number(dd) + i}/${yyyy}`);
  }
  return dates;
}

export default function AppointmentGrid() {
  const dates = getDates();

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
      {dates.map((date) => (
        <VStack classname="gap-2.5">
          <BodyText className="text-center" text="Feb 3" />
          {times.map((time) => (
            <button
              key={`${date}-${time}`}
              className="relative space-x-3 rounded-[3px] border border-gray-300  px-6 py-2.5 shadow-sm bg-green hover:bg-dark-green"
            >
              <div className="flex justify-center">
                {/* <span className="absolute inset-0" aria-hidden="true" /> */}
                <p className="text-sm font-medium font-sans-regular text-white ">
                  {time}
                </p>
              </div>
            </button>
          ))}
        </VStack>
      ))}
    </div>
  );
}
