import styles from './Result.module.css';

const Result = () => (
  <div className={styles.container}>
    <p>Congratulations, you won!</p>
    <p>Please reload this page to restart the game.</p>
  </div>
);

export default Result;