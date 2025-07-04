import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiUser, BiMessageSquareDetail } from "react-icons/bi";
import { FiBook } from "react-icons/fi";
import { RiServiceLine } from "react-icons/ri";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("#mainbanner");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollPosition = scrollY + 100;

      // Cek arah scroll
      if (scrollY > prevScrollPos && scrollY > 100) {
        setVisible(false); // Scroll ke bawah
      } else {
        setVisible(true); // Scroll ke atas
      }
      setPrevScrollPos(scrollY);

      // Logic active section (versi kamu)
      const sections = [
        { id: "#mainbanner", offset: document.getElementById("mainbanner")?.offsetTop },
        { id: "#calon", offset: document.getElementById("calon")?.offsetTop },
        { id: "#weddingDate", offset: document.getElementById("weddingDate")?.offsetTop },
        { id: "#maps", offset: document.getElementById("maps")?.offsetTop },
        { id: "#submitss", offset: document.getElementById("submitss")?.offsetTop },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i].offset !== undefined && scrollPosition >= sections[i].offset!) {
          setActiveNav(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      <nav className={`nav ${visible ? "nav-show" : "nav-hide"}`}>
        <a href="#mainbanner" className={activeNav === "#mainbanner" ? "active" : ""}>
          <AiOutlineHome />
        </a>
        <a href="#calon" className={activeNav === "#calon" ? "active" : ""}>
          <BiUser />
        </a>
        <a href="#weddingDate" className={activeNav === "#weddingDate" ? "active" : ""}>
          <FiBook />
        </a>
        <a href="#maps" className={activeNav === "#maps" ? "active" : ""}>
          <RiServiceLine />
        </a>
        <a href="#submitss" className={activeNav === "#submitss" ? "active" : ""}>
          <BiMessageSquareDetail />
        </a>
      </nav>
      <div style={{ paddingBottom: "3rem" }}></div>
    </>
  );
}
