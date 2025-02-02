import React,{useState,useEffect} from "react";

import Navbar from "../Components/Navbar";
import GetinTouch from "../Components/GetinTouch";
import Footer from "../Components/Footer";
import Therapycategories from "../Components/Therapycategories";
import CovidA from "../Images/CovidA.png";
import CovidB from "../Images/CovidB.png";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import earlyAgeBoxImg from "../Images/earlyAgeBoxImg.png";
import "../Css/EarlyAgeGadgetExposure.css";
import Group119 from "../Images/Group 119.png";
import Maskgroup from "../Images/Mask group.png";
import cover from "../Images/cover.png";
import PodcastRed from "../Images/PodcastRed.png";
import WHYAL from "../Videos/WHYAL.mp4";
import { Link } from "react-router-dom";
import Breadcrumps from "../Components/Breadcrumps";
import axios from "../Utils/Baseurl.js";
import { toast } from "react-toastify";

const CurrentTimes = () => {
   const scrollToTop = () => {
     window.scrollTo(0, 0);
   };

     const [rows, setRows] = useState("");
     useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await axios.get("admin/get_allVideos");
           console.log(response.data.reslt, "ppppppppppppppppppppppppppppppp"); // Log the second object in the response
           if (response) {
             // const videoData = response.data.reslt[3].source; // Retrieve the video data
             // Now you can use videoData to set the state or display the video
             setRows(response.data.reslt[10].source);
           } else {
             toast.error("something went wrong!!");
           }
         } catch (error) {
           console.log(error);
         }
       };
       fetchData();
     }, []);
  return (
    <div>
      <div className="home-main">
        <Navbar />
        <Breadcrumps />
        <div className="header">
          <div className="header-container">
            <img
              src={CovidB}
              data-aos="fade-right"
              data-aos-duration="1000"
              alt=""
            />
            <div className="hdr-text">
              <h1 data-aos="fade-up" data-aos-duration="1000">
                Post Covid
              </h1>
              <h2 data-aos="fade-up" data-aos-duration="2000">
                Current
              </h2>
              <h3 data-aos="fade-up" data-aos-duration="3000">
                Times
              </h3>
            </div>
            <img
              src={CovidA}
              data-aos="fade-right"
              data-aos-duration="1000"
              alt=""
            />
          </div>
          <div className="hdr-btm-text"></div>
        </div>
        <div className="e-green-box">
          <div className="e-green-box-text">
            <h1>Impact of Covid on </h1>
            <p>Today’s Life</p>
          </div>

          <div className="e-green-box-container">
            {rows && (
              <video
                controls // Ensure controls are enabled for user interaction
                className="erly-age-video"
              >
                <source src={rows} type="video/mp4" />
                {/* Make sure src and type are correctly set */}
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
        <div className="getyoukow-main-container">
          <div className="getyoukow-container">
            <img src={cover} alt="" />
            <img src={PodcastRed} className="getyoukow-image-red" alt="" />
            <div className="getyoukow-text-recomended">
              <p>FEATURED EPISODE</p>
              <h1>Are you a Perplexed Mind Person?</h1>
              <Link to="/podcast" onClick={() => window.scrollTo(0, 0)}>
                <button>Watch Now </button>
              </Link>
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

export default CurrentTimes;
