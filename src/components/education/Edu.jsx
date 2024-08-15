import React from "react";
import "./edu.css";

function Edu() {
  return (
    <>
      <section id="about">
        <div className="hero__main" data-aos="fade-up">
          <label htmlFor="" className="edu__title">
            About
          </label>
          <p className="edu__p">
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
          <div className="main__edu">
            <div class="work" data-aos="fade-up">
              <h3>Education</h3>
              <ul>
                <li>
                  <span>Bachelor’s of Engineering – CSE</span>
                  <small>Shri Ramdeobaba College of Engineering, Nagpur</small>
                  <small>8.58 CGPA</small>
                </li>
                <li>
                  <span>Class 12</span>
                  <small>Brijlal Biyani Science College, Amravati</small>
                  <small>84%</small>
                </li>
                <li>
                  <span>Class 10</span>
                  <small>Narayandas Laddha High School, Amravati</small>
                  <small>95.20%</small>
                </li>
              </ul>
            </div>
            <div class="edu">
              <h3>Experience</h3>
              <ul>
                <li>
                  <span>Full Stack Developer [Nagpur, MH]</span>
                  <small>Carbonshelf</small>
                  <small>Sep 2023 - Present</small>
                </li>
                <li>
                  <span>Associate Product Engineer Intern [Bangalore, KA]</span>
                  <small>DeltaX</small>
                  <small>Feb 2023 - August 2023</small>
                </li>
                <li>
                  <span>Competitive Problem Setter</span>
                  <small>CodeChef RCOEM Chapter</small>
                  <small>Sep 2021 - May 2023</small>
                </li>
                <li>
                  <span>Summer Intern [Remote]</span>
                  <small>Persistent Systems</small>
                  <small>Mar 2022 - June 2022</small>
                </li>
                <li>
                  <span>Executive Committee Member</span>
                  <small>Compusys Student Society</small>
                  <small>Sep 2020 - Oct 2021</small>
                </li>
                <li>
                  <span>Frontend Developer Intern [Remote]</span>
                  <small>Reasonable Books</small>
                  <small>May 2021 - Jul 2021</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Edu;
