import React from "react";
import { DiNodejs } from "react-icons/di";
import {
  FaBootstrap,
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { SiExpress, SiMongodb, SiMui, SiMysql, SiRedux } from "react-icons/si";
function Courosel() {
  return (
    <div>
      <div className="courosel-parent position-relative" id="courosel">
        <h1 className="position-absolute top-0 start-0 end-0 text-center mt-5">
          ACQUIRED TECHNOLOGIES
        </h1>

        <div className="gallery">
          <span style={{ "--i": 1 }}>
            <FaReact color="cyan" />
          </span>

          <span style={{ "--i": 2 }}>
            <DiNodejs color="green" />
          </span>

          <span style={{ "--i": 3 }}>
            <SiExpress color="white" />
          </span>

          <span style={{ "--i": 4 }}>
            <SiMysql color="orange" />
          </span>

          <span style={{ "--i": 5 }}>
            <SiMongodb color="green" />
          </span>

          <span style={{ "--i": 6 }}>
            <SiRedux color="purple" />
          </span>

          <span style={{ "--i": 7 }}>
            <FaJsSquare color="yellow" />
          </span>

          <span style={{ "--i": 8 }}>
            <FaPython color="cyan" />
          </span>

          <span style={{ "--i": 9 }}>
            <FaBootstrap color="violet" />
          </span>

          <span style={{ "--i": 10 }}>
            <FaHtml5 color="orange" />
          </span>

          <span style={{ "--i": 11 }}>
            <FaCss3 color="blue" />
          </span>

          <span style={{ "--i": 12 }}>
            <SiMui color="skyblue" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Courosel;
