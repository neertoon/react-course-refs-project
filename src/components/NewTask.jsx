export default function NewTask() {
    return (
        <div className="flex item-center gap-4 ">
           <input type="text" className="w-64 px-2 py-1 rounded-sm gb-stone-200" />
           <button className="text-stone-700 hover:text-stone-950 ">ADD TASK</button>
        </div>
    );
}