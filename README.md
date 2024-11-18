# webpro_06
## このプログラムについて
このプログラムは対応するメッセージを送るとそれについて返信が返ってくるというプログラムです．

## ファイル一覧
ファイル名|説明
-|-
app5.js|プログラムの本体
public/test.html|挨拶開始画面
public/janken.html|じゃんけん開始画面
public/muki.html|あっち向いてホイ開始画面
public/meshi.html|牛丼屋注文開始画面
views/icon.ejs|アイコン表示のテンプレートファイル
views/show.ejs|挨拶のテンプレートファイル
views/luck.ejs|おみくじのテンプレートファイル
views/janken.ejs|じゃんけんのテンプレートファイル
views/muki.ejs|あっち向いてホイのテンプレートファイル

##　機能
####　あっち向いてホイ
機能|説明
-|-
muki|ユーザーが選んだ向きが設定される
win|勝利数が保存される
total|試合数が保存される
cpu|コンピュータの向き設定
judgment|勝敗の決定

#### 牛丼屋
機能|説明
-|-
meshi|ユーザーが選んだ料理が設定される
cost|料理の値段
greet4|メニュー一覧


## 使用方法

#### あっち向いてホイ
1. ```app5.js``` を起動する
1. Webブラウザでlocalhost:8080/public/muki.htmlにアクセスする
1. 自分の手を入力する

#### 牛丼屋
1. ```app5.js``` を起動する
1. Webブラウザでlocalhost:8080/public/meshi.htmlにアクセスする
1. 自分の手を入力する
