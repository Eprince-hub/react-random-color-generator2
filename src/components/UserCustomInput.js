// Trying to implement the custom color capability
function UserCustomInput(props) {
  return (
    <div className={props.userColorChoiceContainer}>
      <div className={props.userColorChoiceBox}>
        <h2>{props.info}</h2>

        <div className={props.colorNameWrap}>
          <label htmlFor={props.hue}>Hue:</label>
          <input name="hue" id="hue" onChange={props.onChanged} />
        </div>

        <div className={props.luminosityWrap}>
          <label htmlFor="light">Light:</label>
          <input
            type="checkbox"
            name="light"
            id="light"
            onChecked={props.lightChecked}
          />

          <label htmlFor="dark">Dark:</label>
          <input
            type="checkbox"
            name="dark"
            id="dark"
            onChecked={props.darkChecked}
          />
        </div>
      </div>
    </div>
  );
}

export default UserCustomInput;
