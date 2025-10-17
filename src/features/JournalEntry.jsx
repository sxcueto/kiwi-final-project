//add new entries to journal. will have input fields for optional title, the entry, and it will auto add the date when submitted


import React, { useState } from "react";

function JournalEntry({ addEntry }) {
  const [entryName, setEntryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    addEntry(entryName);

    setEntryName(""); // Reset input field after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={entryName}
        onChange={(e) => setEntryName(e.target.value)}
        placeholder="Enter item name"
      />
      <button type="submit">Add Item</button>
    </form>
  );
}

export default JournalEntry;