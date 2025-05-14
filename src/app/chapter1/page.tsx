"use client";

import Board from "./Board";

export default function HomePage() {
  return (
    <>
      <div className="relative">
        <img
          src="/images/test/test-bg.png"
          alt="만화이미지"
          className="w-full bg-[#F3F2EF]"
        />
        <p className="text-responsive-16 text-center absolute left-[20%] top-[32%]">
          이제 본격적으로 <br />
          OO님의 사주팔자를 <br />
          분석해볼 차례네요.
        </p>
        <p className="text-responsive-16 text-center absolute left-[20.5%] top-[49.5%]">
          제가 oo님의 사주를 <br />
          보기 쉽게 표로 정리했어요
        </p>
        <Board />
      </div>
    </>
  );
}
