class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.player = { x: 640, y: 360 };
    }

    start() {
        this.loop();
    }

    update() {
        // game logic will be added here
    }

    render() {
        const ctx = this.ctx;
        ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        ctx.fillStyle = '#1c1c1c';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        ctx.fillStyle = '#1f6b3a';
        ctx.fillRect(0, 500, this.canvas.width, 220);

        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.player.x, this.player.y, 24, 0, Math.PI * 2);
        ctx.fill();
    }

    loop() {
        this.update();
        this.render();
        requestAnimationFrame(() => this.loop());
    }
}

window.onload = () => {
    const game = new Game('game');
    game.start();
};
