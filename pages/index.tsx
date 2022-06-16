import Head from "next/head";
import Trail from "../components/Trail";
import ProjectModule, { ProjectModuleProps } from "../components/ProjectModule";
import BasicModule from "../components/BasicModule";
import Marquee from "react-fast-marquee";
import { useSpring } from "@react-spring/web";
import { useEffect } from "react";
import ColorWheel from "../components/ColorWheel";
import useSpringOnHover from "../hooks/useSpringOnHover";
import Background from "../components/Background";
import useOpacityOnHover from "../hooks/useOpacityOnHover";
import useClipboard from "../hooks/useClipboard";

const projects: ProjectModuleProps[] = [
  {
    title: "Liste Showtime",
    subtitle: "Design by Début Début",
    description: `The web platform that presents the works selected by the galleries at Liste Art Fair.

      The platform lets the user explore and filter the artworks by media, year of production, city and country of the artist.
      
      The galleries can build their page, using predefined modules.
      
      Collectors can contact gallerists, and make offers from the platform.`,
    images: ["/st_1.png", "/st_2.png", "/st_3.png"],
    link: "https://showtime.liste.ch",
  },
  {
    title: "Liste Expedition",
    subtitle: "Design by Début Début",
    description: `An archive project that collects the works presented by the galleries at Liste Art Fair.

      The platform lets the user explore and save their favourite pieces from the archive, and share them with the other users.
      
      It incudes an editorial project, called “Monthly picks” where galleries, curators, and experts in the field are called to wirte an article every month.`,
    images: [
      "/ex_1.png",
      "/ex_2.png",
      "/ex_3.png",
      "/ex_4.png",
      "/ex_5.png",
      "/ex_6.png",
      "/ex_7.png",
    ],
    link: "https://expedition.liste.ch",
  },
  {
    title: "As We Leave The Window Open",
    subtitle: "Design by Début Début",
    description: `An editorial platform, for the artists.

      Here the artists are called to express themselves using the page as a canvas.
      
      The artist can customize the look of the page using custom fonts, colors and predefined content blocks to arrange as they prefer.`,
    images: [
      "/wo_1.png",
      "/wo_2.png",
      "/wo_3.png",
      "/wo_4.png",
      "/wo_5.png",
      "/wo_6.png",
      "/wo_7.png",
    ],
    link: "https://asweleavethewindowopen.live.liste.ch/",
  },
  {
    title: "CCNN",
    subtitle: "Design by Fionda",
    description: `A living archive that collects everything that happens at the CCNN.

    The user can sort the events by categories, or navigate the calendar using filters.
    
    The client wanted a playful and joyful look, hence the use of colors, shapes and animations to make the website stand out.`,
    images: ["/cc_1.png", "/cc_2.png", "/cc_3.png"],
    link: "https://ccnnantes.fr/",
  },
  {
    title: "Castello Di Rivoli",
    subtitle: "Design by LeftLoft",
    description: `For the website of the most prominent contemporary art museum in Italy, the callenge was the huge amount of content and features to account for.
    
    The client wanted to keep all the content from the past 20 years, and create a platform to show the artworks, buy tickets, books and read editorial contents.`,
    images: [
      "/cr_1.png",
      "/cr_2.png",
      "/cr_3.png",
      "/cr_4.png",
      "/cr_5.png",
      "/cr_6.png",
      "/cr_7.png",
    ],
    link: "https://www.castellodirivoli.org/",
  },
  {
    title: "Alberto Garutti",
    subtitle: "Design by Alberto Garutti Studio",
    images: ["/ag_1.png", "/ag_2.png", "/ag_3.png", "/ag_4.png", "/ag_5.png"],
    link: "https://www.castellodirivoli.org/",
  },
  {
    title: "Umberto Kühtz Project",
    subtitle: "Design by Emidio Torre",
    images: [
      "/uk_1.png",
      "/uk_2.png",
      "/uk_3.png",
      "/uk_4.png",
      "/uk_5.png",
      "/uk_6.png",
      "/uk_7.png",
    ],
    link: "https://www.castellodirivoli.org/",
  },
];

