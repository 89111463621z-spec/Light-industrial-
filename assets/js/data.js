/*
  Данные по объектам и лотам.
  Правило: сюда попадает только то, что есть в материалах отдела продаж.
  Нет данных — поле пустое (null), на сайте выводится «по запросу».
*/
window.SITE = {
  phone: "+7 (931) 263-85-88",
  phoneHref: "tel:+79312638588",
  objects: [
    {
      id: "lit",
      name: "Технопарк на Литовской",
      short: "Литовская 16",
      address: "Санкт-Петербург, ул. Литовская, 16 / Полюстровский пр.",
      lead: "Проект из трёх очередей. Корпуса 1-й очереди проданы, на территории работают резиденты.",
      facts: [
        ["25 081 м²", "коммерческих помещений по проекту"],
        ["3 очереди", "4 755 · 5 252 · 15 075 м²"],
        ["7 резидентов", "ЭндоСтарс, LOUDLADS, Wikimoto, Туннель Технологии, Азимут Мед, Антол, UniRent"]
      ],
      cover: "assets/img/lit-87/01.jpg",
      scheme: "assets/img/lit-1344/03.jpg"
    },
    {
      id: "ind",
      name: "Технопарк на Индустриальном",
      short: "Индустриальный пр.",
      address: "Санкт-Петербург, Индустриальный пр. / Зотовский пр.",
      lead: "Четыре блока — I, H, U, B — с секциями от 1 до 5 в каждом. Въезды с Индустриального и Зотовского проспектов.",
      facts: [
        ["4 блока", "I, H, U, B"],
        ["Витражные фасады", "отдельный вход в каждую секцию"],
        ["Парковка", "по периметру территории"]
      ],
      cover: "assets/img/ind-2100/02.jpg",
      scheme: "assets/img/ind-2100/08.jpg"
    },
    {
      id: "kiev",
      name: "Технопарк на Киевском шоссе",
      short: "Киевское ш., 95",
      address: "Санкт-Петербург, Киевское шоссе, 95",
      lead: "Секции объединяются до нужной площади. Подъезд для грузовиков длиной до 12 м и еврофур до 16,5 м.",
      facts: [
        ["579–2 325 м²", "площади секций и их объединений"],
        ["Еврофура 16,5 м", "подъезд к секциям с АБК"],
        ["АБК 144–270 м²", "пристроенный административно-бытовой корпус"]
      ],
      cover: "assets/img/kiev-3000/01.jpg",
      scheme: "assets/img/kiev-1500/05.jpg"
    }
  ],

  /* deal: "Продажа" — только где это видно по материалам; иначе null */
  lots: [
    {
      id: "lit-87", object: "lit",
      title: "Помещение в корпусе 3.1",
      place: "3-я очередь, 1 этаж",
      area: 87.43, pricePerM: 290000, priceTotal: 25354700, vat: null, deal: "Продажа",
      specs: [["Высота потолка", "5,38 м"], ["Нагрузка на пол", "5 т"], ["Ворота", "есть"], ["Антресоль", "по плану, нагрузка 300 кг"]],
      note: "На этаже есть помещения от 73,71 до 146,01 м² — планировка в галерее.",
      photos: 5
    },
    {
      id: "lit-250", object: "lit",
      title: "Помещение 3Н5, корпус 2.2",
      place: "3 этаж",
      area: 249.42, pricePerM: 220000, priceTotal: 54872400, vat: null, deal: "Продажа",
      specs: [["Высота потолка", "3,4 м"], ["Нагрузка на пол", "1 т"]],
      photos: 3
    },
    {
      id: "lit-451", object: "lit",
      title: "Помещение 2Н4, корпус 2.2",
      place: "2 этаж",
      area: 451.54, pricePerM: 240000, priceTotal: 108369600, vat: null, deal: "Продажа",
      specs: [["Высота потолка", "4,2 м"], ["Нагрузка на пол", "1 т"]],
      photos: 3
    },
    {
      id: "lit-1344", object: "lit",
      title: "Этаж целиком, корпус 2.2",
      place: "3 этаж",
      area: 1344.35, pricePerM: 232000, priceTotal: 308566000, vat: null, deal: "Продажа",
      specs: [["Высота потолка", "3,4 м"], ["Нагрузка на пол", "1 т"]],
      photos: 3
    },
    {
      id: "lit-1300", object: "lit",
      title: "Здание 2-й очереди",
      place: "2-я очередь",
      area: 1300, pricePerM: null, priceTotal: null, vat: null, deal: null,
      specs: [],
      photos: 3
    },
    {
      id: "ind-420", object: "ind",
      title: "Секция в технопарке",
      place: "",
      area: 420, pricePerM: null, priceTotal: null, vat: null, deal: null,
      specs: [],
      photos: 5
    },
    {
      id: "ind-840", object: "ind",
      title: "Секция в технопарке",
      place: "",
      area: 840, pricePerM: null, priceTotal: null, vat: null, deal: null,
      specs: [],
      photos: 5
    },
    {
      id: "ind-2100", object: "ind",
      title: "Здание целиком",
      place: "",
      area: 2100, pricePerM: null, priceTotal: null, vat: null, deal: null,
      specs: [],
      photos: 8
    },
    {
      id: "kiev-579", object: "kiev",
      title: "Помещение A1, корпус А",
      place: "Секция с парадным фасадом",
      area: 579, pricePerM: 115000, priceTotal: null, vat: "без НДС", deal: "Продажа",
      specs: [["Готовность", "100%"], ["Подъезд", "грузовики до 12 м"], ["Условия", "формат оплаты обсуждается индивидуально"]],
      photos: 5
    },
    {
      id: "kiev-1496", object: "kiev",
      title: "Помещение с кран-балкой",
      place: "",
      area: 1496, pricePerM: null, priceTotal: null, vat: null, deal: null,
      specs: [["Кран-балка", "10 т"]],
      photos: 5
    },
    {
      id: "kiev-1500", object: "kiev",
      title: "Помещение в технопарке",
      place: "",
      area: 1500, pricePerM: null, priceTotal: null, vat: null, deal: null,
      specs: [],
      photos: 5
    },
    {
      id: "kiev-3000", object: "kiev",
      title: "Помещение в технопарке",
      place: "",
      area: 3000, pricePerM: null, priceTotal: null, vat: null, deal: null,
      specs: [],
      note: "На визуализации — кран-балка и заезд фуры внутрь помещения.",
      photos: 6
    }
  ]
};
