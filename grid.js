const GRID_ROWS = 30;
const GRID_COLS = 20;

export function randomGridPosition() {
  return {
    x: Math.floor(Math.random() * GRID_COLS) + 1,
    y: Math.floor(Math.random() * GRID_ROWS) + 1,
  };
}

export function outsideGrid(position) {
  return (
    position.x < 1 ||
    position.x > GRID_COLS ||
    position.y < 1 ||
    position.y > GRID_ROWS
  );
}
