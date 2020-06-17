import React, { useState } from "react";

function TimerCounter() {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);
  const [experience, setExperience] = useState([]);
  const [valueinput, setValueInput] = useState("");
  let updatedMs = time.ms,
    updatedS = time.s,
    updatedM = time.m,
    updatedH = time.h;

  const run = () => {
    if (updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }

    if (updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }
    if (updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    if (updatedH === 60) {
      updatedM++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  };

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  };

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ ms: 0, s: 0, m: 0, h: 0 });
  };

  const resume = () => {
    start();
  };

  const add = () => {
    const array = [...experience];

    const newItemTwo = {
      id: 1 + Math.random(),
      valueMS: updatedMs,
      valueH: updatedH,
      valueM: updatedM,
      valueS: updatedS,
      value: valueinput,
    };

    array.push(newItemTwo);
    setExperience(array);
    setValueInput("");
  };
  const renderValue = () => {
    if (experience.length === 0) {
      return (
        <p className="emoji">
          You don't have anything in your list at the moment
          <span role="img" aria-label="smile" className="ml-2">
            🙁
          </span>
        </p>
      );
    }
    if (experience.length === 1) {
      return (
        <p className="emoji">
          Do you want to try one more list?
          <span role="img" aria-label="smile" className="ml-2">
            🙂
          </span>
        </p>
      );
    } else {
      return (
        <p className="emoji">
          You successfully have {experience.length} list
          <span role="img" aria-label="smile" className="ml-2">
            😀
          </span>
        </p>
      );
    }
  };

  const h = () => {
    if (time.h === 0) {
      return "";
    } else {
      return (
        <div className="clockTimer d-flex">
          <div>
            <h1>{time.h >= 10 ? time.h : "0" + time.h} </h1>
            <p className="m-0 p-0">Hours</p>
          </div>
        </div>
      );
    }
  };
  return (
    <section className="sectionAppTimer container">
      <div className="timerSection">
        <div className="d-flex justify-content-center mt-3 mb-4">
          <button onClick={add} className="btn renderBtn">
            Render the list!
          </button>
        </div>
        <div className="d-flex justify-content-center">
          {h()}
          <div className="clockTimer d-flex">
            <div>
              <h1>{time.m >= 10 ? time.m : "0" + time.m}</h1>
              <p className="m-0 p-0">Minutes</p>
            </div>
          </div>
          <div className="clockTimer d-flex">
            <div>
              <h1>{time.s >= 10 ? time.s : "0" + time.s}</h1>
              <p className="m-0 p-0">Seconds</p>
            </div>
          </div>
          <div className="clockTimer">
            <h1> {time.ms >= 10 ? time.ms : "0" + time.ms}</h1>
            <p className="m-0 p-0">Milliseconds</p>
          </div>
        </div>
        <div className="d-flex">
          <input
            value={valueinput}
            onChange={(e) => setValueInput(e.target.value)}
            className="p-3 inputValueTodo mt-5 mb-4"
            placeholder="What are you working on?"
          />
        </div>
        <div className="text-center mt-4">
          {status === 0 ? (
            <button className="btn startButton" onClick={start}>
              Start
            </button>
          ) : (
            ""
          )}
          {status === 1 ? (
            <div>
              <button className="btn stopBtn" onClick={stop}>
                Stop
              </button>
              <button className="btn resetButton" onClick={reset}>
                Reset
              </button>
            </div>
          ) : (
            ""
          )}
          {status === 2 ? (
            <div>
              <button className="btn resumeButton" onClick={resume}>
                Resume
              </button>
              <button
                className="btn resetButton resetButtonTwo"
                onClick={reset}
              >
                Reset
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div>
        <h5 className="text-center mt-5"> {renderValue()} </h5>
        <div>
          {experience.map((item) => {
            return (
              <div key={item.id} className=" mt-5 Connector m-0">
                <div className="d-flex p-3 justify-content-center finalValueHeader">
                  <h4 className="pr-2">
                    <span className="value_span">You had a final</span> value
                    <span className="value_span pl-2">of</span>
                  </h4>
                  <h4> {item.valueH} </h4> &nbsp;:&nbsp;
                  <h4> {item.valueM} </h4> &nbsp;:&nbsp;
                  <h4> {item.valueS} </h4> &nbsp;:&nbsp;
                  <h4> {item.valueMS} </h4>
                </div>
                <div className="mt-3 text-center p-3">
                  {item.value >= 0 ? (
                    <p className="value_div">Your list didn't have any value</p>
                  ) : (
                    <p className="value_div">{item.value}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TimerCounter;
