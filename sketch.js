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
    for (let window of windows) {
        window.show();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function mouseMoved() {
    for (let window of windows) {
        if (window.overlaps(mouseX, mouseY)) {
            window.mouseMove();
        }
    }
    
}

function mouseDragged() {
    for (let window of windows) {
        if (window.shouldDrag) {
            window.mouseMove();
        } else {
            if (window.overlaps(mouseX, mouseY)) {
                window.mouseMove();
            }
        }
    }
}

function mousePressed() {
    for (let window of windows) {
        if (window.overlaps(mouseX, mouseY)) {
            window.mouseDown(mouseButton);
        }
    }
}

function mouseReleased() {
    for (let window of windows) {
        if (window.overlaps(mouseX, mouseY)) {
            window.mouseUp(mouseButton);
        }
    }
}