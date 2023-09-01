import React, { useState } from "react";
import { ReactComponent as Trash } from '../images/trash.svg';
import { ReactComponent as Add } from '../images/add.svg';
import { ReactComponent as Search } from '../images/search.svg';

export const UploadView = () => {
    return (
        <div className="main_view2">
            <section>
                <div className="section_header"><Trash className='trash_button' /><Add className='add_button' /></div>
                <div className="section_lists"></div>
            </section>
            <div className="upload_mid_section">
                <div className="upload_mid_top">
                    <div className="upload_name">
                        강의명
                    </div>
                    <div className="upload_search">
                        <div><input className="search" type="text"
                        placeholder="ㄴㅇ"/></div>
                        <div>여기에 이제 리스트 쫙</div>
                    </div>
                </div>
                <div className="upload_mid_bottom"></div>
            </div>
            <div className="upload_right_section">KUIZ 추천 포지션</div>
            <footer>

            </footer>
        </div>
    );
};
