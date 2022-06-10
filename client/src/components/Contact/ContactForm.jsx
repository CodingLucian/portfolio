import React, { useState }from 'react';
import styles from './ContactForm.module.css';
import emailjs from 'emailjs-com';


export function validate(input) {
  /////// VALIDACiONES /////////////////////////////////
  let errores = {};

  //   Name
  if (!input.name) {
    errores.name = 'Please enter a name';
  } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(input.name)) {
    errores.name = 'The name can only contain letters and spaces';
  }

    //   message
    if (!input.message || !input.message.trim()) {
      errores.message = 'Please enter a message';
    }

  // email validation:
  if (!input.email) {
    errores.email = 'Please enter a email';
  } else if (
    !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(input.email)
  ) {
    errores.email = 'The entered value must be in the format name@example.com';
  }

  return errores;
}

export default function ContactForm() {

  const [error, setError] = useState({});
  const [input, setInput] = useState({});

  let handleChange = (e) => {
    e.preventDefault();
    setInput({ ...input, [e.target.name]: e.target.value });
    let objError = validate(
      { ...input, [e.target.name]: e.target.value }
    );
    setError(objError);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('gmail', 'template_52bhf99', e.target, 'qqXE4iMKXFOqaFKtW')
    .then((result) => {
      setInput({});
      e.target.reset();
    }, (error) => {
        console.log(error.text);
    });
  };


  return (
    <div className={styles.mainContainer}>
      <div className={styles.formulario}>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            {/* nombre */}
            <label>Your name: </label>
            <input
              type={'text'}
              name={'name'}
              onChange={(e) => handleChange(e)}
              placeholder="Your name..."
            />
            {error.name && <p className={styles.error}>{error.name}</p>}
          </div>
          <div>
            {' '}
            {/* Email */}
            <label htmlFor="email">Your Email: </label>
            <input
              type="text"
              id="email"
              name="email"
              onChange={(e) => handleChange(e)}
              placeholder="email@mail.com..."
            />
            {error.email && <p className={styles.error}>{error.email}</p>}
          </div>
          <div>
            {/* message */}
            <label>Your message: </label>
            <textarea
              className={styles.message}
              wrap="soft|hard"
              name={'message'}
              onChange={(e) => handleChange(e)}
              placeholder="message..."
            />
            {error.message && (
              <p className={styles.error}>{error.message}</p>
            )}
          </div>
          {
          error.name ||
          error.email ||
          error.message ? 
          null : (
            <button className={styles.btn} type="submit">send</button>
          )}
          </form>
      </div>
    </div>
  )
}
