document.getElementById("strategy").addEventListener("change", function(event) {
    const formation = event.target.value;
    updateFormation(formation);
});

function updateFormation(formation) {
    const pitch = document.getElementById("pitch");
    
    const players = pitch.querySelectorAll(".card-image");
    players.forEach(player => {
        for (let i = 1; i <= 12; i++) {
            player.classList.remove(`col-start-${i}`, `row-start-${i}`);
        }
        player.classList.add("transition", "duration-300", "ease-in-out", "hover:scale-105");
    });

    switch (formation) {
        case "4-3-3":
            // 4-3-3 Formation
            setPositions({
                "GK": { col: 6, row: 10 },
                "CB1": { col: 5, row: 8 },
                "CB2": { col: 7, row: 8 },
                "RB": { col: 9, row: 9 },
                "LB": { col: 3, row: 9 },
                "CM1": { col: 4, row: 5 },
                "CM2": { col: 6, row: 5 },
                "CM3": { col: 8, row: 5 },
                "RW": { col: 4, row: 3 },
                "ST": { col: 6, row: 2 },
                "LW": { col: 8, row: 3 }
            });
            break;
        case "4-4-2":
            // 4-4-2 Formation
            setPositions({
                "GK": { col: 6, row: 10 },
                "CB1": { col: 5, row: 8 },
                "CB2": { col: 7, row: 8 },
                "RB": { col: 9, row: 9 },
                "LB": { col: 3, row: 9 },
                "CM1": { col: 5, row: 5 },
                "CM2": { col: 7, row: 5 },
                "CM3": { col: 3, row: 6 },
                "RW": { col: 9, row: 6 },
                "ST": { col: 5, row: 2 },
                "LW": { col: 7, row: 2 }
            });
            break;
        case "3-5-2":
            // 3-5-2 Formation
            setPositions({
                "GK": { col: 6, row: 10 },
                "CB1": { col: 4, row: 9 },
                "CB2": { col: 6, row: 8 },
                "RB": { col: 8, row: 9 },
                "LB": { col: 6, row: 6 },
                "CM1": { col: 5, row: 5 },
                "CM2": { col: 7, row: 5 },
                "CM3": { col: 4, row: 4 },
                "RW": { col: 8, row: 4 },
                "ST": { col: 5, row: 2 },
                "LW": { col: 7, row: 2 }
            });
            break;
        case "4-2-3-1":
            // 4-2-3-1 Formation
            setPositions({
                "GK": { col: 6, row: 10 },
                "CB1": { col: 5, row: 8 },
                "CB2": { col: 7, row: 8 },
                "RB": { col: 9, row: 9 },
                "LB": { col: 3, row: 9 },
                "CM1": { col: 5, row: 6 },
                "CM2": { col: 6, row: 4 },
                "CM3": { col: 7, row: 6 },
                "RW": { col: 4, row: 4 },
                "ST": { col: 6, row: 2 },
                "LW": { col: 8, row: 4 }
            });
            break;
        case "5-3-2":
            // 5-3-2 Formation
            setPositions({
                "GK": { col: 6, row: 10 },
                "CB1": { col: 5, row: 8 },
                "CB2": { col: 7, row: 8 },
                "RB": { col: 9, row: 9 },
                "LB": { col: 3, row: 9 },
                "CM1": { col: 6, row: 4 },
                "CM2": { col: 6, row: 7 },
                "CM3": { col: 4, row: 5 },
                "RW": { col: 8, row: 5 },
                "ST": { col: 5, row: 2 },
                "LW": { col: 7, row: 2 }
            });
            break;
        case "3-4-3":
            // 3-4-3 Formation
            setPositions({
                "GK": { col: 6, row: 10 },
                "CB1": { col: 4, row: 7 },
                "CB2": { col: 6, row: 8 },
                "RB": { col: 8, row: 7 },
                "LB": { col: 6, row: 3 },
                "CM1": { col: 5, row: 5 },
                "CM2": { col: 7, row: 5 },
                "CM3": { col: 4, row: 4 },
                "RW": { col: 8, row: 4 },
                "ST": { col: 5, row: 2 },
                "LW": { col: 7, row: 2 }
            });
            break;
        case "4-1-4-1":
            // 4-1-4-1 Formation
            setPositions({
                "GK": { col: 6, row: 10 },
                "CB1": { col: 5, row: 8 },
                "CB2": { col: 7, row: 8 },
                "RB": { col: 9, row: 9 },
                "LB": { col: 3, row: 9 },
                "CM1": { col: 5, row: 4 },
                "CM2": { col: 7, row: 4 },
                "CM3": { col: 3, row: 5 },
                "RW": { col: 9, row: 5 },
                "ST": { col: 6, row: 2 },
                "LW": { col: 6, row: 6 }
            });
            break;

    }
}

