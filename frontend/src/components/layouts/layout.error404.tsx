export default function Error404() {
    return (
        <div className="h-screen flex justify-center items-center text-center font-ipx">
            <div>
                <div className="animate-bounce -mt-60 mb-10 ml-14">
                    <svg
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 512 512"
                        xmlSpace="preserve"
                        fill="#000000"
                        width="100"
                        height="100"
                    >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <circle fill="#E04F5F" cx="256" cy="256" r="256"></circle>
                            <g>
                                <path
                                    fill="#FFFFFF"
                                    d="M147.592,316v-34.496h-61.48v-16.728l55.416-84.688h30.32v81.968h17.568v19.448h-17.568V316H147.592 z M147.592,262.056V225.04c0-7.736,0.208-15.68,0.832-23.632h-0.832c-4.176,8.576-7.736,15.472-11.912,23l-24.88,37.224 l-0.208,0.416h37V262.056z"
                                ></path>
                                <path
                                    fill="#FFFFFF"
                                    d="M298.976,247.208c0,43.696-17.144,71.088-49.552,71.088c-31.368,0-48.096-28.44-48.304-69.832 c0-42.24,17.984-70.672,49.768-70.672C283.712,177.784,298.976,207.056,298.976,247.208z M227.048,248.464 c-0.208,33.04,8.992,50.176,23.208,50.176c15.056,0,23-18.4,23-51.016c0-31.576-7.52-50.184-23-50.184 C236.456,197.44,226.832,214.376,227.048,248.464z"
                                ></path>
                                <path
                                    fill="#FFFFFF"
                                    d="M371.736,316v-34.496h-61.48v-16.728l55.416-84.688h30.32v81.968h17.568v19.448h-17.568V316H371.736 z M371.736,262.056V225.04c0-7.736,0.208-15.68,0.832-23.632h-0.832c-4.176,8.576-7.736,15.472-11.912,23l-24.88,37.224 l-0.208,0.416h37V262.056z"
                                ></path>
                            </g>
                        </g>
                    </svg>
                </div>
                <p className="mb-4 text-2xl font-bold text-gray-600">ไม่พบหน้าที่คุณค้นหา</p>
                <p className="mt-4 text-gray-600">
                    คลิกเพื่อกลับไปที่{' '}
                    <a href="/" className="text-blue-500">
                        home
                    </a>
                    .
                </p>
            </div>
        </div>
    );
}