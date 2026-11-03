(function () {
  var S = window.SITE;
  var objById = {};
  S.objects.forEach(function (o) { objById[o.id] = o; });

  function fmt(n, digits) {
    return n.toLocaleString("ru-RU", { minimumFractionDigits: digits || 0, maximumFractionDigits: digits || 0 }).replace(/ /g, " ");
  }
  function fmtArea(a) { return fmt(a, a % 1 ? 2 : 0); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }
  function img(lot, n) { return "assets/img/" + lot.id + "/" + (n < 10 ? "0" + n : n) + ".jpg"; }

  /* Key figures — считаются из данных */
  var areas = S.lots.map(function (l) { return l.area; });
  var min = Math.min.apply(null, areas), max = Math.max.apply(null, areas);
  document.getElementById("figures").innerHTML = [
    [S.objects.length, "технопарка в Санкт-Петербурге"],
    [S.lots.length, "лотов в каталоге"],
    [fmtArea(Math.floor(min)) + "–" + fmt(max), "м² — площади лотов"],
    [S.lots.filter(function (l) { return l.pricePerM; }).length, "лотов с открытой ценой"]
  ].map(function (f) { return '<div class="figure"><b>' + f[0] + "</b><span>" + f[1] + "</span></div>"; }).join("");

  /* Filters */
  var state = { object: "all", area: "all" };
  var objectChips = [["all", "Все технопарки"]].concat(S.objects.map(function (o) { return [o.id, o.short]; }));
  var areaChips = [["all", "Любая площадь"], ["s", "до 500 м²"], ["m", "500–1 500 м²"], ["l", "от 1 500 м²"]];
  function chips(el, list, key) {
    el.innerHTML = list.map(function (c) {
      return '<button type="button" class="chip" data-k="' + key + '" data-v="' + c[0] + '" aria-pressed="' + (state[key] === c[0]) + '">' + c[1] + "</button>";
    }).join("");
  }
  function inArea(a) {
    if (state.area === "s") return a < 500;
    if (state.area === "m") return a >= 500 && a < 1500;
    if (state.area === "l") return a >= 1500;
    return true;
  }
  function priceBlock(l) {
    if (!l.pricePerM && !l.priceTotal) return '<div class="card-price"><span class="on-request">Цена по запросу</span></div>';
    var left = l.priceTotal ? "<b>" + fmt(l.priceTotal) + " ₽</b>" : "<b>" + fmt(l.pricePerM) + " ₽/м²</b>";
    var right = l.priceTotal && l.pricePerM ? "<span>" + fmt(l.pricePerM) + " ₽/м²</span>" : (l.vat ? "<span>" + l.vat + "</span>" : "");
    return '<div class="card-price">' + left + right + "</div>";
  }
  function render() {
    chips(document.getElementById("f-object"), objectChips, "object");
    chips(document.getElementById("f-area"), areaChips, "area");
    var list = S.lots.filter(function (l) { return (state.object === "all" || l.object === state.object) && inArea(l.area); })
      .sort(function (a, b) { return a.area - b.area; });
    var n = list.length;
    document.getElementById("count").textContent = "Найдено: " + n;
    var grid = document.getElementById("grid");
    if (!n) { grid.innerHTML = '<p class="empty">Под эти условия лотов нет. Сбросьте фильтр или позвоните — подберём вручную.</p>'; return; }
    grid.innerHTML = list.map(function (l) {
      var o = objById[l.object];
      var specs = l.specs.slice(0, 2).map(function (s) { return "<span>" + esc(s[0]) + ": " + esc(s[1]) + "</span>"; }).join("");
      return '<button type="button" class="card" data-lot="' + l.id + '">' +
        '<div class="card-media"><img src="assets/img/' + l.id + '/card.jpg" alt="" loading="lazy">' +
        '<div class="tags"><span class="tag">' + esc(o.short) + "</span>" + (l.deal ? '<span class="tag tag-deal">' + l.deal + "</span>" : "") + "</div></div>" +
        '<div class="card-body">' +
        '<div class="card-area">' + fmtArea(l.area) + " <small>м²</small></div>" +
        '<div class="card-title">' + esc(l.title) + "</div>" +
        '<div class="card-object">' + esc(o.name) + (l.place ? " · " + esc(l.place) : "") + "</div>" +
        (specs ? '<div class="specs-mini">' + specs + "</div>" : "") +
        priceBlock(l) +
        "</div></button>";
    }).join("");
  }
  document.querySelector(".filters").addEventListener("click", function (e) {
    var b = e.target.closest(".chip"); if (!b) return;
    state[b.dataset.k] = b.dataset.v; render();
  });
  document.getElementById("grid").addEventListener("click", function (e) {
    var c = e.target.closest(".card"); if (c) openLot(c.dataset.lot);
  });
  render();

  /* Objects */
  document.getElementById("objects-list").innerHTML = S.objects.map(function (o) {
    var count = S.lots.filter(function (l) { return l.object === o.id; }).length;
    return '<article class="object">' +
      '<div class="object-media"><img src="' + o.cover + '" alt="' + esc(o.name) + '" loading="lazy"><img src="' + o.scheme + '" alt="Схема: ' + esc(o.name) + '" loading="lazy"></div>' +
      '<div class="object-text"><p class="eyebrow">' + count + " " + plural(count, ["лот", "лота", "лотов"]) + "</p>" +
      "<h3>" + esc(o.name) + '</h3><p class="object-addr">' + esc(o.address) + "</p><p>" + esc(o.lead) + "</p>" +
      '<ul class="object-facts">' + o.facts.map(function (f) { return "<li><b>" + esc(f[0]) + "</b><span>" + esc(f[1]) + "</span></li>"; }).join("") + "</ul>" +
      '<button type="button" class="link-btn" data-obj="' + o.id + '">Показать лоты этого технопарка</button></div></article>';
  }).join("");
  document.getElementById("objects-list").addEventListener("click", function (e) {
    var b = e.target.closest("[data-obj]"); if (!b) return;
    state.object = b.dataset.obj; state.area = "all"; render();
    document.getElementById("lots").scrollIntoView();
  });
  function plural(n, f) { var m10 = n % 10, m100 = n % 100; return f[(m10 === 1 && m100 !== 11) ? 0 : (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) ? 1 : 2]; }

  /* Lot dialog, deep link via #lot-<id> */
  var modal = document.getElementById("modal");
  var lastFocus = null;
  function openLot(id, fromHash) {
    var l = S.lots.filter(function (x) { return x.id === id; })[0]; if (!l) return;
    var o = objById[l.object];
    lastFocus = document.activeElement;
    var thumbs = "";
    for (var i = 1; i <= l.photos; i++) thumbs += '<button type="button" data-src="' + img(l, i) + '" aria-label="Фото ' + i + '"' + (i === 1 ? ' aria-current="true"' : "") + '><img src="' + img(l, i) + '" alt="" loading="lazy"></button>';
    var specs = [["Технопарк", o.name], ["Площадь", fmtArea(l.area) + " м²"]];
    if (l.place) specs.push(["Расположение", l.place]);
    if (l.deal) specs.push(["Тип сделки", l.deal]);
    specs = specs.concat(l.specs);
    var price = (l.priceTotal || l.pricePerM)
      ? '<div class="sheet-price">' + (l.priceTotal ? "<b>" + fmt(l.priceTotal) + " ₽</b>" : "<b>" + fmt(l.pricePerM) + " ₽/м²</b>") +
        "<span>" + (l.priceTotal && l.pricePerM ? fmt(l.pricePerM) + " ₽/м²" : "") + (l.vat ? (l.priceTotal ? " · " : "") + l.vat : "") + "</span></div>"
      : '<div class="sheet-price"><b>Цена по запросу</b><span>Позвоните — пришлём актуальные условия</span></div>';
    modal.innerHTML = '<div class="sheet" role="dialog" aria-modal="true" aria-labelledby="lot-title">' +
      '<button type="button" class="sheet-close" aria-label="Закрыть">×</button>' +
      '<div class="gallery"><div class="gallery-main"><img id="g-main" src="' + img(l, 1) + '" alt="' + esc(l.title) + '"></div><div class="thumbs">' + thumbs + "</div></div>" +
      '<div class="sheet-info"><p class="eyebrow">' + esc(o.short) + '</p><h3 id="lot-title">' + esc(l.title) + "</h3>" + price +
      '<dl class="spec-list">' + specs.map(function (s) { return "<div><dt>" + esc(s[0]) + "</dt><dd>" + esc(s[1]) + "</dd></div>"; }).join("") + "</dl>" +
      (l.note ? '<p class="sheet-note">' + esc(l.note) + "</p>" : "") +
      '<p class="sheet-note">' + esc(o.address) + "</p>" +
      '<a class="btn btn-primary" href="' + S.phoneHref + '">Позвонить: ' + S.phone + "</a>" +
      '<button type="button" class="btn btn-ghost" data-ask="' + l.id + '">Оставить заявку на этот лот</button></div></div>';
    modal.hidden = false;
    document.body.style.overflow = "hidden";
    modal.querySelector(".sheet-close").focus();
    if (!fromHash) { try { history.replaceState(null, "", "#lot-" + id); } catch (e) {} }
  }
  function closeLot() {
    if (modal.hidden) return;
    modal.hidden = true; modal.innerHTML = "";
    document.body.style.overflow = "";
    try { history.replaceState(null, "", location.pathname + location.search); } catch (e) {}
    if (lastFocus) lastFocus.focus();
  }
  modal.addEventListener("click", function (e) {
    if (e.target === modal || e.target.closest(".sheet-close")) return closeLot();
    var t = e.target.closest(".thumbs button");
    if (t) {
      document.getElementById("g-main").src = t.dataset.src;
      modal.querySelectorAll(".thumbs button").forEach(function (b) { b.setAttribute("aria-current", b === t); });
    }
    var ask = e.target.closest("[data-ask]");
    if (ask) { document.getElementById("f-lot").value = ask.dataset.ask; closeLot(); document.getElementById("contact").scrollIntoView(); document.getElementById("f-name").focus(); }
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeLot(); });
  function fromHash() {
    var m = /^#lot-([a-z0-9-]+)$/.exec(location.hash);
    if (m) openLot(m[1], true); else closeLot();
  }
  window.addEventListener("hashchange", fromHash);
  fromHash();

  /* Form */
  var sel = document.getElementById("f-lot");
  sel.innerHTML = '<option value="">Подобрать вместе с менеджером</option>' + S.lots.map(function (l) {
    return '<option value="' + l.id + '">' + esc(objById[l.object].short + " — " + l.title + ", " + fmtArea(l.area) + " м²") + "</option>";
  }).join("");
  document.getElementById("lead-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var msg = document.getElementById("form-msg");
    var name = document.getElementById("f-name"), tel = document.getElementById("f-tel");
    if (!name.value.trim() || tel.value.replace(/\D/g, "").length < 10) {
      msg.style.color = "var(--accent)";
      msg.textContent = "Укажите имя и телефон — 10 или 11 цифр.";
    } else {
      msg.style.color = "";
      msg.textContent = "Макет: отправка заявок ещё не подключена. Пока звоните " + S.phone + ".";
    }
    msg.hidden = false;
  });

  /* Copy phone */
  document.getElementById("copy-phone").addEventListener("click", function () {
    var b = this;
    function done() { b.textContent = "Номер скопирован"; setTimeout(function () { b.textContent = "Скопировать номер"; }, 2000); }
    try {
      navigator.clipboard.writeText(S.phone).then(done, function () { selectPhone(); });
    } catch (e) { selectPhone(); }
  });
  function selectPhone() {
    var el = document.querySelector(".contact-phone");
    var r = document.createRange(); r.selectNodeContents(el);
    var s = window.getSelection(); s.removeAllRanges(); s.addRange(r);
  }
})();
