import { useState, useEffect, useRef } from "react"

const Timer = () => {  
    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(true) // เริ่มทันที
    const intervalRef = useRef(null)

    const convertToString = (totalSeconds) => {
        const MINUTE_SECOND = 60
        const HOUR_SECOND = 3600
        
        const hours = Math.floor(totalSeconds / HOUR_SECOND)
        const minutes = Math.floor((totalSeconds % HOUR_SECOND) / MINUTE_SECOND)
        const remainingSeconds = (totalSeconds % MINUTE_SECOND).toFixed(1) // แสดงทศนิยม
        
        if (hours > 0) {
            return hours + 'h ' + minutes + 'm ' + remainingSeconds + 's'
        } else if (minutes > 0) {
            return minutes + 'm ' + remainingSeconds + 's'
        } else {
            return remainingSeconds + 's'
        }
    }

    const handleReset = () => {
        setSeconds(0)
    }

    const handleRun = () => {
        if (isRunning) {
            // หยุดจับเวลา
            setIsRunning(false)
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
        } else {
            // เริ่มจับเวลา
            setIsRunning(true)
        }
    }

    useEffect(() => {
        if (isRunning) {
            intervalRef.current = setInterval(() => {
                setSeconds(prevSeconds => prevSeconds + 0.1) // เพิ่มทีละ 0.1 วินาที
            }, 50) // 20x speed (50ms)
        }

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
                intervalRef.current = null
            }
        }
    }, [isRunning])

    return (
        <div className="border border-black border-2 rounded-3 mx-auto p-4 bg-light mt-3" style={{ width: "fit-content" }}>
            <h1 className="text-center text-primary mb-4">Timer</h1>
            
            <div className="text-center mb-4">
                <input 
                    value={convertToString(seconds)} 
                    readOnly
                    className="form-control text-center fs-4 fw-bold border-2 bg-white"
                    style={{ width: "220px", margin: "0 auto" }}
                />
            </div>

            <div className="d-flex justify-content-center gap-3">
                <button 
                    className="btn btn-danger"
                    onClick={handleReset}
                >
                    <i className="bi bi-arrow-clockwise"></i>&nbsp;RESET
                </button>
                <button 
                    className={isRunning ? "btn btn-warning" : "btn btn-success"}
                    onClick={handleRun}
                >
                    <i className={isRunning ? "bi bi-pause-fill" : "bi bi-play-fill"}></i>&nbsp;
                    {isRunning ? "PAUSE" : "RESUME"}
                </button>
            </div>
        </div>
    )
}

export default Timer