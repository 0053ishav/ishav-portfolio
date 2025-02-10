import Head from "next/head";
import styles from "./index.module.sass";
import { useEffect, useState } from "react";
import AOS from "aos";
import getAllData from "../utils/fetchAllData";
import { useTheme } from "next-themes";
import Script from "next/script";

// COMPONENT
import Navbar from "../components/navbar";
import SocialLists from "../components/social-lists";
import Hero from "../components/hero";
import About from "../components/about";
import Education from "../components/education";
import Portfolio from "../components/portfolio";
import ModeSettings from "../components/mode-settings";
import Contact from "../components/contact";

export default function App(props) {
  const [slider, setSlider] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    typeof window !== "undefined" &&
      new kursor({
        type: 4,
        color: "#fff",
        removeDefaultCursor: true,
      });
  }, []);

  useEffect(() => {
    AOS.init({ duration: 3000 });
    window.addEventListener("load", AOS.refresh);
    window.addEventListener("scroll", () => {
      AOS.refresh();
    });
  }, []);

  return (
    <>
  {/* Website Head Part And Meta Tags Container */}
<Head>
  <title>Ishav's Portfolio</title>
  <meta
    name="theme-color"
    content={theme === "dark" ? "#111119" : "#ffffff"}
  />
  <link rel="icon" href="/favicon.ico" />
  <meta
    name="description"
    content="I'm Ishav, a ServiceNow Developer & Web Developer passionate about Next.js, React.js, Three.js, and JavaScript. Explore my portfolio to see my projects and expertise."
  />
  <meta
    name="keywords"
    content="Ishav, ishav.space, Next.js, React.js, JavaScript, Three.js, ServiceNow, Web Developer, Portfolio"
  />
  <meta
    property="og:title"
    content="Ishav | ServiceNow & Web Developer | Next.js | React.js | Three.js"
  />
  <meta
    property="og:description"
    content="Passionate developer specializing in JavaScript, Next.js, React.js, and ServiceNow. Explore my portfolio and projects."
  />
  <meta property="og:image" content="/me.jpg" />
  <meta property="og:url" content="https://ishav.space" />
  <meta property="og:type" content="website" />
</Head>

      <Script
        src="https://unpkg.com/kursor"
        strategy="beforeInteractive"
      ></Script>
      {/* Actual Page Components Wrapper Area */}
      <SocialLists data={props.links} />
      <ModeSettings />
      <main id="app-main" className={styles.container}>
        <div className="row g-0">
          <div className="offset-1 col-10">
            <Navbar data={props.sections} />
            <Hero data={props.info} />
            <About data={props.about} />
            <Education data={props.education} />
            <Portfolio
              data={props.projects}
              slider={slider}
              setSlider={setSlider}
            />
            <Contact data={props.links} />
          </div>
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const data = getAllData();
  return {
    props: data,
  };
}
