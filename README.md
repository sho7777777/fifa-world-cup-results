##
<img width="814" alt="image" src="https://user-images.githubusercontent.com/115442046/210320641-28611537-6816-4fa1-a6f1-854d806f270d.png">

## アプリ概要
- 第1回目(1930年)から第21回(2018年)までのサッカーW杯の各国の最終成績をグラフ形式にしています。
- 最大で4カ国まで同時に表示可能です。

## URL
- https://fifa-world-cup-9bf30.web.app/  
※ macOS, Safariのみ対応

## 作成理由
- 2022年11月に開催されたカタールW杯グループリーグで、日本がドイツとスペインに勝利しました。  
2カ国の強さは元々把握していたものの、より客観的かつわかりやすく強さを把握したいと考え、他のサービスを探してみましたがヒットしなかったため、本アプリの作成に至りました。  
各国における過去W杯成績の推移をグラフ形式で表示し、それらを重ね合わせることで、力の差を視覚的に表示し把握しやすくしております。

## 使用技術
- Next.js(TypeScript)
- Firebase（ホスティングのみ）
- react-chartjs-2
- Chakra UI

データはNext.jsのAPI機能を利用して自作のjsonデータを取得しています。

## 作成時間

①2カ国のみ対応

|作業内容|項目別作業時間|合計作業時間|
|:---|:---|:---|
|データ作成 |10h ||
|実装|15h||
|スタイリング|5.5h||
|デプロイ|2h||
||計|32.5h|
|実装＋リファクタリング|26h||
||計|26h|
|全合計||58.5h|

- 12/2(日本vsスペイン戦)直後に作成を開始し、12/5(日本vsクロアチア戦)開始までに2カ国同士の比較を行える状態で一旦リリースしました。  
その後、4カ国対応し、またコードがひどい状態であったため、リファクタリングを行いました。  

## 改善点
- 機種依存文字を使用しており、Windowsで表示した際に国旗が表示されないため、画像に差し替え予定。
- ツールチップ内に最後の試合のスコアを表示しておりますが、最後にクリックした国の結果が表示されてしまうため、chartjsの仕様確認。
- スマホでページを表示した際にグラフのy軸が少なく表示されてしまう。
- y軸の成績のメモリの幅が均一であるが、例えば日本が超えられていないベスト16とベスト8の間など達成度の困難度合いに差があるため、メモリ幅の修正。
