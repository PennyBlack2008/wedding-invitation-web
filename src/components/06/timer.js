import SectionType1 from "../common/sectionType1";
import styled from "styled-components";

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
              119
            </td>
            <td>:</td>
            <td id="hoursLeft">03</td>
            <td>:</td>
            <td id="minutesLeft">10</td>
            <td>:</td>
            <td id="secondsLeft">28</td>
          </tr>
        </Table>
      </TableWrapper>
      <TimeLeftParagraph>
        결혼까지 남은 시간.&nbsp;
        <span style={{ color: "#0D70A7", fontWeight: 600 }}>00</span>일
      </TimeLeftParagraph>
    </SectionType1>
  );
}

export default Timer;
