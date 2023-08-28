import React from "react";
import { Container } from "./layout";
import {
  StarOutline,
  Search,
  PermIdentity,
  WorkOutline,
} from "@mui/icons-material";

const NavBar = () => {
  return (
    <nav className="absolute pt-8 z-20 text-white w-full">
      <Container>
        <div className="flex justify-between items-center uppercase">
          <div className="flex gap-16 items-center">
            <div>
              <a href="#" className="font-semibold text-3xl ">LOGO</a>
            </div>
            <div>
              <ul className="flex items-center gap-8">
                <li>
                  <a href="">Fashion</a>
                </li>
                <li>
                  <a href="">Jewel</a>
                </li>
                <li>
                  <a href="">Sunglasses</a>
                </li>
                <li>
                  <a href="">Make Up</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-12">
            <div>
              <a href="">About</a>
            </div>
            <div className="space-x-6">
              <Search fontSize="small"/>
              <StarOutline fontSize="small"/>
              <PermIdentity fontSize="small"/>
              <WorkOutline fontSize="small"/>
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
