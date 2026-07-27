class PlayerRenderer {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }

    draw(ctx){
        ctx.fillStyle='#eeeeee';
        ctx.beginPath();
        ctx.arc(this.x,this.y,18,0,Math.PI*2);
        ctx.fill();

        ctx.fillStyle='#cc0000';
        ctx.fillRect(this.x-15,this.y+18,30,35);
    }
}
