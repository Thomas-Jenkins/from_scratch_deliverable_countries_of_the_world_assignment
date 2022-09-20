import React from 'react';

export default function Main() {
  return (
    <main className="App">
      <div className="title">
        <h1>Flags of the World</h1>
      </div>
      <div className="navigation">
        <input placeholder="Enter Search Here"></input>
        <select>
          <option>All</option>
          <option>None</option>
        </select>
      </div>
      <div className="list">

      </div>
    </main>
  );
}