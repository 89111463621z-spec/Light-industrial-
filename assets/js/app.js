(function () {
  "use strict";
  var S = window.SITE;
  var OBJ = {}, LOTS = [], LOT = {};
  S.objects.forEach(function (o) {
    OBJ[o.id] = o;
    o.lots.forEach(function (l) { l.object = o.id; LOTS.push(l); LOT[l.id] = l; });
  });

  /* ---------- helpers ---------- */
  function fmt(n, d) { return Number(n).toLocaleString("ru-RU", { minimumFractionDigits: d || 0, maximumFractionDigits: d || 0 }).replace(/ /g, " "); }
  function fa(a) { return Number(a).toLocaleString("ru-RU", { maximumFractionDigits: 2 }).replace(/\u202f/g, "\u00a0"); }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function num(v) { var n = parseFloat(String(v).replace(/\s/g, "").replace(",", ".")); return isNaN(n) ? null : n; }
  function sot(x) { return x && x.unit === "sot"; }
  function at(a, u) { return u === "sot" ? fa(a / 100) + "\u00a0сот" : fa(a) + "\u00a0м²"; }
  function atHtml(a, u) { return u === "sot" ? fa(a / 100) + " <small>сот</small>" : fa(a) + " <small>м²</small>"; }
  function plural(n, f) { var a = n % 10, b = n % 100; return f[(a === 1 && b !== 11) ? 0 : (a >= 2 && a <= 4 && (b < 10 || b >= 20)) ? 1 : 2]; }
  function $(id) { return document.getElementById(id); }
  var PIN = '<svg class="ico" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 1.5a4.5 4.5 0 0 0-4.5 4.5c0 3.4 4.5 8.5 4.5 8.5s4.5-5.1 4.5-8.5A4.5 4.5 0 0 0 8 1.5Zm0 6.2A1.7 1.7 0 1 1 8 4.3a1.7 1.7 0 0 1 0 3.4Z" fill="currentColor"/></svg>';
  var DEAL = { sale: "Продажа", rent: "Аренда" };
  var STATUS = { free: "Свободно", reserved: "Бронь" };
  var embedded = (function () { try { return window.self !== window.top; } catch (e) { return true; } })();

  function salePerM(l) { return l.pricePerM || (l.priceTotal ? l.priceTotal / l.area : null); }
  function saleTotal(l) { return l.priceTotal || (l.pricePerM ? l.pricePerM * l.area : null); }
  function has(l, d) { return l.deal.indexOf(d) >= 0; }

  /* ---------- state ---------- */
  var st = { limit: 24, view: "objects", layout: "list", sort: "default", deal: "all", areaMin: null, areaMax: null, unit: "m", priceMin: null, priceMax: null, object: "all", mapObj: null };
  try { var saved = JSON.parse(localStorage.getItem("li-layout") || "null"); if (saved) st.layout = saved; } catch (e) {}

  function lotPasses(l) {
    if (st.object !== "all" && l.object !== st.object) return false;
    if (st.deal !== "all" && !has(l, st.deal)) return false;
    if (st.areaMin != null && l.area < st.areaMin) return false;
    if (st.areaMax != null && l.area > st.areaMax) return false;
    if (st.priceMin != null || st.priceMax != null) {
      var deals = st.deal === "all" ? l.deal : [st.deal];
      var ok = deals.some(function (d) {
        var p = d === "sale" ? (st.unit === "m" ? salePerM(l) : saleTotal(l)) : (l.rentPerM ? (st.unit === "m" ? l.rentPerM : l.rentPerM * l.area) : l.rentTotal ? (st.unit === "m" ? l.rentTotal / l.area : l.rentTotal) : null);
        if (p == null) return false;
        return (st.priceMin == null || p >= st.priceMin) && (st.priceMax == null || p <= st.priceMax);
      });
      if (!ok) return false;
    }
    return true;
  }
  function visibleLots() { return LOTS.filter(lotPasses); }
  function summary(lots) {
    var r = { min: Infinity, max: 0, sale: Infinity, sot: Infinity, rent: Infinity, deals: {} };
    lots.forEach(function (l) {
      r.min = Math.min(r.min, l.area); r.max = Math.max(r.max, l.area);
      l.deal.forEach(function (d) { r.deals[d] = 1; });
      if (has(l, "sale") && l.status === "free" && l.priceTotal) r.saleT = Math.min(r.saleT == null ? Infinity : r.saleT, l.priceTotal);
      if (has(l, "sale") && l.status === "free") { if (l.pricePerSot) r.sot = Math.min(r.sot, l.pricePerSot); else if (l.pricePerM) r.sale = Math.min(r.sale, l.pricePerM); }
      if (has(l, "rent") && l.rentPerM) r.rent = Math.min(r.rent, l.rentPerM);
      if (has(l, "rent") && l.rentTotal) r.rentT = Math.min(r.rentT == null ? Infinity : r.rentT, l.rentTotal);
    });
    return r;
  }

  /* ---------- small renderers ---------- */
  function slider(photos, alt) {
    var dots = photos.length > 1 ? '<div class="dots" aria-hidden="true">' + photos.map(function (_, i) { return "<i" + (i ? "" : ' class="on"') + "></i>"; }).join("") + "</div>" : "";
    return '<div class="slider"><div class="track">' + photos.map(function (p, i) {
      return '<img src="' + p + '" alt="' + (i ? "" : esc(alt)) + '" loading="lazy" draggable="false">';
    }).join("") + "</div>" + dots + "</div>";
  }
  function dealTags(deals, status) {
    return deals.map(function (d) { return '<span class="tag">' + DEAL[d] + "</span>"; }).join("") +
      (status === "reserved" ? '<span class="tag tag-warn">Бронь</span>' : "");
  }
  function priceLines(l) {
    var out = [];
    if (has(l, "sale")) {
      if (l.priceTotal) out.push('<div class="pl"><b>' + fmt(l.priceTotal) + " ₽</b>" + (l.pricePerSot ? "<span>" + fmt(l.pricePerSot) + " ₽/сотка</span>" : l.pricePerM ? "<span>" + fmt(l.pricePerM) + " ₽/м²</span>" : "") + "</div>");
      else if (l.pricePerM) out.push('<div class="pl"><b>' + fmt(l.pricePerM) + " ₽/м²</b>" + (l.vat ? "<span>" + esc(l.vat) + "</span>" : "") + "</div>");
      else out.push('<div class="pl"><b class="muted">' + (l.status === "reserved" ? "Забронирован" : "Продажа: цена по запросу") + "</b></div>");
    }
    if (has(l, "rent")) {
      if (l.rentTotal) out.push('<div class="pl"><b>' + fmt(l.rentTotal) + " ₽</b><span>" + esc(l.rentNote || "в месяц") + "</span></div>");
      else if (l.rentPerM) out.push('<div class="pl"><b>' + (l.rentFrom ? "от " : "") + fmt(l.rentPerM) + " ₽/м²</b><span>в месяц</span></div>");
      else out.push('<div class="pl"><b class="muted">Аренда: ставка по запросу</b></div>');
    }
    return out.join("");
  }

  function objectCard(o, lots) {
    var s = summary(lots);
    var price = [];
    if (s.sale < Infinity) price.push("от " + fmt(s.sale) + " ₽/м²");
    if (s.sot < Infinity) price.push("от " + fmt(s.sot) + " ₽/сотка");
    if (s.sale === Infinity && s.sot === Infinity && s.saleT) price.push((lots.length > 1 ? "от " : "") + fmt(s.saleT) + " ₽");
    if (s.rent < Infinity) price.push("аренда от " + fmt(s.rent) + " ₽/м² в месяц");
    else if (s.rentT) price.push("аренда " + fmt(s.rentT) + " ₽ в месяц");
    return '<article class="card ocard" data-obj="' + o.id + '">' +
      '<div class="card-media">' + slider(o.photos, o.name) + '<div class="tags">' + dealTags(Object.keys(s.deals)) + "</div></div>" +
      '<div class="card-body">' +
      '<h3 class="card-name"><a href="#obj-' + o.id + '">' + esc(o.name) + "</a></h3>" +
      '<div class="card-area num">' + (s.min === s.max ? atHtml(s.min, o.unit) : (sot(o) ? fa(s.min / 100) + " — " + atHtml(s.max, o.unit) : fa(s.min) + " — " + atHtml(s.max))) + "</div>" +
      '<div class="card-price num">' + (price.length ? price.join("<br>") : '<span class="muted">Цена по запросу</span>') + "</div>" +
      '<div class="chips"><span>' + lots.length + " " + plural(lots.length, ["предложение", "предложения", "предложений"]) + "</span>" + o.chips.map(function (c) { return "<span>" + esc(c) + "</span>"; }).join("") + "</div>" +
      '<ul class="where"><li>' + PIN + esc(o.address) + "</li>" + o.lines.slice(0, 2).map(function (x) { return "<li>" + PIN + esc(x) + "</li>"; }).join("") + "</ul>" +
      "</div></article>";
  }
  function lotCard(l) {
    var o = OBJ[l.object];
    var sub = [l.building, l.floor].filter(Boolean).join(", ");
    return '<article class="card lcard" data-lot="' + l.id + '">' +
      '<div class="card-media">' + slider(l.photos.slice(0, 4), l.title) + '<div class="tags">' + dealTags(l.deal, l.status) + "</div></div>" +
      '<div class="card-body">' +
      '<h3 class="card-name"><a href="#lot-' + l.id + '">' + esc(l.title) + "</a></h3>" +
      '<div class="card-area num">' + atHtml(l.area, l.unit) + "</div>" +
      '<div class="card-price num">' + priceLines(l) + "</div>" +
      (l.specs.length ? '<div class="chips">' + l.specs.slice(0, 2).map(function (s) { return "<span>" + esc(s[0]) + ": " + esc(s[1]) + "</span>"; }).join("") + "</div>" : "") +
      '<ul class="where"><li>' + PIN + esc(o.name) + (sub ? " · " + esc(sub) : "") + "</li><li>" + PIN + esc(o.address) + "</li></ul>" +
      "</div></article>";
  }

  function mapPanel(objs) {
    if (!objs.length) return "";
    var cur = OBJ[st.mapObj] && objs.indexOf(OBJ[st.mapObj]) >= 0 ? OBJ[st.mapObj] : objs[0];
    var list = '<ul class="map-list">' + objs.map(function (o) {
      return '<li><button type="button" class="map-pick" data-map="' + o.id + '" aria-pressed="' + (o === cur) + '">' + PIN + "<span><b>" + esc(o.name) + "</b><small>" + esc(o.address) + "</small></span></button>" +
        '<a class="map-ext" href="https://yandex.ru/maps/?ll=' + o.coords + '&z=15&pt=' + o.coords + ',pm2rdm&l=map" target="_blank" rel="noopener">Открыть в Яндекс Картах</a></li>';
    }).join("") + "</ul>";
    var frame = embedded
      ? '<div class="map-stub"><b>Карта</b><span>Яндекс Карта появится на опубликованном сайте. В превью внешние карты недоступны.</span></div>'
      : '<iframe class="map-frame" title="Карта: ' + esc(cur.name) + '" src="https://yandex.ru/map-widget/v1/?ll=' + cur.coords + '&z=15&pt=' + cur.coords + ',pm2rdm" loading="lazy" allowfullscreen></iframe>';
    return '<aside class="map" aria-label="Карта">' + frame + list + "</aside>";
  }

  /* ---------- views ---------- */
  var app = $("app");
  function crumbs(items) {
    return '<nav class="crumbs" aria-label="Навигация"><a href="#" data-home>Главная</a>' + items.map(function (i) {
      return '<span aria-hidden="true">›</span>' + (i[1] ? '<a href="' + i[1] + '">' + esc(i[0]) + "</a>" : "<span>" + esc(i[0]) + "</span>");
    }).join("") + "</nav>";
  }

  function renderCatalog() {
    document.body.classList.remove("on-object");
    var lots = visibleLots();
    var items, count, more = "";
    if (st.view === "objects") {
      var groups = S.objects.map(function (o) { return { o: o, lots: lots.filter(function (l) { return l.object === o.id; }) }; }).filter(function (g) { return g.lots.length; });
      if (st.sort === "price-asc" || st.sort === "price-desc") groups.sort(function (a, b) { var x = summary(a.lots).sale, y = summary(b.lots).sale; return st.sort === "price-asc" ? x - y : y - x; });
      if (st.sort === "area-asc") groups.sort(function (a, b) { return summary(a.lots).min - summary(b.lots).min; });
      if (st.sort === "area-desc") groups.sort(function (a, b) { return summary(b.lots).max - summary(a.lots).max; });
      items = groups.map(function (g) { return objectCard(g.o, g.lots); }).join("");
      count = groups.length + " " + plural(groups.length, ["объект", "объекта", "объектов"]);
      var mapObjs = groups.map(function (g) { return g.o; });
    } else {
      var arr = lots.slice();
      var pv = function (l) { return has(l, "sale") ? (salePerM(l) || Infinity) : (l.rentPerM || Infinity); };
      if (st.sort === "price-asc") arr.sort(function (a, b) { return pv(a) - pv(b); });
      if (st.sort === "price-desc") arr.sort(function (a, b) { var x = pv(a), y = pv(b); return (y === Infinity ? -1 : y) - (x === Infinity ? -1 : x); });
      if (st.sort === "area-asc") arr.sort(function (a, b) { return a.area - b.area; });
      if (st.sort === "area-desc") arr.sort(function (a, b) { return b.area - a.area; });
      var total = arr.length;
      items = arr.slice(0, st.limit).map(lotCard).join("");
      var more = total > st.limit ? '<div class="more"><button type="button" class="btn btn-ghost" data-more>Показать ещё ' + Math.min(24, total - st.limit) + " из " + (total - st.limit) + "</button></div>" : "";
      count = arr.length + " " + plural(arr.length, ["предложение", "предложения", "предложений"]);
      var seen = {}; mapObjs = [];
      arr.forEach(function (l) { if (!seen[l.object]) { seen[l.object] = 1; mapObjs.push(OBJ[l.object]); } });
    }
    var title = st.deal === "sale" ? "Продажа помещений Light Industrial" : st.deal === "rent" ? "Аренда помещений Light Industrial" : "Light Industrial в Санкт-Петербурге";
    var seg = function (name, val, label) { return '<button type="button" class="seg-btn" data-' + name + '="' + val + '" aria-pressed="' + (st[name] === val) + '">' + label + "</button>"; };
    var empty = '<div class="empty"><p>Под эти условия ничего не нашлось.</p><button type="button" class="btn btn-ghost" data-reset>Сбросить фильтры</button></div>';
    app.innerHTML = crumbs([[title]]) +
      '<div class="cat-head"><h1>' + title + '</h1><div class="cat-controls">' +
      '<div class="seg" role="group" aria-label="Что показать">' + seg("view", "objects", "Объекты") + seg("view", "offers", "Предложения") + "</div>" +
      '<div class="seg seg-layout" role="group" aria-label="Вид">' + seg("layout", "list", "Список") + seg("layout", "split", "Список + карта") + seg("layout", "map", "На карте") + "</div>" +
      '<label class="sort"><span class="sr">Сортировка</span><select id="sort">' +
      [["default", "По умолчанию"], ["price-asc", "Сначала дешевле за м²"], ["price-desc", "Сначала дороже за м²"], ["area-asc", "Площадь: по возрастанию"], ["area-desc", "Площадь: по убыванию"]].map(function (o) { return '<option value="' + o[0] + '"' + (st.sort === o[0] ? " selected" : "") + ">" + o[1] + "</option>"; }).join("") +
      "</select></label></div></div>" +
      '<p class="found" aria-live="polite">Найдено ' + count + "</p>" +
      '<div class="cat-body layout-' + st.layout + '">' +
      (st.layout !== "map" ? '<div class="cat-list"><div class="grid">' + (items || empty) + "</div>" + (st.view === "offers" ? more : "") + "</div>" : "") +
      (st.layout !== "list" ? mapPanel(mapObjs || []) : "") +
      "</div>";
    bindSliders(app);
  }

  function renderObject(id) {
    var o = OBJ[id]; if (!o) return renderCatalog();
    document.body.classList.add("on-object");
    var s = summary(o.lots);
    var price = [];
    if (s.sale < Infinity) price.push("<b>от " + fmt(s.sale) + " ₽/м²</b><span>продажа</span>");
    if (s.sot < Infinity) price.push("<b>от " + fmt(s.sot) + " ₽/сотка</b><span>продажа</span>");
    if (s.sale === Infinity && s.sot === Infinity && s.saleT) price.push("<b>" + (o.lots.length > 1 ? "от " : "") + fmt(s.saleT) + " ₽</b><span>продажа</span>");
    if (s.rent < Infinity) price.push("<b>от " + fmt(s.rent) + " ₽/м²</b><span>аренда в месяц</span>");
    else if (s.rentT) price.push("<b>" + fmt(s.rentT) + " ₽</b><span>аренда в месяц</span>");
    var ROWS = 20, rows = o.lots.map(function (l, idx) {
      var p = has(l, "sale") ? (l.priceTotal ? fmt(l.priceTotal) + " ₽" : l.pricePerM ? fmt(l.pricePerM) + " ₽/м²" : (l.status === "reserved" ? "—" : "по запросу")) : "";
      var r = has(l, "rent") ? (l.rentTotal ? fmt(l.rentTotal) + " ₽ в мес." : (l.rentFrom ? "от " : "") + (l.rentPerM ? fmt(l.rentPerM) + " ₽/м² в мес." : "по запросу")) : "";
      return '<tr data-lot="' + l.id + '" tabindex="0"' + (idx >= ROWS ? ' class="row-more" hidden' : '') + '><td><a href="#lot-' + l.id + '">' + esc(l.title) + "</a><small>" + esc([l.building, l.floor].filter(Boolean).join(", ")) + "</small></td>" +
        '<td class="num c-area">' + at(l.area, l.unit) + '</td><td class="num c-price">' + [p, r].filter(Boolean).join("<br>") + "</td>" +
        '<td class="num c-det">' + (l.pricePerSot ? fmt(l.pricePerSot) + " ₽/сотка" : l.pricePerM && l.priceTotal ? fmt(l.pricePerM) + " ₽/м²" : (l.vat ? esc(l.vat) : (l.rentNote ? esc(l.rentNote) : ""))) + "</td>" +
        '<td class="c-st"><span class="status st-' + l.status + '">' + STATUS[l.status] + "</span></td></tr>";
    }).join("");
    var thumbs = o.gallery.map(function (g, i) { return '<button type="button" data-src="' + g + '" aria-label="Фото ' + (i + 1) + '"' + (i ? "" : ' aria-current="true"') + '><img src="' + g + '" alt="" loading="lazy"></button>'; }).join("");
    app.innerHTML = crumbs([["Объекты", "#"], [o.name]]) +
      '<div class="obj-head"><div><h1>' + esc(o.name) + '</h1><p class="obj-addr">' + PIN + esc(o.address) + "</p></div>" +
      '<div class="tags tags-static">' + dealTags(Object.keys(s.deals)) + "</div></div>" +
      '<div class="obj-top"><div class="gallery"><div class="gallery-main"><img id="g-main" src="' + o.gallery[0] + '" alt="' + esc(o.name) + '"></div><div class="thumbs">' + thumbs + "</div></div>" +
      '<aside class="obj-aside"><div class="aside-card">' +
      '<div class="aside-area num">' + (s.min === s.max ? "" : (sot(o) ? fa(s.min / 100) : fa(s.min)) + " — ") + atHtml(s.max, o.unit) + "</div>" +
      '<div class="aside-price num">' + (price.join("") || "<b>Цена по запросу</b>") + "</div>" +
      '<p class="muted">' + o.lots.length + " " + plural(o.lots.length, ["предложение", "предложения", "предложений"]) + "</p>" +
      '<a class="btn btn-primary js-phone" href="' + S.phoneHref + '">' + S.phone + "</a>" +
      '<button type="button" class="btn btn-ghost" data-lead>Оставить заявку</button>' +
      '<a class="btn btn-ghost" href="#obj-lots" data-scroll="obj-lots">' + (sot(o) ? "Смотреть участки" : "Смотреть помещения") + '</a>' +
      '</div><ul class="where">' + o.lines.map(function (x) { return "<li>" + PIN + esc(x) + "</li>"; }).join("") + "</ul></aside></div>" +
      '<p class="obj-lead">' + esc(o.lead) + "</p>" +
      '<div class="facts">' + o.facts.map(function (f) { return '<div class="fact"><b class="num">' + esc(f[0]) + "</b><span>" + esc(f[1]) + "</span></div>"; }).join("") + "</div>" +
      '<section class="obj-sec" id="obj-lots"><h2>' + (sot(o) ? "Участки" : "Помещения") + '</h2><div class="table-wrap"><table class="lots-table"><thead><tr><th>' + (sot(o) ? "Участок" : "Помещение") + '</th><th>Площадь</th><th>Цена</th><th>Детали</th><th>Статус</th></tr></thead><tbody>' + rows + "</tbody></table></div>" + (o.lots.length > ROWS ? '<div class="more"><button type="button" class="btn btn-ghost" data-rows>Показать все ' + o.lots.length + "</button></div>" : "") + "</section>" +
      '<div class="obj-cols">' +
      '<section class="obj-sec"><h2>Характеристики</h2><dl class="spec-list">' + o.specs.map(function (x) { return "<div><dt>" + esc(x[0]) + "</dt><dd>" + esc(x[1]) + "</dd></div>"; }).join("") + "</dl></section>" +
      (o.stages ? '<section class="obj-sec"><h2>Очереди и сроки</h2><dl class="spec-list">' + o.stages.map(function (x) { return "<div><dt>" + esc(x[0]) + " · " + esc(x[1]) + "</dt><dd>" + esc(x[2]) + "</dd></div>"; }).join("") + "</dl></section>" : "") +
      "</div>" +
      (o.buy || o.invest ? '<div class="obj-cols">' +
        (o.buy ? '<section class="obj-sec"><h2>Как купить</h2><ul class="ticks">' + o.buy.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></section>" : "") +
        (o.invest ? '<section class="obj-sec"><h2>Инвесторам</h2><div class="facts facts-2">' + o.invest.map(function (f) { return '<div class="fact"><b class="num">' + esc(f[0]) + "</b><span>" + esc(f[1]) + "</span></div>"; }).join("") + '</div><p class="muted small">Расчёты и прогнозы — по данным застройщика.</p></section>' : "") +
        "</div>" : "") +
      (o.residents ? '<section class="obj-sec"><h2>Резиденты</h2><p>' + esc(o.residents) + "</p></section>" : "") +
      '<section class="obj-sec"><h2>Расположение</h2>' + mapPanel([o]) + "</section>";
    window.scrollTo(0, 0);
  }

  /* ---------- lot dialog ---------- */
  var modal = $("modal"), lastFocus = null;
  function openLot(id) {
    var l = LOT[id]; if (!l) return;
    var o = OBJ[l.object];
    lastFocus = document.activeElement;
    var thumbs = l.photos.map(function (p, i) { return '<button type="button" data-src="' + p + '" aria-label="Фото ' + (i + 1) + '"' + (i ? "" : ' aria-current="true"') + '><img src="' + p + '" alt="" loading="lazy"></button>'; }).join("");
    var specs = [["Объект", o.name], ["Площадь", at(l.area, l.unit)]];
    if (l.building) specs.push(["Корпус", l.building]);
    if (l.floor) specs.push(["Этаж", l.floor]);
    specs.push(["Сделка", l.deal.map(function (d) { return DEAL[d]; }).join(", ")]);
    specs.push(["Статус", STATUS[l.status]]);
    specs = specs.concat(l.specs.filter(function (x) { return x[0] !== "Площадь"; }));
    var notes = [];
    if (l.vat && has(l, "sale")) notes.push("Продажа: " + l.vat + ".");
    if (l.rentNote) notes.push("Аренда: " + l.rentNote + ".");
    modal.innerHTML = '<div class="sheet" role="dialog" aria-modal="true" aria-labelledby="lot-title">' +
      '<button type="button" class="sheet-close" aria-label="Закрыть">×</button>' +
      '<div class="gallery"><div class="gallery-main"><img id="m-main" src="' + l.photos[0] + '" alt="' + esc(l.title) + '"></div><div class="thumbs">' + thumbs + "</div></div>" +
      '<div class="sheet-info"><p class="eyebrow">' + esc(o.name) + '</p><h2 id="lot-title">' + esc(l.title) + "</h2>" +
      '<div class="sheet-price num">' + priceLines(l) + "</div>" +
      (notes.length ? '<p class="small muted">' + esc(notes.join(" ")) + "</p>" : "") +
      '<dl class="spec-list">' + specs.map(function (s) { return "<div><dt>" + esc(s[0]) + "</dt><dd>" + esc(s[1]) + "</dd></div>"; }).join("") + "</dl>" +
      '<p class="small muted">' + esc(o.address) + "</p>" +
      '<a class="btn btn-primary" href="' + S.phoneHref + '">Позвонить: ' + S.phone + "</a>" +
      '<button type="button" class="btn btn-ghost" data-lead>Оставить заявку</button>' +
      '<a class="btn btn-ghost" href="#obj-' + o.id + '">Все помещения объекта</a></div></div>';
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelector(".sheet-close").focus();
  }
  function closeLot() {
    if (modal.hidden) return;
    modal.hidden = true; modal.innerHTML = ""; document.body.style.overflow = "";
    if (lastFocus && document.contains(lastFocus)) lastFocus.focus();
  }

  /* ---------- routing ---------- */
  var base = "", rendered = null;
  function show(key) {
    rendered = key;
    var m = /^obj-([a-z0-9-]+)$/.exec(key);
    if (m) renderObject(m[1]); else renderCatalog();
  }
  function route() {
    var h = location.hash.replace(/^#/, "");
    var m;
    if ((m = /^lot-([a-z0-9-]+)$/.exec(h)) && LOT[m[1]]) {
      if (rendered === null) show(base);
      openLot(m[1]); return;
    }
    var wasOpen = !modal.hidden;
    closeLot();
    if (h === "about" || h === "lead") { if (rendered === null) show(""); return; }
    if (h === "offers") st.view = "offers";
    if (h === "objects") st.view = "objects";
    var key = /^obj-/.test(h) && OBJ[h.slice(4)] ? h : "";
    base = key;
    if (wasOpen && key === rendered) return;
    show(key);
    if (h && !wasOpen) window.scrollTo(0, 0);
  }
  function closeToBase() { location.hash = base || "objects"; }
  function go(hash) {
    if (location.hash === hash || (hash === "" && !location.hash)) route();
    else location.hash = hash;
  }
  window.addEventListener("hashchange", route);

  /* ---------- events ---------- */
  document.addEventListener("click", function (e) {
    var t = e.target;
    var home = t.closest("[data-home]");
    if (home) { e.preventDefault(); resetFilters(); st.view = "objects"; if (location.hash) { location.hash = "objects"; } else { show(""); } window.scrollTo(0, 0); return; }
    var nav = t.closest("[data-nav]");
    if (nav) {
      e.preventDefault(); var v = nav.dataset.nav;
      if (v === "objects") { st.view = "objects"; st.deal = "all"; } else { st.deal = v; st.view = "offers"; }
      syncForm(); if (/^#obj-/.test(location.hash)) { location.hash = st.view; } else { show(""); } window.scrollTo(0, 0); return;
    }
    var b;
    if ((b = t.closest("[data-view]"))) { st.view = b.dataset.view; st.limit = 24; return renderCatalog(); }
    if ((b = t.closest("[data-rows]"))) { document.querySelectorAll(".row-more").forEach(function (r) { r.hidden = false; }); b.parentNode.remove(); return; }
    if (t.closest("[data-more]")) { st.limit += 24; return renderCatalog(); }
    if ((b = t.closest("[data-layout]"))) { st.layout = b.dataset.layout; try { localStorage.setItem("li-layout", JSON.stringify(st.layout)); } catch (x) {} return renderCatalog(); }
    if ((b = t.closest("[data-map]"))) {
      st.mapObj = b.dataset.map;
      if (document.body.classList.contains("on-object")) return;
      return renderCatalog();
    }
    if (t.closest("[data-lead]")) {
      e.preventDefault();
      if (!modal.hidden) closeToBase();
      setTimeout(function () { $("lead").scrollIntoView({ behavior: "smooth" }); }, 60);
      return;
    }
    if (t.closest("[data-reset]")) { resetFilters(); return renderCatalog(); }
    if ((b = t.closest("[data-scroll]"))) { e.preventDefault(); $(b.dataset.scroll).scrollIntoView({ behavior: "smooth" }); return; }
    if (t.closest("a, button, select, input")) {
      var th = t.closest(".thumbs button");
      if (th) {
        var main = th.closest(".gallery").querySelector(".gallery-main img");
        main.src = th.dataset.src;
        th.parentNode.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-current", x === th); });
      }
      if (t.closest(".sheet-close")) { e.preventDefault(); closeToBase(); }
      return;
    }
    if (t === modal) { closeToBase(); return; }
    var card = t.closest(".ocard, .lcard");
    if (card) { location.hash = card.classList.contains("ocard") ? "obj-" + card.dataset.obj : "lot-" + card.dataset.lot; return; }
    var row = t.closest("tr[data-lot]");
    if (row) location.hash = "lot-" + row.dataset.lot;
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modal.hidden) closeToBase();
    if (e.key === "Enter" && e.target.matches("tr[data-lot]")) location.hash = "lot-" + e.target.dataset.lot;
  });

  /* sliders: swipe on touch, hover-scrub on desktop */
  function bindSliders(root) {
    root.querySelectorAll(".slider").forEach(function (sl) {
      var tr = sl.querySelector(".track"), dots = sl.querySelectorAll(".dots i"), n = tr.children.length;
      if (n < 2) return;
      function mark() { var i = Math.round(tr.scrollLeft / tr.clientWidth); dots.forEach(function (d, k) { d.classList.toggle("on", k === i); }); }
      tr.addEventListener("scroll", mark, { passive: true });
      sl.addEventListener("mousemove", function (e) {
        var r = sl.getBoundingClientRect(); var i = Math.min(n - 1, Math.floor((e.clientX - r.left) / r.width * n));
        tr.scrollTo({ left: i * tr.clientWidth, behavior: "auto" });
      });
      sl.addEventListener("mouseleave", function () { tr.scrollTo({ left: 0 }); });
    });
  }

  /* filters */
  var sel = $("f-object");
  sel.innerHTML = '<option value="all">Все технопарки</option>' + S.objects.map(function (o) { return '<option value="' + o.id + '">' + esc(o.name) + "</option>"; }).join("");
  function syncForm() {
    $("f-deal").value = st.deal; $("f-object").value = st.object; $("f-price-unit").value = st.unit;
    $("f-area-min").value = st.areaMin == null ? "" : st.areaMin; $("f-area-max").value = st.areaMax == null ? "" : st.areaMax;
    $("f-price-min").value = st.priceMin == null ? "" : st.priceMin; $("f-price-max").value = st.priceMax == null ? "" : st.priceMax;
  }
  function readForm() {
    st.deal = $("f-deal").value; st.object = $("f-object").value; st.unit = $("f-price-unit").value;
    st.areaMin = num($("f-area-min").value); st.areaMax = num($("f-area-max").value);
    st.priceMin = num($("f-price-min").value); st.priceMax = num($("f-price-max").value);
  }
  function resetFilters() { st.deal = "all"; st.object = "all"; st.unit = "m"; st.areaMin = st.areaMax = st.priceMin = st.priceMax = null; syncForm(); }
  function onFilter() {
    readForm(); st.limit = 24;
    if (/^#obj-/.test(location.hash)) { location.hash = st.view; return; }
    renderCatalog();
  }
  $("filters").addEventListener("change", onFilter);
  $("filters").addEventListener("input", function (e) { if (e.target.tagName === "INPUT") { clearTimeout(onFilter.t); onFilter.t = setTimeout(onFilter, 300); } });
  $("filters").addEventListener("submit", function (e) { e.preventDefault(); onFilter(); });
  $("f-reset").addEventListener("click", function () { resetFilters(); onFilter(); });
  app.addEventListener("change", function (e) { if (e.target.id === "sort") { st.sort = e.target.value; renderCatalog(); } });

  /* mobile menu */
  var menu = $("mobile-menu"), mbtn = $("menu-btn");
  mbtn.addEventListener("click", function () { var open = menu.hidden; menu.hidden = !open; mbtn.setAttribute("aria-expanded", String(open)); });
  menu.addEventListener("click", function (e) { if (e.target.closest("a")) { menu.hidden = true; mbtn.setAttribute("aria-expanded", "false"); } });

  /* mobile filters toggle */
  $("filters-toggle").addEventListener("click", function () {
    var open = $("filters").classList.toggle("open");
    this.setAttribute("aria-expanded", String(open));
    this.textContent = open ? "Скрыть фильтры" : "Фильтры";
  });

  /* about collapse */
  $("about-toggle").addEventListener("click", function () {
    var open = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", String(!open));
    $("about-text").classList.toggle("open", !open);
    this.textContent = open ? "Читать полностью" : "Свернуть";
  });

  /* footer */
  $("footer-cols").innerHTML =
    '<div><h4>Объекты</h4>' + S.objects.map(function (o) { return '<a href="#obj-' + o.id + '">' + esc(o.name) + "</a>"; }).join("") + "</div>" +
    '<div><h4>Предложения</h4><a href="#" data-nav="sale">Продажа помещений</a><a href="#" data-nav="rent">Аренда помещений</a><a href="#offers">Все предложения</a></div>' +
    '<div><h4>Покупателям и инвесторам</h4><a href="#obj-lit">Рассрочка и ипотека — Технопарк l618</a><a href="#about">Что такое Light Industrial</a></div>' +
    '<div><h4>Отдел продаж</h4><a class="js-phone" href="' + S.phoneHref + '">' + S.phone + "</a></div>";

  /* copy phone */
  $("copy-phone").addEventListener("click", function () {
    var b = this;
    function ok() { b.textContent = "Номер скопирован"; setTimeout(function () { b.textContent = "Скопировать номер"; }, 2000); }
    try { navigator.clipboard.writeText(S.phone).then(ok, function () { b.textContent = S.phone; }); } catch (e) { b.textContent = S.phone; }
  });

  syncForm();
  route();
})();
