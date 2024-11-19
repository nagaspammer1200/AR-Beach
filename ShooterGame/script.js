// Function to spawn enemies
function spawnEnemies() {
    const maxEnemies = 3; // Maximum number of enemies
    const spawnRadius = 8; // Radius within which to spawn enemies
    const enemyModelUrl = 'https://cdn.glitch.global/2b4fc82f-28e7-4fbb-9ccc-6988dcf4935d/Soldier%20US%20N260412.gltf?v=1731934024534';

    // Get the camera element
    const camera = document.querySelector('[camera]');
    
    for (let i = 0; i < maxEnemies; i++) {
        // Create a new entity for the enemy
        const enemy = document.createElement('a-entity');
        
        // Set the model and scale
        enemy.setAttribute('gltf-model', enemyModelUrl);
        enemy.setAttribute('scale', '0.030 0.035 0.030'); // Adjust scale to fit mobile screen
        
        // Generate random position within the spawn radius
        const angle = Math.random() * 2 * Math.PI; // Random angle in radians
        const x = spawnRadius * Math.cos(angle); // X position
        const z = spawnRadius * Math.sin(angle); // Z position
        const y = -3; // Fixed Y position

        // Calculate rotation to face the camera
        const cameraPosition = camera.object3D.position;
        const dx = cameraPosition.x - x;
        const dz = cameraPosition.z - z;
        const rotationY = Math.atan2(dx, dz) * (180 / Math.PI); // Convert to degrees

        // Set the position and rotation of the enemy
        enemy.setAttribute('position', `${x} ${y} ${z}`);
        enemy.setAttribute('rotation', `0 ${rotationY} 0`);
        
        // Append the enemy to the scene
        document.querySelector('a-scene').appendChild(enemy);
    }
}

// Call the function to spawn enemies when the scene loads
document.addEventListener('DOMContentLoaded', () => {
    spawnEnemies();
});
