import {useTranslations} from 'next-intl'
import Button from "@/shared/Button/Button";
import Section from "@/shared/Section/Section";
import {Sections} from "@/shared/sections/sections";

export default function Home() {
    const t = useTranslations('Index')
    return (
        <main className="">
            <Button>{t('title')}</Button>
            <Section id={Sections.Home}>
                <div className={'text-red-900'}>smth</div>
                <div className={'text-red-900'}>smth</div>
                <div className={'text-red-900'}>smth</div>
                <div className={'text-red-900'}>smth</div>
                <div className={'text-red-900'}>smth</div>
                <div className={'text-red-900'}>smth</div>
                <div className={'text-red-900'}>smth</div>
                <div className={'text-red-900'}>smth</div>
            </Section>


        </main>
    );
}
