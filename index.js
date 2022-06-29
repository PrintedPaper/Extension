const style = () => {
    `body{
        background: white;
    }`
}

switch(window.location.hostname){
    case "www.youtube.com":
        document.body.innerHTML = "<h1> Get back to work <h1>";
        document.head.innerHTML = style();
        break;
}