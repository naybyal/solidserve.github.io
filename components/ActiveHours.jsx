import { IoIosLaptop } from "react-icons/io";

export default function ActiveHours() {
    const date = new Date();
    let value = date.toUTCString()
    return (
        <div className='flex border-2 w-[300px] p-10'>
            <div className='grid'>
                <p>Active Hours</p>
                <p>{value}</p>
            </div>
            <div>
                <IoIosLaptop className='m-1 scale-150'/>
            </div>

        </div>
    );
}