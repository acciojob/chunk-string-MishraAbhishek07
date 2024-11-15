function stringChop(str, size) {
    // Check for invalid inputs
    if (!str || typeof str !== "string" || size <= 0 || isNaN(size)) {
        return [];
    }

    size = Math.floor(size); // Ensure size is an integer
    let chunks = [];
    for (let i = 0; i < str.length; i += size) {
        chunks.push(str.slice(i, i + size)); // Slice the string into chunks
    }
    return chunks;
}

// Do not change the code below
const strInput = prompt("Enter String.");
const sizeInput = prompt("Enter Chunk Size.");
alert(JSON.stringify(stringChop(strInput, Number(sizeInput))));
