import React, { useEffect, useState } from "react";

function OrientationMessage() {
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    function handleOrientationChange() {
      setIsPortrait(window.innerHeight > window.innerWidth);
    }

    window.addEventListener("resize", handleOrientationChange);

    return () => {
      window.removeEventListener("resize", handleOrientationChange);
    };
  }, []);

  // Check if the screen width is between 500 and 950 pixels and if it's in landscape mode
  if (
    window.innerWidth >= 500 &&
    window.innerWidth <= 950 &&
    window.innerHeight < window.innerWidth
  ) {
    return (
      <div className="landscape-message">
        <p>Please turn your phone to portrait mode for the best experience.</p>
      </div>
    );
  }

  return null;
}

export default OrientationMessage;
