
// Skriv en liknande js-fil som i föregående uppgift med vissa skillnader:
//             a. Använd denna URI för fetchen:
//             "https://deckofcardsapi.com/api/deck/new/draw/?count=1"
//             b. Kolla i dokumentationen för att se hur du ska plocka ut url:en till bilden på kortet
//             från data.
//             c. Använd createElement, setAttribute, innerHTML och appendChild
//             för att skapa ett image-element, sätta dess src-attribut, nollställa div-en och lägga till
//             image-elementet till den.
//             4. Lägg till en eventListener som lyssnar på knappen och kör ovanstående funktion vid
//             klick. 

const btnDrawCard = document.querySelector('#btnDrawCard');
const cardOutput = document.querySelector('#cardOutput');
const imageTarget = document.querySelector('#imageTarget');

let uri = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
// Lägg in i koden direkt?


const getCard = () =>
{
    fetch(uri,
    {
        method: 'GET', headers:
        {
            'Accept': 'application/json'
        }
    })
    .then(res => 
    {
        if(res.ok)
        {
            return res.json();
        }
        throw new Error('Failed to get names')
    })
    .then(data => 
    {
        console.log(data);                  //
        console.log(data.cards[0].value);   //
        console.log(data.cards[0].suit);    //
        console.log(data.cards[0].image);   //

        let cardValue = `Your card is the 
        ${data.cards[0].value} of 
        ${data.cards[0].suit}`;

        cardOutput.innerHTML = cardValue;

        if (document.getElementById('imgCard'))
        {
            document.getElementById('imgCard').remove();
        }
        let card = document.createElement('img');
        card.setAttribute('src', data.cards[0].image);
        card.setAttribute('id', 'imgCard');
        imageTarget.appendChild(card);

        console.log(card);
        console.log(imageTarget);
    })
    .catch(err => console.log('Error: ' + err))
}

btnDrawCard.addEventListener('click', getCard);