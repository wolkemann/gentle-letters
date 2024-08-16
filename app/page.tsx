import LandingPageCard from "@/components/LandingPageCard/LandingPageCard";
import NameGeneratorExample from "@/components/NameGeneratorExample/NameGeneratorExample";

export default function Home() {
  return (
    <main>
      <section className="p-5 lg:p-10 w-screen min-h-screen flex flex-col gap-5 lg:flex-row">
        <LandingPageCard
          title="A cozy, relaxing place"
          backgroundColor="bg-window-bg-color"
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

        <LandingPageCard
          title="Anonymous and safe"
          backgroundColor="bg-letter-bg-color"
        >
          <p className="my-3">
            <strong>Gentle Letters</strong> should be a place where people can
            talk freely. To achieve this, the best way is through a place where
            a person can be a nickname and nothing else.
          </p>
          <p className="my-3">
            To avoid the occurrence of using a name that could exactly identify
            someone, a random nickname will be assigned the first time an
            account is created.
          </p>
          <p className="my-3">
            The nickname generation process follows this pattern:
            adjective_color_animal (i.e. laughing_purple_octopus).
          </p>
          <NameGeneratorExample />
        </LandingPageCard>

        <LandingPageCard
          title="Write letters, replies and get rewared for your kindness!"
          backgroundColor="bg-letter-reply-bg-color"
        >
          <p className="my-3">
            <strong>Gentle Letters</strong> should be a place where people can
            relax and talk freely. To achieve this, the best way to do this is
            through a place where a person can be a nickname and nothing else.
          </p>
        </LandingPageCard>
      </section>
    </main>
  );
}
