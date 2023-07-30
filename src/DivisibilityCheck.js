const DivisibilityCheck2 = (props) => {
  if (props.count % 2 === 0 && props.count !== 0) {
    return <p className="oddoreven">{props.count} is divisible by 2</p>;
  }
};

const DivisibilityCheck3 = (props) => {
  if (props.count % 3 === 0 && props.count !== 0) {
    return <p className="oddoreven">{props.count} is divisible by 3</p>;
  }
};

const DivisibilityCheck4 = (props) => {
  if (props.count % 4 === 0 && props.count !== 0) {
    return <p className="oddoreven">{props.count} is divisible by 4</p>;
  }
};

const DivisibilityCheck5 = (props) => {
  if (props.count % 5 === 0 && props.count !== 0) {
    return <p className="oddoreven">{props.count} is divisible by 5</p>;
  }
};
const DivisibilityCheck6 = (props) => {
  if (props.count % 6 === 0 && props.count !== 0) {
    return <p className="oddoreven">{props.count} is divisible by 6</p>;
  }
};
const DivisibilityCheck7 = (props) => {
  if (props.count % 7 === 0 && props.count !== 0) {
    return <p className="oddoreven">{props.count} is divisible by 7</p>;
  }
};
const DivisibilityCheck8 = (props) => {
  if (props.count % 8 === 0 && props.count !== 0) {
    return <p className="oddoreven">{props.count} is divisible by 8</p>;
  }
};
const DivisibilityCheck9 = (props) => {
  if (props.count % 9 === 0 && props.count !== 0) {
    return <p className="oddoreven">{props.count} is divisible by 9</p>;
  }
};

export {
  DivisibilityCheck2,
  DivisibilityCheck3,
  DivisibilityCheck4,
  DivisibilityCheck5,
  DivisibilityCheck6,
  DivisibilityCheck7,
  DivisibilityCheck8,
  DivisibilityCheck9,
};
