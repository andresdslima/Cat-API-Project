import styles from './Card.module.css';
import Image from '../Image';

const Card = ({ card, onCardClick }: any) => {
    const onClick = () => {
        if (card.isShown || card.isFound) return;
        onCardClick(card.uniqueId);
    };
    
    return (
        <div className={styles.container} onClick={onClick}>
            <div className={`${styles.card} ${card.isShown ? styles.flipped : ''}`}>
                <div className={`${styles.front} ${card.isFound ? styles.found : ''}`}></div>
                <div className={styles.back}>
                    <Image url={card.url} />
                </div>
            </div>
        </div>
    );
};

export default Card;