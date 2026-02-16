import { leaderboard } from "@/lib/mock-data";

export default function Leaderboard() {
  return (
    <section className="container mx-auto px-6">
      <h2 className="text-3xl font-bold mb-8">Classement</h2>

      <div className="space-y-4 max-w-xl">
        {leaderboard.map((user, index) => (
          <div
            key={user.username}
            className="flex justify-between p-4 border rounded-lg"
          >
            <span>
              {index + 1}. @{user.username}
            </span>
            <span>
              {user.accuracy}% ({user.total})
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
