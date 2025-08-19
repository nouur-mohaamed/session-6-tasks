  const words=['apple','grape','apple','apple','banana','banana']
   countWords(words)
    function countWords(inputarr){
    obj={}
   const elementarr=[]
    inputarr.forEach((input)=>{
if(!elementarr.includes(input))elementarr.push(input);
    })
elementarr.forEach((element,index) => {
    obj[element]=0;
inputarr.forEach((input,i)=>{
    if(element==input){
        
        obj[element]++;}
})    
});
console.log(obj);
    }