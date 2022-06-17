//@ts-ignore
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../tailwind.config.js";
export default () => {
  const fullConfig = resolveConfig(tailwindConfig);
  return fullConfig;
};
