import LandingPageCard from "@/components/LandingPageCard/LandingPageCard";

export default function Home() {
  return (
    <main>
      <section className="p-5 lg:p-10 w-screen min-h-screen flex flex-col gap-5 lg:flex-row">
        <LandingPageCard
          title="A cozy, relaxing place"
          backgroundColor="window-bg-color"
        >
          <p className="my-3">
            Today is all about Facebook, Instagram and TikTok. But these Socials
            are just huge shopping malls where people only showcase their
            &quot;the very best of&quot; of their lives.
          </p>
          <p className="my-3">
            Real life is made of ups and downs, and when you are forced by
            competition to show only the best of you, then it becomes a
            manufactured, artificial thing, very far from what you really want
            to show to people.
          </p>
          <p className="my-3">
            Sometimes we just need a relaxing place where we can talk without
            the fear of social pressure, without filters and with someone
            willing to listen to us.
          </p>
          <p className="my-3">
            This is the reason behind <strong>Gentle Letters</strong>. I decided
            to create it after playing{" "}
            <a
              href="https://store.steampowered.com/app/1070710/Kind_Words_lo_fi_chill_beats_to_write_to/"
              target="_blank"
              className="underline font-bold"
            >
              Kind Words
            </a>
            , which I strongly reccomend to everyone.
          </p>
        </LandingPageCard>

        <div className="w-full border lg:p-10">asdsad</div>

        <div className="w-full border lg:p-10">asdsad</div>
      </section>
    </main>
  );
}
