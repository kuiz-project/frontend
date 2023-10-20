import * as S from "./styles/index";
import up from "../../assets/images/upbutton.svg";
import down from "../../assets/images/downbutton.svg";
import { Viewer, Worker } from "@react-pdf-viewer/core/lib";
import { thumbnailPlugin } from "@react-pdf-viewer/thumbnail";
import { currentFileState } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { testAPI, testlistAPI } from "../../apis/API";
const Pdf = () => {
  const { pdfId } = useParams();

  const [multipleChoiceNumber, setMultipleChoiceNumber] = useState(0);
  const [subjectiveNumber, setSubjectiveNumber] = useState(0);
  const navigate = useNavigate();
  // 썸네일 플러그인 설정(width 조정)

  const thumbnailPluginInstance = thumbnailPlugin({
    thumbnailWidth: 190,
    thumbnailHeight: 124,
  });
  const { Thumbnails } = thumbnailPluginInstance;

  const [viewpdf, setViewpdf] = useState(null);
  const [currentFile, setCurrentFile] = useRecoilState(currentFileState);
  const [isSelected, setIsSelected] = useState(false);

  const [curPage, setCurPage] = useState(0);
  useEffect(() => {
    if (currentFile !== null) {
      setViewpdf(currentFile);
    } else {
      setViewpdf(null);
    }
  }, []);
  const handleUpload = async (e) => {
    if (isSelected) {
      const submission = {
        pdf_id: Number(pdfId),
        page: curPage,
        multiple_choices: multipleChoiceNumber,
        N_multiple_choices: subjectiveNumber,
      };

      try {
        const res = await testAPI.post("", submission);
        if (res.status === 200) {
          const res2 = await testlistAPI.get(Number(res.data.test_id));
          console.log(res2);
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  const handlerPagePage = (e) => {
    setCurPage(e.currentPage);
  };

  const pageLayout = {
    buildPageStyles: () => ({
      alignItems: "center",
      display: "flex",
      justifyContent: "center",
    }),
    transformSize: ({ size }) => ({
      height: size.height + 30,
      width: size.width + 30,
    }),
  };

  useEffect(() => {
    if (curPage && multipleChoiceNumber && subjectiveNumber) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  }, [curPage, multipleChoiceNumber, subjectiveNumber]);

  return (
    <S.PdfWrapper>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <S.ThumbnailsBox>
          <Thumbnails />
        </S.ThumbnailsBox>
        {viewpdf && (
          <Viewer
            fileUrl={viewpdf}
            plugins={[thumbnailPluginInstance]}
            onPageChange={handlerPagePage}
            pageLayout={pageLayout}
            className="viewer"
            style={{ overflow: "auto" }}
          />
        )}
      </Worker>
      <S.GenerateWrapper>
        <div className="multiple">
          <div className="probType">객관식</div>
          <div className="number_select">
            <div className="number">{multipleChoiceNumber}</div>
            <div className="number_button">
              <img
                src={up}
                className="up"
                onClick={() =>
                  setMultipleChoiceNumber(multipleChoiceNumber + 1)
                }
                alt="증가 버튼"
              />
              <img
                src={down}
                className="down"
                onClick={() =>
                  multipleChoiceNumber > 0 &&
                  setMultipleChoiceNumber(multipleChoiceNumber - 1)
                }
                alt="감소 버튼"
              />
            </div>
          </div>
        </div>
        <div className="subjective">
          <div className="probType">주관식</div>
          <div className="number_select">
            <div className="number">{subjectiveNumber}</div>
            <div className="number_button">
              <img
                src={up}
                className="up"
                onClick={() => setSubjectiveNumber(subjectiveNumber + 1)}
                alt="증가 버튼"
              />
              <img
                src={down}
                className="down"
                onClick={() =>
                  subjectiveNumber > 0 &&
                  setSubjectiveNumber(subjectiveNumber - 1)
                }
                alt="감소 버튼"
              />
            </div>
          </div>
        </div>
        <S.GenerateBtn isSelected={isSelected} onClick={handleUpload}>
          업로드
        </S.GenerateBtn>
      </S.GenerateWrapper>
    </S.PdfWrapper>
  );
};

export default Pdf;
