import React, { useState, useEffect } from "react";
import styles from "./JournalForm.module.css";

const JournalForm = ({ addEntry, editEntry, updateEntry, setEditEntry }) => {
  const [entryTitle, setEntryTitle] = useState("");
  const [entryText, setEntryText] = useState("");

  useEffect(() => {
    if (editEntry) {
      setEntryText(editEntry.text);
      setEntryTitle(editEntry.title);
    } else {
      setEntryText("");
      setEntryTitle("");
    }
  }, [editEntry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editEntry) {
      updateEntry(editEntry.id, { title: entryTitle, text: entryText });
    } else {
      addEntry({ title: entryTitle, text: entryText });
    }
  };

    const handleCancel = () => {
    setEntryText("");
    setEntryTitle("");
    setEditEntry(null); 
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          value={entryTitle}
          onChange={(e) => setEntryTitle(e.target.value)}
          placeholder="Title"
          className={styles.input}
        />
        <textarea
          value={entryText}
          onChange={(e) => setEntryText(e.target.value)}
          placeholder="Dear diary..."
          required
          className={styles.textarea}
        />
        <button type="submit" className={styles.button}>
          {editEntry ? "Update Entry" : "Add Entry"}
        </button>
        {editEntry && ( <button type="button" className={styles.button} onClick={handleCancel}>
          Cancel
        </button>
        )}
      </form>
    </div>
  );
};

export default JournalForm;
