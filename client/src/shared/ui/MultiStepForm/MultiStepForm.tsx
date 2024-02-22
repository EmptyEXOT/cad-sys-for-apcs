'use client'
import React, {FC, ReactNode, useState} from 'react';
import classNames from "classnames";
import cls from "./MultiStepForm.module.scss"
import Button from "@/shared/ui/Button/Button";
import Pagination from "@/shared/ui/MultiStepForm/Pagination/Pagination";
import Typo from "@/shared/ui/Typo/Typo";
import {HeaderSize} from "@/shared/ui/Typo/Header/H";

interface Step {
    header: string
    component: ReactNode,
    pos: number
}

export interface Steps {
    [step: number]: Step
}

interface MultiStepFormProps {
    steps: Steps
    children?: ReactNode
    className?: string | undefined;
    pagination?: boolean
}

const MultiStepForm: FC<MultiStepFormProps> = (
    {
        children,
        steps,
        className,
        pagination,
        ...props
    }
) => {
    const [step, setStep] = useState<number>(0);
    const onPrev = () => {
        if (step > 0) setStep(step - 1)
    }

    const onNext =() => {
        if (step < Object.keys(steps).length-1) setStep(step + 1)
    }

    return (
        <div className={classNames(cls.multistepform, '', className)}>
            {pagination && <Pagination className={classNames('w-full flex gap-2')} steps={steps} activeIdx={step} />}

            <div>
                {steps[step].component}
            </div>
            <div className={classNames('flex justify-between')}>
                {(step !== 0) && <Button border={true} onClick={onPrev} className={classNames('self-start py-2')}><Typo.H size={HeaderSize.h4}>Prev</Typo.H></Button>}
                {(step !== Object.keys(steps).length-1) && <Button border={true} onClick={onNext} className={classNames('ml-auto py-2')}><Typo.H size={HeaderSize.h4}>Next</Typo.H></Button>}
            </div>
        </div>
    );
};

export default MultiStepForm;