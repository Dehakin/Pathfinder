import React from 'react';
import './creator.css';

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





export function Creator() {
    return (
        <div className="outer">
            <img  class="portrait" id="pcportrait" src="assets/human-fighter.jpeg" />
            <span id="mstr" className="attributeDisplay">Strength: 4</span>
            <span id="mdex" className="attributeDisplay">Dexterity: 2</span>
            <span id="mcon" className="attributeDisplay">Constitution: 2</span>
            <span id="mint" className="attributeDisplay">Intelligence: 0</span>
            <span id="mwis" className="attributeDisplay">Wisdom: 1</span>
            <span id="mcha" className="attributeDisplay">Charisma: 0</span>

            <hr />

            <p>
                <label for="boost1select">Select your first ability boost:</label>
                <br />
                <br />
                <select onchange="c.updateAttributes()" className="abcselector" id="boost1select" name="boost1">
                    <option value="Strength" id="str1" selected>Strength</option>
                    <option value="Dexterity" id="dex1">Dexterity</option>
                    <option value="Constitution" id="con1">Constitution</option>
                    <option value="Intelligence" id="int1">Intelligence</option>
                    <option value="Wisdom" id="wis1">Wisdom</option>
                    <option value="Charisma" id="cha1">Charisma</option>
                </select>
            </p>
            <p>
                <label for="boost2select">Select your second ability boost:</label>
                <br />
                <br />
                <select onchange="c.updateAttributes()" className="abcselector" id="boost2select" name="boost2">
                    <option value="Strength" id="str2" selected>Strength</option>
                    <option value="Dexterity" id="dex2">Dexterity</option>
                    <option value="Constitution" id="con2">Constitution</option>
                    <option value="Intelligence" id="int2">Intelligence</option>
                    <option value="Wisdom" id="wis2">Wisdom</option>
                    <option value="Charisma" id="cha2">Charisma</option>
                </select>
            </p>
            <p>
                <label for="boost3select">Select your first background ability boost:</label>
                <br />
                <br />
                <select onchange="c.updateAttributes()" className="abcselector" id="backgroundselect" name="boost3">
                    <option selected>Strength</option>
                    <option>Intelligence</option>
                </select>
            </p>
            <p>
                <label for="boost4select">Select your second free background ability boost:</label>
                <br />
                <br />
                <select onchange="c.updateAttributes()" className="abcselector" id="backgroundselect2" name="boost3">
                    <option value="Strength" id="str3" selected>Strength</option>
                    <option value="Dexterity" id="dex3">Dexterity</option>
                    <option value="Constitution" id="con3">Constitution</option>
                    <option value="Intelligence" id="int3">Intelligence</option>
                    <option value="Wisdom" id="wis3">Wisdom</option>
                    <option value="Charisma" id="cha3">Charisma</option>
                </select>
            </p>
            <hr />
            

            <div className="abctitle"><b>Ancestry</b></div>
            <label for="ancestryselect">Select an ancestry:</label>
            <select onchange="c.changeAncestry()" className="abcselector" id="ancestryselect" name="ancestry">
                <optgroup label="Common">
                    <option selected>Human</option>
                    <option>Elf</option>
                    <option>Dwarf</option>
                </optgroup>
                <optgroup label="Uncommon">
                    <option>Orc</option>
                </optgroup>
            </select>
            <p>
                Humans are the most common and varied race in this world, Golarion. Resourceful
                and quick to learn, they often master things in half the time other races could.
            </p>
            <hr />
            <div className="abctitle"><b>Background</b></div>
            <label for="backgroundselect">Select a background:</label>
            <select className="abcselector" id="backgroundselect" name="background">
                <option selected>Artisan</option>
                <option>Criminal</option>
                <option>Farmhand</option>
                <option>Scholar</option>
            </select>
            <p>
                You've always been good with your hands. Perhaps you identify as a blacksmith,
                leatherworker, jeweler, or other craftsman, and bring these skills along with
                you as an adventurer.
            <br />
            <li>The Artisan background gives you a +1 bonus to your choice of Strength or Intelligence, and another +1 bonus to a different attribute of your choice.</li>
            <br />
            <li>It also gives you the Crafting skill and Guild Lore.</li>
            </p>
            <hr />
            <div className="abctitle"><b>Class</b></div>
            <label for="classselect">Select a class:</label>
            <select onchange="c.changeClass()" className="abcselector" id="classselect" name="class">
                <option selected>Barbarian</option>
                <option>Cleric</option>
                <option>Rogue</option>
                <option>Wizard</option>
            </select>
            <p>Barbarians are tough, instinctual warriors driven by rage. On the battlefield,
                they rely on devastating close-range attacks and often favor large weapons
                such as battleaxes and greatswords.
            <li>Barbarians automatically gain the Athletics skill, a +1 bonus to Strength, and start with 12 hit points + their Constitution.</li>
            </p>
            <button id = "postbutton" onclick="c.exportCharacter()">Post to Community!</button>
        </div>
    );
}