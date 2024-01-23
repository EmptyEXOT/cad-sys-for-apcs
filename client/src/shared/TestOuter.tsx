import React, {FC, ReactNode} from 'react';
import Test from "@/shared/Test";
import classNames from "classnames";

export interface TestOuterProps {
    children: ReactNode;
}

const TestOuter: FC<TestOuterProps> = (props) => {
    return (
        <Test className={classNames('')}></Test>
    );
};

export default TestOuter;