import Link from 'next-intl/link'
import Image from 'next/image'

import EN from './../../../public/uk.png'
import ES from './../../../public/spanish.png'
import PL from './../../../public/poland.png'

import { useTranslations } from 'next-intl';

export default function Navbar() {
  const t = useTranslations('navbar')
  return (

    <header className="bg-slate-400 font-bold">
      <nav className="p-5">
        <div className="flex justify-end">
          <Link href="/" locale="en">
            <Image src={EN}
              alt="united kingdom"
              width={20}
              height={20} />
          </Link>
          <Link href="/" locale="es">
            <Image src={ES}
              alt="united kingdom"
              width={20}
              height={20} />
          </Link>
          <Link href="/" locale="pt">
            <Image src={PL}
              alt="united kingdom"
              width={20}
              height={20} />
          </Link>
        </div>
        <div className="flex justify-start uppercase">
          <div className="mr-4">
            <Link href={'/'}>{t('home')}</Link>
          </div>
          <div className="mr-4">
            <Link href={'/about'}>{t('about')}</Link>
          </div>
          <div className="mr-4">
            <Link href={'/contact'}>{t('contact')}</Link>
          </div>
        </div>
      </nav>
    </header>
  )
}