var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve ( a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

asyncAdd(4, 7).then((res) => {
    console.log('Result: ', res);
    return asyncAdd(res, 32);
}).then((res) => {
    console.log('Should be 43 ', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

// var somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     //resolve('Hey it worked');
//     reject('unable to process');
//     }, 2000);
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// });