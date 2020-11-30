function topbar() {
    var x = document.getElementById("Mytopnav");
    if (x.className === "navbar") {
        x.className += " responsive"
    } else {
        x.className = "navbar"
    }
}
