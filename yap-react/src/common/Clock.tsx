import { useState } from 'react';
import * as React from 'react';
import { formatCurrentTime } from '../utils/formatters';
import './Clock.css';

const Clock: React.FunctionComponent<{}> = () => {
    const [time, setTime] = useState(() => {
        window.setInterval(() => {
            setTime(formatCurrentTime());
        }, 1000);
        return formatCurrentTime();
    });
    return (
        <div className="Clock">
            {time}
        </div>
    );
};

export default Clock;
