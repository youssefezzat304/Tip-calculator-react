import { useEffect, useState } from "react";
import logo from "./assets/images/logo.svg";

// Components
import Display from "./components/Display";
import Form from "./components/Form";

function App() {
  const [bill, setBill] = useState(""),
    [tip, setTip] = useState(""),
    [tipAmount, setTipAmount] = useState(""),
    [totalPerPerson, setTotalPerPerson] = useState(""),
    [people, setPeople] = useState("");

  useEffect(() => {
    if (bill > 0 && people > 0 && tip > 0){
      setTipAmount(bill * (tip/100) / people);
      setTotalPerPerson((bill / people) + +tipAmount)
    }
  }, [bill, people, tip, tipAmount, people]);

  function clearStyling() {
    const tip_percentages = document.querySelectorAll("input:radio");
    tip_percentages.forceUpdate();
  }

  const handleResetBtn = (e) => {
    setBill("");
    setPeople("");
    setTip("")
    setTipAmount(0);
    setTotalPerPerson(0);
    clearStyling()
  }

  return (
    <>
      <div className="app">
        <img src={logo} alt="Logo" />
        <div className="container">
          <Form
            bill={bill}
            setBill={setBill}
            tip={tip}
            setTip={setTip}
            people={people}
            setPeople={setPeople}
          />
          <Display
            totalPerPerson={totalPerPerson}
            tipAmount={tipAmount}
            handleResetBtn={handleResetBtn}
          />
        </div>
      </div>
    </>
  );
}

export default App;
