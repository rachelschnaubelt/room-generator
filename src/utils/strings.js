const startsWithVowel = (string) => {
    return string && 
        (string.startsWith('a') ||
        string.startsWith('e') ||
        string.startsWith('i') ||
        string.startsWith('o') ||
        string.startsWith('u'))
}

export {startsWithVowel};