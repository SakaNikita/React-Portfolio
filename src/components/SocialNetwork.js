import React from "react";

const SocialNetwork = () => {
  const anim = () => {
    let navLinks = document.querySelectorAll(".social-network a");

    navLinks.forEach((link) => {
      link.addEventListener("mouseover", (e) => {
        let attrX = e.offsetX - 20;
        let attrY = e.offsetY - 13;

        link.style.transform = `translate( ${attrX}px, ${attrY}px)`;
      });
      link.addEventListener("mouseleave", () => {
        link.style.transform = "";
      });
    });
  };

  return (
    <div className="social-network">
      <ul className="content">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i class="fab fa-instagram"></i>
          </li>
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i className="fab fa-linkedin-in"></i>
          </li>
        </a>
        <a
          href="https://www.github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i class="fab fa-github"></i>
          </li>
        </a>
        <a
          href="https://www.gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover"
          onMouseOver={anim}
        >
          <li>
            <i class="far fa-envelope"></i>
          </li>
        </a>
      </ul>
    </div>
  );
};

export default SocialNetwork;
