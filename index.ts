function categoryMonitoringPromise(){
    return new Promise((resolve,reject)=>{
        try{
            for(let i=0;i<999;i++){
                throw new Error('Nothing special');
            }
            resolve({
                name: 'Category Status',
                msg: 'OK'
            })
        }catch(e){
            reject({
                name: 'Category Status',
            msg: e
            })
        }
    })
}

/*class MessageContainer{
    name: any
    msg: any
}*/

async function categoryMonitoringPromiseTest(){
    let result = await categoryMonitoringPromise();
    document.getElementById('sth').innerText= JSON.stringify(result);
}


/*
categoryMonitoringPromise().then((message: MessageContainer)=>{
    console.log(`${message.name} ${message.msg}`)
}).catch((error)=>{
    console.log(`${error.name} ${error.message}`)
})
console.log('TEST')
*/