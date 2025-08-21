// Rango predefinido simple para practicar
const bestHands = ['AA','KK','QQ','AKs','AQs'];

// Generar nueva mano aleatoria
function newHand() {
  const ranks = ['A','K','Q','J','T','9','8','7','6','5','4','3','2'];
  const suits = ['♠','♥','♦','♣'];

  // Generar dos cartas aleatorias
  let card1 = ranks[Math.floor(Math.random() * ranks.length)] + suits[Math.floor(Math.random() * suits.length)];
  let card2 = ranks[Math.floor(Math.random() * ranks.length)] + suits[Math.floor(Math.random() * suits.length)];
  document.getElementById('player-cards').textContent = card1 + ' ' + card2;

  // Generar flop
  let flop = [];
  for(let i=0; i<3; i++){
    let card = ranks[Math.floor(Math.random() * ranks.length)] + suits[Math.floor(Math.random() * suits.length)];
    flop.push(card);
  }
  document.getElementById('flop-cards').textContent = flop.join(' ');

  // Limpiar feedback
  document.getElementById('feedback-text').textContent = 'Elige una acción para recibir feedback';
}

// Evaluar decisión del jugador
function makeDecision(action){
  let cards = document.getElementById('player-cards').textContent.replace(/\s/g,'');
  
  let feedback = '';
  if(bestHands.includes(cards)){
    feedback = (action === 'raise') ? '¡Correcto! Buena subida.' : 'Podrías subir con esta mano.';
  } else {
    feedback = (action === 'fold') ? '¡Correcto! Buen fold.' : 'Esta mano es débil, tal vez fold sería mejor.';
  }

  document.getElementById('feedback-text').textContent = feedback;
}

// Inicializar mano al cargar la página
newHand();
