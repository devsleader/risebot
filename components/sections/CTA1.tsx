import Link from "next/link"

interface Cta1Props {
    img: string;
}

export default function Cta1({ img }: Cta1Props) {
    return (
        <>
            <section className="tf-section tf_CTA">
                <div className="container relative">
                    <div className="overlay">
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="tf-title left mt58" data-aos="fade-up" data-aos-duration={800}>
                                <h2 className="title">
                                    Launch on Risebot
                                </h2>
                                <p className="sub">Full support in project incubation</p>
                                <div className="wrap-btn">
                                    <Link href="/submit-IGO-on-chain" className="tf-button style3">
                                        Apply Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="image_cta" data-aos="fade-left" data-aos-duration={1200}>
                                <img className="move4" src={img === 'boy' ? "/assets/images/common/img_cta.png" : img === 'girl' ? "/assets/images/common/img_cta1.png" : ""} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
