import { useState } from "react";
import StudyDatePicker from "../components/datepicker";
import StudyDatePickerStart from "../components/datepickerStart";
import TimePicker from "../components/timepicker";
import "../statics/css/studyRecruitCreate.css";

export default function StudyRecruitCreate() {
  // [TODO]: studies api 완성되면 어떤 데이터를 post 해야하는지 보고 아래의 함수 완성하기
  // const [studyRecruit, setStudyRecruit] = useState({

  // })
  // const [days, setDays] = useState([]);
  const [mondayStartTime, setMondayStartTime] = useState("");
  const [mondayEndTime, setMondayEndTime] = useState("");
  const [isMonday, setIsMonday] = useState(false);
  console.log("mon", mondayStartTime, mondayEndTime, isMonday);
  if (isMonday) {
    console.log("hi");
  }
  // if (mondayEndTime && mondayStartTime) {
  //   setIsMonday(!isMonday);
  // }
  // const onClickIsMonday = (event) => {
  //   event.preventDefault();
  //   setIsMonday(!isMonday);
  //   if (!isMonday) {
  //     setDays((days) => [...days, 0]);
  //     openModal();
  //     if (mondayStartTime && mondayEndTime) {
  //       console.log("hi");
  //     }
  //   }
  // };
  const [tuesdayStartTime, setTuesdayStartTime] = useState("");
  const [tuesdayEndTime, setTuesdayEndTime] = useState("");
  const [isTuesday, setIsTuesday] = useState(false);
  console.log("tue", tuesdayStartTime, tuesdayEndTime, isTuesday);
  // const onClickIsTuesday = () => {
  //   setIsTuesday(!isTuesday);
  //   if (!isTuesday) {
  //     setDays((days) => [...days, 0]);
  //     openModal();
  //   }
  // };
  const [wednesdayStartTime, setWednesdayStartTime] = useState("");
  const [wednesdayEndTime, setWednesdayEndTime] = useState("");
  const [isWednesday, setIsWednesday] = useState(false);
  console.log("wed", wednesdayStartTime, wednesdayEndTime, isWednesday);
  // const [isWednesday, setIsWednesday] = useState(false);
  // const onClickIsWednesday = () => {
  //   setIsWednesday(!isWednesday);
  // };

  const [thursdayStartTime, setThursdayStartTime] = useState("");
  const [thursdayEndTime, setThursdayEndTime] = useState("");
  const [isThursday, setIsThursday] = useState(false);
  console.log("thu", thursdayStartTime, thursdayEndTime, isThursday);
  // const [isThursday, setIsThursday] = useState(false);
  // const onClickIsThursday = () => {
  //   setIsThursday(!isThursday);
  // };

  const [fridayStartTime, setFridayStartTime] = useState("");
  const [fridayEndTime, setFridayEndTime] = useState("");
  const [isFriday, setIsFriday] = useState(false);
  console.log("fri", fridayStartTime, fridayEndTime, isFriday);
  // const [isFriday, setIsFriday] = useState(false);
  // const onClickIsFriday = () => {
  //   setIsFriday(!isFriday);
  // };

  const [saturdayStartTime, setSaturdayStartTime] = useState("");
  const [saturdayEndTime, setSaturdayEndTime] = useState("");
  const [isSaturday, setIsSaturday] = useState(false);
  console.log("sat", saturdayStartTime, saturdayEndTime, isSaturday);
  // const [isSaturday, setIsSaturday] = useState(false);
  // const onClickIsSaturday = () => {
  //   setIsSaturday(!isSaturday);
  // };

  const [sundayStartTime, setSundayStartTime] = useState("");
  const [sundayEndTime, setSundayEndTime] = useState("");
  const [isSunday, setIsSunday] = useState(false);
  console.log("sun", sundayStartTime, sundayEndTime, isSunday);
  // const [isSunday, setIsSunday] = useState(false);
  // const onClickIsSunday = () => {
  //   setIsSunday(!isSunday);
  // };

  // 시간 설정 모달창
  // const [modalOpen, setModalOpen] = useState(false);
  // const openModal = () => {
  //   setModalOpen(true);
  // };
  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  const [modalOpenMon, setModalOpenMon] = useState(false);
  const [modalOpenTue, setModalOpenTue] = useState(false);
  const [modalOpenWed, setModalOpenWed] = useState(false);
  const [modalOpenThu, setModalOpenThu] = useState(false);
  const [modalOpenFri, setModalOpenFri] = useState(false);
  const [modalOpenSat, setModalOpenSat] = useState(false);
  const [modalOpenSun, setModalOpenSun] = useState(false);

  const openModalMon = () => {
    setModalOpenMon(true);
  };
  const closeModalMon = () => {
    setModalOpenMon(false);
  };
  const openModalTue = () => {
    setModalOpenTue(true);
  };
  const closeModalTue = () => {
    setModalOpenTue(false);
  };
  const openModalWed = () => {
    setModalOpenWed(true);
  };
  const closeModalWed = () => {
    setModalOpenWed(false);
  };
  const openModalThu = () => {
    setModalOpenThu(true);
  };
  const closeModalThu = () => {
    setModalOpenThu(false);
  };
  const openModalFri = () => {
    setModalOpenFri(true);
  };
  const closeModalFri = () => {
    setModalOpenFri(false);
  };
  const openModalSat = () => {
    setModalOpenSat(true);
  };
  const closeModalSat = () => {
    setModalOpenSat(false);
  };
  const openModalSun = () => {
    setModalOpenSun(true);
  };
  const closeModalSun = () => {
    setModalOpenSun(false);
  };

  return (
    <div className="recruit-create">
      <div className="recruit-create-heading">
        <span>스터디 모집하기</span>
      </div>
      <div className="recruit-create-contents">
        <div className="recruit-create-content">
          <table className="recruit-create-content-category">
            <tbody>
              <tr>
                <td className="recruit-create-content-row a1">카테고리</td>
                <td>
                  <select></select>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="recruit-create-content">
          <table>
            <tbody>
              <tr>
                <td className="recruit-create-content-row a1">스터디 이름</td>
                <td className="recruit-create-content-row a2">
                  <input
                    className="recruit-input"
                    placeholder="스터디 이름을 입력하세요"
                  />
                </td>
              </tr>
              <tr>
                <td className="recruit-create-content-row a1">한줄 소개</td>
                <td className="recruit-create-content-row a2">
                  <input
                    className="recruit-input"
                    placeholder="간단한 소개를 작성해주세요"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="recruit-create-content">
          <table className="recruit-create-content__day">
            <tbody>
              <tr>
                <td className="recruit-create-content-row a1">스터디 요일</td>
                <td className="recruit-create-content-row day">
                  <button
                    id="day-picker"
                    className={`recruit-create-content-row day-name ${
                      isMonday ? "selected" : ""
                    }`}
                    onClick={openModalMon}
                  >
                    Mon
                  </button>
                  <TimePicker
                    open={modalOpenMon}
                    close={closeModalMon}
                    startTimeData={mondayStartTime}
                    endTimeData={mondayEndTime}
                    setStartTimeData={setMondayStartTime}
                    setEndTimeData={setMondayEndTime}
                    setIsDay={setIsMonday}
                  ></TimePicker>
                </td>
                <td className="recruit-create-content-row day">
                  <button
                    id="day-picker"
                    className={`recruit-create-content-row day-name ${
                      isTuesday ? "selected" : ""
                    }`}
                    onClick={openModalTue}
                  >
                    Tue
                  </button>
                  <TimePicker
                    open={modalOpenTue}
                    close={closeModalTue}
                    startTimeData={tuesdayStartTime}
                    endTimeData={tuesdayEndTime}
                    setStartTimeData={setTuesdayStartTime}
                    setEndTimeData={setTuesdayEndTime}
                    setIsDay={setIsTuesday}
                  ></TimePicker>
                </td>
                <td className="recruit-create-content-row day">
                  <button
                    id="day-picker"
                    className={`recruit-create-content-row day-name ${
                      isWednesday ? "selected" : ""
                    }`}
                    onClick={openModalWed}
                  >
                    Wed
                  </button>
                  <TimePicker
                    open={modalOpenWed}
                    close={closeModalWed}
                    startTimeData={wednesdayStartTime}
                    endTimeData={wednesdayEndTime}
                    setStartTimeData={setWednesdayStartTime}
                    setEndTimeData={setWednesdayEndTime}
                    setIsDay={setIsWednesday}
                  ></TimePicker>
                </td>
                <td className="recruit-create-content-row day">
                  <button
                    id="day-picker"
                    className={`recruit-create-content-row day-name ${
                      isThursday ? "selected" : ""
                    }`}
                    onClick={openModalThu}
                  >
                    Thu
                  </button>
                  <TimePicker
                    open={modalOpenThu}
                    close={closeModalThu}
                    startTimeData={thursdayStartTime}
                    endTimeData={thursdayEndTime}
                    setStartTimeData={setThursdayStartTime}
                    setEndTimeData={setThursdayEndTime}
                    setIsDay={setIsThursday}
                  ></TimePicker>
                </td>
                <td className="recruit-create-content-row day">
                  <button
                    id="day-picker"
                    className={`recruit-create-content-row day-name ${
                      isFriday ? "selected" : ""
                    }`}
                    onClick={openModalFri}
                  >
                    Fri
                  </button>
                  <TimePicker
                    open={modalOpenFri}
                    close={closeModalFri}
                    startTimeData={fridayStartTime}
                    endTimeData={fridayEndTime}
                    setStartTimeData={setFridayStartTime}
                    setEndTimeData={setFridayEndTime}
                    setIsDay={setIsFriday}
                  ></TimePicker>
                </td>
                <td className="recruit-create-content-row day">
                  <button
                    id="day-picker"
                    className={`recruit-create-content-row day-name ${
                      isSaturday ? "selected" : ""
                    }`}
                    onClick={openModalSat}
                  >
                    Sat
                  </button>
                  <TimePicker
                    open={modalOpenSat}
                    close={closeModalSat}
                    startTimeData={saturdayStartTime}
                    endTimeData={saturdayEndTime}
                    setStartTimeData={setSaturdayStartTime}
                    setEndTimeData={setSaturdayEndTime}
                    setIsDay={setIsSaturday}
                  ></TimePicker>
                </td>
                <td className="recruit-create-content-row day">
                  <button
                    id="day-picker"
                    className={`recruit-create-content-row day-name ${
                      isSunday ? "selected" : ""
                    }`}
                    onClick={openModalSun}
                  >
                    Sun
                  </button>
                  <TimePicker
                    open={modalOpenSun}
                    close={closeModalSun}
                    startTimeData={sundayStartTime}
                    endTimeData={sundayEndTime}
                    setStartTimeData={setSundayStartTime}
                    setEndTimeData={setSundayEndTime}
                    setIsDay={setIsSunday}
                  ></TimePicker>
                </td>
              </tr>
            </tbody>
          </table>
          <table>
            <tbody>
              <tr>
                <td className="recruit-create-content-row a1">모집 기간</td>
                <td className="recruit-create-content-row date">시작일</td>
                <td className="recruit-create-content-row a3">
                  <StudyDatePickerStart />
                </td>
                <td className="recruit-create-content-row date">종료일</td>
                <td className="recruit-create-content-row a3">
                  <StudyDatePicker />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="recruit-create-content">
          <div className="recruit-create-content-description">
            <span>스터디 소개</span>
            <textarea
              placeholder="스터디 모집 사항을 상세히 적어주세요"
              maxLength={1000}
            ></textarea>
          </div>
        </div>
      </div>
      <center>
        <button>스터디 개설</button>
      </center>
    </div>
  );
}
