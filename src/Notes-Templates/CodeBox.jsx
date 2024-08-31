import { useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/default-highlight";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default function CodeBox({ code, place, justbox , clipboard = true , lang = "jsx" }) {
  let [copied, setCopied] = useState(false);

  return (
    <div className="py-[1rem] inline-block min-w-[30rem]">
      {justbox ? null :
      <div className="flex bg-[#1E293B] pt-2 rounded-t-[6px]">
        <div className="border-b-[2px] border-[#149ECA] text-white px-[1rem] pt-[0.3rem]">
          <p>{place}</p>
        </div>
        <div id="copy" className="w-full flex flex-row-reverse p-[0.25rem_1rem] rounded-ss-[6px] bg-[#33415580]">
        {clipboard ? copied ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30px"
              className="cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.0998 2H12.8998C9.81668 2 8.37074 3.09409 8.06951 5.73901C8.00649 6.29235 8.46476 6.75 9.02167 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V14.9781C17.2498 15.535 17.7074 15.9933 18.2608 15.9303C20.9057 15.629 21.9998 14.1831 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z"
                fill="#149ECA"
              />
              <path
                d="M11.1 8H6.9C3.4 8 2 9.4 2 12.9V17.1C2 20.6 3.4 22 6.9 22H11.1C14.6 22 16 20.6 16 17.1V12.9C16 9.4 14.6 8 11.1 8ZM12.29 13.65L8.58 17.36C8.44 17.5 8.26 17.57 8.07 17.57C7.88 17.57 7.7 17.5 7.56 17.36L5.7 15.5C5.42 15.22 5.42 14.77 5.7 14.49C5.98 14.21 6.43 14.21 6.71 14.49L8.06 15.84L11.27 12.63C11.55 12.35 12 12.35 12.28 12.63C12.56 12.91 12.57 13.37 12.29 13.65Z"
                fill="#149ECA"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              onClick={() => {
                navigator.clipboard.writeText(code).then(() => {
                  setCopied(true);
                  setTimeout(() => {
                    setCopied(false);
                  }, 3000);
                });
              }}
              width="30px"
              className="cursor-pointer"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
                fill="#ffffff"
              />
              <path
                d="M17.0998 2H12.8998C9.81668 2 8.37074 3.09409 8.06951 5.73901C8.00649 6.29235 8.46476 6.75 9.02167 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V14.9781C17.2498 15.535 17.7074 15.9933 18.2608 15.9303C20.9057 15.629 21.9998 14.1831 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z"
                fill="#ffffff"
              />
            </svg>
          )
         : <svg
         xmlns="http://www.w3.org/2000/svg"
         width="30px"
         viewBox="0 0 24 24"
         fill="none"
       >
         <path
           d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z"
           fill="none"
         />
         <path
           d="M17.0998 2H12.8998C9.81668 2 8.37074 3.09409 8.06951 5.73901C8.00649 6.29235 8.46476 6.75 9.02167 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V14.9781C17.2498 15.535 17.7074 15.9933 18.2608 15.9303C20.9057 15.629 21.9998 14.1831 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z"
           fill="none"
         />
       </svg>}
        </div>
      </div>}
      <SyntaxHighlighter
        style={atomOneDark}
        language={lang}
        customStyle={{
          padding: "1rem",
          borderRadius: justbox ? "6px 6px 6px 6px" : "0 0 6px 6px" ,
          display: "inline-block",
          maxWidth: "80rem",
          minWidth: "30rem",
          background: "#1E293B",
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
