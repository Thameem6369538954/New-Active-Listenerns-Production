import React, { useState,useEffect } from "react";
import Navbar from "../Components/Navbar.js";
import Enterleft from "../Images/Enterleft.png";
import Enterright from "../Images/Enterright.png";
import Navarrow from "../Images/Navarrow.png";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import MoAddiction from "../Images/MoAddiction.png";
import Maskgroup from "../Images/Mask group.png";
import PodcastRed from "../Images/PodcastRed.png";
import cover from "../Images/cover.png";
import Therapycategories from "../Components/Therapycategories.js";
import Footer from "../Components/Footer.js";
import GetinTouch from "../Components/GetinTouch.js";
import { Link } from "react-router-dom";
import { InlineWidget } from "react-calendly";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Brine from "../SmallElements/Brine.png";
import GreenClock from "../SmallElements/GreenClock.png";
import OldTime from "../SmallElements/OldTime.png";
import Pinkmen from "../SmallElements/Pinkmen.png";
import HandYellow from "../SmallElements/HandYellow.png";
import BrinBuzzle from "../SmallElements/BrinBuzzle.png";
import Breadcrumps from "../Components/Breadcrumps";
import WHYAL from "../Videos/WHYAL.mp4";
import axios from "../Utils/Baseurl.js";
import { ToastContainer, toast } from "react-toastify";

