import dollarIcon from "../assets/images/icon-dollar.svg";
import personIcon from "../assets/images/icon-person.svg";

const Form = ({
  handleBillAmtInput,
  handleSelectedTip,
  handleNumPeopleInput,
  billAmt,
  billAmtError,
  numPeople,
}) => {
  return (
    <div className="form">
      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="bill">
            Bill
          </label>
          <p className="error">{billAmtError && "Please enter a number."}</p>
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            className="number-input"
            id="bill"
            onInput={handleBillAmtInput}
            value={billAmt}
            placeholder="0"
          />
          <img src={dollarIcon} aria-label="true" className="icon" />
        </div>
      </div>

      <div className="tip-section">
        <p className="label">Select Tip %</p>
        <div className="tip-amount-wrapper">
          <div className="tip-amount">
            <input
              type="radio"
              onChange={handleSelectedTip}
              name="tip"
              value="0.05"
            />
            <div className="tip-btn">5%</div>
          </div>
          <div className="tip-amount">
            <input
              type="radio"
              onChange={handleSelectedTip}
              name="tip"
              value="0.1"
            />
            <div className="tip-btn">10%</div>
          </div>
          <div className="tip-amount">
            <input
              type="radio"
              onChange={handleSelectedTip}
              name="tip"
              value="0.15"
            />
            <div className="tip-btn">15%</div>
          </div>
          <div className="tip-amount">
            <input
              type="radio"
              onChange={handleSelectedTip}
              name="tip"
              value="0.25"
            />
            <div className="tip-btn">25%</div>
          </div>
          <div className="tip-amount">
            <input
              type="radio"
              onChange={handleSelectedTip}
              name="tip"
              value="0.5"
            />
            <div className="tip-btn">50%</div>
          </div>

          <input
            type="text"
            className="tip-custom number-input"
            placeholder="Custom"
          />
        </div>
      </div>

      <div className="label-group">
        <div className="label-wrapper">
          <label className="label" htmlFor="num-pepople">
            Number of people
          </label>
          <p className="error">{billAmtError && "Please enter a number."}</p>
        </div>
        <div className="input-wrapper">
          <input
            type="text"
            className="number-input"
            id="people"
            placeholder="0"
            onInput={handleNumPeopleInput}
            value={numPeople}
          />
          <img src={personIcon} aria-label="true" className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Form;
