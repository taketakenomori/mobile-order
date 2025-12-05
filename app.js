// ================================
// メニュー定義（カテゴリ付き）
// ================================
const MENUS = {
  portrait: [
    // バーガー系 = main
    { id: "p1",  name: "ハンバーガー",              price: 300, category: "main" },
    { id: "p2",  name: "チーズバーガー",            price: 340, category: "main" },
    { id: "p3",  name: "てりやきバーガー",          price: 360, category: "main" },
    { id: "p4",  name: "フィッシュバーガー",        price: 350, category: "main" },
    { id: "p5",  name: "ダブルバーガー",            price: 420, category: "main" },
    { id: "p6",  name: "ベーコンレタスバーガー",    price: 380, category: "main" },
    { id: "p7",  name: "チキンバーガー",            price: 340, category: "main" },
    { id: "p8",  name: "スパイシーバーガー",        price: 370, category: "main" },
    { id: "p9",  name: "和風バーガー",              price: 380, category: "main" },

    // サイド系 = side
    { id: "p10", name: "ポテトS",                  price: 200, category: "side" },
    { id: "p11", name: "ポテトM",                  price: 260, category: "side" },
    { id: "p12", name: "ポテトL",                  price: 320, category: "side" },
    { id: "p13", name: "チキンナゲット5個",         price: 290, category: "side" },
    { id: "p14", name: "チキンナゲット10個",        price: 520, category: "side" },
    { id: "p15", name: "サラダ",                    price: 260, category: "side" },
    { id: "p16", name: "コーンスープ",              price: 260, category: "side" },

    // ドリンク系 = drink
    { id: "p17", name: "コーラS",                  price: 180, category: "drink" },
    { id: "p18", name: "コーラM",                  price: 220, category: "drink" },
    { id: "p19", name: "オレンジジュースS",         price: 180, category: "drink" },
    { id: "p20", name: "オレンジジュースM",         price: 220, category: "drink" },
    { id: "p21", name: "ウーロン茶",                price: 200, category: "drink" },
    { id: "p22", name: "アイスコーヒーS",           price: 200, category: "drink" },
    { id: "p23", name: "アイスコーヒーM",           price: 240, category: "drink" },
    { id: "p24", name: "ホットコーヒー",            price: 220, category: "drink" },
    { id: "p25", name: "ミルク",                    price: 180, category: "drink" },

    // デザート系 = dessert
    { id: "p26", name: "シェイク（バニラ）",        price: 260, category: "dessert" },
    { id: "p27", name: "シェイク（チョコ）",        price: 260, category: "dessert" },
    { id: "p28", name: "シェイク（イチゴ）",        price: 260, category: "dessert" },
    { id: "p29", name: "ソフトクリーム",            price: 220, category: "dessert" },
    { id: "p30", name: "アップルパイ",              price: 230, category: "dessert" },
    { id: "p31", name: "チョコパイ",                price: 230, category: "dessert" },
    { id: "p32", name: "サンデー（チョコ）",        price: 260, category: "dessert" },
    { id: "p33", name: "サンデー（ストロベリー）",  price: 260, category: "dessert" },

    // その他 = other
    { id: "p34", name: "ホットドッグ",              price: 320, category: "other" },
    { id: "p35", name: "チーズホットドッグ",        price: 360, category: "other" },
    { id: "p36", name: "キッズセット",              price: 500, category: "other" }
  ],

  landscape: [
    // メイン（ピザ・パスタなど）= main
    { id: "l1",  name: "マルゲリータピザ",          price: 680, category: "main" },
    { id: "l2",  name: "ペパロニピザ",              price: 720, category: "main" },
    { id: "l3",  name: "4種のチーズピザ",           price: 780, category: "main" },
    { id: "l4",  name: "シーフードピザ",            price: 780, category: "main" },
    { id: "l5",  name: "照り焼きチキンピザ",        price: 780, category: "main" },
    { id: "l6",  name: "ベジタブルピザ",            price: 700, category: "main" },
    { id: "l7",  name: "カルボナーラパスタ",        price: 720, category: "main" },
    { id: "l8",  name: "ミートソースパスタ",        price: 680, category: "main" },
    { id: "l9",  name: "ペペロンチーノ",            price: 660, category: "main" },
    { id: "l10", name: "ボロネーゼ",                price: 700, category: "main" },

    // サイド・前菜系 = side
    { id: "l11", name: "グリーンサラダ",            price: 260, category: "side" },
    { id: "l12", name: "シーザーサラダ",            price: 320, category: "side" },
    { id: "l13", name: "ポテトフライ",              price: 280, category: "side" },
    { id: "l14", name: "オニオンリング",            price: 280, category: "side" },
    { id: "l15", name: "ガーリックトースト",        price: 260, category: "side" },
    { id: "l16", name: "チキンフリット",            price: 360, category: "side" },

    // ドリンク = drink
    { id: "l17", name: "アイスティー",              price: 220, category: "drink" },
    { id: "l18", name: "レモネード",                price: 260, category: "drink" },
    { id: "l19", name: "ジンジャーエール",          price: 240, category: "drink" },
    { id: "l20", name: "グレープフルーツジュース",  price: 260, category: "drink" },
    { id: "l21", name: "カフェラテ",                price: 320, category: "drink" },
    { id: "l22", name: "カプチーノ",                price: 320, category: "drink" },
    { id: "l23", name: "ホットティー",              price: 240, category: "drink" },
    { id: "l24", name: "エスプレッソ",              price: 260, category: "drink" },

    // デザート = dessert
    { id: "l25", name: "レアチーズケーキ",          price: 360, category: "dessert" },
    { id: "l26", name: "ガトーショコラ",            price: 360, category: "dessert" },
    { id: "l27", name: "プリン",                    price: 280, category: "dessert" },
    { id: "l28", name: "ティラミス",                price: 360, category: "dessert" },
    { id: "l29", name: "アイス盛り合わせ",          price: 340, category: "dessert" },
    { id: "l30", name: "パンケーキ（メープル）",    price: 420, category: "dessert" },
    { id: "l31", name: "パンケーキ（ベリー）",      price: 450, category: "dessert" },

    // その他・おつまみ系 = other
    { id: "l32", name: "ホットドッグ（チリ）",      price: 380, category: "other" },
    { id: "l33", name: "ソーセージ盛り合わせ",      price: 520, category: "other" },
    { id: "l34", name: "バーニャカウダ",            price: 520, category: "other" },
    { id: "l35", name: "アンチョビポテト",          price: 360, category: "other" },
    { id: "l36", name: "おつまみセット",            price: 620, category: "other" }
  ]
};

