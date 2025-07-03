let products=[];

function fetchData(){
    fetch("https://dummyjson.com/products").then((res)=>{

        return res.json();
    }).then((val)=>{

        console.log(val.products)
        products =val.products;

        localStorage.setItem("products",JSON.stringify(products))
        fetchProduct(products)

    })
}

function fetchProduct(product){
    let output="";
    product.map((v)=>{
        let price=Math.ceil(v.price*80);
        let rate=Math.round(v.rating);
        output+=`
         <main>
                    <p>${v.availabilityStatus}</p>
                <img src="${v.images[0]}"/>
                <h5>${v.title}</h5> 
              <p id="price">Price: ₹${Math.round(v.price * 85.60)}</p>
              <button>Add to cart</button>
              <button>View mode</button>
                </main>`
        
    });
    document.getElementById("containerBox").innerHTML=output;
}
document.getElementById("searchProduct").addEventListener("input",function searchItem(event){
let searchTerm=event.target.value.toLowerCase();
let filteredProduct=products.filter((v)=>{

    return(
        v.title.toLowerCase().includes(searchTerm) ||
        v.category.toLowerCase().includes(searchTerm)
    );
});
     fetchProduct(filteredProduct);  
});
fetchData();