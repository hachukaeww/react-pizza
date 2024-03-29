import React from "react";
import styles from "./Search.module.scss";
import { setSearchValue} from "../../redux/slice/filter/filterSlice";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";

const Search:React.FC=()=> {
const[Value,setValue]=React.useState<string>("");

  const dispatch = useDispatch();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue("");
    inputRef.current?.focus();
  };
  const updateSearchValue= React.useCallback(
    debounce((str)=>{
    dispatch(  setSearchValue(str))
    
    },1000),
    [],
  )
  const onChangeInput=(event:React.ChangeEvent<HTMLInputElement>)=>{
    setValue(event.target.value);
    updateSearchValue(event.target.value); 
  }
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 32 32"
        id="EditableLine"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        ></circle>
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        ></line>
      </svg>
      {Value && (
        <svg
          
          onClick={onClickClear}
          className={styles.clear}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"></path>
        </svg>
      )}
      <input
      ref={inputRef}
        value={Value}
        onChange={onChangeInput}
        className={styles.input}
        placeholder="Поиск пиццы..."
      ></input>
    </div>
  );
}

export default Search;
