window.__form_widget_config = {
  name: "Форма",
  parameters: ["dealType", "objectType"],
  onSubmit: (data) => {
    alert(
      "Данные формы выведены в консоль. Для того чтобы открыть консоль нажмите F12."
    );
    console.log("%cДанные формы:", "color: green; font-size: 24px;");
    console.log(data);


    // TODO: отправить данные на сервер
    fetch('https://apriori96.ru/vvod-obekta/submit.php', {
      method: 'POST',
      body: {
        lol: 'hellol'
      }
    }).then(data => {
      console.log(data);
    }).catch(err => {
      console.log(err);
    })
  },
  sections: [
    {
      legend: "Тип объявления",
      name: "type",
      fields: [
        {
          name: "dealType",
          iblockName: "",
          label: "Тип сделки",
          display: "true",
          type: "toggle",
          options: ["Аренда", "Продажа"],
          sm: 12,
        },
        {
          name: "objectType",
          iblockName: "",
          label: "Объект",
          display: ["dealType === 'Аренда'", "dealType === 'Продажа'"],
          type: "select",
          options: [
            [
              "офис",
              "торговая площадь",
              "склад",
              "производство",
              "помещение свободного назначения",
              "здание",
              "коммерческая земля",
            ],
            [
              "офис",
              "торговая площадь",
              "склад",
              "производство",
              "ПСН",
              "здание",
              "готовый бизнес",
              "коммерческая земля",
            ],
          ],
          sm: 4,
        },
        {
          name: "Тип готового бизнеса",
          iblockName: "",
          type: "select",
          options: ["арендный бизнес", "готовый бизнес"],
          display: "dealType !== undefined && objectType === 'готовый бизнес'",
          sm: 4,
        },
        {
          name: "Выставить на сайт",
          iblockName: "NEW_PROP_86",
          type: "switch",
          display: "dealType !== undefined",
          sm: 4,
        },
      ],
    },
    {
      legend: "Общие",
      name: "general",
      fields: [
        {
          type: "string",
          iblockName: "",
          label: "Адрес поиск по справочнику",
          display: "dealType !== undefined",
        },
        {
          type: "switch",
          iblockName: "NEW_PROP_81",
          label: "Скрыть точный адрес в объявлении",
          display:
            "(objectType === 'готовый бизнес' && dealType === 'Продажа' && objectType !== 'коммерческая земля')",
        },
        {
          type: "string",
          iblockName: "NEW_PROP_82",
          label: "Название ЖК",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа')",
        },
        {
          type: "number",
          iblockName: "NEW_PROP_83",
          label: "Корпус",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа')",
        },
        {
          type: "string",
          iblockName: "NEW_PROP_84",
          label: "Кадастровый номер",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
        },
        {
          type: "select",
          iblockName: "NEW_PROP_85",
          label: "Тип помещения",
          display:
            "(objectType === 'торговая площадь')",
          options: ["street retail", "помещение в ТЦ"],
        },
        {
          type: "number",
          iblockName: "",
          label: "Общая площадь",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
          units: "м2",
        },
        {
          type: "switch",
          iblockName: "",
          label: "Возможна аренда/продажа частями",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа')",
        },
        {
          type: "number",
          iblockName: "",
          label: "Этаж",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
        },
        {
          type: "number",
          iblockName: "",
          label: "Этажность",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
        },
        {
          type: "number",
          iblockName: "NEW_PROP_1",
          label: "Высота потолков",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          units: "м",
        },
        {
          type: "switch",
          iblockName: "NEW_PROP_60",
          label: "Витринные окна",
          display:
            "(objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа')",
        },
        {
          type: "switch",
          iblockName: "NEW_PROP_61",
          label: "Помещение занято",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа')",
        },
        {
          label: "Планировка",
          iblockName: "NEW_PROP_62",
          type: "select",
          options: ["кабинетная", "коридорная", "открытая", "смешанная"],
          display:
            "(objectType === 'офис')",
        },
        {
          type: "string",
          iblockName: "",
          label: "Сетка колон",
          display:
            "(objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа')",
        },
        {
          type: "string",
          iblockName: "NEW_PROP_63",
          label: "Материал пола",
          display:
            "(objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа')",
        },
      ],
    },
    {
      legend: "Коммуникации",
      name: "communications",
      fields: [
        {
          name: "Лифты (для зданий)",
          iblockName: "NEW_PROP_19",
          display:
            "(objectType === 'здание' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "number",
          inputProps: {
            min: 0,
            step: 1,
          },
        },
        {
          name: "Количество мокрых точек",
          iblockName: "NEW_PROP_64",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа')",
          type: "select",
          options: [
            "нет", "1", "2", "3", "4+"
          ]
        },
        {
          name: "Электрическая мощность",
          iblockName: "NEW_PROP_28",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа')",
          type: "string",
          inputProps: {
            min: 0,
            step: 1,
          },
          units: "кВт",
        },
        {
          name: "Назначение",
          iblockName: "",
          display:
            "(objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
          type: "select",
          options: ["1", "2"],
        },
        {
          name: "Инфраструктура",
          iblockName: "NEW_PROP_74",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа')",
          type: "string",
        },
        {
          name: "Дополнительные услуги",
          iblockName: "",
          display:
            "(objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа')",
          type: "string",
        },
        {
          name: "Вход",
          iblockName: "NEW_PROP_8",
          display:
            "(objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "string",
        },
        {
          name: "Доступ",
          iblockName: "NEW_PROP_65",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа')",
          type: "select",
          options: [
            "свободный", "пропускная система"
          ]
        },
        {
          name: "Ворота",
          iblockName: "NEW_PROP_33",
          display:
            "(objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа')",
          type: "switch",
        },
        {
          name: "Крановое оборудование",
          iblockName: "NEW_PROP_40",
          display:
            "(objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа')",
          type: "switch",
        },
        {
          name: "Вентиляция",
          iblockName: "NEW_PROP_72",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "switch",
        },
        {
          name: "Кондиционирование",
          iblockName: "NEW_PROP_24",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "switch",
        },
        {
          name: "Отопление",
          iblockName: "NEW_PROP_22",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "switch",
        },
        {
          name: "Система пожаротушения",
          iblockName: "NEW_PROP_73",
          display: "true",
          type: "switch"
        }
      ],
    },
    {
      legend: "Состояние",
      name: "condition",
      fields: [
        {
          name: "Оборудование",
          iblockName: "",
          display:
            "(objectType === 'готовый бизнес' && dealType === 'Продажа')",
          type: "string",
        },
        {
          name: "Состояние",
          iblockName: "NEW_PROP_2",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "select",
          options: [
            "офисная отделка", "под чистовую", "требуется косметический ремонт", "требуется капитальный ремонт"
          ]
        },
        {
          name: "Мебель",
          iblockName: "NEW_PROP_30",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
          type: "select",
          options: [
            "есть", "нет"
          ]
        },
      ],
    },
    {
      legend: "Парковка",
      name: "parking",
      fields: [
        {
          name: "Парковка (для офиса, здания)",
          iblockName: "NEW_PROP_10",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "switch",
        },
        {
          name: "Парковка (для склада производства)",
          iblockName: "NEW_PROP_66",
          display:
            "(objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа')",
          type: "switch",
        },
        {
          name: "Количество мест",
          iblockName: "",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "number",
        },
        {
          name: "Стоимость парковки",
          iblockName: "",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "string",
          units: "₽",
        },
        {
          name: "Тип парковки",
          iblockName: "",
          display:
            "(objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа')",
          type: "select",
          options: ['наземная', 'многоуровневая', 'подземная', 'на крыше']
        },
        {
          name: "Стоимость въезда",
          iblockName: "",
          display:
            "(objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа')",
          type: "string",
          units: "₽",
        },
      ],
    },
    {
      legend: "О здании",
      name: "building",
      fields: [
        {
          name: "Название здания",
          iblockName: "NEW_PROP_68",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "string",
        },
        {
          name: "Год постройки",
          iblockName: "NEW_PROP_18",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "number",
        },
        {
          name: "Тип здания",
          iblockName: "NEW_PROP_15",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "select",
          options: [
            'Административное здание',
            'Бизнес-центр',
            'Деловой дом',
            'Бизнес-парк',
            'Объект свободного назначения',
            'Производственный комплекс',
            'Индустриальный парк',
            'Промплощадка',
            'Производственно-складской комплекс',
            'Логистический комплекс',
            'Логистический парк',
            'Особняк',
            'Производственное здание',
            'Модульное здание',
            'Многофункциональный комплекс',
            'Офисно-гостиничный комплекс',
            'Офисно-жилой комплекс',
            'Офисно-складской комплекс',
            'Офисное здание',
            'Офисно-производственный комплекс',
            'Имущественный комплекс',
            'Жилой комплекс',
            'Жилой дом',
            'Торгово-деловой комплекс',
            'Торгово-развлекательный центр',
            'Торгово-складской комплекс',
            'Торговый центр',
            'Отдельно стоящее здание',
            'Технопарк',
            'Торгово-выставочный комплекс',
            'Торгово-офисный комплекс',
            'Склад',
            'Другое'
          ],
        },
        {
          name: "Класс здания",
          iblockName: "NEW_PROP_16",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "select",
          options: ['А+', 'А', 'В+', 'В', 'В-', 'С']
        },
        {
          name: "Действующее",
          iblockName: "",
          display: "true",
          type: "switch"
        },
        {
          name: "Площадь здания",
          iblockName: "NEW_PROP_69",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "string",
          units: "м2",
        },
        {
          name: "Линия",
          iblockName: "NEW_PROP_4",
          display:
            "(objectType === 'здание' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "number",
        },
        {
          name: "Девелопер",
          iblockName: "",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "string",
        },
        {
          name: "УК",
          iblockName: "NEW_PROP_71",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "string",
        },
      ],
    },
    {
      legend: "Земля",
      name: "land",
      fields: [
        {
          name: "Площадь ЗУ (соток)",
          iblockName: "NEW_PROP_41",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "number",
          units: "сот.",
        },
        {
          name: "Права на ЗУ",
          iblockName: "NEW_PROP_70",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "string",
        },
        {
          name: "Категория",
          iblockName: "NEW_PROP_42",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "string",
        },
      ],
    },
    //{
    //legend: "Инфраструктура",
    //name: "infrastructure",
    //fields: []
    //},
    {
      legend: "Описание",
      name: "description",
      fields: [
        {
          name: "Фото",
          iblockName: "",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
          type: "image",
          sm: 6,
        },
        {
          name: "Видео",
          iblockName: "NEW_PROP_87",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
          type: "video",
          sm: 6,
        },
        {
          name: "Описание",
          iblockName: "NEW_PROP_88",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
          type: "string",
          sm: 12,
          inputProps: {
            multiline: true,
            rows: 4,
          },
        },
      ],
    },
    {
      legend: "Разное",
      name: "other",
      fields: [
        {
          name: "Часы работы",
          iblockName: "",
          display:
            "(objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Продажа')",
          type: "time-range",
        },
        {
          name: "Дни недели",
          iblockName: "",
          display:
            "(objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Продажа')",
          type: "week-range",
        },
        {
          name: "Месячная прибыль",
          iblockName: "NEW_PROP_75",
          display:
            "(objectType === 'готовый бизнес' && dealType === 'Продажа')",
          type: "number",
          inputProps: { min: 0 },
          units: "₽",
        },
        {
          name: "Арендная плата (тип)",
          iblockName: "",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "string",
        },
        {
          name: "Арендная плата / Цена",
          iblockName: "",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
          type: "number",
          inputProps: { min: 0 },
          units: "₽",
        },
        {
          name: "Налог",
          iblockName: "NEW_PROP_76",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
          type: "select",
          options: ["1", "2"],
        },
        {
          name: "В ставку включены",
          iblockName: "NEW_PROP_77",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда')",
          type: "string",
        },
        {
          name: "Тип аренды",
          iblockName: "NEW_PROP_78",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда')",
          type: "select",
          options: ["1", "2"],
        },
        {
          name: "Срок аренды",
          iblockName: "NEW_PROP_52",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда')",
          type: "number",
          inputProps: { min: 0 },
          units: "мес.",
        },
        {
          name: "Арендные каникулы",
          iblockName: "NEW_PROP_48",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда')",
          type: "number",
          inputProps: { min: 0 },
          units: "мес.",
        },
        {
          name: "Обеспечительный платеж",
          iblockName: "NEW_PROP_46",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда')",
          type: "number",
          inputProps: {
            min: 0,
            step: 1000,
          },
          units: "₽",
        },
        {
          name: "Предоплата",
          iblockName: "NEW_PROP_79",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда')",
          type: "select",
          options: ["1", "2"],
        },
        {
          name: "Процент от клиента",
          iblockName: "",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда')",
          type: "number",
          inputProps: { min: 0 },
          units: "%",
        },
        {
          name: "Процент от другого агента",
          iblockName: "",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда')",
          type: "number",
          inputProps: { min: 0 },
          units: "%",
        },
        {
          name: "Тип договора",
          iblockName: "NEW_PROP_80",
          display:
            "(objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "string",
        },
        {
          name: "Бонус агенту",
          iblockName: "",
          display:
            "(objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
          type: "number",
          inputProps: { min: 0 },
        },
        // infrastructure
        {
          name: "Автомойка",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Буфет",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Автосервис",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Столовая",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Центральная рецепция",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Гостиница",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Банкомат",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Выставочно-складской комплекс",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Аптека",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Отделение банка",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Кинотеатр",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Кафе",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Медицинский центр",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Салон красоты",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Фотосалон",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Нотариальная контора",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Бассейн",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Ателье одежды",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Складские помещения",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Парк",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Ресторан",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Фитнес-центр",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Супермаркет",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Минимаркет",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Торговая зона",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Конференц-зал",
          iblockName: "",
          type: "switch",
          display: "dealType !== undefined"
        }
      ],
    },
    {
      legend: "Внутренняя информация",
      name: "contacts",
      display: "false", // TODO : этот раздел будем показывать только авторизованным "своим"
      fields: [
        {
          sm: 6,
          fields: [
            {
              name: "Клиент",
              iblockName: "",
              display:
                "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
              type: "string",
              sm: 12,
            },
            {
              name: "Сделка",
              iblockName: "",
              display:
                "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
              type: "string",
              sm: 12,
            },
          ],
        },
        {
          name: "Внутренний комментарий",
          iblockName: "",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
          type: "string",
          inputProps: {
            multiline: true,
            rows: 4,
          },
          sm: 6,
        },
      ],
    },
  ],
};
