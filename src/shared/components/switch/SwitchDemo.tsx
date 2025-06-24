import {useState} from "react";
import {Switch} from "@shared/components";

export const SwitchDemo: React.FC = () => {
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            <Switch checked={isOn} onChange={setIsOn} />
            <p>Тумблер {isOn ? 'включён' : 'выключен'}</p>
        </div>
    );
};
