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
    case "drag5":
        break;
    case "drag6":
        break;
    case "drag7":
        break;
    case "drag8":
        break;
    default:
        ev.target.appendChild(document.getElementById(data));
    }
}
