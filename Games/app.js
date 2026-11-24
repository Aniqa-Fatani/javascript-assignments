// CHARACTER ELEMENTS
var char1 = document.getElementById("char1");
var char2 = document.getElementById("char2");
var bannerEl = document.getElementById("action-banner");

// INITIAL POSITIONS
var ryuLeft = 30;
var kulaLeft = Math.max(30, window.innerWidth - 150 - 30);
var ryuFacing = 1;  // 1 = right, -1 = left
var kulaFacing = 1; // 1 = left (default stance), -1 = right

char1.style.left = ryuLeft + "px";
char2.style.left = kulaLeft + "px";

// RYU SPRITES (Remote + Local assest/gif)
var ryuSprites = {
    stand: "https://www.fightersgeneration.com/characters3/ryu-cvs2-stance.gif",
    walk: "https://www.fightersgeneration.com/np7/char/gifs/ryu/ryu-cfe-walkb.gif",
    run: "assest/gif/ryu-cfe-run.gif",
    hadoken: "assest/gif/ryu-cvs-hadoken-a.gif",
    redHadoken: "assest/gif/ryu-redhado.gif",
    shoryuken: "assest/gif/ryu-cfe-shoryuken.gif",
    superArt: "assest/gif/ryu-sa2.gif",
    tieBelt: "assest/gif/ryu-cvs-tiebelt.gif",
    tie: "assest/gif/ryu-cfe-tie.gif"
};

// KULA DIAMOND SPRITES (Local assest/gif)
var kulaSprites = {
    stand: "assest/gif/kula-kof13-stance.gif",
    dash: "assest/gif/kula-dashing.gif",
    dashBack: "assest/gif/kula-dashback.gif",
    jump: "assest/gif/kula-jump2 (1).gif",
    air: "assest/gif/kula-air2.gif",
    slide: "assest/gif/kula-slide.gif",
    attackA: "assest/gif/kula-a3.gif",
    attackB: "assest/gif/kula-a6.gif",
    attackC: "assest/gif/kula-c3.gif",
    freeze: "assest/gif/kula-freeze.gif",
    special: "assest/gif/kula-special6.gif"
};

// TIMERS
var ryuTimer;
var kulaTimer;

function setBanner(text) {
    bannerEl.innerText = text;
}

function applyTransform(element, facing) {
    if (element.classList.contains("jump")) {
        element.style.transform = "scaleX(" + facing + ") translateY(-10px)";
    } else {
        element.style.transform = "scaleX(" + facing + ")";
    }
}

function setRyuSprite(src, duration, label) {
    char1.src = src;
    applyTransform(char1, ryuFacing);
    if (label) {
        setBanner(label);
    }

    clearTimeout(ryuTimer);
    ryuTimer = setTimeout(function () {
        char1.src = ryuSprites.stand;
        applyTransform(char1, ryuFacing);
    }, duration);
}

function setKulaSprite(src, duration, label) {
    char2.src = src;
    applyTransform(char2, kulaFacing);
    if (label) {
        setBanner(label);
    }

    clearTimeout(kulaTimer);
    kulaTimer = setTimeout(function () {
        char2.src = kulaSprites.stand;
        applyTransform(char2, kulaFacing);
    }, duration);
}

function makeJump(element, fallbackSrc, duration, label) {
    if (element.classList.contains("jump")) {
        return;
    }

    if (label) {
        setBanner(label);
    }

    if (fallbackSrc) {
        element.src = fallbackSrc;
    }

    element.classList.add("jump");

    element.addEventListener("animationend", function jumpEnd() {
        element.classList.remove("jump");
        element.removeEventListener("animationend", jumpEnd);
        if (element === char1) {
            char1.src = ryuSprites.stand;
            applyTransform(char1, ryuFacing);
        } else {
            char2.src = kulaSprites.stand;
            applyTransform(char2, kulaFacing);
        }
    });

    if (duration) {
        clearTimeout(element === char1 ? ryuTimer : kulaTimer);
    }
}

function clampPosition(pos, elementWidth) {
    var maxPos = window.innerWidth - elementWidth - 10;
    if (pos < 10) return 10;
    if (pos > maxPos) return maxPos;
    return pos;
}

// RYU ACTIONS (Keyboard + Buttons)
function triggerRyuAction(action) {
    switch (action) {
        case "moveRight":
            ryuFacing = 1;
            ryuLeft = clampPosition(ryuLeft + 14, char1.offsetWidth || 120);
            char1.style.left = ryuLeft + "px";
            setRyuSprite(ryuSprites.walk, 260, "Ryu walks right");
            break;

        case "moveLeft":
            ryuFacing = -1;
            ryuLeft = clampPosition(ryuLeft - 14, char1.offsetWidth || 120);
            char1.style.left = ryuLeft + "px";
            setRyuSprite(ryuSprites.walk, 260, "Ryu walks left");
            break;

        case "run":
            ryuLeft = clampPosition(ryuLeft + (28 * ryuFacing), char1.offsetWidth || 120);
            char1.style.left = ryuLeft + "px";
            setRyuSprite(ryuSprites.run, 350, "Ryu dashes forward!");
            break;

        case "jump":
            makeJump(char1, ryuSprites.shoryuken, 600, "Ryu jumps!");
            break;

        case "hadoken":
            setRyuSprite(ryuSprites.hadoken, 550, "Ryu performs Hadoken!");
            break;

        case "redHadoken":
            setRyuSprite(ryuSprites.redHadoken, 650, "Ryu unleashes Red Hadoken!");
            break;

        case "shoryuken":
            makeJump(char1, ryuSprites.shoryuken, 650, "Ryu rises with Shoryuken!");
            break;

        case "super":
            setRyuSprite(ryuSprites.superArt, 750, "Ryu activates Super Art!");
            break;

        case "tieBelt":
            setRyuSprite(ryuSprites.tieBelt, 500, "Ryu tightens his headband!");
            break;

        case "tie":
            setRyuSprite(ryuSprites.tie, 500, "Ryu prepares his stance!");
            break;
    }
}

