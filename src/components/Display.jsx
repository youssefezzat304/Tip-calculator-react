const Display = ({ tipAmount, totalPerPerson, handleResetBtn }) => {
  const displayInfo = (amt) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "USD",
    }).format(amt);

  return (
    <div>
      <div className="display">
        <div className="display-grp">
          <div className="display-row">
            <div className="display-label">
              <p className="header">Tip-amount</p>
              <p className="unit">/ person</p>
            </div>
            <p className="display-amt">{displayInfo(tipAmount)}</p>
          </div>
          <div className="display-row">
            <div className="display-label">
              <p className="header">Total</p>
              <p className="unit">/ person</p>
            </div>
            <p className="display-amt">{displayInfo(totalPerPerson)}</p>
          </div>
        </div>
        {totalPerPerson ? (
          <button className="btn" onClick={handleResetBtn}>
            RESET
          </button>
        ) : (
          <button className="btn" disabled>
            RESET
          </button>
        )}
      </div>
    </div>
  );
};

export default Display;
