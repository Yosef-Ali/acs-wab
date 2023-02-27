import { useState, useEffect } from "react";
import NavBar from "./nav-bar";
import MobileMenu from "./mobile-menu";
import { menuLinks } from "./menu-links";
import SearchInputBoxOverlay from "./Search/search-input-box-overlay";

import { AlgoliaSearch } from "./Search/algolia-search";

export default function Header() {
  const [scrollActive, setScrollActive] = useState(false);
  const [bgActive, setBgActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [toggle, setToggle] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const currentPage = window.location.pathname;
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
      currentPage === "/"
        ? setBgActive(window.scrollY > 500)
        : setBgActive(window.scrollY > 70);
    });
  }, []);

  const handleSubmenu = (menuId: number) => {
    setSubMenuOpen(!subMenuOpen);
    setToggle(menuId);
  };

  //for Search Overlay to be called keyboard...
  useEffect(() => {
    function onKeydown(event) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        setIsSearchOpen(!isSearchOpen);
      }
    }
    console.log("isSearchOpen:", isSearchOpen);

    window.addEventListener("keydown", onKeydown);
    return () => {
      window.removeEventListener("keydown", onKeydown);
    };
  }, [isSearchOpen]);

  return (
    <header
      className={
        "bg-white-500 fixed top-0 z-40 w-full transition-all " +
        (scrollActive ? " pt-0 shadow-md" : " ") +
        (bgActive ? " bg-white" : " ")
      }
    >
      <NavBar
        menuLinks={menuLinks}
        setMenuOpen={setMenuOpen}
        menuOpen={menuOpen}
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      />

      {/* Mobile Menu */}
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        menuLinks={menuLinks}
        subMenuOpen={subMenuOpen}
        toggle={toggle}
        handleSubmenu={handleSubmenu}
      />

      {/* search input overlay */}

      {/* <SearchInputBoxOverlay
        isSearchOpen={isSearchOpen}
        setIsSearchOpen={setIsSearchOpen}
      /> */}
      {isSearchOpen && (
        <AlgoliaSearch
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
          command="k" // fake props
        />
      )}
    </header>
  );
}
