const IsOddOrEven = (props) => {
  if (props.count === 0) {
    return <p className="teal">{props.count} is ZERO</p>;
  } else if (props.count % 2 === 0) {
    return <p className="even">{props.count} is even</p>;
  } else {
    return <p className="odd">{props.count} is odd</p>;
  }
}
const IsOddOrEvenCard = (props) => {
  if (props.pickedValue === null) {
    return <p className="teal">select a card</p>;
  } else if (props.pickedValue % 2 === 0) {
    return <p className="even">{props.pickedValue} is even</p>;
  } else {
    return <p className="odd">{props.pickedValue} is odd</p>;
  }
};

export  {IsOddOrEven, IsOddOrEvenCard};
