
const printPattern = (n) => {
    for(let i = 1 ; i <=n ; i++){
         let res = ""
        for(let j = i ; j > 0; j--){
            res += j;
        }
        console.log(res)
    }
}

console.log(printPattern(5))