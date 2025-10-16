
//each entry will display an optional title, the entry, and the date it was created/modified
//when you click the entry it will give you the option to edit(then update or cancel) (optional:and delete the post)

function JournalList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default JournalList;