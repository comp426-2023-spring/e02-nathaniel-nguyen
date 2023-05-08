const availableShots = {
    rps: ['Rock', 'Paper', 'Scissors'],
    rpsls: ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']
  };
  
  function getOpponentShot(availableShots) {
    return availableShots[Math.floor(Math.random() * availableShots.length)];
  }
  
  function rps(shot) {
    const available = availableShots.rps;
    if (!shot) {
      return { player: available[0] };
      }
      
    if (!available.includes(shot)) {
      return {
        error: `${shot} is not a valid shot. Please choose one of: rock, paper, scissors.`
      };
    }
    const opponent = getOpponentShot(available);
    if (shot === opponent) {
      return { player: shot, opponent: opponent, result: 'Tie' };
    } else if ((shot === 'Rock' && opponent === 'Scissors') ||
      (shot === 'Paper' && opponent === 'Rock') ||
      (shot === 'Scissors' && opponent === 'Paper')) {
      return { player: shot, opponent: opponent, result: 'Win' };
    } else {
      return { player: shot, opponent: opponent, result: 'Lose' };
    }
  }
  
  function rpsls(shot) {
    const available = availableShots.rpsls;
    if (!shot) {
      return { player: available[0] };
    }

    if (!available.includes(shot)) {
      return {
        error: `${shot} is not a valid shot. Please choose one of: rock, paper, scissors, lizard, spock.`
      };
    }
    const opponent = getOpponentShot(available);
    if (shot === opponent) {
      return { player: shot, opponent: opponent, result: 'Tie' };
    } else if ((shot === 'Rock' && (opponent === 'Scissors' || opponent === 'Lizard')) ||
      (shot === 'Paper' && (opponent === 'Rock' || opponent === 'Spock')) ||
      (shot === 'Scissors' && (opponent === 'Paper' || opponent === 'Lizard')) ||
      (shot === 'Lizard' && (opponent === 'Paper' || opponent === 'Spock')) ||
      (shot === 'Spock' && (opponent === 'Rock' || opponent === 'Scissors'))) {
      return { player: shot, opponent: opponent, result: 'Win' };
    } else {
      return { player: shot, opponent: opponent, result: 'Lose' };
    }
  }
  
  export { rps, rpsls };