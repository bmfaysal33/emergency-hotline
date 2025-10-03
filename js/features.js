

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


