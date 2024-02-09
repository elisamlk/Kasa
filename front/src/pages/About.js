import React, { useState, useEffect } from "react";
import BannerAbout from "../components/banner-about/BannerAbout";
import Collapse from "../components/collapse/Collapse";
import "./About.scss";

const About = () => {
  const [about, setAbout] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        const jsonData = await response.json();
        setAbout(jsonData.about);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [about]);
  return (
    <main>
      <BannerAbout />
      <section className="theme-area">
        {about.map((item) => (
          <Collapse title={item.name} content={item.content} />
        ))}
      </section>

    </main>
  );
}

export default About;
