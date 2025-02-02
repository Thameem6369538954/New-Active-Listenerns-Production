import React,{useState,useEffect} from "react";
import Navbar from "../Components/Navbar";
import GetinTouch from "../Components/GetinTouch";
import Footer from "../Components/Footer";
import Therapycategories from "../Components/Therapycategories";
import earlyAgeright2 from "../Images/earlyAgeright.png";
import earlyAgeleft from "../Images/earlyAgeleft.png";
import Rounda from "../Images/Rounda.png";
import Roundb from "../Images/Roundb.png";
import earlyAgeBoxImg from "../Images/earlyAgeBoxImg.png";
import "../Css/EarlyAgeGadgetExposure.css";
import Group119 from "../Images/Group 119.png";
import Maskgroup from "../Images/Mask group.png";
import cover from "../Images/cover.png";
import PodcastRed from "../Images/PodcastRed.png";
import axios from "../Utils/Baseurl.js";
import { toast } from "react-toastify";
import WHYAL from "../Videos/WHYAL.mp4";
import { Link } from "react-router-dom";
import Breadcrumps from "../Components/Breadcrumps";
const EarlyAgeGadgetExposure = () => {
   const scrollToTop = () => {
     window.scrollTo(0, 0);
   };
     const [isPlaying, setIsPlaying] = useState(false);

     const togglePlay = () => {
       setIsPlaying(!isPlaying);
     };
  const [rows, setRows] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("admin/get_allVideos");
        console.log(response.data.reslt,"ppppppppppppppppppppppppppppppp"); // Log the second object in the response
        if (response) {
          // const videoData = response.data.reslt[3].source; // Retrieve the video data
          // Now you can use videoData to set the state or display the video
setRows(response.data.reslt[2].source);        
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
    <div className="home-main">
      <Navbar />
      <Breadcrumps />
      <div className="header">
        <div className="header-container">
          <img
            src={earlyAgeleft}
            data-aos="fade-right"
            data-aos-duration="1000"
            alt=""
          />
          <div className="hdr-text">
            <h1 data-aos="fade-up" data-aos-duration="1000">
              Early Age{" "}
            </h1>
            <h2 data-aos="fade-up" data-aos-duration="2000">
              Gadget
            </h2>
            <h3 data-aos="fade-up" data-aos-duration="3000">
              Exposure
            </h3>
          </div>
          <img
            src={earlyAgeright2}
            data-aos="fade-right"
            data-aos-duration="1000"
            alt=""
          />
        </div>
        <div className="hdr-btm-text">
          {/* <p data-aos="zoom-in" data-aos-duration="1000">
            We believe that early age gadget exposure, adaptaion to mobile among
            children has now led to a time where there decrease in learning
          </p> */}
          {/* <button>Talk to us</button> */}
        </div>

        {/* <div className="hdr-btm-text">
          <p data-aos="zoom-in" data-aos-duration="1000">
            We believe that early age gadget exposure, adaptaion to mobile among
            children has now led to a time where there decrease in learning
          </p>
          <button>Why Active Listeners?</button>
        </div> */}
      </div>

      <div className="e-green-box">
        <div className="e-green-box-text">
          <h1>Impact of Gadgets on </h1>
          <p>Children</p>
        </div>

        <div className="e-green-box-container">
          {rows && (
            <video
              controls // Ensure controls are enabled for user interaction
              className="erly-age-video"
              onClick={togglePlay}
              // onPlay={() => setIsPlaying(true)}
              // onPause={() => setIsPlaying(false)}
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
  );
};

export default EarlyAgeGadgetExposure;
