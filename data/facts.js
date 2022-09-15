const funFacts = [
  "In 1974, the Connect 4 game is licensed by Milton Bradley (which was later bought by Hasbro).",
  "Connect Four has caused many families to be torn apart for an average of 15 minnutes on multiple occassions.",
  "The first player of Connect 4 can win every time.",
  "Connect 4 has roots in Tic-Tac-Toe.",
  "There are 4,531,985,219,092 possible positions on a traditional Connect 4 board.",
  "Legend says that Captain Cook was one of the first to play Connect 4.",
  "Milton Bradley trademarked the game in 1974.",
  "Connect 4 goes by many different names. Such as Captain's Mistress, Plot Four, Four in a Row, and Gravitrips",
  "The average Connect 4 game takes 1 to 10 minutes to play.",
  "Hasbro has produced Giant Connect 4.",
  "There are annual Connect 4 game tournaments held across the globe.",
  "Being color-blind can hinder your ability to play certain versions of Connect Four",
  "Great game to play with your mother on a snowy winter day",
  "Fathers can be impatient with the game of Connect Four and often times lack the willingness to lose to their kin"
]

function getRandomFact() {
  return funFacts[Math.floor(Math.random() * funFacts.length)]
}

export {
  getRandomFact,
  funFacts,
}