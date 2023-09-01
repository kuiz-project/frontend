import React, { useState } from "react";
import { ReactComponent as Trash } from '../images/trash.svg';
import { ReactComponent as Add } from '../images/add.svg';
export const UploadView = () => {

    return (
        <div className="main_view">
            <section>
                <div className="section_header"><Trash className='trash_button' /><Add className='add_button' /></div>
                <div className="section_lists"></div>
            </section>
            <div className="upload_mid_section">
                <div className="upload_mid_top"></div>
                <div className="upload_mid_bottom"></div>
            </div>
            <div className="upload_right_section"></div>
            <footer>
                
            </footer>
        </div>
    );
};
