export default function ActiveHours() {
    value = date.toLocaleTimeString("en-US", options)
    return (
        <div className='border-2 w-[300px]'>
            <div className='grid'>
                <p>Active Hours</p>
                <p>{value}</p>
            </div>


        </div>
    );
}