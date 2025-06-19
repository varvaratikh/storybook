import {useState} from "react";
import {Alert, Button} from "@shared/components";

export const AlertDemo = () => {
    console.log('AlertDemo МОНТИРОВАН');

    const [visible, setVisible] = useState(false);

    const showAlert = () => {
        console.log("Показать оповещение");
        setVisible(true);
    };

    return (
        <div>
            <Button text="Показать оповещение" onClick={showAlert} />
            {visible && (
                <Alert
                    type="success"
                    message="Это пример оповещения"
                    onClose={() => setVisible(false)}
                    duration={3000}
                />
            )}
        </div>
    );
};
