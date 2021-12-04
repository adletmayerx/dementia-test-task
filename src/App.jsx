import React, { useState, useRef } from "react";
import { Stage, Layer, Line } from "react-konva";
import clock from "./images/clock.png";

const App = () => {
  const [lines, setLines] = useState([]);
  const isDrawing = useRef(false);

  const handleMouseDown = (e) => {
    isDrawing.current = true;
    const pos = e.target.getStage().getPointerPosition();
    setLines([...lines, { points: [pos.x, pos.y] }]);
  };

  const handleMouseMove = (e) => {
    // no drawing - skipping
    if (!isDrawing.current) {
      return;
    }
    const stage = e.target.getStage();
    const point = stage.getPointerPosition();
    let lastLine = lines[lines.length - 1];
    // add point
    lastLine.points = lastLine.points.concat([point.x, point.y]);

    // replace last
    lines.splice(lines.length - 1, 1, lastLine);
    setLines(lines.concat());
  };

  const handleMouseUp = () => {
    isDrawing.current = false;
  };

  const handleSave = () => {
    const link = document.createElement("a");
    const container = document.querySelector(".links-container");
    link.download = "download.png";
    link.href = document.querySelector("canvas").toDataURL();
    var today;
    var objToday = new Date(),
      domEnder = (function () {
        var a = objToday;
        if (/1/.test(parseInt((a + "").charAt(0)))) return "th";
        a = parseInt((a + "").charAt(1));
        return 1 === a ? "st" : 2 === a ? "nd" : 3 === a ? "rd" : "th";
      })(),
      dayOfMonth =
        today + (objToday.getDate() < 10)
          ? "0" + objToday.getDate() + domEnder
          : objToday.getDate() + domEnder,
      months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      curMonth = months[objToday.getMonth()],
      curYear = objToday.getFullYear(),
      curHour =
        objToday.getHours() > 12
          ? objToday.getHours() - 12
          : objToday.getHours() < 10
          ? "0" + objToday.getHours()
          : objToday.getHours(),
      curMinute =
        objToday.getMinutes() < 10
          ? "0" + objToday.getMinutes()
          : objToday.getMinutes(),
      curSeconds =
        objToday.getSeconds() < 10
          ? "0" + objToday.getSeconds()
          : objToday.getSeconds(),
      curMeridiem = objToday.getHours() > 12 ? "PM" : "AM";
    today =
      curHour +
      ":" +
      curMinute +
      ":" +
      curSeconds +
      curMeridiem +
      " " +
      dayOfMonth +
      " of " +
      curMonth +
      ", " +
      curYear;

    link.textContent = today;
    container.append(link);
  };

  return (
    <div className="container">
      <h1>Нарисуйте часы</h1>
      <div className="canvas-container">
        <img src={clock} alt="часы" className="clock" />
        <div className="canvas">
          <Stage
            width={650}
            height={400}
            onMouseDown={handleMouseDown}
            onMousemove={handleMouseMove}
            onMouseup={handleMouseUp}
          >
            <Layer>
              {lines.map((line, i) => (
                <Line
                  key={i}
                  points={line.points}
                  stroke="#df4b26"
                  strokeWidth={5}
                  tension={0.5}
                  lineCap="round"
                  opacity={1}
                />
              ))}
            </Layer>
          </Stage>
        </div>
        <button type="button" className="save-button" onClick={handleSave}>
          Сохранить
        </button>
      </div>
      <div className="links-container"></div>
    </div>
  );
};

export default App;
