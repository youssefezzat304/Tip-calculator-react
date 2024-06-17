import dollarIcon from "../assets/images/icon-dollar.svg";
import personIcon from "../assets/images/icon-person.svg";

const Form = ({
  bill,
  setBill,
  people,
  setPeople,
  tip,
  setTip
}) => {

  const handleSelectedTip = (e) => {
    setTip(+e.target.value)
  }

  return (
    <div className="form">
      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="bill">
            Bill
          </label>
        </div>
        <div className="input-wrapper">
          <input
            type="number"
            className="number-input"
            id="bill"
            onInput={(e) => setBill(+e.target.value)}
            placeholder="0"
            value={bill}
          />
          <img src={dollarIcon} aria-label="true" className="icon" />
        </div>
      </div>

      <div className="tip-section">
        <p className="label">Select Tip %</p>
        <div className="tip-amount-wrapper">
          <div className="tip-amount">
            <input
              className="tip-input"
              type="radio"
              onInput={handleSelectedTip}
              name="tip"
              value="5"
            />
            <label className="tip-btn">5%</label>
          </div>
          <div className="tip-amount">
            <input
              className="tip-input"
              type="radio"
              onInput={handleSelectedTip}
              name="tip"
              value="10"
            />
            <label className="tip-btn">10%</label>
          </div>
          <div className="tip-amount">
            <input
              className="tip-input"
              type="radio"
              onInput={handleSelectedTip}
              name="tip"
              value="15"
            />
            <label className="tip-btn">15%</label>
          </div>
          <div className="tip-amount">
            <input
              className="tip-input"
              type="radio"
              onInput={handleSelectedTip}
              name="tip"
              value="25"
            />
            <label className="tip-btn">25%</label>
          </div>
          <div className="tip-amount ">
            <input
              className="tip-input"
              type="radio"
              onInput={handleSelectedTip}
              name="tip"
              value="50"
            />
            <label className="tip-btn">50%</label>
          </div>

          <input
            type="number"
            className="tip-custom number-input"
            placeholder="Custom"
            name="tip"
            onInput={handleSelectedTip}
          />
        </div>
      </div>

      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="num-pepople">
            Number of people
          </label>
          <p className="error">{people === 0? "Can't be zero." : ""}</p>
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            className="number-input"
            id="people"
            placeholder="0"
            onInput={(e) => setPeople(+e.target.value)}
            value={people}
          />
          <img src={personIcon} aria-label="true" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Form;
