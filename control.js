class Control {
    constructor(x, y, w, h, title, caption, par, centered) {
        this.par = par;
        this.centered = centered;
        this.position = {x: x, y: y};
        this.mouseEntered = false;
        this.clicked = false;
        this.visible = true;
        this.size = {w: w, h: h};
        this.title = title;
        this.caption = caption;
        this.foreColor = color(0);
        this.backColor = color(255);
        this.defaultColor = color(255);
        this.border = true;
    }

    show() {
    }

    mouseMove() {

    }

    overlaps(x, y) {
        let x_off = this.position.x;
        let y_off = this.position.y;
        if (this.par != null) {
            x_off += this.par.position.x;
            y_off += this.par.position.y;
        }
        return x > x_off && x < x_off + this.size.w && y > y_off && y < y_off + this.size.h;
    }

    mouseEnter() {
        this.mouseEntered = true;
    }
    
    mouseLeave() {
        this.clicked = false;
        this.mouseEntered = false;
    }

    mouseDown(button) {
        if (button == LEFT)
            this.clicked = true;
    }

    mouseUp(button) {
        if (button == LEFT)
            this.clicked = false;
    }

    move(x, y) {

    }
}