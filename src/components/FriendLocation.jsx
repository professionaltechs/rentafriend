import React from "react";

// STYLES
import "../styles/friendLocation.css";
const FriendLocation = () => {
  return (
    <div className="friendLocationContainer">
      <img
        className="friendLocationImage"
        src="https://d35el3isaig3lb.cloudfront.net/8195fbc3-deeb-43ae-9c8a-2ef37d400be2/images/banner-bg-143-1.jpg"
        alt=""
      />
      <div className="friendLocationInner">
        <div className="friendLocationData">
          <p className="friendLocationMainHeading">
            RentAFriend.com has Friends from around the world available for
            hire!{" "}
          </p>
          <p className="friendLocaionPara">
            Need a platonic friend to accompany you to that event, show you
            around town, dine out, hang out, introduce you to others, share a
            common interest, teach you an uncommon craft? Hire one! Locally or
            abroad. It’s not only fashionably in, it’s win-win!{" "}
          </p>
          <p className="enterLocationHeading">
            ENTER A LOCATION OF WHERE YOU ARE LOOKING TO RENT A FRIEND{" "}
          </p>
          <p className="cityStateCountry">Search by: City, State, Country </p>
          <div className="friendLocaiotnInputContainer">
            <div className="friendLocaiotnInputContainerInner">
              <input
                type="text"
                className="friendLocationInput"
                placeholder="Example: Karachi"
              />
              <button className="friendLocationSearch">Search</button>
            </div>
            <div className="friendLocationInputGender">
              <div className="friendLocationInputGenderInner">
                <input type="radio" id="all" name="gender" />
                <label htmlFor="all" className="genderLabel">All Friends</label>
              </div>
              <div className="friendLocationInputGenderInner">
                <input type="radio" id="female" name="gender" />
                <label htmlFor="female" className="genderLabel">Female Friends</label>
              </div>
              <div className="friendLocationInputGenderInner">
                <input type="radio" id="male" name="gender" />
                <label htmlFor="male" className="genderLabel">Male Friends</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendLocation;
