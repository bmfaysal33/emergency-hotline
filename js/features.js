

// Love react Counting 


const reactNumber = document.getElementById('love-react');

const loveBtn = document.getElementsByClassName('love-react');

let count = 0;

for (const reactCount of loveBtn) {

    reactCount.addEventListener('click', function () {
        count++;
        reactNumber.innerText = count;

    });
}

// All cards info

const cards = [];

for (let i = 1; i <= 9; i++) {
    const title = document.getElementById(`title-card-${i}`).innerText;
    const num = document.getElementById(`num-card-${i}`).innerText;
    cards.push({ title, num });
}

// Calling alert with Number + card name or section title



const coinInput = document.getElementById('coins');
let coinNum = parseInt(coinInput.innerText);


// Calling alert ---- made it reusable


function cardCall(cardIndex) {
    coinNum -= 20;

    if (coinNum < 0) {
        alert('Insufficient coin, minimum 20 coins needed to proceed');
        return;
    }
    else {

        alert('Calling' + ' ' + cards[cardIndex].title + ' ' + cards[cardIndex].num);
        coinInput.innerText = parseInt(coinNum);

        const historyContainer = document.getElementById('history-card-container');
        const div = document.createElement('div');
        div.innerHTML = `<div
                  class="flex flex-row gap-2 justify-between items-center p-4 bg-[#edeaea] rounded-xl mt-4"
                >
                  <div class="w-9/12">
                    <h1 class="text-lg font-bold">${cards[cardIndex].title}</h1>
                    <p class="text-lg">${cards[cardIndex].num}</p>
                  </div>
                  <div class="w-1/4">
                    <h1> ${new Date().toLocaleTimeString()} </h1>
                  </div>
                </div>`;
        historyContainer.appendChild(div);
    }

}


// Card 1

// Calling alert 


document.getElementById('btn-card-1').addEventListener('click', function () {
    cardCall(0);
});


// Card 2 

// Calling alert

document.getElementById('btn-card-2').addEventListener('click', function () {
    cardCall(1);
});


// Card 3 

// Calling alert

document.getElementById('btn-card-3').addEventListener('click', function () {
    cardCall(2);
});




// Card 4 
// Calling alert

document.getElementById('btn-card-4').addEventListener('click', function () {
    cardCall(3);
});


// Card 5 
// Calling alert

document.getElementById('btn-card-5').addEventListener('click', function () {
    cardCall(4);
});


// Card 6 

// Calling alert

document.getElementById('btn-card-6').addEventListener('click', function () {
    cardCall(5);
});

// Card 7 

// Calling alert

document.getElementById('btn-card-7').addEventListener('click', function () {
    cardCall(6);
});


// Card 8 

// Calling alert

document.getElementById('btn-card-8').addEventListener('click', function () {
    cardCall(7);
});



// Card 9 

// Calling alert

document.getElementById('btn-card-9').addEventListener('click', function () {
    cardCall(8);
});


// History section ---- clear button

document.getElementById('btn-clear').addEventListener('click', function () {
    document.getElementById('history-card-container').innerHTML = '';
})


// All cards Copy alert 

// Copy alert 
let copyNum = 0;

for (let n = 1; n <= 9; n++) {
    document.getElementById(`btn-copy-${n}`).addEventListener('click', function () {
        const text = document.getElementById(`num-card-${n}`).innerText;
         
        // Copy text 
        navigator.clipboard.writeText(text);

        alert('Copied: ' + text)
        
        // copy counting 

        copyNum++;
        const showCopyNumber = document.getElementById('copy-number');
        showCopyNumber.innerText = copyNum;

    })
}




