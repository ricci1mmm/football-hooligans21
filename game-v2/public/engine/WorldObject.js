class WorldObject {
    constructor(data){
        this.name = data.name;
        this.type = data.type;
        this.x = data.x;
        this.y = data.y;
        this.width = data.width || 100;
        this.height = data.height || 100;
        this.interaction = data.interaction || false;
    }

    draw(ctx, camera){
        ctx.fillStyle = '#3b3b3b';
        ctx.fillRect(this.x-camera.x, this.y-camera.y, this.width, this.height);
        ctx.fillStyle = '#ffffff';
        ctx.fillText(this.name, this.x-camera.x, this.y-camera.y-10);
    }
}
