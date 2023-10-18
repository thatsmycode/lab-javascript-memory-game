class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed= 0,
    this.shuffleCards();
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards){
      return undefined;
    }
    for (let i = 0; i < this.cards.length; i++){
      let randomCard = this.cards[Math.round(Math.random * this.cards.length)]
      let indexOfRandom = this.cards.indexOf(randomCard);
    
      //fiquem a lloc random el valor de randomCard
      this.cards[Math.round(Math.random * this.cards.length)] = randomCard;
      //eliminem d'on estava el valor de randomCard pk no estigui dos cops
      this.cards.slice(indexOfRandom,1)
    }
    return this.cards;
  }

  checkIfPair(card1, card2) {
    // ... write your code here
    console.log("checkifpairllamado");
    this.pairsClicked += 1;
    if (card1=== card2){
      this.pairsGuessed +=1;
      return true;
    }else {
      return false;
    }
  }

  checkIfFinished() {
    // ... write your code here
    if (this.pairsGuessed === this.cards.length / 2){
      return true;
    }else{ 
      return false;
    }
  }
}
