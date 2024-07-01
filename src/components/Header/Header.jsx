import React, { useState } from "react";
import "../.././i18n/i18n";
import Logo from "../../assets/svg/Logo.svg";
import SearchInput from "../ui/Inputs/SearchInput/SearchInput";
import DropDown from "../ui/DropDowns/DropDown/DropDown";
import Modal from "../../Modal/Modal";
import ModalLogIn from "../../Modal/ModalLogIn";
import { useTranslation } from "react-i18next";


const Header = () => {
  const [signUpModalActive, setSignUpModalActive] = useState(false);
  const [logInModalActive, setLogInModalActive] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [enterPasswordSignUp, setEnterPasswordSignUp] = useState("");
  const [passwordLogIn, setPasswordLogIn] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const [activeName, setActiveName] = useState("EN");
  const { t, i18n } = useTranslation();

  function changeLang(lang) {
    const lowerLang = lang.toLowerCase();
    i18n.changeLanguage(lowerLang);
    setActiveName(lang);
  }

  const handleSignUp = () => {
    if (!name.trim() || !email.trim() || !passwordSignUp.trim()) {
      setErrorMessage("Please fill in all fields");
    } else {
      setSignUpModalActive(false);
      setRegistrationSuccess(true);
    }
  };

  const handleLogIn = () => {
    setLogInModalActive(true);
  };

  const [selected, setSelected] = useState("");

  return (
    <header className="header container">
      <div className="main__header">
        <div className="header__logo">
          <img src={Logo} alt="" />
        </div>
        <div className="header__input">
          <SearchInput />
        </div>
        <div className="header__dropDown">
          <DropDown selected={selected} setSelected={setSelected} />
        </div>
        <div className="translation_btn">

        <button
          className={activeName === "En" ? "active" : ""}
          onClick={(event) => changeLang(event.target.innerText)}
          >
          En
        </button>
        <button
          className={activeName === "Ru" ? "active" : ""}
          onClick={(event) => changeLang(event.target.innerText)}
          >
          Ru
        </button>
          </div>
        <div className="red__or__white__buttons">
          <div className="modal_window">
            <button className="login__button" onClick={handleLogIn}>
              {t("Log In")}
            </button>
            {!registrationSuccess && (
              <button
                onClick={() => setSignUpModalActive(true)}
                className="open_modal sign_up__button"
              >
               {t("Sign Up")} 
              </button>
            )}
            {registrationSuccess && <p>{t("Registration successful!")}</p>} {}
          </div>
          <Modal Active={signUpModalActive} setActive={setSignUpModalActive}>
            <div className="modal_inputs">
              <input
                type="text"
                placeholder={t("Name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder={t("Email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder={t("Password")}
                value={passwordSignUp}
                onChange={(e) => setPasswordSignUp(e.target.value)}
              />
              <input
                type="password"
                placeholder={t("Confirm the password")}
                value={enterPasswordSignUp}
                onChange={(e) => setEnterPasswordSignUp(e.target.value)}
              />
            </div>
            <div className="sign_up_modal_btn">
              <button onClick={handleSignUp} className="modal_sign_up">
                {t("Sign Up")}
              </button>
            </div>
            <div className="error_message">
              {errorMessage && <p>{t(errorMessage)}</p>}
            </div>
          </Modal>
          <ModalLogIn Active={logInModalActive} setActive={setLogInModalActive}>
            <div className="modal_inputs">
              <input
                type="email"
                placeholder={t("Email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder={t("Password")}
                value={passwordLogIn}
                onChange={(e) => setPasswordLogIn(e.target.value)}
              />
            </div>
            <div className="sign_up_modal_btn">
              <button onClick={handleSignUp} className="modal_sign_up">
                {t("Log In")}
              </button>
            </div>
            <div className="error_message">
              {errorMessage && <p>{t(errorMessage)}</p>}
            </div>
          </ModalLogIn>
        </div>
      </div>
      <div className="main_modal_div"></div>
    </header>
  );
};

export default Header;
