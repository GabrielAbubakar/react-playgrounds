import React from "react";
import { motion, AnimatePresence } from 'framer-motion'

const TabContent = ({ id, activeTab, title, subtitle, content, src1, src2 }) => {
    return (
        <AnimatePresence>
            {
                activeTab === id ? (

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        // exit={{ opacity: 0 }}

                        className="TabContent">
                        <div className="TabContentContainer">
                            <h2>{title}</h2>
                            <h3>{subtitle}</h3>
                            <p>{content}</p>
                            <div className="button-group">
                                <a href="#er">Listen to Ad</a>
                                <a href="#er">See Campaign Results</a>
                            </div>
                        </div>
                        <div className="tabImgContainer">
                            <img src={src2} alt="" />
                            <img src={src1} alt="" />
                        </div>
                    </motion.div>
                )
                    : null
            }
        </AnimatePresence>
    );
};

export default TabContent;