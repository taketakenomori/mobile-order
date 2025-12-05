// ============================================================
// 画面の向きごとの 36 品メニューセット（カテゴリ付き）
// ============================================================
const MENUS = {
  portrait: [
    // バーガーショップ 36 品
    { id: "p1", name: "ハンバーガー", price: 300, category: "バーガー" },
    { id: "p2", name: "チーズバーガー", price: 340, category: "バーガー" },
    { id: "p3", name: "てりやきバーガー", price: 360, category: "バーガー" },
    { id: "p4", name: "フィッシュバーガー", price: 350, category: "バーガー" },
    { id: "p5", name: "ダブルバーガー", price: 420, category: "バーガー" },
    { id: "p6", name: "ベーコンレタスバーガー", price: 380, category: "バーガー" },
    { id: "p7", name: "チキンバーガー", price: 340, category: "バーガー" },
    { id: "p8", name: "スパイシーバーガー", price: 370, category: "バーガー" },
    { id: "p9", name: "和風バーガー", price: 380, category: "バーガー" },

    { id: "p10", name: "ポテトS", price: 200, category: "サイド" },
    { id: "p11", name: "ポテトM", price: 260, category: "サイド" },
    { id: "p12", name: "ポテトL", price: 320, category: "サイド" },
    { id: "p13", name: "チキンナゲット5個", price: 290, category: "サイド" },
    { id: "p14", name: "チキンナゲット10個", price: 520, category: "サイド" },
    { id: "p15", name: "サラダ", price: 260, category: "サイド" },
    { id: "p16", name: "コーンスープ", price: 260, category: "サイド" },

    { id: "p17", name: "コーラS", price: 180, category: "ドリンク" },
    { id: "p18", name: "コーラM", price: 220, category: "ドリンク" },
    { id: "p19", name: "オレンジジュースS", price: 180, category: "ドリンク" },
    { id: "p20", name: "オレンジジュースM", price: 220, category: "ドリンク" },
    { id: "p21", name: "ウーロン茶", price: 200, category: "ドリンク" },
    { id: "p22", name: "アイスコーヒーS", price: 200, category: "ドリンク" },
    { id: "p23", name: "アイスコーヒーM", price: 240, category: "ドリンク" },
    { id: "p24", name: "ホットコーヒー", price: 220, category: "ドリンク" },

    { id: "p25", name: "ミルク", price: 180, category: "デザート" },
    { id: "p26", name: "シェイク（バニラ）", price: 260, category: "デザート" },
    { id: "p27", name: "シェイク（チョコ）", price: 260, category: "デザート" },
    { id: "p28", name: "シェイク（イチゴ）", price: 260, category: "デザート" },
    { id: "p29", name: "ソフトクリーム", price: 220, category: "デザート" },
    { id: "p30", name: "アップルパイ", price: 230, category: "デザート" },
    { id: "p31", name: "チョコパイ", price: 230, category: "デザート" },
    { id: "p32", name: "サンデー（チョコ）", price: 260, category: "デザート" },
    { id: "p33", name: "サンデー（ストロベリー）", price: 260, category: "デザート" },

    { id: "p34", name: "ホットドッグ", price: 320, category: "その他" },
    { id: "p35", name: "チーズホットドッグ", price: 360, category: "その他" },
    { id: "p36", name: "キッズセット", price: 500, category: "その他" }
  ],

  landscape: [
    // イタリアン 36 品
    { id: "l1", name: "マルゲリータピザ", price: 680, category: "メイン" },
    { id: "l2", name: "ペパロニピザ", price: 720, category: "メイン" },
    { id: "l3", name: "4種のチーズピザ", price: 780, category: "メイン" },
    { id: "l4", name: "シーフードピザ", price: 780, category: "メイン" },
    { id: "l5", name: "照り焼きチキンピザ", price: 780, category: "メイン" },
    { id: "l6", name: "ベジタブルピザ", price: 700, category: "メイン" },

    { id: "l7", name: "カルボナーラパスタ", price: 720, category: "パスタ" },
    { id: "l8", name: "ミートソースパスタ", price: 680, category: "パスタ" },
    { id: "l9", name: "ペペロンチーノ", price: 660, category: "パスタ" },
    { id: "l10", name: "ボロネーゼ", price: 700, category: "パスタ" },

    { id: "l11", name: "グリーンサラダ", price: 260, category: "サラダ" },
    { id: "l12", name: "シーザーサラダ", price: 320, category: "サラダ" },

    { id: "l13", name: "ポテトフライ", price: 280, category: "サイド" },
    { id: "l14", name: "オニオンリング", price: 280, category: "サイド" },
    { id: "l15", name: "ガーリックトースト", price: 260, category: "サイド" },
    { id: "l16", name: "チキンフリット", price: 360, category: "サイド" },

    { id: "l17", name: "アイスティー", price: 220, category: "ドリンク" },
    { id: "l18", name: "レモネード", price: 260, category: "ドリンク" },
    { id: "l19", name: "ジンジャーエール", price: 240, category: "ドリンク" },
    { id: "l20", name: "グレープフルーツジュース", price: 260, category: "ドリンク" },

    { id: "l21", name: "カフェラテ", price: 320, category: "カフェ" },
    { id: "l22", name: "カプチーノ", price: 320, category: "カフェ" },
    { id: "l23", name: "ホットティー", price: 240, category: "カフェ" },
    { id: "l24", name: "エスプレッソ", price: 260, category: "カフェ" },

    { id: "l25", name: "レアチーズケーキ", price: 360, category: "デザート" },
    { id: "l26", name: "ガトーショコラ", price: 360, category: "デザート" },
    { id: "l27", name: "プリン", price: 280, category: "デザート" },
    { id: "l28", name: "ティラミス", price: 360, category: "デザート" },
    { id: "l29", name: "アイス盛り合わせ", price: 340, category: "デザート" },

    { id: "l30", name: "パンケーキ（メープル）", price: 420, category: "その他" },
    { id: "l31", name: "パンケーキ（ベリー）", price: 450, category: "その他" },
    { id: "l32", name: "ホットドッグ（チリ）", price: 380, category: "その他" },
    { id: "l33", name: "ソーセージ盛り合わせ", price: 520, category: "その他" },
    { id: "l34", name: "バーニャカウダ", price: 520, category: "その他" },
    { id: "l35", name: "アンチョビポテト", price: 360, category: "その他" },
    { id: "l36", name: "おつまみセット", price: 620, category: "その他" }
  ]
};

