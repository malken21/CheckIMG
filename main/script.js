
// 購入したデータ (個数など) の情報
let BuyData = {};

// 数値変更ボタン の情報
// 現在 どこの 数値変更ボタン が 何の数値になっているか管理している
// ChangeValueList の何番目の数値を表示しているのか というのが書いてある
let ValueButtonData = {};

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

// リセットボタン
function reset() {
    if (CommodityData) {
        document.getElementById(`list`).innerText = "";
        CreateList(CommodityData);
        BuyData = {};

        // 購入した商品の合計金額が 変数"money" に代入される
        const money = money_result();

        document.getElementById("result").innerText = money;
        document.getElementById("search").value = "";
    }
}


// 数値変更ボタン
function changeValue(id) {
    //ログ出力
    console.log(`active: changeValue [id = ${id}]`);

    //ボタンの情報 (ChangeValueList の何番目の数値を表示しているのか) を取得
    let ValueButton = ValueButtonData[id];

    //もしボタンの情報がなかった場合 (読み込まれてから一度も変更していないボタン) は 数値を 0 にする
    if (!ValueButton) ValueButton = 0;

    //ログ出力
    console.log(ValueButtonData);

    // ValueButton 1つ追加
    ValueButton++;

    //もし ChangeValueList に書かれている 一番後ろの数値を 表示していた場合は
    // 0 (ChangeValueList の一番前にある数値を表示) に設定する
    if (ChangeValueList.length <= ValueButton) ValueButton = 0;

    // 変数 "ValueButtonData" に書かれている情報を更新
    ValueButtonData[id] = ValueButton;

    // 数値変更ボタン に 表示される文字を 変更
    document.getElementById(`value_${id}`).innerText = ChangeValueList[ValueButton];
}

// 個数追加ボタン
function addCount(id) {
    //ログ出力
    console.log(`active: addCount [id = ${id}]`);

    // value_${id} を取得して 型を int型にする (取得したものは String型 になっているので)
    const value = parseInt(document.getElementById(`value_${id}`).innerText);

    //個数を追加
    addItem(id, value);
}

// 個数削除ボタン
function rmvCount(id) {
    //ログ出力
    console.log(`active: rmvCount [id = ${id}]`);

    // value_${id} を取得して 型を int型にする (取得したものは String型 になっているので)
    const value = parseInt(document.getElementById(`value_${id}`).innerText);

    //マイナス個数を追加 (マイナスを追加するので やっていることは個数削除)
    addItem(id, -value);
}