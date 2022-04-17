import { FC, memo } from 'react';
import './MenuBar.css';
import MenuItem from './MenuItem';

type MenuBarProps = {};

const MenuBar: FC<MenuBarProps> = () => {
    return (
        <div className="MenuBar">
            <MenuItem name="Motherboard"/>
            <MenuItem name="Processor"/>
            <MenuItem name="Videocard"/>
            <MenuItem name="Monitor"/>
            <MenuItem name="Notebook"/>
            <MenuItem name="Television"/>
            <MenuItem name="Console"/>
            <MenuItem name="SSD"/>
            <MenuItem name="Other"/>
        </div>
    );
};

export default memo(MenuBar);