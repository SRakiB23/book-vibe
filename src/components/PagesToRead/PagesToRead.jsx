import { useLoaderData } from "react-router-dom";
import { getStoredReadBook } from "../Utility/LocalStorage";
import { useEffect, useState } from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Cell } from "recharts";

const PagesToRead = () => {
  const books = useLoaderData();
  const [bookRead, setBookRead] = useState([]);

  useEffect(() => {
    const readBookIds = getStoredReadBook();
    if (books.length > 0) {
      const readBookList = [];
      for (const bookId of readBookIds) {
        const book = books.find((book) => book.bookId === bookId);
        if (book) {
          readBookList.push(book);
        }
      }
      setBookRead(readBookList);
    }
  }, [books]);

  // Convert bookRead to chart data
  const chartData = bookRead.map((book) => ({
    name: `${book.bookName}`,
    uv: book.totalPages,
  }));

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <div className="bg-slate-50 py-10 rounded-2xl overflow-x-auto">
      <div className="sm:overflow-x-hidden">
        <BarChart
          width={1200}
          height={500}
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: "top" }}
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
        </BarChart>
      </div>
    </div>
  );
};

export default PagesToRead;
