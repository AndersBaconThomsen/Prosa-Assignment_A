let chars = {
    a : "--*--\n-*-*-\n-***-\n-*-*-\n-*-*-",
    b : "****-\n*---*\n****-\n*---*\n*****",
    c : "--**-\n-*---\n-*---\n-*---\n--**-",
    d : "-**--\n-*-*-\n-*-*-\n-*-*-\n-**--",
    e : "-***-\n-*---\n-**--\n-*---\n-***-",
    f : "-***-\n-*---\n-**--\n-*---\n-*---",
    g : "--**-\n-*---\n-*-**\n-*--*\n--**-",
    h : "-*-*-\n-*-*-\n-***-\n-*-*-\n-*-*-",
    i : "--*--\n-----\n--*--\n--*--\n--*--",
    j : "---*-\n---*-\n---*-\n---*-\n-**--",
    k : "-*-*-\n-*-*-\n-**--\n-*-*-\n-*-*-",
    l : "-*---\n-*---\n-*---\n-*---\n-***-",
    m : "*---*\n**-**\n*-*-*\n*---*\n*---*",
    n : "*---*\n**--*\n*-*-*\n*--**\n*---*",
    o : "--**-\n-*--*\n-*--*\n-*--*\n--**-",
    p : "-**--\n-*-*-\n-**--\n-*---\n-*---",
    q : "--**-\n-*--*\n-*--*\n-*--*\n*-**-",
    r : "-**--\n-*-*-\n-*-*-\n-**--\n-*-*-",
    s : "--**-\n-*---\n--*--\n---*-\n-**--",
    t : "--*--\n-***-\n--*--\n--*--\n---**",
    u : "-*--*\n-*--*\n-*--*\n-*--*\n--**-",
    v : "*---*\n*---*\n*---*\n-*-*-\n--*--",
    w : "*---*\n*---*\n*---*\n*-*-*\n-*-*-",
    x : "-*-*-\n-*-*-\n--*--\n-*-*-\n-*-*-",
    y : "*---*\n-*-*-\n--*--\n--*--\n--*--",
    z : "-***-\n---*-\n--*--\n-*---\n-***-",
}

let input = "ales";

let result = ["","","","",""];

let inputLength = input.split("").length;
console.log(inputLength);

for(let i = 0; i < inputLength; i++) {
    let char = input[i];
    //Find char
    let selectedChar = chars[char];
    splitChar = selectedChar.split("\n");

    
    for(let cIndex = 0; cIndex < 5; cIndex++) {
        result[cIndex] += splitChar[cIndex];
    }
}

console.log(result.join("\n"));



//Opgave 2
    
// var rows = 30;
// var cols = 100;

// var playing = false;

// var grid = new Array(rows);
// var newGrid = new Array(rows);

// var timer;
// var reproductionRate = 150;

// function initializeGrids() {
//     for(var i = 0; i< rows; i++){
//         grid[i] = new Array(cols)
//         nextGrid[i] = new Array(cols)

//     }
// }

// function reset(){
//     for (var i = 0; i < rows; i++){
//         for (var c = 0; c < cols; c++) {
//             grid[i][c] = 0;
//             nextGrid[i][c] = 0;
//         }
//     }
// }
