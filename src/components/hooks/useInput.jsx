import { useState } from "react"
const useInput=(validatevalue)=>{
const[enteredValue,SetenteredValue]=useState("");
const[Istouched,setIstouched]=useState(false);
const ValueIsvalid = validatevalue(enteredValue)
const hasError=!ValueIsvalid && Istouched;
function Changehandler(event){
SetenteredValue(event.target.value)
}
function Blurhandler(){
    setIstouched(true);
}
function reset(){
    setIstouched(false)
    SetenteredValue("")
}
return({
value:enteredValue,
ValueIsvalid,
hasError,
Changehandler,
Blurhandler,
reset
})
}
export default useInput;
