//Adding Background
// let horizonLine = window.innerHeight / 2
// let sky = window.innerHeight - horizonLine
// let grass = horizonLine

// //Need to add sometime to fix tile
// function tile(url, left, bottom, width, height){
//     for(let y = 0; y < height; y++){
//         for(let x = 0; x < width; x++){
//             backgroundImage(url, left + x*100, bottom + y*100)
//         }
//     }
// }

// tile('assets/sky.png', 0, horizonLine, window.innerWidth/100, sky/100)
// tile('assets/grass.png', 0, 0, window.innerWidth/100, grass/100) 


// Create the playable character
const pc = newPlayableCharacter(100, 110)

// Create a non-playable character
const npc = newNonPlayableCharacter(50, 300)


// NPC Track
let moveNPC = async () => {
    //Loop to continuously move character
    let count = 1
    while(count < 100){
        await npc.walkNorth(1400)
        await npc.walkEast(1200)
        await npc.walkSouth(300)
        await npc.walkEast(1500)
        await npc.walkSouth(1500)
        await npc.walkWest(2700)
        await npc.walkNorth(400)  
        count += 1;
    }
}



moveNPC()



// Create the inventory
const inventory = newInventory()
move(inventory).to(0, 0)

// Create everything else
move(newImage('assets/tree.png')).to(200, 450)
move(newImage('assets/pillar.png')).to(350, 250)
move(newImage('assets/pine-tree.png')).to(450, 350)
move(newImage('assets/crate.png')).to(150, 350)
move(newImage('assets/well.png')).to(500, 575)
move(newItem('assets/sword.png')).to(500, 555)
move(newItem('assets/shield.png')).to(165, 335)
move(newItem('assets/staff.png')).to(600, 250)

// Need to add code for collisions 