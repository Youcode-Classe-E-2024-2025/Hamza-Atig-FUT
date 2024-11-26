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
