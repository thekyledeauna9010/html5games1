import pop from "../../pop/index.js";
const { Sprite, Texture } = pop;

const texture = new Texture("res/images/mouse.png");

class Mouse extends Sprite {
  constructor(controls) {
    super(texture);
    this.w = 100;
    this.h = 51;
    this.controls = controls;
  }
  update(dt) {
    const { pos, controls } = this;
    const { x, y } = controls;
    const speed = 200;
    pos.x += x * dt * speed;
    pos.y += y * dt * speed;
  }
}

export default Mouse;
