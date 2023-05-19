
let CommodityData;

// HTML (Body) がロードされたら実行される
async function load_list() {
    console.log("load");

    // 変数"CommodityData" 商品のデータ
    // { "name": "商品名", "price": 金額, "image": "商品の画像" }
    CommodityData = await get(CommodityData_URL);
    CreateList(CommodityData);
}

// Get リクエストで jsonが送られてくる
function get(url) {
    return new Promise((resolve) => {
        fetch(url)
            .then(response => response.json())
            .then(data => resolve(data))
    });
}


// 商品リスト 生成 関数
function CreateList(CommodityData) {

    // 検証用
    //const CommodityData = [{ "name": "商品名 No.1", "price": 10, "image": "商品の画像-1.png" }, { "name": "商品名 No.2", "price": 20, "image": "商品の画像-2.png" }];

    console.log(CommodityData);

    CommodityData.forEach((commodity, id) => {
        document.getElementById(`list`).insertAdjacentHTML("beforeend",
            // CreateListItem(固有ID,金額,商品名,画像);
            CreateListItem(id, commodity.price, commodity.name, commodity.image)
        );
    });
}

// 商品パネル(ListItem) 生成 関数
//
// id     固有のID
// price  金額
// name   商品名
// image  商品の画像
//
// 商品の画像はbase64でも指定可能
function CreateListItem(id, price, name, image) {
    const list_base = `
  <article class="item">
    <h3 class="title" id="name_${id}">${name}</h3>
    <h4 class="price">値段: <a id="price_${id}">${price}</a>円</h4>
    <div class="image"><img src=${image} onerror="this.src='img/error.png'" alt="icon" /></div>
    <div class="button">
      <button type="button" onclick="addItem(${id},1);" class=" add">追加</button>
      <span class="count">個数: <a id="count_${id}">0</a></span>
      <button type="button" onclick="addItem(${id},-1);" class="rmv">削除</button>
    </div>
  </article>
  `;

    return list_base;
}