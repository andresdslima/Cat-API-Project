import styles from "./App.module.css";
import Board from "./components/Board";

function App() {
  return (
    <div className={styles.AppStyle}>
      <h1>Memory Game</h1>
      <Board />
    </div>
  );
}

export default App;