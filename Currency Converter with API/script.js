const api_key="-------------------------";
const url="https://v6.exchangerate-api.com/v6/"+api_key;
const currency1=document.getElementById("currency1");
const currency2=document.getElementById("currency2");
const amount=document.getElementById("amount");
const calculate=document.getElementById("calculate");
const result=document.querySelector(".result");


fetch(url+"/codes")
    .then(res=>res.json())
    .then(data=>{
        //console.log(data.supported_codes);
        
        let options;
        const items=data.supported_codes;
        for(let item of items){
            options+=`<option value=${item[0]}>${item[1]}</option>`;
        }
        currency1.innerHTML=options;
        currency2.innerHTML=options;
    });

calculate.addEventListener("click",function(){
    //console.log(amount.value);
    const money1=currency_one.value;
    const money2=currency_two.value;
    const quantity=amount.value;
    //console.log(money1,money2,quantity);
    fetch(url+"/latest/"+money1)
    .then(res=>res.json())
    .then(data=>{
        //console.log(data);
        //console.log(data.conversion_rates[money2]);
        const total=(data.conversion_rates[money2]*quantity).toFixed(3);
        result.classList.remove("passive");
        result.innerHTML=`${quantity} ${money1}=${total} ${money2}`;
    });
    
});