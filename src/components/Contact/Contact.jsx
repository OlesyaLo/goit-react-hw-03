export default function Contact({ data: { id, name, number }, deleteContact }) {
  return (
    <>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button onClick={() => deleteContact(id)}>Delete</button>
    </>
  );
}
