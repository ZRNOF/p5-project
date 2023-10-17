import p5 from "p5"
import Baboon from "./asset/media/Baboon.png"

const p5Sketch = () => {
	return new p5((p) => {
		let img
		p.preload = () => {
			img = p.loadImage(Baboon)
		}
		p.setup = () => {
			p.createCanvas(600, 600)
			p.noStroke()
			p.background(255)
			p.imageMode(p.CENTER)
			p.image(img, p.width / 2, p.height / 2)
		}
		p.draw = () => {
			p.circle(p.mouseX, p.mouseY, 50)
		}
	})
}

export default p5Sketch
