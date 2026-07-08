import { useEffect, useRef } from "react";
import topEmitters from "../data/topEmitters.json";

/**
 * MethaneMap — hero backdrop.
 *
 * A slowly rotating dark globe of the world's largest methane point sources.
 * REAL DATA: UNEP IMEO "Top emitter sources" (period {topEmitters.meta.period}),
 * the 50 highest-flux detected sources. Points are sized and colored by their
 * average annual flux rate (t/h). Basemap: CARTO dark-matter
 * (© OpenStreetMap, © CARTO). Reduced motion renders a static globe.
 */

const featureCollection = topEmitters as any;

// flux (t/h) spectral ramp — cool baseline to infrared for the largest sources.
const colorByFlux: any = [
  "interpolate", ["linear"], ["get", "flux"],
  2, "#2f8fbf",
  6, "#7b5cd6",
  12, "#c8486f",
  30, "#ef6a3d",
];

const MethaneMap: React.FC<{ className?: string }> = ({ className = "" }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let map: any;
    let raf = 0;
    let cancelled = false;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    (async () => {
      const maplibregl = (await import("maplibre-gl")).default;
      if (cancelled || !ref.current) return;

      map = new maplibregl.Map({
        container: ref.current,
        style:
          "https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json",
        center: [24, 26],
        zoom: 1.62,
        minZoom: 1.3,
        maxZoom: 4,
        interactive: true,
        scrollZoom: false,
        boxZoom: false,
        doubleClickZoom: false,
        dragRotate: false,
        pitchWithRotate: false,
        touchPitch: false,
        keyboard: false,
        attributionControl: false,
        renderWorldCopies: false,
      });

      map.on("error", () => {});

      map.on("load", () => {
        try {
          map.setProjection({ type: "globe" });
        } catch {}
        try {
          map.setSky({
            "sky-color": "#0f131c",
            "horizon-color": "#151a25",
            "fog-color": "#0f131c",
            "sky-horizon-blend": 0.6,
            "horizon-fog-blend": 0.6,
            "fog-ground-blend": 0.4,
            "atmosphere-blend": [
              "interpolate", ["linear"], ["zoom"], 0, 0.7, 4, 0.2,
            ],
          });
        } catch {}

        map.addSource("det", { type: "geojson", data: featureCollection });

        map.addLayer({
          id: "det-glow",
          type: "circle",
          source: "det",
          paint: {
            "circle-radius": [
              "interpolate", ["linear"], ["get", "flux"],
              1.5, 6, 10, 18, 39, 40,
            ],
            "circle-color": colorByFlux,
            "circle-blur": 1,
            "circle-opacity": 0.34,
          },
        });

        map.addLayer({
          id: "det-core",
          type: "circle",
          source: "det",
          paint: {
            "circle-radius": [
              "interpolate", ["linear"], ["get", "flux"],
              1.5, 1.6, 10, 3.4, 39, 6.5,
            ],
            "circle-color": "#ffe4c4",
            "circle-opacity": 0.92,
            "circle-stroke-color": colorByFlux,
            "circle-stroke-width": 1.4,
          },
        });

        if (ref.current) ref.current.style.opacity = "1";
        map.resize();

        if (!reduce) {
          // Auto-rotate via eased steps, gated behind interaction flags so it
          // never fights the drag handler (draggable immediately on load,
          // pauses on hover/drag, resumes when idle). Each step is scheduled on
          // the NEXT frame rather than synchronously inside `moveend` —
          // re-entrant easeTo corrupts MapLibre's ease state
          // ("_onEaseFrame is not a function").
          let interacting = false;
          let hovering = false;
          let queued = false;
          const DEG_PER_STEP = 4;

          const doSpin = () => {
            queued = false;
            if (cancelled || !map || interacting || hovering) return;
            const c = map.getCenter();
            map.easeTo({
              center: [c.lng + DEG_PER_STEP, c.lat],
              duration: 1000,
              easing: (n) => n,
            });
          };
          const scheduleSpin = () => {
            if (queued) return;
            queued = true;
            requestAnimationFrame(doSpin);
          };

          map.on("moveend", scheduleSpin);
          map.on("mousedown", () => { interacting = true; });
          map.on("dragstart", () => { interacting = true; });
          map.on("touchstart", () => { interacting = true; });
          map.on("mouseup", () => { interacting = false; scheduleSpin(); });
          map.on("dragend", () => { interacting = false; scheduleSpin(); });
          map.on("touchend", () => { interacting = false; scheduleSpin(); });

          // Hover pause via DOM pointer events on the container — reliable
          // across browsers, unlike MapLibre's synthetic mouseover/out.
          const container = map.getContainer();
          container.addEventListener("pointerenter", () => { hovering = true; });
          container.addEventListener("pointerleave", () => {
            hovering = false;
            scheduleSpin();
          });

          scheduleSpin();
        }
      });
    })();

    return () => {
      cancelled = true;
      if (raf) cancelAnimationFrame(raf);
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

export default MethaneMap;
