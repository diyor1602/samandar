import { Menu, X } from "lucide-react";
import { useState } from "react";

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

  return (
    <>
      {/* Black overlay */}
      {menuOpen && <div className="overlay" onClick={handleChangeIcon}></div>}

      <nav className="navbar">
        <div className={`menuList ${menuOpen ? "open" : ""}`}>
          <div>Главная</div>
          <div>О приложении</div>
          <div>Скачать приложение</div>
          <div>Вопросы</div>
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
