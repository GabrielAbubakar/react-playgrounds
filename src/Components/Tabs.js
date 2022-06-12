import React, { useState } from "react";
import TabNavItem from "./TabNavItem";
import TabContent from "./TabContent";
import Voda from "../assets/vodacom.svg"
import Chrome from "../assets/chrome1.svg"
import Nivea from "../assets/nivea.svg"
import VodaPosterLg from "../assets/VodacomBig.png"
import VodaPosterSm from "../assets/VodacomSmall.png"

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("");

    return (
        <div className="Tabs">
            <ul className="nav">
                <TabNavItem id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} src={Voda} />
                <TabNavItem id="tab2" activeTab={activeTab} setActiveTab={setActiveTab} src={Nivea} />
                <TabNavItem id="tab3" activeTab={activeTab} setActiveTab={setActiveTab} src={Chrome} />
            </ul>

            <div className="outlet">
                <TabContent id="tab1"
                    activeTab={activeTab}
                    title='Vodacom TX'
                    subtitle='Voda Bima Campaign'
                    content="In Q2 of 2021, Vodacom Tanzania launched ‘Voda Bima,’ a service that allows customers to access insurance products through their M-PESA app for the first time. Vodacom briefed Mdundo.com to increase awareness of the service as well as drive subscriptions among its users in Tanzania."
                    src1={VodaPosterLg}
                    src2={VodaPosterSm}
                />
                <TabContent id="tab2" activeTab={activeTab} title='Nivea' />
                <TabContent id="tab3" activeTab={activeTab} title='Chrome' />
            </div>


        </div>
    );
};

export default Tabs;