import React from 'react';
import './Qualification.css'
 
const Qualification = (props) =>{
    return(
        <React.Fragment>
            <h1>Qualification</h1>
            <table className="qualification">
                <thead className="qualification_header">
                    <tr>
                        <th>College</th>
                        <th>Course</th>
                        <th>CGPA</th>
                    </tr>
                </thead>
                <tbody className="qualification_body">
                    {
                        props.qualification.map((item,index) =>
                        {
                            return(
                                <tr key={index}>
                                    <td>{item.college}</td>
                                    <td>{item.study}</td>
                                    <td>{item.marks}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </React.Fragment>
    )
}

export default Qualification;