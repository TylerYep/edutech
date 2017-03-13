function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    switch(ev.target.id) {
    case "drag1":
        break;
    case "drag2":
        break;
    case "drag3":
        break;
    case "drag4":
        break;
    default:
        ev.target.appendChild(document.getElementById(data));
    }
}
