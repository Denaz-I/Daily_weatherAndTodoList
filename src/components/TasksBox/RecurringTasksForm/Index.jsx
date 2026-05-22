import { FaSearch } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function RecurringTasks({onChange, recurringTasks, onKeyDown, onRemove}) {
return <>
    <div>
    <h1 className="text-xl text-sky-200">Recurring Tasks</h1>
    <div className="m-2 flex items-center border pl-5 gap-2 border-gray-300 h-[46px] rounded-full overflow-hidden w-full">
        <FaSearch className="text-sky-500" />
        <input 
        id="recurringTasks"
        type="text" 
        placeholder="Inserisci la task" 
        className="w-full h-full outline-none text-sky-100 bg-transparent placeholder-gray-300 text-sm" 
        onChange={onChange}
        onKeyDown={onKeyDown}
        />
    </div>
    <div>
        {recurringTasks.map(newTask => (
            <div key={newTask.id} className="flex items-center justify-between">
                <span className="text-xl text-sky-200">{newTask.emoji} {newTask.text}</span>
                <MdDeleteForever
                className="text-white scale-125 cursor-pointer"
                onClick={() => onRemove(newTask.id)} />
            </div>))}
    </div>
    </div>
    </>
}
    


export default RecurringTasks;