// API for get requests
let fetchRes = fetch(
    "https://fakestoreapi.com/products");
    // fetchRes is the promise to resolve
    // it by using.then() method
    fetchRes.then(res =>
        res.json()).then(d => {
            // console.log(d)
            document.write(d)
        })