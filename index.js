const cvs = document.getElementById('myCanvas');
const ctx = cvs.getContext('2d');
cvs.width = 600;
cvs.height = 600;

// create box = 10-> en x ; 30->y ()  ( 50 case en x et  16 case en y)
const boxx = 10;
const boxy = 30;

// ajouter des image food intiale et arriere plans
const foodimg = new Image();
let foodimage = ['banane.png', 'banane.png', 'banane.png'];
let randam = Math.floor(Math.random() * foodimg.length);
foodimg.src = foodimg[randam];
const planimg = new Image();
planimg.src = 'Background.png';
// initialiser la valeur de score et la valeur de food et l'entete de snak
let score = 0;
let food = {
  x: Math.floor(Math.random() * boxx * 58),
  y: Math.floor(Math.random() * boxy * 18),
};
let snak = [];
snak[0] = {
  x: boxx,
  y: boxy
}
snakx = snak[0].x;
snaky = snak[0].x;
// ajouter function main ;
function main() {
  ctx.drawImage(planimg, 0, 0);
  for (let i = 0; i < snak.length; i++) {
    ctx.fillStyle = 'rgb(' + Math.floor(255 - 15 * i) + ', ' +    /* randam couleur snak  boucle for */
      Math.floor(255 - 15 * 2 * i) + ', 0)';
    ctx.fillRect(snak[0].x, snak[0].y, boxx, boxy);
    ctx.strokeRect(snak[0].x, snak[0].y, boxx, boxy);
    if (snakx == food.x && snaky == food.y) {
      score++;
      food = {
        x: Math.floor(Math.random() * boxx * 58),
        y: Math.floor(Math.random() * boxy * 18),
      };
    }
    else {
      /* snak.pop() */
      console.log("suprimer la valeur de x")
    }
  }

}

let game = setInterval(main, 300);

//fonction choc
function choc(head, array) {
  for (let i = 0; i < array.length; i++) {
    if (head.x == array[i].x && head.y == array[i].y) {
      return true;
    }
  }
  return false;
}

//fonction game over
if (snakeX < boxx || snakeX > 58 * boxx || snakeY < boxy || snakeY > 18 * boxy || choc(newHead, snake)) {
  alert("game over")
  clearInterval(game);
}
