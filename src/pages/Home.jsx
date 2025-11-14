import React from "react";
import ForwardToHome from "./ForwardToHome";
import catImg from "./good.png";


const Home = () => {
  return (
    
    <div className="course-details">
      {/* ส่วนรูปโปรไฟล์ */}
      <div className="profile-section">
        <img
          src={catImg} // ✅ ใช้ตัวแปรแทน path
          alt="Instructor Profile"
          className="profile-photo"
        />
      </div>

      {/* ส่วนรายละเอียดคอร์ส */}
      <div className="course-info">
        <h1>67144643 นาย สุรวุฒิ บุญยู้</h1>
      </div>
    </div>
    
  );
};

export default Home;
