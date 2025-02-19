import React from 'react';

interface TokenomicsBox {
  category: string;
  allocation: string;
  raise: string;
  locked: string;
  vesting: string;
  hasBreakLine?: boolean;
}
const tokenomicsData: TokenomicsBox[] = [
    {
        category: "Marketing",
        allocation: "14%",
        raise: "24,000,000",
        locked: "12 Month",
        vesting: "24"
    },
    {
        category: "Ecosystem",
        allocation: "12%",
        raise: "65,000,00",
        locked: "3 Month",
        vesting: "9"
    },
    {
        category: "Team",
        allocation: "8%",
        raise: "70,000,00",
        locked: "2 Month",
        vesting: "16"
    },
    {
        category: "Advisors",
        allocation: "5%",
        raise: "11,000,00",
        locked: "6 Month",
        vesting: "12"
    },
    {
        category: "Staking",
        allocation: "22%",
        raise: "9,000,000",
        locked: "3 Month",
        vesting: "4"
    },
    {
        category: "Private Round",
        allocation: "45%",
        raise: "88,000,000",
        locked: "7 Month",
        vesting: "4"
    },
    {
        category: "Exchange Liquidity",
        allocation: "5.8%",
        raise: "5,000,000",
        locked: "1 Month",
        vesting: "2",
        hasBreakLine: true
    }
];

const MainTokenSection = () => {
    

    return (
        <div className='inner-page'>
            <section className="tf-section tf-token pt60">
                <div className="container">
                    <div className="row">  
                        <div className="col-md-12">
                            <div className="tf-title left mt17 mb40" data-aos="fade-up" data-aos-duration="800">
                                <h2 className="title">
                                    Tokenomics
                                </h2> 
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="tokenomics-wrapper" data-aos="fade-up" data-aos-duration="800">
                                {tokenomicsData.map((box, index) => (
                                    <div className="box" key={index}>
                                        <div className="td td1">
                                            <p>Category</p>
                                            <p>{box.hasBreakLine ? 
                                                <>Exchange <br /> Liquidity</> : 
                                                box.category}
                                            </p>
                                        </div>
                                        <div className="td td2">
                                            <p>Allocation</p>
                                            <p>{box.allocation}</p>
                                        </div>
                                        <div className="td td3">
                                            <p>Raise</p>
                                            <p>{box.raise}</p>
                                        </div>
                                        <div className="td td4">
                                            <p>Locked</p>
                                            <p>{box.locked}</p>
                                        </div>
                                        <div className="td td5">
                                            <p>Vesting (Month)</p>
                                            <p>{box.vesting}</p>
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
}

export default MainTokenSection;