import LandingPageCard from "@/components/LandingPageCard";
import NameGeneratorExample from "@/components/NameGeneratorExample";
import RegisterForm from "@/components/RegisterForm";

export default function Register() {
  return (
    <main>
      <section className="w-full min-h-screen flex flex-col items-center justify-center">
        <RegisterForm />
      </section>
    </main>
  );
}
