import { PhoneIcon, Mail, MapPin, Linkedin, Github } from 'lucide-react'
import Link from "next/link"

function Contact() {
  return (
    <section className="pt-10 pb-10 lg:pt-20 px-10 lg:px-36 min-h-screen text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0"></div>
      <div className="container mx-auto relative z-0">
        <div className="xl:px-10">
          <h1 className="text-4xl py-2 font-semibold lg:text-6xl">Contact Me</h1>
          <p className="text-gray-300">For Any Project Knock Us</p>
        </div>
        <div className="p-6 xl:mx-10 lg:p-10 border-b border-gray-400 mt-6"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 xl:mx-10 pt-20 py-6">
          <ContactCard
            icon={<Mail className="w-6 h-6" />}
            title="Email"
            content="nomanpervaiz035@gmail.com"
            href="mailto:nomanpervaiz035@gmail.com"
          />
          <ContactCard
            icon={<PhoneIcon className="w-6 h-6" />}
            title="Phone"
            content="+92-3049377779"
            href="tel:+923049377779"
          />
          <ContactCard
            icon={<MapPin className="w-6 h-6" />}
            title="Location"
            content="Karachi,Pakistan"
          />
          <ContactCard
            icon={<Linkedin className="w-6 h-6" />}
            title="LinkedIn"
            content="Noman Pervaiz"
            href="https://www.linkedin.com/in/noman-pervaiz-b93aa62b"
          />
          <ContactCard
            icon={<Github className="w-6 h-6" />}
            title="GitHub"
            content="Nomanpervaiz"
            href="https://github.com/Nomanpervaiz"
          />
     
        </div>
      </div>
    </section>
  )
}


function ContactCard({ icon, title, content, href }) {
  const inner = (
    <>
      <div className="text-orange-400">{icon}</div>
      <h2 className="text-lg font-semibold mt-2">{title}</h2>
      <p className="text-gray-300 mt-1">{content}</p>
    </>
  )

  return (
    <div className="h-auto shadow shadow-white rounded-2xl p-6 transition-all duration-300 hover:shadow-orange-400">
      {href ? (
        <Link href={href} className="block h-full">
          {inner}
        </Link>
      ) : (
        inner
      )}
    </div>
  )
}

export default Contact

