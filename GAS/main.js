function loadCommodityData() {
    // スプレッドシート データ 取得
    const values = SpreadsheetApp.openByUrl(SpreadsheetURL).
        getSheetByName(SheetName).
        getRange(Range).
        getValues();

    // データの並び方を 商品データに変換
    return toCommodityData(values);
}