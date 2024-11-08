function removeDuplicates(arr: number[]) : number[]{
    return arr.filter((value, index) => arr.indexOf(value) === index).sort((a, b) => a - b)
}
// console.log(removeDuplicates([1, 2, 2, 25, 3, 4, 4, 5]));
