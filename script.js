// Rangos GTO simplificados para BTN open
const btnOpenRange = [
  'AA','KK','QQ','JJ','TT','99','88','77','66','55','44','33','22',
  'AKs','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
  'AKo','AQo','AJo','ATo','KQs','KJs','KTs','QJs','QTs','JTs','T9s','98s','87s','76s','65s','54s'
];

// Generar nueva mano aleatoria
function newHand() {
  // Generar mano aleatoria
  const hand = generateRandomHand();
  document.getElementById('card1').textContent = hand[0];
  document.getElementById('card2').textContent = hand[1];
  
  // Generar flop aleatorio
  const flop = generateRandomFlop();
  document.getElementById('flop1').textContent = flop[0];
  document.getElementById('flop2').textContent = flop[1];
  document.getElementById('flop3').textContent = flop[2];
  
  // Resetear feedback
  document.getElementById('feedback-text').textContent = 'Elige una acción...';
}

// Evaluar decisión del jugador
function makeDecision(action) {
  const card1 = document.getElementById('card1').textContent;
  const card2 = document.getElementById('card2').textContent;
  
  // Crear notación de mano (ej: "AKs")
  const hand = card1[0] + card2[0] + (card1[1] === card2[1] ? 's' : 'o');
  
  let feedback = '';
  
  if (btnOpenRange.includes(hand)) {
    if (action === 'raise') {
      feedback = '✅ Correcto! Esta mano está en el rango de open raise desde BTN.';
    } else {
      feedback = '❌ Error! Deberías hacer raise con esta mano desde BTN.';
    }
  } else {
    if (action === 'fold') {
      feedback = '✅ Correcto! Fold está bien con esta mano marginal.';
    } else {
      feedback = '❌ Peligro! Esta mano no es lo suficientemente fuerte para jugar desde BTN.';
    }
  }
  
  document.getElementById('feedback-text').textContent = feedback;
}

// Funciones auxiliares
function generateRandomHand() {
  const ranks = ['A','K','Q','J','T','9','8','7','6','5','4','3','2'];
  const suits = ['s','h','d','c'];
  
  const randomCard = () => {
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    const suit = suits[Math.floor(Math.random() * suits.length)];
    return rank + suit;
  };
  
  return [randomCard(), randomCard()];
}

function generateRandomFlop() {
  const ranks = ['A','K','Q','J','T','9','8','7','6','5','4','3','2'];
  const suits = ['s','h','d','c'];
  
  const flop = [];
  for (let i = 0; i < 3; i++) {
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    const suit = suits[Math.floor(Math.random() * suits.length)];
    flop.push(rank + suit);
  }
  return flop;
}

// Ejecutar al cargar la página
window.onload = function() {
  newHand();
};