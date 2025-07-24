// プレイヤー1のスコア、ボタン、スコア表示要素をまとめたオブジェクト
const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),       // プレイヤー1の加点ボタン
    display: document.querySelector('#p1Display')      // プレイヤー1のスコア表示
}

// プレイヤー2のスコア、ボタン、スコア表示要素をまとめたオブジェクト
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),       // プレイヤー2の加点ボタン
    display: document.querySelector('#p2Display')      // プレイヤー2のスコア表示
}

// リセットボタンと勝利スコア選択セレクトボックスの取得
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#winningScore');

// ゲームに関する初期設定
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;      // デフォルトの勝利スコア
let isGameOver = false;    // ゲーム終了フラグ

// スコアを更新する関数（どちらかのプレイヤーの得点が増えた時に呼ばれる）
function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;                          // スコアを1点加算
        player.display.textContent = player.score; // スコア表示を更新

        // 勝利条件を満たした場合
        if (player.score === winningScore) {
            isGameOver = true;                         // ゲームを終了状態にする
            player.display.classList.add('has-text-success');   // 勝者のスコアを緑色に
            opponent.display.classList.add('has-text-danger');  // 敗者のスコアを赤色に
            player.button.disabled = true;             // ボタンを無効化
            opponent.button.disabled = true;
        }
    }
}

// プレイヤー1のボタンがクリックされたときの処理
p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
});

// プレイヤー2のボタンがクリックされたときの処理
p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
});

// 勝利スコアが変更されたときの処理
winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);  // セレクトボックスの値を取得して整数に変換
    reset();                              // ゲームをリセット
});

// リセットボタンがクリックされたときの処理
resetButton.addEventListener('click', reset);

// ゲームを初期状態に戻す関数
function reset() {
    isGameOver = false; // ゲーム終了フラグをリセット

    // 両プレイヤーのスコアと表示を初期化
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger'); // 勝敗色を除去
        p.button.disabled = false; // ボタンを再度有効化
    }
}
