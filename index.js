var style = () => {
    `body{
        background: white;
    }`
}


switch(window.location.hostname){
    case "www.youtube.com":
        document.body.innerText = `Get back to work`;
        document.head.innerText = style();
        break;
}