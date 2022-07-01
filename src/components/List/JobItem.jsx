import React from "react";
import './List.css';

export const JobItem = ({job}) => {
    return (
        <div>
            <h1>{job.title}</h1>
            <h1>{job.description}</h1>
            <h1>{job.price}</h1>
            <h1>{job.paymentMethods}</h1>
            <h1>{job.dueDate}</h1>
        </div>
    )
}