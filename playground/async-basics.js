console.log('Starting app');

setTimeout(()=> {
    console.log('Inside of callback');
}, 2000);

setTimeout(() => {
    console.log('2nd callbcak');
}, 0);

console.log('Finishing Up');