const EntertainmentandperformanceAddiction = () => {
   const scrollToTop = () => {
     window.scrollTo(0, 0);
   };
  const [rows, setRows] = useState("");
  const [rows2, setRows2] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("admin/get_allVideos");
        console.log(
          response.data.reslt,
          "array----------------------->>obj"
        ); // Log the second object in the response
        if (response) {
          // const videoData = response.data.reslt[1]; // Retrieve the video data
          // Now you can use videoData to set the state or display the video
          setRows(response.data.reslt[8].source);
          setRows2(response.data.reslt[9].source);
        } else {
          toast.error("something went wrong!!");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
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
    <div>
      <div>
        <Navbar />
        <Breadcrumps />
        <div className="mobile-addiction-main-container">
          <div className="mobile-addiction-header">
            <div className="header-container">
              <img
                src={Enterleft}
                data-aos="fade-right"
                data-aos-duration="1000"
                alt=""
                width={"150px]"}
              />
              <div className="hdr-text">
                <h1 data-aos="fade-up" data-aos-duration="1000">
                  For Teenagers{" "}
                </h1>
                <h2 data-aos="fade-up" data-aos-duration="2000">
                  Entertainment & Performance?
                </h2>
                <h3 data-aos="fade-up" data-aos-duration="3000">
                  Addiction
                </h3>
              </div>
              {/* <img
                src={Enterright}
                data-aos="fade-right"
                data-aos-duration="1000"
                alt=""
              /> */}
              {rows && (
                <video
                  controls // Ensure controls are enabled for user interaction
                  className="Header-video-top"
                  // onClick={togglePlay}
                  // onPlay={() => setIsPlaying(true)}
                  // onPause={() => setIsPlaying(false)}
                >
                  <source src={rows} type="video/mp4" />
                  {/* Make sure src and type are correctly set */}
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <div className="btn-compo">
              {wantComplimentaryCall ? (
                <>
                  <div className="sub-telecall">
                    <span
                      className="close-calendly-addiction"
                      onClick={handleClose}
                    >
                      <AiOutlineCloseCircle className="senestop-icon" />
                    </span>
                    <div className="new-imsa">
                      <InlineWidget
                        url="https://calendly.com/teammentoons/active-listeners"
                        // className="calendly-embed-header"
                        // style={{ width: "10%", height: "100%" }}
                      />
                    </div>
                  </div>
                </>
              ) : (
                <></>
              )}

              {wantComplimentaryCall ? (
                <></>
              ) : (
                <div>
                  <button onClick={appointmentSubmit}>Get Appointment</button>
                  <img onClick={appointmentSubmit} src={Navarrow} alt="" />
                </div>
              )}
            </div>
            <p>
              We believe that early gadget exposure,Adaptation to MobilePhones
              among children has now led to a time where ther Decrease in
              learning
            </p>
          </div>

          <div className="grean-box-mobile-addiction">
            <div className="mobile-addiction-box-green">
              {/* <img
                src={Roundb}
                style={{
                  marginTop: "-40%",
                  marginLeft: "-10%",
                  zIndex: "-1",
                  width: "20%",
                }}
                alt=""
              /> */}

              <div className="inside-mobile-addiction-txt">
                <h1>Are you Addicted to the Entertainment & Performance?</h1>
                {/* <img
                  src={MoAddiction}
                  style={{
                    width: "60%",
                  }}
                  alt=""
                /> */}
                {rows2 && (
                  <video
                    controls // Ensure controls are enabled for user interaction
                    className="Header-video-top"
                    // onClick={togglePlay}
                    // onPlay={() => setIsPlaying(true)}
                    // onPause={() => setIsPlaying(false)}
                  >
                    <source src={rows2} type="video/mp4" />
                    {/* Make sure src and type are correctly set */}
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
              {/* <img
                src={Rounda}
                style={{
                  marginRight: "-17%",
                  marginTop: "35%",
                  width: "30%",
                  zIndex: "-1",
                }}
                alt=""
              /> */}
            </div>
          </div>

          <div className="observed-result">
            <div className="observed-result-header">
              <div className="Subscribe-heading">
                <p>Services we Offer</p>
                <h1>Causes of </h1>
                <h2>Entertainment & Performance Addiction</h2>
              </div>
            </div>
            {/* boxes */}
            <div className="observed-result-cate">
              <div className="observed-result-main">
                {/* Fist-box */}
                <div className="observed-result-box">
                  <div className="observed-result-box-align">
                    <img src={Brine} alt="" />
                    <h2>Mental health issues</h2>
                    <p>
                      Overuse of mobile devices can cause eye strain, pain, and
                      sleep disruption.
                    </p>
                  </div>

                  <div className="observed-result-box-align">
                    <img src={GreenClock} alt="" />
                    <h2>Academic or work decline</h2>
                    <p>
                      Watching Tv Shows results in academic neglect, missed
                      assignments, and poor performance.
                    </p>
                  </div>
                </div>
                {/* second-box */}
                <div className="observed-result-box">
                  <div className="observed-result-box-align">
                    <img src={OldTime} alt="" />
                    <h2>Neglected Responsibilities</h2>
                    <p>
                      Enetrtainment Addiction may neglect tasks, causing
                      academic, work, or familial problems.
                    </p>
                  </div>

                  <div className="observed-result-box-align">
                    <img src={Pinkmen} alt="" />
                    <h2>Sleep Deprivation</h2>
                    <p>
                      Enetrtainment addiction disrupts sleep, worsening physical
                      and mental health issues.
                    </p>
                  </div>
                </div>
                {/* therod-box */}
                <div className="observed-result-box">
                  <div className="observed-result-box-align">
                    <img src={HandYellow} alt="" />
                    <h2>Low Self Esteen</h2>
                    <p>
                      Exposure to violent Platform desensitizes, fosters
                      aggression, and triggers conflicts.
                    </p>
                  </div>

                  <div className="observed-result-box-align">
                    <img src={BrinBuzzle} alt="" />
                    <h2>Lack of real-life experiences</h2>
                    <p>
                      Enetrtainment addiction offers temporary escape but
                      hinders personal growth ultimately.
                    </p>
                  </div>
                </div>
              </div>
              <div className="yellow-box-mobile-addiction">
                {/* <div className="mobile-addiction-yellow-box">
                  <h4>
                    Get to know How much you are Addicted to Mobile Phones
                  </h4>
                  <button>Take Test</button>
                  <img src={Maskgroup} className="maskgroup-mob" alt="" />
                </div> */}
                <div className="mobile-addiction-yellow-box">
                  <div className="podcast-ylo">
                    <img src={PodcastRed} alt="" />
                  </div>
                  <div className="over">
                    <img src={cover} alt="" />
                    <span>Recommended Podcast</span>
                    <h4>Are you Addicted to Mobile phone?</h4>
                    <Link to="/podcast">
                      {" "}
                      <button onClick={scrollToTop} >Watch Now</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Therapycategories />
        <GetinTouch />
        <Footer />
      </div>
    </div>
  );
};

export default EntertainmentandperformanceAddiction;
