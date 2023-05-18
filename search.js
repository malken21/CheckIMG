function searchTextChange(value) {

    // すべての商品取得
    let itemList = document.getElementById("list").children;

    console.log("-------検索にヒットした商品----- start");
    for (let id = 0; id < itemList.length; id++) {
        //商品名の要素
        const CommodityNameElement = document.getElementById(`name_${id}`);

        if (CommodityNameElement.innerText.includes(value)) {
            console.log(CommodityNameElement.innerText);
            CommodityNameElement.parentElement.style.display = "";
        } else {
            CommodityNameElement.parentElement.style.display = "none";
        }
    }
    console.log("-------検索にヒットした商品----- end");
}