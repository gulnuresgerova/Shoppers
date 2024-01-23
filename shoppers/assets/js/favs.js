const BASE_URL = `http://localhost:1905/shoppers`

let products = document.querySelector(".products")
const favCount = document.querySelector(".favcount");



let favProduct = getFavaFromLocaleStrogeProduct();
calculateCount(favProduct.length);



function drawCards(data){
    products.innerHTML = "";
    data.forEach((el) => {
      products.innerHTML += `
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
     </div>
   
         
        `  
    });
}
drawCards(favProduct)

function favIcon(id,icon){
    favProduct=favProduct.filter((item)=>item.id !== id)
    setFavaFromLocaleStrogeProduct(favProduct)
    calculateCount(favProduct.length)
    
    icon.closest(".box").remove()
      }
    
    function calculateCount(count){
        favCount.textContent=count
    }
    
      function setFavaFromLocaleStrogeProduct(fav){
        localStorage.setItem("favs", JSON.stringify(fav))
      }
      function getFavaFromLocaleStrogeProduct(){
        return JSON.parse(localStorage.getItem("favs")) || []
    
      }