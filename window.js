class Window extends Control {
    constructor(x, y, w, h, title, caption, par, centered) {
        if (centered) {
            x = width / 2 - w / 2;
            y = height / 2 - w / 2;
        }
        super(x, y, w, h, title, caption, par, centered);
        this.controls = [];
        this.shouldDrag = false;
        this.offset = {x: 0, y: 0};
        this.addButton(w - 32, 0, 32, 24, "close", "X",
        (button) => {

        },
        (button) => {
            this.visible = false;
        }, texClose);
    }

    addButton(x, y, w, h, name, caption, mouseDownFunc, mouseUpFunc, tex = null) {
        this.controls.push(new Button(x, y, w, h, name, caption, this, false, mouseDownFunc, mouseUpFunc, tex));
    }

    show() {
        if (!this.visible)
            return;
        rect(this.position.x, this.position.y, this.size.w, 24);
        text(this.caption, this.position.x + 18, this.position.y + 16);
        rect(this.position.x, this.position.y + 24, this.size.w, this.size.h);
        for (let i = 0; i < this.controls.length; i++) {
            this.controls[i].show();
        }
    }

    mouseMove() {
        if (this.shouldDrag)
            this.move(mouseX - this.offset.x, mouseY - this.offset.y);
        for (let control of this.controls) {
            if (control.overlaps(mouseX, mouseY)) {
                if (!control.mouseEntered)
                control.mouseEnter();
            } else {
                if (control.mouseEntered)
                control.mouseLeave();
            }
        }
    }

    mouseDown(button) {
        if (mouseY < this.position.y + 24) {
            this.shouldDrag = true;
            this.offset.x = mouseX - this.position.x;
            this.offset.y = mouseY - this.position.y;
        }
        for (let control of this.controls) {
            if (control.overlaps(mouseX, mouseY)) {
                control.mouseDown(button);
            }
        }
    }

    mouseUp(button) {
        this.shouldDrag = false;
        for (let control of this.controls) {
            if (control.overlaps(mouseX, mouseY)) {
                control.mouseUp(button);
            }
        }
    }

    overlaps(x, y) {
        if (!this.visible)
            return false;
        return x > this.position.x && x < this.position.x + this.size.w && y > this.position.y && y < this.position.y + this.size.h + 24;
    }

    move(x, y) {
        this.position.x = x;
        this.position.y = y;
        // for (let i = 0; i < this.controls.length; i++) {
        //     this.controls[i].move(this.position.x + this.controls[i].position.x, this.position.y + this.controls[i].position.y);
        // }
    }
}