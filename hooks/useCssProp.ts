export default function useCssProp(propName: string) {
  if (typeof window != "undefined") {
    const r = window.document.querySelector(":root") as HTMLElement;
    if (typeof r.style != "undefined") {
      r.style.setProperty(propName, "lightblue");
    }

    return {
      getProp: () => {
        // Get the styles (properties and values) for the root
        const rs = getComputedStyle(r);
        // Alert the value of the --blue variable
        return rs.getPropertyValue(propName);
      },

      // Create a function for setting a variable value
      setProp: (newValue: string) => {
        // Set the value of variable --blue to another value (in this case "lightblue")
        r.style.setProperty(propName, newValue);
      },
    };
  } else {
    return {
      getProp: () => {},

      // Create a function for setting a variable value
      setProp: (newValue: string) => {},
    };
  }
}
