

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function printArr() {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        await sleep(3000);
    }
    console.log('Done');
}

printArr();