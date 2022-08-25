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
          type: "switch",
          iblockName: "NEW_PROP_81",
          label: "Скрыть точный адрес в объявлении",
          display: "(dealType==='Продажа' && objectType==='Арендный бизнес')"
        },
        {
          type: "string",
          iblockName: "NEW_PROP_82",
          label: "Название ЖК",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда ' && objectType==='земля') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='земля')"
        },
        {
          type: "number",
          iblockName: "NEW_PROP_83",
          label: "Корпус",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='ПСН')"
        },
        {
          type: "string",
          iblockName: "NEW_PROP_84",
          label: "Кадастровый номер",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Аренда ' && objectType==='земля') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание') || (dealType==='Продажа' && objectType==='земля')",
        },
        {
          type: "select",
          iblockName: "NEW_PROP_85",
          label: "Тип помещения",
          display:
            "(dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='торговая площадь')",
          options: ["street retail", "помещение в ТЦ"],
        },
        {
          type: "number",
          iblockName: "",
          label: "Этажность",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание')",
        },
        {
          type: "number",
          iblockName: "NEW_PROP_1",
          label: "Высота потолков",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание')",
          units: "м",
        },
        {
          type: "switch",
          iblockName: "NEW_PROP_60",
          label: "Витринные окна",
          display:
            "(dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='ПСН')",
        },
        {
          type: "switch",
          iblockName: "NEW_PROP_61",
          label: "Помещение занято",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='ПСН')",
        },
        {
          label: "Планировка",
          iblockName: "NEW_PROP_62",
          type: "select",
          options: ["кабинетная", "коридорная", "открытая", "смешанная"],
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Продажа' && objectType==='офис')",
        },
        {
          type: "string",
          iblockName: "NEW_PROP_63",
          label: "Материал пола",
          display:
            "(dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство')",
        },
      ],
    },
    {
      legend: "Коммуникации",
      name: "communications",
      fields: [
        {
          name: "Лифты",
          iblockName: "NEW_PROP_19",
          display:
            "(dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='здание')",
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
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН')",
          type: "select",
          options: [
            "нет", "1", "2", "3", "4+"
          ]
        },
        {
          name: "Электрическая мощность",
          iblockName: "NEW_PROP_28",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда ' && objectType==='земля') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='земля')",
          type: "string",
          inputProps: {
            min: 0,
            step: 1,
          },
          units: "кВт",
        },
        {
          name: "Инфраструктура",
          iblockName: "NEW_PROP_74",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство')",
          type: "string",
        },
        {
          name: "Вход",
          iblockName: "NEW_PROP_8",
          display:
            "(dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание')",
          type: "string",
        },
        {
          name: "Доступ",
          iblockName: "NEW_PROP_65",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Продажа' && objectType==='офис')",
          type: "select",
          options: [
            "свободный", "пропускная система"
          ]
        },
        {
          name: "Ворота",
          iblockName: "NEW_PROP_33",
          display:
            "(dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство')",
          type: "switch",
        },
        {
          name: "Крановое оборудование",
          iblockName: "NEW_PROP_40",
          display:
            "(dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство')",
          type: "switch",
        },
        {
          name: "Вентиляция",
          iblockName: "NEW_PROP_72",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание')",
          type: "switch",
        },
        {
          name: "Кондиционирование",
          iblockName: "NEW_PROP_24",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание')",
          type: "switch",
        },
        {
          name: "Отопление",
          iblockName: "NEW_PROP_22",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание')",
          type: "switch",
        },
        {
          name: "Система пожаротушения",
          iblockName: "NEW_PROP_73",
          display: "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание')",
          type: "switch"
        }
      ],
    },
    {
      legend: "Состояние",
      name: "condition",
      fields: [
        {
          name: "Состояние",
          iblockName: "NEW_PROP_2",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание')",
          type: "select",
          options: [
            "офисная отделка", "под чистовую", "требуется косметический ремонт", "требуется капитальный ремонт"
          ]
        },
        {
          name: "Мебель",
          iblockName: "NEW_PROP_30",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='здание') || (dealType==='Продажа' && objectType==='Арендный бизнес')",
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
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='здание')",
          type: "switch",
        },
        {
          name: "Парковка (для склада производства)",
          iblockName: "NEW_PROP_66",
          display:
            "(dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство')",
          type: "switch",
        },
        {
          name: "Тип парковки (для склада офиса)",
          iblockName: "NEW_PROP_67",
          display:
            "(dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство')",
          type: "select",
          options: ['наземная', 'многоуровневая', 'подземная', 'на крыше']
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
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание')",
          type: "string",
        },
        {
          name: "Год постройки",
          iblockName: "NEW_PROP_18",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание')",
          type: "number",
        },
        {
          name: "Тип здания",
          iblockName: "NEW_PROP_15",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание')",
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
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='здание')",
          type: "select",
          options: ['А+', 'А', 'В+', 'В', 'В-', 'С']
        },
        {
          name: "Действующее",
          iblockName: "",
          display: "true", // TODO: ????
          type: "switch"
        },
        {
          name: "Площадь здания",
          iblockName: "NEW_PROP_69",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание')",
          type: "number",
          units: "м2",
        },
        {
          name: "Линия",
          iblockName: "NEW_PROP_4",
          display:
            "(dealType==='Аренда' && objectType==='здание') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='здание')",
          type: "number",
        },
        {
          name: "УК",
          iblockName: "NEW_PROP_71",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание')",
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
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Аренда ' && objectType==='земля') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание') || (dealType==='Продажа' && objectType==='земля')",
          type: "number",
          units: "сот.",
        },
        {
          name: "Права на ЗУ",
          iblockName: "NEW_PROP_70",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Аренда ' && objectType==='земля') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание') || (dealType==='Продажа' && objectType==='земля')",
          type: "string",
        },
        {
          name: "Категория ЗУ",
          iblockName: "NEW_PROP_42",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Аренда ' && objectType==='земля') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание') || (dealType==='Продажа' && objectType==='земля')",
          type: "string",
        },
        {
          name: "NEW_PROP_43",
          label: "Вид разрешенного использования ЗУ",
          type: "список",
          display: "false" // TODO: это поле не прописано в таблице
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
          name: "Фотографии",
          iblockName: "",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Аренда ' && objectType==='земля') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание') || (dealType==='Продажа' && objectType==='земля') || (dealType==='Продажа' && objectType==='Арендный бизнес')",
          type: "image",
          sm: 6,
        },
        {
          name: "Видео",
          iblockName: "NEW_PROP_87",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Аренда ' && objectType==='земля') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание') || (dealType==='Продажа' && objectType==='земля') || (dealType==='Продажа' && objectType==='Арендный бизнес')",
          type: "video",
          sm: 6,
        },
        {
          name: "Описание",
          iblockName: "NEW_PROP_88",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Аренда ' && objectType==='земля') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание') || (dealType==='Продажа' && objectType==='земля') || (dealType==='Продажа' && objectType==='Арендный бизнес')",
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
          name: "Месячная прибыль",
          iblockName: "NEW_PROP_75",
          display:
            "(dealType==='Продажа' && objectType==='Арендный бизнес')",
          type: "number",
          inputProps: { min: 0 },
          units: "₽",
        },
        {
          name: "Цена за объект",
          iblockName: "",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Аренда ' && objectType==='земля') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание') || (dealType==='Продажа' && objectType==='земля') || (dealType==='Продажа' && objectType==='Арендный бизнес')",
          type: "number",
          inputProps: { min: 0 },
          units: "₽",
        },
        {
          name: "Цена за кв.м.",
          iblockName: "",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание')",
          type: "number",
          inputProps: { min: 0 },
          units: "₽",
        },
        {
          name: "Налог",
          iblockName: "NEW_PROP_76",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание') || (dealType==='Аренда ' && objectType==='земля') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание') || (dealType==='Продажа' && objectType==='земля') || (dealType==='Продажа' && objectType==='Арендный бизнес')",
          type: "select",
          options: ["1", "2"],
        },
        {
          name: "В ставку включены",
          iblockName: "NEW_PROP_77",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание')",
          type: "string",
        },
        {
          name: "Тип аренды",
          iblockName: "NEW_PROP_78",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание')",
          type: "select",
          options: ["1", "2"],
        },
        {
          name: "Срок аренды",
          iblockName: "NEW_PROP_52",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание')",
          type: "number",
          inputProps: { min: 0 },
          units: "мес.",
        },
        {
          name: "Арендные каникулы",
          iblockName: "NEW_PROP_48",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание')",
          type: "number",
          inputProps: { min: 0 },
          units: "мес.",
        },
        {
          name: "Обеспечительный платеж",
          iblockName: "NEW_PROP_46",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание')",
          type: "number",
          inputProps: {
            min: 0,
            step: 1000,
          },
          units: "₽",
        },
        {
          name: "Предоплата, мес",
          iblockName: "NEW_PROP_79",
          display:
            "(dealType==='Аренда' && objectType==='офис') || (dealType==='Аренда' && objectType==='торговая площадь') || (dealType==='Аренда' && objectType==='склад') || (dealType==='Аренда' && objectType==='производство') || (dealType==='Аренда' && objectType==='ПСН') || (dealType==='Аренда' && objectType==='здание')",
          type: "select",
          options: ["1", "2"],
        },
        {
          name: "Тип договора",
          iblockName: "NEW_PROP_80",
          display:
            "(dealType==='Аренда ' && objectType==='земля') || (dealType==='Продажа' && objectType==='офис') || (dealType==='Продажа' && objectType==='торговая площадь') || (dealType==='Продажа' && objectType==='склад') || (dealType==='Продажа' && objectType==='производство') || (dealType==='Продажа' && objectType==='ПСН') || (dealType==='Продажа' && objectType==='здание') || (dealType==='Продажа' && objectType==='земля')",
          type: "string",
        },
        // infrastructure
        {
          name: "Инфраструктура 1",
          iblockName: "",
          type: "multi",
          display: "true",
          sm: 12,
          fields: [
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
          ]
        },
      ],
    },
    {
      legend: "Внутренняя информация",
      name: "contacts",
      display: "true", // TODO : этот раздел будем показывать только авторизованным "своим"
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