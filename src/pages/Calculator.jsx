import React, { useState } from "react";

const Calculator = () => {
  const [screen, setScreen] = useState("0");
  const [firstOperand, setFirstOperand] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForSecond, setWaitingForSecond] = useState(false);
  const [history, setHistory] = useState([]);

  // กดตัวเลขหรือจุด
  const handleNumber = (num) => {
    if (waitingForSecond) {
      setScreen(num === "." ? "0." : num.toString());
      setWaitingForSecond(false);
    } else {
      if (num === "." && screen.includes(".")) return;
      setScreen(screen === "0" && num !== "." ? num.toString() : screen + num.toString());
    }
    setHistory([...history, num.toString()]);
  };

  // กด operator
  const handleOperator = (op) => {
    const current = Number(screen);

    if (firstOperand !== null && operator !== null && !waitingForSecond) {
      // คำนวณผลก่อนถ้ามี operator ก่อนหน้า
      let result = 0;
      switch (operator) {
        case "+": result = firstOperand + current; break;
        case "-": result = firstOperand - current; break;
        case "×": result = firstOperand * current; break;
        case "÷": result = current === 0 ? "Error" : firstOperand / current; break;
        default: result = current;
      }
      setScreen(result.toString());
      setFirstOperand(result === "Error" ? null : result);
    } else {
      setFirstOperand(current);
    }

    setOperator(op);
    setWaitingForSecond(true);
    setHistory([...history, op]);
  };

  // กด =
  const handleEqual = () => {
    if (firstOperand === null || operator === null) return;
    const secondOperand = Number(screen);
    let result = 0;

    switch (operator) {
      case "+": result = firstOperand + secondOperand; break;
      case "-": result = firstOperand - secondOperand; break;
      case "×": result = firstOperand * secondOperand; break;
      case "÷": result = secondOperand === 0 ? "Error" : firstOperand / secondOperand; break;
      default: return;
    }

    setScreen(result.toString());
    setFirstOperand(result === "Error" ? null : result);
    setOperator(null); // รีเซ็ต operator หลัง =
    setWaitingForSecond(true);
    setHistory([...history, "=", result.toString()]);
  };

  // CE ล้างทั้งหมด
  const handleCE = () => {
    setScreen("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecond(false);
    setHistory([]);
  };

  // ← ลบตัวสุดท้าย
  const handleBack = () => {
    if (screen.length > 1) setScreen(screen.slice(0, -1));
    else setScreen("0");
  };

  // style ปุ่ม
  const buttonStyle = {
    width: "50px",
    height: "50px",
    margin: "5px",
    borderRadius: "10px",
    fontSize: "20px",
    cursor: "pointer",
    border: "2px solid gray",
  };

  const numberButton = (num) => (
    <button
      key={num}
      onClick={() => handleNumber(num)}
      style={{ ...buttonStyle, backgroundColor: "lightblue" }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "orange")}
      onMouseOut={(e) => (e.target.style.backgroundColor = "lightblue")}
    >
      {num}
    </button>
  );

  const operatorButton = (op, color = "lightgreen") => (
    <button
      key={op}
      onClick={() => handleOperator(op)}
      style={{ ...buttonStyle, backgroundColor: color }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "orange")}
      onMouseOut={(e) => (e.target.style.backgroundColor = color)}
    >
      {op}
    </button>
  );

  const specialButton = (label, onClick, color) => (
    <button
      onClick={onClick}
      style={{ ...buttonStyle, backgroundColor: color }}
      onMouseOver={(e) => (e.target.style.backgroundColor = "orange")}
      onMouseOut={(e) => (e.target.style.backgroundColor = color)}
    >
      {label}
    </button>
  );

  return (
    <div
      style={{
        display: "inline-block",
        padding: "20px",
        border: "3px solid black",
        borderRadius: "20px",
        backgroundColor: "#f0f0f0",
        textAlign: "center",
      }}
    >
      <h2>Calculator</h2>

      {/* หน้าจอ */}
      <div
        style={{
          width: "240px",
          height: "50px",
          margin: "10px auto",
          backgroundColor: "azure",
          border: "2px solid gray",
          borderRadius: "10px",
          textAlign: "right",
          paddingRight: "10px",
          lineHeight: "50px",
          fontSize: "24px",
        }}
      >
        {screen}
      </div>

      {/* ประวัติ */}
      <div
        style={{
          width: "240px",
          minHeight: "30px",
          margin: "5px auto",
          fontSize: "14px",
          color: "#555",
          textAlign: "right",
          wordWrap: "break-word",
        }}
      >
        {history.join(" ")}
      </div>

      {/* ปุ่มตัวเลข + operator */}
      <div>
        {[7, 8, 9].map(numberButton)}
        {operatorButton("÷")}
      </div>
      <div>
        {[4, 5, 6].map(numberButton)}
        {operatorButton("×")}
      </div>
      <div>
        {[1, 2, 3].map(numberButton)}
        {operatorButton("-")}
      </div>
      <div>
        {numberButton(0)}
        {numberButton(".")}
        {specialButton("=", handleEqual, "lightgreen")}
        {operatorButton("+")}
      </div>
      <div>
        {specialButton("CE", handleCE, "red")}
        {specialButton("←", handleBack, "orange")}
      </div>
    </div>
  );
};

export default Calculator;







