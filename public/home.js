function displayMessage(user) {
    console.log("Hlloo");
    const messageEl = document.querySelector("#messageLog");
    const eventEl = document.createElement('div');

    //Name element
    const nameEl = document.createElement('span');
    nameEl.textContent = user;
    eventEl.appendChild(nameEl);

    //Text in between
    const betweenEl = document.createElement('span');
    betweenEl.textContent = " just logged in!  ";
    eventEl.appendChild(betweenEl);

    console.log(eventEl);

    messageEl.appendChild(eventEl);
}

function login () {
    loginOrCreate('api/auth/login');
}

async function create () {
    loginOrCreate('api/auth/create');
}

// Connects to "Create" button. Makes sure there is no user with that username and creates user if so
async function loginOrCreate(endpoint) {

    console.log("In loginorcreate");
    const username = document.querySelector("#username")?.value;
    const password = document.querySelector("#password")?.value;

    
    const response = await fetch(endpoint, {
        method : 'post',
        body : JSON.stringify({ username : username, password : password}),
        headers : {
            'Content-type' : 'application/json; charset=UTF-8',
        },
    });


    //If it worked out then set local storage and start creator
    if (response.ok) {
        localStorage.setItem('username', username);
        const event = {
            'username' : username
        }
        socket.send(JSON.stringify(event));
        window.location.href = 'creator.html';
    } else {
        console.log("Error. Unauthorized!");
        const body = await response.json();
        console.log(body);
        document.querySelector('#message').textContent = `Error: ${body.msg}`;
    }
}

const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
//if (window.location.protocol === 'localhost'){ protocol = 'localhost'; }
console.log(`${protocol}://${window.location.host}/ws`);

const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

socket.onmessage = async (event) => {
    const msg = JSON.parse(await event.data.text());
    displayMessage(msg.username);
};