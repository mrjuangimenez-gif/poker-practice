// Rangos predefinidos más avanzados (ejemplo para preflop desde BTN)
const ranges = {
  openRaise: ['AA','KK','QQ','JJ','TT','99','88','77','66','55','44','33','22','AKs','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s','AKo','AQo','AJo','ATo','KQs','KJs','KTs','QJs','QTs','JTs','T9s','98s','87s','76s','65s','54s'],
  fold: ['72o','83o','94o','T5o','J6o','Q7o','K8o','A9o'] // Manos muy débiles
};

// Evaluar decisión del jugador
function makeDecision(action) {
  let cards = document.getElementById('player-cards').textContent.replace(/\s/g, '');
  let feedback = '';

  // Lógica mejorada
  if (ranges.openRaise.includes(cards)) {
    feedback = (action === 'raise') 
      ? '✅ ¡Óptimo! Debes abrir raise con esta mano desde BTN.' 
      : '❌ Deberías hacer raise, no ' + action + '.';
  } else if (ranges.fold.includes(cards)) {
    feedback = (action === 'fold')
      ? '✅ Buen fold. Esta mano es muy débil para jugar.'
      : '❌ Esta mano es un fold claro. No deberías jugarla.';
  } else {
    feedback = (action === 'fold')
      ? '✅ Fold aceptable. Pero podrías considerar call/raise en algunos spots.'
      : '✅ Jugada estándar.';
  }

  document.getElementById('feedback-text').textContent = feedback;
}