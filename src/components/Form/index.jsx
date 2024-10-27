import { Alert, Button, Snackbar } from "@mui/material";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { inputtingJob, jobsReducer } from "../../Store/reducer";
import { getInputtingJob } from "../../Store/selector.js";
import { useState } from "react";
import { postJobsToAPI, updateJobToAPI } from "../../plugin/axios.js";
import jobsThunk from "../../Store/thunkFunction/jobsThunk.js";

export default function MyForm() {
    const dispatch = useDispatch();
    const newJob = useSelector(getInputtingJob);
    const [isFilledOut, setIsFilledOut] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const onInput = (e) => {
        const { name, value } = e.target;
        if (value !== "") {
            dispatch(inputtingJob.actions.input({ name, value }));
        }
    };

    const resetForm = () => {
        dispatch(inputtingJob.actions.input({ name: 'name', value: '' })); 
        dispatch(inputtingJob.actions.input({ name: 'priority', value: '' })); 

    };

    const onSave = async() => {
        if(newJob.id){
            const status = await updateJobToAPI(newJob);
           if(status ===200){
            setIsSuccess(true);
           }
        } else{
            if (!newJob.name || !newJob.priority) {
                setIsFilledOut(true);
                return;
            } else{
                const status = await postJobsToAPI(newJob);
    
                if (status === 201) {
                    setIsSuccess(true); 
                    resetForm(); 
                }
            }
        }
    };

    const handleClose = () => {
        setIsFilledOut(false);
    };

    const handleSuccessClose = () => {
        setIsSuccess(false); 
    };

    return (
        <>
            <div className="flex justify-center items-center gap-x-[20px]">
                <div className="mt-[40px] flex flex-col w-[80%] form-box justify-center items-center gap-y-[20px]">
                    <input 
                        onChange={onInput} 
                        name="name" 
                        type="text" 
                        className="input-name" 
                        placeholder="name" 
                        value={newJob.name || ""} 
                    />
                    <select 
                        onChange={onInput} 
                        name="priority" 
                        className="w-[100%] priority-select" 
                        value={newJob.priority || ""} 
                    >
                        <option value="">Choose priority for your job</option>
                        <option value="LOW">LOW</option>
                        <option value="MEDIUM">MEDIUM</option>
                        <option value="HIGH">HIGH</option>
                    </select>
                </div>
                <Button onClick={onSave}>Save</Button>
            </div>

            <Snackbar
                open={isFilledOut}
                autoHideDuration={1200}
                onClose={handleClose}
                className="fixed top-[-500px]"
            >
                <Alert onClose={handleClose} severity="warning" sx={{ width: '100%' }}>
                    Please fill out all fields.
                </Alert>
            </Snackbar>

            <Snackbar
                open={isSuccess}
                autoHideDuration={1200}
                onClose={handleSuccessClose}
                className="fixed top-[-500px]"
            >
                <Alert onClose={handleSuccessClose} severity="success" sx={{ width: '100%' }}>
                    Job update successfully!
                </Alert>
            </Snackbar>
        </>
    );
}
