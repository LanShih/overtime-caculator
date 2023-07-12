"use client";

import { useState } from "react";
import { TextField, FormGroup, Button, Typography } from "@mui/material";

const CalculatorForm = () => {
  const [overTime, setOverTime] = useState(0);
  const [baseHour, setBaseHour] = useState("");
  const [breakTime, setBreakTime] = useState("");
  const [startWork, setStartWork] = useState<string>("");
  const [endWork, setEndWork] = useState<string>("");

  const handleSetBaseHour = (hour: string) => {
    // localStorage.setItem("baseHour", hour.toString());
    setBaseHour(hour);
  };

  const handleSetBreakTime = (hour: string) => {
    // localStorage.setItem("breakTime", hour.toString());
    setBreakTime(hour);
  };

  const calculatorOverTime = () => {
    setOverTime(0);
    if (!startWork || !endWork) return;

    const startWorkDate = new Date(startWork);
    const endWorkDate = new Date(endWork);
    let overTime = Math.floor(
      (endWorkDate.getTime() - startWorkDate.getTime()) / (1000 * 60 * 60)
    );

    if ((+baseHour).toString() === "NaN") return;
    if ((+breakTime).toString() === "NaN") return;

    let overTimeDiff = overTime - +baseHour - +breakTime;
    if (overTimeDiff < 0) {
      overTimeDiff = 0;
    }
    setOverTime(Math.floor(overTimeDiff));
  };

  const resetCalculator = () => {
    setStartWork("");
    setEndWork("");
    setOverTime(0);
  };

  return (
    <FormGroup sx={{ padding: 2 }}>
      <Typography
        variant="h1"
        component="h2"
        sx={{ textAlign: "center", color: "red", mb: 3 }}
      >
        {overTime} hr
      </Typography>
      <TextField
        fullWidth
        label="基本上班時數 - (hr)"
        sx={{ mb: 3 }}
        value={baseHour}
        onChange={(e) => handleSetBaseHour(e.target.value)}
      />
      <TextField
        fullWidth
        label="午休時數 - (hr)"
        sx={{ mb: 3 }}
        value={breakTime}
        onChange={(e) => handleSetBreakTime(e.target.value)}
      />
      <TextField
        fullWidth
        type="datetime-local"
        sx={{ mb: 3 }}
        label="上班打卡"
        InputLabelProps={{ shrink: true }}
        value={startWork}
        onChange={(e) => setStartWork(e.target.value)}
      />
      <TextField
        fullWidth
        type="datetime-local"
        sx={{ mb: 3 }}
        label="下班打卡"
        InputLabelProps={{ shrink: true }}
        value={endWork}
        onChange={(e) => setEndWork(e.target.value)}
      />
      <Button
        variant="contained"
        sx={{ fontWeight: 700, color: "#fff", fontSize: "1.25rem", mb: 3 }}
        onClick={calculatorOverTime}
      >
        計算
      </Button>
      <Button
        variant="outlined"
        sx={{ fontWeight: 700, fontSize: "1.25rem" }}
        onClick={resetCalculator}
      >
        重置
      </Button>
    </FormGroup>
  );
};

export default CalculatorForm;
