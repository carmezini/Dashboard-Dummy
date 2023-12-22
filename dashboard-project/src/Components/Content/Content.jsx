import { useContext, useState } from "react";
import "./Content.css";
import { ThemeContext } from "./../../ThemeContext";
//import Card from "./../CardTemplate/Card";
import img from "./../../assets/veeries_svg.svg"
import img_maps from "./../../assets/veeries_maps.svg"
import Analytics from "./../AnalyticsTemplate/Analytics";
import CircularProgress from "./../CircularProgress/CircularProgress";

const Content = () => {
  const { DarkTheme } = useContext(ThemeContext);

  const handleLaunchExcel = () => {
      window.open("https://appsource.microsoft.com/en-us/product/office/WA200004618?src=office&corrid=cc989a82-1a34-8cf7-529d-c97c8d8c2e9c&omexanonuid=&referralurl=");
  };

  const handleMapsClick = () => {
    window.open("https://veeries-maps.azurewebsites.net/");
  }

  const [value_ii] = useState(Math.floor(Math.random() * 100));
  const [value_ii_offset] = useState(315 - (value_ii / 100) * 315);

  return (
    <div className={`content ${DarkTheme && "dark"}`}>

      <span className="section-title">Brief Overview</span>
        <div className="row square">
          <Analytics chart_i />
        </div>

        <div className="row square">
          <Analytics chart_ii />
        </div>
  
        <div className="row square">
          <Analytics chart_iii />
        </div>


      <span className="section-title">Analytic Tools</span>

      <div className="row tall-square inv-bg">

        <div className="admin">
            <img
              src={img_maps}
              alt=""
              className="profile-img-maps"
            />

          <div className="info">
            <br />
            <br />
            <br />
            <br />
            <h2 className="admin-name">Try our new tool</h2>
          </div>

          <div className="admin-socials">
            <button className="button-maps" onClick={handleMapsClick}>Go to Veeries Maps</button>
          </div>
        </div>
      </div>

      <div className="row tall-square inv-bg">

        <div className="admin">
          <div className="profile">
            <img
              src={img}
              alt=""
              className="profile-img"
            />
          </div>

          <div className="info">
            <h2 className="admin-name">Download the Veeries Add-in Solution</h2>
          </div>

          <div className="admin-socials">
            <button className="button-excel" onClick={handleLaunchExcel}>Open Excel</button>
          </div>
          <div className="link-youtube">
            <a>Learn how to use it</a>
          </div>
        </div>
      </div>

      <div className="row side-rect">
        <section>

          <div className="summary">
            <h2 className="summary-title">Milei Effects</h2>
            <span className="summary-info">
              The peso lost over 50% of its value in the first week of the new government,
              narrowing the gap with the parallel market and
              making Argentine agricultural products more competitive.
            </span>
          </div>
          <CircularProgress
            color="#eb1515"
            value={50}
            offset={150}
          />
        </section>
      </div>

      <div className="row side-rect">
        <section>
          <CircularProgress
            color="#123A31"
            value={value_ii}
            offset={value_ii_offset}
          />

          <div className="more-details">
            <h1 className="title">Detailed Analysis</h1>
            <span className="txt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus consectetur dolore ea temporibus ducimus officiis hic
              ipsa reiciendis.
            </span>
          </div>
        </section>
      </div>
      <div className="row side-rect">
          <div className="details-reports">
            <h2 className="title-reports">Reports and Events this week</h2>
            <divider className="divider-reports" />
            <div className="txt-reports">
              <h4>Market Update Cana - on Wednesday, December 20, at 2:00 PM.</h4>
              <h4>14th Savee Soy - to be submitted on Thursday, December 21.</h4>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Content;
