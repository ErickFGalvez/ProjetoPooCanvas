class CanvasObject {
    constructor(context, x, y, r, s, c) {
        this.context = context;
        this.x = x;
        this.y = y;
        this.r = r;
        this.s = s;
        this.c = c;
    }

    draw() {   
        this.context.save();
        this.context.beginPath();
        this.context.arc(400,400,this.c,0,Math.PI*2);
        this.context.stroke();
        this.context.clip();

        this.context.fillStyle = '#fff';
        this.context.fillRect(0, 0, 800, 800);
    
        // Translação, rotação e scale
        this.context.translate(this.x, this.y);
        this.context.rotate(this.r);
        this.context.scale(this.s, this.s);
        this.context.fillStyle = 'green';
        this.context.fillRect(0, 0, 100, 50);
        this.context.setTransform(1,0,0,1,0,0);
    
        // Transformação composta
        this.context.transform(this.s + 1, 0.5, 0.1, this.s + 1, this.x + 2, this.y + 1);
        this.context.fillStyle = 'purple';
        this.context.fillRect(50, 50, 20, 10);
        this.context.setTransform(1,0,0,1,0,0);
        this.context.restore();
    }

    // Função para aplicar translação
    translate(vx, vy) {
        this.x += vx;
        this.y += vy;
    }

    // Função para aplicar rotação
    rotate(vr) {
        this.r += vr;

        if(this.r > 6.2){
            this.r = 0;
        }
    }

    // Função para aplicar escala
    scale(vs) {
        this.s += vs;

        if(this.s >= 2){
            this.s = 2;
        }
        if(this.s <= 0.2){
            this.s = 0.2;
        }
    }

    clippingPath(vc){
        this.c -= vc;

        if(this.c >= 500){
            this.c = 500;
        }
        if(this.c <= 50){
            this.c = 50;
        }
    }
}