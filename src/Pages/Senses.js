import React, { useState } from "react";
import "../Css/Senses.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import Yellowline from "../Images/Yellowline.png";
import { TiArrowRightThick } from "react-icons/ti";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import Kadhoolu from "../Images/Kadhoolu.png";
import Nool from "../Images/Nool.png";
import Coc from "../Images/Coc.png";
import Gitarakka from "../Images/Gitarakka.png";
import spa from "../Images/spa.png";
import Children from "../Images/Childern.png";
import Menbulb from "../Images/Menbulb.png";
import GetinTouch from "../Components/GetinTouch";
import { InlineWidget } from "react-calendly";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Breadcrumps from "../Components/Breadcrumps";
import { toast } from "react-toastify";
import { SlArrowLeft } from "react-icons/sl";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import About from "../Images/About.png"
import SensesA from "../Images/SensesA.png"
import SensesB from "../Images/SensesB.png"

const Senses = () => {
 const [isActive, setIsActive] = useState(false);

 const toggleSidebar = () => {
   setIsActive(!isActive);
 };
  
  const [open,setOpen] = useState(false);

  const handleOpen = () =>{
    setOpen(!open)
  }
  const [wantComplimentaryCall, setWantComplimentaryCall] = useState(false);
  const appointmentSubmit = (e) => {
    e.preventDefault();
    setWantComplimentaryCall(true);
  };

  const handleClose = () => {
    setWantComplimentaryCall(false);
    // setCloseClick(true);
  };

  return (
    <div className="over-flow">
      <Navbar />
      <div className="secnses-main-con">
        <Breadcrumps />
        <div className="senses-heading">
          {/* <p>Therapy for you!</p> */}
          <img src={SensesA} alt="" />
          <div className="senses-heading-inner">
            <h1>Senses</h1>
            <h2>Resurrection</h2>
            {/* <img src={Yellowline} className="Yellowline" alt="" /> */}
          </div>
          <img src={SensesB} alt="" />
        </div>
        {/* <div className="green-bourd-grief">
          <div className="card-grif">
            <div className="circle">
              <img src={Roundb} alt="" />
            </div>
            <div className="circle-b">
              <img src={Rounda} alt="" />
            </div>

            <div className="card-inner">
              <div>
                <h1>Senses</h1>
                <p>Resurrection</p>
              </div>

              <img src={Kadhoolu} alt="" />
            </div>
          </div>
        </div> */}
        {wantComplimentaryCall ? (
          <>
            <span className="close-calendly" onClick={handleClose}>
              <AiOutlineCloseCircle className="senestop-icon" />
            </span>

            <InlineWidget
              url="https://calendly.com/teammentoons/active-listeners"
              className="calendly-embed"
            />
          </>
        ) : (
          <></>
        )}

        {wantComplimentaryCall ? (
          <></>
        ) : (
          <div className="tele-buttons">
            <button onClick={appointmentSubmit}>Get Appointment</button>
            <p>Book Your Complimentary 15-min Call</p>
            <TiArrowRightThick
              onClick={appointmentSubmit}
              className="arrow-for-tele"
            />
          </div>
        )}

        <div className="sense-main-con">
          <div className={`container ${isActive ? "active" : ""}`}>
            {/* Content of your sidebar */}
            <div className="inside-box-sens">
              <div className="side-indicater-txt">
                <ul className="sense-theropy">
                  <h1>Body Essential Salts and Oils :</h1>
                  <li>Brain boosting diets</li>
                  <li>Flavour Exploration</li>
                  <h1>Music and Art :</h1>
                  <li>Mandala Art Books</li>

                  <li>DIY activities</li>
                </ul>
              </div>
              <div className="side-indicater-Video">
                <img src={About} alt="" />
              </div>
            </div>
            {/* <button >Toggle Sidebar</button> */}
            <div className="open" onClick={toggleSidebar}>
              {isActive ? (
                <MdOutlineKeyboardDoubleArrowLeft />
              ) : (
                <MdOutlineKeyboardDoubleArrowRight />
              )}
            </div>
          </div>
        </div>

        {/* <div className="therapy-heading">
          <p>Therapies in senses Resurrecction</p>
          <h1> Reviving your</h1>
          <h2>Senses</h2>
          <img src={Yellowline} className="Yellowline" alt="" />
          <span>
            We believe that early age gadget exposure adaption to mobile among
            Children has now led to a time where there is decrease in learning
          </span>
        </div> */}
        {/* <div className="senses-category-cards">
          <div className="senses-card">
            <h1>Body Essential Salts & Oils</h1>
            <img src={Nool} alt="" />
          </div>

          <div className="senses-card">
            <h1>Music & Art</h1>
            <img src={Gitarakka} alt="" />
          </div>

          <div className="senses-card">
            <h1>Mandala Art Books</h1>
            <img src={Children} alt="" />
          </div>

          <div className="senses-card">
            <h1>brain-boosting diets</h1>
            <img src={Menbulb} alt="" />
          </div>

          <div className="senses-card">
            <h1>Flavour Exploration</h1>
            <img src={Coc} alt="" />
          </div>

          <div className="senses-card">
            <h1>DIY activities</h1>
            <img src={spa} alt="" />
          </div>
        </div> */}
      </div>

      {/* {wantComplimentaryCall ? (
        <>
          <span className="close-calendly" onClick={handleClose}>
            <AiOutlineCloseCircle className="senesbottom-icon" />
          </span>

          <InlineWidget
            url="https://calendly.com/teammentoons/active-listeners"
            className="calendly-embed"
          />
        </>
      ) : (
        <></>
      )}

      {wantComplimentaryCall ? (
        <></>
      ) : (
      )} */}
      {/* <div className="tele-buttons">
        <button className="get-support" onClick={handleOpen}>
          Get Support
        </button>
      </div>
      {open && (
        <div className="supoort-box">
          <AiOutlineCloseCircle onClick={handleOpen} className="support-icon" />
          <div className="suport-inside">
            <h1>Phone No: </h1>
            <p>+91 7892858593</p>
          </div>
          <div className="suport-inside">
            <h1>Email: </h1>
            <p>activelisteners2024@gmail.com</p>
          </div>
        </div>
      )} */}

      <GetinTouch />
      <Footer />
    </div>
  );
};

export default Senses;
