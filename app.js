// シンプルなメニュー（後で好きに差し替えてOK）
const PRODUCTS = [
  { id: "m1", name: "ハンバーガー",      price: 300 },
  { id: "m2", name: "チーズバーガー",    price: 340 },
  { id: "m3", name: "てりやきバーガー",  price: 360 },
  { id: "m4", name: "フィレオフィッシュ", price: 350 },
  { id: "s1", name: "ポテト",            price: 250 },
  { id: "s2", name: "ナゲット",          price: 290 },
  { id: "d1", name: "コーラ",            price: 200 },
  { id: "d2", name: "ウーロン茶",        price: 180 },
  { id: "d3", name: "オレンジジュース",  price: 190 },
  { id: "ds1", name: "ソフトクリーム",   price: 220 },
  { id: "ds2", name: "アップルパイ",     price: 230 },
  { id: "ds3", name: "シェイク",         price: 260 }
];

const $ = (s) => document.querySelector(s);
const byId = (id) => document.getElementById(id);

let STATE = {
  conditionCode: "vv",         // vv, vh, hv, hh
  orientation: "portrait",     // portrait / landscape
  scrollDir: "vertical",       // vertical / horizontal
  quantities: {},              // { productId: qty }
  startTime: null,
  endTime: null,
  participantId: ""
};

// URLの ?cond= から条件を取得
function parseConditionFromURL() {
  const params = new URLSearchParams(window.location.search);
  const cond = params.get("cond") || "vv";
  let orientation = "portrait";
  let scrollDir = "vertical";

  switch (cond) {
    case "vv": // 縦 / 縦
      orientation = "portrait";
      scrollDir = "vertical";
      break;
    case "vh": // 縦 / 横
      orientation = "portrait";
      scrollDir = "horizontal";
      break;
    case "hv": // 横 / 縦
      orientation = "landscape";
      scrollDir = "vertical";
      break;
    case "hh": // 横 / 横
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

  // body にデータ属性を付与（CSSでレイアウト切り替え）
  document.body.dataset.orientation = orientation;

  const productArea = byId("productArea");
  productArea.classList.add(scrollDir); // vertical or horizontal

  const labelMap = {
    vv: "縦画面 / 縦スクロール",
    vh: "縦画面 / 横スクロール",
    hv: "横画面 / 縦スクロール",
    hh: "横画面 / 横スクロール"
  };
  byId("condLabel").textContent = labelMap[cond] || cond;
}

// 商品カード生成
function buildProductCards() {
  const container = byId("productArea");
  container.innerHTML = "";
  STATE.quantities = {};

  PRODUCTS.forEach(p => {
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

    // イベント
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

// カート表示更新
function refreshCartSummary() {
  let count = 0;
  let total = 0;
  for (const p of PRODUCTS) {
    const q = STATE.quantities[p.id] || 0;
    count += q;
    total += q * p.price;
  }
  byId("itemCount").textContent = String(count);
  byId("totalAmount").textContent = "¥" + total.toLocaleString();
}

// 画面切り替え
function showScreen(id) {
  document.querySelectorAll(".screen").forEach(el => el.classList.remove("active"));
  byId(id).classList.add("active");

  const body = document.body;

  if (id === "screenMenu") {
    // 注文画面のときだけスクロール禁止
    body.classList.add("no-scroll");
  } else {
    // それ以外（イントロ / 結果）はスクロール可能
    body.classList.remove("no-scroll");
  }
}

// 実験開始
function startExperiment() {
  STATE.participantId = byId("participantId").value.trim();
  STATE.startTime = new Date();
  showScreen("screenMenu");
}

// 会計（終了処理）
function finishExperiment() {
  STATE.endTime = new Date();

  let orders = [];
  let total = 0;
  for (const p of PRODUCTS) {
    const q = STATE.quantities[p.id] || 0;
    if (q > 0) {
      orders.push({
        name: p.name,
        quantity: q,
        unit_price: p.price,
        subtotal: q * p.price
      });
      total += q * p.price;
    }
  }

  const payload = {
    participant_id: STATE.participantId || null,
    condition: STATE.conditionCode,
    orientation: STATE.orientation,
    scroll_direction: STATE.scrollDir,
    start_time: STATE.startTime.toISOString(),
    end_time: STATE.endTime.toISOString(),
    duration_ms: STATE.endTime - STATE.startTime,
    orders: orders,
    total_amount: total
  };

  const jsonStr = JSON.stringify(payload, null, 2);
  byId("jsonOutput").textContent = jsonStr;

  // フォーム用テキスト
  const durationSec = (payload.duration_ms / 1000).toFixed(1);
  const labelMap = {
    vv: "縦画面 / 縦スクロール",
    vh: "縦画面 / 横スクロール",
    hv: "横画面 / 縦スクロール",
    hh: "横画面 / 横スクロール"
  };
  let lines = [];
  lines.push(`参加者ID: ${payload.participant_id ?? ""}`);
  lines.push(`条件: ${payload.condition}（${labelMap[payload.condition] || ""}）`);
  lines.push(`開始時刻: ${payload.start_time}`);
  lines.push(`終了時刻: ${payload.end_time}`);
  lines.push(`所要時間: ${durationSec}秒`);
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

// コピー系
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

async function copyJson() {
  const txt = byId("jsonOutput").textContent;
  if (!txt) return;
  try {
    await navigator.clipboard.writeText(txt);
    alert("JSONをコピーしました。");
  } catch (e) {
    alert("コピーに失敗しました。テキストを選択して手動でコピーしてください。");
  }
}

// 初期化
window.addEventListener("DOMContentLoaded", () => {
  parseConditionFromURL();
  buildProductCards();
  refreshCartSummary();

  byId("btnStart").addEventListener("click", startExperiment);
  byId("btnCheckout").addEventListener("click", finishExperiment);
  byId("btnCopyText").addEventListener("click", copyText);
  byId("btnCopyJson").addEventListener("click", copyJson);
});
