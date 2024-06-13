import dollarIcon from "../assets/images/icon-dollar.svg";
import personIcon from "../assets/images/icon-person.svg";

const Form = () => {
  return (
    <div className="form">
      <div className="label-group">
        <label className="label" htmlFor="bill">Bill</label>
        <input type="number" id="bill" />
        <img src={dollarIcon} aria-label="true" className="icon" />
      </div>

      <div className="tip-section">
        <p className="label">Tip-percentage</p>
        <div className="tip-amount-wrapper">
          <div className="tip-amount">
            <input type="radio" name="tip" value=".05" />
            <div className="tip-btn">5%</div>
          </div>
          <div className="tip-amount">
            <input type="radio" name="tip" value=".1" />
            <div className="tip-btn">10%</div>
          </div>
          <div className="tip-amount">
            <input type="radio" name="tip" value=".15" />
            <div className="tip-btn">15%</div>
          </div>
          <div className="tip-amount">
            <input type="radio" name="tip" value=".25" />
            <div className="tip-btn">25%</div>
          </div>
          <div className="tip-amount">
            <input type="radio" name="tip" value=".5" />
            <div className="tip-btn">50%</div>
          </div>

          <input type="number" className="tip-custom" />
        </div>
      </div>

      <div className="label-group">
        <div className="label-wrapper">
          <label htmlFor="num-pepople">Number of people</label>
          <p>Error</p>
        </div>
        <input type="number" id="num-people" />
        <img src={personIcon} aria-label="true" className="icon" />
      </div>
    </div>
  );
};

export default Form;
