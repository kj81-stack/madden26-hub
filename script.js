function showTeam(team) {
  const teamInfo = document.getElementById("team-info");

  const teams = {
    chiefs: {
      name: "Kansas City Chiefs",
      playStyle: "Best for players who like passing, quick throws, and explosive offense.",
      strengths: [
        "Elite quarterback play",
        "Strong passing attack",
        "Great for quick reads and deep shots"
      ],
      weaknesses: [
        "Can be predictable if you only pass",
        "Run game may not always be the main strength"
      ],
      recommendation:
        "Use the Chiefs if you like fast offense, passing plays, and scoring quickly."
    },

    ravens: {
      name: "Baltimore Ravens",
      playStyle: "Best for players who like running the ball and using a mobile quarterback.",
      strengths: [
        "Great rushing attack",
        "Mobile quarterback makes defenses adjust",
        "Strong option and play-action potential"
      ],
      weaknesses: [
        "Passing can be harder if the defense contains the quarterback",
        "You need to mix up plays to avoid being stopped"
      ],
      recommendation:
        "Use the Ravens if you like running, scrambling, and controlling the clock."
    },

    eagles: {
      name: "Philadelphia Eagles",
      playStyle: "Best for balanced players who want strong offense and defense.",
      strengths: [
        "Strong offensive line",
        "Good rushing and passing balance",
        "Reliable defense"
      ],
      weaknesses: [
        "Requires smart play calling",
        "Can struggle if you force too many deep passes"
      ],
      recommendation:
        "Use the Eagles if you want a balanced team that can win in multiple ways."
    },

    niners: {
      name: "San Francisco 49ers",
      playStyle: "Best for players who like short passes, running, and strong defense.",
      strengths: [
        "Great offensive weapons",
        "Strong defense",
        "Good for short passing and yards after catch"
      ],
      weaknesses: [
        "Deep passing may not always be the safest option",
        "Needs good timing on offense"
      ],
      recommendation:
        "Use the 49ers if you like smart offense, defense, and reliable playmakers."
    },

    dolphins: {
      name: "Miami Dolphins",
      playStyle: "Best for players who like speed and big plays.",
      strengths: [
        "Very fast wide receivers",
        "Great for deep passes",
        "Can score quickly"
      ],
      weaknesses: [
        "Offense can struggle if deep plays are covered",
        "Requires quick decision-making"
      ],
      recommendation:
        "Use the Dolphins if you like speed, deep shots, and explosive plays."
    },

    cowboys: {
      name: "Dallas Cowboys",
      playStyle: "Best for players who want strong defense and a balanced offense.",
      strengths: [
        "Strong pass rush",
        "Good receivers",
        "Balanced offensive options"
      ],
      weaknesses: [
        "Can struggle if the quarterback is pressured",
        "Needs smart decisions on offense"
      ],
      recommendation:
        "Use the Cowboys if you like defense, passing, and a balanced game plan."
    },

    bills: {
      name: "Buffalo Bills",
      playStyle: "Best for players who like a powerful quarterback and aggressive offense.",
      strengths: [
        "Strong quarterback arm",
        "Good for passing and scrambling",
        "Can make big plays quickly"
      ],
      weaknesses: [
        "Risky throws can lead to turnovers",
        "Needs controlled play calling"
      ],
      recommendation:
        "Use the Bills if you like aggressive offense and making big plays."
    },

    lions: {
      name: "Detroit Lions",
      playStyle: "Best for players who like physical offense and balanced football.",
      strengths: [
        "Strong offensive line",
        "Good running game",
        "Reliable passing options"
      ],
      weaknesses: [
        "May not be as explosive as faster teams",
        "Needs patience and steady drives"
      ],
      recommendation:
        "Use the Lions if you like running, balance, and controlling the game."
    }
  };

  const selectedTeam = teams[team];

  teamInfo.innerHTML = `
    <h2>${selectedTeam.name}</h2>
    <p><strong>Play Style:</strong> ${selectedTeam.playStyle}</p>

    <h3>Strengths</h3>
    <ul>
      ${selectedTeam.strengths.map(strength => `<li>${strength}</li>`).join("")}
    </ul>

    <h3>Weaknesses</h3>
    <ul>
      ${selectedTeam.weaknesses.map(weakness => `<li>${weakness}</li>`).join("")}
    </ul>

    <h3>Recommendation</h3>
    <p>${selectedTeam.recommendation}</p>
  `;
}