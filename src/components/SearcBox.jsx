import { useDispatch } from "react-redux";
import { changeFilter } from "../redux/filtersSlice";

export default function SearchBox() {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(changeFilter(event.target.value)); 
  };

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
}
