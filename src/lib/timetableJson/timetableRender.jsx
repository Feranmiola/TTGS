import React, { forwardRef } from 'react';

export const TimetableComponent = forwardRef(({tables}, ref) => {
    function arraysClash(arr1, arr2) {
        let i = 0;
        let j = 0;
    
        // Iterate through the arrays
        while (i < arr1.length && j < arr2.length) {
            if (arr1[i] === arr2[j]) {
                if(i == arr1.length - 1 && j == 0) return false;
                if(i == 0 && j == arr2.length - 1) return false;
                else return true;
            } else if (arr1[i] < arr2[j]) {
                // Move to the next element in the first array
                i++;
            } else {
                // Move to the next element in the second array
                j++;
            }
        }
    
        // No clash found
        return false;
    }
    
    const groupNames = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

    return tables.map((table, index) => (
        
        <div ref={ref}>
        <section key={index}>
            <table id={`table${index}`}>
            
               <caption id='captiont'> <h1> <strong>BABCOCK UNIVERSITY </strong></h1></caption>
               <caption><h3> <strong>TENTATIVE TIMETABLE FOR SOFTWARE ENGINEERING </strong></h3></caption>
            <caption id='captionL'> <strong>Group {groupNames[index]} </strong></caption>
            
                <thead id="tableHead">
                    <tr>
                        <th>Days</th>
                        <th id="7,8">7 - 8</th>
                        <th id="8,9">8 - 9</th>
                        <th id="9,10">9 - 10</th>
                        <th id="10,11">10 - 11</th>
                        <th id="11,12">11 - 12</th>
                        <th id="12,13">12 - 13</th>
                        <th id="13,14">13 - 14</th>
                        <th id="14,15">14 - 15</th>
                        <th id="15,16">15 - 16</th>
                        <th id="16,17">16 - 17</th>
                        <th id="17,18">17 - 18</th>
                    </tr>
                </thead>
                <tbody id="tableBody">
                    {['monday', 'tuesday', 'wednesday', 'thursday', 'friday'].map(day => (
                        <tr id={day} key={day}>
                            <td>{day.charAt(0).toUpperCase() + day.slice(1)}</td>
                            {Array(11).fill(0).map((_, i) => {
                                const timePeriod = [i + 7, i + 8];
                                const dayTable = table.timeTable[day];
                                let tableObject = null;

                                for (let j = 0; j < dayTable.length; j++) {
                                    const course = dayTable[j];
                                    // Check if the course timeSlot clashes with the current timePeriod
                                    if (arraysClash(timePeriod, course.timeSlot)) {
                                        tableObject = course;
                                        break;
                                    }
                                }


                                return (
                                    <td key={i}>
                                        {tableObject ? (
                                            <>
                                                <span style={{display: 'inline-block', fontSize: '16px'}}>{tableObject.course.name}</span>
                                                <span style={{fontSize: '12px', fontWeight: 'bold', display: 'inline-block'}}>{tableObject.room}</span>
                                                <span style={{fontSize: '12px', fontWeight: 'bold', display: 'block'}}>{tableObject.lecturer}</span>
                                            </>
                                        ) : null}
                                    </td>
                                );
                            })}

                        </tr>
                    ))}
                </tbody>
                <tfoot></tfoot>
            </table>
        </section>
        </div>
    ));

})
