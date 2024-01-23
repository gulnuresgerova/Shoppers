const BASE_URL = `http://localhost:1905/shoppers`;

let dinamic = document.querySelector(".dinamic");
let favCount = document.querySelector(".favcount");

let favProduct = getFavaFromLocaleStrogeProduct();
calculateCount(favProduct.length);
let product = [];

async function getData() {
  let res = await axios(`${BASE_URL}`);
  product = res.data;
  console.log(res.data);
  drawCards(res.data);
}
getData();

function drawCards(data) {
  dinamic.innerHTML = "",
    data.forEach((el) => {
      dinamic.innerHTML += `
        <div class="box">
        <div class="image">
            <img src="${el.img}" alt="" />
        </div>
        <p>${el.title}</p>
        <em>${el.desc}</em>
        <p>${el.price}</p>
        <div class="dinamic-icons">
        <i class="${
            favProduct.some((item) => item.id === el.id)
              ? "fa-solid fa-heart "
              : "fa-regular fa-heart"
          }" onclick=favIcon("${el.id}",this)></i>
      </div>
        <a href="./details.html?id=${el.id}"><i class="fa-solid fa-eye"></i> </a>
     </div>
   
         
        `;
    });
}
function favIcon(id, icon) {
    if (icon.className === "fa-regular fa-heart") {
      icon.className = "fa-solid fa-heart";
    } else {
      icon.className = "fa-regular fa-heart";
    }
  
    let favs = getFavaFromLocaleStrogeProduct();
  
    let bool = favs.find((item) => item.id === id);
    let products = product.find((item) => item.id === id);
  
    if (bool) {
      favs = favs.filter((item) => item.id !== id);
    } else {
      favs.push(products);
    }
    setFavaFromLocaleStrogeProduct(favs);
    calculateCount(favs.length);
  }
  
  function setFavaFromLocaleStrogeProduct(fav) {
    localStorage.setItem("favs", JSON.stringify(fav));
  }
  
  function getFavaFromLocaleStrogeProduct() {
    return JSON.parse(localStorage.getItem("favs")) || [];
  }
  
  function calculateCount(count) {
    favCount.textContent = count;
  }
  