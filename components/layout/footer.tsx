import data from '@/data/layout/footer.json'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-between gap-x-4">
      <span className="font-medium">
        © {new Date().getFullYear()} Simone Caruso. All rights reserved.
      </span>
      <div className="flex w-fit items-center gap-x-5">
        {data.socials.map((social, index) => (
          <Link key={index} href={social.link} target="_blank">
            <i className={`bi bi-${social.icon} text-lg`} />
          </Link>
        ))}
      </div>
    </footer>
  )
}
