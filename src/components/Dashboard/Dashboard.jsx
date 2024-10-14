import useIcons from "../../hooks/useIcons";
import { Chart } from "react-google-charts";

const Index = () => {
  const { GoArrowDownRight } = useIcons();
  const data = [
    ["Year", "Sales", "Expenses", "Profit"],
    ["2020", 1000, 400, 200],
    ["2021", 1170, 460, 250],
    ["2022", 660, 1120, 300],
    ["2023", 1030, 540, 350],
    ["2024", 1130, 340, 650],
  ];



  const options = {
    chart: {
      title: "I_BOX Performance",
      subtitle: "Sales, Expenses, and Profit: 2020-2024",
    },
  };
  return (
    <div className="">
      <div className="">
        <h2 className="font-bold sm:text-2xl">Dashboard:</h2>
        <div className="cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 my-4">
          <div className="card bg-white flex flex-col gap-2 p-3">
            <span className="capitalize">total</span>
            <div className="flex justify-between capitalize gap-4">
              <strong>$1000</strong>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <GoArrowDownRight />
                  <span className="font-bold">32%</span>
                </div>
                <p>compared to april 2024</p>
              </div>
            </div>
          </div>
          <div className="card bg-white flex flex-col gap-2 p-3">
            <span className="capitalize">total</span>
            <div className="flex justify-between capitalize gap-4">
              <strong>$1000</strong>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <GoArrowDownRight />
                  <span className="font-bold text-red-500">32%</span>
                </div>
                <p>compared to april 2024</p>
              </div>
            </div>
          </div>
          <div className="card bg-white flex flex-col gap-2 p-3">
            <span className="capitalize">total</span>
            <div className="flex justify-between capitalize gap-4">
              <strong>$1000</strong>
              <div className="flex flex-col">
                <div className="flex items-center gap-2">
                  <GoArrowDownRight />
                  <span className="font-bold text-green-500">32%</span>
                </div>
                <p>compared to april 2024</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-5">
        <h2 className="font-bold sm:text-2xl capitalize ">income statics</h2>
        <Chart
          chartType="Bar"
          width="100%"
          height="400px"
          data={data}
          options={options}
          className="my-5"
        />{" "}
      </div>
    </div>
  );
};

export default Index;
