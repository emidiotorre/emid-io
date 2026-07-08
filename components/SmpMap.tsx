import { useEffect, useRef } from "react";
import smp from "../data/smpSites.json";

/**
 * SmpMap — a light world map for the Statement section.
 *
 * REAL, PUBLICLY AVAILABLE DATA: UNEP IMEO Coal Methane Database (May 2026, V2)
 * — coal mines (sized by IMEO methane emissions) and steel plants (sized by
 * blast-furnace capacity). Distributed under CC BY 4.0; data providers Global
 * Energy Monitor and Ember. Basemap: CARTO Positron (© OpenStreetMap, © CARTO).
 * Non-interactive, reduced-motion safe.
 */

const featureCollection = smp as any;

const MINE = "#c0392b";
const STEEL = "#2f6b8f";

const SmpMap: React.FC<{ className?: string }> = ({ className = "" }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let map: any;
    let cancelled = false;

    (async () => {
      const maplibregl = (await import("maplibre-gl")).default;
      if (cancelled || !ref.current) return;

      map = new maplibregl.Map({
        container: ref.current,
        style:
          "https://basemaps.cartocdn.com/gl/positron-nolabels-gl-style/style.json",
        center: [42, 28],
        zoom: 0.42,
        minZoom: 0,
        maxZoom: 3,
        interactive: false,
        attributionControl: false,
        dragRotate: false,
        renderWorldCopies: false,
      });

      map.on("error", () => {});

      map.on("load", () => {
        map.addSource("smp", { type: "geojson", data: featureCollection });

        // Steel plants (drawn first, under the mines)
        map.addLayer({
          id: "steel",
          type: "circle",
          source: "smp",
          filter: ["==", ["get", "k"], 1],
          paint: {
            "circle-radius": [
              "interpolate", ["linear"], ["get", "cap"],
              0, 2, 5000, 3.4, 24000, 6,
            ],
            "circle-color": STEEL,
            "circle-opacity": 0.55,
            "circle-stroke-color": "#ffffff",
            "circle-stroke-width": 0.4,
          },
        });

        // Coal mines (sized by IMEO methane emissions)
        map.addLayer({
          id: "mines",
          type: "circle",
          source: "smp",
          filter: ["==", ["get", "k"], 0],
          paint: {
            "circle-radius": [
              "interpolate", ["linear"], ["get", "em"],
              260, 2.4, 30000, 5, 110000, 8.5,
            ],
            "circle-color": MINE,
            "circle-opacity": 0.72,
            "circle-stroke-color": "#ffffff",
            "circle-stroke-width": 0.5,
          },
        });

        if (ref.current) ref.current.style.opacity = "1";
      });
    })();

    return () => {
      cancelled = true;
      if (map) map.remove();
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`h-full w-full opacity-0 transition-opacity duration-1000 ease-out ${className}`}
    />
  );
};

export default SmpMap;
