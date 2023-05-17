
// 購入したデータ (個数など) の情報
let BuyData = {};

// 個数 追加 関数
function addItem(id, value) {

    const name = document.getElementById(`name_${id}`).innerText;
    const price = document.getElementById(`price_${id}`).innerText;
    let count_element = document.getElementById(`count_${id}`);

    // 個数が 1024 以上 ならないようにする処理
    // 個数が 0より 小さくならないようにする処理
    // 上限を 1024 にしたのは 開発者の気分です。 本当は上限無くてもいい
    const count = parseInt(count_element.innerText) + value;
    if (count >= 1024 || count < 0) return;

    count_element.innerText = count;

    // 購入したデータを更新
    BuyData[id] = { "name": name, "price": price, "count": count };
    // ログに購入したデータを表示
    console.log(BuyData);

    // 購入した商品の合計金額が 変数"money" に代入される
    const money = money_result();

    document.getElementById("result").innerText = money;
}

// 合計金額算出関数
function money_result() {
    // 合計金額
    let money = 0;
    Object.keys(BuyData).forEach(key => {
        const item = BuyData[key];
        money += item.price * item.count;
    });
    return money;
}