// ============================================================
// 状態管理
// ============================================================
const $ = (s) => document.querySelector(s);
const byId = (id) => document.getElementById(id);

const CONDITION_LABELS = {
  vv: "縦画面 × 縦スクロール",
  vh: "縦画面 × 横スクロール",
  hv: "横画面 × 縦スクロール",
  hh: "横画面 × 横スクロール"
};

let STATE = {
  conditionCode: "vv",
  orientation: "portrait",
  scrollDir: "vertical",
  currentProducts: [],
  quantities: {},
  startTime: null,
  endTime: null,
  participantId: "",
  // ⭐ スクロールログ
  scrollLogs: {
    count: 0,
    totalDistance: 0,
    lastPos: 0,
    maxPos: 0
  }
};

// ============================================================
// 条件解析 + 導入ストーリー切り替え
// ============================================================
function parseConditionFromURL() {
  const params = new URLSearchParams(window.location.search);
  const cond = (params.get("cond") || "vv").toLowerCase();

  let orientation = "portrait";
  let scrollDir = "vertical";

  switch (cond) {
    case "vv": orientation = "portrait";  scrollDir = "vertical";   break;
    case "vh": orientation = "portrait";  scrollDir = "horizontal"; break;
    case "hv": orientation = "landscape"; scrollDir = "vertical";   break;
    case "hh": orientation = "landscape"; scrollDir = "horizontal"; break;
  }

  STATE.conditionCode = cond;
  STATE.orientation = orientation;
  STATE.scrollDir = scrollDir;

  // メニュー切り替え
  STATE.currentProducts = MENUS[orientation];

  // CSS の切り替え用属性
  document.body.dataset.orientation = orientation;

  // メニュー領域にスクロール方向クラスを付与
  const pa = byId("productArea");
  pa.classList.remove("vertical", "horizontal");
  pa.classList.add(scrollDir);

  // 条件ラベル
  byId("condLabel").textContent = CONDITION_LABELS[cond];

  // ⭐ 導入ストーリー切り替え
  const introStory = byId("introStory");
  if (cond === "vv" || cond === "vh") {
    introStory.textContent =
      "あなたは今、お腹が空いてバーガーショップに来ています。\n" +
      "お店では、スマートフォンの画面を使って注文を行います。\n" +
      "画面に表示されるメニューの中から、\n" +
      "自分が食べたい・飲みたいと思うもの を自由にお選びください。";
  } else {
    introStory.textContent =
      "あなたは今、お腹が空いてイタリアンのレストランに来ています。\n" +
      "お店ではスマートフォンの画面を使って注文を行います。\n" +
      "画面に表示されるメニューの中から、\n" +
      "自分が食べたい・飲みたいと思うもの を自由にお選びください。";
  }
}

