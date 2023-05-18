const businessModels = [
    {
    companyName: "アマゾン",
    customerSegment: "多様な顧客層",
    valueProposition: "幅広い選択肢",
    channels: "オンラインプラットフォーム",
    customerRelationships: "個別対応",
    revenueStreams: "商品販売・クラウド",
    keyPartners: "出品者・運送会社",
    keyResources: "ウェブサイト・物流",
    keyActivities: "在庫管理・物流",
    costStructure: "スケールメリット",
    },
    {
    companyName: "Airbnb",
    customerSegment: "旅行者・ホスト",
    valueProposition: "宿泊の多様性",
    channels: "オンラインプラットフォーム",
    customerRelationships: "ユーザーサポート",
    revenueStreams: "予約手数料",
    keyPartners: "ホスト・支払いプロセッサー",
    keyResources: "ウェブサイト・アプリ",
    keyActivities: "プラットフォーム運営",
    costStructure: "マッチング・マネジメント",
    },
    {
    companyName: "TSUTAYA",
    customerSegment: "映画・音楽ファン",
    valueProposition: "コンテンツの多様性",
    channels: "実店舗・オンラインサイト",
    customerRelationships: "会員サービス",
    revenueStreams: "レンタル・販売収入",
    keyPartners: "映画会社・レコード会社",
    keyResources: "映画・音楽コンテンツ",
    keyActivities: "販売・貸出・プロモーション",
    costStructure: "在庫管理・店舗運営",
    },
    {
    companyName: "パタゴニア",
    customerSegment: "アウトドア愛好家",
    valueProposition: "持続可能性・品質",
    channels: "専門店・オンライン",
    customerRelationships: "コミュニティ形成",
    revenueStreams: "製品販売・レンタル",
    keyPartners: "素材サプライヤー・非営利団体",
    keyResources: "環境保護活動・デザイン",
    keyActivities: "製造・ブランド啓発",
    costStructure: "持続可能性投資",
    },
    {
    companyName: "YouTube",
    customerSegment: "コンテンツクリエーター・視聴者",
    valueProposition: "動画コンテンツの無料視聴",
    channels: "オンラインプラットフォーム",
    customerRelationships: "コメント・共有機能",
    revenueStreams: "広告収入・プレミアム会員",
    keyPartners: "広告主・クリエーター",
    keyResources: "動画コンテンツ・技術基盤",
    keyActivities: "ホスティング・動画配信",
    costStructure: "サーバー・インフラ投資",
    },
    {
    companyName: "キーエンス",
    customerSegment: "技術者・研究者",
    valueProposition: "高品質測定・分析機器",
    channels: "販売代理店・直販",
    customerRelationships: "サポート・トレーニング",
    revenueStreams: "機器販売・アフターサービス",
    keyPartners: "流通パートナー・研究機関",
    keyResources: "技術・特許",
    keyActivities: "製造・開発・マーケティング",
    costStructure: "研究開発・生産コスト",
    },
    {
    companyName: "トヨタ",
    customerSegment: "普通車購入者",
    valueProposition: "品質・信頼性",
    channels: "自動車販売ディーラー",
    customerRelationships: "アフターサービス",
    revenueStreams: "自動車販売・アフターマーケット",
    keyPartners: "自動車部品メーカー",
    keyResources: "生産施設・技術",
    keyActivities: "自動車生産・研究開発",
    costStructure: "生産コスト・研究開発費用",
    },
    {
    companyName: "テスラ",
    customerSegment: "電気自動車愛好家",
    valueProposition: "高性能・環境に配慮",
    channels: "直販・オンライン販売",
    customerRelationships: "コミュニティ形成",
    revenueStreams: "車両販売・エネルギーサービス",
    keyPartners: "バッテリーサプライヤー・充電インフラ",
    keyResources: "電気自動車技術・生産施設",
    keyActivities: "自動車生産・技術開発",
    costStructure: "研究開発費用・生産コスト",
    },
    {
    companyName: "東京電力",
    customerSegment: "電力需要者",
    valueProposition: "安定供給・エネルギー提供",
    channels: "電力供給網・電力会社",
    customerRelationships: "カスタマーサービス",
    revenueStreams: "電力販売収入",
    keyPartners: "電力発電事業者・送配電事業者",
    keyResources: "発電施設・送配電網",
    keyActivities: "電力供給・エネルギー管理",
    costStructure: "燃料調達費・設備保守費",
    },
    {
    companyName: "スシロー",
    customerSegment: "一般消費者",
    valueProposition: "手頃な価格・回転寿司",
    channels: "レストラン店舗",
    customerRelationships: "フレンドリーサービス",
    revenueStreams: "飲食収入",
    keyPartners: "食材サプライヤー",
    keyResources: "レストラン施設・食材",
    keyActivities: "調理・提供・店舗運営",
    costStructure: "食材コスト・人件費",
    },
    // 他の企業のビジネスモデルを追加できます
];

