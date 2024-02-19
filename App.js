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

const RestroCard = (props) => {
  const { restroData } = props;
  return (
    <div className="restro-card" style={styleCard}>
      <img
        className="restro-img"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" +
          restroData.info.cloudinaryImageId
        }
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

const restroObj = [
  {
    info: {
      id: "3241",
      name: "Meghana Foods",
      city: "1",
      slugs: {
        restaurant: "meghana-foods-central-bangalore",
        city: "bangalore",
      },
      cloudinaryImageId: "iivuhjc2mswi9lublktf",
      address:
        "57/1, 1st Floor, Jayalaxmi Chambers, Next to Old Galaxy Theatre,Residency Road, Bangalore",
      locality: "Residency Road",
      areaName: "Residency Road",
      costForTwo: "50000",
      costForTwoMessage: "₹500 FOR TWO",
      cuisines: ["Biryani", "Andhra", "South Indian", "Chinese", "Seafood"],
      avgRating: 4.6,
      feeDetails: {},
      avgRatingString: "4.6",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 27,
        minDeliveryTime: 25,
        maxDeliveryTime: 30,
        lastMileTravel: 2.4,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "25-30 MINS",
        lastMileTravelString: "2.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        opened: true,
        restaurantClosedMeta: {},
      },
      aggregatedDiscountInfo: {
        visible: true,
      },
      badges: {},
      aggregatedDiscountInfoV2: {
        visible: true,
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
      objectValue: "3241",
      clickObjectName: "click-restaurant",
    },
    ctaWithParams: {
      link: "swiggy://menu",
      type: "DEEPLINK",
      params: {
        sourceSessionId: "c973b393-ccce-459b-ae0a-43512ef4df8f",
        source: "SEARCH",
        isSld: "false",
        sourceRequestId: "65d35ab8d2bc6872a9de94bdfe4c9102",
        restaurant_id: "3241",
        query: "biryani",
      },
    },
  },
  {
    info: {
      id: "445489",
      name: "The Grand Hyderabad Biryani Restaurant",
      city: "1",
      slugs: {
        restaurant:
          "the-grand-hyderabad-biryani-restaurant-frazer-town-frazer-town",
        city: "bangalore",
      },
      cloudinaryImageId: "ca8c24e6d2237afff9b08ff5df177306",
      address:
        "No 145/1, MM Road, Near Masjid-e-Sir-Ismail Sait, Pulikeshi Nagar, Frazer Town, Bangalore - 560005",
      locality: "MM Road",
      areaName: "Frazer Town",
      costForTwo: "40000",
      costForTwoMessage: "₹400 FOR TWO",
      cuisines: ["Biryani", "Haleem", "Desserts"],
      avgRating: 4.1,
      feeDetails: {},
      avgRatingString: "4.1",
      totalRatingsString: "100+",
      promoted: true,
      adTrackingId:
        "cid=11336698~p=1~adgrpid=11336698#ag1~mp=SWIGGY_IN~bl=FOOD~eid=67e15ecf-28c9-4644-a9c7-3b9903142d88~aet=RESTAURANT~aeid=445489~srvts=1708350137244~st=biryani",
      sla: {
        deliveryTime: 41,
        minDeliveryTime: 40,
        maxDeliveryTime: 45,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "40-45 MINS",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        opened: true,
        restaurantClosedMeta: {},
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹349",
        discountTag: "FLAT DEAL",
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
      objectValue: "445489",
      impressionObjectName: "impression-restaurant-ad",
      clickObjectName: "click-restaurant-ad",
    },
    ctaWithParams: {
      link: "swiggy://menu",
      type: "DEEPLINK",
      params: {
        restaurant_id: "445489",
        query: "biryani",
        sourceSessionId: "c973b393-ccce-459b-ae0a-43512ef4df8f",
        source: "SEARCH",
        isSld: "false",
        sourceRequestId: "65d35ab8d2bc6872a9de94bdfe4c9102",
      },
    },
  },
  {
    info: {
      id: "146304",
      name: "Hyderabad Biryaani House",
      city: "1",
      slugs: {
        restaurant: "hyderabad-biryaani-house-central-bangalore",
        city: "bangalore",
      },
      cloudinaryImageId: "x8eohfwwu23rwryact16",
      address:
        "No.7/1, Victoria road bangalore, Shanthinagara,B.B.M.P. east (Karnataka)",
      locality: "Victoria Road",
      areaName: "Ashok Nagar",
      costForTwo: "49900",
      costForTwoMessage: "₹499 FOR TWO",
      cuisines: ["Indian"],
      avgRating: 4.3,
      feeDetails: {},
      avgRatingString: "4.3",
      totalRatingsString: "5K+",
      sla: {
        deliveryTime: 28,
        minDeliveryTime: 25,
        maxDeliveryTime: 30,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "25-30 MINS",
        lastMileTravelString: "2.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        opened: true,
        restaurantClosedMeta: {},
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "10% OFF",
        subHeader: "ABOVE ₹800",
        discountTag: "FLAT DEAL",
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
      objectValue: "146304",
      clickObjectName: "click-restaurant",
    },
    ctaWithParams: {
      link: "swiggy://menu",
      type: "DEEPLINK",
      params: {
        sourceSessionId: "c973b393-ccce-459b-ae0a-43512ef4df8f",
        source: "SEARCH",
        isSld: "false",
        sourceRequestId: "65d35ab8d2bc6872a9de94bdfe4c9102",
        restaurant_id: "146304",
        query: "biryani",
      },
    },
  },
  {
    info: {
      id: "485771",
      name: "Sree Banashankari Donne Biryani",
      city: "1",
      slugs: {
        restaurant: "sree-banashankari-donne-biryani-rajajinagar-rajajinagar",
        city: "bangalore",
      },
      cloudinaryImageId: "a500c52cad1379c52962c6407f53d6ba",
      address:
        "#343/344 ground floor 5th main 3rd stage 2nd block basaveshwar Nagar Bengaluru 560079",
      locality: "2nd block",
      areaName: "Rajajinagar",
      costForTwo: "25000",
      costForTwoMessage: "₹250 FOR TWO",
      cuisines: [
        "Biryani",
        "South Indian",
        "Indian",
        "Chinese",
        "Grill",
        "Kebabs",
        "Beverages",
      ],
      avgRating: 4,
      feeDetails: {},
      avgRatingString: "4.0",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=11336534~p=2~adgrpid=11336534#ag1~mp=SWIGGY_IN~bl=FOOD~eid=4ad1cf34-8b3f-42ac-9044-859045e17ac9~aet=RESTAURANT~aeid=485771~srvts=1708350137244~st=biryani",
      sla: {
        deliveryTime: 41,
        minDeliveryTime: 40,
        maxDeliveryTime: 45,
        lastMileTravel: 7.1,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "40-45 MINS",
        lastMileTravelString: "7.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        opened: true,
        restaurantClosedMeta: {},
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "20% OFF",
        subHeader: "UPTO ₹50",
      },
      ratingSlab: "RATING_SLAB_4",
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
      objectValue: "485771",
      impressionObjectName: "impression-restaurant-ad",
      clickObjectName: "click-restaurant-ad",
    },
    ctaWithParams: {
      link: "swiggy://menu",
      type: "DEEPLINK",
      params: {
        isSld: "false",
        sourceRequestId: "65d35ab8d2bc6872a9de94bdfe4c9102",
        restaurant_id: "485771",
        query: "biryani",
        sourceSessionId: "c973b393-ccce-459b-ae0a-43512ef4df8f",
        source: "SEARCH",
      },
    },
  },
  {
    info: {
      id: "30034",
      name: "Mani's Dum Biryani",
      city: "1",
      slugs: {
        restaurant: "manis-dum-biryani-ulsoor-central-bangalore",
        city: "bangalore",
      },
      cloudinaryImageId: "49525bb8fd8413546f67907e2174db0b",
      address: "#No.18/1, 1st floor, Haudin road  Ulsoor, Bangalore-560042",
      locality: "Haudin Road",
      areaName: "Ulsoor",
      costForTwo: "49900",
      costForTwoMessage: "₹499 FOR TWO",
      cuisines: ["Andhra", "Biryani", "North Indian"],
      avgRating: 4.5,
      feeDetails: {},
      avgRatingString: "4.5",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 33,
        minDeliveryTime: 30,
        maxDeliveryTime: 35,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "30-35 MINS",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        opened: true,
        restaurantClosedMeta: {},
      },
      aggregatedDiscountInfo: {
        visible: true,
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      aggregatedDiscountInfoV2: {
        visible: true,
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
      objectValue: "30034",
      clickObjectName: "click-restaurant",
    },
    ctaWithParams: {
      link: "swiggy://menu",
      type: "DEEPLINK",
      params: {
        isSld: "false",
        sourceRequestId: "65d35ab8d2bc6872a9de94bdfe4c9102",
        restaurant_id: "30034",
        query: "biryani",
        sourceSessionId: "c973b393-ccce-459b-ae0a-43512ef4df8f",
        source: "SEARCH",
      },
    },
  },
  {
    info: {
      id: "576474",
      name: "Aromas of Biryani",
      city: "1",
      slugs: {
        restaurant: "aromas-of-biryani-jayanagar-jayanagar",
        city: "bangalore",
      },
      cloudinaryImageId: "4cc66dbb59f926943326673659193635",
      address:
        "No. 50, Old No. 665, Ground and First Floor, 11th Main Rd, 4th Block, Jayanagar, Bengaluru, Karnataka 560011",
      locality: "Jayanagar",
      areaName: "Jayanagar",
      costForTwo: "60000",
      costForTwoMessage: "₹600 FOR TWO",
      cuisines: ["Biryani"],
      avgRating: 4.2,
      feeDetails: {},
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      promoted: true,
      adTrackingId:
        "cid=10987230~p=3~adgrpid=10987230#ag1~mp=SWIGGY_IN~bl=FOOD~eid=bc600f6e-90b2-4117-8709-37dc8a123828~aet=RESTAURANT~aeid=576474~srvts=1708350137244~st=biryani",
      sla: {
        deliveryTime: 41,
        minDeliveryTime: 40,
        maxDeliveryTime: 45,
        lastMileTravel: 6.3,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "40-45 MINS",
        lastMileTravelString: "6.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        opened: true,
        restaurantClosedMeta: {},
      },
      badges: {},
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹599",
        discountTag: "FLAT DEAL",
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
      objectValue: "576474",
      impressionObjectName: "impression-restaurant-ad",
      clickObjectName: "click-restaurant-ad",
    },
    ctaWithParams: {
      link: "swiggy://menu",
      type: "DEEPLINK",
      params: {
        source: "SEARCH",
        isSld: "false",
        sourceRequestId: "65d35ab8d2bc6872a9de94bdfe4c9102",
        restaurant_id: "576474",
        query: "biryani",
        sourceSessionId: "c973b393-ccce-459b-ae0a-43512ef4df8f",
      },
    },
  },
  {
    info: {
      id: "428",
      name: "Biryani Pot ",
      city: "1",
      slugs: {
        restaurant: "biryani-pot-madiwala-junction-btm",
        city: "bangalore",
      },
      cloudinaryImageId: "stcwjsd9zpxnbi8nnq8t",
      address: "14th  Cross, 4th link Road Maruthi Nagar Madiwala Bangalore 68",
      locality: "Maruti Nagar",
      areaName: "Btm Layout",
      costForTwo: "50000",
      costForTwoMessage: "₹500 FOR TWO",
      cuisines: ["Biryani"],
      avgRating: 4.1,
      feeDetails: {},
      avgRatingString: "4.1",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 48,
        minDeliveryTime: 45,
        maxDeliveryTime: 50,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "45-50 MINS",
        lastMileTravelString: "7.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        opened: true,
        restaurantClosedMeta: {},
      },
      badges: {
        textExtendedBadges: [
          {
            iconId: "guiltfree/GF_Logo_android_3x",
            shortDescription: "options available",
            fontColor: "#7E808C",
          },
        ],
      },
      sld: true,
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹749",
        discountTag: "FLAT DEAL",
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
      objectValue: "428",
      impressionObjectName: "impression-restaurant-sld",
      clickObjectName: "click-restaurant-sld",
    },
    ctaWithParams: {
      link: "swiggy://menu",
      type: "DEEPLINK",
      params: {
        restaurant_id: "428",
        query: "biryani",
        sourceSessionId: "c973b393-ccce-459b-ae0a-43512ef4df8f",
        source: "SEARCH",
        isSld: "true",
        sourceRequestId: "65d35ab8d2bc6872a9de94bdfe4c9102",
      },
    },
  },
  {
    info: {
      id: "415042",
      name: "Royal Biryani Kitchen",
      city: "1",
      slugs: {
        restaurant: "royal-biryani-kitchen-btm-btm-2",
        city: "bangalore",
      },
      cloudinaryImageId: "86086acc172bc3b8efda352459cd11c8",
      address:
        "39, 1st A Cross, Opp Swaraj Hypermarket, Chocolate Factory Rd, Tavarekere, Maruti Nagar, Tavarekere, BTM 1st Stage, Bengaluru, Karnataka 560068, India",
      locality: "1st  Stage",
      areaName: "BTM Layout",
      costForTwo: "25000",
      costForTwoMessage: "₹250 FOR TWO",
      cuisines: ["Biryani", "Chinese", "Tandoor", "Snacks", "Mughlai"],
      avgRating: 3.4,
      feeDetails: {},
      avgRatingString: "3.4",
      totalRatingsString: "500+",
      promoted: true,
      adTrackingId:
        "cid=11333864~p=5~adgrpid=11333864#ag1~mp=SWIGGY_IN~bl=FOOD~eid=d14cca67-21e3-4747-9cf4-e9e55b2fdeac~aet=RESTAURANT~aeid=415042~srvts=1708350137244~st=biryani",
      sla: {
        deliveryTime: 46,
        minDeliveryTime: 45,
        maxDeliveryTime: 50,
        lastMileTravel: 7.5,
        serviceability: "SERVICEABLE",
        rainMode: "RAIN_MODE_NONE",
        slaString: "45-50 MINS",
        lastMileTravelString: "7.5 km",
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
      ratingSlab: "RATING_SLAB_4",
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
      objectValue: "415042",
      impressionObjectName: "impression-restaurant-ad",
      clickObjectName: "click-restaurant-ad",
    },
    ctaWithParams: {
      link: "swiggy://menu",
      type: "DEEPLINK",
      params: {
        source: "SEARCH",
        isSld: "false",
        sourceRequestId: "65d35ab8d2bc6872a9de94bdfe4c9102",
        restaurant_id: "415042",
        query: "biryani",
        sourceSessionId: "c973b393-ccce-459b-ae0a-43512ef4df8f",
      },
    },
  },
  {
    info: {
      id: "528523",
      name: "New Ambur Biryani Point",
      city: "1",
      slugs: {
        restaurant: "new-ambur-biryani-point-koramangala-koramangala",
        city: "bangalore",
      },
      cloudinaryImageId: "298d65e176f27d4ba02791b5c8eed812",
      address:
        "No. 386, Mahalingeshwara layout, oppo adugodi queries,Adugodi, Bengaluru - 560030, Karnataka.",
      locality: "Mahalingeshwara layout",
      areaName: "Adugodi",
      costForTwo: "25000",
      costForTwoMessage: "₹250 FOR TWO",
      cuisines: ["Biryani", "Chinese", "North Indian"],
      avgRating: 4.2,
      feeDetails: {},
      avgRatingString: "4.2",
      totalRatingsString: "1K+",
      sla: {
        deliveryTime: 36,
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
        header: "20% OFF",
        subHeader: "UPTO ₹45",
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
      objectValue: "528523",
      clickObjectName: "click-restaurant",
    },
    ctaWithParams: {
      link: "swiggy://menu",
      type: "DEEPLINK",
      params: {
        restaurant_id: "528523",
        query: "biryani",
        sourceSessionId: "c973b393-ccce-459b-ae0a-43512ef4df8f",
        source: "SEARCH",
        isSld: "false",
        sourceRequestId: "65d35ab8d2bc6872a9de94bdfe4c9102",
      },
    },
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        {/* //restrocard */}
        {restroObj.map((ele, index) => (
          <RestroCard restroData={ele.info.id} key={index} />
        ))}
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
