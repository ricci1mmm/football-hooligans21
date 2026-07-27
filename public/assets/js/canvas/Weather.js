class Weather {
    constructor(){
        this.drops=[];
    }

    rain(ctx,width,height){
        ctx.strokeStyle='#789';
        for(let i=0;i<80;i++){
            let x=Math.random()*width;
            let y=Math.random()*height;
            ctx.beginPath();
            ctx.moveTo(x,y);
            ctx.lineTo(x+2,y+10);
            ctx.stroke();
        }
    }
}
