class Game {
    constructor(canvasId){
        this.canvas=document.getElementById(canvasId);
        this.ctx=this.canvas.getContext('2d');

        this.input=new Input();
        this.player=new Player(640,360);
        this.camera=new Camera();
        this.map=new GameMap();
    }

    start(){
        this.loop();
    }

    update(){
        this.player.update(this.input);
        this.camera.follow(this.player);
    }

    render(){
        this.map.draw(this.ctx,this.camera);
        this.player.draw(this.ctx,this.camera);
    }

    loop(){
        this.update();
        this.render();
        requestAnimationFrame(()=>this.loop());
    }
}

window.onload=()=>{
    new Game('game').start();
};
