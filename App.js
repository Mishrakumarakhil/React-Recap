import React from "react";
import ReactDOM from "react-dom/client";

{
  /* <div class="parent">
    <div class="child">
<h1>I am h1 tag</h1>
<h1>I am h2 tag</h1>
    </div>
     <div class="child2">
<h1>I am h1 tag</h1>
<h1>I am h2 tag</h1>
    </div>
</div> */
}

// const parent=React.createElement(
//     "div",
//     {id:"parent"},
//   [  React.createElement(
//         "div",
//         {id:"child"},
//       [  React.createElement(
//             "h1",
//             {},
//             "I am h1 Tag"
//             ),React.createElement(
//                 "h2",
//                 {},
//                 "I am h2 Tag"
//                 )]

//             ),

//             React.createElement(
//                 "div",
//                 {id:"child2"},
//               [  React.createElement(
//                     "h1",
//                     {},
//                     "I am h1 Tag"
//                     ),React.createElement(
//                         "h2",
//                         {},
//                         "I am h2 Tag"
//                         )]

//                     )

//         ]

//             )

// const heading=React.createElement("h1",{id:"heading",xyz:"abs"},"Hello world from React!")

// createElement(TagName,{attribute of tag},This to add in tag||children)

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo
          "
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

// 6e50ecf050f2951290020b6270ca6627
const RestroCard = (props) => {
  const { restroData } = props;
  return (
    <div className="restro-card" style={styleCard}>
      <img
        className="restro-img"
        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/"+restroData.info.cloudinaryImageId}
        alt="restro-logo
      "
      />

      <h3>{restroData.info.name}</h3>
      <h4>{restroData.info.cuisines.join(" , ")}</h4>
      <h4>{restroData.info.avgRating} stars</h4>
      <h4> {restroData.info.costForTwo / 100} Cost for two</h4>
      <h4> {restroData.info.deliveryTime} minutes</h4>
    </div>
  );
};

const restroObj = {
  info: {
    id: "606918",
    name: "Chickpet Donne Biryani House",
    city: "1",
    slugs: {
      restaurant: "chickpet-donne-biryani-house-jayanagar-jayanagar",
      city: "bangalore",
    },
    cloudinaryImageId: "6e50ecf050f2951290020b6270ca6627",
    address: "27-44 /140  9th main 3rd block jayanagar Bengaluru -560011",
    locality: "3rd Block",
    areaName: "Jayanagar",
    costForTwo: "25000",
    costForTwoMessage: "₹250 FOR TWO",
    cuisines: ["Biryani", "Kebabs", "South Indian"],
    avgRating: 4.1,
    feeDetails: {},
    avgRatingString: "4.1",
    totalRatingsString: "500+",
    promoted: true,
    adTrackingId:
      "cid=11335617~p=0~adgrpid=11335617#ag1~mp=SWIGGY_IN~bl=FOOD~eid=8f8f6bbf-6645-49b8-b007-9427cf6486eb~aet=RESTAURANT~aeid=606918~srvts=1708350137244~st=biryani",
    sla: {
      deliveryTime: 39,
      minDeliveryTime: 35,
      maxDeliveryTime: 40,
      lastMileTravel: 5,
      serviceability: "SERVICEABLE",
      rainMode: "RAIN_MODE_NONE",
      slaString: "35-40 MINS",
      lastMileTravelString: "5.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      opened: true,
      restaurantClosedMeta: {},
    },
    badges: {},
    aggregatedDiscountInfoV3: {
      header: "30% OFF",
      subHeader: "UPTO ₹75",
    },
    ratingSlab: "RATING_SLAB_5",
    orderabilityCommunication: {
      title: {},
      subTitle: {},
      message: {},
      customIcon: {},
    },
    cartOrderabilityNudgeBanner: {
      parameters: {},
      presentation: {},
    },
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  analytics: {
    screenName: "explore",
    objectValue: "606918",
    impressionObjectName: "impression-restaurant-ad",
    clickObjectName: "click-restaurant-ad",
  },
  ctaWithParams: {
    link: "swiggy://menu",
    type: "DEEPLINK",
    params: {
      query: "biryani",
      sourceSessionId: "c973b393-ccce-459b-ae0a-43512ef4df8f",
      source: "SEARCH",
      isSld: "false",
      sourceRequestId: "65d35ab8d2bc6872a9de94bdfe4c9102",
      restaurant_id: "606918",
    },
  },
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        {/* //restrocard */}
        <RestroCard restroData={restroObj} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
