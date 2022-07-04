function elimination (eliminate){
    let finalResult = [];
    for(let i=0; i< eliminate.length;i++){
        if(eliminate[i]<0){
            finalResult.push(0)
        }else{
            finalResult.push(eliminate[i])
        }
    }
    console.log(finalResult)
}

let x =[2,-1,4,-3]
 elimination(x);