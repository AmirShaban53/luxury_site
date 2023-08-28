import React from "react";
import { Container } from "./layout";

const Footer = () => {
  return (
    <div className="py-8 border-t mt-4">
      <Container>
        <div className="flex justify-between">
          <div>
            <p>@tomasthan</p>
          </div>
          <div>
            <ul className="flex gap-6">
              <li>
                <a href="">Contact us</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Terms and Conditions</a>
              </li>
              <li>
                <a href="">Credits</a>
              </li>
            </ul>
          </div>
          <div>
            <p>North America</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
