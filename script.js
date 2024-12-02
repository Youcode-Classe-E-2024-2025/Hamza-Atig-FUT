let over = 0;
let agree = 0;
let goalKeeperRating = 0;
let stRating = 0;
let CM1Rating = 0;
let CM2Rating = 0;
let CM3Rating = 0;
let LWRating = 0;
let RWRating = 0;
let LBRating = 0;
let RBRating = 0;
let CB1Rating = 0;
let CB2Rating = 0;

let check = 0;
let check1 = 0;

let agreegk = 0;
let agreest = 0;
let agreecm1 = 0;
let agreecm2 = 0;
let agreecm3 = 0;
let agreelw = 0;
let agreerw = 0;
let agreelb = 0;
let agreerb = 0;
let agreecb1 = 0;
let agreecb2 = 0;
let cardagree = 0;


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
            check=1;
            overAllRating();
            agreement();
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
        
            playerDetailsModal.classList.remove('hidden');
        
            playerDetails.innerHTML = `
                <h2 class="text-2xl text-white font-bold mt-2 mb-2">${player.name}</h2>
                <div class="flex flex-row gap-4 justify-evenly align-middle items-center mb-2">
                    <div class="">
                        <img src="img/Cards/SHOW.gif" alt="Basic Image" class="w-28 card-image">
                        <img src="${player.img}" alt="Top Image" class="top-0 -left-0 -mt-24 ml-3 w-20 z-10">
                    </div>
                    <div>
                        <p class="text-sm text-white">Position: <span id="position">${player.position}</span></p>
                        <p class="text-sm text-white">Rating: <span id="rating">${player.rating}</span></p>
                        <p class="text-sm text-white">Pace: <span id="pace">${player.pace}</span></p>
                        <p class="text-sm text-white">Shot: <span id="shot">${player.shot}</span></p>
                        <p class="text-sm text-white">Pass: <span id="pass">${player.pass}</span></p>
                        <p class="text-sm text-white">Defense: <span id="defense">${player.defense}</span></p>
                        <p class="text-sm text-white">Dribble: <span id="dribble">${player.dribble}</span></p>
                        <p class="text-sm text-white">Physical: <span id="physical">${player.physical}</span></p>
                        <button id="editButton" class="text-sm text-blue-500">Edit</button>
                    </div>
                </div>
            `;
    
            const editButton = document.getElementById('editButton');
            editButton.addEventListener('click', function() {
                // edit player details
                const positionSelect = document.getElementById('position');
                const editPositionSelect = document.createElement('select');
                editPositionSelect.id = 'editPosition';
                editPositionSelect.classList.add('px-4', 'py-2', 'rounded-lg', 'text-gray-800', 'border', 'border-gray-300', 'focus:outline-none', 'focus:ring-2', 'focus:ring-blue-500');
                ['GK', 'RB', 'LB', 'CB', 'CM', 'LW', 'RW', 'ST'].forEach(position => {
                    const option = document.createElement('option');
                    option.value = position;
                    option.textContent = position;
                    if (position === player.position) {
                        option.selected = true;
                    }
                    editPositionSelect.appendChild(option);
                });
                positionSelect.parentNode.replaceChild(editPositionSelect, positionSelect);
                document.getElementById('rating').innerHTML = `<input type="number" id="editRating" value="${player.rating}" class="px-4 py-2 rounded-lg text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">`;
                document.getElementById('pace').innerHTML = `<input type="number" id="editPace" value="${player.pace}" class="px-4 py-2 rounded-lg text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">`;
                document.getElementById('shot').innerHTML = `<input type="number" id="editShot" value="${player.shot}" class="px-4 py-2 rounded-lg text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">`;
                document.getElementById('pass').innerHTML = `<input type="number" id="editPass" value="${player.pass}" class="px-4 py-2 rounded-lg text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">`;
                document.getElementById('defense').innerHTML = `<input type="number" id="editDefense" value="${player.defense}" class="px-4 py-2 rounded-lg text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">`;
                document.getElementById('dribble').innerHTML = `<input type="number" id="editDribble" value="${player.dribble}" class="px-4 py-2 rounded-lg text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">`;
                document.getElementById('physical').innerHTML = `<input type="number" id="editPhysical" value="${player.physical}" class="px-4 py-2 rounded-lg text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">`;

                // save button
                editButton.innerHTML = 'Save';
                editButton.classList.remove('text-blue-500');
                editButton.classList.add('text-green-500');
    
                // Change button action to save
                editButton.removeEventListener('click', arguments.callee); // Remove the original edit action
                editButton.addEventListener('click', function() {
                    // Save the edited values
                    const updatedPlayer = {
                        ...player,
                        position: document.getElementById('editPosition').value,
                        rating: document.getElementById('editRating').value,
                        pace: document.getElementById('editPace').value,
                        shot: document.getElementById('editShot').value,
                        pass: document.getElementById('editPass').value,
                        defense: document.getElementById('editDefense').value,
                        dribble: document.getElementById('editDribble').value,
                        physical: document.getElementById('editPhysical').value
                    };
    
                    // Update the localStorage (or your data source)
                    localStorage.setItem('player_' + player.name, JSON.stringify(updatedPlayer));
    
                    // Update playersData to reflect the changes
                    playersData = playersData.map(p => p.name === player.name ? updatedPlayer : p);
    
                    // Close the modal
                    playerDetailsModal.classList.add('hidden');

                    viewPlayerDetails(player.name);
                });
            });
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
                <img src="${player.img}" alt="Top Image" class=" absolute top-0 left-0">
                <p class="absolute top-1 left-6 text-white text-[14px] max-xl:text-[11px] max-xl:left-4 max-md:text-[7px] max-md:left-3" class="player-rating">${player.rating}</p>
                <p class="absolute top-6 left-6 text-white text-[10px] max-xl:text-[7px] max-xl:left-4 max-xl:top-4 max-md:text-[4px] max-md:left-3 max-md:top-3 z-20 player-position">${player.position}</p>
            `;
            if (player.position === 'GK') {
                agreegk=player.rating/11;
            }else{
                agreegk=-player.rating/18;
            }
            removePlayer(player.name);
            goalKeeperRating = player.rating;
            overAllRating();
            agreement();
        } else if (selectedCard.dataset.card === 'ST') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class=" absolute top-0 left-0">
                <p class="absolute top-1 left-6 text-white text-[14px] max-xl:text-[11px] max-xl:left-4 max-md:text-[7px] max-md:left-3" class="player-rating">${player.rating}</p>
                <p class="absolute top-6 left-6 text-white text-[10px] max-xl:text-[7px] max-xl:left-4 max-xl:top-4 max-md:text-[4px] max-md:left-3 max-md:top-3 z-20 player-position">${player.position}</p>
            `;
            if (player.position === 'ST') {
                agreest=player.rating/11;
            }else{
                agreest=-player.rating/18;
            }
            removePlayer(player.name);
            over = 0;
            stRating = player.rating;
            overAllRating();
            agreement();
        } else if (selectedCard.dataset.card === 'CM1') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class=" absolute top-0 left-0">
                <p class="absolute top-1 left-6 text-white text-[14px] max-xl:text-[11px] max-xl:left-4 max-md:text-[7px] max-md:left-3" class="player-rating">${player.rating}</p>
                <p class="absolute top-6 left-6 text-white text-[10px] max-xl:text-[7px] max-xl:left-4 max-xl:top-4 max-md:text-[4px] max-md:left-3 max-md:top-3 z-20 player-position">${player.position}</p>
            `;
            if (player.position === 'CM') {
                agreecm1=player.rating/11;
            }else{
                agreecm1=-player.rating/18;
            }
            removePlayer(player.name);
            CM1Rating = player.rating;
            overAllRating();
            agreement();
        } else if (selectedCard.dataset.card === 'CM2') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class=" absolute top-0 left-0">
                <p class="absolute top-1 left-6 text-white text-[14px] max-xl:text-[11px] max-xl:left-4 max-md:text-[7px] max-md:left-3" class="player-rating">${player.rating}</p>
                <p class="absolute top-6 left-6 text-white text-[10px] max-xl:text-[7px] max-xl:left-4 max-xl:top-4 max-md:text-[4px] max-md:left-3 max-md:top-3 z-20 player-position">${player.position}</p>
            `;
            if (player.position === 'CM') {
                agreecm2=player.rating/11;
            }else{
                agreecm2=-player.rating/18;
            }
            removePlayer(player.name);
            CM2Rating = player.rating;
            overAllRating();
            agreement();
        } else if (selectedCard.dataset.card === 'CM3') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class=" absolute top-0 left-0">
                <p class="absolute top-1 left-6 text-white text-[14px] max-xl:text-[11px] max-xl:left-4 max-md:text-[7px] max-md:left-3" class="player-rating">${player.rating}</p>
                <p class="absolute top-6 left-6 text-white text-[10px] max-xl:text-[7px] max-xl:left-4 max-xl:top-4 max-md:text-[4px] max-md:left-3 max-md:top-3 z-20 player-position">${player.position}</p>
            `;
            if (player.position === 'CM') {
                agreecm3=player.rating/11;
            }else{
                agreecm3=-player.rating/18;
            }
            removePlayer(player.name);
            CM3Rating = player.rating;
            overAllRating();
            agreement();
        } else if (selectedCard.dataset.card === 'CB1') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class=" absolute top-0 left-0">
                <p class="absolute top-1 left-6 text-white text-[14px] max-xl:text-[11px] max-xl:left-4 max-md:text-[7px] max-md:left-3" class="player-rating">${player.rating}</p>
                <p class="absolute top-6 left-6 text-white text-[10px] max-xl:text-[7px] max-xl:left-4 max-xl:top-4 max-md:text-[4px] max-md:left-3 max-md:top-3 z-20 player-position">${player.position}</p>
            `;
            if (player.position === 'CB') {
                agreecb1=player.rating/11;
            }else{
                agreecb1=-player.rating/18;
            }
            removePlayer(player.name);
            CB1Rating = player.rating;
            overAllRating();
            agreement();
        } else if (selectedCard.dataset.card === 'CB2') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class=" absolute top-0 left-0">
                <p class="absolute top-1 left-6 text-white text-[14px] max-xl:text-[11px] max-xl:left-4 max-md:text-[7px] max-md:left-3" class="player-rating">${player.rating}</p>
                <p class="absolute top-6 left-6 text-white text-[10px] max-xl:text-[7px] max-xl:left-4 max-xl:top-4 max-md:text-[4px] max-md:left-3 max-md:top-3 z-20 player-position">${player.position}</p>
            `;
            if (player.position === 'CB') {
                agreecb2=player.rating/11;
            }else{
                agreecb2=-player.rating/18;
            }
            removePlayer(player.name);
            CB2Rating = player.rating;
            overAllRating();
            agreement();
        } else if (selectedCard.dataset.card === 'RW') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class=" absolute top-0 left-0">
                <p class="absolute top-1 left-6 text-white text-[14px] max-xl:text-[11px] max-xl:left-4 max-md:text-[7px] max-md:left-3" class="player-rating">${player.rating}</p>
                <p class="absolute top-6 left-6 text-white text-[10px] max-xl:text-[7px] max-xl:left-4 max-xl:top-4 max-md:text-[4px] max-md:left-3 max-md:top-3 z-20 player-position">${player.position}</p>
            `;
            if (player.position === 'RW') {
                agreerw=player.rating/11;
            }else{
                agreerw=-player.rating/18;
            }
            removePlayer(player.name);
            RWRating = player.rating;
            overAllRating();
            agreement();
        } else if (selectedCard.dataset.card === 'LW') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class=" absolute top-0 left-0">
                <p class="absolute top-1 left-6 text-white text-[14px] max-xl:text-[11px] max-xl:left-4 max-md:text-[7px] max-md:left-3" class="player-rating">${player.rating}</p>
                <p class="absolute top-6 left-6 text-white text-[10px] max-xl:text-[7px] max-xl:left-4 max-xl:top-4 max-md:text-[4px] max-md:left-3 max-md:top-3 z-20 player-position">${player.position}</p>
            `;
            if (player.position === 'LW') {
                agreelw=player.rating/11;
            }else{
                agreelw=-player.rating/18;
            }
            removePlayer(player.name);
            LWRating = player.rating;
            overAllRating();
            agreement();
        } else if (selectedCard.dataset.card === 'LB') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class=" absolute top-0 left-0">
                <p class="absolute top-1 left-6 text-white text-[14px] max-xl:text-[11px] max-xl:left-4 max-md:text-[7px] max-md:left-3" class="player-rating">${player.rating}</p>
                <p class="absolute top-6 left-6 text-white text-[10px] max-xl:text-[7px] max-xl:left-4 max-xl:top-4 max-md:text-[4px] max-md:left-3 max-md:top-3 z-20 player-position">${player.position}</p>
            `;
            if (player.position === 'LB') {
                agreelb=player.rating/11;
            }else{
                agreelb=-player.rating/18;
            }
            removePlayer(player.name);
            LBRating = player.rating;
            overAllRating();
            agreement();
        } else if (selectedCard.dataset.card === 'RB') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class=" absolute top-0 left-0">
                <p class="absolute top-1 left-6 text-white text-[14px] max-xl:text-[11px] max-xl:left-4 max-md:text-[7px] max-md:left-3" class="player-rating">${player.rating}</p>
                <p class="absolute top-6 left-6 text-white text-[10px] max-xl:text-[7px] max-xl:left-4 max-xl:top-4 max-md:text-[4px] max-md:left-3 max-md:top-3 z-20 player-position">${player.position}</p>
            `;
            if (player.position === 'RB') {
                agreerb=player.rating/11;
            }else{
                agreerb=-player.rating/18;
            }
            removePlayer(player.name);
            RBRating = player.rating;
            overAllRating();
            agreement();
        }else if (selectedCard.dataset.card === 'rp1') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class=" absolute top-0 left-0">
                <p class="absolute top-1 left-6 text-white text-[14px] max-xl:text-[11px] max-xl:left-4 max-md:text-[7px] max-md:left-3" class="player-rating">${player.rating}</p>
                <p class="absolute top-6 left-6 text-white text-[10px] max-xl:text-[7px] max-xl:left-4 max-xl:top-4 max-md:text-[4px] max-md:left-3 max-md:top-3 z-20 player-position">${player.position}</p>
            `;
        }else if (selectedCard.dataset.card === 'rp2') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class=" absolute top-0 left-0">
                <p class="absolute top-1 left-6 text-white text-[14px] max-xl:text-[11px] max-xl:left-4 max-md:text-[7px] max-md:left-3" class="player-rating">${player.rating}</p>
                <p class="absolute top-6 left-6 text-white text-[10px] max-xl:text-[7px] max-xl:left-4 max-xl:top-4 max-md:text-[4px] max-md:left-3 max-md:top-3 z-20 player-position">${player.position}</p>
            `;
        }else if (selectedCard.dataset.card === 'rp3') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class=" absolute top-0 left-0">
                <p class="absolute top-1 left-6 text-white text-[14px] max-xl:text-[11px] max-xl:left-4 max-md:text-[7px] max-md:left-3" class="player-rating">${player.rating}</p>
                <p class="absolute top-6 left-6 text-white text-[10px] max-xl:text-[7px] max-xl:left-4 max-xl:top-4 max-md:text-[4px] max-md:left-3 max-md:top-3 z-20 player-position">${player.position}</p>
            `;
        }else if (selectedCard.dataset.card === 'rp4') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class=" absolute top-0 left-0">
                <p class="absolute top-1 left-6 text-white text-[14px] max-xl:text-[11px] max-xl:left-4 max-md:text-[7px] max-md:left-3" class="player-rating">${player.rating}</p>
                <p class="absolute top-6 left-6 text-white text-[10px] max-xl:text-[7px] max-xl:left-4 max-xl:top-4 max-md:text-[4px] max-md:left-3 max-md:top-3 z-20 player-position">${player.position}</p>
            `;
        }else if (selectedCard.dataset.card === 'rp5') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class=" absolute top-0 left-0">
                <p class="absolute top-1 left-6 text-white text-[14px] max-xl:text-[11px] max-xl:left-4 max-md:text-[7px] max-md:left-3" class="player-rating">${player.rating}</p>
                <p class="absolute top-6 left-6 text-white text-[10px] max-xl:text-[7px] max-xl:left-4 max-xl:top-4 max-md:text-[4px] max-md:left-3 max-md:top-3 z-20 player-position">${player.position}</p>
            `;
        }else if (selectedCard.dataset.card === 'rp6') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class=" absolute top-0 left-0">
                <p class="absolute top-1 left-6 text-white text-[14px] max-xl:text-[11px] max-xl:left-4 max-md:text-[7px] max-md:left-3" class="player-rating">${player.rating}</p>
                <p class="absolute top-6 left-6 text-white text-[10px] max-xl:text-[7px] max-xl:left-4 max-xl:top-4 max-md:text-[4px] max-md:left-3 max-md:top-3 z-20 player-position">${player.position}</p>
            `;
        }else if (selectedCard.dataset.card === 'rp7') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class=" absolute top-0 left-0">
                <p class="absolute top-1 left-6 text-white text-[14px] max-xl:text-[11px] max-xl:left-4 max-md:text-[7px] max-md:left-3" class="player-rating">${player.rating}</p>
                <p class="absolute top-6 left-6 text-white text-[10px] max-xl:text-[7px] max-xl:left-4 max-xl:top-4 max-md:text-[4px] max-md:left-3 max-md:top-3 z-20 player-position">${player.position}</p>
            `;
        }else if (selectedCard.dataset.card === 'rp8') {
            selectedCard.innerHTML = `
                <img src="img/Cards/BASIC.png" alt="Basic Image" class="w-28 card-image">
                <img src="${player.img}" alt="Top Image" class=" absolute top-0 left-0">
                <p class="absolute top-1 left-6 text-white text-[14px] max-xl:text-[11px] max-xl:left-4 max-md:text-[7px] max-md:left-3" class="player-rating">${player.rating}</p>
                <p class="absolute top-6 left-6 text-white text-[10px] max-xl:text-[7px] max-xl:left-4 max-xl:top-4 max-md:text-[4px] max-md:left-3 max-md:top-3 z-20 player-position">${player.position}</p>
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


//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

function overAllRating() {
    
    if(check==0){
        over = (Number(goalKeeperRating) + Number(stRating) + Number(CM1Rating) + Number(CM2Rating) + Number(CM3Rating) + Number(CB1Rating) + Number(CB2Rating) + Number(RWRating) + Number(LWRating) + Number(LBRating) + Number(RBRating)) / 10;
    }else if(check==1){
        over = 13+(Number(goalKeeperRating) + Number(stRating) + Number(CM1Rating) + Number(CM2Rating) + Number(CM3Rating) + Number(CB1Rating) + Number(CB2Rating) + Number(RWRating) + Number(LWRating) + Number(LBRating) + Number(RBRating)) / 10;
    }

    if (over <= 40) {
        document.getElementById("playerOver").innerHTML = `
        <p class="text-7xl max-md:text-2xl text-red-400">${over.toFixed(2)}</p>
        <p>over</p>
    `;
    }else if (over > 40 && over < 80){
        document.getElementById("playerOver").innerHTML = `
        <p class="text-7xl max-md:text-2xl text-yellow-400">${over.toFixed(2)}</p>
        <p>over</p>
    `;
    }else if (over >= 80 && over < 100){
        document.getElementById("playerOver").innerHTML = `
        <p class="text-7xl max-md:text-2xl text-green-400">${over.toFixed(2)}</p>
        <p>over</p>
    `;
    }else if (over >= 100){
        document.getElementById("playerOver").innerHTML = `
        <p class="text-7xl max-md:text-2xl text-blue-400">${over.toFixed(2)}</p>
        <p>over</p>
    `;
    }
    agreement();
}

function manager(){
    agree+=10;
    agreement();
}

function managerdef(){
    agree-=10;
    agreement();
}

function agreement() {
    if (check == 0) {
        if (check1 == 0){
            agree = cardagree+(Number(agreegk) + Number(agreest) + Number(agreecm1) + Number(agreecm2) + Number(agreecm3) + Number(agreecb1) + Number(agreecb2) + Number(agreerw) + Number(agreelw) + Number(agreelb) + Number(agreerb));
        } else if (check1 = 1){
            agree = cardagree+8+(Number(agreegk) + Number(agreest) + Number(agreecm1) + Number(agreecm2) + Number(agreecm3) + Number(agreecb1) + Number(agreecb2) + Number(agreerw) + Number(agreelw) + Number(agreelb) + Number(agreerb));
        }
    } else if (check == 1) {
        if (check1 == 0){
            agree = cardagree+12+(Number(agreegk) + Number(agreest) + Number(agreecm1) + Number(agreecm2) + Number(agreecm3) + Number(agreecb1) + Number(agreecb2) + Number(agreerw) + Number(agreelw) + Number(agreelb) + Number(agreerb));
        } else if (check1 = 1){
            agree = cardagree+20+(Number(agreegk) + Number(agreest) + Number(agreecm1) + Number(agreecm2) + Number(agreecm3) + Number(agreecb1) + Number(agreecb2) + Number(agreerw) + Number(agreelw) + Number(agreelb) + Number(agreerb));
        }
    }
    if (agree < 0 ) {
        document.getElementById("playerAgree").innerHTML = `
        <p id="playerAgree" class="text-7xl max-md:text-2xl text-red-600">${agree.toFixed(0)}%</p>
        <p>Agreement</p>
    `;
    } else if (agree > 0 && agree < 100) {
        document.getElementById("playerAgree").innerHTML = `
        <p id="playerAgree" class="text-7xl max-md:text-2xl text-white">${agree.toFixed(0)}%</p>
        <p>Agreement</p>
    `;
    }else if (agree > 100) {
        document.getElementById("playerAgree").innerHTML = `
        <p id="playerAgree" class="text-7xl max-md:text-2xl text-purple-500">100%</p>
        <p>Agreement</p>
    `;
    }
}

//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------

const replace = document.getElementById('replace');
const replacemodal = document.getElementById('replace-modal');
const closereplace = document.getElementById('close-replace')

replace.addEventListener('click', () => {
    replacemodal.classList.remove("hidden");
});

closereplace.addEventListener('click', () =>{
    replacemodal.classList.add("hidden")
});

