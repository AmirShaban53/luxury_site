import { useState } from "react";
import { Container } from "./layout";
import {
  StarOutline,
  Search,
  PermIdentity,
  WorkOutline,
  Menu,
} from "@mui/icons-material";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleToggleMenu = () => {
    setMobileOpen((prev) => !prev);
  };
  const handleCloseMenu = () => {
    setMobileOpen(false);
  };

  return (
    <nav className="absolute pt-4 md:pt-8 z-20 text-white w-full">
      <Container>
        <div className="flex justify-between items-center uppercase gap-8">
          <div
            className={`z-30 duration-300 transition-all ${
              mobileOpen
                ? "text-neutral-800 fixed left-2 top-4"
                : "text-neutral-50 static"
            }`}
          >
            <a href="#" className="font-semibold text-3xl font-noto">
              B <span className="text-xl">&</span> A
            </a>
          </div>
          <div
            className={`fixed bg-neutral-100 md:bg-transparent w-screen h-screen z-10 flex items-center transition-all duration-500 top-0 ${
              mobileOpen ? "left-0 text-black" : "-left-full"
            }
            md:static md:w-auto md:h-auto md:grow`}
          >
            <ul className=" md:flex items-center gap-8 w-full space-y-12 md:space-y-0 text-center md:w-auto">
              <li>
                <a href="/#fashion" onClick={handleCloseMenu}>Fashion</a>
              </li>
              <li>
                <a href="/#women" onClick={handleCloseMenu}>Collection</a>
              </li>
              <li>
                <a href="/#glasses" onClick={handleCloseMenu}>Eyeglasses</a>
              </li>
              <li>
                <a href="/#skin" onClick={handleCloseMenu}>Make Up</a>
              </li>
              <li className="md:hidden">
                <a href="/#about" onClick={handleCloseMenu}>About</a>
              </li>
              <li className="md:hidden">
                <div className="space-x-6">
                  <Search fontSize="small" />
                  <StarOutline fontSize="small" />
                  <PermIdentity fontSize="small" />
                  <WorkOutline fontSize="small" />
                </div>
              </li>
            </ul>
          </div>
          <div className="hidden md:flex gap-12">
            <div>
              <a href="/#about">About</a>
            </div>
            <div className="space-x-6">
              <Search fontSize="small" />
              <StarOutline fontSize="small" />
              <PermIdentity fontSize="small" />
              <WorkOutline fontSize="small" />
            </div>
          </div>
          <div
            className={`inline-block md:hidden z-30 ${
              mobileOpen
                ? "text-neutral-800 fixed right-2 top-4"
                : "text-neutral-50"
            }`}
          >
            <button type="button" onClick={handleToggleMenu}>
              <Menu />
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;
