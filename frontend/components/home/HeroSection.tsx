import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section
      className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-24 px-6 text-center"
      aria-labelledby="hero-title"
    >
      <h1
        id="hero-title"
        className="text-4xl md:text-6xl font-bold mb-6"
      >
        Prédisez les matchs esport. Grimpez au classement.
      </h1>

      <p className="max-w-2xl mx-auto text-lg md:text-xl mb-10 opacity-90">
        Publiez vos pronostics Valorant et comparez vos performances
        à la communauté Riot Oracle.
      </p>

      <div className="flex flex-col md:flex-row justify-center gap-4">
        <Button size="lg">Voir les matchs</Button>
        <Button variant="secondary" size="lg">
          Créer un compte
        </Button>
      </div>
    </section>
  );
}
