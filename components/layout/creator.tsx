import Link from 'next/link'

export default function Creator() {
  return (
    <section className="w-full">
      <span className="text-sm text-cp-dark-white">
        Built by{' '}
        <Link
          href="https://smnl.dev"
          target="_blank"
          className="font-medium text-cp-light-white underline underline-offset-2"
        >
          Stefano Monolo
        </Link>
      </span>
    </section>
  )
}
