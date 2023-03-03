const buttonIDs = ['B1', 'B2']; // Array of the button IDs on the index page

function clearButtons(buttons, button){ // This function makes all the buttons the default pink colour, then turns the active one red.
    let a;
    for (let i in buttons) {
        a = buttons[i]
        document.getElementById(a).style.backgroundColor = "#d76a6a";
    };
    document.getElementById(button).style.backgroundColor = "#8A0C0CFF";
}
function showGlibbert(){ // B1 is pressed
    document.getElementById("screenContent").innerHTML =
        "<h1>Glibbert</h1>" +
        "<p></p>" +
        "<img src='assets/images/index/Glibbert500.png' style='width: 38%; float: left; background-color: rgba(255,255,255,0.4); margin-left: 5%;'></img>" +
        "<p style='text-align: left; margin-left: 48%;' >In OuterCooked, you play as Glibbert, a chef from Earth with a talent and reputation for cooking fast. Glibbert is a &ldquo;worlds renowned chef&rdquo; beloved by many - especially Bluggus.</p>";
    clearButtons(buttonIDs, "B1");

}

function showBluggus(){ // B2 is pressed
    document.getElementById("screenContent").innerHTML =
        "<h1>Bluggus</h1>" +
        "<p></p>" +
        "<img src='assets/images/index/bluggus720.png' style='width: 38%; float: left; background-color: rgba(255,255,255,0.4); padding-top: 2%;margin-left: 5%;'></img>" +
        "<p style='text-align: left; margin-left: 48%;'>These friendly creatures first visited Earth in 2022 where they developed a taste for the cooking of Glibbert. Not wanting to give up their amazing food, they decided to take Glibbert with them, back to who knows where.</p>";
    clearButtons(buttonIDs, "B2");
}