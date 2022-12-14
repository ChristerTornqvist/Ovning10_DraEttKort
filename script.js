const btnDrawCard = document.querySelector('#btnDrawCard');
const imageTarget = document.querySelector('#imageTarget');

const getCard = () =>
{
    fetch('https://deckofcardsapi.com/api/deck/new/draw/?count=1',
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
        if (document.getElementById('imgCard'))
        {
            document.getElementById('imgCard').remove();
        }
        let card = document.createElement('img');
        card.setAttribute('src', data.cards[0].image);
        card.setAttribute('id', 'imgCard');
        imageTarget.appendChild(card);
    })
    .catch(err => console.log('Error: ' + err))
}

btnDrawCard.addEventListener('click', getCard);