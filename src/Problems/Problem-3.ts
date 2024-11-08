function countWordOccurrences(sentence: string, word: string) : number {
    let makeArray = sentence.toLowerCase().split(' ')
    let number = 0
    for (const element of makeArray) {
        if (element === word.toLowerCase()) {
            number += 1
        }
    }
    return number
}
// console.log(countWordOccurrences("I love typescript", "Typescript"));
