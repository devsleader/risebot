import Link from "next/link"

// Define a type for the team member
type TeamMember = {
    name: string;
    position: string;
    image: string;
    delay: number;
};

// Create an array of team members
const teamMembers: TeamMember[] = [
    { name: "Darrell Steward", position: "Senior Designer", image: "/assets/images/common/team_1.png", delay: 100 },
    { name: "Kristin Watson", position: "Senior Designer", image: "/assets/images/common/team_2.png", delay: 200 },
    { name: "Jacob Jones", position: "Senior Designer", image: "/assets/images/common/team_3.png", delay: 300 },
    { name: "Jane Cooper", position: "Senior Designer", image: "/assets/images/common/team_4.png", delay: 400 },
    { name: "Jenny Wilson", position: "Senior Designer", image: "/assets/images/common/team_5.png", delay: 100 },
    { name: "Dianne Russell", position: "Senior Designer", image: "/assets/images/common/team_6.png", delay: 200 },
    { name: "Devon Lane", position: "Senior Designer", image: "/assets/images/common/team_7.png", delay: 300 },
    { name: "Robert Fox", position: "Senior Designer", image: "/assets/images/common/team_8.png", delay: 400 },
];

export default function Team1() {
    return (
        <>
            <section className="tf-section tf_team">
                <div className="overlay">
                    <img src="/assets/images/backgroup/bg_team_section.png" alt="" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title mb40" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title">Meet the team</h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="team-box-wrapper">
                                {teamMembers.map((member, index) => (
                                    <div className="team-box" data-aos="fade-up" data-aos-delay={member.delay} data-aos-duration={800} key={index}>
                                        <img className="shape" src="/assets/images/common/shape_3.png" alt="" />
                                        <img className="shape_ecfect" src="/assets/images/common/shape_4.svg" alt="" />
                                        <div className="image">
                                            <img src={member.image} alt="" />
                                        </div>
                                        <div className="content">
                                            <h5 className="name"><Link href="/team-details">{member.name}</Link></h5>
                                            <p className="position">{member.position}</p>
                                            <ul className="social">
                                                {/* Social icons can be added here */}
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}