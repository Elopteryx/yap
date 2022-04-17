import { FC, memo } from 'react';
import './VersionDisplay.css';
import VersionContext from "../VersionContext";
import {useContext} from "react";

type VersionDisplayProps = {};

const VersionDisplay: FC<VersionDisplayProps> = () => {
    const version = useContext(VersionContext);

    return (
        <div className="VersionDisplay">Version: {version.value}</div>
    );
};

export default memo(VersionDisplay);