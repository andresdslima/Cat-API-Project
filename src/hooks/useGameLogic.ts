import { useEffect, useState } from 'react';
import { addUniqueIds, getPairedPics, mapImages, shuffleCards } from '../utils';

export interface Card {
  id: number,
  url: string,
  isShown: boolean,
  isFound: boolean,
};

const MAX_VISIBLE_CARDS = 2;
const FLIP_BACK_PACE = 1000;

const useGameLogic = (images: any[]) => {
  const [score, setScore]: any = useState(0);
  const [isWin, setIsWin]: any = useState(false);
  const [cards, setCards]: any[] = useState([]);
  const [visibleCards, setVisibleCards]: any = useState([]);

  const prepareCards = (imgs: any[]) => {
    const pictures = imgs?.length ? imgs.map(mapImages) : [];
    const pairs = getPairedPics(pictures);
    const uniqueIds = addUniqueIds(pairs);
    const shuffle = shuffleCards(uniqueIds);
    setCards(shuffle);
  };

  const flipCard = (clickedCardId: any) => {
    const flippedCards = cards.map((card: any) => {
      if (card.uniqueId === clickedCardId) {
        card.isShown = true;
      }

      if (card.isShown) setVisibleCards((oldState: any) => [...oldState, card.uniqueId]);

      return card;
    });
    setCards(flippedCards);
  };

  const onCardClick = (clickedCardId: any) => {
    if (visibleCards.length < MAX_VISIBLE_CARDS) {
      flipCard(clickedCardId);
    }
  };

  const updateScore = () => {
    setScore((oldScore: any) => oldScore + 1);
  };

  const checkMatch = () => {
    const visible = cards.filter((card: any) => visibleCards.indexOf(card.uniqueId) !== -1);
    const matched = visible[0].id === visible[1].id;
    const updatedCards = cards.map((card: any) => {
      if (visibleCards.indexOf(card.uniqueId) !== -1) {
        card.isShown = false;
        card.isFound = matched;
      }
      return card;
    });

    setTimeout(() => {
      setCards(updatedCards);
      setVisibleCards([]);
      if (matched) updateScore();
    }, FLIP_BACK_PACE);
  };

  useEffect(() => {
    if (images.length > 0) prepareCards(images);
  }, [images]);

  useEffect(() => {
    if (visibleCards.length >= MAX_VISIBLE_CARDS) {
      checkMatch();
    };
  }, [visibleCards]);

  useEffect(() => {
    if (images.length && score === images.length) {
      setIsWin(true);
    };
  }, [score]);

  return { cards, onCardClick, isWin };
};

export default useGameLogic;