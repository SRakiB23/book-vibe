// import React from "react";
// import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

// const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

// const PagesToReadChart = ({ data }) => {
//   const getPath = (x, y, width, height) => {
//     return `M${x},${y + height}C${x + width / 3},${y + height} ${
//       x + width / 2
//     },${y + height / 3}
//       ${x + width / 2}, ${y}
//       C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${
//       y + height
//     } ${x + width}, ${y + height}
//       Z`;
//   };

//   const TriangleBar = (props) => {
//     const { fill, x, y, width, height } = props;
//     return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
//   };

//   return (
//     <BarChart
//       width={700}
//       height={300}
//       data={data}
//       margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
//       layout="vertical"
//     >
//       <CartesianGrid strokeDasharray="3 3" />
//       <YAxis dataKey="name" type="category" />
//       <XAxis type="number" />
//       <Bar
//         dataKey="uv"
//         fill="#8884d8"
//         shape={<TriangleBar />}
//         label={{ position: "top" }}
//       >
//         {data.map((entry, index) => (
//           <Cell
//             key={`cell-${entry.name}`}
//             fill={colors[index % colors.length]}
//           />
//         ))}
//       </Bar>
//     </BarChart>
//   );
// };

// export default PagesToReadChart;
