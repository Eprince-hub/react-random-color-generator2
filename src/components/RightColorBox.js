function RightColorBox(props) {
  return (
    <div
      className="rightColorBox"
      style={{ backgroundColor: props.rightBoxBackground }}
    >
      {props.children}
    </div>
  );
}

export default RightColorBox;
