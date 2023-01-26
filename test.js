const solution = (string) => {
    // Split string by space
    const words = string.split(' ');
    // Get position of the word by it index in the end of the string
    const position = words.map((word, index) => {
        // get index in the end of the word
        const position = word.charAt(word.length - 1);
        return position;
    })
    console.log(position);
    // Sort words by position
    const result = words.sort((a, b) => {
        // get index in the end of the word
        const positionA = a.charAt(a.length - 1);
        const positionB = b.charAt(b.length - 1);
        // compare position
        if (positionA > positionB) {
            return 1;
        }
        if (positionA < positionB) {
            return -1;
        }
        return 0;
    })
    // Join the words and remove the position
    result.map((word, index) => {
        result[index] = word.slice(0, -1);
    })
    return result.join(' ');
}

const b = "red2 blue5 black4 green1 gold3"

console.log(solution(b))