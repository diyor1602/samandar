import styles from "./Qa.module.css";

const Qa = () => {
  return (
    <div className="container" id="qa">
      <div className={styles.qa}>
        <div className={styles.title}>Вопросы и ответы</div>
        <div className={styles.questions}>
          <div className={styles.question}>
            <div className={styles.number}>1</div>
            <div className={styles.text}>
              Вопрос на который мне срочно нужен ответ, иначе я не скачаю ваше
              приложение и вы разоритесь!
            </div>
          </div>
          <div className={styles.question}>
            <div className={styles.number}>2</div>
            <div className={styles.text}>
              Вопрос на который мне срочно нужен ответ, иначе я не скачаю ваше
              приложение и вы разоритесь!
            </div>
          </div>
          <div className={styles.question}>
            <div className={styles.number}>3</div>
            <div className={styles.text}>
              Вопрос на который мне срочно нужен ответ, иначе я не скачаю ваше
              приложение и вы разоритесь!
            </div>
          </div>
          <div className={styles.question}>
            <div className={styles.number}>4</div>
            <div className={styles.text}>
              Вопрос на который мне срочно нужен ответ, иначе я не скачаю ваше
              приложение и вы разоритесь!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qa;
