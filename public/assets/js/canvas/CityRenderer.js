class CityRenderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }

    draw() {
        const ctx = this.ctx;
        ctx.fillStyle = '#202020';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // roads
        ctx.fillStyle = '#303030';
        ctx.fillRect(100, 250, 700, 80);

        // buildings
        this.building(150,120,120,100);
        this.building(650,100,140,130);

        // stadium
        ctx.fillStyle = '#146b32';
        ctx.beginPath();
        ctx.arc(450,180,80,0,Math.PI*2);
        ctx.fill();

        // pub sign
        ctx.fillStyle = '#ff9d00';
        ctx.fillRect(350,380,200,60);
        ctx.fillStyle = '#ffffff';
        ctx.font = '22px Arial';
        ctx.fillText('ПАБ',420,418);
    }

    building(x,y,w,h){
        const ctx=this.ctx;
        ctx.fillStyle='#444';
        ctx.fillRect(x,y,w,h);
    }
}
