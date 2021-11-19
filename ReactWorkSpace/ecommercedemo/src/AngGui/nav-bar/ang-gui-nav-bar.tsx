import React from "react";
import "./ang-gui-nav-bar.css";
function AngGuiNavBar() {
  return (
    <div className="ang-gui-nav-normal">
      <div className="ang-gui-nav-wrapper">
        <div className="ang-gui-nav-mobile-menu-container">
          <div className="menu-icon">
            <svg
              height="24px"
              width="24px"
              focusable="false"
              viewBox="0 0 24 24"
            >
              <g className="layer">
                <title>Layer 1</title>
                <path
                  d="m2,19l20,0l0,-2.33333l-20,0l0,2.33333zm0,-5.83333l20,0l0,-2.33333l-20,0l0,2.33333zm0,-8.16667l0,2.33333l20,0l0,-2.33333l-20,0z"
                  fill="white"
                  id="svg_1"
                ></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="ang-gui-nav-logo-container"></div>
        <div className="ang-gui-nav-desktop-menu-container">
          <div className="ang-gui-nav-menu">
            <div className="nav-link-container">
              <a className="nav-link nav-link-text"> Dropdown link </a>
            </div>
            <div className="dropdown-menu">
              <div className="dropdown-item">Link 1</div>
              <div className="dropdown-item">Link 1</div>
            </div>
          </div>
        </div>
        <div className="ang-gui-nav-search-bar-container"></div>
        <div className="ang-gui-nav-user-profile-menu-container"></div>
      </div>
    </div>
  );
}

export default AngGuiNavBar;
