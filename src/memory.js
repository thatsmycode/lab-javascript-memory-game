class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed= 0;
   // this.shuffleCards();
  }

  shuffleCards() {
    // ... write your code here
    if (!this.cards){
      return undefined;
    }
    /*for (let i = 0; i < this.cards.length; i++){
      let randomCard = this.cards[Math.round(Math.random * this.cards.length)]
      let indexOfRandom = this.cards.indexOf(randomCard);
    
      //fiquem a lloc random el valor de randomCard
      this.cards[Math.round(Math.random * this.cards.length)] = randomCard;
      //eliminem d'on estava el valor de randomCard pk no estigui dos cops
      this.cards.slice(indexOfRandom,1)
    }*/
    let len = this.cards.length;
    while (len > 0)
    {
      len--;
      let temp = this.cards[len];
      let rdmInd = Math.floor(Math.random() * len);
      this.cards[len] = this.cards[rdmInd];//treiem una carta random i la fiquem al final (D'aquest loop)
      this.cards[rdmInd] = temp;//agafem la que estava al final i la fiquem al lloc on era la random
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
