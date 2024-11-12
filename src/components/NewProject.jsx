import Input from "./Input.jsx";
import {useRef} from 'react';
import Modal from "./Modal.jsx";

export default function NewProject({onAdd, onCancel}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSave() {
        let enteredTitle = title.current.value;
        let enteredDesc = description.current.value;
        let enteredDate = dueDate.current.value;

        if (enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredDate.trim() === '') {
            modal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDesc,
            dueDate: enteredDate,
        });
    }

    return (
        <>
            <Modal ref={modal} buttonCaption="Close">
                <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
                <p className="text-stone-600 mb-4 ">Oops... looks like you forgot to enter wartości</p>
                <p className="text-stone-600 mb-4 ">Uzupełnmij wszystkie wartości w inputach</p>
            </Modal>
            <div className="w-[35rem]  mt-16">
                <menu className="flex items-center justify-end gap-4 my-4 ">
                    <li>
                        <button onClick={onCancel} className="text-stone-800 hove:text-stone-950">Cancel</button>
                    </li>
                    <li>
                        <button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 ">Save</button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={title} label="Title"/>

                    <Input ref={description} label="Description" isTextArea={true}/>

                    <Input type="date" ref={dueDate} label="Due Date"/>
                </div>
            </div>
        </>
    );
}