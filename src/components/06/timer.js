import SectionType1 from "../common/sectionType1";
import styled from "styled-components";
import * as CSTM from "../../custom/custom";
import moment from "moment";
import { useEffect, useState, useCallback } from "react";

const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Table = styled.table`
  text-align: center;
  width: 65%;
  font-size: 1rem;
  tr {
    height: 30px;
  }
`;

const TimeLeftParagraph = styled.p`
  text-align: center;
  margin-top: 30px;
`;

function Timer() {
  const weddingDate = CSTM.결혼식날짜; // 결혼식 날짜 가져오기

  // calculateTimeLeft를 useCallback으로 메모이제이션
  const calculateTimeLeft = useCallback(() => {
    const now = moment();
    const duration = moment.duration(weddingDate.diff(now)); // 남은 시간 계산

    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
  }, [weddingDate]); // weddingDate가 변경될 때만 이 함수가 재생성됨

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      const now = moment();
      const isTimePassed = now.isAfter(weddingDate);
      if (isTimePassed) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft(calculateTimeLeft());
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [weddingDate, calculateTimeLeft]); // 이제 calculateTimeLeft를 의존성 배열에 포함

  return (
    <SectionType1>
      <TableWrapper>
        <Table>
          <tr>
            <th>DAY</th>
            <th></th>
            <th>HOUR</th>
            <th></th>
            <th>MIN</th>
            <th></th>
            <th>SEC</th>
          </tr>
          <tr>
            <td id="daysLeft" style={{ color: "#0D70A7", fontWeight: 600 }}>
              {timeLeft.days}
            </td>
            <td>:</td>
            <td id="hoursLeft">{String(timeLeft.hours).padStart(2, "0")}</td>
            <td>:</td>
            <td id="minutesLeft">
              {String(timeLeft.minutes).padStart(2, "0")}
            </td>
            <td>:</td>
            <td id="secondsLeft">
              {String(timeLeft.seconds).padStart(2, "0")}
            </td>
          </tr>
        </Table>
      </TableWrapper>
      <TimeLeftParagraph>
        결혼까지 남은 시간.&nbsp;
        <span style={{ color: "#0D70A7", fontWeight: 600 }}>
          {timeLeft.days}
        </span>
        일
      </TimeLeftParagraph>
    </SectionType1>
  );
}

export default Timer;
