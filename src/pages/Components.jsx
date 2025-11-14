import Value from '../Components/Value';
import Adder from '../Components/Adder';
import Temperature from '../Components/Temperature';
import Timer from '../Components/Timer';

const Components = ({ counter, setCounter }) => {
  return (
    <div
      style={{
        width: "1000000px",
        maxWidth: "1000px",
        margin: "20px auto",
        padding: "20px",
        borderRadius: "20px",
        backgroundImage: "url('src/pages/cat.png')", // ใส่ภาพพื้นหลังตามต้องการ
        backgroundSize: "cover",
        backgroundPosition: "center",
        boxShadow: "0 0 10px rgba(0,0,0,0.3)",
      }}
      className="text-center"
    >
      {/* หัวข้อใหญ่ */}
      <h3 className="fw-bold bg-dark text-white p-2 rounded mb-4">
        REACT COMPONENTS
      </h3>

      {/* แถวที่ 1: Counter + Add */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3">
          <div className="">
            <Value name="COUNTER" value={counter} setValue={setCounter} type="integer" />
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="">
            <Adder />
          </div>
        </div>
      </div>

      {/* แถวที่ 2: Timer */}
      <div className="row mb-4 justify-content-center">
        <div className="col-md-6">
          <div className="">
            <Timer />
          </div>
        </div>
      </div>

      {/* แถวที่ 3: Temperature */}
      <div className="row mb-3">
        <div className="col">
          <div className="">
            <Temperature />
          </div>
        </div>
      </div>

      {/* ชื่อ */}
      <div className="pt-3 fw-bold bg-dark text-white rounded">
        นายสุรวุฒิ บุญยู้ รหัส <b>67144643</b>
      </div>
    </div>
  );
};

export default Components;