let selectedCompanies = [];

  // ビジネスモデルテーブルの作成
function createBusinessModelTable() {
    command.textContent = "あなたの好きなビジネスモデルを複数選択してください。"
    const table = document.createElement("table");

    // ヘッダー行の作成
    const headerRow = document.createElement("tr");
    const headerLabels = [
    "companyName",
    "customerSegment",
    "valueProposition",
    "channels",
    "customerRelationships",
    "revenueStreams",
    "keyPartners",
    "keyResources",
    "keyActivities",
    "costStructure",
    ];

    headerLabels.forEach((label) => {
    const headerCell = document.createElement("th");
    headerCell.textContent = label;
    headerRow.appendChild(headerCell);
    });

    table.appendChild(headerRow);

    // ビジネスモデルデータの行を作成
    businessModels.forEach((model) => {
    const row = document.createElement("tr");

      // 企業名セルを作成
    const companyCell = document.createElement("td");
    const companyButton = document.createElement("button");
    companyButton.textContent = model.companyName;
    companyButton.addEventListener("click", () => {
        if (row.classList.contains("selected")) {
        row.classList.remove("selected");
        selectedCompanies = selectedCompanies.filter(
            (company) => company !== model
        );
        } else {
        row.classList.add("selected");
        selectedCompanies.push(model);
        }
        updateSelectedCompanies();
    });
    companyCell.appendChild(companyButton);
    row.appendChild(companyCell);

      // ビジネスモデルデータの列を作成
    Object.keys(model).forEach((key) => {
        if (key !== "companyName") {
        const cell = document.createElement("td");
        cell.textContent = model[key];
        row.appendChild(cell);
        }
    });

    table.appendChild(row);
    });

    return table;
}

  // 選択された企業名を表示
function updateSelectedCompanies() {
    const selectedCompaniesContainer = document.getElementById(
    "selectedCompanies"
    );
    selectedCompaniesContainer.innerHTML = "";
    const selectedCompaniesText = document.createElement("a");
    selectedCompaniesText.textContent = "選択された企業名: ";
    selectedCompaniesText.innerHTML += selectedCompanies
    .map((company) => company.companyName)
    .join(", ");
    selectedCompaniesContainer.appendChild(selectedCompaniesText);
}

  // 列の選択
function selectColumns() {
    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";

    selectedCompanies.length = 0;

    const table = createBusinessModelTable();

    tableContainer.appendChild(table);
}

  // イノベーションのテーブル作成
function createInnovationTable() {
    tablenote.textContent = "以下に示した内容はビジネスキャンバスにおけるある新しいビジネスモデルを表しています。"
    AIprompt.textContent = "このサービスがどのようなものなのか概要を50文字以内で答えて下さい。またそのサービス名も考えてください。";
    const tableContainer = document.getElementById("tableContainer");
    tableContainer.innerHTML = "";
    const innovationData = {
    companyName: "イノベーション",
    customerSegment: [],
    valueProposition: [],
    channels: [],
    customerRelationships: [],
    revenueStreams: [],
    keyPartners: [],
    keyResources: [],
    keyActivities: [],
    costStructure: [],
    };

    selectedCompanies.forEach((company) => {
    Object.keys(innovationData).forEach((key) => {
        if (key !== "companyName") {
        const values = company[key].split(",");
          const randomIndex = Math.floor(Math.random() * values.length);
        const selectedValue = values[randomIndex].trim();
        innovationData[key].push(selectedValue);
        }
    });
    });

    const table = document.createElement("table");

    // ヘッダー行の作成
    const headerRow = document.createElement("tr");
    const headerLabels = Object.keys(innovationData);

    headerLabels.forEach((label) => {
    const headerCell = document.createElement("th");
    headerCell.textContent = label;
    headerRow.appendChild(headerCell);
    });

    table.appendChild(headerRow);

    // データ行の作成
    const dataRow = document.createElement("tr");
    headerLabels.forEach((label) => {
    const cell = document.createElement("td");
    if (label === "companyName") {
        cell.textContent = innovationData[label];
    } else {
        const values = innovationData[label];
        const randomIndex = Math.floor(Math.random() * values.length);
        const selectedValue = values[randomIndex];
        cell.textContent = selectedValue;
    }
    dataRow.appendChild(cell);
    });

    table.appendChild(dataRow);

    tableContainer.appendChild(table);
}

