import Chart1 from "../elements/Chart1";
import CounterUp from "../elements/CounterUp";

interface StatisticsCounter {
  id: number;
  title: string;
  count: number;
  image: string;
  prefix?: string;
  suffix?: string;
}

interface ChartItem {
  id: number;
  name: string;
  percentage: string;
  colorImage: string;
}

const statisticsData: StatisticsCounter[] = [
  {
    id: 1,
    title: "Funded Projects",
    count: 359,
    image: "/assets/images/common/counter_1.png"
  },
  {
    id: 2,
    title: "Unique Participants",
    count: 742,
    image: "/assets/images/common/counter_2.png"
  },
  {
    id: 3,
    title: "Raised Capital",
    count: 17,
    image: "/assets/images/common/counter_3.png",
    prefix: "$",
    suffix: "M"
  },
  {
    id: 4,
    title: "Initial Market Cap",
    count: 32,
    image: "/assets/images/common/counter_4.png",
    prefix: "$",
    suffix: "M"
  }
];

const chartData: ChartItem[] = [
  {
    id: 1,
    name: "Team",
    percentage: "7.5%",
    colorImage: "/assets/images/chart/color_1.png"
  },
  {
    id: 2,
    name: "Staking",
    percentage: "9.5%",
    colorImage: "/assets/images/chart/color_2.png"
  },
  {
    id: 3,
    name: "Advisors",
    percentage: "10.0%",
    colorImage: "/assets/images/chart/color_3.png"
  },
  {
    id: 4,
    name: "Liquidity",
    percentage: "12.0%",
    colorImage: "/assets/images/chart/color_4.png"
  },
  {
    id: 5,
    name: "Ecosystem",
    percentage: "16.33%",
    colorImage: "/assets/images/chart/color_5.png"
  },
  {
    id: 6,
    name: "Marketing",
    percentage: "16.33%",
    colorImage: "/assets/images/chart/color_6.png"
  },
  {
    id: 7,
    name: "Private Sale",
    percentage: "30.0%",
    colorImage: "/assets/images/chart/color_7.png"
  }
];

const Token1: React.FC = () => {
  return (
    <section className="tf-section tf-token">
      <div className="overlay">
        <img src="/assets/images/backgroup/bg_project2.png" alt="Background" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="tf-title" data-aos="fade-up" data-aos-duration={800}>
              <h2 className="title">Statistics token</h2>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="counter_wrapper">
                {statisticsData.map((item) => (
                  <div key={item.id} className="box">
                    <div className="image">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="content">
                      <p className="desc">{item.title}</p>
                      <div className="box-couter counter">
                        <div className="number-content">
                          {item.prefix && <span>{item.prefix}</span>}
                          <span 
                            className="count-number" 
                            data-to={item.count} 
                            data-speed={2000} 
                            data-inviewport="yes"
                          >
                            <CounterUp count={item.count} time={1} />
                          </span>
                          {item.suffix && <span>{item.suffix}</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="char_wrapper">
                <ul className="describe_chart">
                  {chartData.map((item) => (
                    <li key={item.id}>
                      <img src={item.colorImage} alt={item.name} />
                      <div className="desc">
                        <p className="name">{item.name}</p>
                        <p className="number">{item.percentage}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                
                <div className="chart_inner" data-aos="fade-up" data-aos-duration={800}>
                  <div className="content_inner">
                    <img src="/assets/images/chart/subtract.png" alt="Chart background" />
                    <p>Statistics token</p>
                  </div>
                  <Chart1 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token1;