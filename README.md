# web-bootcamp-practice_26

# 卓球得点表

HTML・CSS（[Bulma](https://bulma.io/)）・JavaScript を用いて作成された、2人用の卓球得点管理アプリケーションです。

![screenshot](https://images.unsplash.com/photo-1534158914592-062992fbe900?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1075&q=80)

---

## 機能概要

- プレイヤー1とプレイヤー2の得点をそれぞれ+1ずつカウント
- 勝利条件（3点〜11点）を選択可能
- 勝敗が決まるとスコアの色が変わり、ボタンが無効化
- リセットボタンで初期状態に戻すことが可能

---

## 使用技術

- **HTML5**
- **CSS3（[Bulma 0.9.3](https://cdn.jsdelivr.net/npm/bulma@0.9.3/)）**
- **JavaScript（DOM操作）**

---

## ファイル構成

project-root/
│
├── index.html // メインのHTMLファイル（画面構成・スタイル定義）
├── app.js // JavaScriptによる得点管理・状態制御のロジック（内部に記述可）
└── README.md // この説明ファイル


※現在、JavaScriptは `index.html` 内の `<script>` タグに直接記述されています。

---

## 使用方法

1. プロジェクトをローカルにクローンまたはダウンロード
2. `index.html` をブラウザで開く
3. 得点ボタンを押してスコアを管理

---

## スクリーンショット例

| ゲーム開始時 | 勝利確定時 |
|--------------|------------|
| ![](https://dummyimage.com/300x150/ddd/000&text=0+vs+0) | ![](https://dummyimage.com/300x150/ddd/000&text=3+vs+1) |

---

## メモ

- 勝利が決まると、勝者のスコアは緑 (`has-text-success`)、敗者は赤 (`has-text-danger`) に変化します。
- 勝敗がついたあとはスコアボタンは無効化されます。
- 勝利条件の変更を行うと、自動でゲームがリセットされます。

---

## 改善アイデア（今後の拡張例）

- スコア履歴表示機能
- タイマーやセット数管理機能の追加
- スマホ向けレスポンシブ最適化
- 音声やアニメーションの追加

---

## ライセンス

このアプリは学習用途で自由に利用可能です。


