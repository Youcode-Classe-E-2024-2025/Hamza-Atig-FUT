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


const playersData = [
    {
        name: "Alisson Becker",
        physique: "6'3\"",
        pace: "50",
        rating: "88",
        shot: "65",
        pass: "75",
        defense: "85",
        dribble: "60",
        physical: "80",
        position: "GK",
        img: "img/GK/alisson.avif"
    },
    {
        name: "Hugo Lloris",
        physique: "6'1\"",
        pace: "52",
        rating: "85",
        shot: "60",
        pass: "70",
        defense: "80",
        dribble: "55",
        physical: "75",
        position: "GK",
        img: "img/GK/hugo.avif"
    },
    {
        name: "Ruud Gullit",
        physique: "6'4\"",
        pace: "93",
        rating: "94",
        shot: "90",
        pass: "85",
        defense: "80",
        dribble: "88",
        physical: "90",
        position: "CB",
        img: "img/CB/gullit.png"
    },
    {
        name: "Virgil van Dijk",
        physique: "6'4\"",
        pace: "80",
        rating: "90",
        shot: "75",
        pass: "80",
        defense: "95",
        dribble: "70",
        physical: "85",
        position: "CB",
        img: "img/CB/vand.png"
    },
    {
        name: "Sergio Ramos",
        physique: "6'0\"",
        pace: "77",
        rating: "88",
        shot: "70",
        pass: "80",
        defense: "88",
        dribble: "75",
        physical: "85",
        position: "CB",
        img: "img/CB/ramos.avif"
    },
    {
        name: "Trent Alexander-Arnold",
        physique: "5'9\"",
        pace: "83",
        rating: "87",
        shot: "70",
        pass: "90",
        defense: "75",
        dribble: "85",
        physical: "70",
        position: "RB",
        img: "img/RB/arnold.avif"
    },
    {
        name: "Kyle Walker",
        physique: "6'0\"",
        pace: "89",
        rating: "85",
        shot: "60",
        pass: "75",
        defense: "80",
        dribble: "85",
        physical: "80",
        position: "RB",
        img: "img/RB/Walker.avif"
    },
    {
        name: "Andrew Robertson",
        physique: "5'10\"",
        pace: "80",
        rating: "87",
        shot: "65",
        pass: "80",
        defense: "85",
        dribble: "80",
        physical: "75",
        position: "LB",
        img: "img/LB/robertson.avif"
    },
    {
        name: "Kevin De Bruyne",
        physique: "5'11\"",
        pace: "75",
        rating: "91",
        shot: "85",
        pass: "95",
        defense: "60",
        dribble: "85",
        physical: "70",
        position: "CM",
        img: "img/CM/debruyn.avif"
    },
    {
        name: "Luka Modrić",
        physique: "5'9\"",
        pace: "72",
        rating: "89",
        shot: "70",
        pass: "90",
        defense: "65",
        dribble: "88",
        physical: "70",
        position: "CM",
        img: "img/CM/modric.avif"
    },
    {
        name: "Paul Pogba",
        physique: "6'3\"",
        pace: "80",
        rating: "85",
        shot: "75",
        pass: "80",
        defense: "85",
        dribble: "80",
        physical: "85",
        position: "CM",
        img: "img/CM/pogba.avif"
    },
    {
        name: "Mohamed Salah",
        physique: "5'9\"",
        pace: "92",
        rating: "89",
        shot: "90",
        pass: "80",
        defense: "60",
        dribble: "85",
        physical: "75",
        position: "RW",
        img: "img/RW/salah.avif"
    },
    {
        name: "Jadon Sancho",
        physique: "5'11\"",
        pace: "85",
        rating: "86",
        shot: "80",
        pass: "85",
        defense: "60",
        dribble: "88",
        physical: "70",
        position: "RW",
        img: "img/RW/sancho.avif"
    },
    {
        name: "Cristiano Ronaldo",
        physique: "6'2\"",
        pace: "85",
        rating: "118",
        shot: "95",
        pass: "75",
        defense: "60",
        dribble: "80",
        physical: "85",
        position: "ST",
        img: "img/ST/cr.avif"
    },
    {
        name: "Robert Lewandowski",
        physique: "6'0\"",
        pace: "80",
        rating: "92",
        shot: "90",
        pass: "80",
        defense: "65",
        dribble: "80",
        physical: "85",
        position: "ST",
        img: "img/ST/lewandowski.avif"
    },
    {
        name: "Sadio Mané",
        physique: "5'9\"",
        pace: "88",
        rating: "89",
        shot: "85",
        pass: "75",
        defense: "60",
        dribble: "90",
        physical: "80",
        position: "LW",
        img: "img/LW/mane.avif"
    },
    {
        name: "Raheem Sterling",
        physique: "5'7\"",
        pace: "87",
        rating: "86",
        shot: "80",
        pass: "75",
        defense: "65",
        dribble: "90",
        physical: "70",
        position: "LW",
        img: "img/LW/sterling.avif"
    }
];

// Show Player Modal function
function showPlayerModal() {
    const playersList = document.getElementById('players-list');
    
    let playersHTML = '';
    
    playersData.forEach(player => {
        playersHTML += `
            <div class="flex flex-row cursor-pointer mb-4 justify-between align-middle">
                <div class="flex items-center space-x-4">
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
pitchImages.forEach(img => {
    img.addEventListener('click', () => {
        showPlayerModal();
    });
});

document.getElementById('close-modal').addEventListener('click', () => {
    document.getElementById('player-modal').classList.add('hidden');
});
