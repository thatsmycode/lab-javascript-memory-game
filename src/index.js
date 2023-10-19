const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
 
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });
  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', () => {
      // TODO: write some code here
      console.log(`Card clicked: ${card.getAttribute("data-card-name")}`);

      if (card.className ==="card"){
        card.className ="card turned";
        console.log("turned")
      }

      memoryGame.pickedCards.push(card);
      

      if (memoryGame.pickedCards.length === 2){
        console.log("picked cards: ",memoryGame.pickedCards);
        let card1 = memoryGame.pickedCards[0];
        let card2 = memoryGame.pickedCards[1];

        let card1Name = card1.getAttribute("data-card-name");
        let card2Name = card2.getAttribute("data-card-name");

        if (!memoryGame.checkIfPair(card1Name,card2Name)){
           
          
          console.log(`${card1Name} and ${card2Name} are not pairs`);
          setTimeout(()=>{
            card2.className = "card";
            card1.className = "card" ;
          },1000)

         
        }else{
          confetti();       
        }
        memoryGame.pickedCards=[];

        if (memoryGame.checkIfFinished()){
          const win = document.createElement("h1");
          win.innerText = "YOU WIN!";

          //a partir d'aqui no va
          const title = document.getElementById("gameTitle");
          title.appendChild(win);
          const body = document.getElementsByTagName("html");

          body.remove(html)
        } 
      }
});
  });
});
