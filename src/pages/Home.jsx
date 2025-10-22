import React, { useState, useEffect } from "react";
import JournalForm from "../features/JournalForm";
import JournalList from "../features/JournalList";

const Home = () => {
  const [entries, setEntries] = useState(() => {
    const saved = localStorage.getItem("journalEntries");
    return saved ? JSON.parse(saved) : [];
  });
  const [editingEntry, setEditingEntry] = useState(null);

  useEffect(() => {
    try {
      localStorage.setItem("journalEntries", JSON.stringify(entries));
    } catch (error) {
      console.error("Could not save entries to local storage: ", error);
    }
  }, [entries]);

  const addEntry = (newEntry) => {
    const entryId = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      ...newEntry,
    };
    setEntries((prev) => [...prev, entryId]);
     setEditingEntry(null);
  };
  const updateEntry = (id, updatedEntry) => {
    setEntries((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, ...updatedEntry } : entry
      )
    );
    setEditingEntry(null);
  };

const deleteEntry = (id) => {
    if (window.confirm("Are you sure you want to delete this entry?"))
    setEntries((prev) => prev.filter((entry) => entry.id !== id));
  };



  const clearEntries = () => {
    setEntries([]);
    localStorage.removeItem("journalEntries");
  };

  return (
    <div>
      <JournalForm
        addEntry={addEntry}
        editEntry={editingEntry}
        updateEntry={updateEntry}
        setEditEntry={setEditingEntry}
      />
      <JournalList
        entries={entries}
        clearEntries={clearEntries}
        setEditEntry={setEditingEntry}
        deleteEntry={deleteEntry}
      />
    </div>
  );
};

export default Home;
