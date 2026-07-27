class Player {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.speed = 3;
        this.name = 'Новичок';
        this.stats = {
            level: 1,
            authority: 0,
            respect: 0,
            money: 500
        };
    }

    update(input){
        if(input.up) this.y -= this.speed;
        if(input.down) this.y += this.speed;
        if(input.left) this.x -= this.speed;
        if(input.right) this.x += this.speed;
    }

    draw(ctx, camera){
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(this.x-camera.x, this.y-camera.y, 18, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#ffffff';
        ctx.fillText(this.name, this.x-camera.x-25, this.y-camera.y-30);
    }
}
