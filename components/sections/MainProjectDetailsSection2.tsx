import React from 'react';

const projects = [
    {
        title: "AFK summoner fantasy hero war",
        minAllocation: "0.01",
        maximum: "TBA",
        access: "Public",
        targetRaise: "900,000",
        progressPercentage: "99%",
        imageSrc: "/assets/images/common/project_88.png",
        shapeSrc: "/assets/images/common/shape_2.png",
    },
    {
        title: "Crypto Adventure",
        minAllocation: "0.05",
        maximum: "500,000",
        access: "Private",
        targetRaise: "300,000",
        progressPercentage: "75%",
        imageSrc: "/assets/images/common/project_88.png",
        shapeSrc: "/assets/images/common/shape_2.png",
    },
    {
        title: "Blockchain Revolution",
        minAllocation: "0.1",
        maximum: "1,000,000",
        access: "Public",
        targetRaise: "1,000,000",
        progressPercentage: "50%",
        imageSrc: "/assets/images/common/project_88.png",
        shapeSrc: "/assets/images/common/shape_2.png",
    },
    {
        title: "NFT Marketplace Launch",
        minAllocation: "0.02",
        maximum: "250,000",
        access: "Public",
        targetRaise: "150,000",
        progressPercentage: "80%",
        imageSrc: "/assets/images/common/project_88.png",
        shapeSrc: "/assets/images/common/shape_2.png",
    },
];

const MainProjectDetailsSection2 = () => {


    return (
        <div className='inner-page project-grid-5 mb30'>
            
            <section className="tf-section project_2">
            <div className="container">
                <div className="row"> 
                    <div className="col-md-12">
                        <div className="tf-title left mb40" data-aos="fade-up" data-aos-duration="800">
                            <h2 className="title">
                                Ended iGOs
                            </h2>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="project-box-style3_wrapper">
                          {projects.map((project, index) => (
                                <div className="project-box-style3" data-aos="fade-in" data-aos-duration="800" key={index}>
                                    <div className="header_project">
                                        <div className="image">
                                            <img className="mask" src={project.imageSrc} alt="" /> 
                                            <div className="shape">
                                                <img src={project.shapeSrc} alt="" /> 
                                            </div>
                                        </div>
                                        <h5 className="heading">{project.title}</h5>
                                    </div>
                                    <div className="content">
                                        <div className="td td1">
                                            <p>Min allocation</p>
                                            <p>{project.minAllocation}</p>
                                        </div>
                                        <div className="td td2">
                                            <p>Maximum</p>
                                            <p>{project.maximum}</p>
                                        </div>
                                        <div className="td td3">
                                            <p>Access</p>
                                            <p>{project.access}</p>
                                        </div>
                                        <div className="td td4">
                                            <p>Chain</p>
                                            <p><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="24" height="24" rx="12" fill="#414B57"/>
                                                <path d="M17.3047 14.0836L12.5508 20.1957C12.486 20.2807 12.4027 20.3499 12.3073 20.398C12.2119 20.4462 12.1069 20.4721 12 20.4738V15.8375L16.8876 13.5595C16.9577 13.5262 17.0371 13.5176 17.1127 13.5351C17.1883 13.5526 17.2558 13.5952 17.3042 13.656C17.3525 13.7167 17.3789 13.792 17.379 13.8697C17.3791 13.9473 17.3529 14.0227 17.3047 14.0836Z" fill="white"/>
                                                <path d="M12.0001 15.8375V20.4738C11.8932 20.4721 11.7881 20.4462 11.6927 20.398C11.5973 20.3499 11.5141 20.2807 11.4493 20.1957L6.69539 14.0836C6.64719 14.0227 6.621 13.9473 6.62109 13.8697C6.62119 13.792 6.64755 13.7167 6.69591 13.656C6.74426 13.5952 6.81174 13.5526 6.88739 13.5351C6.96303 13.5176 7.04237 13.5262 7.1125 13.5595L12.0001 15.8375Z" fill="white"/>
                                                <path d="M11.9997 10.0929V14.7452C11.9347 14.747 11.8703 14.7323 11.8125 14.7024L6.63617 12.1998C6.57754 12.17 6.52611 12.1278 6.48548 12.076C6.44484 12.0243 6.41597 11.9644 6.40088 11.9003L11.9997 10.0929Z" fill="white"/>
                                                <path d="M12 3.52625V10.0929L6.40122 11.9004C6.38429 11.8382 6.38077 11.7732 6.39092 11.7096C6.40106 11.6459 6.42462 11.5852 6.46004 11.5314L11.4278 3.84709C11.4877 3.74905 11.5718 3.66804 11.672 3.61186C11.7722 3.55567 11.8851 3.52619 12 3.52625Z" fill="white"/>
                                                <path d="M17.5988 11.9004L12 10.0929V3.52625C12.1149 3.52619 12.2278 3.55567 12.328 3.61186C12.4282 3.66804 12.5123 3.74905 12.5722 3.84709L17.54 11.5314C17.5754 11.5852 17.599 11.6459 17.6091 11.7096C17.6192 11.7732 17.6157 11.8382 17.5988 11.9004Z" fill="white"/>
                                                <path d="M17.5988 11.9003C17.5837 11.9644 17.5548 12.0243 17.5142 12.076C17.4736 12.1278 17.4221 12.17 17.3635 12.1998L12.1872 14.7024C12.1294 14.7323 12.065 14.747 12 14.7452V10.0929L17.5988 11.9003Z" fill="white"/>
                                            </svg>
                                        </p>
                                    </div>
                                    <div className="td td5">
                                        <p>Target raise</p>
                                        <p>{project.targetRaise}</p>
                                    </div>
                                    <div className="td td6">
                                        <p>Progress</p>
                                        <div>
                                            <div className="content-progress-box style2">
                                                <div className="progress-bar" data-percentage={project.progressPercentage}>
                                                    <p className="progress-title-holder">
                                                        <span className="progress-number-wrapper">
                                                            <span className="progress-number-mark">
                                                                <span className="percent"></span>
                                                            </span>
                                                        </span>
                                                    </p>
                                                    <div className="progress-content-outter">
                                                        <div className="progress-content"></div>
                                                    </div>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
                        </div>
                    ))}
                    </div>   
                </div>
                 </div>
               </div>  
            </section>
        </div>
    );
};

export default MainProjectDetailsSection2;