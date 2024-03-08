console.log("SI JS Loaded!");

let count = 0; 
const COUNT_INTERVAL = 1000; 

function goUp() {
    count++;
    console.log(count);
    document.getElementById("current-count").innerText = count;
}

setInterval(goUp, COUNT_INTERVAL);

