import { Menu, X } from "lucide-react";

import { useState } from "react";

const Navbar = () => {
  const [icon, setIcon] = useState("menu");

  const handleChangeIcon = () => {
    if (icon === "menu") {
      setIcon("menuClose");
    } else {
      setIcon("menu");
    }
  };

  return (
    <nav className="navbar">
      <div className="menuList">
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
  );
};

export default Navbar;
