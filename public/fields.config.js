window.__form_widget_config = {
  name: "Форма",
  parameters: ["dealType", "objectType"],
  onSubmit: (data) => {
    console.log("Submitting...");
  },
  sections: [
    {
      legend: "Тип объявления",
      name: "type",
      fields: [
        {
          name: "dealType",
          label: "Тип сделки",
          display: "true",
          type: "toggle",
          options: ["Аренда", "Продажа"],
          sm: 12,
        },
        {
          name: "objectType",
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
          type: "select",
          options: ["арендный бизнес", "готовый бизнес"],
          display: "dealType !== undefined && objectType === 'готовый бизнес'",
          sm: 4,
        },
        {
          name: "Выставить на сайт",
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
          label: "Адрес поиск по справочнику",
          display: "dealType !== undefined",
        },
        {
          type: "switch",
          label: "Скрыть точный адрес в объявлении",
          display:
            "(objectType === 'готовый бизнес' && dealType === 'Продажа' && objectType !== 'коммерческая земля')",
        },
        {
          type: "string",
          label: "Название ЖК",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа')",
        },
        {
          type: "number",
          label: "Корпус",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа')",
        },
        {
          type: "string",
          label: "Кадастровый номер",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
        },
        {
          type: "select",
          label: "Тип помещения",
          display:
            "(objectType === 'торговая площадь')",
          options: ["street retail", "помещение в ТЦ"],
        },
        {
          type: "number",
          label: "Общая площадь",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
          units: "м2",
        },
        {
          type: "switch",
          label: "Возможна аренда/продажа частями",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа')",
        },
        {
          type: "number",
          label: "Этаж",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
        },
        {
          type: "number",
          label: "Этажность",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
        },
        {
          type: "number",
          label: "Высота потолков",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          units: "м",
        },
        {
          type: "switch",
          label: "Витринные окна",
          display:
            "(objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа')",
        },
        {
          type: "switch",
          label: "Помещение занято",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа')",
        },
        {
          label: "Планировка",
          type: "select",
          options: ["кабинетная", "коридорная", "открытая", "смешанная"],
          display:
            "(objectType === 'офис')",
        },
        {
          type: "string",
          label: "Сетка колон",
          display:
            "(objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа')",
        },
        {
          type: "string",
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
          display:
            "(objectType === 'здание' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "number",
          inputProps: {
            min: 0,
            step: 1,
          },
        },
        {
          name: "Лифты (для складов)",
          display:
            "(objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа')",
          type: "string",
          inputProps: {
            min: 0,
            step: 1,
          },
        },
        {
          name: "Количество мокрых точек",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа')",
          type: "select",
          options: [
            "нет", "1", "2", "3", "4+"
          ]
        },
        {
          name: "Электрическая мощность",
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
          display:
            "(objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
          type: "select",
          options: ["1", "2"],
        },
        {
          name: "Инфраструктура",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа')",
          type: "string",
        },
        {
          name: "Дополнительные услуги",
          display:
            "(objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа')",
          type: "string",
        },
        {
          name: "Вход",
          display:
            "(objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "string",
        },
        {
          name: "Доступ",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа')",
          type: "select",
          options: [
            "свободный", "пропускная система"
          ]
        },
        {
          name: "Ворота",
          display:
            "(objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа')",
          type: "switch",
        },
        {
          name: "Крановое оборудование",
          display:
            "(objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа')",
          type: "switch",
        },
        {
          name: "Вентиляция",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "switch",
        },
        {
          name: "Кондиционирование",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "switch",
        },
        {
          name: "Отопление",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "switch",
        },
        {
          name: "Система пожаротушения",
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
          display:
            "(objectType === 'готовый бизнес' && dealType === 'Продажа')",
          type: "string",
        },
        {
          name: "Состояние",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "select",
          options: [
            "офисная отделка", "под чистовую", "требуется косметический ремонт", "требуется капитальный ремонт"
          ]
        },
        {
          name: "Мебель",
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
          name: "Парковка для офиса",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "switch",
        },
        {
          name: "Парковка для склада",
          display:
            "(objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа')",
          type: "switch",
        },
        {
          name: "Количество мест",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "number",
        },
        {
          name: "Стоимость парковки",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "string",
          units: "₽",
        },
        {
          name: "Тип парковки",
          display:
            "(objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа')",
          type: "select",
          options: ['наземная', 'многоуровневая', 'подземная', 'на крыше']
        },
        {
          name: "Стоимость въезда",
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
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "string",
        },
        {
          name: "Год постройки",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "number",
        },
        {
          name: "Тип здания",
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
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "select",
          options: ['А+', 'А', 'В+', 'В', 'В-', 'С']
        },
        {
          name: "Действующее",
          display: "true",
          defaultChecked: true,
          type: "switch"
        },
        {
          name: "Площадь здания",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "string",
          units: "м2",
        },
        {
          name: "Линия",
          display:
            "(objectType === 'здание' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "number",
        },
        {
          name: "Девелопер",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "string",
        },
        {
          name: "УК",
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
          name: "Участок (площадь)",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "number",
          units: "м2",
        },
        {
          name: "Участок (собственность/аренда)",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "string",
        },
        {
          name: "Категория",
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
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
          type: "image",
          sm: 6,
        },
        {
          name: "Видео",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
          type: "video",
          sm: 6,
        },
        {
          name: "Описание",
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
          display:
            "(objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Продажа')",
          type: "time-range",
        },
        {
          name: "Дни недели",
          display:
            "(objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Продажа')",
          type: "week-range",
        },
        {
          name: "Месячная прибыль",
          display:
            "(objectType === 'готовый бизнес' && dealType === 'Продажа')",
          type: "number",
          inputProps: { min: 0 },
          units: "₽",
        },
        {
          name: "Арендная плата (тип)",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "string",
        },
        {
          name: "Арендная плата / Цена",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
          type: "number",
          inputProps: { min: 0 },
          units: "₽",
        },
        {
          name: "Налог",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
          type: "select",
          options: ["1", "2"],
        },
        {
          name: "В ставку включены",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда')",
          type: "string",
        },
        {
          name: "Тип аренды",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда')",
          type: "select",
          options: ["1", "2"],
        },
        {
          name: "Минимальный срок аренды",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда')",
          type: "number",
          inputProps: { min: 0 },
          units: "мес.",
        },
        {
          name: "Арендные каникулы",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда')",
          type: "number",
          inputProps: { min: 0 },
          units: "мес.",
        },
        {
          name: "Обеспечительный платеж",
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
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда')",
          type: "select",
          options: ["1", "2"],
        },
        {
          name: "Процент от клиента",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда')",
          type: "number",
          inputProps: { min: 0 },
          units: "%",
        },
        {
          name: "Процент от другого агента",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда')",
          type: "number",
          inputProps: { min: 0 },
          units: "%",
        },
        {
          name: "Переуступка прав аренды",
          display:
            "(objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "string",
        },
        {
          name: "Бонус агенту",
          display:
            "(objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
          type: "number",
          inputProps: { min: 0 },
        },
        // infrastructure
        {
          name: "Автомойка",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Буфет",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Автосервис",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Столовая",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Центральная рецепция",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Гостиница",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Банкомат",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Выставочно-складской комплекс",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Аптека",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Отделение банка",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Кинотеатр",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Кафе",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Медицинский центр",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Салон красоты",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Фотосалон",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Нотариальная контора",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Бассейн",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Ателье одежды",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Складские помещения",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Парк",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Ресторан",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Фитнес-центр",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Супермаркет",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Минимаркет",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Торговая зона",
          type: "switch",
          display: "dealType !== undefined"
        },
        {
          name: "Конференц-зал",
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
              display:
                "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
              type: "string",
              sm: 12,
            },
            {
              name: "Сделка",
              display:
                "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
              type: "string",
              sm: 12,
            },
          ],
        },
        {
          name: "Внутренний комментарий",
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
