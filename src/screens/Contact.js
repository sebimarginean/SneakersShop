import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  function sendEmail(e) {
    emailjs
      .sendForm(
        //your credentials
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [form, setForm] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);

  const nameValidation = (fieldValue) => {
    if (fieldValue.trim() === "") {
      return false;
    }
    if (/[^a-zA-Z -]/.test(fieldValue)) {
      return false;
    }
    if (fieldValue.trim().length < 3) {
      return false;
    }
    return true;
  };

  const emailValidation = (email) => {
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email
      )
    ) {
      return true;
    }
    if (email.trim() === "") {
      return false;
    }
    return false;
  };

  const messageValidation = (message) => {
    if (message.trim().length < 10) return false;
    return true;
  };

  const valid = (Event, Name, Email, Message) => {
    Event.preventDefault();
    if (
      nameValidation(Name) &&
      emailValidation(Email) &&
      messageValidation(Message)
    ) {
      sendEmail(Event);
      setSentEmail(true);
    }
  };

  return (
    <>
      <div className="foreground">
        <div className="about">
          <div>
            <h1 className="contact-h">
              Dacă te putem ajuta, trimite-ne un mesaj și îți vom răspunde în
              cel mai scurt timp posibil!
            </h1>
          </div>
          <div>
            <div className="send-message">
              <div className="all-form">
                <h2>Trimite un mesaj!</h2>
                <form
                  className="contact-form"
                  onSubmit={(event) => valid(event, userName, email, message)}
                >
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Nume complet*"
                    onChange={(event) => setUserName(event.target.value)}
                  />
                  {!nameValidation(userName) && form ? (
                    <p>Introduceti un nume valid</p>
                  ) : null}
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Adresa email*"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                  {!emailValidation(email) && form ? (
                    <p>Introduceti un email valid</p>
                  ) : null}
                  <input type="subject" name="subject" placeholder="Subiect" />
                  <textarea
                    name="message"
                    placeholder="Mesajul tau"
                    onChange={(event) => setMessage(event.target.value)}
                  />
                  {!messageValidation(message) && form ? (
                    <p>Introduceti cel putin 10 caractere</p>
                  ) : null}
                  <input
                    type="submit"
                    value="Trimite"
                    id="submit"
                    onClick={() => setForm(true)}
                  />
                  {sentEmail ? (
                    <>
                      <div className="success">
                        <div class="success-checkmark">
                          <div class="check-icon">
                            <span class="icon-line line-tip"></span>
                            <span class="icon-line line-long"></span>
                            <div class="icon-circle"></div>
                            <div class="icon-fix"></div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
