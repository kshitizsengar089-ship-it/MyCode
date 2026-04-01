let btn1=document.querySelector("#c");

btn1.addEventListener("click",async()=>{
    let div1=document.querySelector("#C");
    let k= await getCatfacts();
    div1.innerHTML=k;    
});

let url1="https://catfact.ninja/fact";

async function getCatfacts(){
    try{
        let res= await axios.get(url1);
        console.log(res.data.fact);
         return res.data.fact;
    }
    catch(e){
        console.log("error",e);
        return "No data found";
    }
}
let url2="https://dog.ceo/api/breeds/image/random";
let btn2=document.querySelector("#d");

btn2.addEventListener("click",async ()=>{
    let img=document.querySelector("#id");
  let image= await randomDogimages();
  img.setAttribute("src",image)
})
async function randomDogimages()
{
    try{
        let res1=await axios.get(url2);
        return res1.data.message;   
    }
    catch(ex){
        console.log("error",ex);
        return "/";   
    }
}


