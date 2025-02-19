import React, { FormEvent, useState } from 'react';

// Define types for form data
interface ProjectFormData {
    projectName: string;
    email: string;
    projectBrief: string;
    targetRaise: string;
    websiteLink: string;
    blockchain: BlockchainType;
    projectStatus: ProjectStatus;
    hasFundingRaised: boolean | null;
    teamType: TeamType;
    telegramGroup: string;
    projectTwitter: string;
}

// Define enum types for radio button groups
enum BlockchainType {
    BSC = 'Binance Smart Chain',
    SOLANA = 'Solana',
    ETHEREUM = 'Ethereum',
    POLKADOT = 'Polkadot',
    POLYGON = 'Polygon (Matic)'
}

enum ProjectStatus {
    INITIAL = 'Just an initial idea',
    WHITEPAPER = 'Idea with White Paper',
    DEVELOPMENT = 'In early development',
    READY = 'Ready to launch'
}

enum TeamType {
    ANON = 'Anon',
    PUBLIC = 'Fully Public',
    MIXED = 'Mixed'
}

const SubmitIGO = () => {
    // Initialize form state
    const [formData, setFormData] = useState<ProjectFormData>({
        projectName: '',
        email: '',
        projectBrief: '',
        targetRaise: '',
        websiteLink: '',
        blockchain: {} as BlockchainType,
        projectStatus: {} as ProjectStatus,
        hasFundingRaised: null,
        teamType: {} as TeamType,
        telegramGroup: '',
        projectTwitter: ''
    });

    // Handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
    };

    // Handle input changes
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    // Handle radio button changes
    const handleRadioChange = (name: string, value: string) => {
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="inner-page home2">
            <section className="tf-section project-info pt30 pb60">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form onSubmit={handleSubmit}>
                                <div className="project-info-form">
                                    <h6 className="title">Project information</h6>
                                    <div className="form-inner">
                                        <fieldset>
                                            <label>Project name</label>
                                            <input
                                                type="text"
                                                name="projectName"
                                                value={formData.projectName}
                                                onChange={handleInputChange}
                                                placeholder="Enter the name of your project"
                                                required
                                            />
                                        </fieldset>
                                        <fieldset>
                                            <label>Email address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                placeholder="Your email"
                                                required
                                            />
                                        </fieldset>
                                        <fieldset>
                                            <label htmlFor="projectBrief">Project brief</label>
                                            <textarea
                                                id="projectBrief"
                                                name="projectBrief"
                                                value={formData.projectBrief}
                                                onChange={handleInputChange}
                                                placeholder="Tell us about the project you want to launch"
                                                rows={5}
                                                required
                                            />
                                        </fieldset>
                                        <fieldset>
                                            <label>Target raise</label>
                                            <input
                                                type="text"
                                                name="targetRaise"
                                                value={formData.targetRaise}
                                                onChange={handleInputChange}
                                                placeholder="How much are you planning on raising on the IGO?"
                                                required
                                            />
                                        </fieldset>
                                        <fieldset>
                                            <label>Project website / Link to whitepaper</label>
                                            <input
                                                type="text"
                                                name="websiteLink"
                                                value={formData.websiteLink}
                                                onChange={handleInputChange}
                                                placeholder="Enter the link"
                                                required
                                            />
                                        </fieldset>
                                    </div>
                                </div>

                                <div className="project-info-form check-radio">
                                    <h6 className="title mb30">Blockchain/Platform</h6>
                                    <div className="form-inner">
                                        <ul className="list">
                                            {Object.values(BlockchainType).map((blockchain, index) => (
                                                <li className="list__item" key={blockchain}>
                                                    <input
                                                        type="radio"
                                                        className="radio-btn"
                                                        name="blockchain"
                                                        id={`blockchain-${index}`}
                                                        checked={formData.blockchain === blockchain}
                                                        onChange={() => handleRadioChange('blockchain', blockchain)}
                                                    />
                                                    <label htmlFor={`blockchain-${index}`} className="label">
                                                        {blockchain}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="project-info-form check-radio">
                                    <h6 className="title mb30">Project status</h6>
                                    <div className="form-inner">
                                        <ul className="list w50">
                                            {Object.values(ProjectStatus).map((status, index) => (
                                                <li className="list__item" key={status}>
                                                    <input
                                                        type="radio"
                                                        className="radio-btn"
                                                        name="projectStatus"
                                                        id={`status-${index}`}
                                                        checked={formData.projectStatus === status}
                                                        onChange={() => handleRadioChange('projectStatus', status)}
                                                    />
                                                    <label htmlFor={`status-${index}`} className="label">
                                                        {status}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="project-info-form check-radio">
                                    <h6 className="title mb30">Have you already raised funds?</h6>
                                    <div className="form-inner">
                                        <ul className="list w50">
                                            <li className="list__item">
                                                <input
                                                    type="radio"
                                                    className="radio-btn"
                                                    name="hasFundingRaised"
                                                    id="funding-yes"
                                                    checked={formData.hasFundingRaised === true}
                                                    onChange={() => handleRadioChange('hasFundingRaised', 'true')}
                                                />
                                                <label htmlFor="funding-yes" className="label">Yes</label>
                                            </li>
                                            <li className="list__item">
                                                <input
                                                    type="radio"
                                                    className="radio-btn"
                                                    name="hasFundingRaised"
                                                    id="funding-no"
                                                    checked={formData.hasFundingRaised === false}
                                                    onChange={() => handleRadioChange('hasFundingRaised', 'false')}
                                                />
                                                <label htmlFor="funding-no" className="label">No</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="project-info-form check-radio">
                                    <h6 className="title mb30">Is your team Anon or public?</h6>
                                    <div className="form-inner">
                                        <ul className="list">
                                            {Object.values(TeamType).map((type, index) => (
                                                <li className="list__item" key={type}>
                                                    <input
                                                        type="radio"
                                                        className="radio-btn"
                                                        name="teamType"
                                                        id={`team-${index}`}
                                                        checked={formData.teamType === type}
                                                        onChange={() => handleRadioChange('teamType', type)}
                                                    />
                                                    <label htmlFor={`team-${index}`} className="label">
                                                        {type}
                                                    </label>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="project-info-form style">
                                    <h6 className="title mb30">Social media</h6>
                                    <div className="form-inner">
                                        <fieldset>
                                            <label>Telegram group</label>
                                            <fieldset>
                                                <input
                                                    type="text"
                                                    name="telegramGroup"
                                                    value={formData.telegramGroup}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter Telegram group link"
                                                    required
                                                />
                                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M6.27812 9.12061L6.01345 12.8433C6.39212 12.8433 6.55612 12.6806 6.75279 12.4853L8.52812 10.7886L12.2068 13.4826C12.8815 13.8586 13.3568 13.6606 13.5388 12.8619L15.9535 1.54728L15.9541 1.54661C16.1681 0.549278 15.5935 0.159278 14.9361 0.403945L0.742785 5.83794C-0.225881 6.21394 -0.211215 6.75394 0.578119 6.99861L4.20679 8.12728L12.6355 2.85328C13.0321 2.59061 13.3928 2.73594 13.0961 2.99861L6.27812 9.12061Z" fill="#798DA3"/>
                                                </svg>
                                            </fieldset>
                                        </fieldset>
                                        <fieldset>
                                            <label>Project Twitter</label>
                                            <fieldset>
                                                <input
                                                    type="text"
                                                    name="projectTwitter"
                                                    value={formData.projectTwitter}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter project Twitter handle"
                                                    required
                                                />
                                                <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M16 2.039C15.405 2.3 14.771 2.473 14.11 2.557C14.79 2.151 15.309 1.513 15.553 0.744C14.919 1.122 14.219 1.389 13.473 1.538C12.871 0.897 12.013 0.5 11.077 0.5C9.261 0.5 7.799 1.974 7.799 3.781C7.799 4.041 7.821 4.291 7.875 4.529C5.148 4.396 2.735 3.089 1.114 1.098C0.831 1.589 0.665 2.151 0.665 2.756C0.665 3.892 1.25 4.899 2.122 5.482C1.595 5.472 1.078 5.319 0.64 5.078C0.64 5.088 0.64 5.101 0.64 5.114C0.64 6.708 1.777 8.032 3.268 8.337C3.001 8.41 2.71 8.445 2.408 8.445C2.198 8.445 1.986 8.433 1.787 8.389C2.212 9.688 3.418 10.643 4.852 10.674C3.736 11.547 2.319 12.073 0.785 12.073C0.516 12.073 0.258 12.061 0 12.028C1.453 12.965 3.175 13.5 5.032 13.5C11.068 13.5 14.368 8.5 14.368 4.166C14.368 4.021 14.363 3.881 14.356 3.742C15.007 3.28 15.554 2.703 16 2.039Z" fill="#798DA3"/>
                                                </svg>
                                            </fieldset>
                                        </fieldset>
                                    </div>
                                </div>

                                <div className="wrap-btn">
                                    <button type="submit" className="tf-button style2">
                                        Submit IGO project
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SubmitIGO;