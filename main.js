function start(){
    document.getElementById("startText").classList.add("hideBlock");
    document.getElementById("startButton").classList.add("hideBlock");

    let min = 0;
    let max = 100;
    let middle = Math.floor((min + max)/2);
    let stage = 1;

    document.getElementById("question").classList.remove("hideBlock");
    document.getElementById("question").innerHTMl = "Попытка " + stage + ": " + middle;

    document.getElementById("small").classList.remove("hideBlock");
    document.getElementById("bingo").classList.remove("hideBlock");
    document.getElementById("big").classList.remove("hideBlock");

    function smallClick(){
        max = middle;
        middle = Math.floor((min + max)/2);

        if (max == middle){
            middle -= 1;
        }
        
        function bigClick(){
            min = middle;
            middle = Math.floor((min + max)/2);

            if(min == middle){
                middle += 1;
            }

            checkGame();
        }
    }
}