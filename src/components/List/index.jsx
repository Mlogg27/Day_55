import { useDispatch, useSelector } from 'react-redux';
import jobsThunk from './../../Store/thunkFunction/jobsThunk';
import { useEffect } from 'react';
import { getJobs } from '../../Store/selector.js';
import { Button } from '@mui/material';
import { deleteJobToAPI } from '../../plugin/axios.js';
import jobsReducer from '../../Store/reducer/jobsReducer.js';
import { useNavigate } from 'react-router-dom';
import inputtingJob from '../../Store/reducer/inputtingJobReducer.js';

export default function (){
    const dispatch = useDispatch();
    const jobs = useSelector(getJobs)

    
    useEffect(()=>{
        dispatch(jobsThunk());
    }, [])
    
    const navigate= useNavigate();

    console.log(jobs)
    const priorityColor = (priority)=>{
        switch(priority){
            case "LOW": return "#caf0f8";
            case "MEDIUM": return "#90e0ef";
            case "HIGH": return "#00b4d8";
            default: return "#caf0f8";
        }
    }
    const onDelete = async (job, index)=>{
        if(confirm(`Bạn chắc chắn muốn xóa ${job.name} có số thứ tự ${index+1}`)){
            const status = await deleteJobToAPI(job);
            if(status === 200){
                alert(`Xóa công việc ${job.name} số thứ tự ${index+1} thành công!`);
                dispatch(jobsReducer.actions.delete(job));
            }
        }
    }

    const onEdit= async(job)=>{
        navigate("/update");
        dispatch(inputtingJob.actions.input({ name: 'name', value: job.name })); 
        dispatch(inputtingJob.actions.input({ name: 'priority', value: job.priority }));     
        dispatch(inputtingJob.actions.input({ name: 'id', value: job.id }));     
    }

    return (
        <>
            <div>
                <ul className='flex gap-y-[20px] gap-x-[25px] flex-wrap justify-center items-center'>
                    {jobs.map((job, index)=>{
                        return <li className='flex flex-col gap-y-[5px] py-[5px] px-[10px] rounded-[6px] w-[300px]'  style={{ backgroundColor: priorityColor(job.priority) }}  key={index}>
                            <p>Name: {job.name}</p>
                            <p>Priority: {job.priority}</p>
                            <div className='mt-[10px] flex justify-center items-center'>
                                <Button onClick={()=>{ onEdit(job)}}>Edit</Button>
                                <Button onClick={()=>{onDelete(job, index)}}>Remove</Button>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </>
    )
}