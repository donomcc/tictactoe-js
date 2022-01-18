var turns = 0;
var totalMoves = 0;

// Setting each button as a var
const sq1 = $(".sq1");
const sq2 = $(".sq2");
const sq3 = $(".sq3");
const sq4 = $(".sq4");
const sq5 = $(".sq5");
const sq6 = $(".sq6");
const sq7 = $(".sq7");
const sq8 = $(".sq8");
const sq9 = $(".sq9");


$("button").click(function(){
    var moveSound = new Audio("sounds/sound.wav");
    var winSound = new Audio("sounds/win.wav");
    var drawSound = new Audio("sounds/draw.wav");
    
    // Checks if red move is valid
    if (turns % 2 === 0) {
        if ($(this).hasClass("used") === true) {
            var invalidSound = new Audio("sounds/invalid.wav");
            invalidSound.play();
            $(this).addClass("invalid");
            setTimeout(() => {
                $(this).removeClass("invalid");
            },340);
        } else { 
        turns++
        totalMoves++;
        $(this).addClass("red used");
        $("h2").text("Blue Turn");
        moveSound.play();
        }
    } else {
    // Checks if blue move is valid
        if ($(this).hasClass("used") === true) {
            var invalidSound = new Audio("sounds/invalid.wav");
            invalidSound.play();
            $(this).addClass("invalid");
            setTimeout(() => {
                $(this).removeClass("invalid");
            },340);
        } else { 
        turns++
        totalMoves++;
        $(this).addClass("blue used");
        $("h2").text("Red Turn");
        moveSound.play();
        }
    }

    $("h3").text("Total Moves: "+totalMoves);

    // Checking win condition

    if (sq1.hasClass("blue") && sq2.hasClass("blue") && sq3.hasClass("blue") ||
       sq4.hasClass("blue") && sq5.hasClass("blue") && sq6.hasClass("blue") ||
       sq7.hasClass("blue") && sq8.hasClass("blue") && sq9.hasClass("blue") ||
       sq1.hasClass("blue") && sq4.hasClass("blue") && sq7.hasClass("blue") ||
       sq2.hasClass("blue") && sq5.hasClass("blue") && sq8.hasClass("blue") ||
       sq3.hasClass("blue") && sq6.hasClass("blue") && sq9.hasClass("blue") ||
       sq1.hasClass("blue") && sq5.hasClass("blue") && sq9.hasClass("blue") ||
       sq3.hasClass("blue") && sq5.hasClass("blue") && sq7.hasClass("blue")
       ) {
           winSound.play();
           totalMoves++
           $("h2").text("Blue Wins!");
           $("h2").addClass("blue");
           setTimeout(reset, 3000);
        
    } else if (sq1.hasClass("red") && sq2.hasClass("red") && sq3.hasClass("red") ||
    sq4.hasClass("red") && sq5.hasClass("red") && sq6.hasClass("red") ||
    sq7.hasClass("red") && sq8.hasClass("red") && sq9.hasClass("red") ||
    sq1.hasClass("red") && sq4.hasClass("red") && sq7.hasClass("red") ||
    sq2.hasClass("red") && sq5.hasClass("red") && sq8.hasClass("red") ||
    sq3.hasClass("red") && sq6.hasClass("red") && sq9.hasClass("red") ||
    sq1.hasClass("red") && sq5.hasClass("red") && sq9.hasClass("red") ||
    sq3.hasClass("red") && sq5.hasClass("red") && sq7.hasClass("red")
    ) {
        winSound.play();
        totalMoves++
        $("h2").text("Red Wins!");
        $("h2").addClass("red");
        setTimeout(reset, 3000);
     
 }  else if (turns===9) {
     drawSound.play();
    $("h2").text("Draw");
    setTimeout(reset, 3000);
 }

 
})

//Reset Function
function reset() {
    turns = 0;
    $("button").removeClass("blue red used");
    totalMoves = 0;
    $("h3").text("Total Moves: "+totalMoves);
    $("h2").text("Red Turn");
    $("button").removeClass("blue red used");
    $("h2").removeClass("blue red used");

}

// Reset button
$(".reset").click(function(){
    turns = 1;
    var resetSound = new Audio("sounds/reset.wav");
    resetSound.play();
    reset();

})
