import Head from "next/head";
import Image from "next/image";
import Trail from "../components/Trail.tsx";
import Background from "../components/Background.tsx";
import HomeSection from "../components/HomeSection.tsx";
import Marquee from "react-fast-marquee";
import ParallaxContent from "../components/ParallaxContent.tsx";
import { relative } from "next/dist/shared/lib/isomorphic/path";

export default function Home() {
  return (
    <div className="text-[#fff]">
      <Head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@700,400&display=swap"
          rel="stylesheet"
        ></link>
        <title>Emid.io</title>
      </Head>
      <div className="pointer-events-none fixed w-full flex justify-between px-8 py-8 z-50 text-black">
        <div className="text-xl uppercase"></div>
        <div className="text-xl uppercase">Creative Developer</div>
      </div>
      <div className="pointer-events-none fixed bottom-0 w-full flex justify-between px-8 py-8 z-50 text-black">
        <a className="text-xl uppercase" href="#work">
          Emidio Torre
        </a>
        <div className="text-xl uppercase">Salerno, Italy</div>
      </div>
      <main className="">
        <HomeSection padding={false} growOnHover={true} transform={false}>
          <Background
            src="/2_flip.jpeg"
            transform={false}
            className="-mx-8 object-top"
          ></Background>
          <div className="relative flex flex-col justify-start align-start py-64">
            <Trail className="" open height={60}>
              <span className="text-5xl font-bold ">
                Hello, I'm Emidio Torre
              </span>
              <h3 className="text-xl">CREATIVE DEVELOPER</h3>
              <h3 className="text-xl">
                I SUPPORT DESIGNERS AND AGENCIES, <br /> PROVIDING IDEAS AND
                PRACTICAL SOLUTIONS.
              </h3>
            </Trail>
          </div>
        </HomeSection>
        <HomeSection className="px-0" growOnHover={false}>
          <Marquee gradient={false}>
            <h3 className="text-2xl">
              I SUPPORT DESIGNERS AND AGENCIES, PROVIDING IDEAS AND PRACTICAL
              SOLUTIONS.
            </h3>
          </Marquee>
        </HomeSection>
        <HomeSection>
          <h3 className="text-3xl mb-32">
            PASSIONATE ABOUT THE INTERNET AND THE WEB. <br></br> I LOVE WORKING
            AT THE INTERSECTION OF ARTS AND TECHNOLOGY. <br></br>I CREATE
            MEMORABLE WEB EXPERIENCES.
          </h3>
        </HomeSection>
        <HomeSection>
          <div className="grid md:grid-cols-2 pb-32">
            <h3 className="text-3xl mb-8">
              A blend of UI and product engineering.
            </h3>
            <h3 className="text-xl">
              With a background in design, I work closely with design focused
              teams to build websites and microsites for companies and
              individuals. <br />
              I have years of experience working and collaborating on product
              teams and leading engineering efforts. <br />
              With my experience in UI and product engineering, I solve product
              problems and build appealing usable web experiences.
            </h3>
          </div>
        </HomeSection>
        <HomeSection className="pt-64">
          <span className="text-3xl uppercase" id="work">
            Work
          </span>
        </HomeSection>
        <HomeSection padding={true} bg="/st_1.png">
          <Trail style={{ position: "fixed", top: 0 }} open height={50}>
            <span className="text-3xl font-bold ">Liste ShowTime</span>
            <span className="text-3xl font-bold ">
              amet consectetur adipisicing elit.
            </span>
            <span className="text-3xl font-bold ">Nam, consequuntur.</span>
          </Trail>
        </HomeSection>
        <HomeSection padding={true} bg="/ex_1.png">
          <div className="flex align-center justify-between">
            <Trail style={{ position: "fixed" }} open height={50}>
              <span className="text-3xl font-bold ">Liste Expedition</span>
              <span className="text-3xl font-bold ">
                amet consectetur adipisicing elit.
              </span>
              <span className="text-3xl font-bold ">Nam, consequuntur.</span>
            </Trail>
          </div>
        </HomeSection>
        <HomeSection padding={true} bg="/wo_1.png">
          <Trail style={{ position: "fixed", top: 0 }} open height={50}>
            <span className="text-3xl font-bold ">
              As We Leave The Window Open
            </span>
            <span className="text-lg font-light ">Design by Debut Debut.</span>
          </Trail>
          <div className="text-xl font-bold max-w-[50ch]">
            An editorial platform, for the artists. Here the artists are called
            to express themselves using the page as a canvas. The artist can
            customize the look of the page using custom fonts, colors and
            predefined content blocks to arrange as they prefer.
          </div>
        </HomeSection>
        <HomeSection padding={true}>
          <Trail style={{ position: "fixed" }} open height={50}>
            <span className="text-3xl font-bold ">Lorem ipsum dolor sit</span>
          </Trail>
          <span className="text-3xl font-bold ">
            amet consectetur adipisicing elit
          </span>

          <span className="text-3xl font-bold ">Nam, consequuntur.</span>
        </HomeSection>
      </main>

      <footer className="bg-[#303030] px-8 py-8 text-white">
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;<b>next.new</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
