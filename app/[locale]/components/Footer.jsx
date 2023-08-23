import {useTranslations} from 'next-intl'


export default function Footer(){

    const t = useTranslations('footer')
    return <p className="bg-slate-400 fixed bottom-0 w-full uppercase font-bold py-10">
   {t('description')}
    </p>
}