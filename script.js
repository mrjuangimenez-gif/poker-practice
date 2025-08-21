// Rangos GTO simplificados para BTN open
const btnOpenRange = [
  'AA','KK','QQ','JJ','TT','99','88','77','66','55','44','33','22',
  'AKs','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
  'AKo','AQo','AJo','ATo','KQs','KJs','KTs','QJs','QTs','JTs','T9s','98s','87s','76s','65s','54s'
];

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
  
  // Resetear turn/river
  document.getElementById('turn').textContent = '?';
  document.getElementById('river').textContent = '?';
  
  document.getElementById('feedback-text').textContent = 'Elige una acción...';
}

function makeDecision(action) {
  const card1 = document.getElementById('card1').textContent;
  const card2 = document.getElementById('card2').textContent;
  const hand = card1 + card2;
  
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
  
  const randomCard = () => ranks[Math.floor(Math.random() * ranks.length)] + suits[Math.floor(Math.random() * suits.length)];
  
  return [randomCard(), randomCard()];
}

function generateRandomFlop() {
  const ranks = ['A','K','Q','J','T','9','8','7','6','5','4','3','2'];
  const suits = ['s','h','d','c'];
  
  const flop = [];
  for (let i = 0; i < 3; i++) {
    flop.push(ranks[Math.floor(Math.random() * ranks.length)] + suits[Math.floor(Math.random() * suits.length)]);
  }
  return flop;
}

// Inicializar
newHand();