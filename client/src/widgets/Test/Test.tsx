'use client'
import React, {FC, ReactNode} from 'react';
import classNames from "classnames";
import cls from "./Test.module.scss"
import {useGetTodoByIdQuery} from "@/features/SignUpForm/services/signUp";



interface TestProps {
    children?: ReactNode
    className?: string | undefined;
}

const Test: FC<TestProps> = (
    {
        children,
        ...props
    }
) => {
    const { data, error, isLoading } = useGetTodoByIdQuery(1)

    return (
        <div className="App">
            {error ? (
                <>Oh no, there was an error</>
            ) : isLoading ? (
                <>Loading...</>
            ) : data ? (
                <>
                    <h3>{JSON.stringify(data)}</h3>
                </>
            ) : null}
        </div>
    )
};

export default Test;