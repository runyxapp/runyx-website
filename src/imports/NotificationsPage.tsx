import svgPaths from "./svg-zfixzmrmvz";
import imgFrame440 from "figma:asset/b6990531b555dfb221c90c239588361f5637b372.png";

function Runyx() {
  return (
    <div className="h-[15px] relative rounded-[4px] shrink-0 w-full" data-name="RUNYX">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[65px] relative size-full">
          <p className="font-['Barlow_Semi_Condensed:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#34322e] text-[16px]">NOTIFICATIONS</p>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-full">
      <Runyx />
    </div>
  );
}

function BackButtons() {
  return (
    <button className="block cursor-pointer h-[34.5px] relative shrink-0 w-[37.25px]" data-name="Back Buttons">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37.25 34.5">
        <g id="Back Buttons">
          <path d={svgPaths.p1700d200} stroke="var(--stroke-0, #34322E)" strokeWidth="0.5" />
          <path d={svgPaths.p1e326f00} id="Vector 7" stroke="var(--stroke-0, #CBCBCB)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5" />
        </g>
      </svg>
    </button>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <BackButtons />
    </div>
  );
}

function PageHeader() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Page Header">
      <Frame />
      <Frame1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-center w-full">
      <p className="font-['Barlow_Semi_Condensed:Light',sans-serif] relative shrink-0 text-[#cbcbcb] text-[24px]">New Event</p>
      <p className="font-['Barlow_Semi_Condensed:Medium',sans-serif] relative shrink-0 text-[#34322e] text-[12px]">1/21/2025 | 00:00</p>
    </div>
  );
}

function NotificationFields() {
  return (
    <div className="bg-[#151515] relative shrink-0 w-full" data-name="Notification Fields">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[normal] not-italic px-[16px] py-[20px] relative w-full">
          <Frame2 />
          <p className="font-['Barlow_Semi_Condensed:Medium',sans-serif] relative shrink-0 text-[#cbcbcb] text-[12px] w-full whitespace-pre-wrap">DECEMBER MONTHLY MADNESS is now available. Sign up for the monthly challenge now!</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#34322e] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-center w-full">
      <p className="font-['Barlow_Semi_Condensed:Light',sans-serif] relative shrink-0 text-[#cbcbcb] text-[24px]">New Event</p>
      <p className="font-['Barlow_Semi_Condensed:Medium',sans-serif] relative shrink-0 text-[#34322e] text-[12px]">1/21/2025 | 00:00</p>
    </div>
  );
}

