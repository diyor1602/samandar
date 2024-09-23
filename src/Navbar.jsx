import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [icon, setIcon] = useState("menu");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleChangeIcon = () => {
    if (icon === "menu") {
      setIcon("menuClose");
      setMenuOpen(true);
    } else {
      setIcon("menu");
      setMenuOpen(false);
    }
  };

  // Close the menu if the window is resized to a width greater than 660px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 660) {
        setMenuOpen(false);
        setIcon("menu"); // Reset the icon to "menu"
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Close the menu when a menu item is clicked
  const handleMenuItemClick = () => {
    setMenuOpen(false);
    setIcon("menu");
  };

  return (
    <>
      {/* Black overlay */}
      {menuOpen && <div className="overlay" onClick={handleChangeIcon}></div>}

      <nav className="navbar">
        <div className={`menuList ${menuOpen ? "open" : ""}`}>
          <div onClick={handleMenuItemClick}>Главная</div>
          <div onClick={handleMenuItemClick}>О приложении</div>
          <div onClick={handleMenuItemClick}>Скачать приложение</div>
          <div onClick={handleMenuItemClick}>Вопросы</div>
        </div>
        <div
          className={`${icon === "menu" ? "menu" : "menuClose"}`}
          onClick={handleChangeIcon}
        >
          {icon === "menu" ? <Menu size={24} /> : <X size={24} />}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
