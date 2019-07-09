function beyond(num) {
    if (num === Infinity | num === -Infinity) (
        console.log('And beyond')
}
else if (num > 0) {
    console.log("To Infinity!!!")
}
else if (num < 0) {
    console.log('To Negative Infinity!!!')
}
else if  (num === 0) {
    console.log{"Staying Home!!!")
}
}

//after reading a javaScript Reference guide and scouring the net, I still can't seem to get this to run properly//
beyond(5);
beyond(-80);
beyond(0)
beyond(Infinity);
beyond(Math.pow(10, 10000));

//final commit