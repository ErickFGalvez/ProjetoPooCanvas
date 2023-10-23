
const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');

const obj = new CanvasObject(context,200,200,0.1,1,500);
var velox = 5;
var veloy = 2;

function animar(){
    context.clearRect(0,0,800,800);
    obj.draw();


    obj.translate(velox,veloy);

    //Colisão
    if(obj.x > 650 || obj.x < 50){
        velox *= -1;
    }
    if(obj.y > 650 || obj.y < 50){
        veloy *= -1;
    }

    obj.rotate(0.05);

    requestAnimationFrame(animar);
}

document.addEventListener('keydown', function(event){
    // Diminui o objeto se apertar a tecla A
    if(event.key === 'a' || event.key === 'A'){
        obj.scale(-0.2);
    }
    // Aumenta o objeto se apertar a tecla D
    if(event.key === 'd' || event.key === 'D'){
        obj.scale(0.2);
    }

    //Aumenta a area do clip de apertar W
    if(event.key === 'w' || event.key === 'W'){
        obj.clippingPath(50);
    }

    // Diminui a area do clip se apertar S
    if(event.key === 's' || event.key === 'S'){
        obj.clippingPath(-50);
    }
});

// Chamar a função de desenho
animar();