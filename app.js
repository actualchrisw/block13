const flavor = ["vanilla", "vanilla", "vanilla", "coffee", "strawberry", "strawberry"];

//  Expected output: Vanilla: 3, Coffee: 1, Strawberry: 2

const frequencyCounter = {};

for (let i = 0; i < flavor.length; i++) {
        const flavor = flavors[i];
//  Add one to the count
    if (flavors in flavorCounter) {
        flavorCounter[flavor] += 1
    } else {
        flavorCounter[color] = 1
    }
    console.log("Flavor", flavor);

    console.log("freq", flavorCounter);
};
