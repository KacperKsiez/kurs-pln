const root = document.querySelector('.root')
const root2 = document.querySelector('.root2')

const getData =  async ()=>{
    try{
        const data = await fetch('https://openexchangerates.org/api/latest.json?app_id=79207968c75e445c93b200dc426c521f')
        const jsonData = await data.json()
        writeToElement(root, parseFloat(jsonData.rates.PLN).toFixed(2)+' PLN')
        writeToElement(root2, jsonData.rates.PLN+' PLN')

    }
    catch(error){
        console.log('this is');
    }    
}
getData()

function writeToElement(element, text){
    element.innerHTML=text;
}