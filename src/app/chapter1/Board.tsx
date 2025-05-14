"use client";

import DataText from "../../../components/DataText";
import Row from "../../../components/Row";
import TdData from "../../../components/TdData";
import TdDataBig from "../../../components/TdDataBig";
import ThData from "../../../components/ThData";

export default function Board() {
  return (
    <div className="absolute left-[12px] right-[12px] bottom-[80px]">
      <img src="/images/test/test-board.svg" alt="사주 보드이미지" />
      <h3 className="text-responsive-16 text-center absolute left-0 right-0 top-[5%]">
        김로켓님의 사주
      </h3>
      <p className="text-responsive-20 font-bold text-center absolute left-0 right-0 top-[10%]">
        1980년 8월27일 08:10
      </p>
      <table className="absolute left-[7%] top-[18%] w-[86%] h-[75%]">
        <thead>
          <Row top="top-0" height="h-[9.5%]">
            <ThData left="left-[0%]" width="w-[15.5%]">
              <DataText textSize="text-responsive-21"></DataText>
            </ThData>
            <ThData left="left-[15.5%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-21">時</DataText>
            </ThData>
            <ThData left="left-[37%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-21">日</DataText>
            </ThData>
            <ThData left="left-[58%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-21">月</DataText>
            </ThData>
            <ThData left="left-[79%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-21">年</DataText>
            </ThData>
          </Row>
        </thead>
        <tbody>
          <Row top="top-[9.5%]" height="h-[9%]">
            <ThData left="left-[0%]" width="w-[15.5%]">
              <DataText textSize="text-responsive-15">十星</DataText>
              <DataText textSize="text-responsive-10">(십성)</DataText>
            </ThData>
            <TdData left="left-[15.5%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-15">傷官</DataText>
              <DataText textSize="text-responsive-10">(상관)</DataText>
            </TdData>
            <TdData left="left-[37%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-15">傷官</DataText>
              <DataText textSize="text-responsive-10">(상관)</DataText>
            </TdData>
            <TdData left="left-[58%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-15">傷官</DataText>
              <DataText textSize="text-responsive-10">(상관)</DataText>
            </TdData>
            <TdData left="left-[79%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-15">傷官</DataText>
              <DataText textSize="text-responsive-10">(상관)</DataText>
            </TdData>
          </Row>
          <Row top="top-[18.3%]" height="h-[14%]">
            <ThData left="left-[0%]" width="w-[15.5%]">
              <DataText textSize="text-responsive-12">十星</DataText>
              <DataText textSize="text-responsive-8">(십성)</DataText>
            </ThData>
            <TdDataBig left="left-[15.5%]" width="w-[21.1%]" bg="black">
              <DataText textSize="text-responsive-8">임</DataText>
              <DataText textSize="text-responsive-25" className="leading-tight">壬</DataText>
              <DataText textSize="text-responsive-8">陽水</DataText>
            </TdDataBig>
            <TdDataBig left="left-[37%]" width="w-[21.1%]" bg="red">
              <DataText textSize="text-responsive-8">임</DataText>
              <DataText textSize="text-responsive-25" className="leading-tight">壬</DataText>
              <DataText textSize="text-responsive-8">陽水</DataText>
            </TdDataBig>
            <TdDataBig left="left-[58%]" width="w-[21.1%]" bg="transparent">
              <DataText textSize="text-responsive-8">임</DataText>
              <DataText textSize="text-responsive-25" className="leading-tight">壬</DataText>
              <DataText textSize="text-responsive-8">陽水</DataText>
            </TdDataBig>
            <TdDataBig left="left-[79%]" width="w-[21.1%]" bg="black">
              <DataText textSize="text-responsive-8">임</DataText>
              <DataText textSize="text-responsive-25" className="leading-tight">壬</DataText>
              <DataText textSize="text-responsive-8">陽水</DataText>
            </TdDataBig>
          </Row>
          <Row top="top-[32.5%]" height="h-[14%]">
            <ThData left="left-[0%]" width="w-[15.5%]">
              <DataText textSize="text-responsive-12">十星</DataText>
              <DataText textSize="text-responsive-8">(십성)</DataText>
            </ThData>
            <TdDataBig left="left-[15.5%]" width="w-[21.1%]" bg="black">
              <DataText textSize="text-responsive-8">임</DataText>
              <DataText textSize="text-responsive-25" className="leading-tight">壬</DataText>
              <DataText textSize="text-responsive-8">陽水</DataText>
            </TdDataBig>
            <TdDataBig left="left-[37%]" width="w-[21.1%]" bg="black">
              <DataText textSize="text-responsive-8">임</DataText>
              <DataText textSize="text-responsive-25" className="leading-tight">壬</DataText>
              <DataText textSize="text-responsive-8">陽水</DataText>
            </TdDataBig>
            <TdDataBig left="left-[58%]" width="w-[21.1%]" bg="green">
              <DataText textSize="text-responsive-8">임</DataText>
              <DataText textSize="text-responsive-25" className="leading-tight">壬</DataText>
              <DataText textSize="text-responsive-8">陽水</DataText>
            </TdDataBig>
            <TdDataBig left="left-[79%]" width="w-[21.1%]" bg="black">
              <DataText textSize="text-responsive-8">임</DataText>
              <DataText textSize="text-responsive-25" className="leading-tight">壬</DataText>
              <DataText textSize="text-responsive-8">陽水</DataText>
            </TdDataBig>
          </Row>
          <Row top="top-[46.8%]" height="h-[9%]">
            <ThData left="left-[0%]" width="w-[15.5%]">
              <DataText textSize="text-responsive-15">十星</DataText>
              <DataText textSize="text-responsive-10">(십성)</DataText>
            </ThData>
            <TdData left="left-[15.5%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-15">傷官</DataText>
              <DataText textSize="text-responsive-10">(상관)</DataText>
            </TdData>
            <TdData left="left-[37%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-15">傷官</DataText>
              <DataText textSize="text-responsive-10">(상관)</DataText>
            </TdData>
            <TdData left="left-[58%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-15">傷官</DataText>
              <DataText textSize="text-responsive-10">(상관)</DataText>
            </TdData>
            <TdData left="left-[79%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-15">傷官</DataText>
              <DataText textSize="text-responsive-10">(상관)</DataText>
            </TdData>
          </Row>
          <Row top="top-[56.2%]" height="h-[9%]">
            <ThData left="left-[0%]" width="w-[15.5%]">
              <DataText textSize="text-responsive-15">十星</DataText>
              <DataText textSize="text-responsive-10">(십성)</DataText>
            </ThData>
            <TdData left="left-[15.5%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-15">傷官</DataText>
              <DataText textSize="text-responsive-10">(상관)</DataText>
            </TdData>
            <TdData left="left-[37%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-15">傷官</DataText>
              <DataText textSize="text-responsive-10">(상관)</DataText>
            </TdData>
            <TdData left="left-[58%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-15">傷官</DataText>
              <DataText textSize="text-responsive-10">(상관)</DataText>
            </TdData>
            <TdData left="left-[79%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-15">傷官</DataText>
              <DataText textSize="text-responsive-10">(상관)</DataText>
            </TdData>
          </Row>
          <Row top="top-[65.5%]" height="h-[9%]">
            <ThData left="left-[0%]" width="w-[15.5%]">
              <DataText textSize="text-responsive-10">十二運星</DataText>
              <DataText textSize="text-responsive-8">(십이운성)</DataText>
            </ThData>
            <TdData left="left-[15.5%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-15">傷官</DataText>
              <DataText textSize="text-responsive-10">(상관)</DataText>
            </TdData>
            <TdData left="left-[37%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-15">傷官</DataText>
              <DataText textSize="text-responsive-10">(상관)</DataText>
            </TdData>
            <TdData left="left-[58%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-15">傷官</DataText>
              <DataText textSize="text-responsive-10">(상관)</DataText>
            </TdData>
            <TdData left="left-[79%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-15">傷官</DataText>
              <DataText textSize="text-responsive-10">(상관)</DataText>
            </TdData>
          </Row>
          <Row top="top-[75%]" height="h-[25%]">
            <ThData left="left-[0%]" width="w-[15.5%]">
              <DataText textSize="text-responsive-10">十二運星</DataText>
              <DataText textSize="text-responsive-8">(십이운성)</DataText>
            </ThData>
            <TdData left="left-[15.5%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-15">傷官</DataText>
              <DataText textSize="text-responsive-10">(상관)</DataText>
            </TdData>
            <TdData left="left-[37%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-15">傷官</DataText>
              <DataText textSize="text-responsive-10">(상관)</DataText>
            </TdData>
            <TdData left="left-[58%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-15">傷官</DataText>
              <DataText textSize="text-responsive-10">(상관)</DataText>
            </TdData>
            <TdData left="left-[79%]" width="w-[21.1%]">
              <DataText textSize="text-responsive-15">傷官</DataText>
              <DataText textSize="text-responsive-10">(상관)</DataText>
            </TdData>
          </Row>
        </tbody>
      </table>
    </div>
  );
}
