import { Card } from "../hooks/useGameLogic";

// Shuffle the cards to "mess up" with their order
export const shuffleCards = (cards: any[]) => {
    let m = cards.length;
    let t;
    let i;

    // While there remain elements to shuffle.
    while (m) {
        // Pick a remaining element
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element
        t = cards[m];
        cards[m] = cards[i];
        cards[i] = t;
    }

    return cards;
};

// Form a data object per image
export const mapImages = (image: any, index: number): Card => ({
    id: index,
    url: image?.url,
    isShown: false,
    isFound: false,
});

// "Duplicate" every fetched image
export const getPairedPics = (data: any[]) => {
    return data.reduce((img, i) => img.concat(i, i), []);
};

// Extend existing info with a uniqueId key
export const addUniqueIds = (data: any[]) => {
    return data.map((entry, i) => ({
        ...entry,
        uniqueId: i,
    }));
};