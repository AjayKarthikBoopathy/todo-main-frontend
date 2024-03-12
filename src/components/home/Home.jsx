import React from "react";
import "./home.css";
import { RiContactsBook2Fill } from "react-icons/ri";
// import { FaRegPenToSquare } from "react-icons/ri";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home d-flex justify-content-center align-items-center">
      <div className="container d-flex justify-content-center align-items-center flex-column ">

          <Link className="logo-brand" to="/">
            <RiContactsBook2Fill /> todo
            {/* <FaRegPenToSquare /> todo2 */}
          </Link>

        <h1 className="text-center">
          Stay Calm & Cool
        </h1>

        <h2 className="text-center">
          Use our app to set your daily plans
        </h2>

        
      </div>
    </div>
  );
};

export default Home;
