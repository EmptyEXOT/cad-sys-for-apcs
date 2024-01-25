import {useTranslations} from 'next-intl'
import Button from "@/shared/Button/Button";
import Section, {BgVariant} from "@/shared/Section/Section";
import {Sections} from "@/shared/sections/sections";
import classNames from "classnames";

export default function Home() {
    const t = useTranslations('Sections')
    return (
        <main className="">
            <Section isFullWidth={true} id={Sections.Home}
                     className={classNames('pt-12 h-screen flex flex-col justify-center bg-gray-200')}>
                <Section id={Sections.Contacts}>
                    <div className={classNames('flex flex-col gap-8 pt-8')}>
                        <h1 className={classNames('text-5xl font-bold leading-snug')}>
                            {t('Cover.title')}
                        </h1>
                        <p className={classNames('text-2xl leading-normal')}>
                            {t('Cover.description')}
                        </p>
                        <div className={classNames('flex gap-4')}>
                            <Button border={true}>{t('Cover.Buttons.learn_more')}</Button>
                            <Button border={true} fill={true}>{t('Cover.Buttons.sign_up')}</Button>
                        </div>
                    </div>
                </Section>

            </Section>
            <Section id={Sections.Feature} className={classNames('pt-24')}>
                <div className={classNames('flex flex-col gap-8')}>
                    <h1 className={classNames('text-5xl font-bold leading-snug')}>
                        Custom Services for Manufacturing Enterprises
                    </h1>
                    <p className={classNames('text-2xl leading-normal')}>
                        Experience our tailored solutions for automated process control systems, designed to optimize
                        manufacturing operations and increase efficiency.
                    </p>
                    <div className={classNames('flex gap-4')}>
                        <Button border={true}>Learn More</Button>
                        <Button border={true} fill={true}>Sign Up</Button>
                    </div>
                </div>
            </Section>
        </main>
    );
}
