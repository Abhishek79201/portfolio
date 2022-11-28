import "./contact.scss";
import React from "react";
import { contact } from "../../Data";

const Contact = () => {
  return (
    <>
      <div className="containercontact">
        <div className="container1">
          <div className="svgsection ">
            <div className="imagesection">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 504 292"
                className="contactbg"
              >
                <g stroke="#E8E8E8" clip-path="url(#a)" opacity=".4">
                  <path d="M61.8438 50.4515h.0352c7.7284-3.8591 16.1096-5.9657 24.8083-5.9657 40.4947 0 73.3137 45.4419 73.3137 101.5402 0 56.099-32.819 101.523-73.3137 101.523-8.6811 0-17.027-2.071-24.7377-5.912-.0353 0-.0706 0-.0882-.053" />
                  <path d="M59.7266 51.8855c.8822-.1239 1.7997-.177 2.7172-.177 25.4965 0 46.1762 42.1847 46.1762 94.2825 0 52.098-20.6797 94.283-46.1762 94.283-.9175 0-1.8174-.053-2.7172-.177" />
                  <path d="M74.4258 42.6447h.0353c10.9749-4.6911 22.9379-7.258 35.4299-7.258 54.804 0 99.234 49.5134 99.234 110.6393 0 61.126-44.447 110.622-99.234 110.622-12.4567 0-24.3315-2.549-35.3064-7.187-.0177 0-.0353-.035-.0706-.035" />
                  <path d="M90.0059 34.4131c13.4271-4.6911 27.9311-7.2402 43.0701-7.2402 69.114 0 125.153 53.1778 125.153 118.8361 0 65.658-56.039 118.835-125.153 118.835-15.068 0-29.501-2.513-42.8937-7.151-.0176 0-.0706 0-.0882-.036" />
                  <path d="M100.609 29.4921c17.204-5.647 35.978-8.7626 55.651-8.7626 83.442 0 151.073 56.0456 151.073 125.2795 0 69.234-67.631 125.262-151.073 125.262-19.673 0-38.447-3.116-55.651-8.763h-.017" />
                  <path d="M113.084 24.394h.018c20.485-6.1427 42.894-9.5239 66.361-9.5239 97.733 0 176.993 58.6656 176.993 131.1389 0 72.473-79.26 131.139-176.993 131.139-23.414 0-45.77-3.364-66.22-9.489" />
                  <path d="M136.252 16.4983h.035c20.786-4.8504 43.124-7.48805 66.362-7.48805 112.06 0 202.895 61.30315 202.895 136.99875 0 75.695-90.835 136.98-202.895 136.98-23.238 0-45.576-2.637-66.362-7.488h-.035" />
                  <path d="M164.43 282.706h.035c19.515 3.346 40.124 5.152 61.368 5.152 126.37 0 228.815-63.499 228.815-141.867 0-78.3682-102.427-141.86649-228.798-141.86649-21.261 0-41.852 1.80564-61.367 5.15138h-.036" />
                  <path d="M251.999 291.77c139.049 0 251.771-65.268 251.771-145.779C503.77 65.4798 391.048.212402 251.999.212402 112.95.212402.228516 65.4798.228516 145.991.228516 226.502 112.95 291.77 251.999 291.77Z" />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h504v292H0z" />
                  </clipPath>
                </defs>
              </svg>
              <div className="tellus">
                TELL US <br /> EVERYTHING
              </div>
            </div>
            <div className="ortag">OR</div>
            <div className="emailcon">
              Tell us by{" "}
              <a href={`mailto:${contact.email}`} target="blank">
                e-mail
              </a>
            </div>
          </div>
          <div className="contactsection">
            <form action="">
              <div class="inputbox">
                <input
                  type="text"
                  name="nimi"
                  id="contact-name"
                  placeholder="NAME"
                />
                {/* <label for="contact-name" class="">
                  NAME
                </label> */}
              </div>
              <div class="inputbox">
                <input
                  type="text"
                  name="question"
                  id="contact-question"
                  placeholder="COMPANY"
                />
<<<<<<< HEAD:src/assets/pages/Contact/Contact.jsx
                <label for="contact-email">Company</label>
=======
                {/* <label for="contact-question">COMPANY</label> */}
>>>>>>> be5c76fb5582e7eee48b2e8f8c6f3147a0413ae0:src/assets/pages/Contact/Contact.js
              </div>
              <div class="inputbox">
                <input
                  type="text"
                  name="email"
                  id="contact-email"
                  placeholder="EMAIL ADDRESS"
                />
                {/* <label for="contact-email">EMAIL ADDRESS</label> */}
              </div>
              <div class="inputbox textarea">
                <textarea
                  name="question"
                  id="contact-question2"
                  cols="30"
                  rows="3"
                  placeholder="YOUR MESSAGE"
                ></textarea>
                {/* <label for="contact-question2">YOUR MESSAGE</label> */}
              </div>
              <div className="buttonbox">
                <button>SEND</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;