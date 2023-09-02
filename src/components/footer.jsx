import React from "react";
import { Container } from "./layout";

const Footer = () => {
  return (
    <div className="py-8 border-t ">
      <Container>
        <div className="flex justify-between">
          <div>
            <a href="/#" className="font-semibold text-xl font-noto">
              @B <span className="text-xl">&</span> A
            </a>
          </div>
          <div>
            <ul className="md:flex gap-6 hidden">
              <li>
                <a href="/#women">Women</a>
              </li>
              <li>
                <a href="/#men">Men</a>
              </li>
              <li>
                <a href="/#about">About</a>
              </li>
              <li>
                <a href="/">Terms and Conditions</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-noto">North America</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
