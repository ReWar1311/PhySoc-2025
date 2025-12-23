import { Link, useParams } from "react-router-dom";
import TeamCard from "../../components/TeamCard/TeamCard";
import { IconName } from "../../common/types/types";
import "./Team.css";

export type TeamMember = {
  name: string;
  role:
    | "Faculty"
    | "Overall Coordinator"
    | "Coordinator"
    | "Executive"
    | "Advisor";
  image: string;
  socials?: { name: IconName; link: string }[];
};

export default function TeamPage({
  title,
  members,
}: {
  title: string;
  members: TeamMember[];
}) {
  const { year } = useParams<{ year: string }>();

  const section = (label: string, role: TeamMember["role"]) => {
    const list = members.filter((m) => m.role === role);
    if (list.length === 0) return null;
    return (
      <>
        <div className="Heading">{label}</div>
        <div className="team-cards">
          {list.map((m, i) => (
            <TeamCard
              key={i}
              name={m.name}
              role={m.role}
              image={m.image}
              social={m.socials ?? []}
            />
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="team">
      <div className="team-bg">

        {/* YEAR SWITCH */}
        <div className="team-year-switch">
          <Link to="/team/25-26">
            <button
              className={`team-year-btn ${
                year === "25-26" ? "active" : ""
              }`}
            >
              25–26
            </button>
          </Link>

          <Link to="/team/24-25">
            <button
              className={`team-year-btn ${
                year === "24-25" ? "active" : ""
              }`}
            >
              24–25
            </button>
          </Link>
        </div>

        {/* ✨ ANIMATED CONTENT */}
        <div key={year} className="team-content">
          {section("Faculty Coordinators:", "Faculty")}
          {section("Overall Coordinator:", "Overall Coordinator")}
          {section("Advisors:", "Advisor")}
          {section("Coordinators:", "Coordinator")}
          {section("Executives:", "Executive")}
        </div>
      </div>
    </div>
  );
}
