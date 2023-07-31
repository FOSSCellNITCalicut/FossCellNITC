import React from "react";
import "./info.css";
import WhoImage from "../../images/wwad1.png";
import WhatImage from "../../images/wwad2.png";

const Info = () => {
  return (
    <>
      <div class="container1" id="who">
        <div class="text">
          <p class="who_title">Who we are</p>
          <p class="who_desc">
          We are FOSSCell NITC -  a group of students from the National Institute of Technology Calicut, who are passionate about Free and Open-Source Software (FOSS). Our goal is to spread the knowledge of Free Software and raise awareness about the four fundamental freedoms that come bundled with each of these softwares. Our community is a bunch of enthusiastic free software evangelists and hobbyist developers who are committed to promoting and developing free software for the greater good.
          </p>
        </div>
        <div class="image">
          <img
            src={WhoImage}
            alt="wwad1"
            border="0"
            className="who_image"
          />
        </div>
      </div>

      <div class="container2">
        <div class="image">
          <img
            src={WhatImage}
            alt="wwad2"
            border="0"
            className="what_image"
          />
        </div>
        <div class="text">
          <p class="who_title">What we do</p>
          <p class="what_desc">
          Through workshops, training sessions, and software development, we empower individuals to explore FOSS, develop new skills, and make a meaningful impact. We foster collaboration, community building, and inclusivity, organizing events like FOSSMeet to bring together global experts who share their knowledge and insights.
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;
