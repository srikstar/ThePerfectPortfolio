import React from "react";
import { GitHubCalendar } from "react-github-calendar";

const GithubHeatmap = ({ darkMode }) => {
  return (
    <div className="github-wrapper">
      <GitHubCalendar
        username="srikstar"
        blockSize={12}
        blockMargin={4}
        fontSize={14}
        colorScheme={darkMode ? "dark" : "light"}
        theme={{
          light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
          dark: ["#1a1a1a", "#0e4429", "#006d32", "#26a641", "#39d353"]
        }}
      />
    </div>
  );
};

export default GithubHeatmap;