import React, { useState } from "react";
import "./Left_style.css";

function Left_side() {
  let [cardname, setcardname] = useState("JANE APPLESEED");
  let [cardexpiry, setcardexpiry] = useState("00/00");
  let [cvv, setcvv] = useState("000");
  let [firstnumber, setfirstnumber] = useState("0000");
  let [secondnumber, setsecondnumber] = useState("0000");
  let [thirdnumber, setthirdnumber] = useState("0000");
  let [fourthnumber, setfourthnumber] = useState("0000");
  let [error_name, seterrorname] = useState("");
  let [error_number, seterrornumber] = useState("");
  let [error_cvc, seterrorcvc] = useState("");
  let [error_my, seterrormy] = useState("");
  document.title = "Credit Card Generator";

  function updatecarddetails(e) {
    e.preventDefault();
    let card_name_form = document.getElementById("og-card-name").value;
    let card_number_form = document.getElementById("card-number").value;
    let cvv_form = document.getElementsByClassName("medium-input")[0].value;
    let expiry_month_form = document.getElementById("month").value;
    let expiry_year_form = document.getElementById("year").value;
    if (card_name_form === "") {
      seterrorname("Cardholder name required");
      seterrorcvc("");
      seterrornumber("");
      seterrormy("");
    } else if (card_number_form === "") {
      seterrornumber("Card number required");
      seterrorname("");
      seterrorcvc("");
      seterrormy("");
    } else if (card_number_form.length > 16) {
      seterrornumber("Number of Digit not greater than 16");
      seterrorname("");
      seterrorcvc("");
      seterrormy("");
    } else if (card_number_form.length < 16) {
      seterrornumber("Number of Digit not smaller than 16");
      seterrorname("");
      seterrorcvc("");
      seterrormy("");
    } else if (cvv_form.length < 3) {
      seterrorcvc("Cvv not smaller than 3");
      seterrorname("");
      seterrornumber("");
      seterrormy("");
    } else if (cvv_form.length > 3) {
      seterrorcvc("Cvv not greater than 3");
      seterrorname("");
      seterrornumber("");
      seterrormy("");
    } else if (expiry_month_form === "" || expiry_year_form === "") {
      seterrormy("Fill both MM/YY");
      seterrorname("");
      seterrornumber("");
      seterrorcvc("");
    } else {
      seterrorname("");
      seterrorcvc("");
      seterrornumber("");
      setfirstnumber(card_number_form.slice(0, 4));
      setsecondnumber(card_number_form.slice(4, 8));
      setthirdnumber(card_number_form.slice(8, 12));
      setfourthnumber(card_number_form.slice(12, 16));
      setcvv(cvv_form);
      setcardname(card_name_form.toUpperCase());
      setcardexpiry(expiry_month_form + "/" + expiry_year_form);

      let form = document.getElementById("card-form");
      form.reset();
    }
  }

  return (
    <div className="main-container">
      <div className="left-container">
        <div className="upper-box">
          <div className="circle"></div>
          <div className="circle2"></div>
          <div className="card-number">
            <span id="first">{firstnumber}</span>{" "}
            <span id="second">{secondnumber}</span>
            <span id="third">{thirdnumber}</span>
            <span id="fourth">{fourthnumber}</span>
          </div>
          <div className="name-exp">
            <div id="card-name">{cardname}</div>
            <div id="card-expiry">{cardexpiry}</div>
          </div>
        </div>
        <div className="lower-box">
          <div className="stripe"></div>
          <div className="second-stripe">
            <div id="cvv">{cvv}</div>
          </div>
          <div className="small-stripes">
            <div className="st"></div>
            <div className="sst"></div>
            <div className="sxt"></div>
            <div className="sxt"></div>
            <div className="sst"></div>
            <div className="st"></div>
            <div className="sxt"></div>
            <div className="sst"></div>
          </div>
        </div>
      </div>
      <div className="right-container">
        <form id="card-form" onSubmit={updatecarddetails}>
          <label>CARDHOLDER NAME</label>
          <br />
          <input
            id="og-card-name"
            type="text"
            placeholder="e.g. Jane Appleseed"
          ></input>
          <br />
          <div id="error-name">{error_name}</div>
          <br />
          <label>CARD NUMBER</label>
          <br />
          <input
            id="card-number"
            type="number"
            placeholder="e.g. 1234 5678 9123 0000"
          ></input>
          <br />
          <div id="error-name">{error_number}</div>
          <br />
          <div className="horizontal-input">
            <div>
              <label>EXP.DATE (MM/YY)</label>
              <br />
              <input
                id="month"
                className="small-input"
                type="number"
                placeholder="MM"
                min={1}
                max={12}
              ></input>
              <input
                id="year"
                className="small-input"
                type="number"
                placeholder="YY"
                min={25}
                max={40}
              ></input>
              <br />
              <div id="error-name">{error_my}</div>
            </div>
            <div>
              <label>CVC</label>
              <br />
              <input
                className="medium-input"
                type="number"
                placeholder="e.g. 123"
              ></input>
              <br />
              <div id="error-name">{error_cvc}</div>
              <br />
            </div>
          </div>
          <button type="submit">Confirm</button>
        </form>
      </div>
    </div>
  );
}

export default Left_side;
