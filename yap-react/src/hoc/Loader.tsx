import { FC, ReactNode } from "react";
import logo from '../logo.svg';

export type HasLoading = {
    isLoading?: boolean;
};

const Loader: FC<{}> = () => {
    return (
        <div className="App">
            <img src={logo} className="App-logo" alt="logo" />
            <p>Loading...</p>
        </div>
    )
};

export function withLoading<T extends HasLoading>(func: FC<T>): FC<T> {
    return (props: T & {children?: ReactNode}) => {
        if (props.isLoading) {
            return <Loader/>;
        } else {
            return func(props);
        }
    }
}