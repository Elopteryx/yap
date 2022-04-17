import { createContext } from 'react';

export type Language =
    | 'en'
    | 'de';

const LocalizationContext = createContext<Language>('en');

export default LocalizationContext;