// ================================
// ユーティリティ＆状態
// ================================
const $ = (s) => document.querySelector(s);
const byId = (id) => document.getElementById(id);

const CONDITION_LABELS = {
  vv: "縦画面 × 縦スクロール",
  vh: "縦画面 × 横スクロール",
  hv: "横画面 × 縦スクロール",
  hh: "横画面 × 横スクロール"
};

let STATE = {
  conditionCode: "vv",       // vv, vh, hv, hh
  orientation: "portrait",   // portrait / landscape
  scrollDir: "vertical",     // vertical / horizontal
  currentProducts: [],       // MENUS から選ばれた 36品
  quantities: {},            // { productId: qty }
  startTime: null,
  endTime: null,
  participantId: ""
};

// ================================
// 条件の決定（?cond= から）
// ================================
function parseConditionFromURL() {
  const params = new URLSearchParams(window.location.search);
  const cond = (params.get("cond") || "vv").toLowerCase();

  let orientation = "portrait";
  let scrollDir = "vertical";

  switch (cond) {
    case "vv":
      orientation = "portrait";
      scrollDir = "vertical";
      break;
    case "vh":
      orientation = "portrait";
      scrollDir = "horizontal";
      break;
    case "hv":
      orientation = "landscape";
      scrollDir = "vertical";
      break;
    case "hh":
      orientation = "landscape";
      scrollDir = "horizontal";
      break;
    default:
      orientation = "portrait";
      scrollDir = "vertical";
  }

  STATE.conditionCode = cond;
  STATE.orientation = orientation;
  STATE.scrollDir = scrollDir;

  // 使用するメニュー（縦画面 / 横画面で切替）
  STATE.currentProducts = MENUS[orientation] || MENUS.portrait;

  // CSS用の data-orientation
  document.body.dataset.orientation = orientation;

  // products にスクロール方向クラス付与
  const productArea = byId("productArea");
  productArea.classList.remove("vertical", "horizontal");
  productArea.classList.add(scrollDir);

  // 条件ラベル表示
  byId("condLabel").textContent = CONDITION_LABELS[cond] || cond;
}

