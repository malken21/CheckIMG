# CheckIMG

画像で商品を選んで計算結果を出力する

## ディレクトリの説明など

### /GAS

Google Apps Script のコード

/GAS/config.js にスプレッドシートのURLなどを記入する。

商品のデータが送られてくるURLは

```
"WebアプリのURL"?type=getCommodityData
```

### /main

金額を計算するコード

/main/config.js "CommodityData_URL" に商品データが送られてくるURLを指定する。

Pythonをインストールした状態で /main/start.bat (Linuxの場合は start.sh) を実行すると、

<http://localhost/> でサーバーが起動します。
