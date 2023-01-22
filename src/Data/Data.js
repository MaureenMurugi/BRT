import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,

} from "@iconscout/react-unicons";
import img1 from "../Images/img1.jpg";
import Integrity from '../Images/integrity.jpg'
import Diversity from '../Images/shake.png'
import Professionalism from '../Images/prof.jpeg'
import Avatar from '../Images/avatar.png'
import Female from '../Images/female.png'

import {
  UilUsdSquare,
  UilMoneyWithdrawal
} from "@iconscout/react-unicons";

export const SidebarData = [{
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilClipboardAlt,
    heading: "Orders",
  },
  {
    icon: UilUsersAlt,
    heading: "Customers",
  },
  {
    icon: UilPackage,
    heading: 'Products'
  },
  {
    icon: UilChart,
    heading: 'Analytics'
  },
];

export const CardsData = [{
    title: "Fare",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 20,
    value: "60",
    png: UilUsdSquare,
    series: [{
      name: "Fare",
      data: [30, 50, 20, 40, 50, 100, 100],
    }, ],
  },
  {
    title: "Buses",
    color: {
      backGround: "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 70,
    value: "50",
    png: UilUsdSquare,
    series: [{
      name: "Buses",
      data: [50, 50, 20, 30, 50, 50, 100],
    }, ],
  },
  {
    title: "Users",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 50,
    value: "70",
    png: UilClipboardAlt,
    series: [{
      name: "Users",
      data: [50, 50, 20, 30, 50, 50, 100],
    }, ],
  },

];


// Recent Update Card Data
export const UpdatesData = [{
    img: Female,
    name: "Maureen Murugi",
    noti: "Admin: Update users chart according to payment and at what time ",
    time: "25 seconds ago",
  },
  {
    img: Avatar,
    name: "Jackson Kahono",
    noti: "Bus controller: Update the buses, that are empty, ful and have seats.",
    time: "30 minutes ago",
  },
  {
    img: Female,
    name: "Esther Wanjiku",
    noti: "Fare controller: Make changes to the fare, per station and confirm Mpesa payments.",
    time: "2 hours ago",
  },
  {
    img: Female,
    name: "Zipporah Kwamboka",
    noti: "Admin: Security and update the live charts in time and per bus, fare and users.",
    time: "2 hours ago",
  },
];

// Core values
export const CoreValues = [
  {
    image: Integrity,
    coreName: "Integrity",
    description: " BRT aims at serving clients in the most dignified and honest way possible."
  },
  {
    image: Diversity,
    coreName: "Diversion and Inclusion",
    description: " Everyone gets a fair opportunity to go on with their daily movement in the most timely manner."
  },
  {
    image: Professionalism,
    coreName: "Professionalism",
    description: " The BRT offers high quality services to all its clients, maintaining world class professionalism."
  },

]