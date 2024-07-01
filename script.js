document.querySelector("button").addEventListener("click",result);

async function result(){
    try {
        let test = document.getElementById("text").value;
        let data = await fetch(`https://api.coincap.io/v2/assets/${test}`);
        let res = await data.json();
        console.log(res)
        let box_ele=document.getElementById("collabel")
        box_ele.innerHTML=`<div class="card-group mt-5">
  <div class="card">
    <div class="card-header text-center bg-primary" style="font-size:20px;font-weight:bolder;color:white">${res.data.name}</div>
    <div class="card-body p-10">
     <h5 class="card-title">Price in USD : ${res.data.priceUsd}</h5>
          <h5 class="card-title">Market Cap USD : ${res.data.marketCapUsd}</h5>
          <h5 class="card-title">Maximum Supply : ${res.data.maxSupply}</h5>
          <h5 class="card-title">Volume Used in last 24 Hours : ${res.data.volumeUsd24Hr}</h5>
          <h5 class="card-title">Change percentage in last 24 Hours : ${res.data.changePercent24Hr}</h5>
          <h5 class="card-title">Symbol : ${res.data.symbol}</h5>
          <h5 class="card-title">Rank : ${res.data.rank}</h5>
    </div>
  </div>`
    }
catch (error) {
    console.log(error);
}
}
