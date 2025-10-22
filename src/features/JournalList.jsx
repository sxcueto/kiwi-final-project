import React, { useState, useEffect } from "react";
import styles from "./JournalList.module.css";

const JournalList = ({ entries, clearEntries, setEditEntry, deleteEntry }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const loadEntries = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
    };

    loadEntries();
  }, []);

  const handleClearEntries = () => {
    if (window.confirm("Are you sure you want to clear all entries?")) {
      clearEntries();
    }
  };
  const handleEditEntry = (entry) => {
    setEditEntry(entry);
  };

  if (isLoading) {
    return <p>Loading journal entries...</p>;
  }
  return (
    <div>
      {entries.length > 0 && <h2>Journal Entries</h2>}
      <ul className={styles.entries}>
        {entries.length > 0 ? (
          entries.map((entry) => (
            <li key={entry.id} className={styles.entry}>
             <h3 className={styles.title}>{entry.title}</h3> 
              <span className={styles.date}>{entry.date}</span>
              <p>{entry.text}</p>
              <button
                onClick={() => handleEditEntry(entry)}
                className={styles.button}
              >
                Edit
              </button>
              <button
                onClick={() => deleteEntry(entry.id)}
                className={styles.button}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <li className={styles.emptyMessage}>No journal entries found.</li>
        )}
      </ul>
      {entries.length > 0 && (
        <button onClick={handleClearEntries} className={styles.button}>
          Clear All Entries
        </button>
      )}
    </div>
  );
};

export default JournalList;
