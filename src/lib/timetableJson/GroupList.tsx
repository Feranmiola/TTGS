import TimetableComponent from "./timetableRender";

const GroupList = ({ data }) => {
    return (
      <div>
        {data.map((group, index) => (
          <div key={index}>
            <h2>Group {index + 1}</h2>
            <TimetableComponent data={group} />
          </div>
        ))}
      </div>
    );
  };
  
export default GroupList;