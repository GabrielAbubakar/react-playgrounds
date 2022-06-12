import React from "react";
const TabNavItem = ({ id, title, activeTab, setActiveTab, src }) => {

    const handleClick = () => {
        if (id !== activeTab) {
            setActiveTab(id);

        } else {
            setActiveTab('')
        }
    };

    return (
        <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
            {title}
            <img src={src} alt={title} />
        </li>
    );
};
export default TabNavItem;