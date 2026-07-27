class Dialog {
    constructor(){
        this.active = false;
        this.lines = [];
    }

    open(lines){
        this.active = true;
        this.lines = lines;
    }

    close(){
        this.active = false;
    }

    draw(ctx){
        if(!this.active) return;

        ctx.fillStyle = 'rgba(0,0,0,0.8)';
        ctx.fillRect(80,520,1120,150);

        ctx.fillStyle = '#ffffff';
        this.lines.forEach((line,index)=>{
            ctx.fillText(line,120,570 + index*28);
        });
    }
}
