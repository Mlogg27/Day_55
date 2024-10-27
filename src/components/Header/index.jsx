import reactLogo from "../../assets/react.svg"
import SearchIcon from '@mui/icons-material/Search';
import "./style.css"
import { useNavigate } from "react-router-dom";

export default function(){
    const navigate = useNavigate();
    return (
        <>
            <div className="fixed top-0 h-[45px] bg-[#32908F] flex items-center justify-between w-[100vw]">
                <a onClick={()=> navigate("/")} className="mx-[30px]"><img src={reactLogo}/></a>
                <nav className="flex gap-x-[15px]">
                    <a className="nav-item font-medium" onClick={()=> navigate("/list")}>Jobs List</a>
                    <a className="nav-item font-medium" onClick={()=> navigate("/update")}>Create/Update Jobs</a>
                </nav>
                <span onClick={()=> navigate("/search")} className="mx-[30px]"><SearchIcon/></span>
            </div>
        </>
    )
}