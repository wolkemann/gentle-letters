import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-5 text-sm bg-stone-50 shadow">
      <div className="md:container grid grid-rows-1 md:grid-cols-3 gap-40">
        <div className="flex flex-col justify-between">
          <p>
            A open source project by Federico "Wolkemann" Sardo.
            <br />
            If you like this project, please consider to donate.
          </p>
          <Link
            href="https://github.com/wolkemann/gentle-letters"
            target="_BLANK"
            className="font-bold underline"
          >
            Github Repository
          </Link>
        </div>
        <div className="flex flex-col items-start">
          <h3 className="font-bold mb-3">Contacts</h3>
          <Link
            href="https://portfolio-seven-roan-24.vercel.app/"
            target="_BLANK"
            className="my-2 hover:underline"
          >
            Portfolio
          </Link>
          <Link
            href="mailto:federico.sardo1@AT_gmail.com"
            target="_BLANK"
            className="my-2 hover:underline"
          >
            Email
          </Link>
          <Link
            href="https://github.com/wolkemann/gentle-letters"
            target="_BLANK"
            className="my-2 hover:underline"
          >
            Instagram
          </Link>
          <Link
            href="https://github.com/wolkemann"
            target="_BLANK"
            className="my-2 hover:underline"
          >
            Github
          </Link>
          <Link
            href="https://www.linkedin.com/in/federico-sardo-8187a3196/"
            target="_BLANK"
            className="mt-2 hover:underline"
          >
            Linkedin
          </Link>
        </div>
        <div>
          <h3 className="font-bold mb-2">Cookies Policy</h3>
          This site uses only necessary cookies, which are required to enable
          its basic features, such as providing secure log-in.
        </div>
      </div>
    </footer>
  );
}
