import svgPaths from "./svg-cn1bb5bfku";

function RunyxLogo() {
  return (
    <div className="h-[60.797px] relative shrink-0 w-[63.56px]" data-name="RUNYX logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 63.5596 60.7969">
        <g clipPath="url(#clip0_1_201)" id="RUNYX logo">
          <path d={svgPaths.p30a10b80} fill="url(#paint0_linear_1_201)" id="Union" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_201" x1="-90.9696" x2="155.324" y1="56.3384" y2="56.3384">
            <stop offset="0.264423" stopColor="#9100FF" />
            <stop offset="0.783654" stopColor="#D70004" />
          </linearGradient>
          <clipPath id="clip0_1_201">
            <rect fill="white" height="60.7969" width="63.5596" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <RunyxLogo />
    </div>
  );
}

function Icons() {
  return (
    <div className="h-[22px] relative shrink-0 w-[21.56px]" data-name="Icons">
      <div className="absolute inset-[0_-2.04%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0002 22">
          <g id="Icons">
            <path d={svgPaths.p352beb00} id="Vector" stroke="var(--stroke-0, #EAEAEA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function SignUpFields() {
  return (
    <div className="bg-[#1a1a1a] relative rounded-[4px] shrink-0 w-full" data-name="Sign Up Fields">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[16px] py-[12px] relative w-full">
          <Icons />
          <p className="css-ew64yg font-['Roboto_Condensed:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#34322e] text-[16px] text-center">Email</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#34322e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center relative shrink-0 w-full">
      <p className="bg-clip-text bg-gradient-to-r css-4hzbpn font-['Roboto_Condensed:Italic',sans-serif] font-normal from-[#9100ff] from-[40.661%] italic leading-[normal] relative shrink-0 text-[36px] to-[#d70004] to-[160.54%] tracking-[-1.08px] w-full" style={{ WebkitTextFillColor: "transparent" }}>
        FORGOT PASSWORD?
      </p>
      <p className="css-4hzbpn font-['Roboto_Condensed:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#eaeaea] text-[16px] w-full">Please enter the email address associated with your account</p>
      <SignUpFields />
    </div>
  );
}

function SignUpFields1() {
  return (
    <div className="bg-gradient-to-r from-[#9100ff] from-[40.661%] relative rounded-[4px] shrink-0 to-[#d70004] to-[160.54%] w-full" data-name="Sign Up Fields">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative w-full">
          <p className="css-ew64yg font-['Roboto_Condensed:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#eaeaea] text-[16px] text-center">SEND CODE</p>
        </div>
      </div>
    </div>
  );
}

function SignUpFields2() {
  return (
    <button className="bg-[#1a1a1a] cursor-pointer relative rounded-[4px] shrink-0 w-full" data-name="Sign Up Fields">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[12px] relative w-full">
          <p className="css-ew64yg font-['Roboto_Condensed:Light',sans-serif] font-light leading-[normal] relative shrink-0 text-[#eaeaea] text-[16px] text-center">Go back</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#34322e] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </button>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <SignUpFields1 />
      <SignUpFields2 />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#1a1a1a] flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="Content">
      <div className="flex flex-col items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-center justify-between pb-[40px] pt-[24px] px-[32px] relative size-full">
          <Frame1 />
          <Frame />
          <Frame2 />
        </div>
      </div>
    </div>
  );
}

function ContentNavBar() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center justify-end min-h-px min-w-px pt-[59px] relative w-full" data-name="Content + Nav Bar">
      <Content />
    </div>
  );
}

function Time() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[22px] items-center justify-center min-h-px min-w-px pt-[2px] relative" data-name="Time">
      <p className="css-ew64yg font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[#eaeaea] text-[17px] text-center" style={{ fontVariationSettings: "'wdth' 100" }}>
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
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, #EAEAEA)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, #EAEAEA)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, #EAEAEA)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[7px] h-[22px] items-center justify-center min-h-px min-w-px pt-px relative" data-name="Levels">
      <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(234, 234, 234, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.2 12.2264">
            <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, #EAEAEA)" fillRule="evenodd" id="Cellular Connection" />
          </svg>
        </div>
      </div>
      <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(234, 234, 234, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.1417 12.3283">
            <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, #EAEAEA)" fillRule="evenodd" id="Wifi" />
          </svg>
        </div>
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
          <div className="bg-[#eaeaea] h-[5px] rounded-[100px] w-[144px]" data-name="Home Indicator" />
        </div>
      </div>
    </div>
  );
}

export default function ForgotPasswordPage() {
  return (
    <div className="bg-[#1a1a1a] content-stretch flex flex-col items-center relative size-full" data-name="Forgot Password Page">
      <ContentNavBar />
      <StatusBarIPhone />
      <HomeIndicator />
    </div>
  );
}