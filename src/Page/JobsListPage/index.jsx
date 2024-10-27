import { useSelector } from "react-redux";
import { Header } from "../../components"
import List from "../../components/List"
import jobsThunk from "../../Store/thunkFunction/jobsThunk";

export default function(){
    return(
        <>  
            <Header/>
            <div className="mt-[55px]">
                <h1 className=" text-center font-semibold text-[50px]">Job List</h1>
                <List/>
            </div>
        </>
    )
}