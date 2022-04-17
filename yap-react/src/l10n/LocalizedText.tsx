import { FC, memo, useContext } from 'react';
import enData from './data/en.json';
import deData from './data/de.json';
import LocalizationContext from '../LocalizationContext';

type LocalizedProps = {
    l10nKey: string;
};

const LocalizedText: FC<LocalizedProps> = (props) => {
    const language = useContext(LocalizationContext);
    const {l10nKey} = props;
    let value;
    switch (language) {
        case 'de':
            value = (deData as any)[l10nKey];
            break;
        case 'en':
        default:
            value = (enData as any)[l10nKey];
            break;
    }

    value = value || 'N/A';

    return (
        <>{value}</>
    );
};

export default memo(LocalizedText);