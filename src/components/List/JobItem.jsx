import React from "react";
import './List.css';

export const JobItem = ({job}) => {
    return (
        <div className="job-item">
            <h2 className="info-job-item">{job.title}</h2>
            <h2 className="info-job-item">{job.description}</h2>
            <h2 className="info-job-item">{job.price}</h2>
            <h2 className="info-job-item">{job.paymentMethods}</h2>
            <h2 className="info-job-item">{job.dueDate}</h2>
        </div>
    )
}