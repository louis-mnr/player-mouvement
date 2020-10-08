const player = document.getElementById('player');
const moveSize = 24;
var playerWalk = 0;

document.addEventListener('keydown', function(event) {
  if (event.code == 'ArrowUp') {
    playerWalk = playerWalk + 1;
    if (playerWalk%2 ===0) {
      player.style.backgroundImage = "url('img/bonhomme5.png')" ;
    }else{
      player.style.backgroundImage = "url('img/bonhomme6.png')" ;
    }
    player.style.top = (player.offsetTop - moveSize) + "px";
  } else if (event.code == 'ArrowRight') {
    playerWalk = playerWalk + 1;
    if (playerWalk%2 ===0) {
      player.style.backgroundImage = "url('img/bonhomme7.png')" ;
    }else{
      player.style.backgroundImage = "url('img/bonhomme8.png')" ;
    }
    player.style.left = (player.offsetLeft + moveSize) + "px";
  } else if (event.code == 'ArrowDown') {
    playerWalk = playerWalk + 1;
    if (playerWalk%2 ===0) {
      player.style.backgroundImage = "url('img/bonhomme1.png')" ;
    }else{
      player.style.backgroundImage = "url('img/bonhomme2.png')" ;
    };
    player.style.top = (player.offsetTop + moveSize) + "px";
  } else if (event.code == 'ArrowLeft') {
    playerWalk = playerWalk + 1;
    if (playerWalk%2 ===0) {
      player.style.backgroundImage = "url('img/bonhomme3.png')" ;
    }else{
      player.style.backgroundImage = "url('img/bonhomme4.png')" ;
    }
    player.style.left = (player.offsetLeft - moveSize) + "px";
  }
});
