function sumUp(n) {
    let result = 0;
    for (let i = 1; i <=n; i++) {
        result = result + i;
    }
    return(result);
}

// Simplified way to perform the same function: 
// function sumUp(n) {
//     return (n/2) * (1+n);
// })
// You can use performance.now() to comare start and end times
//of functions running.


//Basic array example 
const data = ['A', 'B', 'C']

for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
}

