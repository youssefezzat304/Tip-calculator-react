import { useState } from "react";
import logo from "./assets/images/logo.svg";

// Components
import Display from "./components/Display";
import Form from "./components/Form";

function App() {
  const [billAmt, setBillAmt] = useState(""),
    [billAmtError, setBillAmtError] = useState(false),
    [isTipSelected, setIsTipSelected] = useState(false),
    [selectedTip, setSelectedTip] = useState(0),
    [numPeople, setNumPeople] = useState("");

  function handleBillAmtInput(e) {
    const input = e.target.value;
    // const pattern = /^[0-9]*$/;
    // if (pattern.test(input)) {
    //   setBillAmtError(false)
    //   setBillAmt(input);
    // } else {
    //   setBillAmtError(true);
    // }
    setBillAmt(input);
  }
  function handleSelectedTip(e) {
    setSelectedTip(e.target.value);
  }
  function handleNumPeopleInput(e) {
    setNumPeople(e.target.value);
  }

  return (
    <>
      <div className="app">
        <img src={logo} alt="Logo" />
        <div className="container">
          <Form
            handleBillAmtInput={handleBillAmtInput}
            handleSelectedTip={handleSelectedTip}
            handleNumPeopleInput={handleNumPeopleInput}
            billAmtError={billAmtError}
            billAmt={billAmt}
            numPeople={numPeople}
          />
          <Display />
        </div>
      </div>
    </>
  );
}

export default App;
