import styles from "./Languages.module.css";
import germany from "/germany.png";
import france from "/france.png";
import spain from "/spain.png";
import italy from "/italy.png";
import japan from "/japan.png";
import china from "/china.png";
import southkorea from "/southkorea.png";
import poland from "/poland.png";
import greece from "/greece.png";
import uae from "/uae.png";
import russia from "/russia.png";

const Languages = () => {
  return (
    <div className="container">
      <div className={styles.languages}>
        <div className={styles.languagesNavbar}>
          <div className={styles.languageNavTitle}>
            Основные языки, которые изучаются в приложении:
          </div>
          <div className={styles.languageImages}>
            <img src={spain} alt="Spain" />
            <img src={france} alt="France" />
            <img src={italy} alt="Italy" />
            <img src={poland} alt="Poland" />
            <img src={greece} alt="Greece" />
            <img src={southkorea} alt="South Korea" />
            <img src={uae} alt="UAE" />
            <img src={china} alt="China" />
            <img src={japan} alt="Japan" />
            <img src={germany} alt="Germany" />
            <img src={russia} alt="Russia" />
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Languages;
