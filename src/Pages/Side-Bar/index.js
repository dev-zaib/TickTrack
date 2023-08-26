import React, {useState} from "react";
import {Link} from "react-router-dom";

const Sidebar = () => {
    const [activeButton, setActiveButton] = useState(null)
    const handleButtonClick = (buttonName) =>{
        setActiveButton(buttonName);
    }
    return(
        <>
            <div>
                <div className="flex flex-col">
                        <ul className=" w-80 h-screen">
                            {/*<Link to="/task">*/}
                                <button className={` ${activeButton === "Task" ? "bg-black text-white" : "text-black"} font-bold text-2xl w-4/5 py-3.5 rounded-r-full flex pl-10 mt-5 items-center`} onClick={()=> handleButtonClick("Task")}>
                                    <div className="mr-4">
                                        <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.125 14.2909H5.625C5.32663 14.2909 5.04048 14.4116 4.8295 14.6264C4.61853 14.8412 4.5 15.1326 4.5 15.4364C4.5 15.7402 4.61853 16.0315 4.8295 16.2463C5.04048 16.4612 5.32663 16.5818 5.625 16.5818H10.125C10.4234 16.5818 10.7095 16.4612 10.9205 16.2463C11.1315 16.0315 11.25 15.7402 11.25 15.4364C11.25 15.1326 11.1315 14.8412 10.9205 14.6264C10.7095 14.4116 10.4234 14.2909 10.125 14.2909ZM14.625 2.83638H13.2975C13.0654 2.16795 12.6359 1.58898 12.0679 1.17884C11.5 0.768696 10.8213 0.547464 10.125 0.545471H7.875C7.17869 0.547464 6.50002 0.768696 5.93205 1.17884C5.36408 1.58898 4.9346 2.16795 4.7025 2.83638H3.375C2.47989 2.83638 1.62145 3.19843 0.988515 3.84287C0.355579 4.48731 0 5.36136 0 6.27274V20.0182C0 20.9296 0.355579 21.8036 0.988515 22.4481C1.62145 23.0925 2.47989 23.4546 3.375 23.4546H14.625C15.5201 23.4546 16.3786 23.0925 17.0115 22.4481C17.6444 21.8036 18 20.9296 18 20.0182V6.27274C18 5.36136 17.6444 4.48731 17.0115 3.84287C16.3786 3.19843 15.5201 2.83638 14.625 2.83638ZM6.75 3.98184C6.75 3.67804 6.86853 3.38669 7.0795 3.17188C7.29048 2.95706 7.57663 2.83638 7.875 2.83638H10.125C10.4234 2.83638 10.7095 2.95706 10.9205 3.17188C11.1315 3.38669 11.25 3.67804 11.25 3.98184V5.12729H6.75V3.98184ZM15.75 20.0182C15.75 20.322 15.6315 20.6133 15.4205 20.8282C15.2095 21.043 14.9234 21.1637 14.625 21.1637H3.375C3.07663 21.1637 2.79048 21.043 2.5795 20.8282C2.36853 20.6133 2.25 20.322 2.25 20.0182V6.27274C2.25 5.96895 2.36853 5.6776 2.5795 5.46279C2.79048 5.24797 3.07663 5.12729 3.375 5.12729H4.5V6.27274C4.5 6.57654 4.61853 6.86789 4.8295 7.0827C5.04048 7.29752 5.32663 7.4182 5.625 7.4182H12.375C12.6734 7.4182 12.9595 7.29752 13.1705 7.0827C13.3815 6.86789 13.5 6.57654 13.5 6.27274V5.12729H14.625C14.9234 5.12729 15.2095 5.24797 15.4205 5.46279C15.6315 5.6776 15.75 5.96895 15.75 6.27274V20.0182ZM12.375 9.70911H5.625C5.32663 9.70911 5.04048 9.82979 4.8295 10.0446C4.61853 10.2594 4.5 10.5508 4.5 10.8546C4.5 11.1584 4.61853 11.4497 4.8295 11.6645C5.04048 11.8793 5.32663 12 5.625 12H12.375C12.6734 12 12.9595 11.8793 13.1705 11.6645C13.3815 11.4497 13.5 11.1584 13.5 10.8546C13.5 10.5508 13.3815 10.2594 13.1705 10.0446C12.9595 9.82979 12.6734 9.70911 12.375 9.70911Z" fill={`${activeButton === "Task" ? "white":"black"}`}/>
                                        </svg>
                                    </div>
                                    Task
                                </button>
                            {/*</Link>*/}
                            {/*<Link to="/location">*/}
                                <button className={` ${activeButton === "Location" ? "bg-black text-white" : "text-black"} font-bold text-2xl w-4/5 py-3.5 rounded-r-full flex pl-10 mt-5 items-center`} onClick={()=>handleButtonClick("Location")}>
                                    <div className="mr-4">
                                        <svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9 0.545471C6.61305 0.545471 4.32387 1.51092 2.63604 3.22943C0.948212 4.94794 0 7.27874 0 9.70908C0 15.8945 7.93125 22.8818 8.26875 23.1796C8.47252 23.357 8.73185 23.4546 9 23.4546C9.26815 23.4546 9.52748 23.357 9.73125 23.1796C10.125 22.8818 18 15.8945 18 9.70908C18 7.27874 17.0518 4.94794 15.364 3.22943C13.6761 1.51092 11.3869 0.545471 9 0.545471ZM9 20.7627C6.60375 18.4718 2.25 13.5349 2.25 9.70908C2.25 7.88632 2.96116 6.13822 4.22703 4.84934C5.4929 3.56046 7.20979 2.83637 9 2.83637C10.7902 2.83637 12.5071 3.56046 13.773 4.84934C15.0388 6.13822 15.75 7.88632 15.75 9.70908C15.75 13.5349 11.3962 18.4832 9 20.7627ZM9 5.12727C8.10998 5.12727 7.23996 5.39599 6.49993 5.89945C5.75991 6.4029 5.18314 7.11848 4.84254 7.9557C4.50195 8.79291 4.41283 9.71416 4.58647 10.6029C4.7601 11.4917 5.18868 12.3081 5.81802 12.9489C6.44736 13.5897 7.24918 14.0261 8.12209 14.2028C8.99501 14.3796 9.89981 14.2889 10.7221 13.9421C11.5443 13.5953 12.2471 13.0081 12.7416 12.2546C13.2361 11.5011 13.5 10.6153 13.5 9.70908C13.5 8.49391 13.0259 7.32851 12.182 6.46925C11.3381 5.61 10.1935 5.12727 9 5.12727ZM9 12C8.55499 12 8.11998 11.8656 7.74997 11.6139C7.37996 11.3622 7.09157 11.0044 6.92127 10.5858C6.75097 10.1672 6.70642 9.70654 6.79323 9.26215C6.88005 8.81775 7.09434 8.40955 7.40901 8.08917C7.72368 7.76878 8.12459 7.55059 8.56105 7.46219C8.9975 7.3738 9.4499 7.41917 9.86104 7.59256C10.2722 7.76595 10.6236 8.05958 10.8708 8.43632C11.118 8.81306 11.25 9.25598 11.25 9.70908C11.25 10.3167 11.0129 10.8994 10.591 11.329C10.169 11.7586 9.59674 12 9 12Z" fill={`${activeButton === "Location" ? "white":"black"}`}/>
                                        </svg>
                                    </div>
                                    Location
                                </button>
                            {/*</Link>*/}
                        </ul>
                    </div>
            </div>
        </>
    )
};

export default Sidebar;