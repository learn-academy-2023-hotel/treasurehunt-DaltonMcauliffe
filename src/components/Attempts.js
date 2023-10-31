import React, { useState } from "react";

const Attempts = () => {
  const [attempts, setAttempts] = useState(5);
  const attemptClicks = () => {
    setAttempts(attempts - 1);
  };

return (
  <>
    <div onClick={attemptClicks} className="attempt-counter">
      Attempts Made {attempts}
    </div>
  </>
);
}
export default Attempts;
