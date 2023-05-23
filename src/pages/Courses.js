import React from "react";
import Header from "../components/Header";
import courseslist from "./coursesdata";

function navigateToLink(link) {
  window.open(link, "_blank");
}

function Courses() {
  return (
    <div>
      <Header />
      <div
        className="courses-intro"
        style={{ backgroundImage: `url('./courses.svg')` }}
      >
        <div className="courses-intro-content">
          <h1>My Learned Courses</h1>
          <div>
            <p>
              “I don't know everything but I tried to learn many tech things
              which a Computer Science graduate should know. The best I have
              done is practicing them by doing projects to find what I really
              get passionate about.”
            </p>
            <div className="button-container">
              <button className="primary-button">
                <a href="#courses-list">GET STARTED</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container courses-list mb-5" id="courses-list">
        <hr />
        <h3 className="font-bold" style={{ color: "white" }}>
          Take a look at my learned courses
        </h3>

        <div className="row mt-5">
          {courseslist.map((course) => (
            <div className="col-md-4" key={course.title}>
              <div className="position-relative course">
                <img src={course.image} alt="" className="w-100" />
                <div className="course-content w-100">
                  <h4>{course.title}</h4>
                  <hr />
                  <p>{course.description}</p>
                  <button
                    className="primary-button"
                    onClick={() => navigateToLink(course.link)}
                  >
                    VIEW
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
