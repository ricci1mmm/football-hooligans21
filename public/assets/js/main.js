const canvas=document.getElementById('cityCanvas');

if(canvas){
    const city=new CityRenderer(canvas);
    const player=new PlayerRenderer(450,330);
    const weather=new Weather();

    function loop(){
        city.draw();
        player.draw(city.ctx);
        weather.rain(city.ctx,canvas.width,canvas.height);
        requestAnimationFrame(loop);
    }

    loop();
}
