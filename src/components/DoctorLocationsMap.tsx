import { useEffect, useRef, useState } from "react";
import Address from "./Address";
import { C_locationsPracticingAt } from "../types/autogen";
import Icon from "./atoms/Icon";
export interface AppleMapProps {
  locations?: C_locationsPracticingAt[];
}

const AppleMap = ({ locations }: AppleMapProps) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<any>(null);

  const [locationIdx, setLocationIdx] = useState(0);

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.core.js";
    script.crossOrigin = "anonymous";
    script.async = true;
    script.dataset.callback = "initMapKit";
    script.dataset.libraries = "map,annotations,services";
    // NOTE: This token will expire in one year and need to be replaced
    script.dataset.initialToken = YEXT_PUBLIC_APPLE_MAPS_TOKEN;

    document.body.appendChild(script);

    const setupMapKitJs = async () => {
      if (!window.mapkit || window.mapkit.loadedLibraries.length === 0) {
        await new Promise((resolve) => {
          window.initMapKit = resolve;
        });
        delete window.initMapKit;
      }

      const jwt = window.mapkit.init({
        authorizationCallback: (done: any) => {
          done(jwt);
        },
      });
    };

    const main = async () => {
      await setupMapKitJs();

      const map = new window.mapkit.Map(mapContainerRef.current);

      if (locations && locations.length > 0) {
        const markers = locations?.map((location) => {
          const marker = new window.mapkit.MarkerAnnotation(
            new window.mapkit.Coordinate(
              location.geocodedCoordinate?.latitude,
              location.geocodedCoordinate?.longitude
            ),
            {
              glyphText: "●",
              glyphColor: "#ffffff",
              color: "#4F6A4E",
            }
          );

          return marker;
        });
        map.showItems(markers);
        map.setCenterAnimated(
          new window.mapkit.Coordinate(
            locations[locationIdx].geocodedCoordinate?.latitude,
            locations[locationIdx].geocodedCoordinate?.longitude
          ),
          false
        );
      } else {
        const cupertino = new window.mapkit.CoordinateRegion(
          new window.mapkit.Coordinate(37.3316850890998, -122.030067374026),
          new window.mapkit.CoordinateSpan(0.167647972, 0.354985255)
        );

        map.region = cupertino;
      }

      setMap(map);
    };

    main();

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (locations && locations.length > 0 && map) {
      map.setCenterAnimated(
        new window.mapkit.Coordinate(
          locations[locationIdx].geocodedCoordinate?.latitude,
          locations[locationIdx].geocodedCoordinate?.longitude
        )
      );
    }
  }, [locationIdx]);

  const toggleLocation = (step: -1 | 1) => {
    if (!locations) {
      return;
    }

    // If we're at the end of the list, loop back to the 0th index
    const newLocationIdx =
      locationIdx + step === locations.length
        ? 0
        : locationIdx + step < 0
        ? locations.length - 1
        : locationIdx + step;

    setLocationIdx(newLocationIdx);
  };

  return (
    <div className="w-full sm:w-[450px]">
      <div ref={mapContainerRef} className="w-full h-80 "></div>
      {locations?.[locationIdx]?.address && (
        <div className="flex justify-between">
          {locations && locations.length > 1 && (
            <button onClick={() => toggleLocation(-1)}>
              <Icon name="chevron-left" classname={"h-7 w-7"} />
            </button>
          )}
          <Address
            containerClassname="flex flex-col items-center mt-6"
            address={locations[locationIdx]?.address ?? {}}
          />
          {locations && locations.length > 1 && (
            <button onClick={() => toggleLocation(1)}>
              <Icon name="chevron-right" classname="h-7 w-7" />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AppleMap;