// ============================================================
// 商品カード生成
// ============================================================
function buildProductCards() {
  const container = byId("productArea");
  container.innerHTML = "";
  STATE.quantities = {};

  STATE.currentProducts.forEach(p => {
    STATE.quantities[p.id] = 0;

    const card = document.createElement("div");
    card.className = "product-card";

    const nameEl = document.createElement("div");
    nameEl.className = "product-name";
    nameEl.textContent = p.name;

    const priceEl = document.createElement("div");
    priceEl.className = "product-price";
    priceEl.textContent = `¥${p.price}`;

    const actions = document.createElement("div");
    actions.className = "product-actions";

    const qtyLabel = document.createElement("span");
    qtyLabel.className = "qty-label";
    qtyLabel.textContent = "数量";

    const controls = document.createElement("div");
    controls.className = "qty-controls";

    const btnMinus = document.createElement("button");
    btnMinus.type = "button";
    btnMinus.className = "qty-btn";
    btnMinus.textContent = "−";

    const qtyVal = document.createElement("span");
    qtyVal.className = "qty-value";
    qtyVal.textContent = "0";

    const btnPlus = document.createElement("button");
    btnPlus.type = "button";
    btnPlus.className = "qty-btn";
    btnPlus.textContent = "+";

    controls.appendChild(btnMinus);
    controls.appendChild(qtyVal);
    controls.appendChild(btnPlus);

    actions.appendChild(qtyLabel);
    actions.appendChild(controls);

    card.appendChild(nameEl);
    card.appendChild(priceEl);
    card.appendChild(actions);

    // 数量変更処理
    btnMinus.addEventListener("click", () => {
      const next = Math.max(0, (STATE.quantities[p.id] || 0) - 1);
      STATE.quantities[p.id] = next;
      qtyVal.textContent = String(next);
      refreshCartSummary();
    });

    btnPlus.addEventListener("click", () => {
      const next = (STATE.quantities[p.id] || 0) + 1;
      STATE.quantities[p.id] = next;
      qtyVal.textContent = String(next);
      refreshCartSummary();
    });

    container.appendChild(card);
  });
}

// ============================================================
// カート集計
// ============================================================
function refreshCartSummary() {
  let count = 0;
  let total = 0;

  for (const p of STATE.currentProducts) {
    const q = STATE.quantities[p.id] || 0;
    count += q;
    total += q * p.price;
  }

  byId("itemCount").textContent = String(count);
  byId("totalAmount").textContent = "¥" + total.toLocaleString();
}

// ============================================================
// 画面切り替え
// ============================================================
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  byId(id).classList.add("active");
}

// ============================================================
// 実験開始
// ============================================================
function startExperiment() {
  STATE.participantId = byId("participantId").value.trim();
  STATE.startTime = new Date();

  // スクロール位置 & ログをリセット
  const area = byId("productArea");
  area.scrollTop = 0;
  area.scrollLeft = 0;
  STATE.scrollLogs = {
    count: 0,
    totalDistance: 0,
    lastPos: 0,
    maxPos: 0
  };

  showScreen("screenMenu");
}

