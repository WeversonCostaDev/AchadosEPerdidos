import { useState } from "react";
import "./Dropdown.css";

interface DropdownProps{
    dropdownName: string;
    children: React.ReactNode;
}

function Dropdown({dropdownName, children}: DropdownProps){
    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open)
    }

    return(
        <div className="dropdown">
            <button className="dropdown-button" onClick={toggle}>{dropdownName}</button>

            {open && (
            <div className="dropdown-content">
                {children}
            </div>
            )}
        </div>
    );
}

export default Dropdown;