// ================================
// 商品カード生成
// ================================
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
    priceEl.textContent = `¥${p.price.toLocaleString()}`;

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

    // 数量変更イベント
    btnMinus.addEventListener("click", () => {
      const current = STATE.quantities[p.id] || 0;
      const next = Math.max(0, current - 1);
      STATE.quantities[p.id] = next;
      qtyVal.textContent = String(next);
      refreshCartSummary();
    });

    btnPlus.addEventListener("click", () => {
      const current = STATE.quantities[p.id] || 0;
      const next = current + 1;
      STATE.quantities[p.id] = next;
      qtyVal.textContent = String(next);
      refreshCartSummary();
    });

    container.appendChild(card);
  });
}

// ================================
// カートの集計表示
// ================================
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

// ================================
// 画面切り替え
// ================================
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  const target = byId(id);
  if (target) {
    target.classList.add("active");
    // セクション内のスクロールをリセット
    target.scrollTop = 0;
  }
}

// ================================
// 実験開始
// ================================
function startExperiment() {
  STATE.participantId = byId("participantId").value.trim();
  STATE.startTime = new Date();
  showScreen("screenMenu");
}

// ================================
// 会計 → 結果生成
// ================================
function finishExperiment() {
  STATE.endTime = new Date();

  let orders = [];
  let total = 0;
  const categorySet = new Set();

  for (const p of STATE.currentProducts) {
    const q = STATE.quantities[p.id] || 0;
    if (q > 0) {
      orders.push({
        name: p.name,
        quantity: q,
        unit_price: p.price,
        subtotal: q * p.price,
        category: p.category || null
      });
      total += q * p.price;

      if (p.category) {
        categorySet.add(p.category);
      }
    }
  }

  const durationMs = STATE.endTime - STATE.startTime;
  const durationSec = (durationMs / 1000).toFixed(1);
  const uniqueItemsCount = orders.length;
  const categoryVariety = categorySet.size;

  const payload = {
    participant_id: STATE.participantId || null,
    condition: STATE.conditionCode,
    orientation: STATE.orientation,
    scroll_direction: STATE.scrollDir,
    start_time: STATE.startTime.toISOString(),
    end_time: STATE.endTime.toISOString(),
    duration_ms: durationMs,
    orders,
    total_amount: total,
    unique_items_count: uniqueItemsCount,
    category_variety: categoryVariety
  };

  const label = CONDITION_LABELS[payload.condition] || "";

  // Googleフォーム用テキスト生成
  let lines = [];
  lines.push(`参加者ID: ${payload.participant_id ?? ""}`);
  lines.push(`条件: ${payload.condition}（${label}）`);
  lines.push(`画面の向き: ${payload.orientation}`);
  lines.push(`スクロール方向: ${payload.scroll_direction}`);
  lines.push(`所要時間: ${durationSec}秒`);
  lines.push(`ユニーク商品数: ${uniqueItemsCount}種類`);
  lines.push(`カテゴリ数: ${categoryVariety}種類`);
  lines.push("");
  lines.push("注文内容:");
  if (orders.length === 0) {
    lines.push("・（なし）");
  } else {
    for (const o of orders) {
      lines.push(`・${o.name} ×${o.quantity}（¥${o.unit_price}）`);
    }
  }
  lines.push("");
  lines.push(`合計金額: ¥${payload.total_amount.toLocaleString()}`);

  byId("textOutput").textContent = lines.join("\n");

  showScreen("screenResult");
}

// ================================
// テキストコピー
// ================================
async function copyText() {
  const txt = byId("textOutput").textContent;
  if (!txt) return;
  try {
    await navigator.clipboard.writeText(txt);
    alert("フォーム用テキストをコピーしました。Googleフォームに貼り付けてください。");
  } catch (e) {
    alert("コピーに失敗しました。テキストを選択して手動でコピーしてください。");
  }
}

// ================================
// 初期化
// ================================
window.addEventListener("DOMContentLoaded", () => {
  parseConditionFromURL();
  buildProductCards();
  refreshCartSummary();

  // Enter でフォーム送信されて ?cond= が消えないように抑止
  const introForm = byId("introForm");
  if (introForm) {
    introForm.addEventListener("submit", (e) => {
      e.preventDefault();
    });
  }

  byId("btnStart").addEventListener("click", startExperiment);
  byId("btnCheckout").addEventListener("click", finishExperiment);
  byId("btnCopyText").addEventListener("click", copyText);
});

