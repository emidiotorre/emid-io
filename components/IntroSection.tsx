import Trail from "./Trail";
import BasicModule from "./BasicModule";
import useTailwindBreakpoint from "../hooks/useTailwindBreakpoint";

export default () => {
  const currentBreakpoint = useTailwindBreakpoint();
  return (
    <BasicModule className="h-[80vh]">
      <div className="block md:hidden absolute top-4 left-8 mt-2 md:mt-4 text-lg md:text-xl ">
        It's nice to see you here, <br /> don't click the color wheel.
      </div>
      <div className="hidden md:block absolute top-4 left-8 mt-2 md:mt-4 text-lg md:text-xl ">
        It's nice to see you here, don't click the color wheel.
      </div>
      <div className="relative flex flex-col justify-start align-start py-64">
        <Trail
          className=""
          open
          height={
            currentBreakpoint == "sm" || currentBreakpoint == "md" ? 42 : 68
          }
        >
          <span className="text-4xl md:text-7xl lg:text-8xl relative md:-top-8  font-bold ">
            Hello,
          </span>
          <span className="text-4xl md:text-7xl lg:text-8xl relative   font-bold ">
            I'm Emidio Torre
          </span>
          <span className="text-lg md:text-xl relative  md:top-12  ">
            Creative web developer <br /> Based in Salerno, Italy
          </span>
        </Trail>
      </div>
    </BasicModule>
  );
};
