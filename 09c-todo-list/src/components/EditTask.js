export default function EditTask(props) {
    return (
        <div className="card" style={{
            "width": "18rem"
        }}>
            <div className="card-body">
                <input type="text"
                    name="updatedTaskName"
                    value={props.updatedTaskName}
                    onChange={props.onUpdateFormField}
                />
                <div className="mt-2">
                    <button onClick={props.onConfirm}>Confirm</button>
                    <button className="ms-3">Cancel</button>
                </div>
            </div>

        </div>
    )
}