document.addEventListener('DOMContentLoaded', () => {

    // 問題のデータ（各モードの単語リストをまとめる）
    const allQuestions = {
        normal: [
            { "japanese": "中止する", "english": "call off" },
  { "japanese": "着る、身につける", "english": "put on" },
  { "japanese": "脱ぐ", "english": "take off" },
  { "japanese": "(電気などを)つける", "english": "turn on" },
  { "japanese": "(電気などを)消す", "english": "turn off" },
  { "japanese": "探す", "english": "look for" },
  { "japanese": "知る、見つけ出す", "english": "find out" },
  { "japanese": "あきらめる", "english": "give up" },
  { "japanese": "起きる", "english": "get up" },
  { "japanese": "目覚める", "english": "wake up" },
  { "japanese": "続ける", "english": "go on" },
  { "japanese": "世話をする", "english": "look after" },
  { "japanese": "戻る", "english": "come back" },
  { "japanese": "外出する", "english": "go out" },
  { "japanese": "故障する", "english": "break down" },
  { "japanese": "(話題を)出す", "english": "bring up" },
  { "japanese": "持ち出す、取り出す", "english": "take out" },
  { "japanese": "仲良くやる", "english": "get along" },
  { "japanese": "提出する", "english": "hand in" },
  { "japanese": "立ち上がる", "english": "stand up" },
  { "japanese": "座る", "english": "sit down" },
  { "japanese": "(ホテルから)チェックアウトする", "english": "check out" },
  { "japanese": "試着する", "english": "try on" },
  { "japanese": "外食する", "english": "eat out" },
  { "japanese": "成長する", "english": "grow up" },
  { "japanese": "(アイデアなどを)思いつく", "english": "come up with" },
  { "japanese": "楽しみにする", "english": "look forward to" },
  { "japanese": "実行する", "english": "carry out" },
  { "japanese": "延期する", "english": "put off" },
  { "japanese": "対処する", "english": "deal with" },
  { "japanese": "引き継ぐ", "english": "take over" },
  { "japanese": "偶然出会う", "english": "run into" },
  { "japanese": "乗り越える", "english": "get over" },
  { "japanese": "経験する", "english": "go through" },
  { "japanese": "埋め合わせる", "english": "make up for" },
  { "japanese": "引き起こす", "english": "bring about" },
  { "japanese": "設立する、準備する", "english": "set up" },
  { "japanese": "うまくいく、解決する", "english": "work out" },
  { "japanese": "支援する、バックアップを取る", "english": "back up" },
  { "japanese": "結局～になる", "english": "end up" },
  { "japanese": "待つ", "english": "hold on" },
  { "japanese": "断る、却下する", "english": "turn down" },
  { "japanese": "代わりを務める、記入する", "english": "fill in" },
  { "japanese": "我慢する", "english": "put up with" },
  { "japanese": "伝える、理解させる", "english": "get across" },
  { "japanese": "要求する", "english": "call for" },
  { "japanese": "指摘する", "english": "point out" },
  { "japanese": "引き受ける", "english": "take on" },
  { "japanese": "除外する", "english": "rule out" },
  { "japanese": "解散する、別れる", "english": "break up" },
  { "japanese": "元気づける", "english": "cheer up" },
  { "japanese": "降ろす、立ち寄る", "english": "drop off" },
  { "japanese": "遅れずについていく", "english": "keep up with" },
  { "japanese": "でっちあげる、仲直りする", "english": "make up" },
  { "japanese": "遅れをとる", "english": "fall behind" }

        ],
        toeic: [
            
  { "japanese": "〜を占める、〜の理由を説明する", "english": "account for" },
  { "japanese": "〜を考慮に入れる", "english": "allow for" },
  { "japanese": "(真実を)証明する", "english": "bear out" },
  { "japanese": "成し遂げる", "english": "bring off" },
  { "japanese": "促進する、育む", "english": "foster up" },
  { "japanese": "〜で間に合わせる", "english": "make do with" },
  { "japanese": "軽視する", "english": "play down" },
  { "japanese": "(資金などを)注ぎ込む", "english": "pour into" },
  { "japanese": "〜に頼る、依存する", "english": "rely on" },
  { "japanese": "〜を頼る", "english": "fall back on" },
  { "japanese": "〜をやり遂げる", "english": "go through with" },
  { "japanese": "〜を後世に伝える", "english": "hand down" },
  { "japanese": "〜を思いつく", "english": "hit on" },
  { "japanese": "〜に固執する", "english": "latch on to" },
  { "japanese": "〜を激しく非難する", "english": "lash out at" },
  { "japanese": "〜を選ぶ", "english": "opt for" },
  { "japanese": "〜に立ち向かう", "english": "stand up to" },
  { "japanese": "要約する", "english": "sum up" },
  { "japanese": "議論に加わる", "english": "weigh in on" },
  { "japanese": "〜に焦点を絞る", "english": "zero in on" }

        ],
        oni: [
            { "japanese": "生の", "english": "raw" },
    { "japanese": "法律", "english": "law" },
    { "japanese": "列", "english": "row" },
    { "japanese": "低い", "english": "low" },
        { "japanese": "抽象的な、理論的な", "english": "Abstract", "partOfSpeech": "形容詞" },
        { "japanese": "蓄積する、積み上げる", "english": "Accumulate", "partOfSpeech": "動詞" },
        { "japanese": "知人、面識", "english": "Acquaintance", "partOfSpeech": "名詞" },
        { "japanese": "十分な、広い", "english": "Ample", "partOfSpeech": "形容詞" },
        { "japanese": "適切な、ふさわしい", "english": "Appropriate", "partOfSpeech": "形容詞" },
        { "japanese": "任意の、恣意的な", "english": "Arbitrary", "partOfSpeech": "形容詞" },
        { "japanese": "評価する、査定する", "english": "Assess", "partOfSpeech": "動詞" },
        { "japanese": "防ぐ、回避する", "english": "Avert", "partOfSpeech": "動詞" },
        { "japanese": "強制する、無理にさせる", "english": "Compel", "partOfSpeech": "動詞" },
        { "japanese": "示す、意味する", "english": "Denote", "partOfSpeech": "動詞" },
        { "japanese": "減少する、縮小する", "english": "Diminish", "partOfSpeech": "動詞" },
        { "japanese": "強調する", "english": "Emphasise", "partOfSpeech": "動詞" },
        { "japanese": "包み込む、含む", "english": "Encompass", "partOfSpeech": "動詞" },
        { "japanese": "妨げる、抑制する", "english": "Inhibit", "partOfSpeech": "動詞" },
        { "japanese": "例、実例", "english": "Instance", "partOfSpeech": "名詞" },
        { "japanese": "正当化する、弁明する", "english": "Justify", "partOfSpeech": "動詞" },
        { "japanese": "気が進まない、乗り気でない", "english": "Reluctant", "partOfSpeech": "形容詞" },
        { "japanese": "抵抗する、反抗する", "english": "Resist", "partOfSpeech": "動詞" },
        { "japanese": "我慢する、許容する", "english": "Tolerate", "partOfSpeech": "動詞" },
            { "japanese": "階層", "english": "hierarchy", "partOfSpeech": "名詞" },
            { "japanese": "文房具", "english": "stationery", "partOfSpeech": "名詞" },
            { "japanese": "静止した状態", "english": "stationary", "partOfSpeech": "名詞" },
            { "japanese": "耳鼻咽喉科", "english": "Otorhinolaryngology", "partOfSpeech": "名詞" },
            { "japanese": "輪っかの形をしたサンゴ礁", "english": "atoll", "partOfSpeech": "名詞" },
            { "japanese": "心臓の、心臓血管の", "english": "cardiovascular", "partOfSpeech": "形容詞" },
            { "japanese": "長い単語恐怖症", "english": "hippopotomonstrosesquippedaliophobia", "partOfSpeech": "名詞" },
            { "japanese": "乾杯する（３文字）", "english": "make a toast" },
            { "japanese": "漆、漆器", "english": "japan" },
            { "japanese": "書く", "english": "pen" },
        ]
    };

    // ゲームの状態を管理する変数
    let score = 0;
    let lives = 3;
    let timeLeft = 25;
    let currentQuestionIndex = 0;
    let timer;
    let selectedQuestions = [];
    let currentMode = '';

    // HTML要素の取得
    const homeScreen = document.getElementById("home-screen");
    const gameScreen = document.getElementById("game-screen");
    const gameOverScreen = document.getElementById("game-over-screen");
    const gameClearScreen = document.getElementById("game-clear-screen");

    const modeButtons = document.querySelectorAll("#home-screen button");
    const startButton = document.getElementById("start-button");
    const returnHomeButton = document.getElementById("return-home-button");
    const returnHomeButtonClear = document.getElementById("return-home-button-clear");
    const inputElement = document.getElementById("input");
    const wordElement = document.getElementById("word");
    const partOfSpeechElement = document.getElementById("part-of-speech");
    const scoreElement = document.getElementById("score");
    const livesElement = document.getElementById("lives");
    const timerElement = document.getElementById("timer");
    const questionPlaceholder = document.getElementById("question-placeholder");
    const modeTitleElement = document.getElementById("mode-title");
    const finalScoreElement = document.getElementById("final-score");
    const finalScoreClearElement = document.getElementById("final-score-clear");

    // モード選択ボタンのイベントリスナー
    modeButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentMode = button.dataset.mode;
            homeScreen.style.display = "none";
            gameScreen.style.display = "block";
            modeTitleElement.textContent = button.textContent; // タイトルをモード名に設定
        });
    });

    // ゲームスタート
    startButton.addEventListener("click", startGame);

    // ホームに戻る (ゲームオーバー画面から)
    returnHomeButton.addEventListener("click", resetGame);

    // ホームに戻る (ゲームクリア画面から)
    returnHomeButtonClear.addEventListener("click", resetGame);

    function resetGame() {
        // 画面の表示を切り替え
        gameOverScreen.style.display = "none";
        gameClearScreen.style.display = "none";
        gameScreen.style.display = "none";
        homeScreen.style.display = "block";

        // ゲームの状態を初期化
        score = 0;
        lives = 3;
        timeLeft = 25;
        currentQuestionIndex = 0;
        selectedQuestions = [];
        if (timer) {
            clearInterval(timer);
        }

        // UIを初期状態に戻す
        scoreElement.textContent = `スコア: ${score}`;
        livesElement.textContent = `ライフ: ${lives}`;
        timerElement.textContent = `残り時間: ${timeLeft}秒`;
        inputElement.value = '';
        inputElement.disabled = true;
        startButton.style.display = "block";
        questionPlaceholder.style.display = "block";
        wordElement.textContent = '';
        partOfSpeechElement.textContent = '';
    }

    function startGame() {
        score = 0;
        lives = 3;
        currentQuestionIndex = 0;
        selectedQuestions = getRandomQuestions(currentMode);
        updateUI();
        showQuestion();
        startTimer();
        inputElement.disabled = false;
        inputElement.focus();
        startButton.style.display = "none";
        questionPlaceholder.style.display = "none";
    }

    function getRandomQuestions(mode) {
        const questionsForMode = allQuestions[mode];
        const shuffledQuestions = [...questionsForMode].sort(() => 0.5 - Math.random());
        return shuffledQuestions.slice(0, 5);
    }

    function showQuestion() {
        if (currentQuestionIndex >= 5) {
            showGameClearScreen();
            return;
        }

        const question = selectedQuestions[currentQuestionIndex];
        wordElement.textContent = question.japanese;
        partOfSpeechElement.textContent = question.partOfSpeech;
        inputElement.value = '';
    }

    function updateUI() {
        scoreElement.textContent = `スコア: ${score}`;
        livesElement.textContent = `ライフ: ${lives}`;
        timerElement.textContent = `残り時間: ${timeLeft}秒`;
    }

    function startTimer() {
        timeLeft = 25;
        timerElement.textContent = `残り時間: ${timeLeft}秒`;
        timer = setInterval(() => {
            timeLeft--;
            timerElement.textContent = `残り時間: ${timeLeft}秒`;
            if (timeLeft <= 0) {
                clearInterval(timer);
                handleTimeUp();
            }
        }, 1000);
    }

    function handleTimeUp() {
    // タイムアップ時は、不正解として扱う
    handleIncorrectAnswer();
}

    inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        // タイマーを止めて、入力された答えをチェックする
        clearInterval(timer);
        checkAnswer(inputElement.value);
    }
});

    function checkAnswer(answer) {
        const question = selectedQuestions[currentQuestionIndex];
        if (answer.toLowerCase() === question.english.toLowerCase()) {
            handleCorrectAnswer();
        } else {
            handleIncorrectAnswer();
        }
    }

    function handleCorrectAnswer() {
        const timeSpent = 25 - timeLeft;
        if (timeSpent <= 5) {
            score += 20;
        } else if (timeSpent <= 15) {
            score += 15;
        } else {
            score += 10;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < 5) {
            showQuestion();
            startTimer();
        } else {
            showGameClearScreen();
        }
        updateUI();
    }

    function handleIncorrectAnswer() {
        lives--;
        if (lives <= 0) {
            showGameOverScreen();
        } else {
            currentQuestionIndex++;
            if (currentQuestionIndex < 5) {
                showQuestion();
                startTimer();
            }
            updateUI();
        }
    }

    function showGameOverScreen() {
        gameScreen.style.display = "none";
        gameOverScreen.style.display = "block";
        finalScoreElement.textContent = `あなたのスコアは ${score} 点です！`;
    }

    function showGameClearScreen() {
        gameScreen.style.display = "none";
        gameClearScreen.style.display = "block";
        finalScoreClearElement.textContent = `あなたのスコアは ${score} 点です！`;
    }
});
