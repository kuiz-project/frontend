import React, { useEffect, useRef, useState } from "react";
import cancel from "../../assets/images/cancel.svg";
import close from "../../assets/images/dir_close.svg";
import open from "../../assets/images/dir_open.svg";
import add from "../../assets/images/add.svg";
import trash from "../../assets/images/trash.svg";
import edit from "../../assets/images/edit.svg";
import * as S from "./styles/index";
import pdfuploadN from "../../assets/images/pdfupload_n.svg";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentFileState, directoryState } from "../../recoil/atom";
import {
  createfolderPostAPI,
  deletefoldernameAPI,
  myfolderAPI,
  pdfsubjectAPI,
  updatefoldernameAPI,
} from "./../../apis/API";

const Upload = () => {
  const [pdfFile, setpdfFile] = useState(null);
  const [currentFile, setCurrentFile] = useRecoilState(currentFileState);
  const [directories, setDirectories] = useRecoilState(directoryState); // 폴더 데이터 가져오기
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  const fileType = ["application/pdf"];
  const [subjects, setSubjects] = useState([]);
  /* 디렉토리 수정 텍스트 */
  const [directoryEditText, setDirectoryEditText] = useState("");
  const [fileEditText, setFileEditText] = useState(false);

  const fetchInitialData = async () => {
    const res = await myfolderAPI.get();
    const res2 = await pdfsubjectAPI.get();
    try {
      if (res.status === 200) {
        const updatedDirectories = res.data.folderDtos.map((directory) => ({
          ...directory,
          isSelected: false,
          isEdit: false,
        }));
        setDirectories(updatedDirectories);
      }
      if (res2.status === 200) {
        const updatedSubjects = res2.data.subject.map((subject) => {
          return {
            subjectName: subject,
            isSelected: false,
          };
        });
        setSubjects(updatedSubjects);
      }
    } catch (e) {
      console.log(e);
    }
  };

  // 폴더 받아오기
  const fetchData = async () => {
    const res = await myfolderAPI.get();
    try {
      if (res.status === 200) {
        setDirectories(res.data.folderDtos);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // 초기 폴더 데이터 로드
    fetchInitialData();
  }, []);

  // 폴더 추가
  const handleDirectoryAdd = async () => {
    try {
      const res = await createfolderPostAPI.post("");
      if (res.status === 200) {
        fetchData();
      }
    } catch (e) {
      console.log(e);
    }
  };

  // 폴더 삭제
  const handleDirectoryDelete = async () => {
    const target = directories.filter((directory) => directory.isSelected)[0];
    if (target) {
      try {
        const res = await deletefoldernameAPI.delete(
          JSON.stringify(target.folder_id)
        );
        if (res.status === 200) {
          fetchData();
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("디렉토리를 누르고 삭제해주세요");
    }
  };

  // 폴더 클릭
  const handleDirectoryClick = (dir) => {
    if (!dir.isEdit) {
      const newDirectories = directories.map((directory) => {
        if (directory.folder_id === dir.folder_id) {
          return { ...directory, isSelected: !directory.isSelected };
        } else {
          return { ...directory, isSelected: false, isEdit: false };
        }
      });
      setDirectories(newDirectories);
    }
  };

  // 더블클릭하여 directory 수정 모드
  const handleDirectoryDoubleClick = (dir) => {
    if (isEditMode) {
      const newDirectories = directories.map((directory) => {
        if (directory.folder_id === dir.folder_id) {
          return { ...directory, isEdit: true };
        } else {
          return { ...directory, isEdit: false };
        }
      });
      setFileEditText(dir.folder_name);
      setDirectories(newDirectories);
    }
  };

  // directory 수정
  // 중복일 때 : input 해제
  const handleDirectoryEdit = async (e, dirId) => {
    const submission = {
      folder_name: directoryEditText,
      folder_id: dirId,
    };
    // 엔터로 수정 요청
    if (e.keyCode === 13) {
      try {
        const res = await updatefoldernameAPI.patch("", submission);
        console.log(res);
        if (res.status === 200) {
          fetchData();
          setDirectoryEditText("");
        }
      } catch (e) {
        // 폴더명 중복
        console.log(e);
      }
    }
  };

  const handleDirectoryInput = (e) => {
    setDirectoryEditText(e.target.value);
  };

  const handleToggleSubject = (sub) => {
    const updatedSubjects = subjects.map((subject) => {
      if (subject === sub) {
        return { ...subject, isSelected: true };
      } else {
        return { ...subject, isSelected: false };
      }
    });
    setSubjects(updatedSubjects);
  };

  // 파일 선택
  const handleChange = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      if (selectedFile && fileType.includes(selectedFile.type)) {
        let reader = new FileReader();
        reader.readAsDataURL(selectedFile);
        reader.onload = (e) => {
          setpdfFile(e.target.result);
          setCurrentFile(e.target.result);
          navigate("/pdf");
        };
      } else {
        setpdfFile(null);
      }
    } else {
      console.log("please select");
    }
  };

  // 파일명 수정
  const EditFileName = (pdfId) => {};
  // (파일 클릭) 업로드 할 때는 전체 디렉토리에서 하나만 클릭 가능
  const handleFileClick = (dirId, fileId) => {
    // const newDirectories = directories.map((dir) => {
    //   const newDetails = dir.details.map((file) => {
    //     if (dir.id === dirId && file.id === fileId) {
    //       return { ...file, isSelected: true };
    //     } else {
    //       return { ...file, isSelected: false, isEdit: false };
    //     }
    //   });
    //   return { ...dir, details: newDetails };
    // });
    // setDirectories(newDirectories);
  };
  return (
    <S.UploadWrapper>
      <S.SideBarWrapper>
        <S.SideBarHeader>
          {isEditMode ? (
            <>
              <S.CompleteBtn onClick={() => setIsEditMode(false)}>
                완료
              </S.CompleteBtn>
              <S.DeleteBtn onClick={handleDirectoryDelete}>
                <img src={trash} alt="삭제 버튼" />
              </S.DeleteBtn>
            </>
          ) : (
            <S.EditBtn onClick={() => setIsEditMode(true)}>편집</S.EditBtn>
          )}

          <S.AddBtn onClick={handleDirectoryAdd}>
            <img src={add} alt="추가 버튼" />
          </S.AddBtn>
        </S.SideBarHeader>
        <S.SectionListBox>
          {directories?.map((directory, idx) => (
            <S.DirBox
              key={directory.folder_id}
              onClick={() => handleDirectoryClick(directory)}
              onDoubleClick={() => {
                handleDirectoryDoubleClick(directory);
              }}
            >
              <S.DirTitle isSelected={directory.isSelected}>
                {directory.isSelected ? (
                  <img src={open} alt="열기 이미지" />
                ) : (
                  <img src={close} alt="닫기 이미지" />
                )}
                {isEditMode && directory.isEdit ? (
                  <S.DirInput
                    isSelected={directory.isSelected}
                    defaultValue={directory.folder_name}
                    onChange={(e) => {
                      handleDirectoryInput(e);
                    }}
                    onKeyDown={(e) => {
                      handleDirectoryEdit(e, directory.folder_id);
                    }}
                  />
                ) : (
                  <S.DirName isSelected={directory.isSelected}>
                    {directory.folder_name}
                  </S.DirName>
                )}
              </S.DirTitle>
              {directory.isSelected && (
                <S.DirInner>
                  {directory.pdfDtos?.map((pdf) => (
                    <S.FileItemWrapper
                      key={pdf.pdf_id}
                      onClick={() => handleFileClick(directory.id, pdf.id)}
                      isSelected={pdf.isSelected}
                    >
                      {pdf.isEdit ? (
                        <S.FileInput
                          value={fileEditText}
                          onChange={(e) => setFileEditText(e.target.value)}
                        />
                      ) : (
                        <S.FileName>{pdf.name}</S.FileName>
                      )}
                      <S.FileEditBtn
                        onClick={(e) => {
                          e.stopPropagation();
                          EditFileName(directory.id, pdf.id);
                        }}
                      >
                        {pdf.isEdit ? (
                          <span>확인</span>
                        ) : (
                          <img src={edit} alt="수정 이미지" />
                        )}
                      </S.FileEditBtn>
                    </S.FileItemWrapper>
                  ))}
                </S.DirInner>
              )}
            </S.DirBox>
          ))}
        </S.SectionListBox>
      </S.SideBarWrapper>
      <S.MainWrapper>
        <S.LectureUploadWrapper>
          <S.SelectWrapper>
            <S.SelectTitle>디렉토리명</S.SelectTitle>
            <S.List>
              {directories.map((directory) => (
                <S.SelectItem
                  isSelected={directory.isSelected}
                  onClick={() => handleDirectoryClick(directory)}
                >
                  {directory.folder_name}
                </S.SelectItem>
              ))}
            </S.List>
          </S.SelectWrapper>
          <S.SelectWrapper>
            <S.SelectTitle>강의명</S.SelectTitle>
            <S.List>
              {subjects.map((subject) => (
                <S.SelectItem
                  isSelected={subject.isSelected}
                  onClick={() => handleToggleSubject(subject)}
                >
                  {subject.subjectName}
                </S.SelectItem>
              ))}
            </S.List>
          </S.SelectWrapper>
          <S.FileUploadWrapper>
            <S.UploadBox>
              <input
                type="file"
                className="hiddenInput"
                onChange={handleChange}
              />
              <S.UploadCancelBtn>
                <img src={cancel} alt="취소 버튼" />
              </S.UploadCancelBtn>
            </S.UploadBox>
          </S.FileUploadWrapper>
        </S.LectureUploadWrapper>
        <S.Footer>
          <S.UploadBtn>
            <img src={pdfuploadN} alt="pdf 업로드 전 버튼" />
          </S.UploadBtn>
        </S.Footer>
      </S.MainWrapper>
    </S.UploadWrapper>
  );
};

export default Upload;
