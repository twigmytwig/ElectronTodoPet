const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Resize canvas dynamically
function resizeCanvas() {
    canvas.width = window.innerWidth * 0.9; // 90% of window width
    canvas.height = 200; // Fixed height to avoid warping
}
window.addEventListener("resize", resizeCanvas);
resizeCanvas(); // Call it initially

ctx.imageSmoothingEnabled = false; // Keep the pixelated look

const spriteSheet = new Image();
spriteSheet.src = "./Assets/Dark-eye-wizard.png"; // Replace with your sprite sheet path

const frameWidth = 32; 
const frameHeight = 32;
const totalFrames = 4;
const scale = 4;
const scaledWidth = frameWidth * scale;
const scaledHeight = frameHeight * scale;

let currentFrame = 0;
let frameX = 0;
const frameY = 0;
let xPos = 0; // Start position of the sprite
let speed = 2; // Speed of movement
let direction = 1; // 1 = right, -1 = left

const yPos = canvas.height - scaledHeight; // Position at bottom, keeping it visible

function updateSprite() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous frame

    frameX = currentFrame * frameWidth;

    // Flip sprite based on direction
    ctx.save();
    if (direction === -1) {
        ctx.scale(-1, 1); // Flip horizontally when moving left
        ctx.drawImage(spriteSheet, frameX, frameY, frameWidth, frameHeight, -xPos - scaledWidth, yPos, scaledWidth, scaledHeight);
    } else {
        ctx.drawImage(spriteSheet, frameX, frameY, frameWidth, frameHeight, xPos, yPos, scaledWidth, scaledHeight);
    }
    ctx.restore();

    // Move the sprite horizontally
    xPos += speed * direction;

    // Change direction when hitting canvas edges
    if (xPos + scaledWidth >= canvas.width || xPos <= 0) {
        direction *= -1; // Reverse direction
    }

    // Move to the next frame for animation
    currentFrame = (currentFrame + 1) % totalFrames;

    setTimeout(updateSprite, 100);
}

spriteSheet.onload = () => updateSprite();

