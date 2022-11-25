function categoryMonitoringPromise(){
    return new Promise((resolve,reject)=>{
        try{
            for(let i=0;i<9999999999;i++){
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

class MessageContainer{
    name: any
    msg: any
}



categoryMonitoringPromise().then((message: MessageContainer)=>{
    console.log(`${message.name} ${message.msg}`)
}).catch((error)=>{
    console.log(`${error.name} ${error.message}`)
})
console.log('TEST')