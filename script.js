
// 個数などの情報
let data = {}

// 個数 追加 関数
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

    data[id] = { "name": name, "price": price, "count": count.innerText };

    const money = result();
    console.log("合計金額: " + money);
}

// 個数 削除 関数
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

    data[id] = { "name": name, "price": price, "count": count.innerText };

    const money = result();
    console.log("合計金額: " + money);
}

function result() {
    // 合計金額
    let money = 0;
    Object.keys(data).forEach(key => {
        const item = data[key];
        money += item.price * item.count;
    });
    return money;
}