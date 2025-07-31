// Prompt user for input
let flavor = prompt("Please select your flavors");

// Initiate flavorCounter variable

const flavorCounter = {};

// For loop


for (let i = 0; i < flavor.length; i++) {
        const flavors = flavor[i];
        
//  Add one to the count

    if (flavors in flavorCounter) {
        flavorCounter[flavor] += 1
    } else {
        flavorCounter[flavors] = 1
    }
    console.log("Flavor", flavor);

    console.log("freq", flavorCounter);
};
