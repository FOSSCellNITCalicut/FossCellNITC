import React from "react";
import "./info.css";
import WhoImage from "./images/wwad1.png";
import WhatImage from "./images/wwad2.png";

const Info = () => {
  return (
    <>
      <div class="container1">
        <div class="text">
          <p class="who_title">Who we are</p>
          <p class="who_desc">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            dignissim arcu id ex commodo laoreet. Nullam eget risus neque. Sed
            accumsan elementum rutrum. Ut vulputate ultricies porttitor. Nunc
            euismod enim vehicula mi rhoncus, id maximus erat dictum. Sed varius
            auctor risus in vulputate. Donec accumsan tortor ut dui porttitor
            convallis. Nullam ut tellus metus. Nam viverra facilisis eros at
            aliquam. Donec vitae lacinia odio. Donec mattis elit dui, et mollis
            ipsum imperdiet non. Morbi eget mi ultricies, sodales augue vel,
            consectetur elit. Sed mattis vulputate lorem quis pellentesque.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            dignissim arcu id ex commodo laoreet. Nullam eget risus neque. Sed
            accumsan elementum rutrum. Ut vulputate ultricies porttitor. Nunc
            euismod enim vehicula mi rhoncus, id maximus erat dictum. Sed varius
            auctor risus in vulputate. Donec accumsan tortor ut dui porttitor
            convallis. Nullam ut tellus metus. Nam viverra facilisis eros at
            aliquam. Donec vitae lacinia odio. Donec mattis elit dui, et mollis
            ipsum imperdiet non.
          </p>
        </div>
      </div>
    </>
  );
};

export default Info;
