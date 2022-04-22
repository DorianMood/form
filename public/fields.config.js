window.__form_widget_config = {
  name: "Форма",
  parameters: ["dealType", "objectType"],
  sections: [
    {
      legend: "Тип объявления",
      name: "type",
      fields: [
        {
          name: "dealType",
          label: "Тип сделки",
          display: true,
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
              "ПСН",
              "здание",
            ],
            [
              "офис",
              "торговая площадь",
              "склад",
              "производство",
              "ПСН",
              "здание",
              "готовый бизнес",
            ],
          ],
          sm: 4,
        },
        {
          name: "Тип готового бизнеса",
          type: "select",
          options: ["1", "2"],
          display: "dealType !== undefined",
          sm: 4,
        },
        {
          name: "Видимость объявления",
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
          display: true,
        },
        {
          type: "string",
          label: "Юридический адрес",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа')",
        },
        {
          type: "switch",
          label: "Скрыть точный адрес в объявлении",
          display:
            "(objectType === 'готовый бизнес' && dealType === 'Продажа')",
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
          type: "string",
          label: "Номер налоговой",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
        },
        {
          type: "select",
          label: "Тип помещения",
          display:
            "(objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Продажа')",
          options: ["1", "2", "3"],
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
          type: "string",
          label: "Планировка",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа')",
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
          type: "string",
          inputProps: {
            min: 0,
            step: 1,
          },
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
          units: "Ватт",
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
          type: "string",
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
      ],
    },
    {
      legend: "Мебель и оборудование",
      name: "furniture",
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
          type: "string",
        },
        {
          name: "Мебель",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
          type: "string",
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
          type: "string",
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
      legend: "Постройка",
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
          options: ["1", "2"],
        },
        {
          name: "Класс здания",
          display:
            "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа')",
          type: "string",
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
      ],
    },
    {
      legend: "Контакты",
      name: "contacts",
      fields: [
        {
          sm: 6,
          fields: [
            {
              name: "Телефон",
              display:
                "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
              type: "string",
              sm: 12,
            },
            {
              name: "Номер телефона",
              display:
                "(objectType === 'офис' && dealType === 'Аренда') || (objectType === 'торговая площадь' && dealType === 'Аренда') || (objectType === 'склад' && dealType === 'Аренда') || (objectType === 'производство' && dealType === 'Аренда') || (objectType === 'ПСН' && dealType === 'Аренда') || (objectType === 'здание' && dealType === 'Аренда') || (objectType === 'офис' && dealType === 'Продажа') || (objectType === 'торговая площадь' && dealType === 'Продажа') || (objectType === 'склад' && dealType === 'Продажа') || (objectType === 'производство' && dealType === 'Продажа') || (objectType === 'ПСН' && dealType === 'Продажа') || (objectType === 'здание' && dealType === 'Продажа') || (objectType === 'готовый бизнес' && dealType === 'Продажа')",
              type: "string",
              sm: 12,
            },
          ],
        },
        {
          name: "Условия размещения объявления",
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
