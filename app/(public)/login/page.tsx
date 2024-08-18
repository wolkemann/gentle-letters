import LoginForm from "@/components/LoginForm";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

export default function Login() {
  return (
    <main>
      <section className="w-full min-h-screen flex flex-col items-center justify-center">
        <LoginForm />
      </section>
    </main>
  );
}
