// TimetableComponent.tsx
import React, { forwardRef } from 'react';

type Course = {
    name: string;
    code: string;
    classType: string;
    instructors: string[];
    units: number;
    teachingHours: number;
    outstandingHours: number;
    semester: number;
    department: string;
    level: number;
    timeSlot: number[];
    timeSlot2: number[];
  };
  
  type TimeTableEntry = {
    course: Course;
    timeSlot: number[];
    room: string;
    lecturer: string;
    fitness: number;
  };
  
  type TimeTable = {
    monday: TimeTableEntry[];
    tuesday: TimeTableEntry[];
    wednesday: TimeTableEntry[];
    thursday: TimeTableEntry[];
    friday: TimeTableEntry[];
    // add other days if needed
  };
  
  type TimeTableData = {
    timeTable: TimeTable;
  };

  const TimetableComponent = forwardRef<HTMLDivElement, { data: TimeTableData[] }>(({ data }, ref) => {
    const timeSlots = Array.from({ length: 12 }, (_, i) => i + 7);
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  
    return (
      <div ref={ref}>
        
        <div>
          <h2 className='place-self-center for-export-only'>BABCOCK UNIVERSITY</h2>
        </div>
        <table style={{ borderCollapse: 'collapse', width: '80%', fontSize: '0.8rem' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid black', padding: '10px' }}>Time / Day</th>
              {timeSlots.map((timeSlot) => (
                <th key={timeSlot} style={{ border: '1px solid black', padding: '10px' }}>{`${timeSlot}-${timeSlot + 1}`}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((dayData, i) => (
              <tr key={i}>
                <td style={{ border: '1px solid black', padding: '10px' }}>{daysOfWeek[i]}</td>
                {timeSlots.map((timeSlot) => {
                  const allCourses = Object.values(dayData.timeTable).flat();
                  const course = allCourses.find((course) =>
                    course.timeSlot.includes(timeSlot)
                  );
                  return (
                    <td key={timeSlot} style={{ border: '1px solid black', padding: '10px' }}>
                      {course ? `${course.course.name} (${course.course.code})` : ''}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  });


export default TimetableComponent;
