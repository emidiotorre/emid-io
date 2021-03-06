import NextImage from "next/image";
import { useEffect, useState } from "react";

const Image = (props: any) => {
  const [loading, setLoading] = useState(props.loading);

  useEffect(() => {
    // Skip if image is already eager or has priority (disables lazy loading)
    if (props.loading === "eager" || props.priority) {
      return;
    }

    if (!isMobileConnection()) {
      let clearDefer: any;
      // Set loading to eager if all resources of document are loaded, but defer it a bit
      const onLoad = () => {
        clearDefer = defer(() => setLoading("eager"));
      };
      window.addEventListener("load", onLoad);
      return () => {
        // Clean up the load event listener and an eventual defer
        window.removeEventListener("load", onLoad);
        if (clearDefer) {
          clearDefer();
        }
      };
    }
  }, [props.loading, props.priority]);

  return <NextImage loading={loading} {...props} />;
};

const isMobileConnection = () => {
  const connection =
    navigator.connection ||
    //@ts-ignore
    navigator.mozConnection ||
    //@ts-ignore
    navigator.webkitConnection;
  return (
    connection?.type === "cellular" ||
    //@ts-ignore
    connection?.effectiveType === "slow-2g" ||
    //@ts-ignore
    connection?.effectiveType === "2g" ||
    //@ts-ignore
    connection?.effectiveType === "3g" ||
    //@ts-ignore
    connection?.saveData === true
  );
};

const defer = (callback: any) => {
  // Check if we can use requestIdleCallback
  if (window.requestIdleCallback) {
    const handle = window.requestIdleCallback(callback);
    return () => window.cancelIdleCallback(handle);
  }
  // Just defer using setTimeout with some random delay otherwise
  const handle = setTimeout(callback, 2345 + Math.random() * 1000);
  return () => clearTimeout(handle);
};

export default Image;
