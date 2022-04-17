import { FC, memo } from 'react';
import { NavLink } from 'react-router-dom';
import LocalizedText from '../l10n/LocalizedText';

type MenuItemProps = {
    name: string;
};

const MenuItem: FC<MenuItemProps> = (props) => {
    const {name} = props;
    return (
        <div className="MenuItem">
            <NavLink to={"/items/" + name.toLowerCase()} className={isActive =>isActive ? "App-link" : "App-link-active"}>
                <LocalizedText l10nKey={'item.type.' + name.toLowerCase()}/>
            </NavLink>
        </div>
    );
};

export default memo(MenuItem);