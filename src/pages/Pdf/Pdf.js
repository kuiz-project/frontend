import * as S from "./styles/index";
import spinner from "../../assets/images/spinner.gif";
import up from "../../assets/images/upbutton.svg";
import down from "../../assets/images/downbutton.svg";
import { Viewer, Worker } from "@react-pdf-viewer/core/lib";
import { thumbnailPlugin } from "@react-pdf-viewer/thumbnail";
import { currentFileState } from "../../recoil/atom";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { testAPI } from "../../apis/API";
import ErrorModal from "../../components/Modal/ErrorModal";
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
	const [isLoading, setIsLoading] = useState(false);

	const [curPage, setCurPage] = useState(0);
	const [isErrorModal, setIsErrorModal] = useState(false);

	const leaveModal = () => {
		setIsErrorModal(false);
	};
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
				// 로딩
				setIsLoading(true);
				setIsSelected(false);
				const res = await testAPI.post("", submission);
				setIsLoading(false);
				if (res.status === 200) {
					navigate(`/testlist/${res.data.test_id}`);
				}
			} catch (e) {
				setIsErrorModal(true);
				setIsLoading(false);
				setIsSelected(true);
				console.log(e);
			}
		}
	};
	const handlerPagePage = (e) => {
		setCurPage(e.currentPage + 1);
	};

	const handleMultipleChoiceNumber = (number) => {
		if (number + subjectiveNumber <= 5) {
			setMultipleChoiceNumber(number);
		}
	};
	const handleSubjectiveChoiceNumber = (number) => {
		if (number + multipleChoiceNumber <= 5) {
			setSubjectiveNumber(number);
		}
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
		if (curPage && (multipleChoiceNumber || subjectiveNumber)) {
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
				<span className="currentPageNumber">{`현재 페이지 : ${curPage}`}</span>
				<div className="multiple">
					<div className="probType">객관식</div>
					<div className="number_select">
						<div className="number">{multipleChoiceNumber}</div>
						<div className="number_button">
							<img
								src={up}
								className="up"
								onClick={() =>
									handleMultipleChoiceNumber(multipleChoiceNumber + 1)
								}
								alt="증가 버튼"
							/>
							<img
								src={down}
								className="down"
								onClick={() =>
									multipleChoiceNumber > 0 &&
									handleMultipleChoiceNumber(multipleChoiceNumber - 1)
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
								onClick={() =>
									handleSubjectiveChoiceNumber(subjectiveNumber + 1)
								}
								alt="증가 버튼"
							/>
							<img
								src={down}
								className="down"
								onClick={() =>
									subjectiveNumber > 0 &&
									handleSubjectiveChoiceNumber(subjectiveNumber - 1)
								}
								alt="감소 버튼"
							/>
						</div>
					</div>
				</div>
				<S.GenerateBtn
					isSelected={isSelected}
					onClick={handleUpload}
					isLoading={isLoading}
				>
					{isLoading ? (
						<S.Spinner src={spinner} alt="로딩 애니메이션" />
					) : (
						"업로드"
					)}
				</S.GenerateBtn>
			</S.GenerateWrapper>
			{isErrorModal && <ErrorModal leaveModal={leaveModal} />}
		</S.PdfWrapper>
	);
};

export default Pdf;
