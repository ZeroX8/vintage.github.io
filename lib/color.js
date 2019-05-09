function color(r, g = -1, b = -1, a = -1) {
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
    return r | (g << 8) | (b << 16) | (a << 24);
}

function red(c) {
    return c & 0xFF;
}

function green(c) {
    return (c >> 8) & 0xFF;
}

function blue(c) {
    return (c >> 16) & 0xFF;
}

function alpha(c) {
    return (c >> 24) & 0xFF;
}

function lerpColor(start, end, amount) {
    amount = max(min(amount, 1), 0);
    let r1 = red(start) / 255;
    let r2 = red(end) / 255;
    let g1 = green(start) / 255;
    let g2 = green(end) / 255;
    let b1 = blue(start) / 255;
    let b2 = blue(end) / 255;
    let a1 = alpha(start) / 255;
    let a2 = alpha(end) / 255;
    return color(lerp(r1, r2, amount) * 255, lerp(g1, g2, amount) * 255, lerp(b1, b2, amount) * 255, lerp(a1, a2, amount) * 255);
}