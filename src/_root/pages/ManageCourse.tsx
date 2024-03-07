import FormBuilder from "@/FormBuilder";
import { TableBuilder } from "@/TableBuilder";
// import UserTables from "@/components/ui/TableComponent/UserTables"
import { Button } from "@/components/ui/button"
import useFetch from "@/hooks/useFetch";
import { useState } from "react";

const table = new TableBuilder();

table.addHeaders("code", "name", "department", "classType");

const form = new FormBuilder("Add Course");

form.addDataNames("code", "name", "department", "classType", "instructors", "units");

form.addDataNames("teachingHours", "outstandingHours", "semester", "level");

const ManageCourses = () => {
    const response = useFetch('http://localhost:3000/courses');
    const [showForm, setShowForm] = useState<boolean | null>(null);

    if(response.data) {
        response.data.forEach((data: any) => {
            table.addRow(data); 
        })
    }

    return (
        <div>
            {form.render(showForm, setShowForm)}
            <div className='flex flex-row'>
                <h1 className='h2-bold py-4 px-16 text-purple-700' >Manage Courses</h1>
                <p className=''>Admin</p>
            </div>
            <section style={{backgroundColor: 'white', paddingRight: '2rem', display: showForm ? 'none': 'unset'}}>
                <div className='flex justify-end'>
                    <Button type="submit" className="shad-button_primary mt-4 w-30 place-self-center" onClick={() => setShowForm(true)}>
                        <div>Add New Course</div>
                    </Button>
                </div>
                {response.data && table.render()}
            </section>

        </div>
    )
}

export default ManageCourses