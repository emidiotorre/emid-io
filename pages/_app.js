import "maplibre-gl/dist/maplibre-gl.css";
import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("has-js");

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll(".reveal"));

    if (reduce || typeof IntersectionObserver === "undefined") {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 }
    );

    els.forEach((el) => io.observe(el));

    // Failsafe: never leave content hidden. If the observer never fires
    // (prerender, headless crawler, background tab), reveal everything so
    // the page can't ship blank.
    const failsafe = window.setTimeout(() => {
      els.forEach((el) => el.classList.add("in-view"));
    }, 1600);

    return () => {
      io.disconnect();
      window.clearTimeout(failsafe);
    };
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
