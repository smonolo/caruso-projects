'use client'

import Image from 'next/image'
import Link from 'next/link'
import logo from '@/assets/images/logo.png'
import data from '@/data/layout/navbar.json'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

export default function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed left-0 top-0 w-full py-5 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-x-5">
        <Link href="/">
          <Image
            src={logo}
            alt="Simone Caruso Design white logo"
            className="w-[25px]"
          />
        </Link>
        <div className="flex w-fit items-center gap-x-5">
          {data.items.map((item, index) => (
            <Link key={index} href={item.url}>
              <span
                className={classNames(
                  'font-medium transition-colors hover:text-cp-light-white',
                  pathname === item.url
                    ? 'text-cp-light-white'
                    : 'text-cp-dark-white'
                )}
              >
                {item.text}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
