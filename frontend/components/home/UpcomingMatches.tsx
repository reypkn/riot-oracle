import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { upcomingMatches } from "@/lib/mock-data";

export default function UpcomingMatches() {
  return (
    <section className="container mx-auto px-6" aria-labelledby="upcoming-matches">
      <h2 id="upcoming-matches" className="text-3xl font-bold mb-8">
        Matchs à venir
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {upcomingMatches.map((match) => (
          <Card key={match.id} className="hover:shadow-lg transition">
            <CardHeader>
              <CardTitle>
                {match.teamA} vs {match.teamB}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <p className="text-sm text-muted-foreground">
                {match.competition}
              </p>
              <p className="text-sm">{match.startsAt}</p>
              <div className="flex gap-2">
                <Button variant="outline">Voir</Button>
                <Button>Pronostiquer</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
