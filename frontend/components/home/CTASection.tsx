import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="bg-black text-white text-center py-20 px-6">
      <h2 className="text-3xl font-bold mb-6">
        Prêt à tester ton instinct ?
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-4">
        <Button size="lg">Créer un compte</Button>
        <Button variant="secondary" size="lg">
          Se connecter
        </Button>
      </div>
    </section>
  );
}
