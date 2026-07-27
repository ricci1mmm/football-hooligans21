class Input {
    constructor(){
        this.keys = {};

        window.addEventListener('keydown', e => {
            this.keys[e.key.toLowerCase()] = true;
        });

        window.addEventListener('keyup', e => {
            this.keys[e.key.toLowerCase()] = false;
        });
    }

    get up(){ return this.keys['w'] || this.keys['arrowup']; }
    get down(){ return this.keys['s'] || this.keys['arrowdown']; }
    get left(){ return this.keys['a'] || this.keys['arrowleft']; }
    get right(){ return this.keys['d'] || this.keys['arrowright']; }
}
