class GameMap {
    constructor(){
        this.width = 3000;
        this.height = 2000;
        this.objects = [
            {name:'Старый стадион', x:500, y:400},
            {name:'Паб', x:900, y:600},
            {name:'Гараж', x:1200, y:450},
            {name:'База фирмы', x:1600, y:800}
        ];
    }

    draw(ctx, camera){
        ctx.fillStyle = '#202020';
        ctx.fillRect(0,0,1280,720);

        ctx.fillStyle = '#2f6b3f';
        ctx.fillRect(-camera.x,-camera.y,this.width,this.height);

        ctx.fillStyle = '#444';
        this.objects.forEach(obj => {
            ctx.fillRect(obj.x-camera.x,obj.y-camera.y,120,80);
            ctx.fillStyle='#fff';
            ctx.fillText(obj.name,obj.x-camera.x,obj.y-camera.y-10);
            ctx.fillStyle='#444';
        });
    }
}
