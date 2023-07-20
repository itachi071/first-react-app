import React from "react";

function trys() {
  function tryagain() {
    console.log(2);
  }
  return (
    <div>
      <form onSubmit={tryagain}>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default trys;
