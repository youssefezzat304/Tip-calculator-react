

const Display = () => {
  return (
    <div>
      <div className="display-row">
        <div className="display-label">
          <p className="header">Tip-amount</p>
          <p className="unit">/ person</p>
        </div>
        <div className="display-amt">
          <p className="value">$0.00</p>
        </div>
        <div className="display-label">
          <p className="header">Total</p>
          <p className="unit">/ person</p>
        </div>
        <div className="display-amt">
          <p className="value">$0.00</p>
        </div>
      </div>
      <button className="btn" >Reset</button>
    </div>
  );
}

export default Display