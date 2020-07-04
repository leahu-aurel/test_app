import { useSelector, useDispatch } from "react-redux";
import { setMode } from "../redux/actions/actionCreators";

export default () => {
  const dispatch = useDispatch();
  const checked = useSelector((state) => state.mode);

  const toggleChecked = () => {
    dispatch(setMode());
  };

  return [checked, toggleChecked];
};
