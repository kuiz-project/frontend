import React, { useState } from "react";
import { ReactComponent as Trash } from '../images/trash.svg';
import { ReactComponent as Add } from '../images/add.svg';
//import { ReactComponent as Search } from '../images/search.svg';
import { ReactComponent as Upload } from '../images/uploadButton.svg';
import { ReactComponent as Cancel } from '../images/cancel.svg';
import { ReactComponent as Close } from '../images/dir_close.svg';
import { ReactComponent as Open } from '../images/dir_open.svg';

export const UploadView = () => {
    const initialDirectories = [
        {
            id: 'dir1',
            name: '디렉토리1',
            isClosed: true,
            details: [
                { id: 'detail1-1', name: 'pdf파일1' },
                { id: 'detail1-2', name: 'pdf파일2' }
            ]
        },
        {
            id: 'dir2',
            name: '디렉토리2',
            isClosed: true,
            details: [
                { id: 'detail2-1', name: 'pdf파일3' },
                { id: 'detail2-2', name: 'pdf파일4' }
            ]
        },
        // ...
    ];

    const handleDetailClick = (dirId, detailId) => {
        alert(`Directory ID: ${dirId}, Detail ID: ${detailId}`);
    };

    const [directories, setDirectories] = useState(initialDirectories);

    const toggleDirectory = (dirId) => {
        const newDirectories = directories.map(directory => {
            if (directory.id === dirId) {
                return { ...directory, isClosed: !directory.isClosed };
            }
            return directory;
        });
        setDirectories(newDirectories);
    };
    return (
        <div className="main_view2">
            <section>
                <div className="section_header">
                    <Trash className='trash_button' />
                    <Add className='add_button' />
                </div>
                <div className="section_lists">
                    {directories.map((directory) => (
                        <div className="directory" key={directory.id}>
                            <div className="directory_top">
                                <div onClick={() => toggleDirectory(directory.id)}>
                                    {directory.isClosed ? <Close className='directory_image' /> : <Open className='directory_image2' />}
                                </div>
                                <div className="directory_name">{directory.name}</div>
                            </div>
                            {!directory.isClosed && (
                                <div className="directory_details">
                                    {directory.details.map((detail) => (
                                        <div key={detail.id} onClick={() => handleDetailClick(directory.id, detail.id)}>
                                            {detail.name}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
            <div className="upload_mid_section">
                <div className="upload_mid_top">

                    <div className="upload_name">
                        강의명
                    </div>
                    <div className="upload_search">
                        <div className="upload_top_search">
                            <input className="search" type="text"
                                placeholder="검색" />
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
                    <Upload className='fileUpload' />
                    <Cancel className='fileUploadCancel' />
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
