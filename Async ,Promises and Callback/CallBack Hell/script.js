Datafunction = (data, nextData) => {
    setTimeout(()=>{
        console.log("Data : ",data);
        if(nextData){
            nextData();
        };
    }, 1000)
}

Datafunction(4, ()=>{
    Datafunction(45, ()=> {
        Datafunction(222)
    });
});