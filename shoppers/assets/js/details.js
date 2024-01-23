let id = new URLSearchParams(window.location.search).get("id")
console.log(id)
const BASE_URL = `http://localhost:1905/shoppers`;
let details = document.querySelector(".details");
let goback = document.querySelector(".goback");


fetch(`${BASE_URL}/${id}`)
  .then((res) => res.json())
  .then((el) => {
    details.innerHTML = `
    <div class="box">
    <div class="image">
        <img src="${el.img}" alt="" />
    </div>
    <p>${el.title}</p>
    <em>${el.desc}</em>
    <p>${el.price}</p>
    </div>
  
    `;
  });
  goback.addEventListener("click" , function(){
    window.history.back()
  })