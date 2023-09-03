import React, { useState } from "react";
import { ReactComponent as Trash } from '../images/trash.svg';
import { ReactComponent as Add } from '../images/add.svg';
import { ReactComponent as Search } from '../images/search.svg';
import { ReactComponent as Upload } from '../images/uploadButton.svg';
import { ReactComponent as Cancel } from '../images/cancel.svg';

export const UploadView = () => {
    return (
        <div className="main_view2">
            <section>
                <div className="section_header"><Trash className='trash_button' /><Add className='add_button' /></div>
                <div className="section_lists">sdf<br/>
                sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>
                sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>
                sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/>sdf<br/></div>
            </section>
            <div className="upload_mid_section">
                <div className="upload_mid_top">
                    
                    <div className="upload_name">
                        강의명
                    </div>
                    <div className="upload_search">
                        <div className="upload_top_search">
                        <input className="search" type="text"
                        placeholder="검색"/>
                        </div>
                        
                        <div className="search_list">
                            <div className="search_list_boxes">마지막</div>
                            <div className="search_list_boxes">과목과목</div>
                            <div className="search_list_boxes">ㅁㄴㅇㄻㄴㅇㄻㄴㅇㄻㄴㄹㅇ</div>
                            <div className="search_list_boxes">ㅇㅇㅇㅇㅇㅇㅇㅇ</div>
                            <div className="search_list_boxes">ㄴㄴㄴ</div>
                            <div className="search_list_boxes">ㄴㄴㄴ</div>
                            <div className="search_list_boxes">ㄴㄴㄴ</div>
                        </div>
                    </div>
                </div>
                <div className="upload_mid_bottom">
                    <div className="fileSelect">파일선택</div>
                    <Upload className='fileUpload'/>
                    <Cancel className='fileUploadCancel'/>
                </div>
            </div>
            <div className="upload_right_section">
                <div className="kuiz_position_text">KUIZ 추천 포지션</div>
                <div className="kuiz_position_boxes"></div>
                <div className="kuiz_position_boxes"></div>
                <div className="kuiz_position_boxes"></div>
            </div>
            <footer>

            </footer>
        </div>
    );
};
