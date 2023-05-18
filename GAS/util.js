// レスポンス 生成
function result(object) {
    return ContentService.createTextOutput(
        JSON.stringify(object)
    ).setMimeType(ContentService.MimeType.JSON);
}

// スプレッドシートから商品データに変換
function toCommodityData(values) {

    // 商品名 または 商品の金額 が何も書かれていない場合は 削除する
    values = values.filter(value => value[0] != "" && value[1] != "");

    return values.map(value => {
        return { "name": value[0], "price": value[1], "image": value[2] }
    });
}