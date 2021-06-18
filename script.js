const dino = document.querySelector('.dino');

const background = document.querySelector('.background');

let isjump = false;
let isGameOver = false;
let position = 0;

function handlekeyup(event){
    if(event.keyCode === 32){
        if(!isjump){
            jump();
     }
        
    }
}

function jump(){

    isjump = true;
    let upInterval = setInterval(() => {
        if(position >= 150){
            clearInterval(upInterval);
            
            //descendo
            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                    isjump = false;
                } else{
                position -= 20; 
                dino.style.bottom = position + 'px';
                }
            }, 20);
        }else{
        //subindo
        position += 20;
        dino.style.bottom = position + 'px';
        }
 }, 20);
}

function creatCactos(){
    const cactos = document.createElement('div');

    let cactosPosition = 1000;
    let randomTime = Math.random() * 6000;
    
    if (isGameOver) return;

    cactos.classList.add('cactos');
    background.appendChild(cactos); 
    cactos.style.left = cactosPosition + 'px';
    

    let leftTimer = setInterval(() => {
     
        if(cactosPosition < -60){
            clearInterval(lefTimer);
            background.removeChild(cactos);
        }else if(cactosPosition > 0 && cactosPosition < 60 && position < 60){
            clearInterval(leftTimer);
            isGameOver = true;
            document.body.innerHTML = '<h1 class="gameOver">Fim de Jogo!</h1>';
        }else{
            cactosPosition -= 10;
            cactos.style.left = cactosPosition + 'px';
        }
   
    }, 20);

    setTimeout(creatCactos, randomTime);
}


creatCactos();

document.addEventListener('keyup', handlekeyup);