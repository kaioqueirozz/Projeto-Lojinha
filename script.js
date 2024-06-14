// CONSUMO DE API
async function findproduct() {
    
        const product_infos = await fetch(`https://fakestoreapi.com/products`)
        const data = await product_infos.json()
        console.log(data)
        
    for (const each_product of data){
        addProduct(each_product.id, each_product.title,each_product.price,each_product.image)
    }
}

function addProduct(id, title, price, image) {
     // CRIANDO O CARD
    const product_card_div = document.createElement('div')
    product_card_div.setAttribute("class", "product")

    // COLOCAR O LINK A IMAGEM
    const link = document.createElement('a')
    link.classList.add("product_link")
    link.href = `https://fakestoreapi.com/products/${id}`
    const img = document.createElement('img')
    img.classList.add("product_img")
    img.src = image

    // COLOCAR O NOME
    const product_title = document.createElement('h3')
    product_title.textContent = title

    // COLOCAR O PREÇO
    const product_price = document.createElement('p')
    product_price.textContent = `$ ${price}`

    // CRIAR O BOTÃO DE COMPRAR
    const add_button = document.createElement('button')
    add_button.textContent = `Add to Cart`

    // add_button.addEventListener("click", ()=> {

    //     //const total_price
    //     //const total_products

    //     const count = document.querySelector("#count")
    //     const cart = document.querySelector("cart")

    //     const cart_div = document.createElement('div');
    //     cart.setAttribute("class", "cart-items");
    //     cart.appendChild(cart_div)
       
    
    // })

    // ORGANIZAR E ANEXAR ELEMENTOS
    product_card_div.appendChild(link)
    link.appendChild(img)
    product_card_div.appendChild(product_title)
    product_card_div.appendChild(product_price)
    product_card_div.appendChild(add_button)

    const product_grid = document.querySelector('.product-grid')
    product_grid.appendChild(product_card_div)
}

findproduct()



// CARRINHO DE COMPRAS
document.getElementById('cart-toggle').addEventListener('click', function() {
    const cart = document.getElementById('cart')
    if (cart.classList.contains('hidden')) {
        cart.classList.remove('hidden')
        cart.style.transform = 'translateX(0)'
    } else {
        cart.classList.add('hidden')
        cart.style.transform = 'translateX(100%)'
    }
})
document.getElementById('cart-minimize').addEventListener('click', function() {
    const cart = document.getElementById('cart')
    cart.classList.add('hidden')
    cart.style.transform = 'translateX(100%)'
})