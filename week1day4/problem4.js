function message1(){
    console.log("Postive")
}
function message2(){
    console.log("Negative")
}

function numberAnalysis(number){
     number>0? message1(): message2()
        console.log(number);
    
    if (number%2==0){
        console.log("Even")
    }
    else{
        console.log("odd")
    }
    if (number>0) {
        for(let i=1;i<number;i++){
        console.log(i)
        }
    }
}
numberAnalysis(15)