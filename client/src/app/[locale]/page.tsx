import {useTranslations} from 'next-intl'

export default function Home() {
    const t = useTranslations('Index')
    return (
        <main className="">
            {t('title')}
        </main>
    );
}
