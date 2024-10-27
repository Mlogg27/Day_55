import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { searchStrReducer } from "../../Store/reducer";
import searchStr from './../../Store/reducer/searchStr';
import { getSearchStr } from "../../Store/selector";

export default function (){
    const dispatch= useDispatch();
    const searchStr= useSelector(getSearchStr)
    return (
        <>
            <div className="w-[500px] h-[60px] rounded-[6px] mx-[auto] flex justify-center items-center gap-x-[10px] bg-[#bde0fe]">
                <input value={searchStr} onChange={(e)=> dispatch(searchStrReducer.actions.input(e.target.value))} className='outline-none py-[5px] px-[50px] rounded-[6px]' type="text" placeholder="What do you wanna find?"/>
            </div>
        </>
    )
}