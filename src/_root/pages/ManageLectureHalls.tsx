import { TableBuilder } from "@/TableBuilder"
// import UserTables from "@/components/ui/TableComponent/UserTables"
import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
import useFetch from "@/hooks/useFetch"

const table = new TableBuilder();

table.addHeaders("name", "type", "capacity");

const ManageLectureHalls = () => {
    const response = useFetch('http://localhost:3000/rooms');

    if (response.data) {
        response.data.forEach((data: any) => {
            table.addRow(data);
        })
    }

    return (
        <div>
            <div className='flex flex-row'>
                <h1 className='h2-bold py-4 px-16 text-purple-700' >Manage Lecture Halls</h1>
                <p className=''>Admin</p>
            </div>
            <section style={{backgroundColor: 'white', paddingRight: '2rem', paddingLeft: '2rem'}}>
                <div className='flex justify-end'>
                    <Button type="submit" className="shad-button_primary mt-4 w-30 place-self-center">
                        <div>Add New Room</div>
                    </Button>
                </div>
                {response.data && table.render()}
            </section>
        </div>
    )
}

export default ManageLectureHalls