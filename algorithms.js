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
const data2 = [1, 2, 3, 4, 5]

for (let j =0; j < data2.length; j++) {
for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    }
}

//set n as the length of data array 1, a as length of data array 2
O(n + a)

