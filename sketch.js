var main;
var msgBox;
var windows = [];
function setup() {
    createCanvas(windowWidth, windowHeight);
    main = new Window(32, 32, 256, 128, "Hello world!", "This is a caption", null, true);
    main.addButton(32, 32, 128, 24, "Oh", "Click me!",
    (button) => { // Mouse Down
    },
    (button) => { // Mouse Up
        msgBox.visible = !msgBox.visible;
    });

    msgBox = new Window(0, 0, 256, 128, "Oh", "Message Box", null, false);

    windows.push(main);
    windows.push(msgBox);

}

function draw() {
    background(51);
    main.show();
    msgBox.show();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
    for (let i = 0; i < windows.length; i++) {
        if (windows[i].overlaps(mouseX, mouseY)) {
            windows[i].mouseMove();
        }
    }
    
}

function mouseDragged() {
    for (let i = 0; i < windows.length; i++) {
        if (windows[i].shouldDrag) {
            windows[i].mouseMove();
        }
    }
}

function mousePressed() {
    for (let i = 0; i < windows.length; i++) {
        if (windows[i].overlaps(mouseX, mouseY)) {
            windows[i].mouseDown(mouseButton);
        }
    }
}

function mouseReleased() {
    for (let i = 0; i < windows.length; i++) {
        if (windows[i].overlaps(mouseX, mouseY)) {
            windows[i].mouseUp(mouseButton);
        }
    }
}