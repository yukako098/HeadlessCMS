import React from "react";
import TwitterTimeline from "react-twitter-embedded-timeline";

// ReactDOM.render(
//   <TwitterTimeline widgetId="695868534455275520" chrome="noborders noheader" height={300} />,
//   document.getElementById('app')
// );
const Twitter = () => {
    return (
        <TwitterTimeline
            widgetId="695868534455275520"
            chrome="noborders noheader"
            height={300}
            user="098front"
        />
    );
};

export default Twitter;
