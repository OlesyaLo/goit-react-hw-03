import css from './Contact.module.css';

export default function Contact({ data: { id, name, number }, deleteContact }) {
  return (
    <div className={css.containerContact}>
      <div className={css.containerUserData}>
        <p className={css.text}>{name}</p>
        <p className={css.text}>{number}</p>
      </div>
      <button className={css.deleteBtn} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  );
}
