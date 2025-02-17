import React from 'react';

interface TokenAllocation {
  title: string;
  percentage: number;
}

const Token2 = () => {
  // Left column allocations
  const leftAllocations: TokenAllocation[] = [
    { title: "Farming Pool", percentage: 25 },
    { title: "Staking", percentage: 50 },
    { title: "Ecosystem", percentage: 40 },
    { title: "Advisor", percentage: 65 },
    ];
    
  // Right column allocations
  const rightAllocations: TokenAllocation[] = [
    { title: "Private Sale", percentage: 25 },
    { title: "Liquidity", percentage: 50 },
    { title: "Marketing", percentage: 40 },
    { title: "Team", percentage: 65 },
  ];

  // Render a single progress bar
  const renderProgressBar = (allocation: TokenAllocation) => (
    <div className="progress-bar" data-percentage={`${allocation.percentage}%`} key={allocation.title}>
      <p className="progress-title-holder">
        <span className="progress-title">{allocation.title}</span>
        <span className="progress-number-wrapper">
          {/* <span className="progress-number-mark">
            <span className="percent">{allocation.percentage}%</span>
          </span> */}
        </span>
      </p>
      <div className="progress-content-outter">
        <div 
          className="progress-content"
          style={{ width: `${allocation.percentage}%` }}
        />
      </div>
    </div>
  );

  return (
    <>
      <section className="tf-section token">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="tf-title" data-aos="fade-up" data-aos-duration={800}>
                <h2 className="title mb20">
                  Statistics token
                </h2>
                <div className="total_token">
                  <h6>Total Supply: <span>1,000,000,000,000 (1 trillion)</span></h6>
                  <h6>Public sale: <span>$0.24</span></h6>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-progress-box">
                <div className="content-progress-box">
                  {leftAllocations.map(allocation => renderProgressBar(allocation))}
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="content-progress-box">
                <div className="content-progress-box">
                  {rightAllocations.map(allocation => renderProgressBar(allocation))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Token2;