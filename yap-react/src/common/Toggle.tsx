import * as React from 'react';
import './Toggle.css';

type ToggleProps = {};

const Toggle: React.FunctionComponent<ToggleProps> = () => {
    const onChange: any = ({target}: Event) => {
        const mode = (target as any).checked ? "dark" : "light";
        document.documentElement.setAttribute("data-color-mode", mode);
    }
    return (
        <div className="toggle-container">
            <input type="checkbox" id="toggle" onChange={onChange}/>
            <label htmlFor="toggle"></label>
        </div>
    )
};

export default React.memo(Toggle);