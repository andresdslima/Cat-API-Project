import useGetImages from '../../hooks/useGetImages';
import useGameLogic from '../../hooks/useGameLogic';
import Card from '../Card';
import Result from '../Result';
import styles from './Board.module.css';

const Board = () => {
    const images = useGetImages();
    const { cards, onCardClick, isWin } = useGameLogic(images);

    return (
        <div>
            {isWin && <Result />}
            <div className={styles.board}>
                {cards.map((card: any) => <Card key={card.uniqueId} card={card} onCardClick={onCardClick} />)}
            </div>
        </div>
    );
};

export default Board;