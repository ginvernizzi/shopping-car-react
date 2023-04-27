const urlCart =  `https://fakestoreapi.com/carts`

export const getUserCart = (user_id) => {
    const cart = fetch(`${urlCart}/user/${user_id}`)
            .then(res=>res.json())
            .then(json=>console.log(json))

    return cart
}

export const addNewCart = (cart) => {
    fetch(urlCart,{
            method:"POST",
            body:JSON.stringify(
                cart
                // {
                //     userId:5,
                //     date:2020-02-03,
                //     products:[{productId:5,quantity:1},{productId:1,quantity:5}]
                // }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
}