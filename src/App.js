import * as React from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Grid,
  InputAdornment,
  TextField,
  Input,
  IconButton,
  Autocomplete,
  Stack,
  Switch,
  Collapse,
  FormLabel,
  FormControlLabel,
  ToggleButtonGroup,
  ToggleButton,
  FormGroup,
} from "@mui/material";
import { Map, YMaps } from "react-yandex-maps";

import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import VideocamIcon from "@mui/icons-material/Videocam";

import "./App.css";
import Form from "./Form";
import FieldSet from "./FieldSet";

import form from "./fields.config.json";
import {
  mapFields,
  SelectWrapper,
  CheckboxWrapper,
  TextFieldWrapper,
  ToggleWrapper,
  SwitchWrapper,
} from "./fields";

const objects = {
  rent: ["офис", "торговая площадь", "склад", "производство", "ПСН", "здание"],
  sale: [
    "офис",
    "торговая площадь",
    "склад",
    "производство",
    "ПСН",
    "здание",
    "готовый бизнес",
  ],
};

function App() {
  const { control, handleSubmit } = useForm();
  const [dealType, setDealType] = React.useState();

  return (
    <Container>
      <Form name={form.name} onSubmit={handleSubmit}>
        {form.sections.map((section, sectionIndex) => (
          <FieldSet name={section.name} legend={section.legend}>
            <Grid container spacing={2}>
              {mapFields(section.fields, control)}
            </Grid>
          </FieldSet>
        ))}
      </Form>

      <Form name="Форма" onSubmit={handleSubmit}>
        <FieldSet name="type" legend="Тип объявления">
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <FormLabel>Тип сделки</FormLabel>
              <FormGroup>
                <ToggleButtonGroup
                  value={dealType}
                  exclusive
                  onChange={(_, newValue) => setDealType(newValue)}
                >
                  <ToggleButton value="rent">Аренда</ToggleButton>
                  <ToggleButton value="sale">Продажа</ToggleButton>
                </ToggleButtonGroup>
              </FormGroup>
            </Grid>
            <Grid item sm={4}>
              <Collapse in={dealType}>
                {dealType && (
                  <SelectWrapper
                    name="Объект"
                    options={objects[dealType]}
                    label="Объект"
                    control={control}
                  />
                )}
              </Collapse>
            </Grid>
            <Grid item sm={4}>
              <Collapse in={dealType}>
                <SelectWrapper
                  control={control}
                  name="Тип готового бизнеса список"
                  options={["1", "2"]}
                  label="Тип готового бизнеса список"
                />
              </Collapse>
            </Grid>
            <Grid item sm={4}>
              <Collapse in={dealType}>
                <FormControlLabel
                  control={<Switch defaultChecked />}
                  label="Видимость объявления"
                />
              </Collapse>
            </Grid>
          </Grid>
        </FieldSet>
        <FieldSet name="general" legend="Общие">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextFieldWrapper
                name="address"
                label="Адрес поиск по справочнику"
                control={control}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Юридический адрес" />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={<Switch />}
                label="Скрыть точный адрес в объявлении"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Название ЖК" />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Корпус"
                type="number"
                InputProps={{ inputprops: { min: 0 } }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Кадастровый номер"
                type="number"
                InputProps={{ inputprops: { min: 0 } }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Номер налоговой" />
            </Grid>
            <Grid item xs={3}>
              <SelectWrapper
                name="Тип помещения"
                control={control}
                options={["1", "2"]}
                label="Тип помещения"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Общая площадь число"
                type="number"
                InputProps={{
                  inputprops: { min: 0 },
                  endAdornment: <InputAdornment>м2</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <FormControlLabel
                control={<Switch />}
                label="Возможна аренда/продажа частями"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Этаж целое число"
                type="number"
                InputProps={{ inputprops: { min: 0, step: 1 } }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Этажность целое число"
                type="number"
                InputProps={{ inputprops: { min: 0, step: 1 } }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Высота потолков"
                type="number"
                InputProps={{
                  inputprops: { min: 0, step: 0.01 },
                  endAdornment: <InputAdornment>м</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <FormControlLabel control={<Switch />} label="Витринные окна" />
            </Grid>
            <Grid item xs={3}>
              <FormControlLabel control={<Switch />} label="Помещение занято" />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Планировка" />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Сетка колон" />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Материал пола" />
            </Grid>
          </Grid>
        </FieldSet>
        <FieldSet name="communications" legend="Коммуникации">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField label="Лифты (для складов и производства)" />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Лифты (для зданий)"
                type="number"
                InputProps={{ inputprops: { min: 0, step: 1 } }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Количество мокрых точек"
                type="number"
                InputProps={{ inputprops: { min: 0, step: 1 } }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Электрическая мощность"
                type="number"
                InputProps={{
                  inputprops: { min: 0, step: 0.01 },
                  endAdornment: <InputAdornment>Ватт</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <SelectWrapper
                name="Назначение"
                options={["1", "2"]}
                label="Назначение"
                control={control}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Инфраструктура" multiline />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Дополнительные услуги" multiline />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Вход" />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Доступ" />
            </Grid>
            <Grid item xs={2}>
              <FormControlLabel control={<Switch />} label="Ворота" />
            </Grid>
            <Grid item xs={2}>
              <FormControlLabel
                control={<Switch />}
                label="Крановое оборудование"
              />
            </Grid>
            <Grid item xs={2}>
              <FormControlLabel control={<Switch />} label="Вентиляция" />
            </Grid>
            <Grid item xs={3}>
              <FormControlLabel
                control={<Switch />}
                label="Кондиционирование"
              />
            </Grid>
            <Grid item xs={2}>
              <FormControlLabel control={<Switch />} label="Отопление" />
            </Grid>
            <Grid item xs={2}>
              <FormControlLabel
                control={<Switch />}
                label="Система пожаротушения"
              />
            </Grid>
          </Grid>
        </FieldSet>
        <FieldSet name="furniture" legend="Мебель и оборудование">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField label="Оборудование" multiline fullWidth />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Состояние" multiline fullWidth />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Мебель" multiline fullWidth />
            </Grid>
          </Grid>
        </FieldSet>
        <FieldSet name="parking" legend="Парковка">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <FormControlLabel
                control={<Switch />}
                label="Парковка (для офиса)"
              />
            </Grid>
            <Grid item xs={9}>
              <FormControlLabel
                control={<Switch />}
                label="Парковка (для склада)"
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Количество мест"
                type="number"
                InputProps={{ inputprops: { min: 0 } }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Стоимость (парковки)"
                type="number"
                InputProps={{
                  inputprops: { min: 0, step: 1 },
                  endAdornment: <InputAdornment>₽</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Тип парковки" />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Стоимость въезда"
                type="number"
                InputProps={{
                  inputprops: { min: 0, step: 1 },
                  endAdornment: <InputAdornment>₽</InputAdornment>,
                }}
              />
            </Grid>
          </Grid>
        </FieldSet>
        <FieldSet name="building" legend="Постройка">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField label="Название (задания)" />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Год постройки"
                type="number"
                InputProps={{ inputprops: { min: 0 } }}
              />
            </Grid>
            <Grid item xs={3}>
              <SelectWrapper
                name="Тип здания"
                options={["1", "2"]}
                label="Тип здания"
                control={control}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Класс здания" />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Площадь здания число"
                type="number"
                InputProps={{
                  inputprops: { min: 0, step: 1 },
                  endAdornment: <InputAdornment>м2</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Линия"
                type="number"
                InputProps={{ inputprops: { min: 0 } }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField label="Девелопер" />
            </Grid>
            <Grid item xs={3}>
              <TextField label="УК" />
            </Grid>
          </Grid>
        </FieldSet>
        <FieldSet name="land" legend="Земля">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <TextField
                label="Участок (площадь)"
                type="number"
                InputProps={{
                  inputprops: { min: 0, step: 1 },
                  endAdornment: <InputAdornment>м2</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Участок (в собственности/в аренде)" />
            </Grid>
            <Grid item xs={4}>
              <TextField label="Категория" />
            </Grid>
          </Grid>
        </FieldSet>
        <FieldSet name="description" legend="Описание">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <label htmlFor="icon-button-file">
                <Input
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  style={{ display: "none" }}
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCameraIcon />
                </IconButton>
              </label>
            </Grid>
            <Grid item xs={6}>
              <label htmlFor="icon-button-file">
                <Input
                  accept="video/*"
                  id="icon-button-file"
                  type="file"
                  style={{ display: "none" }}
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <VideocamIcon />
                </IconButton>
              </label>
            </Grid>
            <Grid item xs={12}>
              <TextField label="Описание текст" multiline fullWidth />
            </Grid>
          </Grid>
        </FieldSet>
        <FieldSet name="other" legend="Разное">
          <Grid container spacing={2}>
            <Grid item xs={3}>
              Часы работы
            </Grid>
            <Grid item xs={3}>
              Дни недели
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Месячная прибыль"
                type="number"
                InputProps={{
                  inputprops: { min: 0, step: 1 },
                  endAdornment: <InputAdornment>₽</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={3}>
              Арендная плата/Цена (тип)
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Арендная плата/Цена"
                type="number"
                InputProps={{
                  inputprops: { min: 0, step: 1 },
                  endAdornment: <InputAdornment>₽</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <SelectWrapper
                name="Налог список"
                options={["1", "2"]}
                label="Налог список"
                control={control}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField label="В ставку включены" />
            </Grid>
            <Grid item xs={3}>
              <SelectWrapper
                name="Тип аренды список"
                options={["1", "2"]}
                label="Тип аренды список"
                control={control}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                label="Минимальный срок аренды от"
                type="number"
                InputProps={{
                  inputprops: { min: 0, step: 1 },
                  endAdornment: <InputAdornment>мес.</InputAdornment>,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              Арендные каникулы
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Обеспечительный платеж"
                type="number"
                InputProps={{
                  inputprops: { min: 0, step: 1 },
                  endAdornment: <InputAdornment>₽</InputAdornment>,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <SelectWrapper
                name="Предоплата список"
                options={["1", "2"]}
                label="Предоплата список"
                control={control}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="% от клиента галочка/число"
                type="number"
                InputProps={{
                  inputprops: { min: 0, step: 1 },
                  endAdornment: <InputAdornment>%</InputAdornment>,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="% от другого агента галочка/число"
                type="number"
                InputProps={{
                  inputprops: { min: 0, step: 1 },
                  endAdornment: <InputAdornment>%</InputAdornment>,
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              Переуступка права аренды Недвижимость
            </Grid>
            <Grid item xs={3}>
              <TextField
                label="Бонус агенту"
                type="number"
                InputProps={{ inputprops: { min: 0 } }}
              />
            </Grid>
          </Grid>
        </FieldSet>
        <FieldSet name="contacts" legend="Контакты">
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <TextField label="телефон" fullWidth />
                <TextField label="номер телефона" fullWidth />
              </Stack>
            </Grid>
            <Grid item xs={8}>
              <TextField
                label="условия размещения объявления"
                multiline
                fullWidth
                rows={4}
              />
            </Grid>
          </Grid>
        </FieldSet>
        <FieldSet name="general" legend="Основные">
          <Grid container spacing={2}>
            <Grid item sm={6}>
              <ToggleWrapper
                name="type"
                label="Тип"
                options={["Коммерческая", "Жилая"]}
                control={control}
              />
            </Grid>
            <Grid item sm={6}>
              <CheckboxWrapper
                name="Расширенная форма"
                label="Расширенная форма"
                control={control}
              />
            </Grid>
            <Grid item sm={4}>
              <SelectWrapper
                name="Тип сделки"
                options={["Продажа", "Аренда"]}
                label="Тип сделки"
                control={control}
              />
            </Grid>
            <Grid item sm={4}>
              <SelectWrapper
                name="Тип недвижимости"
                control={control}
                options={[
                  "Помещение",
                  "Здание",
                  "Земельный участок",
                  "Земля + здание",
                  "Бизнес",
                ]}
                label="Тип недвижимости"
              />
            </Grid>
            <Grid item sm={4}>
              <SelectWrapper
                name="Назначение"
                control={control}
                options={[
                  "Офисное",
                  "Производственное",
                  "Склад",
                  "Торговое",
                  "Универсальное",
                  "Гараж",
                ]}
                label="Назначение"
              />
            </Grid>
          </Grid>
        </FieldSet>
        <FieldSet name="characteristics" legend="Характеристики">
          <Grid container spacing={2}>
            <Grid item sm={4}>
              <TextField
                label="Этаж"
                helperText="0 - цоколь / подвал"
                type="number"
                InputProps={{ inputprops: { min: 0 } }}
              />
            </Grid>
            <Grid item sm={4}>
              <TextField
                label="Этажей"
                helperText="Этажей в здании"
                type="number"
                InputProps={{ inputprops: { min: 0 } }}
              />
            </Grid>
            <Grid item sm={4}>
              <TextField
                label="Общая площадь"
                type="number"
                InputProps={{
                  inputprops: { min: 0 },
                  endAdornment: <InputAdornment>м2</InputAdornment>,
                }}
              />
            </Grid>
          </Grid>
        </FieldSet>
        <FieldSet name="price" legend="Цена">
          <Grid container spacing={2}>
            <Grid item sm={4}>
              <TextField
                fullWidth
                label="Цена за весь объект"
                type="number"
                InputProps={{
                  inputprops: { min: 0, step: 10000 },
                  endAdornment: <InputAdornment>₽</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item sm={4}>
              <TextField
                fullWidth
                label="Цена за м2"
                type="number"
                InputProps={{
                  inputprops: { min: 0, step: 10000 },
                  endAdornment: <InputAdornment>₽ / м2</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item sm={4}>
              <CheckboxWrapper
                name="Работают с НДС"
                label="Работают с НДС"
                control={control}
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                fullWidth
                label="Обеспечительный платёж"
                type="number"
                InputProps={{
                  inputprops: { min: 0, step: 10000 },
                  endAdornment: <InputAdornment>₽ / мес.</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item sm={6}>
              <TextField
                fullWidth
                label="Обеспечительный платёж"
                type="number"
                InputProps={{
                  inputprops: { min: 0, step: 10000 },
                  endAdornment: <InputAdornment>₽</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                label="Комиссия"
                helperText="Размер комиссии для клиента"
                type="number"
                InputProps={{
                  inputprops: { min: 0, step: 0.1 },
                  endAdornment: <InputAdornment>%</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item sm={4}>
              <CheckboxWrapper
                name="Арендные каникулы"
                label="Арендные каникулы"
                control={control}
              />
            </Grid>
            <Grid item sm={8}>
              <TextField
                label="Срок"
                helperText="Срок арендных каникул"
                type="number"
                InputProps={{
                  inputprops: { min: 0 },
                  endAdornment: <InputAdornment>мес.</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item sm={4}>
              <CheckboxWrapper
                name="Входят ли коммунальные платежи в стоимость"
                label="Входят ли коммунальные платежи в стоимость"
                control={control}
              />
            </Grid>
            <Grid item sm={8}>
              <TextField
                label="Размер"
                helperText="Примерный размер коммунальных платежей в месяц"
                type="number"
                InputProps={{
                  inputprops: { min: 0, step: 100 },
                  endAdornment: <InputAdornment>₽ / мес.</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item sm={4}>
              <CheckboxWrapper
                name="Уместен ли торг"
                label="Уместен ли торг"
                control={control}
              />
            </Grid>
            <Grid item sm={4}>
              <CheckboxWrapper name="Акция" label="Акция" control={control} />
            </Grid>
          </Grid>
        </FieldSet>
        <FieldSet name="location" legend="Местоположение">
          <Grid container spacing={2}>
            <Grid item sm={12}>
              <label htmlFor="icon-button-file">
                <Input
                  accept="image/*"
                  id="icon-button-file"
                  type="file"
                  style={{ display: "none" }}
                />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <PhotoCameraIcon />
                </IconButton>
              </label>
            </Grid>
            <Grid item sm={12}></Grid>
            <Grid item sm={6}>
              <YMaps>
                <Map defaultState={{ center: [55.75, 37.57], zoom: 10 }} />
              </YMaps>
            </Grid>
            <Grid item sm={6}>
              <TextField
                fullWidth
                multiline
                label="Описание"
                helperText="Общее описание"
                type="text"
                rows={8}
              />
            </Grid>
            <Grid item container sm={6} spacing={2}>
              <Grid item sm={12}>
                <Autocomplete
                  fullWidth
                  freeSolo
                  options={["1", "2"]}
                  renderInput={(params) => (
                    <TextField {...params} label="Населенный пункт" />
                  )}
                />
              </Grid>
              <Grid item sm={12}>
                <SelectWrapper
                  name="Район Екатеринбурга"
                  label="Район Екатеринбурга"
                  options={["1", "2"]}
                  control={control}
                />
              </Grid>
              <Grid item sm={8}>
                <TextField fullWidth label="Улица" type="text" />
              </Grid>
              <Grid item sm={4}>
                <TextField fullWidth label="Дом" type="text" />
              </Grid>
            </Grid>
            <Grid item container sm={6} spacing={2}>
              <Grid item sm={6}>
                <CheckboxWrapper
                  name="1-я линия"
                  label="1-я линия"
                  control={control}
                />
              </Grid>
              <Grid item sm={6}>
                <CheckboxWrapper
                  name="Отдельный вход"
                  label="Отдельный вход"
                  control={control}
                />
              </Grid>
              <Grid item sm={6}>
                <CheckboxWrapper
                  name="Парковка"
                  label="Парковка"
                  control={control}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  label="Парковка"
                  helperText="Общее количество машиномест"
                  type="number"
                  inputprops={{ inputProps: { min: 0, step: 1 } }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  label="Входы"
                  helperText="Количество входов на объекте"
                  type="number"
                  inputprops={{ min: 0, step: 1 }}
                />
              </Grid>
              <Grid item sm={12}>
                <CheckboxWrapper
                  name="Удаленность от школ, садиков и т.д. (торговля алкоголем)"
                  label="Удаленность от школ, садиков и т.д. (торговля алкоголем)"
                  control={control}
                />
              </Grid>
            </Grid>
          </Grid>
        </FieldSet>
        <FieldSet name="building" legend="Помещение">
          <Grid container spacing={2}>
            <Grid item sm={4}>
              <TextField
                fullWidth
                label="Высота потолков"
                type="number"
                InputProps={{
                  inputprops: { min: 0, step: 100 },
                  endAdornment: <InputAdornment>м</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item sm={4}>
              <CheckboxWrapper
                name="Отделка"
                label="Отделка"
                control={control}
              />
            </Grid>
            <Grid item sm={4}>
              <TextField fullWidth label="Тип спецотделки" type="text" />
            </Grid>
          </Grid>
        </FieldSet>
        <FieldSet name="communications" legend="Коммуникации">
          <CheckboxWrapper name="Интернет" label="Интернет" control={control} />
          <Stack spacing={2}>
            <TextField fullWidth label="Провайдеры" type="text" />
            <TextField fullWidth label="Тип здания" type="text" />
            <TextField fullWidth label="Класс" type="text" />
            <TextField fullWidth label="Материал стен" type="text" />
            <TextField
              label="Год постройки / сдачи"
              type="number"
              InputProps={{ inputprops: { min: 1900 } }}
            />
          </Stack>
          <CheckboxWrapper
            name="Лифты в здании"
            label="Лифты в здании"
            control={control}
          />
          <CheckboxWrapper
            name="Охрана здания"
            label="Охрана здания"
            control={control}
          />
          <CheckboxWrapper
            name="Система газоснабжения"
            label="Система газоснабжения"
            control={control}
          />
          <CheckboxWrapper
            name="Система отопления"
            label="Система отопления"
            control={control}
          />
          <CheckboxWrapper
            name="Система водоснабжения"
            label="Система водоснабжения"
            control={control}
          />
          <CheckboxWrapper
            name="Кондиционирование"
            label="Кондиционирование"
            control={control}
          />
          <CheckboxWrapper
            name="Наличие пожарной сигнализации"
            label="Наличие пожарной сигнализации"
            control={control}
          />
          <CheckboxWrapper
            name="Возможна ли перепланировка"
            label="Возможна ли перепланировка"
            control={control}
          />
          <CheckboxWrapper
            name="Наличие погрузочной / разгрузочной зоны"
            label="Наличие погрузочной / разгрузочной зоны"
            control={control}
          />
          <TextField
            label="Подключенная мощность"
            type="number"
            InputProps={{
              inputprops: { min: 0, step: 1 },
              endAdornment: <InputAdornment>Ватт</InputAdornment>,
            }}
          />
          <CheckboxWrapper
            name="Возможность увеличения мощности"
            label="Возможность увеличения мощности"
            control={control}
          />
        </FieldSet>
        <FieldSet name="furniture" legend="Мебель и оборудование">
          <Stack>
            <CheckboxWrapper name="Мебель" label="Мебель" control={control} />
            <CheckboxWrapper
              name="Оборудование"
              label="Оборудование"
              control={control}
            />
          </Stack>
        </FieldSet>
        <FieldSet name="utilities" legend="Оборудование">
          <Stack>
            <CheckboxWrapper
              name="Холодильная камера"
              label="Холодильная камера"
              control={control}
            />
            <CheckboxWrapper
              name="Подъездные пути"
              label="Подъездные пути"
              control={control}
            />
            <CheckboxWrapper
              name="Ж/Д пути"
              label="Ж/Д пути"
              control={control}
            />
            <CheckboxWrapper
              name="Кран-балка"
              label="Кран-балка"
              control={control}
            />
          </Stack>
        </FieldSet>
        <FieldSet name="information" legend="Информация">
          <Grid container spacing={2}>
            <Grid item sm={8}>
              <TextField
                fullWidth
                multiline
                label="Дополнительная информация"
                helperText="Дополнительная информация по земельному участку"
                type="text"
                rows={8}
              />
            </Grid>
            <Grid item sm={4}>
              <TextField label="Налог на землю" />
            </Grid>
          </Grid>
        </FieldSet>
      </Form>
    </Container>
  );
}

export default App;
