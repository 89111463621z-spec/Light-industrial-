/*
  Данные сайта. Правило: только то, что есть в материалах отдела продаж.
  Нет данных — null, на сайте выводится «по запросу».
  status: "free" — свободно, "reserved" — бронь (проданные лоты не выводим).
  Цены: pricePerM / priceTotal — продажа, ₽; rentPerM — аренда, ₽ за м² в месяц.
*/
(function () {
  var L = "assets/img/obj-lit/";
  var I = "assets/img/obj-ind/";
  var Z = "assets/img/obj-zu/";
  var M = "assets/img/obj-murm/";
  var V = "assets/img/obj-vozr/";
  var ZS = "assets/img/obj-zaus/";
  var K = "assets/img/obj-koms/";
  var SH = "assets/img/obj-shaf/";
  var M2 = "assets/img/obj-mar/";
  var COMMON = [["Эффективная высота хранения", "8 м"], ["Нагрузка на пол", "5 т/м², на антресоли 0,4 т/м²"], ["Сетка колонн", "12 × 18 м"]];
  var litRenders = [L + "01.jpg", L + "02.jpg", L + "03.jpg"];

  function lit22(floor, unit, area, perM, total, status, height, load, plan) {
    return {
      id: "lit-22-" + unit.toLowerCase().replace("н", "n"),
      title: "Помещение " + unit, building: "Корпус 2.2", floor: floor + " этаж",
      area: area, pricePerM: perM, priceTotal: total, deal: ["sale"], status: status || "free",
      specs: [["Высота потолка", height], ["Нагрузка на пол", load]],
      photos: [litRenders[0], plan, litRenders[1], litRenders[2]]
    };
  }
  function lit31(unit, area, total, perM) {
    return {
      id: "lit-31-" + unit.toLowerCase().replace("н-", "n"),
      title: "Помещение " + unit, building: "Корпус 3.1", floor: "1 этаж",
      area: area, pricePerM: perM, priceTotal: total, deal: ["sale"], status: "free",
      specs: [["Высота потолка", "5,38 м или 8,98 м — по плану этажа"], ["Нагрузка на пол", "5 т"], ["Антресоль", "высота потолка 2,78 м, нагрузка 300 кг"], ["Ворота", "есть"]],
      photos: ["assets/img/lit-87/01.jpg", "assets/img/lit-87/05.jpg", "assets/img/lit-87/02.jpg", "assets/img/lit-87/03.jpg", "assets/img/lit-87/04.jpg"]
    };
  }

  window.SITE = {
    phone: "+7 (931) 263-85-88",
    phoneHref: "tel:+79312638588",

    objects: [
      {
        id: "lit",
        name: "Технопарк l618",
        short: "Литовская 16",
        address: "Санкт-Петербург, Выборгский р-н, ул. Литовская, 16",
        mapQuery: "Санкт-Петербург, Литовская улица, 16", coords: "30.3625,59.979137",
        lines: ["15–20 минут пешком до м. «Лесная»", "Въезд с Литовской ул. и Полюстровского пр.", "15 минут на авто до КАД и ЗСД"],
        chips: ["Внутри КАД", "Рассрочка 0%"],
        photos: [L + "01s.jpg", L + "02s.jpg", L + "03s.jpg", L + "04s.jpg", L + "05s.jpg"],
        gallery: [L + "01.jpg", L + "02.jpg", L + "03.jpg", L + "04.jpg", L + "05.jpg", L + "06.jpg", L + "07.jpg", L + "08.jpg", L + "09.jpg", L + "genplan.jpg"],
        lead: "Многофункциональный технопарк на 3,5 га внутри КАД: производство, офис, склад, стрит-ритейл, шоурум и лаборатории. Помещения продаются в собственность.",
        facts: [["3,5 га", "территория"], ["25 081 м²", "коммерческих помещений"], ["3 очереди", "1-я реализована, 2-я — сдача 2027"], ["7 резидентов", "уже работают на территории"]],
        specs: [
          ["Каркас", "монолитный железобетон, бетон B25, колонны 400×400 мм"],
          ["Огнестойкость", "II степень, класс С0"],
          ["Срок службы здания", "50 лет"],
          ["Стены", "архитектурные сэндвич-панели 300 мм"],
          ["Остекление", "панорамное, двухкамерные стеклопакеты"],
          ["Электроснабжение", "15 кВт включены в каждый лот, докупка — от 100 000 ₽ за кВт"],
          ["Высота потолков", "до 8,98 м"],
          ["Инженерия", "водоснабжение, канализация, вентиляция — централизованные"],
          ["Земля", "участок в собственность"]
        ],
        stages: [["1-я очередь", "4 755 м²", "Реализована"], ["2-я очередь", "5 252 м²", "Продаётся, сдача 2027"], ["3-я очередь", "15 075 м²", "Подготовка к экспертизе"]],
        buy: ["100% оплата", "Рассрочка 0% до 22 месяцев", "Лизинг", "Кредит и промышленная ипотека", "Возврат НДС до 22% для юрлиц и ИП на ОСНО после регистрации права"],
        invest: [["10–12%", "годовых при сдаче в аренду"], ["8–10 лет", "срок окупаемости"], ["+25–30%", "прогноз капитализации к вводу (Реал Эстейт, Николерс)"]],
        residents: "ЭндоСтарс, LOUDLADS, Wikimoto, Туннель Технологии, Азимут Мед, Антол, UniRent",
        lots: [
          lit22(1, "1Н2", 210.12, 290000, 60934800, "free", "4,8 м", "5 т", L + "plan-22-1.jpg"),
          lit22(1, "1Н3", 194.88, 290000, 56515200, "free", "4,8 м", "5 т", L + "plan-22-1.jpg"),
          lit22(1, "1Н4", 503.70, 260000, 130962000, "reserved", "4,8 м", "5 т", L + "plan-22-1.jpg"),
          lit22(2, "2Н1", 239.26, 260000, 62207600, "free", "4,2 м", "1 т", "assets/img/lit-451/03.jpg"),
          lit22(2, "2Н2", 209.92, 260000, 54579200, "free", "4,2 м", "1 т", "assets/img/lit-451/03.jpg"),
          lit22(2, "2Н3", 193.37, 260000, 50276200, "free", "4,2 м", "1 т", "assets/img/lit-451/03.jpg"),
          lit22(2, "2Н4", 451.54, 240000, 108369600, "free", "4,2 м", "1 т", "assets/img/lit-451/03.jpg"),
          lit22(2, "2Н5", 265.13, 240000, 63631200, "free", "4,2 м", "1 т", "assets/img/lit-451/03.jpg"),
          lit22(3, "3Н1", 238.65, 240000, 57276000, "free", "3,4 м", "1 т", "assets/img/lit-250/03.jpg"),
          lit22(3, "3Н2", 209.92, 240000, 50380800, "free", "3,4 м", "1 т", "assets/img/lit-250/03.jpg"),
          lit22(3, "3Н3", 191.88, 240000, 46051200, "free", "3,4 м", "1 т", "assets/img/lit-250/03.jpg"),
          lit22(3, "3Н4", 454.48, 220000, 99985600, "free", "3,4 м", "1 т", "assets/img/lit-250/03.jpg"),
          lit22(3, "3Н5", 249.42, 220000, 54872400, "free", "3,4 м", "1 т", "assets/img/lit-250/03.jpg"),
          {
            id: "lit-22-floor3", title: "3 этаж целиком", building: "Корпус 2.2", floor: "3 этаж",
            area: 1344.35, pricePerM: 232000, priceTotal: 308566000, deal: ["sale"], status: "free",
            specs: [["Высота потолка", "3,4 м"], ["Нагрузка на пол", "1 т"], ["Состав", "помещения 3Н1–3Н5"]],
            photos: [litRenders[0], "assets/img/lit-250/03.jpg", "assets/img/lit-1344/03.jpg", litRenders[1]]
          },
          lit22(4, "4Н3", 52.2, 270000, 14094000, "reserved", "2,5 м", "350 кг", L + "plan-22-4.jpg"),
          lit22(4, "4Н4", 117.2, 270000, 31644000, "free", "2,5 м", "350 кг", L + "plan-22-4.jpg"),
          lit31("1Н-15", 146.01, 39422700, 270000),
          lit31("1Н-16", 90.95, 26375500, 290000),
          lit31("1Н-17", 111.85, 30199500, 270000),
          lit31("1Н-18", 87.52, 25380000, 290000),
          lit31("1Н-19", 123.73, 35881700, 290000),
          lit31("1Н-20", 121.21, 35150900, 290000),
          lit31("1Н-21", 87.43, 25354700, 290000),
          lit31("1Н-22", 122.60, 33102000, 270000),
          lit31("1Н-23", 87.43, 25354700, 290000),
          lit31("1Н-24", 139.08, 37551600, 270000),
          lit31("1Н-25", 87.43, 25354700, 290000),
          lit31("1Н-26", 117.43, 31706100, 270000),
          lit31("1Н-27", 73.71, 21375900, 290000),
          { id: "lit-31-floor1", title: "1 этаж корпуса 3.1 целиком", building: "Корпус 3.1", floor: "1 этаж", area: 1396.38, pricePerM: null, priceTotal: 392210000, deal: ["sale"], status: "free", specs: [["Состав", "помещения 1Н-15 — 1Н-27"], ["Высота потолка", "5,38 м или 8,98 м — по плану этажа"], ["Нагрузка на пол", "5 т"]], photos: ["assets/img/lit-87/05.jpg", "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-2n3", title: "Помещение 2Н-3", building: "Корпус 3.1", floor: "2 этаж", area: 91.51, pricePerM: 240000, priceTotal: 21962400, deal: ["sale"], status: "free", specs: [["Высота потолка", "3,36 м до перекрытия, 2,78 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-2.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-2n4", title: "Помещение 2Н-4", building: "Корпус 3.1", floor: "2 этаж", area: 87.73, pricePerM: 240000, priceTotal: 21055200, deal: ["sale"], status: "free", specs: [["Высота потолка", "3,36 м до перекрытия, 2,78 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-2.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-2n5", title: "Помещение 2Н-5", building: "Корпус 3.1", floor: "2 этаж", area: 87.74, pricePerM: 240000, priceTotal: 21057600, deal: ["sale"], status: "free", specs: [["Высота потолка", "3,36 м до перекрытия, 2,78 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-2.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-2n6", title: "Помещение 2Н-6", building: "Корпус 3.1", floor: "2 этаж", area: 87.73, pricePerM: 240000, priceTotal: 21055200, deal: ["sale"], status: "free", specs: [["Высота потолка", "3,36 м до перекрытия, 2,78 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-2.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-2n7", title: "Помещение 2Н-7", building: "Корпус 3.1", floor: "2 этаж", area: 87.73, pricePerM: 240000, priceTotal: 21055200, deal: ["sale"], status: "free", specs: [["Высота потолка", "3,36 м до перекрытия, 2,78 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-2.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-2n8", title: "Помещение 2Н-8", building: "Корпус 3.1", floor: "2 этаж", area: 87.73, pricePerM: 240000, priceTotal: 21055200, deal: ["sale"], status: "free", specs: [["Высота потолка", "3,36 м до перекрытия, 2,78 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-2.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-2n9", title: "Помещение 2Н-9", building: "Корпус 3.1", floor: "2 этаж", area: 87.73, pricePerM: 240000, priceTotal: 21055200, deal: ["sale"], status: "free", specs: [["Высота потолка", "3,36 м до перекрытия, 2,78 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-2.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-2n10", title: "Помещение 2Н-10", building: "Корпус 3.1", floor: "2 этаж", area: 91.78, pricePerM: 240000, priceTotal: 22027200, deal: ["sale"], status: "free", specs: [["Высота потолка", "3,36 м до перекрытия, 2,78 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-2.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-2n11", title: "Помещение 2Н-11", building: "Корпус 3.1", floor: "2 этаж", area: 47.01, pricePerM: 240000, priceTotal: 11282400, deal: ["sale"], status: "free", specs: [["Высота потолка", "3,36 м до перекрытия, 2,78 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-2.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-3n16", title: "Помещение 3Н-16", building: "Корпус 3.1", floor: "3 этаж", area: 81.87, pricePerM: 250000, priceTotal: 20467500, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-3n17", title: "Помещение 3Н-17", building: "Корпус 3.1", floor: "3 этаж", area: 91.91, pricePerM: 250000, priceTotal: 22977500, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-3n18", title: "Помещение 3Н-18", building: "Корпус 3.1", floor: "3 этаж", area: 86.43, pricePerM: 250000, priceTotal: 21607500, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-3n19", title: "Помещение 3Н-19", building: "Корпус 3.1", floor: "3 этаж", area: 87.01, pricePerM: 250000, priceTotal: 21752500, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-3n20", title: "Помещение 3Н-20", building: "Корпус 3.1", floor: "3 этаж", area: 87.4, pricePerM: 250000, priceTotal: 21850000, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-3n21", title: "Помещение 3Н-21", building: "Корпус 3.1", floor: "3 этаж", area: 87.73, pricePerM: 250000, priceTotal: 21932500, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-3n22", title: "Помещение 3Н-22", building: "Корпус 3.1", floor: "3 этаж", area: 87.73, pricePerM: 250000, priceTotal: 21932500, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-3n23", title: "Помещение 3Н-23", building: "Корпус 3.1", floor: "3 этаж", area: 113.87, pricePerM: 250000, priceTotal: 28467500, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-3n24", title: "Помещение 3Н-24", building: "Корпус 3.1", floor: "3 этаж", area: 87.73, pricePerM: 250000, priceTotal: 21932500, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-3n25", title: "Помещение 3Н-25", building: "Корпус 3.1", floor: "3 этаж", area: 98.13, pricePerM: 250000, priceTotal: 24532500, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-3n26", title: "Помещение 3Н-26", building: "Корпус 3.1", floor: "3 этаж", area: 87.73, pricePerM: 250000, priceTotal: 21932500, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-3n27", title: "Помещение 3Н-27", building: "Корпус 3.1", floor: "3 этаж", area: 142.75, pricePerM: 250000, priceTotal: 35687500, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-3n28", title: "Помещение 3Н-28", building: "Корпус 3.1", floor: "3 этаж", area: 91.56, pricePerM: 250000, priceTotal: 22890000, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-4n16", title: "Помещение №16", building: "Корпус 3.1", floor: "4 этаж", area: 81.87, pricePerM: 240000, priceTotal: 19648800, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-4n17", title: "Помещение №17", building: "Корпус 3.1", floor: "4 этаж", area: 91.91, pricePerM: 240000, priceTotal: 22058400, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-4n18", title: "Помещение №18", building: "Корпус 3.1", floor: "4 этаж", area: 86.43, pricePerM: 240000, priceTotal: 20743200, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-4n19", title: "Помещение №19", building: "Корпус 3.1", floor: "4 этаж", area: 87.01, pricePerM: 240000, priceTotal: 20882400, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-4n20", title: "Помещение №20", building: "Корпус 3.1", floor: "4 этаж", area: 87.4, pricePerM: 240000, priceTotal: 20976000, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-4n21", title: "Помещение №21", building: "Корпус 3.1", floor: "4 этаж", area: 87.73, pricePerM: 240000, priceTotal: 21055200, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-4n22", title: "Помещение №22", building: "Корпус 3.1", floor: "4 этаж", area: 87.73, pricePerM: 240000, priceTotal: 21055200, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-4n23", title: "Помещение №23", building: "Корпус 3.1", floor: "4 этаж", area: 113.87, pricePerM: 240000, priceTotal: 27328800, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-4n24", title: "Помещение №24", building: "Корпус 3.1", floor: "4 этаж", area: 87.73, pricePerM: 240000, priceTotal: 21055200, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-4n25", title: "Помещение №25", building: "Корпус 3.1", floor: "4 этаж", area: 98.13, pricePerM: 240000, priceTotal: 23551200, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-4n26", title: "Помещение №26", building: "Корпус 3.1", floor: "4 этаж", area: 87.73, pricePerM: 240000, priceTotal: 21055200, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-4n27", title: "Помещение №27", building: "Корпус 3.1", floor: "4 этаж", area: 142.75, pricePerM: 240000, priceTotal: 34260000, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-4n28", title: "Помещение №28", building: "Корпус 3.1", floor: "4 этаж", area: 91.56, pricePerM: 240000, priceTotal: 21974400, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-5n16", title: "Помещение №16", building: "Корпус 3.1", floor: "5 этаж", area: 81.87, pricePerM: 235000, priceTotal: 19239450, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-5n17", title: "Помещение №17", building: "Корпус 3.1", floor: "5 этаж", area: 91.91, pricePerM: 235000, priceTotal: 21598850, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-5n18", title: "Помещение №18", building: "Корпус 3.1", floor: "5 этаж", area: 86.43, pricePerM: 235000, priceTotal: 20311050, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-5n19", title: "Помещение №19", building: "Корпус 3.1", floor: "5 этаж", area: 87.01, pricePerM: 235000, priceTotal: 20447350, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-5n20", title: "Помещение №20", building: "Корпус 3.1", floor: "5 этаж", area: 87.4, pricePerM: 235000, priceTotal: 20539000, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-5n21", title: "Помещение №21", building: "Корпус 3.1", floor: "5 этаж", area: 87.73, pricePerM: 235000, priceTotal: 20616550, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-5n22", title: "Помещение №22", building: "Корпус 3.1", floor: "5 этаж", area: 87.73, pricePerM: 235000, priceTotal: 20616550, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-5n23", title: "Помещение №23", building: "Корпус 3.1", floor: "5 этаж", area: 113.87, pricePerM: 235000, priceTotal: 26756450, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-5n24", title: "Помещение №24", building: "Корпус 3.1", floor: "5 этаж", area: 87.73, pricePerM: 235000, priceTotal: 20616550, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-5n25", title: "Помещение №25", building: "Корпус 3.1", floor: "5 этаж", area: 98.13, pricePerM: 235000, priceTotal: 23060550, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-5n26", title: "Помещение №26", building: "Корпус 3.1", floor: "5 этаж", area: 87.73, pricePerM: 235000, priceTotal: 20616550, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-5n27", title: "Помещение №27", building: "Корпус 3.1", floor: "5 этаж", area: 142.75, pricePerM: 235000, priceTotal: 33546250, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-31-5n28", title: "Помещение №28", building: "Корпус 3.1", floor: "5 этаж", area: 91.56, pricePerM: 235000, priceTotal: 21516600, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-31-3.jpg", litRenders[0], "assets/img/lit-87/01.jpg", "assets/img/lit-87/02.jpg"] },
          { id: "lit-32-1n1", title: "Помещение 1Н1", building: "Корпус 3.2", floor: "1 этаж", area: 272.78, pricePerM: 270000, priceTotal: 73650600, deal: ["sale"], status: "free", specs: [["Площадь", "общая, с антресолью"], ["Высота потолка", "8,98 м до перекрытия, 8,4 м до балки; под антресолью 4,8 м"], ["Антресоль", "высота 2,78 м"], ["Нагрузка на пол", "5 т"]], photos: [L + "plan-32-1.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-1n2", title: "Помещение 1Н2", building: "Корпус 3.2", floor: "1 этаж", area: 197.87, pricePerM: 270000, priceTotal: 53424900, deal: ["sale"], status: "free", specs: [["Площадь", "общая, с антресолью"], ["Высота потолка", "8,98 м до перекрытия, 8,4 м до балки; под антресолью 4,8 м"], ["Антресоль", "высота 2,78 м"], ["Нагрузка на пол", "5 т"]], photos: [L + "plan-32-1.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-1n3", title: "Помещение 1Н3", building: "Корпус 3.2", floor: "1 этаж", area: 144.83, pricePerM: 270000, priceTotal: 39104100, deal: ["sale"], status: "free", specs: [["Площадь", "общая, с антресолью"], ["Высота потолка", "8,98 м до перекрытия, 8,4 м до балки; под антресолью 4,8 м"], ["Антресоль", "высота 2,78 м"], ["Нагрузка на пол", "5 т"]], photos: [L + "plan-32-1.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-1n4", title: "Помещение 1Н4", building: "Корпус 3.2", floor: "1 этаж", area: 194.82, pricePerM: 270000, priceTotal: 52601400, deal: ["sale"], status: "free", specs: [["Площадь", "общая, с антресолью"], ["Высота потолка", "8,98 м до перекрытия, 8,4 м до балки; под антресолью 4,8 м"], ["Антресоль", "высота 2,78 м"], ["Нагрузка на пол", "5 т"]], photos: [L + "plan-32-1.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-1n5", title: "Помещение 1Н5", building: "Корпус 3.2", floor: "1 этаж", area: 167.64, pricePerM: 270000, priceTotal: 45262800, deal: ["sale"], status: "free", specs: [["Площадь", "общая, с антресолью"], ["Высота потолка", "8,98 м до перекрытия, 8,4 м до балки; под антресолью 4,8 м"], ["Антресоль", "высота 2,78 м"], ["Нагрузка на пол", "5 т"]], photos: [L + "plan-32-1.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-1n6", title: "Помещение 1Н6", building: "Корпус 3.2", floor: "1 этаж", area: 160.15, pricePerM: 270000, priceTotal: 43240500, deal: ["sale"], status: "free", specs: [["Площадь", "общая, с антресолью"], ["Высота потолка", "8,98 м до перекрытия, 8,4 м до балки; под антресолью 4,8 м"], ["Антресоль", "высота 2,78 м"], ["Нагрузка на пол", "5 т"]], photos: [L + "plan-32-1.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-1n7", title: "Помещение 1Н7", building: "Корпус 3.2", floor: "1 этаж", area: 164.66, pricePerM: 270000, priceTotal: 44458200, deal: ["sale"], status: "free", specs: [["Площадь", "общая, с антресолью"], ["Высота потолка", "8,98 м до перекрытия, 8,4 м до балки; под антресолью 4,8 м"], ["Антресоль", "высота 2,78 м"], ["Нагрузка на пол", "5 т"]], photos: [L + "plan-32-1.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-1n8", title: "Помещение 1Н8", building: "Корпус 3.2", floor: "1 этаж", area: 252.28, pricePerM: 270000, priceTotal: 68115600, deal: ["sale"], status: "free", specs: [["Площадь", "общая, с антресолью"], ["Высота потолка", "8,98 м до перекрытия, 8,4 м до балки; под антресолью 4,8 м"], ["Антресоль", "высота 2,78 м"], ["Нагрузка на пол", "5 т"]], photos: [L + "plan-32-1.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-1n9", title: "Помещение 1Н9", building: "Корпус 3.2", floor: "1 этаж", area: 270.3, pricePerM: 270000, priceTotal: 72981000, deal: ["sale"], status: "free", specs: [["Площадь", "общая, с антресолью"], ["Высота потолка", "8,98 м до перекрытия, 8,4 м до балки; под антресолью 4,8 м"], ["Антресоль", "высота 2,78 м"], ["Нагрузка на пол", "5 т"]], photos: [L + "plan-32-1.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-1n10", title: "Помещение 1Н10", building: "Корпус 3.2", floor: "1 этаж", area: 270.73, pricePerM: 270000, priceTotal: 73097100, deal: ["sale"], status: "free", specs: [["Площадь", "общая, с антресолью"], ["Высота потолка", "8,98 м до перекрытия, 8,4 м до балки; под антресолью 4,8 м"], ["Антресоль", "высота 2,78 м"], ["Нагрузка на пол", "5 т"]], photos: [L + "plan-32-1.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-1n11", title: "Помещение 1Н11", building: "Корпус 3.2", floor: "1 этаж", area: 258.86, pricePerM: 270000, priceTotal: 69892200, deal: ["sale"], status: "free", specs: [["Площадь", "общая, с антресолью"], ["Высота потолка", "8,98 м до перекрытия, 8,4 м до балки; под антресолью 4,8 м"], ["Антресоль", "высота 2,78 м"], ["Нагрузка на пол", "5 т"]], photos: [L + "plan-32-1.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-2n2", title: "Помещение 2Н2", building: "Корпус 3.2", floor: "2 этаж", area: 139.47, pricePerM: 240000, priceTotal: 33472800, deal: ["sale"], status: "free", specs: [["Высота потолка", "по плану этажа"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-1.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-3n1", title: "Помещение 3Н1", building: "Корпус 3.2", floor: "3 этаж", area: 90.82, pricePerM: 250000, priceTotal: 22705000, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-3n2", title: "Помещение 3Н2", building: "Корпус 3.2", floor: "3 этаж", area: 87.54, pricePerM: 250000, priceTotal: 21885000, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-3n3", title: "Помещение 3Н3", building: "Корпус 3.2", floor: "3 этаж", area: 142.69, pricePerM: 250000, priceTotal: 35672500, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-3n4", title: "Помещение 3Н4", building: "Корпус 3.2", floor: "3 этаж", area: 133.42, pricePerM: 250000, priceTotal: 33355000, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-3n5", title: "Помещение 3Н5", building: "Корпус 3.2", floor: "3 этаж", area: 87.54, pricePerM: 250000, priceTotal: 21885000, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-3n6", title: "Помещение 3Н6", building: "Корпус 3.2", floor: "3 этаж", area: 87.54, pricePerM: 250000, priceTotal: 21885000, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-3n7", title: "Помещение 3Н7", building: "Корпус 3.2", floor: "3 этаж", area: 85.24, pricePerM: 250000, priceTotal: 21310000, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-3n8", title: "Помещение 3Н8", building: "Корпус 3.2", floor: "3 этаж", area: 87.25, pricePerM: 250000, priceTotal: 21812500, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-3n9", title: "Помещение 3Н9", building: "Корпус 3.2", floor: "3 этаж", area: 132.77, pricePerM: 250000, priceTotal: 33192500, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-3n10", title: "Помещение 3Н10", building: "Корпус 3.2", floor: "3 этаж", area: 87.52, pricePerM: 250000, priceTotal: 21880000, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-3n11", title: "Помещение 3Н11", building: "Корпус 3.2", floor: "3 этаж", area: 156.99, pricePerM: 250000, priceTotal: 39247500, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-3n12", title: "Помещение 3Н12", building: "Корпус 3.2", floor: "3 этаж", area: 95.04, pricePerM: 250000, priceTotal: 23760000, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-3n13", title: "Помещение 3Н13", building: "Корпус 3.2", floor: "3 этаж", area: 87.65, pricePerM: 250000, priceTotal: 21912500, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-3n14", title: "Помещение 3Н14", building: "Корпус 3.2", floor: "3 этаж", area: 92.71, pricePerM: 250000, priceTotal: 23177500, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-3n15", title: "Помещение 3Н15", building: "Корпус 3.2", floor: "3 этаж", area: 53.3, pricePerM: 250000, priceTotal: 13325000, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-4n1", title: "Помещение 4Н1", building: "Корпус 3.2", floor: "4 этаж", area: 90.82, pricePerM: 240000, priceTotal: 21796800, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-4n2", title: "Помещение 4Н2", building: "Корпус 3.2", floor: "4 этаж", area: 87.54, pricePerM: 240000, priceTotal: 21009600, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-4n3", title: "Помещение 4Н3", building: "Корпус 3.2", floor: "4 этаж", area: 142.69, pricePerM: 240000, priceTotal: 34245600, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-4n4", title: "Помещение 4Н4", building: "Корпус 3.2", floor: "4 этаж", area: 133.42, pricePerM: 240000, priceTotal: 32020800, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-4n5", title: "Помещение 4Н5", building: "Корпус 3.2", floor: "4 этаж", area: 87.54, pricePerM: 240000, priceTotal: 21009600, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-4n6", title: "Помещение 4Н6", building: "Корпус 3.2", floor: "4 этаж", area: 87.54, pricePerM: 240000, priceTotal: 21009600, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-4n7", title: "Помещение 4Н7", building: "Корпус 3.2", floor: "4 этаж", area: 85.24, pricePerM: 240000, priceTotal: 20457600, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-4n8", title: "Помещение 4Н8", building: "Корпус 3.2", floor: "4 этаж", area: 87.25, pricePerM: 240000, priceTotal: 20940000, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-4n9", title: "Помещение 4Н9", building: "Корпус 3.2", floor: "4 этаж", area: 132.77, pricePerM: 240000, priceTotal: 31864800, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-4n10", title: "Помещение 4Н10", building: "Корпус 3.2", floor: "4 этаж", area: 87.52, pricePerM: 240000, priceTotal: 21004800, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-4n11", title: "Помещение 4Н11", building: "Корпус 3.2", floor: "4 этаж", area: 156.99, pricePerM: 240000, priceTotal: 37677600, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-4n12", title: "Помещение 4Н12", building: "Корпус 3.2", floor: "4 этаж", area: 95.04, pricePerM: 240000, priceTotal: 22809600, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-4n13", title: "Помещение 4Н13", building: "Корпус 3.2", floor: "4 этаж", area: 87.65, pricePerM: 240000, priceTotal: 21036000, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-4n14", title: "Помещение 4Н14", building: "Корпус 3.2", floor: "4 этаж", area: 92.71, pricePerM: 240000, priceTotal: 22250400, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-4n15", title: "Помещение 4Н15", building: "Корпус 3.2", floor: "4 этаж", area: 53.3, pricePerM: 240000, priceTotal: 12792000, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-5n1", title: "Помещение 5Н1", building: "Корпус 3.2", floor: "5 этаж", area: 90.82, pricePerM: 235000, priceTotal: 21342700, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-5n2", title: "Помещение 5Н2", building: "Корпус 3.2", floor: "5 этаж", area: 87.54, pricePerM: 235000, priceTotal: 20571900, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-5n3", title: "Помещение 5Н3", building: "Корпус 3.2", floor: "5 этаж", area: 142.69, pricePerM: 235000, priceTotal: 33532150, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-5n4", title: "Помещение 5Н4", building: "Корпус 3.2", floor: "5 этаж", area: 133.42, pricePerM: 235000, priceTotal: 31353700, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-5n5", title: "Помещение 5Н5", building: "Корпус 3.2", floor: "5 этаж", area: 87.54, pricePerM: 235000, priceTotal: 20571900, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-5n6", title: "Помещение 5Н6", building: "Корпус 3.2", floor: "5 этаж", area: 87.54, pricePerM: 235000, priceTotal: 20571900, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-5n7", title: "Помещение 5Н7", building: "Корпус 3.2", floor: "5 этаж", area: 85.24, pricePerM: 235000, priceTotal: 20031400, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-5n8", title: "Помещение 5Н8", building: "Корпус 3.2", floor: "5 этаж", area: 87.25, pricePerM: 235000, priceTotal: 20503750, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-5n9", title: "Помещение 5Н9", building: "Корпус 3.2", floor: "5 этаж", area: 132.77, pricePerM: 235000, priceTotal: 31200950, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-5n10", title: "Помещение 5Н10", building: "Корпус 3.2", floor: "5 этаж", area: 87.52, pricePerM: 235000, priceTotal: 20567200, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-5n11", title: "Помещение 5Н11", building: "Корпус 3.2", floor: "5 этаж", area: 156.99, pricePerM: 235000, priceTotal: 36892650, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-5n12", title: "Помещение 5Н12", building: "Корпус 3.2", floor: "5 этаж", area: 95.04, pricePerM: 235000, priceTotal: 22334400, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-5n13", title: "Помещение 5Н13", building: "Корпус 3.2", floor: "5 этаж", area: 87.65, pricePerM: 235000, priceTotal: 20597750, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-5n14", title: "Помещение 5Н14", building: "Корпус 3.2", floor: "5 этаж", area: 92.71, pricePerM: 235000, priceTotal: 21786850, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-5n15", title: "Помещение 5Н15", building: "Корпус 3.2", floor: "5 этаж", area: 53.3, pricePerM: 235000, priceTotal: 12525500, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-3.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-6n1", title: "Помещение 6Н1", building: "Корпус 3.2", floor: "6 этаж", area: 90.99, pricePerM: 230000, priceTotal: 20927700, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-6.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-6n2", title: "Помещение 6Н2", building: "Корпус 3.2", floor: "6 этаж", area: 86.65, pricePerM: 230000, priceTotal: 19929500, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-6.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-6n3", title: "Помещение 6Н3", building: "Корпус 3.2", floor: "6 этаж", area: 143.66, pricePerM: 230000, priceTotal: 33041800, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-6.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-6n4", title: "Помещение 6Н4", building: "Корпус 3.2", floor: "6 этаж", area: 133.42, pricePerM: 230000, priceTotal: 30686600, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-6.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-6n5", title: "Помещение 6Н5", building: "Корпус 3.2", floor: "6 этаж", area: 87.54, pricePerM: 230000, priceTotal: 20134200, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-6.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-6n6", title: "Помещение 6Н6", building: "Корпус 3.2", floor: "6 этаж", area: 87.59, pricePerM: 230000, priceTotal: 20145700, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-6.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-6n7", title: "Помещение 6Н7", building: "Корпус 3.2", floor: "6 этаж", area: 87.09, pricePerM: 230000, priceTotal: 20030700, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-6.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-6n8", title: "Помещение 6Н8", building: "Корпус 3.2", floor: "6 этаж", area: 87.08, pricePerM: 230000, priceTotal: 20028400, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-6.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-6n9", title: "Помещение 6Н9", building: "Корпус 3.2", floor: "6 этаж", area: 131.32, pricePerM: 230000, priceTotal: 30203600, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-6.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-6n10", title: "Помещение 6Н10", building: "Корпус 3.2", floor: "6 этаж", area: 87.52, pricePerM: 230000, priceTotal: 20129600, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-6.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-6n11", title: "Помещение 6Н11", building: "Корпус 3.2", floor: "6 этаж", area: 147.79, pricePerM: 230000, priceTotal: 33991700, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-6.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-6n12", title: "Помещение 6Н12", building: "Корпус 3.2", floor: "6 этаж", area: 184.3, pricePerM: 230000, priceTotal: 42389000, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-6.jpg", litRenders[0], litRenders[1], litRenders[2]] },
          { id: "lit-32-6n13", title: "Помещение 6Н13", building: "Корпус 3.2", floor: "6 этаж", area: 179.95, pricePerM: 230000, priceTotal: 41388500, deal: ["sale"], status: "free", specs: [["Высота потолка", "4,56 м до перекрытия, 3,98 м до балки"], ["Нагрузка на пол", "1 т"]], photos: [L + "plan-32-6.jpg", litRenders[0], litRenders[1], litRenders[2]] }
        ]
      },

      {
        id: "kiev",
        name: "Индустриальный парк «Киевское-95»",
        short: "Киевское ш., 95",
        address: "Санкт-Петербург, г. Пушкин, индустриальный парк «Киевское-95», Киевское шоссе",
        mapQuery: "Индустриальный парк Киевское-95", coords: "30.287643,59.727272",
        lines: ["11 км от КАД, 15 км от ЗСД", "25 минут до м. «Московская» на общественном транспорте", "Рядом аэропорт Пулково"],
        chips: ["Первая линия Киевского ш.", "Корпус А сдан"],
        photos: ["assets/img/kiev-3000/card.jpg", "assets/img/kiev-1500/card.jpg", "assets/img/kiev-1496/card.jpg", "assets/img/kiev-579/card.jpg"],
        gallery: ["assets/img/kiev-3000/01.jpg", "assets/img/kiev-3000/04.jpg", "assets/img/kiev-1500/01.jpg", "assets/img/kiev-1496/01.jpg", "assets/img/kiev-1496/02.jpg", "assets/img/kiev-3000/02.jpg", "assets/img/kiev-1500/05.jpg"],
        lead: "Производственно-складские помещения от застройщика на первой линии Киевского шоссе: производство, склад, мастерская, шоурум. Секции с отдельными въездами, воротами и узлами учёта.",
        facts: [["13,2 га", "территория Light Industrial"], ["67 340 м²", "общая площадь комплекса"], ["от 579 м²", "секции, можно объединять"], ["5 т/м²", "нагрузка на пол"]],
        specs: [
          ["Рабочая высота", "8 м, возможна кран-балка до 5 т"],
          ["Пол", "антипылевое покрытие, нагрузка до 5 т/м²"],
          ["Ворота", "промышленные 4,0×4,5 м"],
          ["Пролёт", "24 м, усиленный ж/б каркас"],
          ["Антресоль", "до +40% площади"],
          ["Мощность", "50 кВт на секцию, увеличение по запросу"],
          ["Водоснабжение", "1 м³ в сутки"],
          ["Отопление", "свой узел учёта от общей газовой котельной"],
          ["Эксплуатация", "181 ₽/м², отопление не входит"]
        ],
        stages: [["Корпус А", "7 260 м²", "Сдан"], ["Корпус Б", "8 712 м²", "Сдача 2 кв. 2027"], ["Корпус В", "10 164 м²", "Сдача 4 кв. 2027"], ["Корпус Г", "11 616 м²", "Сдача 2 кв. 2028"], ["Корпус Д", "13 068 м²", "Сдача 4 кв. 2028"], ["Корпус Е", "14 520 м²", "Сдача 2029"]],
        lots: [
          {
            id: "kiev-a1", title: "Секция A1", building: "Корпус А", floor: "",
            area: 579, pricePerM: 115000, priceTotal: null, vat: "НДС отдельно", deal: ["sale", "rent"], rentPerM: 900, rentNote: "за м² в месяц без НДС, прямой договор без посредников", status: "free",
            specs: [["Готовность", "100%"], ["Подъезд", "грузовики до 12 м"], ["Парковка", "7 мест входят в стоимость"], ["Остекление", "витражное, входная группа"], ["Условия покупки", "формат оплаты обсуждается индивидуально"]],
            photos: ["assets/img/kiev-579/01.jpg", "assets/img/kiev-579/plan-a1.jpg", "assets/img/kiev-579/02.jpg", "assets/img/kiev-579/03.jpg", "assets/img/kiev-579/04.jpg"]
          },
          {
            id: "kiev-a8", title: "Секция A8", building: "Корпус А", floor: "",
            area: 873, deal: ["rent"], rentPerM: 900, rentNote: "за м² в месяц без НДС, прямой договор без посредников", status: "free",
            specs: [["Готовность", "100%"], ["Тип", "секция с административно-бытовым корпусом"], ["Подъезд", "еврофура до 16,5 м"]],
            photos: ["assets/img/kiev-1500/02.jpg", "assets/img/kiev-579/plan-a8.jpg", "assets/img/kiev-1500/03.jpg", "assets/img/kiev-1500/04.jpg"]
          },
          {
            id: "kiev-a3a8", title: "Секции A3 + A8", building: "Корпус А", floor: "",
            area: 1452, pricePerM: 115000, priceTotal: null, vat: "НДС отдельно", deal: ["sale", "rent"], rentPerM: 900, rentNote: "за м² в месяц без НДС, плюс эксплуатация 181 ₽/м², электричество и вода по счётчикам; прямой договор без посредников", status: "free",
            specs: [["Готовность", "100%"], ["Состав", "A3 579 м² + A8 873 м²"], ["Нагрузка на пол", "5 т/м²"], ["Парковка", "14 мест"]],
            photos: ["assets/img/kiev-1500/01.jpg", "assets/img/kiev-579/plan-a3a8.jpg", "assets/img/kiev-1500/05.jpg", "assets/img/kiev-1500/02.jpg", "assets/img/kiev-1500/03.jpg", "assets/img/kiev-1500/04.jpg"]
          },
          {
            id: "kiev-1496", title: "Помещение 1 496 м²", building: "", floor: "",
            area: 1496, pricePerM: 130000, priceTotal: null, vat: "НДС 5% включён", deal: ["sale"], status: "free",
            specs: [["Здание", "одно здание 3 000 м² разделено на два помещения"], ["Площадь по уровням", "1 этаж 1 296 м² (18×72 м), второй уровень 200 м²"], ["Высота потолка", "12 м"], ["Нагрузка на пол", "5 т/м²"], ["Кран-балка", "10 т"], ["Оснащение", "покрасочная камера, вентиляция с подогревом"], ["Участок", "25 соток в собственности"], ["Коммуникации", "150 кВт, газ, вода, канализация"]],
            photos: ["assets/img/kiev-1496/02.jpg", "assets/img/kiev-1496/01.jpg", "assets/img/kiev-1496/03.jpg", "assets/img/kiev-1496/04.jpg", "assets/img/kiev-1496/05.jpg"]
          },
          {
            id: "kiev-3000", title: "Строение 3 000 м²", building: "", floor: "",
            area: 3000, pricePerM: null, priceTotal: 300000000, vat: "с НДС", deal: ["sale"], status: "free",
            specs: [["Оснащение", "без кран-балки и дополнительных улучшений"]],
            photos: ["assets/img/kiev-3000/03.jpg", "assets/img/kiev-3000/04.jpg", "assets/img/kiev-3000/05.jpg", "assets/img/kiev-3000/06.jpg"]
          }
        ]
      },

      {
        id: "kiev-zu",
        name: "Участки «Киевское-95»",
        short: "Киевское ш., 95 — участки",
        unit: "sot",
        address: "Санкт-Петербург, г. Пушкин, индустриальный парк «Киевское-95», Киевское шоссе",
        mapQuery: "Индустриальный парк Киевское-95", coords: "30.287643,59.727272",
        lines: ["Зона Build-to-Suit индустриального парка", "10 минут до КАД, первая линия Киевского шоссе", "Рядом аэропорт Пулково"],
        chips: ["От 0,5 га", "Инженерно подготовлены"],
        photos: [Z + "map-s.jpg", Z + "aerial-s.jpg"],
        gallery: [Z + "map.jpg", Z + "aerial.jpg"],
        lead: "Инженерно подготовленные участки промышленного назначения от 0,5 га в зоне Build-to-Suit индустриального парка «Киевское-95» — под строительство собственного здания.",
        facts: [["36,5 га", "зона Build-to-Suit"], ["от 665 000 ₽", "за сотку"], ["14 участков", "свободно"], ["150 кВт", "базовая мощность на 0,5 га"]],
        specs: [
          ["Электроснабжение", "150 кВт на 0,5 га"],
          ["Газоснабжение", "15 м³/час на 0,5 га"],
          ["Водоснабжение", "1 м³/сутки на 0,5 га"],
          ["Водоотведение", "комбинированная система"],
          ["Мощности", "возможно увеличение по запросу"],
          ["Инфраструктура парка", "асфальтовые проезды 8 м, коммуникации под землёй, КПП и видеонаблюдение 24/7"]
        ],
        lots: [
          { id: "zu-15a", title: "Участок 15а", building: "Зона Build-to-Suit", floor: "", unit: "sot", area: 5732.0, priceTotal: 38117800, pricePerSot: 665000, pricePerM: null, deal: ["sale"], status: "free", specs: [["Площадь", "57,32 сот"], ["Особенность", "участок со зданием 1 462 м²"]], photos: [Z + "map.jpg", Z + "aerial.jpg"] },
          { id: "zu-15b", title: "Участок 15б", building: "Зона Build-to-Suit", floor: "", unit: "sot", area: 5878.0, priceTotal: null, pricePerSot: null, pricePerM: null, deal: ["sale"], status: "reserved", specs: [["Площадь", "58,78 сот"]], photos: [Z + "map.jpg", Z + "aerial.jpg"] },
          { id: "zu-15v", title: "Участок 15в", building: "Зона Build-to-Suit", floor: "", unit: "sot", area: 4469.0, priceTotal: null, pricePerSot: null, pricePerM: null, deal: ["sale"], status: "reserved", specs: [["Площадь", "44,69 сот"]], photos: [Z + "map.jpg", Z + "aerial.jpg"] },
          { id: "zu-21", title: "Участок 21", building: "Зона Build-to-Suit", floor: "", unit: "sot", area: 10763.0, priceTotal: 79646200, pricePerSot: 740000, pricePerM: null, deal: ["sale"], status: "free", specs: [["Площадь", "107,63 сот"]], photos: [Z + "map.jpg", Z + "aerial.jpg"] },
          { id: "zu-22", title: "Участок 22", building: "Зона Build-to-Suit", floor: "", unit: "sot", area: 16365.0, priceTotal: 121101000, pricePerSot: 740000, pricePerM: null, deal: ["sale"], status: "free", specs: [["Площадь", "163,65 сот"]], photos: [Z + "map.jpg", Z + "aerial.jpg"] },
          { id: "zu-29", title: "Участок 29", building: "Зона Build-to-Suit", floor: "", unit: "sot", area: 14533.0, priceTotal: 102457650, pricePerSot: 705000, pricePerM: null, deal: ["sale"], status: "free", specs: [["Площадь", "145,33 сот"]], photos: [Z + "map.jpg", Z + "aerial.jpg"] },
          { id: "zu-34", title: "Участок 34", building: "Зона Build-to-Suit", floor: "", unit: "sot", area: 12950.0, priceTotal: 90002500, pricePerSot: 695000, pricePerM: null, deal: ["sale"], status: "free", specs: [["Площадь", "129,5 сот"]], photos: [Z + "map.jpg", Z + "aerial.jpg"] },
          { id: "zu-35", title: "Участок 35", building: "Зона Build-to-Suit", floor: "", unit: "sot", area: 9459.0, priceTotal: 63375300, pricePerSot: 670000, pricePerM: null, deal: ["sale"], status: "free", specs: [["Площадь", "94,59 сот"]], photos: [Z + "map.jpg", Z + "aerial.jpg"] },
          { id: "zu-36", title: "Участок 36", building: "Зона Build-to-Suit", floor: "", unit: "sot", area: 8419.0, priceTotal: 59480235, pricePerSot: 706500, pricePerM: null, deal: ["sale"], status: "free", specs: [["Площадь", "84,19 сот"]], photos: [Z + "map.jpg", Z + "aerial.jpg"] },
          { id: "zu-37", title: "Участок 37", building: "Зона Build-to-Suit", floor: "", unit: "sot", area: 5297.0, priceTotal: 45024500, pricePerSot: 850000, pricePerM: null, deal: ["sale"], status: "free", specs: [["Площадь", "52,97 сот"]], photos: [Z + "map.jpg", Z + "aerial.jpg"] },
          { id: "zu-38", title: "Участок 38", building: "Зона Build-to-Suit", floor: "", unit: "sot", area: 4779.0, priceTotal: 40621500, pricePerSot: 850000, pricePerM: null, deal: ["sale"], status: "free", specs: [["Площадь", "47,79 сот"]], photos: [Z + "map.jpg", Z + "aerial.jpg"] },
          { id: "zu-39", title: "Участок 39", building: "Зона Build-to-Suit", floor: "", unit: "sot", area: 3816.0, priceTotal: 30737880, pricePerSot: 805500, pricePerM: null, deal: ["sale"], status: "free", specs: [["Площадь", "38,16 сот"]], photos: [Z + "map.jpg", Z + "aerial.jpg"] },
          { id: "zu-40", title: "Участок 40", building: "Зона Build-to-Suit", floor: "", unit: "sot", area: 3410.0, priceTotal: 28303000, pricePerSot: 830000, pricePerM: null, deal: ["sale"], status: "free", specs: [["Площадь", "34,1 сот"]], photos: [Z + "map.jpg", Z + "aerial.jpg"] },
          { id: "zu-41", title: "Участок 41", building: "Зона Build-to-Suit", floor: "", unit: "sot", area: 2918.0, priceTotal: 22760400, pricePerSot: 780000, pricePerM: null, deal: ["sale"], status: "free", specs: [["Площадь", "29,18 сот"]], photos: [Z + "map.jpg", Z + "aerial.jpg"] },
          { id: "zu-50", title: "Участок 50", building: "Зона Build-to-Suit", floor: "", unit: "sot", area: 5212.0, priceTotal: 44302000, pricePerSot: 850000, pricePerM: null, deal: ["sale"], status: "free", specs: [["Площадь", "52,12 сот"]], photos: [Z + "map.jpg", Z + "aerial.jpg"] },
          { id: "zu-51", title: "Участок 51", building: "Зона Build-to-Suit", floor: "", unit: "sot", area: 11628.0, priceTotal: null, pricePerSot: null, pricePerM: null, deal: ["sale"], status: "reserved", specs: [["Площадь", "116,28 сот"]], photos: [Z + "map.jpg", Z + "aerial.jpg"] },
          { id: "zu-52", title: "Участок 52", building: "Зона Build-to-Suit", floor: "", unit: "sot", area: 8669.0, priceTotal: 69352000, pricePerSot: 800000, pricePerM: null, deal: ["sale"], status: "free", specs: [["Площадь", "86,69 сот"]], photos: [Z + "map.jpg", Z + "aerial.jpg"] }
        ]
      },
      {
        id: "murm",
        name: "Склад, производство — Мурманское 250",
        short: "Мурманское ш., 250",
        address: "Ленинградская область, Всеволожский р-н, Мурманское шоссе, д. 250",
        mapQuery: "Ленинградская область, Мурманское шоссе, 250", coords: "30.629218,59.894978",
        lines: ["Заезд и площадка для манёвров длинномеров", "Участок 13 соток в собственности, ВРИ «склад»"],
        chips: ["Продажа и аренда", "Участок в собственности"],
        photos: [M + "01s.jpg", M + "02s.jpg", M + "03s.jpg", M + "06s.jpg", M + "05s.jpg"],
        gallery: [M + "01.jpg", M + "02.jpg", M + "03.jpg", M + "04.jpg", M + "05.jpg", M + "06.jpg", M + "07.jpg"],
        lead: "Склад, производство. Площадь 540 м² (36 × 15 м), участок 13 соток в собственности, ВРИ «склад». Продажа и аренда.",
        facts: [["540 м²", "здание 36 × 15 м"], ["7 м", "высота в коньке"], ["5 т/м²", "нагрузка на пол"], ["150 кВт", "электрическая мощность"]],
        specs: [
          ["Здание", "36 × 15 м, 540 м²"],
          ["Высота", "7 м в коньке"],
          ["Нагрузка на пол", "5 т/м²"],
          ["Электричество", "150 кВт"],
          ["Вода", "скважина"],
          ["Канализация", "септик"],
          ["Отопление", "газ, газгольдер"],
          ["Подъезд", "заезд и площадка для манёвров длинномеров"],
          ["Участок", "13 соток в собственности, ВРИ «склад»"]
        ],
        lots: [
          { id: "murm-540", title: "540 м²", building: "", floor: "", area: 540, priceTotal: 30000000, pricePerM: null, rentTotal: 380000, rentNote: "в месяц, УСН; в стоимость ничего не входит", deal: ["sale", "rent"], status: "free", specs: [["Размер", "36 × 15 м"], ["Высота в коньке", "7 м"]], photos: [M + "01.jpg", M + "06.jpg", M + "02.jpg", M + "03.jpg", M + "05.jpg"] },
          { id: "murm-270", title: "Часть здания 270 м²", building: "", floor: "", area: 270, priceTotal: 16000000, pricePerM: null, deal: ["sale"], status: "free", specs: [], photos: [M + "02.jpg", M + "05.jpg", M + "07.jpg", M + "04.jpg"] }
        ]
      },

      {
        id: "vozr",
        name: "Имущественный комплекс на Возрождения",
        short: "ул. Возрождения, 20 и 24",
        address: "Санкт-Петербург, Кировский р-н, ул. Возрождения, 20 и 24",
        mapQuery: "Санкт-Петербург, улица Возрождения, 20", coords: "30.271482,59.882365",
        lines: ["10 минут пешком до м. «Кировский завод»", "4 км до съезда с ЗСД, около 8 км до КАД", "Пересечение ул. Возрождения и пр. Маршала Говорова"],
        chips: ["Готовый арендный бизнес", "Объект эксплуатируется"],
        photos: [V + "01s.jpg", V + "02s.jpg"],
        gallery: [V + "01.jpg", V + "02.jpg"],
        lead: "Продаётся имущественный комплекс из производственных, складских и офисных зданий — готовый арендный бизнес со стабильным доходом более 20 лет. Не требует дополнительных вложений.",
        facts: [["10 500 м²", "11 зданий"], ["19 051 м²", "два смежных участка"], ["51 млн ₽", "чистая прибыль за 2025 год"], ["20+ лет", "стабильный арендный доход"]],
        specs: [
          ["Здание 1", "3 этажа, 1961 г., 5 380 м²: офисы 800 м², производство 4 580 м²; отапливаемое"],
          ["Здание 2", "2 этажа, 1966 г., 949 м²: офисы 65 м², производство 884 м²; отапливаемое"],
          ["Здание 3", "кирпичное, 1 этаж, 146 м²; отапливаемое"],
          ["Здание 4", "кирпичное, 1 этаж, 1 979 м²; отапливаемое"],
          ["Здания 5–11", "металлические ангары и навес: 341, 70, 153, 153, 419, 581 и 306 м²; неотапливаемые"],
          ["Электроснабжение", "400 кВА, две подстанции 250 и 150 кВА"],
          ["Теплоснабжение", "модульная газовая котельная мощностью 1 ГВт, 2020 г."],
          ["Водоснабжение", "договорной объём 2 031 м³/мес"],
          ["Водоотведение", "договорной объём 2 809 м³/мес"],
          ["Территория", "огорожена, три въезда, пост охраны, парковка для легковых и большегрузов"],
          ["Земля", "аренда на 49 лет, осталось 24 года"]
        ],
        lots: [
          { id: "vozr-complex", title: "Комплекс целиком", building: "11 зданий", floor: "", area: 10500, priceTotal: 585000000, pricePerM: null, deal: ["sale"], status: "free", specs: [["Участки", "19 051 м², аренда, осталось 24 года"], ["Чистая прибыль 2025", "51 млн ₽"]], photos: [V + "01.jpg", V + "02.jpg"] }
        ]
      },

      {
        id: "zaus",
        name: "Имущественный комплекс на Заусадебной",
        short: "ул. Заусадебная, 31",
        address: "Санкт-Петербург, Приморский р-н, ул. Заусадебная, 31",
        mapQuery: "Санкт-Петербург, Заусадебная улица, 31", coords: "30.272174,59.987798",
        lines: ["7 минут пешком до м. «Старая Деревня»", "3 км до съезда с ЗСД, около 14 км до КАД", "Въезд с ул. Заусадебной, выход участков на ул. Сабировскую"],
        chips: ["Готовый арендный бизнес", "Земля в собственности"],
        photos: [ZS + "01s.jpg", ZS + "02s.jpg", ZS + "03s.jpg", ZS + "07s.jpg", ZS + "11s.jpg"],
        gallery: [ZS + "01.jpg", ZS + "02.jpg", ZS + "03.jpg", ZS + "04.jpg", ZS + "05.jpg", ZS + "06.jpg", ZS + "07.jpg", ZS + "08.jpg", ZS + "09.jpg", ZS + "10.jpg", ZS + "11.jpg", ZS + "12.jpg", ZS + "13.jpg", ZS + "14.jpg", ZS + "scheme.jpg"],
        lead: "Продаются производственные, складские и офисные помещения — готовый арендный бизнес со стабильным доходом более 20 лет. Объект эксплуатируется и не требует дополнительных вложений. Возможна продажа частями.",
        facts: [["10 705 м²", "общая площадь зданий"], ["18 742 м²", "пять смежных участков в собственности"], ["40 млн ₽", "чистая прибыль за 2025 год"], ["460 кВт", "выделенная мощность"]],
        specs: [
          ["Главный корпус", "3 000 м²: второй этаж частично офисный, на первом автосервисы и производство; выход на первую линию ул. Заусадебной"],
          ["Три здания", "1 392, 836 и 2 500 м², потолки от 5 до 10 м; можно разделить на отдельные помещения"],
          ["Два некапитальных строения", "450 и 700 м², с коммуникациями и отоплением, потолки от 4 до 8 м — производство, склад, автосервисы"],
          ["Два здания", "383 и 386 м², потолки 3–4 м"],
          ["Девять зданий", "по 100–120 м², потолки от 3 м"],
          ["Земля", "5 участков в собственности; ГПЗУ от мая 2026 г. с основными видами разрешённого использования"],
          ["Электроснабжение", "460 кВт"],
          ["Теплоснабжение", "модульная газовая котельная 1 400 кВт, 2023 г."],
          ["Вода и канализация", "центральные"],
          ["Территория", "огорожена, два въезда, пост охраны, парковка для легковых и большегрузов"]
        ],
        lots: [
          { id: "zaus-complex", title: "Комплекс целиком", building: "", floor: "", area: 10705, priceTotal: 585000000, pricePerM: null, deal: ["sale"], status: "free", specs: [["Участки", "18 742 м² в собственности"], ["Чистая прибыль 2025", "40 млн ₽"], ["Продажа частями", "от 65 000 до 85 000 ₽ за м²"]], photos: [ZS + "01.jpg", ZS + "scheme.jpg", ZS + "02.jpg", ZS + "07.jpg", ZS + "11.jpg"] },
          { id: "zaus-part", title: "Часть комплекса с выездом на Сабировскую", building: "Лит. Е, З, Ж, И, К, Л, М", floor: "", area: 2933, priceTotal: 200000000, pricePerM: null, deal: ["sale"], status: "free", specs: [["Земля", "около 75 соток"], ["Мощность", "260 кВт"], ["Выезд", "автономный, на ул. Сабировскую"]], photos: [ZS + "07.jpg", ZS + "scheme.jpg", ZS + "08.jpg", ZS + "10.jpg", ZS + "13.jpg"] }
        ]
      },

      {
        id: "koms",
        name: "Производство на ул. Комсомола",
        short: "ул. Комсомола, 1-3",
        address: "Санкт-Петербург, Калининский р-н, ул. Комсомола, 1-3",
        mapQuery: "Санкт-Петербург, улица Комсомола, 1-3", coords: "30.371842,59.956349",
        lines: ["Метро «Площадь Ленина»", "Подъезд для грузового транспорта", "Парковка, охрана, кафе"],
        chips: ["Класс C", "Бессрочный договор"],
        photos: [K + "01s.jpg", K + "02s.jpg", K + "04s.jpg", K + "05s.jpg", K + "06s.jpg"],
        gallery: [K + "01.jpg", K + "02.jpg", K + "03.jpg", K + "04.jpg", K + "05.jpg", K + "06.jpg", K + "07.jpg", K + "08.jpg", K + "09.jpg", K + "10.jpg", K + "11.jpg", K + "12.jpg", K + "13.jpg", K + "plan-1.jpg", K + "plan-2.jpg"],
        lead: "Производственное помещение класса C на двух этажах: 250,4 м² на первом и 56,6 м² на втором. Аренда, бессрочный договор.",
        facts: [["307 м²", "общая площадь"], ["5,88 м", "высота до потолка"], ["20 кВт", "с возможностью увеличения"], ["909 ₽/м²", "аренда в месяц, НДС включён"]],
        specs: [
          ["Тип объекта", "производство, класс C"],
          ["Площадь", "307 м²: 1 этаж — 250,4 м², 2 этаж — 56,6 м²"],
          ["Высота до потолка", "5,88 м"],
          ["Пол", "ровный бетон"],
          ["Стены", "окрашенные"],
          ["Окна", "много окон"],
          ["Подъезд", "есть подъезд для грузового транспорта"],
          ["Электроснабжение", "20 кВт, возможно увеличение"],
          ["Коммуникации", "холодное водоснабжение, отопление, канализация"],
          ["Безопасность", "охрана, видеонаблюдение, пожарная сигнализация"],
          ["Инфраструктура", "парковка, доступ на объект, кафе"],
          ["Условия", "бессрочный договор, НДС входит в арендную плату"]
        ],
        lots: [
          { id: "koms-307", title: "Производственное помещение", building: "", floor: "1 и 2 этаж", area: 307, rentPerM: 909, rentNote: "в месяц, НДС включён; 279 063 ₽ за всё помещение", deal: ["rent"], status: "free", specs: [["1 этаж", "250,4 м²"], ["2 этаж", "56,6 м²"], ["Высота до потолка", "5,88 м"], ["Электроснабжение", "20 кВт, возможно увеличение"]], photos: [K + "01.jpg", K + "plan-1.jpg", K + "plan-2.jpg", K + "05.jpg", K + "06.jpg", K + "04.jpg", K + "12.jpg"] }
        ]
      },

      {
        id: "shaf",
        name: "Имущественный комплекс на Шафировском",
        short: "Шафировский пр., 6",
        address: "Санкт-Петербург, Шафировский пр., 6",
        mapQuery: "Санкт-Петербург, Шафировский проспект, 6", coords: "30.438776,59.991376",
        lines: ["Погрузочно-разгрузочная зона с рампами", "КПП и видеонаблюдение", "Действующий долгосрочный арендатор"],
        chips: ["Готовый арендный бизнес", "Без обременений"],
        photos: [SH + "01s.jpg", SH + "02s.jpg", SH + "03s.jpg", SH + "06s.jpg", SH + "07s.jpg"],
        gallery: [SH + "01.jpg", SH + "02.jpg", SH + "03.jpg", SH + "04.jpg", SH + "05.jpg", SH + "06.jpg", SH + "07.jpg", SH + "08.jpg", SH + "09.jpg", SH + "10.jpg", SH + "11.jpg", SH + "12.jpg", SH + "13.jpg", SH + "14.jpg", SH + "15.jpg", SH + "16.jpg", SH + "17.jpg", SH + "18.jpg", SH + "19.jpg", SH + "pa1.jpg", SH + "pa2.jpg", SH + "pa3.jpg", SH + "pa4.jpg", SH + "pb1.jpg", SH + "pb2.jpg", SH + "pb3.jpg"],
        lead: "Продажа имущественного комплекса 1994 года постройки в отличном техническом состоянии, не требует капитальных вложений. Действующий долгосрочный договор аренды до 30.06.2030.",
        facts: [["13 537,8 м²", "общая площадь помещений"], ["1 530 кВт", "электрическая мощность"], ["7–14 м", "высота производственных площадей"], ["11 006 м²", "земельный участок, аренда до 2053 г."]],
        specs: [
          ["Помещение 1", "нежилое, 8 174,4 м², 4 этажа"],
          ["Помещение 2", "нежилое, 5 363,4 м², 3 этажа"],
          ["Год постройки", "1994, отличное техническое состояние"],
          ["Высота потолков", "производственные площади — от 7 до 14 м, административные — от 3 до 6 м"],
          ["Электроснабжение", "1 530 кВт"],
          ["Вода, канализация, отопление", "центральные"],
          ["Инженерия", "вентиляция, кондиционирование, пожарная сигнализация, видеонаблюдение, КПП"],
          ["Логистика", "погрузочно-разгрузочная зона с рампами"],
          ["Земельный участок", "право аренды, 11 006 м², срок аренды до 14.06.2053"],
          ["Право собственности", "подтверждено, без обременений; полный пакет документов готов к сделке"],
          ["Арендатор", "действующий долгосрочный договор до 30.06.2030"]
        ],
        lots: [
          { id: "shaf-complex", title: "Комплекс целиком", building: "2 помещения", floor: "", area: 13537.8, priceTotal: 480000000, pricePerM: null, deal: ["sale"], status: "free", specs: [["Состав", "8 174,4 м² (4 этажа) и 5 363,4 м² (3 этажа)"], ["Участок", "11 006 м², аренда до 2053 г."], ["Арендатор", "долгосрочный договор до 30.06.2030"]], photos: [SH + "01.jpg", SH + "pa1.jpg", SH + "pb1.jpg", SH + "02.jpg", SH + "06.jpg", SH + "07.jpg", SH + "08.jpg"] }
        ]
      },

      {
        id: "mar",
        name: "ПРОМСТРАНСТВО в индустриальном парке «Марьино»",
        short: "ИП «Марьино»",
        address: "Санкт-Петербург, индустриальный парк «Марьино»",
        mapQuery: "Индустриальный парк Марьино", coords: "29.962411,59.833059",
        lines: ["3 минуты от развязки с КАД", "20 минут на развозке от м. «Проспект Ветеранов»", "20 минут до трасс М-11 и М-10, 30 минут до центра"],
        chips: ["Ввод — ноябрь 2026", "Рассрочка и лизинг"],
        photos: [M2 + "01s.jpg", M2 + "02s.jpg", M2 + "05s.jpg", M2 + "07s.jpg", M2 + "06s.jpg"],
        gallery: [M2 + "01.jpg", M2 + "02.jpg", M2 + "03.jpg", M2 + "05.jpg", M2 + "06.jpg", M2 + "07.jpg", M2 + "08.jpg", M2 + "09.jpg", M2 + "10.jpg", M2 + "11.jpg", M2 + "12.jpg", M2 + "14.jpg", M2 + "04.jpg", M2 + "plan-a.jpg", M2 + "plan-bc.jpg", M2 + "plan-d.jpg"],
        lead: "Новый проект лайт-индастриал от ВТБ Девелопмент в индустриальном парке «Марьино»: 13 сблокированных зданий, блоки 750 и 1 500 м² под производства и склады. У каждого блока своя прилегающая территория с парковкой и зоной погрузки. Строительство завершено, получено разрешение на ввод в эксплуатацию.",
        facts: [["19 500 м²", "общая площадь комплекса"], ["13 зданий", "блоки 730 и 1 495 м²"], ["8 м", "эффективная высота хранения"], ["5 т/м²", "нагрузка на пол"]],
        specs: [
          ["Участок", "3,7 га"],
          ["Здания", "13 сблокированных зданий: 4 с полом на уровне 1,2 м, 9 с полом на уровне 0 м"],
          ["Эффективная высота хранения", "8 м"],
          ["Нагрузка на пол", "5 т/м², на антресоли 0,4 т/м²"],
          ["Сетка колонн", "12 × 18 м"],
          ["Территория", "перед зданием — в эксклюзивном пользовании, своя парковка и зона погрузки"],
          ["Учёт", "индивидуальные приборы учёта электричества, воды и газа"],
          ["Безопасность", "КПП, охрана, видеонаблюдение, управляющая компания"],
          ["Назначение", "склады, производства, сервис-центры, шоурумы"],
          ["Покупка", "в собственность с долей в общем земельном участке и правом эксклюзивного пользования прилегающей частью; аренда — возможна по запросу"],
          ["Покупатели", "юридические лица и ИП"],
          ["Ограничения", "не допускаются пищевые и фармацевтические производства и склады, а также установление санитарно-защитной зоны"],
          ["Эксплуатационный платёж", "ежемесячный, за инженерные системы и территорию общего пользования, ежегодно индексируется: 297 000 ₽ без НДС за блок 1 495 м², 148 500 ₽ за блок D"],
          ["Дополнительно", "мощности сверх базовых, дооснащение и чистовая отделка — по отдельному согласованию"],
          ["Управляющая компания", "более 10 лет управляет парком «Марьино»; развозка сотрудников от метро — опционально"]
        ],
        stages: [["Ввод в эксплуатацию", "ноябрь 2026", "Разрешение на ввод получено"]],
        buy: ["Специальные цены при единовременной оплате", "Рассрочка от застройщика", "Льготное финансирование от Банка ВТБ и Альфа-Банка", "Лизинг от ВТБ Лизинг", "Цена зависит от стадии готовности и условий оплаты", "Аренда — от 1 200 ₽ за м² в месяц без НДС, ставка обсуждается"],
        lots: [
          { id: "mar-a", title: "Блоки A1–A4 · Склады", building: "4 отдельных здания", floor: "", area: 1495, priceTotal: 165000000, pricePerM: 110000, vat: "без НДС; с НДС — 199 914 000 ₽", rentPerM: 1200, rentNote: "за м² в месяц без НДС, ставка обсуждается", deal: ["sale", "rent"], status: "free",
            specs: [["Площадь блока", "1 495 м², в т. ч. антресоль 200 м²"], ["Высота пола", "1,2 м"]].concat(COMMON, [["Ворота", "2 на блок"], ["Электроснабжение", "100 кВт на здание, с возможностью увеличения до 300 кВт и более"], ["Отопление", "газовая котельная 90 кВт в каждом здании, 10,5 м³/ч"], ["Водоснабжение", "2 м³ в сутки на блок"], ["Пожаротушение", "спринклерная система"]]).concat([["Цена с НДС", "199 914 000 ₽"], ["Эксплуатационный платёж", "297 000 ₽ в месяц без НДС (362 340 ₽ с НДС)"]]),
            photos: [M2 + "05.jpg", M2 + "plan-a.jpg", M2 + "01.jpg", M2 + "14.jpg"] },
          { id: "mar-b1", title: "Блок B1 · Пром Макси", building: "отдельное здание", floor: "", area: 1495, priceTotal: 175000000, pricePerM: 117000, vat: "без НДС; с НДС — 212 114 000 ₽", rentPerM: 1200, rentNote: "за м² в месяц без НДС, ставка обсуждается", deal: ["sale", "rent"], status: "free",
            specs: [["Площадь блока", "1 495 м², в т. ч. антресоль 200 м²"], ["Высота пола", "0 м"]].concat(COMMON, [["Кран-балка", "закладные под кран-балку 5 т"], ["Электроснабжение", "100 кВт на здание, с возможностью увеличения до 300 кВт и более"], ["Отопление", "газовая котельная 90 кВт в каждом здании, 10,5 м³/ч"], ["Водоснабжение", "2 м³ в сутки на блок"], ["Пожаротушение", "гидранты, возможна спринклерная система"]]).concat([["Цена с НДС", "212 114 000 ₽"], ["Эксплуатационный платёж", "297 000 ₽ в месяц без НДС (362 340 ₽ с НДС)"]]),
            photos: [M2 + "06.jpg", M2 + "plan-bc.jpg", M2 + "08.jpg", M2 + "14.jpg"] },
          { id: "mar-b23", title: "Блоки B2–B3 · Пром Макси", building: "2 отдельных здания", floor: "", area: 1495, priceTotal: 160000000, pricePerM: 107000, vat: "без НДС; с НДС — 193 814 000 ₽", rentPerM: 1200, rentNote: "за м² в месяц без НДС, ставка обсуждается", deal: ["sale", "rent"], status: "free",
            specs: [["Площадь блока", "1 495 м², в т. ч. антресоль 200 м²"], ["Высота пола", "0 м"]].concat(COMMON, [["Кран-балка", "закладные под кран-балку 5 т"], ["Электроснабжение", "100 кВт на здание, с возможностью увеличения до 300 кВт и более"], ["Отопление", "газовая котельная 90 кВт в каждом здании, 10,5 м³/ч"], ["Водоснабжение", "2 м³ в сутки на блок"], ["Пожаротушение", "гидранты, возможна спринклерная система"]]).concat([["Цена с НДС", "193 814 000 ₽"], ["Эксплуатационный платёж", "297 000 ₽ в месяц без НДС (362 340 ₽ с НДС)"]]),
            photos: [M2 + "06.jpg", M2 + "plan-bc.jpg", M2 + "08.jpg", M2 + "14.jpg"] },
          { id: "mar-c", title: "Блоки C1–C3 · Пром Макси", building: "3 отдельных здания", floor: "", area: 1495, priceTotal: 163000000, pricePerM: 109000, vat: "без НДС; с НДС — 197 474 000 ₽", rentPerM: 1200, rentNote: "за м² в месяц без НДС, ставка обсуждается", deal: ["sale", "rent"], status: "free",
            specs: [["Площадь блока", "1 495 м², в т. ч. антресоль 200 м²"], ["Высота пола", "0 м"]].concat(COMMON, [["Кран-балка", "закладные под кран-балку 5 т"], ["Электроснабжение", "100 кВт на здание, с возможностью увеличения до 300 кВт и более"], ["Отопление", "газовая котельная 90 кВт в каждом здании, 10,5 м³/ч"], ["Водоснабжение", "2 м³ в сутки на блок"], ["Пожаротушение", "гидранты, возможна спринклерная система"]]).concat([["Цена с НДС", "197 474 000 ₽"], ["Эксплуатационный платёж", "297 000 ₽ в месяц без НДС (362 340 ₽ с НДС)"]]),
            photos: [M2 + "06.jpg", M2 + "plan-bc.jpg", M2 + "08.jpg", M2 + "14.jpg"] },
          { id: "mar-d", title: "Блоки D1–D6 · Пром Мини", building: "помещения в зданиях", floor: "", area: 730, priceTotal: 83000000, pricePerM: 113000, vat: "без НДС; с НДС — 100 556 000 ₽", rentPerM: 1200, rentNote: "за м² в месяц без НДС, ставка обсуждается", deal: ["sale", "rent"], status: "free",
            specs: [["Площадь блока", "730 м², в т. ч. антресоль 100 м²"], ["Высота пола", "0 м"]].concat(COMMON, [["Кран-балка", "закладные под кран-балку 5 т"], ["Ворота", "2 на блок"], ["Электроснабжение", "50 кВт на здание, с возможностью увеличения до 300 кВт и более"], ["Отопление", "газовая котельная 60 кВт в каждом здании, 7 м³/ч"], ["Водоснабжение", "1 м³ в сутки на блок"], ["Пожаротушение", "гидранты, возможна спринклерная система"]]).concat([["Цена с НДС", "100 556 000 ₽"], ["Эксплуатационный платёж", "148 500 ₽ в месяц без НДС (181 170 ₽ с НДС)"]]),
            photos: [M2 + "07.jpg", M2 + "plan-d.jpg", M2 + "09.jpg", M2 + "14.jpg"] }
        ]
      },

      {
        id: "ind",
        name: "Qubis Industrial HUB",
        short: "Индустриальный пр., 84",
        address: "Санкт-Петербург, Индустриальный проспект, 84, стр. 1",
        mapQuery: "Санкт-Петербург, Индустриальный проспект, 84с1", coords: "30.456176,59.980763",
        lines: ["Первая линия Индустриального проспекта", "4 минуты до КАД, 11 минут до ЗСД, 18 минут до центра", "Въезды с Индустриального и Зотовского пр."],
        chips: ["Объект сдан в 2026", "Без комиссии"],
        photos: [I + "01s.jpg", I + "02s.jpg", I + "03s.jpg", I + "06s.jpg", I + "11s.jpg"],
        gallery: [I + "01.jpg", I + "02.jpg", I + "03.jpg", I + "04.jpg", I + "05.jpg", I + "06.jpg", I + "13.jpg", I + "14.jpg", I + "07.jpg", I + "08.jpg", I + "09.jpg", I + "10.jpg", I + "11.jpg", I + "12.jpg", "assets/img/ind-2100/08.jpg"],
        lead: "Новый комплекс Light Industrial внутри КАД: четыре корпуса, разделённые на автономные боксы. Аренда напрямую от собственника — от одного бокса до целого корпуса или нескольких.",
        facts: [["8 400 м²", "общая площадь комплекса"], ["4 корпуса", "по 2 100 м²"], ["от 420 м²", "бокс, включая антресоль 120 м²"], ["160 мест", "парковка на территории"]],
        specs: [
          ["Высота потолков", "6 м, в зоне антресоли 3 м"],
          ["Нагрузка на пол", "1 этаж — 3 т/м², эпоксидные полы; антресоль — офисная"],
          ["Ворота", "подъёмно-секционные с электроприводом, 4×3 м"],
          ["Электроснабжение", "350 кВт на корпус, возможно до 1 МВт; II категория надёжности"],
          ["Вентиляция", "приточно-вытяжная с подогревом, охлаждением, рекуперацией и фильтрацией"],
          ["Холодоснабжение", "«чиллер — фанкойл», потолочные охлаждающие панели"],
          ["Отопление", "водяное, от централизованной газовой котельной"],
          ["Вода и канализация", "централизованные; в каждом боксе санузел и душевые"],
          ["Отделка", "чистовая, в стиле лофт"],
          ["Управление", "«Умный дом» через мобильное приложение"],
          ["Безопасность", "охрана, видеонаблюдение 24/7, распознавание номеров, доступ по ключ-картам"],
          ["Инфраструктура", "кафе и зоны отдыха"],
          ["Включено в аренду", "содержание территории и МОП, вывоз ТКО (кроме производственных отходов), 4 машино-места; без наценок на коммунальные услуги"]
        ],
        lots: [
          { id: "ind-420", title: "Бокс", building: "", floor: "", area: 420, rentPerM: 1800, rentFrom: true, rentNote: "НДС 7% включён, без наценок на коммунальные услуги", deal: ["rent"], status: "free", specs: [["Высота потолков", "6 м"], ["Антресоль", "120 м² входят в площадь"], ["Ворота", "4×3 м"]], photos: [I + "06.jpg", "assets/img/ind-420/04.jpg", I + "11.jpg", I + "12.jpg", "assets/img/ind-420/05.jpg"] },
          { id: "ind-840", title: "Помещение", building: "", floor: "", area: 840, rentPerM: 1800, rentFrom: true, rentNote: "НДС 7% включён, без наценок на коммунальные услуги", deal: ["rent"], status: "free", specs: [], photos: [I + "05.jpg", "assets/img/ind-840/05.jpg", I + "10.jpg", I + "12.jpg"] },
          { id: "ind-2100", title: "Корпус целиком", building: "", floor: "", area: 2100, rentPerM: 1800, rentFrom: true, rentNote: "НДС 7% включён, без наценок на коммунальные услуги", deal: ["rent"], status: "free", specs: [["Мощность", "350 кВт на корпус"]], photos: [I + "01.jpg", "assets/img/ind-2100/07.jpg", I + "03.jpg", I + "04.jpg", "assets/img/ind-2100/08.jpg"] }
        ]
      }
    ]
  };
})();
