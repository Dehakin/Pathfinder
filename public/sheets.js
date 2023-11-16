async function displaySheets() {
    //Get sheets from service
    let sheets = [];
    const response = await fetch('/api/sheets');
    sheets = await response.json();

    //Get start HTML element
    const playerSheetsElement = document.querySelector(".pSheets");

    if (sheets.length === 0) {
        const thingy = document.querySelector("#nosheets");
        if (thingy === null) {
            const noSheetsEl = document.createElement('span');
        noSheetsEl.textContent = "There aren't any sheets yet! Go make some!";
        noSheetsEl.id = "nosheets";
        playerSheetsElement.appendChild(noSheetsEl);

        const buttonEl = document.querySelector("#displaybutton");
        buttonEl.remove();
        
        return;
        }
    }
    else {
        try {
            const noSheetsEl = document.querySelector("#nosheets");
            noSheetsEl.remove();
        }
        catch {

        }
    }


    console.log(sheets.length);
    console.log(sheets);

    
    

    /*
    This is an example of an event
    <div class="event">
        <span class="playermadesheet">
            James
        </span>
        <span> 
            created a new 
        </span>
        <span class="charType">
            Human Barbarian
        </span>
        <span class="timeago"> 
            just now!
        </span>
        <p>
            See their sheet
        </p>
            <span class="sheetlink"> 
                here
            </span>!
    
    </div>
    */

    //For each sheet, make an extra line thingy
    for (const sheet of sheets) {
        //This will be a new sheet entry
        const eventEl = document.createElement('div');
        eventEl.className = "event";

    

        //Span that has username
        const nameEl = document.createElement('span');
        nameEl.textContent = sheet['username'];
        nameEl.className = "playermadesheet";
        eventEl.appendChild(nameEl);

        //Text in between
        const madeEl = document.createElement('span');
        madeEl.textContent = " made a new ";
        eventEl.appendChild(madeEl);

        //Character type (Human Barbarian etc)
        const characterEl = document.createElement('span');
        characterEl.className = "charType";
        characterEl.textContent = sheet['ancestry'] + " " + sheet['class'];
        eventEl.appendChild(characterEl);

        //Time element
        const timeEl = document.createElement('span');
        timeEl.className = "timeago";
        timeEl.textContent = " just now!";
        eventEl.appendChild(timeEl);

        //"see their sheet" element
        const seeEl = document.createElement('p');
        seeEl.textContent = "See their sheet ";
        eventEl.appendChild(seeEl);

        //Link element
        const linkEl = document.createElement('span');
        linkEl.className = "sheetlink";
        linkEl.textContent = " here";
        seeEl.appendChild(linkEl);

        //Literally an exclamation mark
        const exclamationEl = document.createElement('span');
        exclamationEl.textContent = "!";
        seeEl.appendChild(exclamationEl);


        

        playerSheetsElement.appendChild(eventEl);
    }

    //Delete button element
    const buttonEl = document.querySelector("#displaybutton");
    buttonEl.remove();
}

/*const buttonEl = document.createElement('button');
playerSheetsElement*/