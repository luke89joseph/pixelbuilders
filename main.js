
    let randFLOAT = "";
    for (let i = 0; i < 18; i++) {
        let rand = Math.floor(Math.random() * 9) + 1;
        if (rand%2 === 0) {
            randFLOAT += 0;
        }
        else {
            randFLOAT += 1;
        }
    }
    document.getElementById("randDIER").innerText = randFLOAT;