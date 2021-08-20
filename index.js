//Q1

export function addString(a, b) {
    if(typeof a === "string" || typeof b === "string"){
        return a + b;
    } else {
        return -1
    }
  }


//Q2

export function toNumber(str) {
    return parseInt(str, 10)
}


//Q3

const fruit = ["orange", "apple", "peach"];

export function filterOrange(arr){
    return arr.filter((e) => e === "orange")
}
