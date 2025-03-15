import { useContext } from "react";
import { ThemeContext } from "../Context/createContext";
import  BarChart  from "../Data/BarChart.jsx";

const stats = [
  { id: 1, name: "Delivered", value: "100+ Projects" },
  { id: 2, name: "Employees", value: "2K+" },
  { id: 3, name: "Client Satisfaction", value: "100%" },
];

export default function ServiceC() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === "dark" ? "bg-black text-white" : "bg-white text-black"} py-24 sm:py-32`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className={`${theme === "dark" ? "text-gray-400" : "text-gray-700"} text-lg font-medium`}>
                {stat.name}
              </dt>
              <dd
                className={`order-first text-3xl font-semibold tracking-tight ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                } sm:text-5xl`}
              >
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
 <BarChart></BarChart>
       
      </div>
    </div>
  );
}
