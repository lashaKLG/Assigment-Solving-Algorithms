function numberToString(array) {
    let result = [];
    for (let i =0; i < array.length; i++)
    if(array[i] < 0 ){
        result.push('Turing')

    }else{
        result.push(array[i])
    }
    console.log(result)
}
 let x=[1, -4, 0, -1]
 numberToString(x)


  
   
