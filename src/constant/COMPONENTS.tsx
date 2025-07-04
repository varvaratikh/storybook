import {
    Button,
    Checkbox,
    Input,
    Dropdown,
    Toggle,
    Textarea,
    Tabs,
    Breadcrumbs,
    Tooltip, Avatar, Badge, Chip
} from "@shared/components";
import {PaginationDemo} from "@shared/components/pagination/PaginationDemo.tsx";
import {AlertDemo} from "@shared/components/alert/AlertDemo.tsx";
import {ModalDemo} from "@shared/components/modal/ModalDemo.tsx";
import {SliderDemo} from "@shared/components/slider/SliderDemo.tsx";
import {SwitchDemo} from "@shared/components/switch/SwitchDemo.tsx";
import {ProgressBarDemo} from "@shared/components/progressBar/ProgressBarDemo.tsx";

export const COMPONENTS = {
    кнопка: <Button text="Нажми на меня" />,
    инпут: <Input />,
    переключатель: <Toggle />,
    флажок: (
        <div>
            <Checkbox />
            <br />
            <br />
            <Checkbox label="Флажочек" />
        </div>
    ),
    выпадающий_список: (
        <Dropdown
            options={[
                { value: "apple", label: "Яблоко" },
                { value: "banana", label: "Банан" },
                { value: "orange", label: "Апельсин" },
                { value: "kiwi", label: "Киви" },
            ]}
            onSelect={(option) => console.log("Вы выбрали:", option)}
            placeholder="Выберите фрукт"
        />
    ),
    многострочное_поле_ввода_текста: <Textarea />,
    вкладки: <Tabs
        tabs={[
            { label: 'Главная', content: <div>Добро пожаловать!</div> },
            { label: 'Профиль', content: <div>Информация о пользователе</div> },
            { label: 'Контакты', content: <div>Контактная информация</div> },
        ]}
    />,
    хлебные_крошки: <Breadcrumbs />,
    пагинация: <PaginationDemo />,
    оповещение: <AlertDemo />,
    подсказка: <Tooltip text="Это подсказка" position="right">
        <Button text="Наведи на меня" />
    </Tooltip>,
    модальное_окно: <ModalDemo />,
    слайдер: <SliderDemo />,
    тумблер: <SwitchDemo />,
    прогрес: <ProgressBarDemo />,
    аватар: <Avatar />,
    бейдж: <div>
        <Badge text="Новое" variant="success" />
        <Badge text="99+" variant="danger" size="large" />
        <Badge text="Beta" variant="secondary" size="small" />
    </div>,
    метка: <div>
        <Chip label="React" color="primary" />
        <Chip label="Удаляемая метка" color="danger" onDelete={() => alert("Удалено")} />
        <Chip label="Кликабельная метка" onClick={() => alert("Клик!")} />
    </div>
};

//Card (Карточка)
//Dropdown / Menu
//Spinner / Loader
//DatePicker / TimePicker