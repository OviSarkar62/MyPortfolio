import "animate.css/animate.min.css";
import React from "react";
import Header from "../components/Header";

function About() {
  const handleDownload = () => {
    const link =
      "https://drive.google.com/file/d/1nsvlbc_5H9nQjJZXWCIYSQSrBe2OI31H/view?usp=drive_link";
    window.open(link, "_blank");
  };

  return (
    <div>
      <Header />
      <div className="container contact mt-5">
        <div className="animated2">
          <div className="row pt-5">
            <div className="col-md-6">
              <div className="contact-form m-2 p-5 n-box2">
                <h3 className="font-bold" style={{ textAlign: "center" }}>
                  ABOUT ME
                </h3>
                <hr />
                <div className="card" style={{ backgroundColor: "black" }}>
                  <div className="card-body p-4">
                    <p
                      style={{
                        color: "white",
                        fontFamily: "Ubuntu, sans-serif",
                        fontSize: "16px",
                        lineHeight: "1.5",
                      }}
                    >
                      Name: Ovi Sarkar <br />
                      Department: Electrical & Computer Engineering <br />
                      University: Rajshahi University of Engineering &
                      Technology <br />
                      Email: ovisarkareceian@gmail.com <br />
                      LinkedIn:{" "}
                      <a
                        href="https://www.linkedin.com/in/ovisarkar1610052/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white" }}
                      >
                        https://www.linkedin.com/in/ovisarkar1610052/
                      </a>{" "}
                      <br />
                      GitHub:{" "}
                      <a
                        href="https://github.com/OviSarkar62"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "white" }}
                      >
                        https://github.com/OviSarkar62
                      </a>{" "}
                      <br />
                      Contact: +8801827602947 <br/>
                    </p>
                  </div>
                  <div
                    className="button-container"
                    style={{ backgroundColor: "black" }}
                  >
                    <button className="primary-button" onClick={handleDownload}>
                      RESUME
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src="./contactus.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