function NotificationFields1() {
  return (
    <div className="bg-[#151515] relative shrink-0 w-full" data-name="Notification Fields">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[normal] not-italic px-[16px] py-[20px] relative w-full">
          <Frame4 />
          <p className="font-['Barlow_Semi_Condensed:Medium',sans-serif] relative shrink-0 text-[#cbcbcb] text-[12px] w-full whitespace-pre-wrap">DECEMBER MONTHLY MADNESS is now available. Sign up for the monthly challenge now!</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#34322e] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-center w-full">
      <p className="font-['Barlow_Semi_Condensed:Light',sans-serif] relative shrink-0 text-[#cbcbcb] text-[24px]">New Friend Request</p>
      <p className="font-['Barlow_Semi_Condensed:Medium',sans-serif] relative shrink-0 text-[#34322e] text-[12px]">1/21/2025 | 00:00</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 w-full">
      <Frame5 />
      <p className="font-['Barlow_Semi_Condensed:Medium',sans-serif] relative shrink-0 text-[#cbcbcb] text-[12px] w-full whitespace-pre-wrap">Li Qian Teng has sent you a friend request.</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#2ecc71] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Barlow_Semi_Condensed:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2ecc71] text-[12px] text-center">Accept</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#e74c3c] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Barlow_Semi_Condensed:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e74c3c] text-[12px] text-center">Reject</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function NotificationFields2() {
  return (
    <div className="bg-[#151515] relative shrink-0 w-full" data-name="Notification Fields">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame6 />
          <Frame7 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#34322e] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-center w-full">
      <p className="font-['Barlow_Semi_Condensed:Light',sans-serif] relative shrink-0 text-[#cbcbcb] text-[24px]">New Event</p>
      <p className="font-['Barlow_Semi_Condensed:Medium',sans-serif] relative shrink-0 text-[#34322e] text-[12px]">1/21/2025 | 00:00</p>
    </div>
  );
}

function NotificationFields3() {
  return (
    <div className="bg-[#151515] relative shrink-0 w-full" data-name="Notification Fields">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[normal] not-italic px-[16px] py-[20px] relative w-full">
          <Frame10 />
          <p className="font-['Barlow_Semi_Condensed:Medium',sans-serif] relative shrink-0 text-[#cbcbcb] text-[12px] w-full whitespace-pre-wrap">DECEMBER MONTHLY MADNESS is now available. Sign up for the monthly challenge now!</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#34322e] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-center w-full">
      <p className="font-['Barlow_Semi_Condensed:Light',sans-serif] relative shrink-0 text-[#cbcbcb] text-[24px]">New Party Request</p>
      <p className="font-['Barlow_Semi_Condensed:Medium',sans-serif] relative shrink-0 text-[#34322e] text-[12px]">1/21/2025 | 00:00</p>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start leading-[normal] not-italic relative shrink-0 w-full">
      <Frame12 />
      <p className="font-['Barlow_Semi_Condensed:Medium',sans-serif] relative shrink-0 text-[#cbcbcb] text-[12px] w-full whitespace-pre-wrap">Li Qian Teng has requested to join your party.</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#2ecc71] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Barlow_Semi_Condensed:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2ecc71] text-[12px] text-center">Accept</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[4px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#e74c3c] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Barlow_Semi_Condensed:Light',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#e74c3c] text-[12px] text-center">Reject</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full">
      <Frame14 />
      <Frame15 />
    </div>
  );
}

function NotificationFields4() {
  return (
    <div className="bg-[#151515] relative shrink-0 w-full" data-name="Notification Fields">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start justify-center px-[16px] py-[20px] relative w-full">
          <Frame11 />
          <Frame13 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#34322e] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-center w-full">
      <p className="font-['Barlow_Semi_Condensed:Light',sans-serif] relative shrink-0 text-[#cbcbcb] text-[24px]">New Event</p>
      <p className="font-['Barlow_Semi_Condensed:Medium',sans-serif] relative shrink-0 text-[#34322e] text-[12px]">1/21/2025 | 00:00</p>
    </div>
  );
}

function NotificationFields5() {
  return (
    <div className="bg-[#151515] relative shrink-0 w-full" data-name="Notification Fields">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[normal] not-italic px-[16px] py-[20px] relative w-full">
          <Frame16 />
          <p className="font-['Barlow_Semi_Condensed:Medium',sans-serif] relative shrink-0 text-[#cbcbcb] text-[12px] w-full whitespace-pre-wrap">DECEMBER MONTHLY MADNESS is now available. Sign up for the monthly challenge now!</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#34322e] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-center w-full">
      <p className="font-['Barlow_Semi_Condensed:Light',sans-serif] relative shrink-0 text-[#cbcbcb] text-[24px]">New Event</p>
      <p className="font-['Barlow_Semi_Condensed:Medium',sans-serif] relative shrink-0 text-[#34322e] text-[12px]">1/21/2025 | 00:00</p>
    </div>
  );
}

function NotificationFields6() {
  return (
    <div className="bg-[#151515] relative shrink-0 w-full" data-name="Notification Fields">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[normal] not-italic px-[16px] py-[20px] relative w-full">
          <Frame17 />
          <p className="font-['Barlow_Semi_Condensed:Medium',sans-serif] relative shrink-0 text-[#cbcbcb] text-[12px] w-full whitespace-pre-wrap">DECEMBER MONTHLY MADNESS is now available. Sign up for the monthly challenge now!</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#34322e] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 text-center w-full">
      <p className="font-['Barlow_Semi_Condensed:Light',sans-serif] relative shrink-0 text-[#cbcbcb] text-[24px]">New Event</p>
      <p className="font-['Barlow_Semi_Condensed:Medium',sans-serif] relative shrink-0 text-[#34322e] text-[12px]">1/21/2025 | 00:00</p>
    </div>
  );
}

function NotificationFields7() {
  return (
    <div className="bg-[#151515] relative shrink-0 w-full" data-name="Notification Fields">
      <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-start justify-center leading-[normal] not-italic px-[16px] py-[20px] relative w-full">
          <Frame18 />
          <p className="font-['Barlow_Semi_Condensed:Medium',sans-serif] relative shrink-0 text-[#cbcbcb] text-[12px] w-full whitespace-pre-wrap">DECEMBER MONTHLY MADNESS is now available. Sign up for the monthly challenge now!</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#34322e] border-b-[0.5px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-center min-h-px min-w-px overflow-x-clip overflow-y-auto relative w-full">
      <NotificationFields />
      <NotificationFields1 />
      <NotificationFields2 />
      <NotificationFields3 />
      <NotificationFields4 />
      <NotificationFields5 />
      <NotificationFields6 />
      <NotificationFields7 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="absolute h-[20px] left-0 top-[77px] w-[393px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame440} />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#151515] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Content">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-center px-[20px] relative size-full">
          <PageHeader />
          <Frame3 />
          <Frame22 />
        </div>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[20px] relative w-[393px]">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame440} />
    </div>
  );
}

function NavBarIcons() {
  return (
    <div className="h-[18.75px] relative shrink-0 w-[20px]" data-name="Nav Bar Icons">
      <div className="absolute inset-[-5.33%_-5%_-6.67%_-5%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 21">
          <g id="Nav Bar Icons">
            <path d={svgPaths.p2bffd90} fill="url(#paint0_linear_35_751)" id="path58" />
          </g>
          <defs>
            <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_35_751" x1="-31.4875" x2="53.7625" y1="19.46" y2="19.46">
              <stop offset="0.3" stopColor="#9100FF" />
              <stop offset="0.7" stopColor="#D70004" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function NavBarElement() {
  return (
    <div className="bg-[#151515] content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[68px] items-center justify-center min-h-px min-w-px overflow-clip relative" data-name="Nav Bar Element">
      <NavBarIcons />
      <p className="bg-clip-text bg-gradient-to-r font-['Barlow_Semi_Condensed:Medium',sans-serif] from-[#9100ff] leading-[normal] not-italic relative shrink-0 text-[12px] text-center to-[#d70004]" style={{ WebkitTextFillColor: "transparent" }}>
        HOME
      </p>
    </div>
  );
}

function NavBarIcons1() {
  return (
    <div className="h-[18.75px] relative shrink-0 w-[20px]" data-name="Nav Bar Icons">
      <div className="absolute inset-[-9.33%_0_-8%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 22">
          <g id="Nav Bar Icons">
            <path d={svgPaths.p248a5200} fill="var(--fill-0, #34322E)" id="path40" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame19() {
  return <div className="h-[17px] shrink-0 w-[54px]" />;
}

function NavBarElement1() {
  return (
    <div className="bg-[#151515] content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[68px] items-center justify-center min-h-px min-w-px overflow-clip relative" data-name="Nav Bar Element">
      <NavBarIcons1 />
      <Frame19 />
    </div>
  );
}

function NavBarIcons2() {
  return (
    <div className="h-[18.75px] relative shrink-0 w-[20px]" data-name="Nav Bar Icons">
      <div className="absolute inset-[-2.64%_-22.22%_-8.41%_-22.22%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.8889 20.8219">
          <g id="Nav Bar Icons">
            <path d={svgPaths.p1ef545f0} fill="var(--fill-0, #34322E)" id="rect2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Frame20() {
  return <div className="h-[17px] shrink-0 w-[54px]" />;
}

function NavBarElement2() {
  return (
    <div className="bg-[#151515] content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[68px] items-center justify-center min-h-px min-w-px overflow-clip relative" data-name="Nav Bar Element">
      <NavBarIcons2 />
      <Frame20 />
    </div>
  );
}

function Layer() {
  return (
    <div className="absolute inset-[-18.95%_-2.69%_-8.38%_0]" data-name="layer2">
      <div className="absolute inset-[-1.07%_-3.1%_-0.17%_-1.46%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.4754 24.1679">
          <g id="layer2">
            <path d={svgPaths.p2f90c600} id="path22" stroke="var(--stroke-0, #34322E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.275" />
            <path d={svgPaths.p39c75200} fill="var(--fill-0, #34322E)" id="path29" />
            <g id="g13">
              <path d={svgPaths.p24862580} id="path1" stroke="var(--stroke-0, #34322E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.275" />
              <path d={svgPaths.p37254e80} fill="var(--fill-0, #34322E)" id="path10" />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

function NavBarIcons3() {
  return (
    <div className="h-[18.75px] relative shrink-0 w-[20px]" data-name="Nav Bar Icons">
      <Layer />
    </div>
  );
}

function Frame21() {
  return <div className="h-[17px] shrink-0 w-[54px]" />;
}

function NavBarElement3() {
  return (
    <div className="bg-[#151515] content-stretch flex flex-[1_0_0] flex-col gap-[4px] h-[68px] items-center justify-center min-h-px min-w-px overflow-clip relative" data-name="Nav Bar Element">
      <NavBarIcons3 />
      <Frame21 />
    </div>
  );
}

function BottomNavBar() {
  return (
    <div className="bg-[#151515] relative rounded-[12px] shadow-[0px_-2px_4px_0px_rgba(0,0,0,0.15)] shrink-0 w-full" data-name="Bottom Nav Bar">
      <div className="flex flex-row items-end justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-end justify-center pb-[20px] px-[12px] relative w-full">
          <NavBarElement />
          <NavBarElement1 />
          <NavBarElement2 />
          <NavBarElement3 />
        </div>
      </div>
    </div>
  );
}

function ContentNavBar() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-end min-h-px min-w-px pt-[59px] relative w-full" data-name="Content + Nav Bar">
      <Content />
      <div className="absolute flex h-[20px] items-center justify-center left-0 top-[744px] w-[393px]">
        <div className="-scale-y-100 flex-none">
          <Frame23 />
        </div>
      </div>
      <BottomNavBar />
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-h-px min-w-px pt-[2px] relative" data-name="Time">
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[#cbcbcb] text-[17px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
        9:41
      </p>
    </div>
  );
}

function DynamicIslandSpacer() {
  return <div className="h-[37px] rounded-[100px] shrink-0 w-[125px]" data-name="Dynamic Island spacer" />;
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 27.328 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, #CBCBCB)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, #CBCBCB)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, #CBCBCB)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[7px] h-[22px] items-center justify-center min-h-px min-w-px pt-px relative" data-name="Levels">
      <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
          <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, #CBCBCB)" fillRule="evenodd" id="Cellular Connection" />
        </svg>
      </div>
      <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
          <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, #CBCBCB)" fillRule="evenodd" id="Wifi" />
        </svg>
      </div>
      <Battery />
    </div>
  );
}

function StatusBarIPhone() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center justify-center left-[-4.5px] px-[16px] py-[11px] top-0 w-[402px]" data-name="Status bar - iPhone">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

function HomeIndicator() {
  return (
    <div className="absolute h-[20px] left-0 top-[832px] w-[393px]" data-name="Home Indicator">
      <div className="-translate-x-1/2 absolute bottom-[8px] flex h-[5px] items-center justify-center left-[calc(50%+0.5px)] w-[144px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="bg-[#cbcbcb] h-[5px] rounded-[100px] w-[144px]" data-name="Home Indicator" />
        </div>
      </div>
    </div>
  );
}

export default function NotificationsPage() {
  return (
    <div className="bg-[#151515] content-stretch flex flex-col items-center relative size-full" data-name="Notifications Page">
      <ContentNavBar />
      <StatusBarIPhone />
      <HomeIndicator />
    </div>
  );
}