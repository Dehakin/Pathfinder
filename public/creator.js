const classData = {
    "Barbarian" : {
        name : "Barbarian",
        boost : "Strength",
        flavorText : "Barbarians are tough, instinctual warriors driven by rage. On the battlefield, they rely on devastating close-range attacks and often favor large weapons such as battleaxes and greatswords.",
        description : "Barbarians automatically gain the Athletics skill, a +1 bonus to Strength, and start with 12 hit points + their Constitution."
    },
    "Cleric" : {
        name : "Cleric",
        boost : "Wisdom",
        flavorText : "Clerics are priests that gain divine power through devotion to a deity. On the battlefield, they protect their allies and punish their enemies with powerful divinity-infused magic.",
        description : "Clerics automatically gain the Religion Skill, a +1 to Wisdom, and start with 8 hit points + their Constitution."
    },
    "Rogue" : {
        name : "Rogue",
        boost : "Dexterity",
        flavorText : "Rogues are quick, cunning assassins who rely on clever tricks to accomplish their goals. On the battlefield, they shy away from direct confrontation by hitting enemies where they least expect it.",
        description : "Rogues automatically gain the Stealth skill, a +1 bonus to Dexterity, and start with 8 hit points + their Constitution."
    },
    "Wizard" :  {
        name : "Wizard",
        boost: "Intelligence",
        flavorText : "Wizards are intelligent magic users that have considerable arcane power at their disposal. On the battlefield, they cast spells of terrifying power to manipulate the battlefield and reduce their opponents to ash.",
        description : "Wizards automatically gain the Arcana skill, a +1 bonus to Intelligence, and start with 6 hit points + their Constitution."
    }
};

const backgroundData = {
    "Artisan" : {
        name : "Artisan",
        boost1 : "Strength",
        boost2 : "Intelligence",
        skill : "Crafting",
        flavorText : "You've always been good with your hands. Perhaps you identify as a blacksmith, leatherworker, jeweler, or other craftsman, and bring these skills along with you as an adventurer.",
        description: "The Artisan background gives you a +1 bonus to your choice of Strength or Intelligence, another +1 bonus to a different attribute of your choice, and the Crafting skill."
    },
    "Criminal" : {
        name : "Crimina;",
        boost1 : "Dexterity",
        boost2 : "Charisma",
        skill : "Deception",
        flavorText : "",
        description : ""
    },
    "Farmhand" : {
        name : "Farmhand",
        boost1 : "Strength",
        boost2 : "Wisdom",
        skill : "Athletics",
        flavorText : "",
        description : ""
    },
    "Scholar" : {
        name : "Scholar",
        boost1 : "Wisdom",
        boost2 : "Intelligence",
        skill : "Arcana",
        flavorText : "",
        description : ""
    }
};

const ancestryData = {
    "Human" : {
        name : "Human",
        flavorText : "Humans are the most common and varied race in this world, Golarion. Resourceful and quick to learn, they often master things in half the time other races could.",
        image : "assets/human-fighter.jpeg"
    },
    "Elf" : {
        name : "Elf",
        flavorText : "",
        image : "assets/elven-fighter.jpeg"
    },
    "Dwarf" : {
        name : "Dwarf",
        flavorText : "",
        image : "assets/dwarf.jpeg"
    },
    "Orc" : {
        name : "Orc",
        flavorText : "",
        image : "assets/orc.jpeg"
    }
};


function setPhoto(photoName){
    const image = document.getElementById('pcportrait');
    image.src = photoName;
}


class Creator {
    ancestry;
    background;
    pClass;

    skills;

    strength;
    dexterity;
    constitution;
    intelligence;
    wisdom;
    charisma;

    constructor() {
        this.skills = [];
        this.ancestry = ancestryData["Human"];
        this.background = backgroundData["Artisan"];
        this.pClass = classData["Barbarian"];

        const usernameElement = document.querySelector('.username');
        usernameElement.textContent = localStorage.getItem('username') ?? "Unknown Player";
        }

        resetAttributes() {
            this.strength = 0;
            this.dexterity = 0;
            this.constitution = 0;
            this.intelligence = 0;
            this.wisdom = 0;
            this.charisma = 0;
        }

        incrementAttribute (attr) {
            if (attr === "Strength") this.strength++;
            else if (attr === "Dexterity") this.dexterity++;
            else if (attr === "Constitution") this.constitution++;
            else if (attr === "Intelligence") this.intelligence++;
            else if (attr === "Wisdom") this.wisdom++;
            else if (attr === "Charisma") this.charisma++;
        }

        showAttributes() {
            document.getElementById("mstr").textContent = "Strength: " + this.strength;
            document.getElementById("mdex").textContent = "Dexterity: " + this.dexterity;
            document.getElementById("mcon").textContent = "Constitution: " + this.constitution;
            document.getElementById("mint").textContent = "Intelligence: " + this.intelligence;
            document.getElementById("mwis").textContent = "Wisdom: " + this.wisdom;
            document.getElementById("mcha").textContent = "Charisma: " + this.charisma;
        }


        updateAttributes() {
            this.resetAttributes();
            const classBoost = classData[this.pClass["name"]]["boost"];
            this.incrementAttribute(classBoost);

            const free1 = document.getElementById("boost1select").value;
            this.incrementAttribute(free1);
            const free2 = document.getElementById("boost2select").value;
            this.incrementAttribute(free2);

            const background1 = document.getElementById("backgroundselect").value;
            this.incrementAttribute(background1);

            const background2 = document.getElementById("backgroundselect2").value;
            this.incrementAttribute(background2);
            

            this.showAttributes();
            
        }

        setAttributeVal (attributeElement, val) {
            attributeElement.textContent = val;
        }

        changeClass() {
            const newClass = document.getElementById("classselect").value;
            this.pClass = classData[newClass];
        }

        changeAncestry() {
            const newAncestry = document.getElementById("ancestryselect").value;
            this.ancestry = ancestryData[newAncestry];

            const photo = this.ancestry["image"];
            setPhoto(photo);
        }
        async exportCharacter() {
            
            const response = await fetch('/api/sheets');
            const sheets = await response.json();

            const ancestry = this.ancestry;
            const background = this.background;
            const pClass = this.pClass;

            let scores = []

            scores.push(this.strength);
            scores.push(this.dexterity);
            scores.push(this.constitution);
            scores.push(this.intelligence);
            scores.push(this.wisdom);
            scores.push(this.charisma);
        

            const username = localStorage.getItem('username');

            const toExport = { 'username' : username,
                'ancestry' : ancestry,
                'background' : background,
                'class' : pClass,
                'scores' : scores
            };

            sheets.push(toExport);
        }

        
    }

const c = new Creator;