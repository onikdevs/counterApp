export function RandomCard({ cardvalues, setPickedValue, pickedValue }) {
  return (
    <div className="cardvalue_main">
      {cardvalues.map((cardvalue, index) => {
        return (
          <div
            className="cardvalue"
            key={index}
            onClick={() => setPickedValue(cardvalue)}
            // style={
            //   pickedValue === null
            //     ? { background: "teal" }
            //     : pickedValue % 2 === 0
            //     ? { background: "green" }
            //     : { background: "red" }
            // }
          >
            <span
              className={
                pickedValue === null
                  ? "teal"
                  : pickedValue % 2 === 0
                  ? "even"
                  : "odd"
              }
            >
              {cardvalue}
            </span>
          </div>
        );
      })}
    </div>
  );
}
