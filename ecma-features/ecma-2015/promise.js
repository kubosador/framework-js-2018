
const isGreaterThan = (a,b) =>{
    return new Promise((resolve, reject) => {
       if(a > b){
           resolve(true);
       }else{
           reject(false);
       }
    });
};

isGreaterThan(1,4).then(result =>{
    console.info('1 > 4');
}).catch(result =>{
    console.info('1 < 4');
})