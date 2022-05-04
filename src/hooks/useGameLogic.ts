import { useEffect } from 'react';
import { getFormedData } from '../utils';

const MAX_VISIBLE_CARDS = 2;

const useGameLogic = (images: any[]) => {
  const prepareCards = () => {
    const getData = getFormedData(images);
    console.log({ getData });
  };

  useEffect(() => {
    if (images.length > 0) prepareCards();
  }, [images]);
};

export default useGameLogic;