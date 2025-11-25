function eventBus(){
    let listener = {}
    return {
        subscribe(event,callback){
            if(!listener[event]){
                listener[event] = []
            }
            listener[event].push(callback)
        },
        publish(event,data){
            if(listener[event]){
                 listener[event].forEach(element => element(data));
            }
        },
        totalSubscriber(event){
            if(!listener[event]){
                console.log(`"${event}" has no subscriber`)
            }else{
                console.log(`total subscriber of "${event}" is ${listener[event].length }`)
            }

        }
    }
}

const eventHub = eventBus()

eventHub.subscribe("news",(news)=>{
    console.log("subscriber 1 " + news)
})

eventHub.subscribe("news",(news)=>{
    console.log("subscriber 2 " + news)
})

eventHub.subscribe("news",(news)=>{
    console.log("subscriber 3 " + news)
})
eventHub.subscribe("news",(news)=>{
    console.log("subscriber 4 " + news)
})
eventHub.subscribe("news",(news)=>{
    console.log("subscriber 5 " + news)
})

eventHub.subscribe("lives",(streaming)=>{
    console.log("subscriber 5 " + streaming)
})


eventHub.publish("news","Today is our victory day")
eventHub.publish("lives","video on live telecast...")

eventHub.totalSubscriber("news")
eventHub.totalSubscriber("lives")
