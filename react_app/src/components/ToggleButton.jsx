import { useState } from "react"

const ToggleButton = () => {
    const [open, setOpen] = useState(false)
    const toggle = () => {
        setOpen(prevState => !prevState)
    }

    return (
        <div>
            <br/>
            <button onClick={toggle}>
                {open ? 'open': 'close'}
            </button>
        </div>
    );
}

export default ToggleButton