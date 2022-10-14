const sound = document.querySelector('.kal')
const btnTreg = document.querySelector('.picture')


btnTreg.addEventListener('click',()=>{
	sound.play()

	btnTreg.className = "picture kalibang"
	setTimeout(() => {  btnTreg.className = "picture"; }, 3000);
})


let dots = [],
	mouse = {
		x: 0,
		y: 0
	};

let Dot = function() {
	this.x = 0;
	this.y = 0;
	this.node = (function(){
		let n = document.createElement('div');
		n.className = 'cursor';
		document.body.appendChild(n);
		return n;
	}());
};

Dot.prototype.draw = function() {
	this.node.style.left = this.x + 'px';
	this.node.style.top = this.y + 'px';
}

for (let i = 0; i < 12; ++i) {
	let d = new Dot();
	dots.push(d);
}

draw = () => {
	let x = mouse.x, y = mouse.y;

	dots.forEach((dot, index, dots) => {
		let nextDot = dots[index + 1] || dots[0];

		dot.x = x;
		dot.y = y;
		dot.draw();

		x += (nextDot.x - dot.x) * .6;
		y += (nextDot.y - dot.y) * .6;
	});
}

addEventListener('mousemove', (event) => {
	mouse.x = event.pageX;
	mouse.y = event.pageY;
});

animate = () => {
	draw();
	requestAnimationFrame(animate);
}

animate();
