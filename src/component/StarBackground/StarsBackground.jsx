import styles from "./StarsBackground.module.scss";

const StarsBackground = () => {
  return (
    <div>
      <div id={styles.stars}></div>
      <div id={styles.stars2}></div>
      <div id={styles.stars3}></div>
    </div>
  );
};

export default StarsBackground;

