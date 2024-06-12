import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>TechyStar</h1>
          <p>Solution to all your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
          <p>
            We are your one and only solution to the tech problems your face
            every day.We are leading tech company whose aim is to increase the
            problem solving ability to children.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>Who we are ?</h1>
          <p>
            Who We Are At TechyStar, we are your ultimate solution to the
            everyday tech problems you face. As a leading tech company, our
            mission is to enhance the problem-solving abilities of children by
            providing innovative and effective technological solutions. We
            understand the importance of equipping young minds with the skills
            and knowledge needed to navigate the digital world, and we are
            dedicated to making technology accessible, understandable, and
            exciting. Our team of passionate professionals is committed to
            inspiring the next generation through comprehensive educational
            programs, interactive tools, and hands-on projects. By fostering a
            deep understanding and mastery of technology, we empower children to
            explore, create, and solve problems with confidence. At TechyStar,
            we believe that every tech challenge is an opportunity for growth,
            and we are here to support and guide children on their journey to
            becoming the innovators of tomorrow.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAmazonCircle/>
              <p>Amazon</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillYoutube/>
              <p>Youtube</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillInstagram/>
              <p>Instagram</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
