let over = 0;
let agree = 0;

document.addEventListener('DOMContentLoaded', () => {

    const offerModal = document.createElement("div");
    offerModal.classList.add("fixed", "top-0", "right-0", "left-0", "bottom-0", "bg-black", "bg-opacity-50", "flex", "items-center", "justify-center", "z-10");
    offerModal.innerHTML = `
        <div class="flex flex-col justify-center items-center bg-black border border-purple-500 rounded-xl p-4 w-[500px]">
            <div class="flex flex-row justify-evenly">
                <img class="card-image" src="img/Cards/CR7.gif" alt="CR7">
                <p class="text-white mt-5">You've received an exclusive offer to claim limited edition 
                    CR7 cards! Do you want to add them to your collection or refuse the 
                    offer? The choice is yours! (NOTE: do not change card if you accept that offer!!)
                </p>
            </div>
            <div class="flex flex-row gap-4">
                <button class="bg-blue-600 text-white p-2 rounded-lg" id="accept">Accept</button>
                <button class="bg-red-600 text-white p-2 rounded-lg" id="refuse">Refuse</button>
            </div>
        </div>
    `;

    document.body.appendChild(offerModal);

    document.getElementById("accept").addEventListener("click", () => {
        offerModal.remove();
        const stCardImage = document.querySelector('[data-card="ST"] img');
        if (stCardImage) {
            stCardImage.src = "img/Cards/CR7.gif";
        }
    });
    document.getElementById("refuse").addEventListener("click", () => {
        offerModal.remove();
    });
});

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
                <div class="flex flex-row cursor-pointer mb-4 justify-between align-middle items-start" data-player="${player.name}" data-position="${player.position}" data-card="${card}">
                    <div class="flex items-center space-x-4" onclick="viewPlayerDetails('${player.name}')">
                        <div class="flex flex-row gap-3">
                            <img src="${player.img}" alt="${player.name}" class="w-12 h-12 rounded-full">
                            <p class="text-sm text-gray-300">${player.position}</p>
                        </div>
                        <div class="text-white">
                            <p class="font-bold text-lg">${player.name}</p>
                            <p class="text-sm text-gray-300">Rating: ${player.rating}</p>
                        </div>
                    </div>
                    <p class="text-sm text-white pl-4 pr-4 pt-1 pb-1 justify-end rounded-lg bg-green-500 items-center text-center" >add</p>
                </div>
                <button class="text-red-600 bg-white hover:bg-red-600 hover:text-white pl-2 pr-2 pt-1 pb-1 text-center rounded-lg mb-12" onclick="removePlayer('${player.name}')">Remove</button>
                <button class="text-blue-600 bg-white hover:bg-blue-600 hover:text-white pl-2 pr-2 pt-1 pb-1 text-center rounded-lg mb-12" onclick="viewPlayerDetails('${player.name}')">View Details</button>
            `;
        });
        
        playersList.innerHTML = playersHTML;
        document.getElementById('player-modal').classList.remove('hidden');
    }
    
    function removePlayer(playerName) {
        const playerToRemove = playersData.find(player => player.name === playerName);
        if (playerToRemove) {
            const index = playersData.indexOf(playerToRemove);
            if (index > -1) {
                playersData.splice(index, 1);
            }
        }
        showPlayerModal(selectedCard.dataset.card);
    }
    

    function viewPlayerDetails(playerName) {
        const player = playersData.find(player => player.name === playerName);
        if (player) {
            const playerDetailsModal = document.getElementById('player-details-modal');
            const playerDetails = document.getElementById('player-details');
    
            // Show the modal by removing the 'hidden' class
            playerDetailsModal.classList.remove('hidden');
    
            // Inject player data into modal content
            playerDetails.innerHTML = `
                <h2 class="text-2xl text-white font-bold mt-2 mb-2">${player.name}</h2>
                <div class="flex flex-row gap-4 justify-evenly align-middle items-center mb-2">
                    <div class="">
                        <img src="img/Cards/SHOW.gif" alt="Basic Image" class="w-28 card-image">
                        <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                    </div>
                    <div>
                        <p class="text-sm text-white">Position: ${player.position}</p>
                        <p class="text-sm text-white">Rating: ${player.rating}</p>
                        <p class="text-sm text-white">Pace: ${player.pace}</p>
                        <p class="text-sm text-white">Shot: ${player.shot}</p>
                        <p class="text-sm text-white">Pass: ${player.pass}</p>
                        <p class="text-sm text-white">Defense: ${player.defense}</p>
                        <p class="text-sm text-white">Dribble: ${player.dribble}</p>
                        <p class="text-sm text-white">Physical: ${player.physical}</p>
                    </div>
                </div>
            `;
    
        }
    }
    
    function closeModal() {
        document.getElementById('player-details-modal').classList.add('hidden');
    }
    
    document.getElementById('closeModalBtn').addEventListener('click', closeModal);


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
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white text-[14px] -mt-[86px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white text-[10px] -mt-[70px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
            removePlayer(player.name);
            over+=player.rating/10;
            overAllRating();
        } else if (selectedCard.dataset.card === 'ST') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white text-[14px] -mt-[86px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white text-[10px] -mt-[70px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
            removePlayer(player.name);
            over+=player.rating/10;
            overAllRating();
        } else if (selectedCard.dataset.card === 'CM1') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white text-[14px] -mt-[86px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white text-[10px] -mt-[70px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
            removePlayer(player.name);
            over+=player.rating/10;
            overAllRating();
        } else if (selectedCard.dataset.card === 'CM2') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white text-[14px] -mt-[86px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white text-[10px] -mt-[70px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
            removePlayer(player.name);
            over+=player.rating/10;
            overAllRating();
        } else if (selectedCard.dataset.card === 'CM3') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white text-[14px] -mt-[86px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white text-[10px] -mt-[70px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
            removePlayer(player.name);
            over+=player.rating/10;
            overAllRating();
        } else if (selectedCard.dataset.card === 'CB1') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white text-[14px] -mt-[86px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white text-[10px] -mt-[70px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
            removePlayer(player.name);
            over+=player.rating/10;
            overAllRating();
        } else if (selectedCard.dataset.card === 'CB2') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white text-[14px] -mt-[86px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white text-[10px] -mt-[70px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
            removePlayer(player.name);
            over+=player.rating/10;
            overAllRating();
        } else if (selectedCard.dataset.card === 'RW') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white text-[14px] -mt-[86px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white text-[10px] -mt-[70px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
            removePlayer(player.name);
            over+=player.rating/10;
            overAllRating();
        } else if (selectedCard.dataset.card === 'LW') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white -mt-[86px] text-[14px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white -mt-[70px] text-[10px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
            removePlayer(player.name);
            over+=player.rating/10;
            overAllRating();
        } else if (selectedCard.dataset.card === 'LB') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white text-[14px] -mt-[86px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white text-[10px] -mt-[70px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
            removePlayer(player.name);
            over+=player.rating/10;
            overAllRating();
        } else if (selectedCard.dataset.card === 'RB') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                <p class="absolute text-white text-[14px] -mt-[86px] ml-[26px]" class="player-rating">${player.rating}</p>
                <p class="absolute text-white text-[10px] -mt-[70px] ml-[26px] z-20 player-position">${player.position}</p>
            `;
            removePlayer(player.name);
            over+=player.rating/10;
            overAllRating();
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


//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

function overAllRating() {
    if (over <= 40) {
        document.getElementById("playerOver").innerHTML = `
        <p class="text-7xl text-red-400">${over}</p>
        <p>over</p>
    `;
    }else if (over > 40 && over < 80){
        document.getElementById("playerOver").innerHTML = `
        <p class="text-7xl text-yellow-400">${over}</p>
        <p>over</p>
    `;
    }else if (over >= 80){
        document.getElementById("playerOver").innerHTML = `
        <p class="text-7xl text-green-400">${over}</p>
        <p>over</p>
    `;
    }
}