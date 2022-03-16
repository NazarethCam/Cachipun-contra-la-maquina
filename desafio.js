function play() {
  let playCount = parseInt(prompt("¿Cuántas veces quieres jugar? "));

  for (let i = 0; i < playCount; i++) {
    let person = prompt("Elije la jugada: Piedra, Papel, Tijera").toLowerCase();
    let computer = Math.floor(Math.random() * 3);

    let pc = "";
    switch (computer) {
      case 0:
        pc = "piedra";
        break;
      case 1:
        pc = "papel";
        break;
      case 2:
        pc = "tijera";
        break;
    }

    winner(person, pc);
  }
}

function winner(person, pc) {
  if (person == pc) {
    alert(`Tu elegiste ${person} y pc eligió ${pc} Empataste!`);
  } else if (
    (person == "piedra" && pc == "tijera") ||
    (person == "tijera" && pc == "papel") ||
    (person == "papel" && pc == "piedra")
  ) {
    alert(`Tu elegiste ${person} y pc eligió ${pc} Felicidades Ganaste!`);
  } else {
    alert(`Tu elegiste ${person} y pc eligió ${pc} Perdiste!`);
  }
}

play();
