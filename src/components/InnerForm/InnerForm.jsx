
import { Timer } from "../timer/timer";
import { Users } from "../Users/users";
import { Welcome } from "../Welcome/Welcome";

export const InnerForm = (props) => {
  return (
    <div>
      {props.startTimer === undefined && <Welcome/> }
      {props.startTimer === false && <Users/>}
      {props.startTimer === true &&  <Timer maxRange={1}/>}
    </div>
  );
};
