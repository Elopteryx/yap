import { FC, memo } from 'react';
import './UserInfo.css';
import {useContext} from "react";
import UserContext from "../UserContext";

type UserInfoProps = {};

const UserInfo: FC<UserInfoProps> = () => {
    const user = useContext(UserContext);

    return (
        <div className="UserInfo">Logged in: {user.name}</div>
    )
};

export default memo(UserInfo);