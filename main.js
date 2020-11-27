canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
random_number = Math.floor(Math.random() * 5);
console.log(random_number);

rover_width = 100;
rover_height = 90;
background_image = "racing.png";
rover_image = "car1.png";
rover_image2 = "bugatti_PNG30.png";
rover_x = 10;
rover_y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover_image;
    rover_imgtag2 = new Image();
    rover_imgTag2.onload = uploadrover2;
    rover_imgTag2.src = rover_image2;

}

function uploadBackground() { ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height); }

function uploadrover() { ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height); }

function uploadrover2() { ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height); }


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }
    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
    if (keyPressed == '87') {
        w();
        console.log("w");
    }
    if (keyPressed == '83') {
        s();
        console.log("s");
    }
    if (keyPressed == '65') {
        a();
        console.log("a");
    }
    if (keyPressed == '68') {
        d();
        console.log("");
    }
}

function up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function w() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up w key is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover2();
    }
}

function s() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up s key is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover2();
    }
}

function down() {
    if (rover_y <= 500) {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function a() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up a key is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover2();
    }
}

function right() {
    if (rover_x <= 700) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover();
    }
}

function d() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up d key is pressed, x = " + rover_x + " | y = " + rover_y);
        uploadBackground();
        uploadrover2();
    }
}