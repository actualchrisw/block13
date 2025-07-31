// Initiate flavor variable

const flavor = ["vanilla", "vanilla", "vanilla", "coffee", "strawberry", "strawberry"];

//  Expected output: Vanilla: 3, Coffee: 1, Strawberry: 2

const flavorCounter = {};

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
