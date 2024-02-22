import React, {FC, ReactNode} from 'react';
import cls from './Paginantion.module.scss'
import classNames from "classnames";
import {Steps} from "@/shared/ui/MultiStepForm/MultiStepForm";
import PaginationItem from "@/shared/ui/MultiStepForm/Pagination/PaginationItem";
interface PaginationProps {
    className?: string;
    children?: ReactNode;
    steps: Steps;
    activeIdx: number;
}

export type PaginationComponent = FC<PaginationProps>;

const Pagination: PaginationComponent = ({className, children, steps, activeIdx, ...props}) => {
    return (
        <div className={classNames(cls.pagination, '', className)}>
            {Object.keys(steps).map((step, idx) => <PaginationItem key={idx} className={classNames('flex-1 h-1.5 bg-black rounded-xl')} isActive={activeIdx===idx} />)}
        </div>
    );
};

export default Pagination;