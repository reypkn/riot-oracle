import { Card, CardContent } from "@/components/ui/card";
import { popularPredictions } from "@/lib/mock-data";

export default function PopularPredictions() {
  return (
    <section className="container mx-auto px-6" aria-labelledby="popular">
      <h2 className="text-3xl font-bold mb-8">
        Pronostics populaires
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {popularPredictions.map((p) => (
          <Card key={p.id}>
            <CardContent className="py-6 space-y-2">
              <p className="font-semibold">@{p.user}</p>
              <p className="text-sm text-muted-foreground">{p.match}</p>
              <p>
                Vainqueur : <strong>{p.prediction}</strong>
              </p>
              <p>Confiance : {p.confidence}%</p>
              <p className="text-sm">👍 {p.likes}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
