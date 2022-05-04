import React, { useEffect, useState } from 'react';
import styles from './Board.module.css';
import useGetImages from '../../hooks/useGetImages';
import useGameLogic from '../../hooks/useGameLogic';

const Board = () => {
    const images = useGetImages();
    const cards = useGameLogic(images);

    return <p>Board</p>;
};

export default Board;