function categoryMonitoringPromise(){
    return new Promise((resolve,reject)=>{
        try{
            for(let i=0;i<999;i++){
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

const categoryMonitoringPromiseTest = async() =>{
   return await categoryMonitoringPromise();
}
console.log(categoryMonitoringPromiseTest());

/*
categoryMonitoringPromise().then((message: MessageContainer)=>{
    console.log(`${message.name} ${message.msg}`)
}).catch((error)=>{
    console.log(`${error.name} ${error.message}`)
})
console.log('TEST')
*/