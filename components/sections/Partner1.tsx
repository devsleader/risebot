import Link from "next/link"

const partners = [
    "/assets/images/partner/01.png",
    "/assets/images/partner/02.png",
    "/assets/images/partner/03.png",
    "/assets/images/partner/04.png",
    "/assets/images/partner/05.png",
    "/assets/images/partner/06.png",
    "/assets/images/partner/07.png",
    "/assets/images/partner/08.png",
    "/assets/images/partner/09.png",
    "/assets/images/partner/10.png",
    "/assets/images/partner/11.png",
    "/assets/images/partner/12.png",
    "/assets/images/partner/13.png",
    "/assets/images/partner/14.png",
    "/assets/images/partner/15.png",
    "/assets/images/partner/16.png",
];

export default function Partner1() {
    return (
        <>
            <section className="tf-section tf_partner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tf-title" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title">
                                    Our Partners
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="partner-wrapper" data-aos="fade-up" data-aos-duration={800}>
                                {partners.map((src, index) => (
                                    <Link key={index} href="/home-02" className="image">
                                        <img src={src} alt="" className={index === 1 ? "active" : ""} />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}