import { createContext } from 'react';
import {Language} from "./LocalizationContext";

export type User = {
    name: string;
    balance: number;
    language: Language;
};

const UserContext = createContext<User>({
    name: 'Anonymous',
    balance: 0,
    language: 'en',
});

export default UserContext;