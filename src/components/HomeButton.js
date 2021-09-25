export default function HomeButton(props) {
  // state here
  return (
    <div>
      <button className="bottomButton" onClick={props.changeColor}>
        {props.name}
      </button>
    </div>
  );
}
