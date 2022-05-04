import styles from "./App.module.css";
import useGetImages from "./hooks/useGetImages";

function App() {
  const images = useGetImages();

  console.log({ images });

  return (
    <div className={styles.AppStyle}>
      <h1>Memory Game</h1>
    </div>
  );
}

export default App;
