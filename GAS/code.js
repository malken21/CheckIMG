function doGet(e) {
    switch (e.parameter.type) {
        case "getCommodityData":
            return result(loadCommodityData());
    }
}