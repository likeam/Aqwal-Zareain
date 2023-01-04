const aqwalEl = document.getElementById('aqwal');
const aqwalBtn = document.getElementById('aqwalBtn');

aqwalBtn.addEventListener('click', generateAqwal)

generateAqwal();

function generateAqwal(){

    const config ={
        headers: {
            'Accept': 'application/json'
        }
    }


    fetch('https://icanhazdadjoke.com', config)
    .then((res) => res.json())
    .then((data) => {
            aqwalEl.innerHTML =data.joke;
    })
}