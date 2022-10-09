import React from "react";
import "../css/home.css";
import Jake from "../images/jake.jpeg";
import Marquee from "react-fast-marquee";
import bootstrap from "../images/bootstrap.png";
import javascript from "../images/javascript.png";
import mongodb from "../images/mongodb.png";
import nodejs from "../images/nodejs.png";
import react from "../images/react.png";
import sass from "../images/sass.png";
import cash from "../images/cash-watch.png";
import dashboard from "../images/dashboard.png";
import gallery from "../images/gallery.png";
import mugs from "../images/mugs-coffee.png";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";
import Coding from "../lotties/Coding.json";
import Lottie from "lottie-react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <div className="main-photo-div">
        <div className="photo-box">
          <img src={Jake} alt="Photo of Jacob Starowicz, Web Developer" />
          <h1>Jacob Starowicz</h1>
          <h2>Front End Developer</h2>
          <div className="social-media">
            <a href="https://github.com/jakeisadev" target="_blank">
              <BsGithub className="icon github" />
            </a>
            <a
              href="https://www.linkedin.com/in/jacob-starowicz/"
              target="_blank"
            >
              <BsLinkedin className="icon linkedin" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCJubnEonnxEHu-t_pMaWZWw"
              target="_blank"
            >
              <BsYoutube className="icon youtube" />
            </a>
          </div>
        </div>
      </div>
      <div className="skills-marquee-container">
        <h1>My Skills</h1>
        <div className="marquee">
          <Marquee speed={50}>
            <div>
              <img src={react} alt="image of react.js logo" />
              <img src={mongodb} alt="image of mongodb logo" />
              <img src={nodejs} alt="image of node.js logo" />
              <img src={javascript} alt="image of javascript logo" />
              <img src={bootstrap} alt="image of bootstrap logo" />
              <img src={sass} alt="image of sass logo" />
            </div>
          </Marquee>
        </div>
        <p>
          I have experience working on production ready websites, as well as
          full-stack applications. Other skills i've been developing include
          Search Engine Optimization and Digital Marketing.
        </p>
      </div>
      <div className="about-me">
        <h1>About Me</h1>
        <div className="lottie">
          <Lottie animationData={Coding} />
        </div>
        <p>
          I'm a self-taught developer and currently serving active duty member
          of the North Carolina Air National Guard. Ever since I installed
          VSCode on my Thinkpad, I've been hooked. I'm confident that this is
          what I'm supposed to do with my life.<br></br> <br />
          Currently, in my free time you can find me studying JavaScript,
          Node.js, Express.js, and MongoDB. I'm driven to have a deep and
          versatile understanding of all the latest technologies. <br /> <br />
          If I'm not doing that, I'm definitely either at the gym, or driving
          around with my windows down listening to jazz or metal, or just taking
          a long walk at the local parks enjoying all the little things that
          life has to offer.
        </p>
      </div>
      <div className="projects">
        <h1>What I've been Making</h1>
        <div className="photos">
          <div className="flex-item">
            <h2>Cash Watch</h2>
            <img src={cash} alt="" />
            <div className="chip-box">
              <Chip label="MongoDB" variant="outlined" />
              <Chip label="Express" variant="outlined" />
              <Chip label="React" variant="outlined" />
              <Chip label="Node" variant="outlined" />
            </div>
          </div>
          <div className="flex-item">
            <h2>Dashboard App</h2>
            <img src={dashboard} alt="" />
            <div className="chip-box">
              <Chip label="JavaScript" variant="outlined" />
            </div>
          </div>
          <div className="flex-item">
            <h2>Gallery App</h2>
            <img src={gallery} alt="" />
            <div className="chip-box">
              <Chip label="Bootstrap" variant="outlined" />
              <Chip label="JavaScript" variant="outlined" />
            </div>
          </div>
          <div className="flex-item">
            <h2>Mugs Coffee</h2>
            <img src={mugs} alt="" />
            <div className="chip-box">
              <Chip label="BootStrap" variant="outlined" />
              <Chip label="JavaScript" variant="outlined" />
            </div>
          </div>
        </div>
      </div>
      <div className="contact">
        <h1>Reach Out To Me</h1>
        <Contact />
      </div>
    </div>
  );
}

export default Home;