// KULA DIAMOND ACTIONS (Keyboard + Buttons)
function triggerKulaAction(action) {
    switch (action) {
        case "moveLeft":
            kulaFacing = 1;
            kulaLeft = clampPosition(kulaLeft - 14, char2.offsetWidth || 120);
            char2.style.left = kulaLeft + "px";
            setKulaSprite(kulaSprites.dash, 260, "Kula dashes left");
            break;

        case "moveRight":
            kulaFacing = -1;
            kulaLeft = clampPosition(kulaLeft + 14, char2.offsetWidth || 120);
            char2.style.left = kulaLeft + "px";
            setKulaSprite(kulaSprites.dash, 260, "Kula dashes right");
            break;

        case "dashBack":
            kulaLeft = clampPosition(kulaLeft + (24 * kulaFacing), char2.offsetWidth || 120);
            char2.style.left = kulaLeft + "px";
            setKulaSprite(kulaSprites.dashBack, 350, "Kula dashes back!");
            break;

        case "jump":
            makeJump(char2, kulaSprites.jump, 600, "Kula jumps!");
            break;

        case "slide":
            kulaLeft = clampPosition(kulaLeft - (26 * kulaFacing), char2.offsetWidth || 120);
            char2.style.left = kulaLeft + "px";
            setKulaSprite(kulaSprites.slide, 450, "Kula slides across the stage!");
            break;

        case "attack":
            setKulaSprite(kulaSprites.attackC, 450, "Kula strikes!");
            break;

        case "airAttack":
            makeJump(char2, kulaSprites.air, 600, "Kula performs an air strike!");
            break;

        case "freeze":
            setKulaSprite(kulaSprites.freeze, 650, "Kula casts Diamond Freeze!");
            break;

        case "special":
            setKulaSprite(kulaSprites.special, 750, "Kula unleashes Special Move!");
            break;
    }
}

function resetArena() {
    clearTimeout(ryuTimer);
    clearTimeout(kulaTimer);

    ryuLeft = 30;
    kulaLeft = Math.max(30, window.innerWidth - (char2.offsetWidth || 120) - 30);
    ryuFacing = 1;
    kulaFacing = 1;

    char1.classList.remove("jump");
    char2.classList.remove("jump");

    char1.style.left = ryuLeft + "px";
    char2.style.left = kulaLeft + "px";

    char1.src = ryuSprites.stand;
    char2.src = kulaSprites.stand;

    applyTransform(char1, ryuFacing);
    applyTransform(char2, kulaFacing);

    setBanner("Arena Reset — Ready for action");
}

// KEYBOARD LISTENERS
document.addEventListener("keydown", function (event) {
    switch (event.code) {
        // Ryu controls
        case "ArrowRight":
            triggerRyuAction("moveRight");
            break;
        case "ArrowLeft":
            triggerRyuAction("moveLeft");
            break;
        case "ShiftRight":
            triggerRyuAction("run");
            break;
        case "Space":
            event.preventDefault();
            triggerRyuAction("jump");
            break;
        case "KeyJ":
            triggerRyuAction("hadoken");
            break;
        case "KeyK":
            triggerRyuAction("shoryuken");
            break;
        case "KeyL":
            triggerRyuAction("super");
            break;
        case "KeyU":
            triggerRyuAction("tieBelt");
            break;
        case "KeyI":
            triggerRyuAction("redHadoken");
            break;

        // Kula Diamond controls
        case "KeyA":
            triggerKulaAction("moveLeft");
            break;
        case "KeyD":
            triggerKulaAction("moveRight");
            break;
        case "KeyW":
            triggerKulaAction("jump");
            break;
        case "KeyS":
            triggerKulaAction("slide");
            break;
        case "KeyF":
            triggerKulaAction("attack");
            break;
        case "KeyG":
            triggerKulaAction("freeze");
            break;
        case "KeyH":
            triggerKulaAction("special");
            break;
        case "KeyR":
            triggerKulaAction("dashBack");
            break;
        case "KeyE":
            triggerKulaAction("airAttack");
            break;
    }
});

window.addEventListener("resize", function () {
    ryuLeft = clampPosition(ryuLeft, char1.offsetWidth || 120);
    kulaLeft = clampPosition(kulaLeft, char2.offsetWidth || 120);
    char1.style.left = ryuLeft + "px";
    char2.style.left = kulaLeft + "px";
});