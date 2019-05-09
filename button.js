class Button extends Control {
    constructor(x, y, w, h, title, caption, par, centered, mouseDownFunc, mouseUpFunc) {
        super(x, y, w, h, title, caption, par, centered);
        this.hoverColor = color(128);
        this.clickedColor = color(96);
        this.targetColor = this.backColor;
        this.mouseDownFunc = mouseDownFunc;
        this.mouseUpFunc = mouseUpFunc;
    }

    show() {
        let x_off = this.position.x;
        let y_off = this.position.y;
        if (!this.visible)
            return;
        if (this.par != null) {
            if (!this.par.visible)
                return;
            x_off += this.par.position.x;
            y_off += this.par.position.y;
        }
        push();
        stroke(0);
        if (this.border == false) {
            noStroke();
        }
        this.targetColor = this.defaultColor;
        if (this.mouseEntered)
            this.targetColor = this.hoverColor;
            //fill(this.hoverColor);
        if (this.clicked)
            this.targetColor = this.clickedColor;
            //fill(this.clickedColor);
        this.backColor = lerpColor(this.backColor, this.targetColor, 0.2);
        fill(this.backColor);
        rect(x_off, y_off, this.size.w, this.size.h);
        pop();
        push();
        fill(0);
        textAlign(CENTER);
        text(this.caption, x_off + (this.size.w/2), y_off + 16);
        pop();
    }

    mouseDown(button) {
        super.mouseDown(button);
        if (this.mouseDownFunc != null)
            this.mouseDownFunc(button);
    }

    mouseUp(button) {
        super.mouseUp(button);
        if (this.mouseUpFunc != null)
            this.mouseUpFunc(button);
    }
}