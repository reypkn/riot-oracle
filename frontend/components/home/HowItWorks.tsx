export default function HowItWorks() {
  return (
    <section className="bg-muted py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-12">Comment ça marche</h2>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        <div>
          <h3 className="font-semibold mb-2">1️⃣ Consulte les matchs</h3>
          <p className="text-muted-foreground">
            Matchs mis à jour automatiquement toutes les 15 minutes.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">2️⃣ Publie ton analyse</h3>
          <p className="text-muted-foreground">
            Choisis le vainqueur et ton niveau de confiance.
          </p>
        </div>
        <div>
          <h3 className="font-semibold mb-2">3️⃣ Suis tes performances</h3>
          <p className="text-muted-foreground">
            Dashboard avec statistiques et classement global.
          </p>
        </div>
      </div>
    </section>
  );
}
