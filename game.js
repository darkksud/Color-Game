var squares = document.querySelectorAll(".square");
var verdict = document.getElementById("message");
var colorDisplay = document.querySelector("h1 span");
var newGame = document.getElementById("new-colors");
var h1 = document.querySelector("h1");
var easy = document.getElementById("mode-easy");
var hard = document.getElementById("mode-hard");
var mode = 0;
var rightSquare;
game();
easy.addEventListener("click", function(){
    mode = 3;
    hard.classList.toggle("selected");
    easy.classList.toggle("selected");
    game();
});
hard.addEventListener("click", function(){
    mode = 0;
    hard.classList.toggle("selected");
    easy.classList.toggle("selected");
    game();
});
newGame.addEventListener("click", function()
{
    newGame.textContent="new colors";
    game();
});
function game()
{
    verdict.textContent="";
    h1.style.backgroundColor = "steelblue";
    for(var i=0;i<mode;i++)
    {
        squares[i+mode].style.backgroundColor = "#232323";
    };
    for(var i=0;i<squares.length-mode;i++)
    {
        var a = Math.floor(Math.random()*256);
        var b = Math.floor(Math.random()*256);
        var c = Math.floor(Math.random()*256);
        squares[i].style.backgroundColor = "rgb("+a.toString()+", "+b.toString()+", "+c.toString()+")";
    };
    rightSquare = squares[Math.floor(Math.random()*(6-mode))].style.backgroundColor;
    colorDisplay.textContent = rightSquare;
    for(var i=0;i<squares.length-mode;i++)
    {
        squares[i].addEventListener("click", function(){
            console.log(rightSquare, this.style.backgroundColor);
            if(this.style.backgroundColor === rightSquare)
            {
                verdict.textContent = "wow";
                newGame.textContent = "new game";
                h1.style.backgroundColor = rightSquare;
                for(var i=0;i<squares.length-mode;i++)
                {
                    squares[i].style.backgroundColor = rightSquare;
                };
            }
            else
            {
                console.log("changing", this.style.backgroundColor);this.style.backgroundColor = "#232323";
            };
        });
    };
};
