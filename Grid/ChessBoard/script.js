const grid = document.querySelectorAll(".grid div");
for (let i = 0; i < grid.length; i++) {
    const row = Math.floor(i / 8);
    const col = i % 8;
    if ((row + col) % 2 === 0) {
        grid[i].style.backgroundColor = "white";
    } else {
        grid[i].style.backgroundColor = "green";
        grid[i].style.textNode = i;
    }
}