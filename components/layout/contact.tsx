import Link from 'next/link'

export default function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-[1200px] rounded-xl border-2 border-dashed border-cp-dark-white p-14"
    >
      <h3 className="text-4xl font-bold">Contact me</h3>
      <p className="mt-5 w-4/5 text-cp-dark-white">
        If you have a project idea in the works or an urge to redefine your
        brand, let&apos;s have a conversation! Your vision, coupled with my
        design mojo, can turn sparks of creativity into something truly
        extraordinary. Let&apos;s embark on this journey of creative
        collaboration and bring your ideas to life!
      </p>
      <Link
        href="mailto:s.carusoprojects@gmail.com"
        className="mt-10 flex items-baseline gap-x-5 text-4xl font-bold hover:underline"
      >
        <i className="bi bi-envelope text-3xl" />
        s.carusoprojects@gmail.com
      </Link>
    </section>
  )
}
