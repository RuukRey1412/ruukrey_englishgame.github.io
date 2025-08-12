document.addEventListener('DOMContentLoaded', () => {
    // 問題のデータ（各モードの単語リストをまとめる）
    const allQuestions = {
        kiso_kudoushi: [
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
        kichiku_kudoushi: [
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
        kichiku_eitan: [
            { "japanese": "生の", "english": "raw", "partOfSpeech": "形容詞" },
            { "japanese": "法律", "english": "law", "partOfSpeech": "名詞" },
            { "japanese": "列", "english": "row", "partOfSpeech": "名詞" },
            { "japanese": "低い", "english": "low", "partOfSpeech": "形容詞" },
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
            { "japanese": "乾杯する", "english": "make a toast", "partOfSpeech": "句動詞" },
            { "japanese": "漆、漆器", "english": "japan", "partOfSpeech": "名詞" },
            { "japanese": "書く", "english": "pen", "partOfSpeech": "動詞" },
            { "japanese": "弱まる、減少する", "english": "Abate", "partOfSpeech": "動詞" },
            { "japanese": "黙諾する、同意する", "english": "Acquiesce", "partOfSpeech": "動詞" },
            { "japanese": "忠告する、注意する", "english": "Admonish", "partOfSpeech": "動詞" },
            { "japanese": "合併する、融合する", "english": "Amalgamate", "partOfSpeech": "動詞" },
            { "japanese": "補助的な、従属的な", "english": "Ancillary", "partOfSpeech": "形容詞" },
            { "japanese": "任意の、独断的な", "english": "Arbitrary", "partOfSpeech": "形容詞" },
            { "japanese": "困難な、骨の折れる", "english": "Arduous", "partOfSpeech": "形容詞" },
            { "japanese": "勤勉な、入念な", "english": "Assiduous", "partOfSpeech": "形容詞" },
            { "japanese": "緊縮、厳格さ", "english": "Austerity", "partOfSpeech": "名詞" },
            { "japanese": "陳腐な、ありふれた", "english": "Banal", "partOfSpeech": "形容詞" },
            { "japanese": "慈悲深い、寛大な", "english": "Benevolent", "partOfSpeech": "形容詞" },
            { "japanese": "簡潔さ", "english": "Brevity", "partOfSpeech": "名詞" },
            { "japanese": "気まぐれな", "english": "Capricious", "partOfSpeech": "形容詞" },
            { "japanese": "推測、憶測", "english": "Conjecture", "partOfSpeech": "名詞" },
            { "japanese": "信用、信頼", "english": "Credence", "partOfSpeech": "名詞" },
            { "japanese": "描写する、詳しく述べる", "english": "Delineate", "partOfSpeech": "動詞" },
            { "japanese": "異種の、まったく異なる", "english": "Disparate", "partOfSpeech": "形容詞" },
            { "japanese": "普及させる、広める", "english": "Disseminate", "partOfSpeech": "動詞" },
            { "japanese": "疑わしい、怪しい", "english": "Dubious", "partOfSpeech": "形容詞" },
            { "japanese": "引き出す、誘発する", "english": "Elicit", "partOfSpeech": "動詞" },
            { "japanese": "短命な、はかない", "english": "Ephemeral", "partOfSpeech": "形容詞" },
            { "japanese": "悪化させる、いらだたせる", "english": "Exacerbate", "partOfSpeech": "動詞" },
            { "japanese": "誤った、欺瞞的な", "english": "Fallacious", "partOfSpeech": "形容詞" },
            { "japanese": "異種の、多様な", "english": "Heterogeneous", "partOfSpeech": "形容詞" },
            { "japanese": "これまで、今までに", "english": "Hitherto", "partOfSpeech": "副詞" },
            { "japanese": "不変の、変更できない", "english": "Immutable", "partOfSpeech": "形容詞" },
            { "japanese": "行き詰まり、膠着状態", "english": "Impasse", "partOfSpeech": "名詞" },
            { "japanese": "不釣り合いな、場違いな", "english": "Incongruous", "partOfSpeech": "形容詞" },
            { "japanese": "曖昧にする、混乱させる", "english": "Obfuscate", "partOfSpeech": "動詞" },
            { "japanese": "拒絶する、否認する", "english": "Repudiate", "partOfSpeech": "動詞" }
        ],
        toeic500: [
  { "japanese": "受け入れる", "english": "accept", "part_of_speech": "v." },
  { "japanese": "出席する", "english": "attend", "part_of_speech": "v." },
  { "japanese": "購入する", "english": "purchase", "part_of_speech": "v." },
  { "japanese": "提供する", "english": "provide", "part_of_speech": "v." },
  { "japanese": "受け取る", "english": "receive", "part_of_speech": "v." },
  { "japanese": "従う", "english": "follow", "part_of_speech": "v." },
  { "japanese": "含む", "english": "include", "part_of_speech": "v." },
  { "japanese": "改善する", "english": "improve", "part_of_speech": "v." },
  { "japanese": "提供する", "english": "offer", "part_of_speech": "v." },
  { "japanese": "同意する", "english": "agree", "part_of_speech": "v." },
  { "japanese": "要求する", "english": "require", "part_of_speech": "v." },
  { "japanese": "見つける", "english": "find", "part_of_speech": "v." },
  { "japanese": "予期する", "english": "expect", "part_of_speech": "v." },
  { "japanese": "返す", "english": "return", "part_of_speech": "v." },
  { "japanese": "手配する", "english": "arrange", "part_of_speech": "v." },
  { "japanese": "連絡する", "english": "contact", "part_of_speech": "v." },
  { "japanese": "議論する", "english": "discuss", "part_of_speech": "v." },
  { "japanese": "予約する", "english": "reserve", "part_of_speech": "v." },
  { "japanese": "完了する", "english": "complete", "part_of_speech": "v." },
  { "japanese": "作成する", "english": "create", "part_of_speech": "v." },
  { "japanese": "設立する", "english": "establish", "part_of_speech": "v." },
  { "japanese": "増やす", "english": "increase", "part_of_speech": "v." },
  { "japanese": "確認する", "english": "check", "part_of_speech": "v." },
  { "japanese": "推薦する", "english": "recommend", "part_of_speech": "v." },
  { "japanese": "働く", "english": "work", "part_of_speech": "v." },
  { "japanese": "動かす", "english": "move", "part_of_speech": "v." },
  { "japanese": "注文する", "english": "order", "part_of_speech": "v." },
  { "japanese": "支払う", "english": "pay", "part_of_speech": "v." },
  { "japanese": "使う", "english": "use", "part_of_speech": "v." },
  { "japanese": "計画する", "english": "plan", "part_of_speech": "v." },
  { "japanese": "与える", "english": "give", "part_of_speech": "v." },
  { "japanese": "持つ", "english": "have", "part_of_speech": "v." },
  { "japanese": "知っている", "english": "know", "part_of_speech": "v." },
  { "japanese": "作る", "english": "make", "part_of_speech": "v." },
  { "japanese": "取る", "english": "take", "part_of_speech": "v." },
  { "japanese": "必要とする", "english": "need", "part_of_speech": "v." },
  { "japanese": "開ける", "english": "open", "part_of_speech": "v." },
  { "japanese": "閉める", "english": "close", "part_of_speech": "v." },
  { "japanese": "送る", "english": "send", "part_of_speech": "v." },
  { "japanese": "見せる", "english": "show", "part_of_speech": "v." },
  { "japanese": "伝える", "english": "tell", "part_of_speech": "v." },
  { "japanese": "訪れる", "english": "visit", "part_of_speech": "v." },
  { "japanese": "待つ", "english": "wait", "part_of_speech": "v." },
  { "japanese": "尋ねる", "english": "ask", "part_of_speech": "v." },
  { "japanese": "答える", "english": "answer", "part_of_speech": "v." },
  { "japanese": "持ってくる", "english": "bring", "part_of_speech": "v." },
  { "japanese": "建てる", "english": "build", "part_of_speech": "v." },
  { "japanese": "買う", "english": "buy", "part_of_speech": "v." },
  { "japanese": "電話する", "english": "call", "part_of_speech": "v." },
  { "japanese": "取り消す", "english": "cancel", "part_of_speech": "v." },
  { "japanese": "変える", "english": "change", "part_of_speech": "v." },
  { "japanese": "選ぶ", "english": "choose", "part_of_speech": "v." },
  { "japanese": "掃除する", "english": "clean", "part_of_speech": "v." },
  { "japanese": "集める", "english": "collect", "part_of_speech": "v." },
  { "japanese": "続ける", "english": "continue", "part_of_speech": "v." },
  { "japanese": "コピーする", "english": "copy", "part_of_speech": "v." },
  { "japanese": "決定する", "english": "decide", "part_of_speech": "v." },
  { "japanese": "配達する", "english": "deliver", "part_of_speech": "v." },
  { "japanese": "開発する", "english": "develop", "part_of_speech": "v." },
  { "japanese": "分ける", "english": "divide", "part_of_speech": "v." },
  { "japanese": "入る", "english": "enter", "part_of_speech": "v." },
  { "japanese": "終える", "english": "finish", "part_of_speech": "v." },
  { "japanese": "忘れる", "english": "forget", "part_of_speech": "v." },
  { "japanese": "得る", "english": "get", "part_of_speech": "v." },
  { "japanese": "手伝う", "english": "help", "part_of_speech": "v." },
  { "japanese": "学ぶ", "english": "learn", "part_of_speech": "v." },
  { "japanese": "去る", "english": "leave", "part_of_speech": "v." },
  { "japanese": "聞く", "english": "listen", "part_of_speech": "v." },
  { "japanese": "住む", "english": "live", "part_of_speech": "v." },
  { "japanese": "見る", "english": "look", "part_of_speech": "v." },
  { "japanese": "失う", "english": "lose", "part_of_speech": "v." },
  { "japanese": "会う", "english": "meet", "part_of_speech": "v." },
  { "japanese": "開く", "english": "open", "part_of_speech": "v." },
  { "japanese": "荷造りする", "english": "pack", "part_of_speech": "v." },
  { "japanese": "準備する", "english": "prepare", "part_of_speech": "v." },
  { "japanese": "約束する", "english": "promise", "part_of_speech": "v." },
  { "japanese": "読む", "english": "read", "part_of_speech": "v." },
  { "japanese": "覚えている", "english": "remember", "part_of_speech": "v." },
  { "japanese": "借りる", "english": "rent", "part_of_speech": "v." },
  { "japanese": "売る", "english": "sell", "part_of_speech": "v." },
  { "japanese": "署名する", "english": "sign", "part_of_speech": "v." },
  { "japanese": "話す", "english": "speak", "part_of_speech": "v." },
  { "japanese": "始める", "english": "start", "part_of_speech": "v." },
  { "japanese": "止める", "english": "stop", "part_of_speech": "v." },
  { "japanese": "勉強する", "english": "study", "part_of_speech": "v." },
  { "japanese": "提案する", "english": "suggest", "part_of_speech": "v." },
  { "japanese": "会議", "english": "meeting", "part_of_speech": "n." },
  { "japanese": "従業員", "english": "employee", "part_of_speech": "n." },
  { "japanese": "顧客", "english": "client", "part_of_speech": "n." },
  { "japanese": "客", "english": "customer", "part_of_speech": "n." },
  { "japanese": "情報", "english": "information", "part_of_speech": "n." },
  { "japanese": "報告書", "english": "report", "part_of_speech": "n." },
  { "japanese": "会社", "english": "company", "part_of_speech": "n." },
  { "japanese": "オフィス", "english": "office", "part_of_speech": "n." },
  { "japanese": "時間", "english": "time", "part_of_speech": "n." },
  { "japanese": "日付", "english": "date", "part_of_speech": "n." },
  { "japanese": "価格", "english": "price", "part_of_speech": "n." },
  { "japanese": "費用", "english": "cost", "part_of_speech": "n." },
  { "japanese": "予定", "english": "schedule", "part_of_speech": "n." },
  { "japanese": "締め切り", "english": "deadline", "part_of_speech": "n." },
  { "japanese": "製品", "english": "product", "part_of_speech": "n." },
  { "japanese": "サービス", "english": "service", "part_of_speech": "n." },
  { "japanese": "部署", "english": "department", "part_of_speech": "n." },
  { "japanese": "管理者", "english": "manager", "part_of_speech": "n." },
  { "japanese": "スタッフ", "english": "staff", "part_of_speech": "n." },
  { "japanese": "チーム", "english": "team", "part_of_speech": "n." },
  { "japanese": "お金", "english": "money", "part_of_speech": "n." },
  { "japanese": "支払い", "english": "payment", "part_of_speech": "n." },
  { "japanese": "要求", "english": "request", "part_of_speech": "n." },
  { "japanese": "質問", "english": "question", "part_of_speech": "n." },
  { "japanese": "問題", "english": "problem", "part_of_speech": "n." },
  { "japanese": "結果", "english": "result", "part_of_speech": "n." },
  { "japanese": "週", "english": "week", "part_of_speech": "n." },
  { "japanese": "月", "english": "month", "part_of_speech": "n." },
  { "japanese": "年", "english": "year", "part_of_speech": "n." },
  { "japanese": "契約", "english": "contract", "part_of_speech": "n." },
  { "japanese": "書類", "english": "document", "part_of_speech": "n." },
  { "japanese": "用紙", "english": "form", "part_of_speech": "n." },
  { "japanese": "申込書", "english": "application", "part_of_speech": "n." },
  { "japanese": "チケット", "english": "ticket", "part_of_speech": "n." },
  { "japanese": "予約", "english": "reservation", "part_of_speech": "n." },
  { "japanese": "住所", "english": "address", "part_of_speech": "n." },
  { "japanese": "メール", "english": "email", "part_of_speech": "n." },
  { "japanese": "電話", "english": "phone", "part_of_speech": "n." },
  { "japanese": "ウェブサイト", "english": "website", "part_of_speech": "n." },
  { "japanese": "手紙", "english": "letter", "part_of_speech": "n." },
  { "japanese": "小包", "english": "package", "part_of_speech": "n." },
  { "japanese": "ニュース", "english": "news", "part_of_speech": "n." },
  { "japanese": "メッセージ", "english": "message", "part_of_speech": "n." },
  { "japanese": "請求書", "english": "bill", "part_of_speech": "n." },
  { "japanese": "小切手", "english": "check", "part_of_speech": "n." },
  { "japanese": "贈り物", "english": "gift", "part_of_speech": "n." },
  { "japanese": "昼食", "english": "lunch", "part_of_speech": "n." },
  { "japanese": "夕食", "english": "dinner", "part_of_speech": "n." },
  { "japanese": "朝食", "english": "breakfast", "part_of_speech": "n." },
  { "japanese": "コーヒー", "english": "coffee", "part_of_speech": "n." },
  { "japanese": "水", "english": "water", "part_of_speech": "n." },
  { "japanese": "食事", "english": "meal", "part_of_speech": "n." },
  { "japanese": "食べ物", "english": "food", "part_of_speech": "n." },
  { "japanese": "ホテル", "english": "hotel", "part_of_speech": "n." },
  { "japanese": "部屋", "english": "room", "part_of_speech": "n." },
  { "japanese": "建物", "english": "building", "part_of_speech": "n." },
  { "japanese": "空港", "english": "airport", "part_of_speech": "n." },
  { "japanese": "電車", "english": "train", "part_of_speech": "n." },
  { "japanese": "バス", "english": "bus", "part_of_speech": "n." },
  { "japanese": "タクシー", "english": "taxi", "part_of_speech": "n." },
  { "japanese": "車", "english": "car", "part_of_speech": "n." },
  { "japanese": "地図", "english": "map", "part_of_speech": "n." },
  { "japanese": "都市", "english": "city", "part_of_speech": "n." },
  { "japanese": "町", "english": "town", "part_of_speech": "n." },
  { "japanese": "国", "english": "country", "part_of_speech": "n." },
  { "japanese": "公園", "english": "park", "part_of_speech": "n." },
  { "japanese": "学校", "english": "school", "part_of_speech": "n." },
  { "japanese": "店", "english": "store", "part_of_speech": "n." },
  { "japanese": "スーパー", "english": "supermarket", "part_of_speech": "n." },
  { "japanese": "市場", "english": "market", "part_of_speech": "n." },
  { "japanese": "銀行", "english": "bank", "part_of_speech": "n." },
  { "japanese": "ビジネス", "english": "business", "part_of_speech": "n." },
  { "japanese": "仕事", "english": "job", "part_of_speech": "n." },
  { "japanese": "作業", "english": "work", "part_of_speech": "n." },
  { "japanese": "企画", "english": "project", "part_of_speech": "n." },
  { "japanese": "職務", "english": "position", "part_of_speech": "n." },
  { "japanese": "成功", "english": "success", "part_of_speech": "n." },
  { "japanese": "失敗", "english": "failure", "part_of_speech": "n." },
  { "japanese": "未来", "english": "future", "part_of_speech": "n." },
  { "japanese": "計画", "english": "plan", "part_of_speech": "n." },
  { "japanese": "目標", "english": "goal", "part_of_speech": "n." },
  { "japanese": "考え", "english": "idea", "part_of_speech": "n." },
  { "japanese": "意見", "english": "opinion", "part_of_speech": "n." },
  { "japanese": "間違い", "english": "mistake", "part_of_speech": "n." },
  { "japanese": "新しい", "english": "new", "part_of_speech": "adj." },
  { "japanese": "古い", "english": "old", "part_of_speech": "adj." },
  { "japanese": "良い", "english": "good", "part_of_speech": "adj." },
  { "japanese": "悪い", "english": "bad", "part_of_speech": "adj." },
  { "japanese": "大きい", "english": "big", "part_of_speech": "adj." },
  { "japanese": "小さい", "english": "small", "part_of_speech": "adj." },
  { "japanese": "高い", "english": "high", "part_of_speech": "adj." },
  { "japanese": "低い", "english": "low", "part_of_speech": "adj." },
  { "japanese": "速い", "english": "fast", "part_of_speech": "adj." },
  { "japanese": "遅い", "english": "slow", "part_of_speech": "adj." },
  { "japanese": "簡単な", "english": "easy", "part_of_speech": "adj." },
  { "japanese": "難しい", "english": "difficult", "part_of_speech": "adj." },
  { "japanese": "無料の", "english": "free", "part_of_speech": "adj." },
  { "japanese": "いっぱいの", "english": "full", "part_of_speech": "adj." },
  { "japanese": "重要な", "english": "important", "part_of_speech": "adj." },
  { "japanese": "必要な", "english": "necessary", "part_of_speech": "adj." },
  { "japanese": "準備ができた", "english": "ready", "part_of_speech": "adj." },
  { "japanese": "利用できる", "english": "available", "part_of_speech": "adj." },
  { "japanese": "確信して", "english": "sure", "part_of_speech": "adj." },
  { "japanese": "異なる", "english": "different", "part_of_speech": "adj." },
  { "japanese": "同じ", "english": "same", "part_of_speech": "adj." },
  { "japanese": "早い", "english": "early", "part_of_speech": "adj." },
  { "japanese": "遅い", "english": "late", "part_of_speech": "adj." },
  { "japanese": "いつも", "english": "always", "part_of_speech": "adv." },
  { "japanese": "決して〜ない", "english": "never", "part_of_speech": "adv." },
  { "japanese": "しばしば", "english": "often", "part_of_speech": "adv." },
  { "japanese": "時々", "english": "sometimes", "part_of_speech": "adv." },
  { "japanese": "すぐに", "english": "soon", "part_of_speech": "adv." },
  { "japanese": "上手に", "english": "well", "part_of_speech": "adv." },
  { "japanese": "すべての", "english": "all", "part_of_speech": "det." },
  { "japanese": "いくつかの", "english": "any", "part_of_speech": "det." },
  { "japanese": "それぞれの", "english": "each", "part_of_speech": "det." },
  { "japanese": "毎〜", "english": "every", "part_of_speech": "det." },
  { "japanese": "多くの", "english": "many", "part_of_speech": "det." },
  { "japanese": "多くの", "english": "much", "part_of_speech": "det." },
  { "japanese": "いくつかの", "english": "some", "part_of_speech": "det." },
  { "japanese": "たくさんの", "english": "a lot of", "part_of_speech": "expr." },
  { "japanese": "いくつかの", "english": "a few", "part_of_speech": "expr." },
  { "japanese": "少しの", "english": "a little", "part_of_speech": "expr." },
  { "japanese": "もう一つの", "english": "another", "part_of_speech": "det." },
  { "japanese": "他の", "english": "other", "part_of_speech": "det." }
],
        toeic600: [
  { "japanese": "確認する", "english": "confirm", "part_of_speech": "v." },
  { "japanese": "問い合わせる", "english": "inquire", "part_of_speech": "v." },
  { "japanese": "言及する", "english": "mention", "part_of_speech": "v." },
  { "japanese": "参加する", "english": "participate", "part_of_speech": "v." },
  { "japanese": "要求する", "english": "require", "part_of_speech": "v." },
  { "japanese": "要約する", "english": "summarize", "part_of_speech": "v." },
  { "japanese": "扱う", "english": "handle", "part_of_speech": "v." },
  { "japanese": "管理する", "english": "manage", "part_of_speech": "v." },
  { "japanese": "処理する", "english": "process", "part_of_speech": "v." },
  { "japanese": "調整する", "english": "adjust", "part_of_speech": "v." },
  { "japanese": "宣伝する", "english": "advertise", "part_of_speech": "v." },
  { "japanese": "任命する", "english": "appoint", "part_of_speech": "v." },
  { "japanese": "承認する", "english": "approve", "part_of_speech": "v." },
  { "japanese": "権限を与える", "english": "authorize", "part_of_speech": "v." },
  { "japanese": "取り消す", "english": "cancel", "part_of_speech": "v." },
  { "japanese": "不満を言う", "english": "complain", "part_of_speech": "v." },
  { "japanese": "対処する", "english": "deal with", "part_of_speech": "v." },
  { "japanese": "配布する", "english": "distribute", "part_of_speech": "v." },
  { "japanese": "評価する", "english": "evaluate", "part_of_speech": "v." },
  { "japanese": "上回る", "english": "exceed", "part_of_speech": "v." },
  { "japanese": "雇う", "english": "hire", "part_of_speech": "v." },
  { "japanese": "開始する", "english": "launch", "part_of_speech": "v." },
  { "japanese": "交渉する", "english": "negotiate", "part_of_speech": "v." },
  { "japanese": "操作する", "english": "operate", "part_of_speech": "v." },
  { "japanese": "組織する", "english": "organize", "part_of_speech": "v." },
  { "japanese": "準備する", "english": "prepare", "part_of_speech": "v." },
  { "japanese": "更新する", "english": "renew", "part_of_speech": "v." },
  { "japanese": "解決する", "english": "solve", "part_of_speech": "v." },
  { "japanese": "提出する", "english": "submit", "part_of_speech": "v." },
  { "japanese": "更新する", "english": "update", "part_of_speech": "v." },
  { "japanese": "確認する", "english": "verify", "part_of_speech": "v." },
  { "japanese": "引き出す", "english": "withdraw", "part_of_speech": "v." },
  { "japanese": "見積もる", "english": "estimate", "part_of_speech": "v." },
  { "japanese": "維持する", "english": "maintain", "part_of_speech": "v." },
  { "japanese": "参照する", "english": "refer to", "part_of_speech": "v." },
  { "japanese": "申し込む", "english": "sign up for", "part_of_speech": "v." },
  { "japanese": "開催される", "english": "take place", "part_of_speech": "v." },
  { "japanese": "探す", "english": "look for", "part_of_speech": "v." },
  { "japanese": "楽しみにする", "english": "look forward to", "part_of_speech": "v." },
  { "japanese": "監督する", "english": "oversee", "part_of_speech": "v." },
  { "japanese": "交換する", "english": "replace", "part_of_speech": "v." },
  { "japanese": "転送する", "english": "transfer", "part_of_speech": "v." },
  { "japanese": "受ける", "english": "undergo", "part_of_speech": "v." },
  { "japanese": "アップグレードする", "english": "upgrade", "part_of_speech": "v." },
  { "japanese": "明記する", "english": "specify", "part_of_speech": "v." },
  { "japanese": "監督する", "english": "supervise", "part_of_speech": "v." },
  { "japanese": "代表する", "english": "represent", "part_of_speech": "v." },
  { "japanese": "最終決定する", "english": "finalize", "part_of_speech": "v." },
  { "japanese": "転送する", "english": "forward", "part_of_speech": "v." },
  { "japanese": "延長する", "english": "extend", "part_of_speech": "v." },
  { "japanese": "排除する", "english": "eliminate", "part_of_speech": "v." },
  { "japanese": "約束", "english": "appointment", "part_of_speech": "n." },
  { "japanese": "会議", "english": "conference", "part_of_speech": "n." },
  { "japanese": "大会", "english": "convention", "part_of_speech": "n." },
  { "japanese": "書類", "english": "document", "part_of_speech": "n." },
  { "japanese": "機器", "english": "equipment", "part_of_speech": "n." },
  { "japanese": "施設", "english": "facility", "part_of_speech": "n." },
  { "japanese": "職務", "english": "position", "part_of_speech": "n." },
  { "japanese": "提案", "english": "proposal", "part_of_speech": "n." },
  { "japanese": "規則", "english": "regulation", "part_of_speech": "n." },
  { "japanese": "警備", "english": "security", "part_of_speech": "n." },
  { "japanese": "供給", "english": "supply", "part_of_speech": "n." },
  { "japanese": "保証", "english": "warranty", "part_of_speech": "n." },
  { "japanese": "領収書", "english": "receipt", "part_of_speech": "n." },
  { "japanese": "請求書", "english": "invoice", "part_of_speech": "n." },
  { "japanese": "口座", "english": "account", "part_of_speech": "n." },
  { "japanese": "利益", "english": "benefit", "part_of_speech": "n." },
  { "japanese": "予算", "english": "budget", "part_of_speech": "n." },
  { "japanese": "会社", "english": "company", "part_of_speech": "n." },
  { "japanese": "部署", "english": "department", "part_of_speech": "n." },
  { "japanese": "割引", "english": "discount", "part_of_speech": "n." },
  { "japanese": "料金", "english": "fee", "part_of_speech": "n." },
  { "japanese": "品目", "english": "item", "part_of_speech": "n." },
  { "japanese": "資料", "english": "material", "part_of_speech": "n." },
  { "japanese": "支払い", "english": "payment", "part_of_speech": "n." },
  { "japanese": "方針", "english": "policy", "part_of_speech": "n." },
  { "japanese": "過程", "english": "process", "part_of_speech": "n." },
  { "japanese": "企画", "english": "project", "part_of_speech": "n." },
  { "japanese": "昇進", "english": "promotion", "part_of_speech": "n." },
  { "japanese": "候補者", "english": "candidate", "part_of_speech": "n." },
  { "japanese": "契約", "english": "contract", "part_of_speech": "n." },
  { "japanese": "顧客", "english": "customer", "part_of_speech": "n." },
  { "japanese": "締め切り", "english": "deadline", "part_of_speech": "n." },
  { "japanese": "従業員", "english": "employee", "part_of_speech": "n." },
  { "japanese": "管理者", "english": "manager", "part_of_speech": "n." },
  { "japanese": "予定", "english": "schedule", "part_of_speech": "n." },
  { "japanese": "スタッフ", "english": "staff", "part_of_speech": "n." },
  { "japanese": "顧客", "english": "client", "part_of_speech": "n." },
  { "japanese": "同僚", "english": "colleague", "part_of_speech": "n." },
  { "japanese": "上司", "english": "supervisor", "part_of_speech": "n." },
  { "japanese": "アシスタント", "english": "assistant", "part_of_speech": "n." },
  { "japanese": "社内連絡", "english": "memo", "part_of_speech": "n." },
  { "japanese": "チラシ", "english": "flyer", "part_of_speech": "n." },
  { "japanese": "住所", "english": "address", "part_of_speech": "n." },
  { "japanese": "発表", "english": "announcement", "part_of_speech": "n." },
  { "japanese": "申込書", "english": "application", "part_of_speech": "n." },
  { "japanese": "パンフレット", "english": "brochure", "part_of_speech": "n." },
  { "japanese": "通知", "english": "notice", "part_of_speech": "n." },
  { "japanese": "注文", "english": "order", "part_of_speech": "n." },
  { "japanese": "小包", "english": "package", "part_of_speech": "n." },
  { "japanese": "発送", "english": "shipment", "part_of_speech": "n." },
  { "japanese": "報告書", "english": "report", "part_of_speech": "n." },
  { "japanese": "指示", "english": "instruction", "part_of_speech": "n." },
  { "japanese": "取扱説明書", "english": "manual", "part_of_speech": "n." },
  { "japanese": "用紙", "english": "form", "part_of_speech": "n." },
  { "japanese": "購読", "english": "subscription", "part_of_speech": "n." },
  { "japanese": "正確な", "english": "accurate", "part_of_speech": "adj." },
  { "japanese": "利用できる", "english": "available", "part_of_speech": "adj." },
  { "japanese": "便利な", "english": "convenient", "part_of_speech": "adj." },
  { "japanese": "効果的な", "english": "effective", "part_of_speech": "adj." },
  { "japanese": "効率的な", "english": "efficient", "part_of_speech": "adj." },
  { "japanese": "高価な", "english": "expensive", "part_of_speech": "adj." },
  { "japanese": "柔軟な", "english": "flexible", "part_of_speech": "adj." },
  { "japanese": "すぐに", "english": "immediately", "part_of_speech": "adv." },
  { "japanese": "最近", "english": "recently", "part_of_speech": "adv." },
  { "japanese": "まもなく", "english": "shortly", "part_of_speech": "adv." },
  { "japanese": "現在", "english": "currently", "part_of_speech": "adv." },
  { "japanese": "正式に", "english": "officially", "part_of_speech": "adv." },
  { "japanese": "頻繁に", "english": "frequently", "part_of_speech": "adv." },
  { "japanese": "完全に", "english": "fully", "part_of_speech": "adv." },
  { "japanese": "おそらく", "english": "likely", "part_of_speech": "adv." },
  { "japanese": "以前に", "english": "previously", "part_of_speech": "adv." },
  { "japanese": "迅速に", "english": "promptly", "part_of_speech": "adv." },
  { "japanese": "定期的に", "english": "regularly", "part_of_speech": "adv." },
  { "japanese": "すぐに", "english": "soon", "part_of_speech": "adv." },
  { "japanese": "残念ながら", "english": "unfortunately", "part_of_speech": "adv." },
  { "japanese": "成功した", "english": "successful", "part_of_speech": "adj." },
  { "japanese": "満足した", "english": "satisfied", "part_of_speech": "adj." },
  { "japanese": "一時的な", "english": "temporary", "part_of_speech": "adj." },
  { "japanese": "永続的な", "english": "permanent", "part_of_speech": "adj." },
  { "japanese": "〜が原因で", "english": "due to", "part_of_speech": "prep." },
  { "japanese": "事前に", "english": "in advance", "part_of_speech": "prep." },
  { "japanese": "時間通りに", "english": "on time", "part_of_speech": "prep." },
  { "japanese": "〜を担当して", "english": "in charge of", "part_of_speech": "prep." },
  { "japanese": "〜によると", "english": "according to", "part_of_speech": "prep." },
  { "japanese": "〜のために", "english": "because of", "part_of_speech": "prep." },
  { "japanese": "様々な", "english": "a variety of", "part_of_speech": "prep." },
  { "japanese": "〜に加えて", "english": "in addition to", "part_of_speech": "prep." },
  { "japanese": "〜を代表して", "english": "on behalf of", "part_of_speech": "prep." }
],
        toeic700: [
  { "japanese": "買収する", "english": "acquire", "part_of_speech": "v." },
  { "japanese": "割り当てる", "english": "allocate", "part_of_speech": "v." },
  { "japanese": "協力する", "english": "collaborate", "part_of_speech": "v." },
  { "japanese": "編集する", "english": "compile", "part_of_speech": "v." },
  { "japanese": "妥協する", "english": "compromise", "part_of_speech": "v." },
  { "japanese": "遂行する", "english": "conduct", "part_of_speech": "v." },
  { "japanese": "調整する", "english": "coordinate", "part_of_speech": "v." },
  { "japanese": "多角化する", "english": "diversify", "part_of_speech": "v." },
  { "japanese": "促進する", "english": "facilitate", "part_of_speech": "v." },
  { "japanese": "実行する", "english": "implement", "part_of_speech": "v." },
  { "japanese": "交渉する", "english": "negotiate", "part_of_speech": "v." },
  { "japanese": "最適化する", "english": "optimize", "part_of_speech": "v." },
  { "japanese": "延期する", "english": "postpone", "part_of_speech": "v." },
  { "japanese": "解決する", "english": "resolve", "part_of_speech": "v." },
  { "japanese": "規定する", "english": "stipulate", "part_of_speech": "v." },
  { "japanese": "明確に述べる", "english": "articulate", "part_of_speech": "v." },
  { "japanese": "評価する", "english": "assess", "part_of_speech": "v." },
  { "japanese": "補償する", "english": "compensate", "part_of_speech": "v." },
  { "japanese": "理解する", "english": "comprehend", "part_of_speech": "v." },
  { "japanese": "逸脱する", "english": "deviate", "part_of_speech": "v." },
  { "japanese": "網羅する", "english": "encompass", "part_of_speech": "v." },
  { "japanese": "支持する", "english": "endorse", "part_of_speech": "v." },
  { "japanese": "促進する", "english": "expedite", "part_of_speech": "v." },
  { "japanese": "変動する", "english": "fluctuate", "part_of_speech": "v." },
  { "japanese": "介入する", "english": "intervene", "part_of_speech": "v." },
  { "japanese": "危険にさらす", "english": "jeopardize", "part_of_speech": "v." },
  { "japanese": "訂正する", "english": "rectify", "part_of_speech": "v." },
  { "japanese": "維持する", "english": "sustain", "part_of_speech": "v." },
  { "japanese": "資産", "english": "asset", "part_of_speech": "n." },
  { "japanese": "資本", "english": "capital", "part_of_speech": "n." },
  { "japanese": "合意", "english": "consensus", "part_of_speech": "n." },
  { "japanese": "相違", "english": "discrepancy", "part_of_speech": "n." },
  { "japanese": "起業家", "english": "entrepreneur", "part_of_speech": "n." },
  { "japanese": "専門知識", "english": "expertise", "part_of_speech": "n." },
  { "japanese": "負債", "english": "liability", "part_of_speech": "n." },
  { "japanese": "合併", "english": "merger", "part_of_speech": "n." },
  { "japanese": "目標", "english": "objective", "part_of_speech": "n." },
  { "japanese": "ポートフォリオ", "english": "portfolio", "part_of_speech": "n." },
  { "japanese": "収益", "english": "revenue", "part_of_speech": "n." },
  { "japanese": "戦略", "english": "strategy", "part_of_speech": "n." },
  { "japanese": "子会社", "english": "subsidiary", "part_of_speech": "n." },
  { "japanese": "傾向", "english": "trend", "part_of_speech": "n." },
  { "japanese": "議題", "english": "agenda", "part_of_speech": "n." },
  { "japanese": "評価", "english": "assessment", "part_of_speech": "n." },
  { "japanese": "監査", "english": "audit", "part_of_speech": "n." },
  { "japanese": "共同作業", "english": "collaboration", "part_of_speech": "n." },
  { "japanese": "混雑", "english": "congestion", "part_of_speech": "n." },
  { "japanese": "論争", "english": "controversy", "part_of_speech": "n." },
  { "japanese": "基準", "english": "criterion", "part_of_speech": "n." },
  { "japanese": "主導権", "english": "initiative", "part_of_speech": "n." },
  { "japanese": "誠実さ", "english": "integrity", "part_of_speech": "n." },
  { "japanese": "物流", "english": "logistics", "part_of_speech": "n." },
  { "japanese": "士気", "english": "morale", "part_of_speech": "n." },
  { "japanese": "停止", "english": "outage", "part_of_speech": "n." },
  { "japanese": "視点", "english": "perspective", "part_of_speech": "n." },
  { "japanese": "必須条件", "english": "prerequisite", "part_of_speech": "n." },
  { "japanese": "基準", "english": "benchmark", "part_of_speech": "n." },
  { "japanese": "遵守", "english": "compliance", "part_of_speech": "n." },
  { "japanese": "信頼性", "english": "credibility", "part_of_speech": "n." },
  { "japanese": "赤字", "english": "deficit", "part_of_speech": "n." },
  { "japanese": "論争", "english": "dispute", "part_of_speech": "n." },
  { "japanese": "企業", "english": "enterprise", "part_of_speech": "n." },
  { "japanese": "予測", "english": "forecast", "part_of_speech": "n." },
  { "japanese": "動機", "english": "incentive", "part_of_speech": "n." },
  { "japanese": "法律", "english": "legislation", "part_of_speech": "n." },
  { "japanese": "対策", "english": "measure", "part_of_speech": "n." },
  { "japanese": "交渉", "english": "negotiation", "part_of_speech": "n." },
  { "japanese": "最高の", "english": "paramount", "part_of_speech": "adj." },
  { "japanese": "近接", "english": "proximity", "part_of_speech": "n." },
  { "japanese": "制裁", "english": "sanction", "part_of_speech": "n." },
  { "japanese": "包括的な", "english": "comprehensive", "part_of_speech": "adj." },
  { "japanese": "機密の", "english": "confidential", "part_of_speech": "adj." },
  { "japanese": "きわめて重要な", "english": "crucial", "part_of_speech": "adj." },
  { "japanese": "意図的な", "english": "deliberate", "part_of_speech": "adj." },
  { "japanese": "多様な", "english": "diverse", "part_of_speech": "adj." },
  { "japanese": "資格がある", "english": "eligible", "part_of_speech": "adj." },
  { "japanese": "実行可能な", "english": "feasible", "part_of_speech": "adj." },
  { "japanese": "必須の", "english": "imperative", "part_of_speech": "adj." },
  { "japanese": "革新的な", "english": "innovative", "part_of_speech": "adj." },
  { "japanese": "合法的な", "english": "legitimate", "part_of_speech": "adj." },
  { "japanese": "細心の注意を払った", "english": "meticulous", "part_of_speech": "adj." },
  { "japanese": "注目すべき", "english": "noteworthy", "part_of_speech": "adj." },
  { "japanese": "傑出した", "english": "prominent", "part_of_speech": "adj." },
  { "japanese": "評判の良い", "english": "reputable", "part_of_speech": "adj." },
  { "japanese": "仮の", "english": "tentative", "part_of_speech": "adj." },
  { "japanese": "最終的に", "english": "ultimately", "part_of_speech": "adv." },
  { "japanese": "実質的に", "english": "substantially", "part_of_speech": "adv." },
  { "japanese": "明確に", "english": "explicitly", "part_of_speech": "adv." },
  { "japanese": "暗に", "english": "implicitly", "part_of_speech": "adv." },
  { "japanese": "必然的に", "english": "inevitably", "part_of_speech": "adv." },
  { "japanese": "それぞれ", "english": "respectively", "part_of_speech": "adv." },
  { "japanese": "それに応じて", "english": "accordingly", "part_of_speech": "adv." },
  { "japanese": "振り返ってみると", "english": "in retrospect", "part_of_speech": "phrase" },
  { "japanese": "それどころか", "english": "on the contrary", "part_of_speech": "phrase" },
  { "japanese": "ぜひとも", "english": "by all means", "part_of_speech": "phrase" },
  { "japanese": "ある程度", "english": "to some extent", "part_of_speech": "phrase" },
  { "japanese": "偏見なく", "english": "without prejudice", "part_of_speech": "phrase" },
  { "japanese": "定期的に", "english": "on a regular basis", "part_of_speech": "phrase" }
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
    const delayBetweenQuestions = 500; // 答え表示から次の問題までの待ち時間 (2秒)

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
    const updateTextElement = document.getElementById("update-text");
    const correctAnswerElement = document.getElementById("correct-answer");

    // アップデート情報    
    const latestUpdate = {
        date: "2025年8月12日",
        version: "Ver. 1.1.1",
        notes: [
            "・３回正解するとゲームオーバーになる不具合を修正",
            "・次の問題に行くまでの時間を短縮 2s<<<0.5s",
             "・正解したときの得点を変更しました。15<<<10",
            "",
            "・正式リリースに伴い、一新しました。",
            "・「句動詞モード」「鬼畜句動詞モード」とTOIECの各レベル別モードを実装しました。",
            "・鬼畜モードを他モードと同じ仕様に変更。(以前の仕様にはいずれ戻します。)"
        ]
    };

    // ノート欄に情報を表示する関数
    function showUpdateNotes() {
        const notesHtml = latestUpdate.notes.map(note => `<li>${note}</li>`).join('');
        updateTextElement.innerHTML = `
            <strong>${latestUpdate.date} (${latestUpdate.version})</strong>
            <ul>${notesHtml}</ul>
        `;
    }

    // ページ読み込み時にアップデート情報を表示
    showUpdateNotes();

    // --- イベントリスナー ---

    // モード選択ボタンのイベントリスナー
    modeButtons.forEach(button => {
        button.addEventListener("click", () => {
            currentMode = button.dataset.mode;
            homeScreen.style.display = "none";
            gameScreen.style.display = "block";
            modeTitleElement.textContent = button.textContent;
            resetGameUI(); // ゲーム画面のUIを初期状態に戻す
        });
    });

    // ゲームスタートボタン
    startButton.addEventListener("click", startGame);

    // ホームに戻るボタン (ゲームオーバー画面から)
    returnHomeButton.addEventListener("click", resetGame);

    // ホームに戻るボタン (ゲームクリア画面から)
    returnHomeButtonClear.addEventListener("click", resetGame);

    // 入力欄でのキーイベント
    inputElement.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            clearInterval(timer);
            checkAnswer(inputElement.value);
        }
    });

    // --- ゲームロジックの関数群 ---

    // ゲーム全体をリセットしてホームに戻る
    function resetGame() {
        gameOverScreen.style.display = "none";
        gameClearScreen.style.display = "none";
        gameScreen.style.display = "none";
        homeScreen.style.display = "block";
        if (timer) {
            clearInterval(timer);
        }
        resetGameUI();
    }

    // ゲーム画面のUIを初期状態に戻す
    function resetGameUI() {
        score = 0;
        lives = 3;
        timeLeft = 25;
        currentQuestionIndex = 0;
        selectedQuestions = [];

        scoreElement.textContent = `スコア: ${score}`;
        livesElement.textContent = `ライフ: ${lives}`;
        timerElement.textContent = `残り時間: ${timeLeft}秒`;
        inputElement.value = '';
        inputElement.disabled = true;
        startButton.style.display = "block";
        questionPlaceholder.style.display = "block";
        wordElement.textContent = '';
        partOfSpeechElement.textContent = '';
        correctAnswerElement.style.display = 'none';
        correctAnswerElement.textContent = '';
    }

    function startGame() {
        // ゲーム開始時の変数を設定
        score = 0;
        currentQuestionIndex = 0;

        // モードによって初期設定を変える
        let questionCount = 5;
        if (currentMode === 'toeic500') {
            lives = 3;
            timeLeft = 25;
            questionCount = 5;
        } else if (currentMode === 'toeic600') {
            lives = 3;
            timeLeft = 20;
            questionCount = 5;
        } else if (currentMode === 'toeic700') {
            lives = 2;
            timeLeft = 20;
            questionCount = 5;
        } else { // その他のモード
            lives = 3;
            timeLeft = 25;
            questionCount = 5;
        }

        selectedQuestions = getRandomQuestions(currentMode, questionCount);

        // 問題数が足りない場合は処理を中断してホームに戻る
        if (selectedQuestions.length === 0) {
            alert("問題数が足りません。別のモードを選択してください。");
            resetGame();
            return;
        }

        updateUI();
        showQuestion();
        startTimer();
        inputElement.disabled = false;
        inputElement.focus();
        startButton.style.display = "none";
        questionPlaceholder.style.display = "none";
    }

    function getRandomQuestions(mode, count) {
        const questionsForMode = allQuestions[mode];
        if (!questionsForMode || questionsForMode.length < count) {
            console.error(`Not enough questions for mode: ${mode}. Needed ${count}, but found ${questionsForMode ? questionsForMode.length : 0}.`);
            return [];
        }
        const shuffledQuestions = [...questionsForMode].sort(() => 0.5 - Math.random());
        return shuffledQuestions.slice(0, count);
    }

    function showQuestion() {
        correctAnswerElement.style.display = 'none';
        correctAnswerElement.textContent = '';

        // 問題が尽きたら、新しい問題セットをロード
        if (currentQuestionIndex >= selectedQuestions.length) {
            selectedQuestions = getRandomQuestions(currentMode, 5);
            currentQuestionIndex = 0;
            // 問題リストが空の場合はゲームオーバー
            if (selectedQuestions.length === 0) {
                showGameOverScreen();
                return;
            }
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
        if (currentMode === 'toeic600' || currentMode === 'toeic700') {
            timeLeft = 20;
        } else {
            timeLeft = 25;
        }
        timerElement.textContent = `残り時間: ${timeLeft}秒`;
        if (timer) {
            clearInterval(timer);
        }
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
        handleIncorrectAnswer();
    }

    function checkAnswer(answer) {
        if (answer.trim() === '') {
            handleIncorrectAnswer();
            return;
        }
        const question = selectedQuestions[currentQuestionIndex];
        if (answer.toLowerCase() === question.english.toLowerCase()) {
            handleCorrectAnswer();
        } else {
            handleIncorrectAnswer();
        }
    }

    function handleCorrectAnswer() {
        const timeSpent = (currentMode === 'toeic600' || currentMode === 'toeic700') ? 20 - timeLeft : 25 - timeLeft;
        if (timeSpent <= 5) {
            score += 10;
        } else if (timeSpent <= 15) {
            score += 10;
        } else {
            score += 10;
        }
        currentQuestionIndex++;
        updateUI();

        setTimeout(() => {
            showQuestion();
            startTimer();
        }, delayBetweenQuestions);
    }

    function handleIncorrectAnswer() {
        lives--;
        const question = selectedQuestions[currentQuestionIndex];
        correctAnswerElement.textContent = `正解は: ${question.english}`;
        correctAnswerElement.style.display = 'block';
        updateUI();

        if (lives <= 0) {
            // ライフが0になったら即座にゲームオーバー
            showGameOverScreen();
        } else {
            currentQuestionIndex++;
            setTimeout(() => {
                showQuestion();
                startTimer();
            }, delayBetweenQuestions);
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
