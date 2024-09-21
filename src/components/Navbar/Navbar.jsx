import React from "react";
import { Box, Link } from "@mui/material";

import MuiButton from "@mui/material/Button";
import arrow from "../../assets/img/chevron-down.svg";

// import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import BtnNav from "./BtnNav";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";

const pages = [
  {
    title: "Home",
    link: "/home",
    arrow: false,
  },
  {
    title: "About",
    link: "/about",
    arrow: false,
  },
  {
    title: "Services",
    arrow: true,
  },
  {
    title: "Products",
    arrow: true,
  },
  {
    title: "For Employees",
    // link: "/auth",
    arrow: false,
  },
];
// const styles = {
//   btnLink: {
//     fontFamily: "Montserrat, sans-serif",
//     fontWeight: 500,
//     fontSize: "18px",
//     lineHeight: "22px",
//     textTransform: "capitalize",
//     display: "flex",
//     padding: "5px",
//     marginRight: "44px",
//     color: "#000000",
//     marginBottom: "10px",
//     "&:hover": {
//       color: "#686868", //add color, background, transition effect here
//       duration: 2000,
//     },
//   },
// };"

function Navbar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { lg: "flex", xs: "grid" },
        justifyContent: "space-between",
        paddingRight: "20px",
      }}
    >
      {pages.map((page, index) => (
        <BtnNav page={page} key={index} />
      ))}
    </Box>
  );
}
export default Navbar;
