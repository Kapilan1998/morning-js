function i_take_10_sec(callback) {
    return setTimeout(() => {
        console.log('I was no: 1 and I take 10 seconds</br>')
        callback()
    }, 10000);
}

function i_take_1_sec(callback) {
    return setTimeout(() => {
        console.log('I was no: 2 and I take 1 second</br>')
        callback()
    }, 1000);
}

function i_take_5_sec(callback) {
    return setTimeout(() => {
        console.log('I was no: 3 and I take 5 second</br>')
        callback()
    }, 5000);
}

function i_take_7_sec(callback) {
    return setTimeout(() => {
        console.log('I was no: 4 and I take 7 second</br>')
        callback()
    }, 7000);
}


function run (){
    i_take_10_sec(()=>{
        i_take_1_sec(()=>{
            i_take_5_sec(()=>{
                i_take_7_sec(()=>{ })
            })
            
        })
    })
}

run();