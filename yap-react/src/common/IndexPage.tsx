import { FC, memo } from 'react';
import MenuBar from '../menu/MenuBar';

type IndexPageProps = {};

const IndexPage: FC<IndexPageProps> = () => {
    return (
        <div className="Page">
            <MenuBar/>
            <div className="Content">
                This is the index page.
            </div>
        </div>
    );
};

export default memo(IndexPage);