function setPositions(positions) {
    for (let playerId in positions) {
        const player = document.querySelector(`[data-card="${playerId}"]`);
        if (player) {
            player.classList.add(`col-start-${positions[playerId].col}`);
            player.classList.add(`row-start-${positions[playerId].row}`);
        }
    }
}

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------

let playersData = [];

fetch('playersData.json')
    .then(response => response.json())
    .then(data => {
        playersData = data;
    })
    .catch(error => {
        console.error('Error loading player data:', error);
    });


    function showPlayerModal(card) {
        const playersList = document.getElementById('players-list');
        let playersHTML = '';
    
        playersData.forEach(player => {
            playersHTML += `
                <div class="flex flex-row cursor-pointer mb-4 justify-between align-middle" data-player="${player.name}" data-position="${player.position}" data-card="${card}">
                    <div class="flex items-center space-x-4" onclick="viewPlayerDetails('${player.name}')">
                        <img src="${player.img}" alt="${player.name}" class="w-12 h-12 rounded-full">
                        <div class="text-white">
                            <p class="font-bold text-lg">${player.name}</p>
                            <p class="text-sm text-gray-300">Rating: ${player.rating}</p>
                        </div>
                    </div>
                    <p class="text-base text-gray-300 mr-5">${player.position}</p>
                </div>
            `;
        });
        
        playersList.innerHTML = playersHTML;
        document.getElementById('player-modal').classList.remove('hidden');
    }
    


const pitchImages = document.querySelectorAll('.card-image');
let selectedCard = null;

pitchImages.forEach(img => {
    img.addEventListener('click', () => {
        selectedCard = img.closest('.card-image');
        showPlayerModal(selectedCard.dataset.card);
    });
});

document.getElementById('players-list').addEventListener('click', (e) => {
    const playerData = e.target.closest('.flex').dataset;

    if (selectedCard && playerData.card === selectedCard.dataset.card) {
        const player = playersData.find(p => p.name === playerData.player);

        if (selectedCard.dataset.card === 'GK') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="absolute top-0 -left-0 mt-2 ml-3 w-20 z-10"> <!-- player image -->
                <p class="absolute text-white -mt-[104px] ml-[26px]" class="player-rating">${player.rating}</p> <!-- rating -->
                <p class="absolute text-white -mt-[90px] ml-[26px] z-20 player-position">${player.position}</p> <!-- position -->
            `;
        } else if (selectedCard.dataset.card === 'ST') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white -mt-[86px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white -mt-[70px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
        } else if (selectedCard.dataset.card === 'CM1') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white -mt-[86px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white -mt-[70px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
        } else if (selectedCard.dataset.card === 'CM2') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white -mt-[86px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white -mt-[70px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
        } else if (selectedCard.dataset.card === 'CM3') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white -mt-[86px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white -mt-[70px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
        } else if (selectedCard.dataset.card === 'CB1') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white -mt-[86px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white -mt-[70px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
        } else if (selectedCard.dataset.card === 'CB2') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white -mt-[86px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white -mt-[70px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
        } else if (selectedCard.dataset.card === 'RW') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white -mt-[86px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white -mt-[70px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
        } else if (selectedCard.dataset.card === 'LW') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white -mt-[86px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white -mt-[70px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
        } else if (selectedCard.dataset.card === 'LB') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white -mt-[86px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white -mt-[70px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
        } else if (selectedCard.dataset.card === 'RB') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white -mt-[86px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white -mt-[70px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
        }

        document.getElementById('player-modal').classList.add('hidden');
    }
});

// Close modal
document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('player-modal').classList.add('hidden');
});


//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------

const modal = document.getElementById("playerModal");
const addPlayerBtn = document.getElementById("addPlayerBtn");
const closeModalBtn = document.getElementById("closeModalBtn");
const playerForm = document.getElementById("playerForm");

addPlayerBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
});

closeModalBtn.addEventListener("click", () => {
    modal.classList.add("hidden");
});

playerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const physique = document.getElementById("physique").value;
    const rating = document.getElementById("rating").value;
    const pace = document.getElementById("pace").value;
    const shot = document.getElementById("shot").value;
    const pass = document.getElementById("pass").value;
    const dribble = document.getElementById("dribble").value;
    const physical = document.getElementById("physical").value;
    const position = document.getElementById("position").value;
    const playerImage = document.getElementById("playerImage").files[0];

    const newPlayer = {
        name: name,
        physique: physique,
        rating: rating,
        pace: pace,
        shot: shot,
        pass: pass,
        dribble: dribble,
        physical: physical,
        position: position,
        img: playerImage ? URL.createObjectURL(playerImage) : "img/inco.avif",
    };

    playersData.push(newPlayer);

    console.log("New Player Added:", newPlayer);

    localStorage.setItem("playersData", JSON.stringify(playersData));

    modal.classList.add("hidden");
    playerForm.reset();
});