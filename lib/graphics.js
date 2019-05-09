const LEFT = 0;
const CENTER = 1;
const RIGHT = 2;
const TOP = 3;
const BOTTOM = 4;
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
let text_align_h = LEFT;
let text_align_v = CENTER;
const mouse = { x: innerWidth / 2, y: innerHeight / 2};
var width, height;
var shouldFill = true;
var shouldStroke = false;
addEventListener('mousemove', event => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
});

addEventListener('resize', () => {
    resizeCanvas(innerWidth, innerHeight);
    
    init();
});

addEventListener('DOMContentLoaded', (window, event) => {
    init();
    animate();
});

addEventListener('mousedown', (event) => {
    mouseDown(event.button);
});

function init() {
    setup();
}

function animate() {
    requestAnimationFrame(animate);
    draw();
}

function createCanvas(w, h) {
    canvas.width = w;
    canvas.height = h;
    width = innerWidth;
    height = innerHeight;
}

function resizeCanvas(w, h) {
    canvas.width = w;
    canvas.height = h;
    width = innerWidth;
    height = innerHeight;
}

function loadImage(url) {
    let s = new Image();
    s.src = url;
    return s;
}

function fill(r, g = -1, b = -1, a = -1) {
    if (g == -1 && b == -1 && a == -1) {
        a = 255;
        g = r;
        b = r;
    }
    if (g > -1 && b == -1 && a == -1) {
        a = g;
        g = r;
        b = r;
    }
    if (g > -1 && b > -1 && a == -1) {
        a = 255;
    }
    if (r < 0 || r > 255) { // if passed a color
        let col = r;
        if (col >= 0)
            console.log(col);
        r = col & 0xFF;
        g = col >> 8 & 0xFF;
        b = (col >> 16) & 0xFF;
        a = (col >> 24) & 0xFF;
    }
    ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
    shouldFill = true;
}

function noFill() {
    shouldFill = false;
}

function noStroke() {
    shouldStroke = false;
}

function stroke(r, g = -1, b = -1, a = -1) {
    if (g == -1 && b == -1 && a == -1) {
        a = 255;
        g = r;
        b = r;
    }
    if (g > -1 && b == -1 && a == -1) {
        a = g;
        g = r;
        b = r;
    }
    if (g > -1 && b > -1 && a == -1) {
        a = 255;
    }
    if (r < 0 || r > 255) { // if passed a color
        let col = r;
        if (col >= 0)
            console.log(col);
        r = col & 0xFF;
        g = col >> 8 & 0xFF;
        b = (col >> 16) & 0xFF;
        a = (col >> 24) & 0xFF;
    }
    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${a})`;
    shouldStroke = true;
}

function background(r, g = -1, b = -1) {
    fill(r, g, b, 255);
    noStroke();
    rect(0, 0, canvas.width, canvas.height);
    stroke(0);
}



function rect(x, y, w, h) {
    if (shouldFill){
        ctx.fillRect(x, y, w, h);
    }
    if (shouldStroke) {
        ctx.strokeRect(x, y, w, h);
    }
}

function ellipse(x, y, size) {
    ctx.beginPath();
    
    ctx.arc(x, y, size, 0, 360);
    if (shouldFill)
        ctx.fill();
    if (shouldStroke)
        ctx.stroke();
}

function text(caption, x, y) {
    let textMeasurements = ctx.measureText(caption);
    if (text_align_h == CENTER) {
        x -= (textMeasurements.width / 2);
    }
    if (text_align_h == RIGHT) {
        x -= textMeasurements.width;
    }
    if (text_align_v == CENTER) {
        y -= textAscent() / 2;
    }
    if (text_align_v == TOP) {
        y += textAscent();
    }
    if (text_align_v == BOTTOM) {
        y -= textAscent();
    }

    ctx.fillText(caption, x, y, textMeasurements.width);
}

function textAscent() {
    return parseInt(ctx.font);
}

function textAlign(horizontal, vertical = CENTER) {
    text_align_h = horizontal;
    text_align_v = vertical;
}

function image(img, x, y) {
    ctx.drawImage(img, x, y);
}