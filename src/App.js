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
  ButtonGroup,
  Button,
  Collapse,
  RadioGroup,
  Radio,
  FormLabel,
  FormControlLabel,
  ToggleButtonGroup,
  ToggleButton,
  FormGroup,
} from "@mui/material";
import { Map, YMaps } from "react-yandex-maps";

import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";

import "./App.css";
import Form from "./Form";
import CheckboxField from "./fields/Checkbox";
import Toggle from "./fields/Toggle";
import DropDown from "./fields/DropDown";
import FieldSet from "./FieldSet";

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
  const { control, handleSubmit } = useForm({
    defaultValues: {},
  });
  const [dealType, setDealType] = React.useState();

  return (
    <Container>
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
            <Grid item sm={12}>
              <Collapse in={dealType}>
                <FormLabel>Объект</FormLabel>
                <RadioGroup>
                  {dealType &&
                    objects[dealType].map((item, index) => (
                      <FormControlLabel
                        key={index}
                        value={item}
                        label={item}
                        control={<Radio />}
                      />
                    ))}
                </RadioGroup>
              </Collapse>
            </Grid>
          </Grid>
        </FieldSet>
        <FieldSet name="general" legend="Основные">
          <Grid container spacing={2}>
            <Grid item sm={6}>
              <Toggle options={["Коммерческая", "Жилая"]} label="Тип" />
            </Grid>
            <Grid item sm={6}>
              <CheckboxField label="Расширенная форма" />
            </Grid>
            <Grid item sm={4}>
              <DropDown options={["Продажа", "Аренда"]} label="Тип сделки" />
            </Grid>
            <Grid item sm={4}>
              <DropDown
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
              <DropDown
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
                InputProps={{ inputProps: { min: 0 } }}
              />
            </Grid>
            <Grid item sm={4}>
              <TextField
                label="Этажей"
                helperText="Этажей в здании"
                type="number"
                InputProps={{ inputProps: { min: 0 } }}
              />
            </Grid>
            <Grid item sm={4}>
              <TextField
                label="Общая площадь"
                type="number"
                InputProps={{
                  inputProps: { min: 0 },
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
                  inputProps: { min: 0, step: 10000 },
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
                  inputProps: { min: 0, step: 10000 },
                  endAdornment: <InputAdornment>₽ / м2</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item sm={4}>
              <CheckboxField label="Работают с НДС" />
            </Grid>
            <Grid item sm={6}>
              <TextField
                fullWidth
                label="Обеспечительный платёж"
                type="number"
                InputProps={{
                  inputProps: { min: 0, step: 10000 },
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
                  inputProps: { min: 0, step: 10000 },
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
                  inputProps: { min: 0, step: 0.1 },
                  endAdornment: <InputAdornment>%</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item sm={4}>
              <CheckboxField label="Арендные каникулы" />
            </Grid>
            <Grid item sm={8}>
              <TextField
                label="Срок"
                helperText="Срок арендных каникул"
                type="number"
                InputProps={{
                  inputProps: { min: 0 },
                  endAdornment: <InputAdornment>мес.</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item sm={4}>
              <CheckboxField label="Входят ли коммунальные платежи в стоимость" />
            </Grid>
            <Grid item sm={8}>
              <TextField
                label="Размер"
                helperText="Примерный размер коммунальных платежей в месяц"
                type="number"
                InputProps={{
                  inputProps: { min: 0, step: 100 },
                  endAdornment: <InputAdornment>₽ / мес.</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item sm={4}>
              <CheckboxField label="Уместен ли торг" />
            </Grid>
            <Grid item sm={4}>
              <CheckboxField label="Акция" />
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
                <DropDown label="Район Екатеринбурга" options={["1", "2"]} />
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
                <CheckboxField label="1-я линия" />
              </Grid>
              <Grid item sm={6}>
                <CheckboxField label="Отдельный вход" />
              </Grid>
              <Grid item sm={6}>
                <CheckboxField label="Парковка" />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  label="Парковка"
                  helperText="Общее количество машиномест"
                  type="number"
                  inputProps={{ inputProps: { min: 0, step: 1 } }}
                />
              </Grid>
              <Grid item sm={6}>
                <TextField
                  fullWidth
                  label="Входы"
                  helperText="Количество входов на объекте"
                  type="number"
                  inputProps={{ min: 0, step: 1 }}
                />
              </Grid>
              <Grid item sm={12}>
                <CheckboxField label="Удаленность от школ, садиков и т.д. (торговля алкоголем)" />
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
                  inputProps: { min: 0, step: 100 },
                  endAdornment: <InputAdornment>м</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item sm={4}>
              <CheckboxField label="Отделка" />
            </Grid>
            <Grid item sm={4}>
              <TextField fullWidth label="Тип спецотделки" type="text" />
            </Grid>
          </Grid>
        </FieldSet>
        <FieldSet name="communications" legend="Коммуникации">
          <CheckboxField label="Интернет" />
          <Stack spacing={2}>
            <TextField fullWidth label="Провайдеры" type="text" />
            <TextField fullWidth label="Тип здания" type="text" />
            <TextField fullWidth label="Класс" type="text" />
            <TextField fullWidth label="Материал стен" type="text" />
            <TextField
              label="Год постройки / сдачи"
              type="number"
              InputProps={{ inputProps: { min: 1900 } }}
            />
          </Stack>
          <CheckboxField label="Лифты в здании" />
          <CheckboxField label="Охрана здания" />
          <CheckboxField label="Система газоснабжения" />
          <CheckboxField label="Система отопления" />
          <CheckboxField label="Система водоснабжения" />
          <CheckboxField label="Кондиционирование" />
          <CheckboxField label="Наличие пожарной сигнализации" />
          <CheckboxField label="Возможна ли перепланировка" />
          <CheckboxField label="Наличие погрузочной / разгрузочной зоны" />
          <TextField
            label="Подключенная мощность"
            type="number"
            InputProps={{
              inputProps: { min: 0, step: 1 },
              endAdornment: <InputAdornment>Ватт</InputAdornment>,
            }}
          />
          <CheckboxField label="Возможность увеличения мощности" />
        </FieldSet>
        <FieldSet name="furniture" legend="Мебель и оборудование">
          <Stack>
            <CheckboxField label="Мебель" />
            <CheckboxField label="Оборудование" />
          </Stack>
        </FieldSet>
        <FieldSet name="utilities" legend="Оборудование">
          <Stack>
            <CheckboxField label="Холодильная камера" />
            <CheckboxField label="Подъездные пути" />
            <CheckboxField label="Ж/Д пути" />
            <CheckboxField label="Кран-балка" />
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
