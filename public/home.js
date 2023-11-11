function login()
{
    const element = document.querySelector("#username");
    localStorage.setItem("username",element.value);
    window.location.href = "creator.html";
}