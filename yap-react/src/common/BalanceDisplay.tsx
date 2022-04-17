import { FC, memo } from 'react';
import './BalanceDisplay.css';
import {useContext} from "react";
import UserContext from "../UserContext";

type BalanceDisplayProps = {};

const BalanceDisplay: FC<BalanceDisplayProps> = () => {
    const user = useContext(UserContext);

    return (
        <div className="BalanceDisplay">Balance: {user.balance}</div>
    );
};

export default memo(BalanceDisplay);