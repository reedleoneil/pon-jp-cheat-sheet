const MOVE_STEP = 5;

let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

let shape = {
    x: c.width / 2,
    y: c.height / 2,
    w: 10,
    h: 10,
    c: "red"
}

const drawShape = (ctx, x, y, w, h, color) => {
    ctx.clearRect(0, 0, c.width, c.height);
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
    ctx.stroke();
}

const moveShape = (direction, moveStep) => {
    switch(direction) {
        case "NW":
            shape.x -= moveStep;
            shape.y -= moveStep;
            break;
        case "N":
            shape.y -= moveStep;
            break;
        case "NE":
            shape.x += moveStep;
            shape.y -= moveStep;
            break;
        case "W":
            shape.x -= moveStep;
            break;
        case "C":
            shape.x = c.width / 2;
            shape.y = c.height / 2;
            break;
        case "E":
            shape.x += moveStep;
            break;
        case "SW":
            shape.x -= moveStep;
            shape.y += moveStep;
            break;
        case "S":
            shape.y += moveStep;
            break;
        case "SE":
            shape.x += moveStep;
            shape.y += moveStep;
            break;
    }

    shape.x = shape.x > 0 ? shape.x : 0;
    shape.x = shape.x < (c.width - shape.w) ? shape.x : (c.width - shape.w);

    shape.y = shape.y > 0 ? shape.y : 0;
    shape.y = (shape.y + shape.h) < c.height ? shape.y : (c.height - shape.h);

    drawShape(ctx, shape.x, shape.y, shape.w, shape.h, shape.c); 
}

document.getElementById('btn-northwest').onclick = () => {
    moveShape("NW", MOVE_STEP);
};

document.getElementById('btn-north').onclick = () => {
    moveShape("N", MOVE_STEP);
};

document.getElementById('btn-northeast').onclick = () => {
    moveShape("NE", MOVE_STEP);
};

document.getElementById('btn-west').onclick = () => {
    moveShape("W", MOVE_STEP);
};

document.getElementById('btn-reset').onclick = () => {
    moveShape("C", MOVE_STEP);
};

document.getElementById('btn-east').onclick = () => {
    moveShape("E", MOVE_STEP);
};

document.getElementById('btn-southwest').onclick = () => {
    moveShape("SW", MOVE_STEP);
};

document.getElementById('btn-south').onclick = () => {
    moveShape("S", MOVE_STEP);
};

document.getElementById('btn-southeast').onclick = () => {
    moveShape("SE", MOVE_STEP);
};

drawShape(ctx, shape.x, shape.y, shape.w, shape.h, shape.c);
