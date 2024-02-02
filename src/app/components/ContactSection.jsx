export default function ContactSection() {
  return (
    <section className="mb-40">
      <h5 className="text-xl p-2">Get in touch</h5>
      <div className="grid gap-2 grid-cols-2 md:grid-cols-16 text-gray-400 text-sm md:border-b p-2 items-start md:items-center">
        <p className="col-span-1 md:col-span-4 py-2">Email</p>
        <a
          href="mailto:gabewolford@gmail.com"
          target="_blank"
          className="col-span-1 md:col-span-4 md:hidden text-yellow-400 md:text-black flex my-auto"
        >
          gabewolford@gmail.com
        </a>
        <p className="col-span-1 md:col-span-4 py-2">LinkedIn</p>
        <a
          href="https://www.linkedin.com/in/gabe-wolford/"
          target="_blank"
          className="col-span-1 md:col-span-4 md:hidden text-blue-500 md:text-black my-auto"
        >
          /gabe-wolford
        </a>
        <p className="col-span-1 md:col-span-4 py-2">GitHub</p>
        <a
          href="https://github.com/gabewolford/"
          target="_blank"
          className="col-span-1 md:col-span-4 md:hidden text-orange-400 md:text-black my-auto"
        >
          /gabewolford
        </a>
        <p className="col-span-1 md:col-span-4 py-2">Studio</p>
        <a
          href="https://biiigstretch.studio/"
          target="_blank"
          className="col-span-1 md:col-span-4 md:hidden text-lavender-500 md:text-black my-auto"
        >
          Biiig Stretch Studio
        </a>
      </div>

      <div className="hidden md:grid gap-2 grid-cols-2 md:grid-cols-16 text-sm p-2 items-start md:items-center">
        <a
          href="mailto:gabewolford@gmail.com"
          target="_blank"
          className="col-span-1 md:col-span-4 hover:text-yellow-400 transtion duration-100"
        >
          gabewolford@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/gabe-wolford/"
          target="_blank"
          className="col-span-1 md:col-span-4 hover:text-blue-500 transtion duration-100"
        >
          /gabe-wolford
        </a>
        <a
          href="https://github.com/gabewolford/"
          target="_blank"
          className="col-span-1 md:col-span-4 hover:text-orange-400 transtion duration-100"
        >
          /gabewolford
        </a>
        <a
          href="https://biiigstretch.studio"
          target="_blank"
          className="col-span-1 md:col-span-4 hover:text-lavender-500 transtion duration-100"
        >
          Biiig Stretch Studio
        </a>
      </div>
    </section>
  );
}
