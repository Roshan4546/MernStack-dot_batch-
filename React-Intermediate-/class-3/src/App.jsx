import { useState } from "react";
import './App.css';
function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mailid: "",
    country: "India",
    city: "",
    streetaddress: "",
    state: "",
    pin: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotification: ""
  });

  function changeHandler(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log("Form Data:", formData);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          placeholder="Roshan"
          value={formData.firstName}
          onChange={changeHandler}
        />
        <br />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          placeholder="Patra"
          value={formData.lastName}
          onChange={changeHandler}
        />
        <br />

        <label htmlFor="mailid">Email ID</label>
        <input
          type="email"
          name="mailid"
          id="mailid"
          placeholder="roshanpatra275@gmail.com"
          value={formData.mailid}
          onChange={changeHandler}
        />
        <br />

        <label htmlFor="country">Country</label>
        <select
          name="country"
          id="country"
          value={formData.country}
          onChange={changeHandler}
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="UAE">UAE</option>
        </select>
        <br />

        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Chandpur"
          value={formData.city}
          onChange={changeHandler}
        />
        <br />

        <label htmlFor="streetaddress">Street Address</label>
        <input
          type="text"
          name="streetaddress"
          id="streetaddress"
          placeholder="Main road, Chandpur"
          value={formData.streetaddress}
          onChange={changeHandler}
        />
        <br />

        <label htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          id="state"
          placeholder="Odisha"
          value={formData.state}
          onChange={changeHandler}
        />
        <br />

        <label htmlFor="pin">Pin code</label>
        <input
          type="text"
          name="pin"
          id="pin"
          placeholder="752024"
          value={formData.pin}
          onChange={changeHandler}
        />
        <br />

        <fieldset>
          <legend>By Email</legend>

          <div>
            <label>
              <input
                type="checkbox"
                name="comments"
                checked={formData.comments}
                onChange={changeHandler}
              />
              Comments
            </label>
            <p>Get notified when someones posts a comments on a posting.</p>
          </div>
          <br />

          <div><label>
            <input
              type="checkbox"
              name="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            />
            Candidates
          </label>
            <p>Get notified when a candidate applies for a job.</p>
          </div>
          <br />

          <div>
            <label>
              <input
                type="checkbox"
                name="offers"
                checked={formData.offers}
                onChange={changeHandler}
              />
              Offers
            </label>
            <p>Get notified when a candidate accepts and rejects an offer.</p>
          </div>
        </fieldset>

        <fieldset>
          <legend>Push Notification</legend>
          <p>These are delivered via SMS to your mobile phone.</p>

          <label htmlFor="pushEverything">
            <input
              type="radio"
              value="Everything"
              id="pushEverything"
              name="pushNotification"
              checked={formData.pushNotification === "Everything"}
              onChange={changeHandler}
            />
            Everything
          </label>
          <br />

          <label htmlFor="pushEmail">
            <input
              type="radio"
              value="Same as email"
              id="pushEmail"
              name="pushNotification"
              checked={formData.pushNotification === "Same as email"}
              onChange={changeHandler}
            />
            Same as email
          </label>
          <br />

          <label htmlFor="pushNothing">
            <input
              type="radio"
              value="No push notification"
              id="pushNothing"
              name="pushNotification"
              checked={formData.pushNotification === "No push notification"}
              onChange={changeHandler}
            />
            No push notification
          </label>
        </fieldset>

        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
