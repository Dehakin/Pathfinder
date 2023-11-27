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
        window.location.href = 'creator.html';
    } else {
        console.log("Error. Unauthorized!");
        const body = await response.json();
        console.log(body);
        document.querySelector('#message').textContent = `Error: ${body.msg}`;
    }
}