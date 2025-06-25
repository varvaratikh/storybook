import {ButtonControlledProgressBar, ColorChangingProgressBar, ProgressBar} from "@shared/components";

export const ProgressBarDemo = () => {
    return(
        <div>
            <ButtonControlledProgressBar /><br />
            <ColorChangingProgressBar /><br />
            <ProgressBar />
        </div>
    )
}