import { Navigate, useParams } from "react-router-dom";
import TeamPage from "./TeamPage";
import TEAM_25_26 from "./data/25-26";
import TEAM_24_25 from "./data/24-25";

const TEAMS: Record<string, { title: string; members: any[] }> = {
  "25-26": { title: "Team 2025–26", members: TEAM_25_26 },
  "24-25": { title: "Team 2024–25", members: TEAM_24_25 },
};

export default function TeamRouter() {
  const { year } = useParams<{ year: string }>();

  // No year → redirect to current year
  if (!year) return <Navigate to="/team/25-26" replace />;

  const data = TEAMS[year];

  if (!data) {
    return (
      <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
        <h2>Team not found</h2>
        <p>
          Invalid year. Please choose a valid team from the navigation menu.
        </p>
      </div>
    );
  }

  return (
    <TeamPage title={data.title} members={data.members} />
  );
}
