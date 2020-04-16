
const cvs = document.getElementById("myCanvas");
cvs.style.display ="none";
buttonstop = document.createElement("button");
cvs.appendChild(buttonstop);
const ctx = cvs.getContext("2d");
var c = document.querySelector('#c');
cvs.width = 760;
cvs.height = 760;
let inputscore = document.getElementById("score");
/*cvs.style.backgroundImage = "url('image/backround.jpeg')";*/
function commancer() {
    if (document.getElementById("nom").value != 0)
    {
        document.getElementById("nomm").style = "display: none";
        cvs.style.display="block";

    }
   else {
    alert ("merci de verifier votre saisir")
   } 

}
function suprimer()
{
    window.location.href="index.html"

}
// create box = 20 px ()
const box = 20;
// ajouter baground;
const ground = new Image();
ground.src = "image/Background.png";

// random food
const foodImg = new Image();
let pices = ["image/kiwi.png","image/Fraise.png","image/ananas.png"];
let randamimage = Math.floor(Math.random() * pices.length);
console.log(randamimage);
foodImg.src = pices[randamimage];

// ajouter un sons a chaque action

let more = new Audio();
let mange = new Audio();
let haut = new Audio();
let droit = new Audio();
let gauche = new Audio();
let bas = new Audio();

more.src ="sons/bomb.mp3";
mange.src = "sons/mange.mp3";
haut.src = "sons/click1.mp3";
droit.src = "sons/click2.mp3";
gauche.src = "sons/click3.mp3";
bas.src = "sons/click4.mp3";

// create the snake

let snake = [];

snake[0] = {
    x : 9 * box,
    y : 10 * box
};

// creation food sanck

let food = {
    x : Math.floor(Math.random()*17+1) * box,
    y : Math.floor(Math.random()*15+3) * box
}

// creation le score et la direction de snack

let score = 0;
let s = 200;
function scoree()
{
    if (score >= 6)
      console.log("score" ,6);
}
console.log(s);


// by Ghassen
let d;

document.addEventListener("keydown",direction);

function direction(event){
    let key = event.keyCode;
    if( key == 37 && d != "RIGHT"){
        d = "LEFT";
        gauche.play();
    }else if(key == 38 && d != "DOWN"){
        d = "UP";
           haut.play();
          
    }else if(key == 39 && d != "LEFT"){
        d = "RIGHT";
       droit.play();
    }else if(key == 40 && d != "UP"){
        d = "DOWN";
         bas.play();
    }
    else if(key == 32 ){
        console.log("Stop");
        d="space";
        ctx.fillText("snake stoped",cvs.width/2,cvs.height/2);
    
       
    }

    // end ghassen
    
    scoree()
}
// verifier si 1 des element de sanck touche  le hader function
function collision(head,array){
    for(let i = 0; i < array.length; i++){
        if(head.x == array[i].x && head.y == array[i].y && d!="space"){
            return true;
        }
    }
    return false;
}

// ajouter tes les fonction a l'element  canvas

function draw(){
      // ajouter un bar de cercle snak
    ctx.drawImage(ground,0,0);
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.moveTo(box, 3*box);
    ctx.lineTo(ground.width,3*box);
    ctx.stroke(); 
    ctx.beginPath();
    ctx.moveTo(box, 3*box);
    ctx.lineTo(box,ground.height-3*box);
    ctx.stroke(); 
    ctx.beginPath();
    ctx.moveTo(box, 3*box);
    ctx.lineTo(box,ground.height -3*box);
    ctx.stroke(); 
    ctx.beginPath();
    ctx.moveTo(ground.width-box, 3*box);
    ctx.lineTo(ground.width-box,ground.height-3*box);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(box, ground.width-3*box);
    ctx.lineTo(ground.width-box,ground.width - 3*box);
    ctx.stroke(); 
       // attribuer couleur au snak
    for( let i = 0; i < snake.length ; i++){    
        ctx.fillStyle = ( i == snake.length -1)? "yellow" : "white";
        ctx.fillRect(snake[i].x,snake[i].y,box,box);
        ctx.strokeRect(snake[i].x,snake[i].y,box,box);
        var img = new Image();
       img.src = 'image/head.png';
       img.width = 20;
          var pattern = ctx.createPattern(img, 'repeat');
        ctx.fillStyle = pattern;
         ctx.fillRect(snake[0].x, snake[0].y, box, box);
    }

    ctx.drawImage(foodImg, food.x, food.y);
    
    // position 0 de snak
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    // attribuer les cordonner de x et y
    if( d == "LEFT") {snakeX -= box;}   
    if( d == "UP") { snakeY -= box; }       
    if( d == "RIGHT") {snakeX += box;}
    if( d == "DOWN") {snakeY += box;}
   
    
    
    
    
    
   
    

    // manger le food
    if(snakeX == food.x && snakeY == food.y){
     

      inputscore.textContent=score;
     
    
    
      if (score > 10)
      {    score++
          console.log(s)
      }
      else 
      {
        score +=3
      }
      var gradient = ctx.createLinearGradient(0, 0, 200, 0);
      mange.play();
       gradient.addColorStop("0"," magenta");
       gradient.addColorStop("0.5", "blue");
       gradient.addColorStop("1.0", "red");
       ctx.fillStyle = gradient;
       ctx.fillText("catched!", food.x,food.y);
        food = {
            x : Math.floor(Math.random()*35+1) * box,
            y : Math.floor(Math.random()*32+3) * box
        }
        // rien ne faire au tableux
    }else{
        // remove taille
        snake.pop();
    }
    
    // add new Head
    
    let newHead = {
        x : snakeX,
        y : snakeY
    }
     //
    // game over
    let lastscore = localStorage.getItem("lastscore");
    if(snakeX < box || snakeX > 36 * box  ||  snakeY < 3*box || snakeY > 34 * box || collision(newHead,snake)){
        clearInterval(game);
        more.play();
 c.style = "display: block";
 let div = document.createElement('div');
 let h1 = document.createElement('h2');
 let h2 = document.createElement('h2');
  let span = document.createElement('span');
 h1.innerText = "Game Over " + document.getElementById("nom").value + " Try Again";
 h2.innerText = "Your Score is " + score;
 div.appendChild(h1);
 div.appendChild(h2);
 div.appendChild(span);
 c.appendChild(div); 
 span.innerHTML = ' <button  onclick="suprimer(this)">paly again<button/>';
 inputscore.style = "visibility : hidden";
        console.log("fin");
  ctx.font = "50px Tahoma";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "White";
  ctx.fillText("GAME OVER",cvs.width/2,cvs.height/2);

  if (score > lastscore )
  {
  localStorage.setItem("lastscore", score);
  localStorage.setItem("nom", document.getElementById("nom").value);
  } 
    }
    
    snake.unshift(newHead);
    ctx.fillStyle="white";
    ctx.font = "25px sans-serif";
    ctx.fillText("score:",1*box,1.*box);
    ctx.fillStyle="brown";
    ctx.fillText(score,15*box,1.*box);
    ctx.fillStyle="white";
    ctx.fillText("Meilleur score",1*box,2.5*box);
    ctx.fillStyle="brown";
    ctx.fillText(lastscore,15*box,2.5*box);
    ctx.fillStyle="white";
    ctx.fillText("stop snak:space",20*box,1*box);
    ctx.fillStyle="white";
    ctx.fillText("Meilleur joueur:",20*box,2.5*box);
    ctx.fillStyle="brown";
    ctx.fillText(localStorage.nom,30*box,2.5*box);
   
}
   


game =setInterval(draw,s);
  












