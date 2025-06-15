import {Button, Checkbox, Input, Dropdown, Toggle, Textarea} from "@shared/components";

export const COMPONENTS = {
    кнопка: <Button text="Нажми на меня"/>,
    инпут: <Input />,
    переключатель: <Toggle/>,
    флажок: <div>
        <Checkbox/><br/><br/>
        <Checkbox label="Флажочек"/>
    </div>,
    выпадающий_список: <Dropdown
        options={[
            { value: 'apple', label: 'Яблоко' },
            { value: 'banana', label: 'Банан' },
            { value: 'orange', label: 'Апельсин' },
            { value: 'kiwi', label: 'Киви' },
            { value: 'kiwi', label: 'Киви' },
            { value: 'kiwi', label: 'Киви' },
            { value: 'kiwi', label: 'Киви' },
            { value: 'kiwi', label: 'Киви' },
        ]}
        onSelect={(option) => console.log('Вы выбрали:', option)}
        placeholder="Выберите фрукт"
    />,
    многострочное_поле_ввода_текста: <Textarea />

};

//Textarea Многострочное поле ввода текста.
//Tabs (Вкладки)
//Breadcrumbs (Хлебные крошки)
//Pagination (Пагинация)
//Alert / Notification (Оповещение)
//Tooltip (Подсказка)
//Modal (Модальное окно)
//Slider (Слайдер)
//Switch (Тумблер)
//Stepper / ProgressBar
//Avatar (Аватар)
//Badge (Бейдж)
//Chip (Метка)
//Card (Карточка)
//Dropdown / Menu
//Spinner / Loader
//DatePicker / TimePicker