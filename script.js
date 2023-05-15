function addItem(id) {

    const name = document.getElementById(`name_${id}`).innerText;
    const price = document.getElementById(`price_${id}`).innerText;
    let count = document.getElementById(`count_${id}`);

    console.log("id: " + id);
    console.log("name: " + name);
    console.log("price: " + price);
    console.log("count: " + count.innerText);


    // 個数が 1024 以上 ならないようにする処理
    // 上限を 1024 にしたのは 開発者の気分です。 本当は上限無くてもいい
    if (count.innerText >= 1024) return;

    count.innerText++;
}

function rmvItem(id) {

    const name = document.getElementById(`name_${id}`).innerText;
    const price = document.getElementById(`price_${id}`).innerText;
    let count = document.getElementById(`count_${id}`);

    console.log("id: " + id);
    console.log("name: " + name);
    console.log("price: " + price);
    console.log("count: " + count.innerText);

    // 個数が 0より 小さくならないようにする処理
    if (count.innerText < 1) return;

    count.innerText--;
}