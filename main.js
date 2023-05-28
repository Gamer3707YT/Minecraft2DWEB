canvas = new fabric.Canvas("myCanvas");

block_height = 30;
block_width = 30;

player_x = 10;
player_y = 10;

var player_object ="";
var block_image_object ="";

function PlayerUpdate () {
    
    fabric.Image.fromURL("player.png", function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y, left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image (get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object=Img;
        block_image_object.scaleToWidth(block_width);
        block_image_object.scaleToHeight(block_height);
        block_image_object.set({
            top:player_y, left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {

    var keypressed =e.keyCode;
    console.log(keypressed);

if(e.shiftKey == true && keypressed == '80') {

    console.log("P And Shift Pressed Together");
    block_width = block_width +10; 
    block_height = block_height +10;
    document.getElementById("current_width").innerHTML = block_width;
    document.getElementById("current_height").innerHTML = block_height;
}

if(e.shiftKey == true && keypressed == '77') {

    console.log("M And Shift Pressed Together");
    block_width = block_width -10; 
    block_height = block_height -10;
    document.getElementById("current_width").innerHTML = block_width;
    document.getElementById("current_height").innerHTML = block_height;
}

if(keypressed == '38') {
    up();
    console.log("Up Key Pressed");
}

if(keypressed == '40') {
    down();
    console.log("Down Key Pressed");
}

if(keypressed == '37') {
    left();
    console.log("Left Key Pressed");
}

if(keypressed == '39') {
    right();
    console.log("Right Key Pressed");
}

if (keypressed == '67') {
    new_image('wall.jpg');
    console.log("Clay Bricks Placed");
}

if (keypressed == '71') {
    new_image('ground.png');
    console.log("Grass Block Placed");
}

if (keypressed == '76'){
    new_image('light_green.png');
    console.log("Light Green Block Placed");
}

if (keypressed == '79') {
    new_image('trunk.jpg');
    console.log("Oak Log Placed");
}

if (keypressed == '78') {
    new_image('roof.jpg');
    console.log("Netherrack Placed");
}

if (keypressed == '66'){
    new_image('yellow_wall.png');
    console.log("Birch Plank Placed");
}

if(keypressed == '68') {
    new_image('dark_green.png');
    console.log("Dark Green Block Placed");
}

if(keypressed == '86'){
    new_image('unique.png');
    console.log("GlowStone Placed");
}

if(keypressed == '83'){
    new_image('cloud.jpg');
    console.log("Stone Placed");
}
}

function up() {

    if(player_y >= 0 ) {
        player_y = player_y - block_height;
        console.log("block height = " + block_height);
        console.log("When Up Arrow Is Pressed X = " + player_x +"Y = " + player_y);
        canvas.remove(player_object);
        PlayerUpdate();
    }
}

function down() {

    if(player_y <= 500 ) {
        player_y = player_y + block_height;
        console.log("block height = " + block_height);
        console.log("When Down Arrow Is Pressed X = " + player_x +"Y = " + player_y);
        canvas.remove(player_object);
        PlayerUpdate();
    }
}

function left() {

    if(player_x > 0 ) {
        player_x = player_x - block_width;
        console.log("block width = " + block_width);
        console.log("When Left Arrow Is Pressed X = " + player_x +"Y = " + player_y);
        canvas.remove(player_object);
        PlayerUpdate();
    }
}

function right() {

    if(player_x <= 850 ) {
        player_x = player_x + block_width;
        console.log("block width = " + block_width);
        console.log("When Right Arrow Is Pressed X = " + player_x +"Y = " + player_y);
        canvas.remove(player_object);
        PlayerUpdate();
    }
}

function Clear(){
    canvas.clear();
}