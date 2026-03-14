const randomItemFromArray = (array) => {
    const length = array.length;
    const randomIndex = Math.floor(Math.random() * length);
    return array [randomIndex];
}

export {randomItemFromArray};