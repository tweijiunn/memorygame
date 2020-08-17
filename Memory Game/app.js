document.addEventListener('DOMContentLoaded',()=>{

	//card options
	const cardArray=[
		{
			name:"captain",
			img: "images/captain.png"
		},
		{
			name:"captain",
			img: "images/captain.png"
		},
		{
			name:"angrybird",
			img:"images/angrybird.jpg"
		},
		{
			name:"angrybird",
			img:"images/angrybird.jpg"
		},
		{
			name:"creepyman",
			img:"images/creepyman.jpg"
		},
		{
			name:"creepyman",
			img:"images/creepyman.jpg"
		},
		{
			name:"mushroom",
			img:"images/mushroom.png"
		},
		{
			name:"mushroom",
			img:"images/mushroom.png"
		},
		{
			name:"people",
			img:"images/people.png"
		},
		{
			name:"people",
			img:"images/people.png"
		},
		{
			name:"smilingguy",
			img:"images/smilingguy.png"
		},
		{
			name:"smilingguy",
			img:"images/smilingguy.png"
		}
	]

	cardArray.sort(()=> 0.5-Math.random())
	//craeete your board
	const grid= document.querySelector('.grid')
	var cardChosen=[]
	var cardChosenID=[]
	var cardsWon=[]
	const resultDisplay=document.querySelector('#result')
	function createBoard(){
		for(let i=0; i<cardArray.length;i++){
			var card=document.createElement('img')
			card.setAttribute('src','images/white.png')
			card.setAttribute('data-id',i)
			card.addEventListener('click',flipCard)
			grid.appendChild(card)
		}
	}
	//check for matches
	function checkForMatch(){
		var cards=document.querySelectorAll('img');
		const optionOneID=cardChosenID[0]
		const optionTwoID=cardChosenID[1]
		if(cardChosen[0]===cardChosen[1]){
			alert("Matched!")
			cards[optionOneID].setAttribute('src','images/blank.png')
			cards[optionTwoID].setAttribute('src','images/blank.png')
			cardsWon.push(cardChosen)
		}
		else{
			cards[optionOneID].setAttribute('src','images/white.png')
			cards[optionTwoID].setAttribute('src','images/white.png')
			alert("Sorry, please try again!")
		}
		cardChosen= []
		cardChosenID=[]
		resultDisplay.textContent=cardsWon.length
		if(cardsWon.length===cardArray.length/2){
			resultDisplay.textContent="  Congratulation! You found them all!"
		}
	}

	//flip your card
	function flipCard(){
		var cardID= this.getAttribute('data-id')
		cardChosen.push(cardArray[cardID].name) 
		cardChosenID.push(cardID)
		this.setAttribute('src',cardArray[cardID].img)

		if(cardChosen.length===2){
			setTimeout(checkForMatch,1000)
		}
	}
	createBoard();
})

	

