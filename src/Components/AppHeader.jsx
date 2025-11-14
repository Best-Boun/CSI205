
const AppHeader = () => {
  return (
    <div
      style={{
        border: "5px solid #8400ffff",      //เปลี่ยนสีขอบ
        borderRadius: "15px",         //ขอบโค้ง
        padding: "20px",
        margin: "20px auto",
        width: "fit-content",
      }}
    >
      <i><h1 className="text-center font-monospace fw-bold">CSI205 การพัฒนาโปรแกรมส่วนหน้า</h1></i>
    </div>
  );
};

export default AppHeader;