export default function Home() {
  const [isCopied, setCopied] = useClipboard("emidio.torre@gmail.com", {
    successDuration: 1000,
  });

  return (
    <div className="text-[#fafafa]">
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,400&display=swap"
          rel="stylesheet"
        ></link>
        <title>Emid.io</title>
      </Head>
      <ColorWheel></ColorWheel>
      {/* <div className="pointer-events-none fixed w-full flex justify-between px-8 py-8 z-50 text-black">
        <div className="text-xl uppercase"></div>
        <div className="text-xl uppercase">Creative Developer</div>
      </div> */}
      <div className=" fixed bottom-0 w-full flex justify-between px-8 py-8 z-50 text-black">
        <a className="text-xl uppercase" href="#work"></a>
        <div
          onClick={setCopied}
          className="cursor-pointer transition-all duration-300  bg-secondo px-4 py-2 rounded-full text-primo hover:bg-primo hover:text-secondo text-xl uppercase"
        >
          {isCopied ? "address copied!" : "send me an email!"}
        </div>
      </div>
      <main className="">
        <BasicModule
          padding={false}
          className="bg-primo hover:bg-transparent h-screen hover:text-secondo"
          bg={<Background src="/1_bn.jpeg" className="z-[-1]"></Background>}
        >
          <div className="block md:hidden absolute top-4 left-8 mt-2 md:mt-4 text-lg md:text-xl ">
            It's nice to see you here, <br /> don't click the color wheel.
          </div>
          <div className="hidden md:block absolute top-4 left-8 mt-2 md:mt-4 text-lg md:text-xl ">
            It's nice to see you here, don't click the color wheel.
          </div>
          <div className="relative flex flex-col justify-start align-start py-64">
            <Trail className="" open height={48}>
              <span className="text-3xl md:text-7xl relative md:-top-8 md:text-4xl font-bold ">
                Hello,
              </span>
              <span className="text-3xl md:text-7xl relative  md:text-4xl font-bold ">
                I'm Emidio Torre
              </span>
              <span className="text-lg md:text-xl relative  md:top-8  ">
                Creative web developer <br /> Based in Salerno, Italy
              </span>
            </Trail>
          </div>
        </BasicModule>
        <BasicModule className="px-0">
          <Marquee gradient={false} speed={100}>
            <h3 className="text-5xl">
              - I SUPPORT DESIGNERS AND AGENCIES, PROVIDING PRACTICAL SOLUTIONS
              USING THE LATEST TECHNOLOGIES -
            </h3>
          </Marquee>
        </BasicModule>
        <BasicModule>
          <h3 className="text-3xl mb-32">
            PASSIONATE ABOUT THE INTERNET AND THE WEB. <br></br> I LOVE WORKING
            AT THE INTERSECTION OF ARTS AND TECHNOLOGY. <br></br>I CREATE
            MEMORABLE WEB EXPERIENCES.
          </h3>
        </BasicModule>
        <BasicModule>
          <div className="grid md:grid-cols-2 pb-32">
            <h3 className="text-3xl mb-8">
              A blend of UI and product engineering.
            </h3>
            <h3 className="text-xl">
              With a background in design, I work closely with design focused
              teams to build websites and microsites for companies and
              individuals. <br />
              <br />
              I have years of experience working and collaborating on product
              teams and leading engineering efforts. <br />
              <br />
              With my experience in UI and product engineering, I solve product
              problems and build appealing usable web experiences.
            </h3>
          </div>
        </BasicModule>
        <BasicModule className="pt-64">
          <span className="text-3xl uppercase" id="work">
            Selected Projects
          </span>
        </BasicModule>
        {projects.map((p, i) => {
          return <ProjectModule {...p} key={i}></ProjectModule>;
        })}
      </main>

      <BasicModule>
        <h3 className="text-3xl mb-32">Thank you!</h3>
      </BasicModule>
    </div>
  );
}
