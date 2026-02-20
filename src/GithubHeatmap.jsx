import React from "react";
import { GitHubCalendar } from "react-github-calendar";

const GithubHeatmap = () => {
  return (
    <div className="github-wrapper">
      <GitHubCalendar
        username="srikstar"
        blockSize={12}
        blockMargin={4}
        fontSize={14}
        colorScheme="light"
        theme={{
          light: [
            "#ebedf0",
            "#9be9a8",
            "#40c463",
            "#30a14e",
            "#216e39"
          ]
        }}
      />
    </div>
  );
};

export default GithubHeatmap;