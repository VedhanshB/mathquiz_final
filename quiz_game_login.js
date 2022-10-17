function adduser() {
    p1n = document.getElementById("player1_name").value
    p2n = document.getElementById("player2_name").value
    localStorage.setItem("player1name", p1n);
    localStorage.setItem("player2name", p2n);
    window.location = "game_page.html"
}
