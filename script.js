function addItem(id) {

    const name = document.getElementById(`name_${id}`).innerText;
    const price = document.getElementById(`price_${id}`).innerText;

    console.log("id: " + id);
    console.log("name: " + name)
    console.log("price: " + price)
}