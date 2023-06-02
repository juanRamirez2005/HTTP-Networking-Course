try {
  const leaderboard = await fetchLeaderBoard();
  console.log(leaderboard);
} catch (err) {
  console.log(`Our servers are down`);
}

async function fetchLeaderBoard() {
  const response = await fetch("https://fantasyquest.servers");
  return response.json();
}
