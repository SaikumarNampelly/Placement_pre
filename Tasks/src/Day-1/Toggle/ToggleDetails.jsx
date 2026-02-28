import React, { useState } from "react";
function ToggleDetails() {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };
  return (
    <div>
      <button onClick={toggleDetails}>{showDetails ? "hide" : "show Deatils"}</button>
      {showDetails && (
        <ul>
          <li> hello , Iam Sai kumar and I</li>
          <li> Engineering student focused on full-stack development Strong</li>
          <li> interest in JavaScript and React Actively building real-world   </li>
          <li> projects to improve skills Comfortable with core programming</li>
          <li> fundamentals Focused on writing clean and efficient code</li><li>
            Continuously learning and improving problem-solving ability Goal:</li>
          <li> grow from beginner to production-ready developer 🚀</li></ul>
      )}
    </div>
  );
}
export default ToggleDetails;
