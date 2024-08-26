import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full p-5 bg-stone-50 shadow">
      <div className="md:container grid grid-rows-1 md:grid-cols-4 gap-10">
        <div className="flex flex-col justify-between">
          <span>
            <h3 className="font-bold">About Gentle Letters</h3>
            <p>A open source project by Federico "Wolkemann" Sardo.</p>
          </span>

          <Link
            href="https://github.com/wolkemann/gentle-letters"
            target="_BLANK"
            className="font-bold underline"
          >
            Github Repository
          </Link>
        </div>
        <div>
          <span>
            <h3 className="font-bold">Contacts</h3>
            <p>A open source project by Federico "Wolkemann" Sardo.</p>
          </span>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          voluptatem enim delectus illo quibusdam minima molestiae nulla quas
          unde, aut, eum accusamus accusantium, atque non ducimus cumque! Modi,
          voluptatibus a.
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
          voluptatem enim delectus illo quibusdam minima molestiae nulla quas
          unde, aut, eum accusamus accusantium, atque non ducimus cumque! Modi,
          voluptatibus a.
        </div>
      </div>
    </footer>
  );
}
