import React, { useEffect, useRef, useState } from "react";
import cancel from "../../assets/images/cancel.svg";
import close from "../../assets/images/dir_close.svg";
import open from "../../assets/images/dir_open.svg";
import add from "../../assets/images/add.svg";
import trash from "../../assets/images/trash.svg";
import edit from "../../assets/images/edit.svg";
import * as S from "./styles/index";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentFileState, directoryState } from "../../recoil/atom";
import {
  createfolderPostAPI,
  deletefoldernameAPI,
  deletepdfAPI,
  myfolderAPI,
  pdfsubjectAPI,
  updatefoldernameAPI,
  updatepdfAPI,
  uploadpdfAPI,
} from "./../../apis/API";

const Upload = () => {
  const [currentFile, setCurrentFile] = useRecoilState(currentFileState);
  const [fileObj, setFileObj] = useState(null);
  const [directories, setDirectories] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const navigate = useNavigate();
  const fileType = ["application/pdf", "application/haansoftpdf"];
  const [subjects, setSubjects] = useState([]);
  /* 디렉토리 수정 텍스트 */
  const fileInputRef = useRef(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  const [pdfIsSelected, setPdfIsSelected] = useState(false);
  const [formData, setFormData] = useState("");
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
  // 삭제
  const handleDelete = async () => {
    const submission = new URLSearchParams();
    const target = directories.filter((directory) => directory.isSelected)[0];
    const targetFiles = target.pdfDtos
      .filter((file) => file.isSelected)
      .map((file) => file.pdf_id);
    targetFiles.forEach((id) => submission.append("pdfIds", id));

    if (target) {
      // 파일 삭제
      if (targetFiles.length) {
        try {
          const res = await deletepdfAPI.delete(
            `delete?${submission.toString()}&`
          );
          if (res.status === 200) {
            fetchData();
          }
        } catch (e) {
          console.log(e);
        }
      }

      // 폴더 삭제
      else {
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
      }
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

  // directory 수정
  // 중복일 때 : input 해제
  const handleOnKeyPress = async (e, dirId) => {
    if (e.key === "Enter") {
      const submission = {
        folder_id: dirId,
        folder_name: e.target.value,
      };
      try {
        const res = await updatefoldernameAPI.patch("", submission);
        if (res.status === 200) {
          fetchData();
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleOnKeyFilePress = async (e, pdfId) => {
    if (e.key === "Enter") {
      const submission = {
        pdfId,
        pdf_name: e.target.value,
      };
      try {
        const res = await updatepdfAPI.patch("", submission);
        if (res.status === 200) {
          fetchData();
        }
      } catch (e) {
        console.log(e);
      }
    }
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
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile && fileType.includes(selectedFile.type)) {
      setFileObj(selectedFile);
      setSelectedFileName(selectedFile.name);
      let reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onload = async (e) => {
        setCurrentFile(e.target.result);
      };
    }
  };
  const handleUpload = async () => {
    if (pdfIsSelected) {
      try {
        const res = await uploadpdfAPI.post("", formData);

        if (res.status === 200) {
          navigate(`/pdf/${res.data.pdf_id}`);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };

  const handleValidateUpload = () => {
    const formData = new FormData();
    const targetDirectory = directories.filter((dir) => dir.isSelected);
    const targetSubject = subjects.filter((subject) => subject.isSelected);
    if (!targetDirectory.length || !targetSubject.length) {
      return;
    }
    const targetDirectoryId = targetDirectory[0].folder_id;
    const targetSubjectName = targetSubject[0].subjectName;
    if (targetDirectoryId && targetSubjectName && currentFile) {
      formData.append("subject", targetSubjectName);
      formData.append("folder", targetDirectoryId);
      formData.append("file", fileObj);
      setFormData(formData);
      setPdfIsSelected(true);
      return true;
    }
  };
  // 업로드 가능 판단

  useEffect(() => {
    if (handleValidateUpload()) {
      setPdfIsSelected(true);
    }
  }, [directories, subjects, currentFile]);

  // 파일 편집 모드
  const handleFileEdit = (e, dirId, pdfId) => {
    const newDirectories = directories.map((dir) => {
      const newDetails = dir.pdfDtos.map((file) => {
        if (dir.folder_id === dirId && file.pdf_id === pdfId) {
          return { ...file, isEdit: true };
        } else {
          return { ...file, isEdit: false };
        }
      });
      return { ...dir, pdfDtos: newDetails };
    });
    setDirectories(newDirectories);
  };

  // 디렉토리 편집 모드
  const handleDirEdit = (dirId) => {
    if (isEditMode) {
      const newDirectories = directories.map((directory) => {
        if (directory.folder_id === dirId) {
          return { ...directory, isEdit: !directory.isEdit, isSelected: false };
        } else {
          return { ...directory, isSelected: false, isEdit: false };
        }
      });
      setDirectories(newDirectories);
    }
  };

  // (파일 클릭) 업로드 할 때는 전체 디렉토리에서 하나만 클릭 가능
  const handleFileClick = async (dirId, fileId) => {
    const newDirectories = directories.map((dir) => {
      if (dir.pdfDtos) {
        const newFiles = dir.pdfDtos.map((file) => {
          // 편집 모드 일때만 다중 선택 가능 else
          if (dir.folder_id === dirId && file.pdf_id === fileId) {
            return { ...file, isSelected: !file.isSelected };
          } else {
            if (isEditMode) {
              return { ...file };
            } else {
              return { ...file, isSelected: false };
            }
          }
        });
        return { ...dir, pdfDtos: newFiles };
      }
      return { ...dir };
    });
    setDirectories(newDirectories);
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
              <S.DeleteBtn onClick={handleDelete}>
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
            >
              <S.DirTitle isSelected={directory.isSelected}>
                <S.DirLeft>
                  {directory.isSelected ? (
                    <img src={open} alt="열기 이미지" />
                  ) : (
                    <img src={close} alt="닫기 이미지" />
                  )}
                  {isEditMode && directory.isEdit ? (
                    <S.DirInput
                      defaultValue={directory.folder_name}
                      onKeyPress={(e) => {
                        handleOnKeyPress(e, directory.folder_id);
                      }}
                    />
                  ) : (
                    <S.DirName isSelected={directory.isSelected}>
                      {directory.folder_name}
                    </S.DirName>
                  )}
                </S.DirLeft>
                <S.DirEditBtn
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDirEdit(directory.folder_id);
                  }}
                >
                  {directory.isEdit ? (
                    <span>확인</span>
                  ) : (
                    <img src={edit} alt="수정 이미지" />
                  )}
                </S.DirEditBtn>
              </S.DirTitle>
              {directory.isSelected && (
                <S.DirInner>
                  {directory.pdfDtos?.map((pdf) => (
                    <S.FileItemWrapper
                      key={pdf.pdf_id}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFileClick(directory.folder_id, pdf.pdf_id);
                      }}
                      isSelected={pdf.isSelected}
                    >
                      {pdf.isEdit ? (
                        <S.FileInput
                          defaultValue={pdf.file_name}
                          onKeyPress={(e) => {
                            e.stopPropagation();
                            handleOnKeyFilePress(e, pdf.pdf_id);
                          }}
                        />
                      ) : (
                        <S.FileName>{pdf.file_name}</S.FileName>
                      )}
                      <S.FileEditBtn
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFileEdit(e, directory.folder_id, pdf.pdf_id);
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
            <S.List2>
              {subjects.map((subject) => (
                <S.SelectItem
                  isSelected={subject.isSelected}
                  onClick={() => handleToggleSubject(subject)}
                >
                  {subject.subjectName}
                </S.SelectItem>
              ))}
            </S.List2>
          </S.SelectWrapper>
          <S.FileUploadWrapper>
            <S.UploadBox>
              <input
                type="file"
                className="hiddenInput"
                onChange={handleFileChange}
                ref={fileInputRef}
              />
              <label
                className="customFileUpload"
                // 라벨을 클릭 => input 클릭
                onClick={() => fileInputRef.current.click()}
              >
                {selectedFileName || "파일 선택(pdf 확장자만 가능)"}
              </label>
              <S.UploadCancelBtn>
                <img
                  src={cancel}
                  alt="취소 버튼"
                  onClick={() => setSelectedFileName("")}
                />
              </S.UploadCancelBtn>
            </S.UploadBox>
          </S.FileUploadWrapper>
        </S.LectureUploadWrapper>
      </S.MainWrapper>
      <S.Footer>
        <S.UploadBtn pdfIsSelected={pdfIsSelected} onClick={handleUpload}>
          Pdf 생성
        </S.UploadBtn>
      </S.Footer>
    </S.UploadWrapper>
  );
};

export default Upload;
