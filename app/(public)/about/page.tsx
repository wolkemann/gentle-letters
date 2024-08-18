import LandingPageCard from "@/components/LandingPageCard";
import NameGeneratorExample from "@/components/NameGeneratorExample";

export default function About() {
  return (
    <main>
      <section
        id="about"
        className="w-full min-h-screen flex flex-col lg:flex-row"
      >
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
            , which I strongly recommend to everyone.
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
            adjective_color_animal
          </p>
          <NameGeneratorExample />
        </LandingPageCard>

        <LandingPageCard
          title="Write letters, replies and get rewarded for your kindness!"
          backgroundColor="bg-letter-reply-bg-color"
        >
          <p className="my-3">
            Whenever you want to express a thought and share it with someone
            else, you can write a <strong>letter</strong> and send it around.
          </p>
          <p className="my-3">
            The Letter is then received by a random member who can interact with
            you by sending a <strong>reply letter</strong>. In this way you will
            always receive help from different people.
          </p>
          <p className="my-3">
            As a token of appreciation for the kind words you received, you can
            send a <strong>sticker</strong> to the person who welcomed your
            letter and decided to be so kind to help you.
          </p>
          <p className="my-3">
            That&apos;s it. The idea is to avoid as much as possibile any
            mechanism that could cause too much addiction.
          </p>
        </LandingPageCard>
      </section>
    </main>
  );
}
