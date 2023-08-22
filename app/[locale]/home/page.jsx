import {useTranslations} from 'next-intl';
import {getTranslations} from 'next-intl/server'
import UseTranslatins from './components/UseTranslatins.tsx'

export async function generateMetadata(){
    const t = await useTranslations('homepage')

    return {
        title:t('tab-title-about')
    };
}


export default function Home(){
    const t = useTranslations('homepage')
    return <div className="p-5 text-center mt-14">
        
        <p className="py-2">{t("welcome-message")}</p>
        <p className="py-2">{t("topic")}</p>
        </div>

        <div className="pt-8 text-center font-bold text-2xl">


            <UseTranslations translate={t('server-side-component')}/>
        </div>
}