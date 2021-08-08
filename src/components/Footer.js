import React from "react";
import { SocialIcon } from "react-social-icons";


export default function NavBar() {
    return (
      <header className="bg-gradient-to-r from-black to-gray-600">
        <div className="container mx-auto flex justify-around">
        
          <div className="infline-flex py-3 px-3 my-6 ">
            <SocialIcon
              url="https://github.com/Miguell0706"
              className="mr-4 mx-10"
              target="_blank"
              fgColor="#fff"
              style={{ height: 90, width: 90 }}
            />
            <SocialIcon
              url="https://www.linkedin.com/in/miguel-lozano-836445155/"
              className="mr-4 mx-10"
              target="_blank"
              fgColor="#fff"
              style={{ height: 90, width: 90 }}
            />
            
          </div>
        </div>
      </header>
    );
  }
  