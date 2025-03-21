import {useEffect, useState} from "react";

export default function useDebounce(value, delay=500) {
 const [debouncedvalue, setDebouncedValue] = useState(value);
 useEffect(() => {
  const timer = setTimeout(() => {
   setDebouncedValue(value)
  },delay);
  return () => clearTimeout(timer)
 },[value,delay])
 return debouncedvalue;
}