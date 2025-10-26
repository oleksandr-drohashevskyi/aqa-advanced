function rec(num) {
    console.log(num)
    if (num<=0){
        return;
    }
    rec(num-1)
}

rec(5)

//те саме через цикл походу можна зробити
// function rec2(num){
//     for (let i=num; i>=0; i--){
//         console.log(i)
//     }
// }

// rec2(6)