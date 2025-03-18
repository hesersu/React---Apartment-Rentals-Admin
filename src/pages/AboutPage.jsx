import React from "react";
import mapImage from "../images/map.png";

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-us">
        <h2>HomeCompany – furnished Temporary living</h2>
        <p>
          We are your contact. Directly on the spot. Corporate cultures are
          changing dynamically. Exciting new challenges encourage flexibility
          and mobility. Fully equipped, ready-to-move-in flats and temporary
          rentable flats are becoming increasingly attractive.
        </p>
      </div>

      <div className="new-perspectives">
        <h3>New perspectives… the Kris Apartment Rental brand</h3>
        {/* <p>
          The first hour struck in the 1980s, when regional agencies merged to
          form a national association. HomeCompany has been a Germany-wide brand
          since the 1990s. Always up to date, we have played a key role in
          shaping and further developing furnished rentals. Owner-managed local
          agencies, an overall marketing concept, uniform quality standards, a
          high level of service quality, commitment and passion and justify our
          strengths and performance. The constant dialogue between (and with)
          the agencies bundles our strengths and develops tremendous synergy
          effects. This is how we collectively set milestones in the temporary
          living segment. HomeCompany eG combines the power of the national
          brand with the spirit of the agency teams. A symbiosis in which
          visions can be experienced. ‘Big brand group’ and ‘small local
          agency’. Analytical and heartfelt. Visionary and realistic. Strategic
          and personal.
        </p> */}
        <img src={mapImage} alt="map" className="mapImage" />
      </div>
    </div>
  );
};

export default AboutPage;