// ============================================================
// 終了処理（カテゴリ集計 + 所要時間 + スクロールログ）
// ============================================================
function finishExperiment() {
  STATE.endTime = new Date();

  let orders = [];
  let total = 0;
  let totalItems = 0;

  // 所要時間（秒）
  const durationMs  = STATE.endTime - STATE.startTime;
  const durationSec = (durationMs / 1000).toFixed(1);

  // カテゴリごとの個数を集計
  const categoryCounts = {};   // { "バーガー": 3, "ドリンク": 2, ... }

  STATE.currentProducts.forEach(p => {
    const q = STATE.quantities[p.id] || 0;
    if (q > 0) {
      orders.push({
        name: p.name,
        category: p.category,
        quantity: q,
        unit_price: p.price,
        subtotal: q * p.price
      });

      total += q * p.price;
      totalItems += q;

      if (!categoryCounts[p.category]) {
        categoryCounts[p.category] = 0;
      }
      categoryCounts[p.category] += q;
    }
  });

  const distinctCategoryCount = Object.keys(categoryCounts).length;
  const condLabel = CONDITION_LABELS[STATE.conditionCode] || "";

  // ===== フォーム用テキスト生成 =====
  let lines = [];
  lines.push("===== 実験結果 =====");
  lines.push(`参加者ID: ${STATE.participantId}`);
  lines.push(`条件: ${STATE.conditionCode}（${condLabel}）`);
  lines.push("");

  // ▼ 所要時間
  lines.push("▼ 所要時間");
  lines.push(`・${durationSec} 秒`);
  lines.push("");

  // ▼ スクロール行動
  lines.push("▼ スクロール行動");
  lines.push(`・スクロール回数: ${STATE.scrollLogs.count}`);
  lines.push(`・総スクロール距離(px): ${STATE.scrollLogs.totalDistance}`);
  lines.push(`・最大到達位置(px): ${STATE.scrollLogs.maxPos}`);
  lines.push("");

  // ▼ 注文内容
  lines.push("▼ 注文内容");
  if (orders.length === 0) {
    lines.push("・（なし）");
  } else {
    for (const o of orders) {
      lines.push(`・${o.name} ×${o.quantity}（¥${o.unit_price}）`);
    }
  }

  // ▼ 金額・点数
  lines.push("");
  lines.push("▼ 合計");
  lines.push(`・合計金額: ¥${total.toLocaleString()}`);
  lines.push(`・合計点数: ${totalItems}品`);

  // ▼ カテゴリ別個数
  lines.push("");
  lines.push("▼ カテゴリ別の個数");
  if (distinctCategoryCount === 0) {
    lines.push("・（なし）");
  } else {
    for (const [cat, cnt] of Object.entries(categoryCounts)) {
      lines.push(`・${cat}: ${cnt}品`);
    }
  }

  // ▼ 異なるカテゴリ数
  lines.push("");
  lines.push("▼ 注文したカテゴリの種類数");
  lines.push(`・${distinctCategoryCount} 種類`);

  byId("textOutput").textContent = lines.join("\n");

  showScreen("screenResult");
}

// ============================================================
// テキストコピー
// ============================================================
async function copyText() {
  const txt = byId("textOutput").textContent;
  if (!txt) return;

  try {
    await navigator.clipboard.writeText(txt);
    alert("コピーしました。Googleフォームに貼り付けてください。");
  } catch (e) {
    alert("コピーに失敗しました。手動でコピーしてください。");
  }
}

// ============================================================
// スクロールログのセットアップ
// ============================================================
function setupScrollLogging() {
  const area = byId("productArea");

  area.addEventListener("scroll", () => {
    // 条件に応じて縦 or 横の位置を使う
    const pos = (STATE.scrollDir === "vertical")
      ? area.scrollTop
      : area.scrollLeft;

    // 初回スクロール時は lastPos を現在位置に合わせる
    if (STATE.scrollLogs.count === 0) {
      STATE.scrollLogs.lastPos = pos;
    }

    const diff = Math.abs(pos - STATE.scrollLogs.lastPos);
    STATE.scrollLogs.totalDistance += diff;
    STATE.scrollLogs.lastPos = pos;
    STATE.scrollLogs.count += 1;

    if (pos > STATE.scrollLogs.maxPos) {
      STATE.scrollLogs.maxPos = pos;
    }
  });
}

// ============================================================
// 初期化処理
// ============================================================
window.addEventListener("DOMContentLoaded", () => {
  parseConditionFromURL();
  buildProductCards();
  refreshCartSummary();
  setupScrollLogging();

  byId("btnStart").addEventListener("click", startExperiment);
  byId("btnCheckout").addEventListener("click", finishExperiment);
  byId("btnCopyText").addEventListener("click", copyText);
});
