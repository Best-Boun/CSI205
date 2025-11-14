import React from 'react';
import { Outlet } from 'react-router-dom';
import AppHeader from '../Components/AppHeader';
import AppNavbar from '../Components/AppNavbar';
import { Badge } from 'react-bootstrap';

function AppLayout({products, carts, setToken}) {
  return (
    <div>
      {/* หัวหน้าเว็บ */}
      <AppHeader />

      {/* เมนู */}
      <AppNavbar products={products} carts={carts} setToken={setToken}/>

      {/* ตำแหน่งเนื้อหาที่เปลี่ยนไปตามหน้า */}
      <div style={{
        border: '2px solid black',
    display: 'fit-content',     // ✅ ให้ขนาดขอบตามขนาดเนื้อหาภายใน
    margin: '20px auto',
    padding: '20px',
    borderRadius: '12px',
    textAlign: 'center',
    backgroundColor: '#f9f9f9',  // (optional)
      }}>
        
        <Outlet />  {/* ✅ ตรงนี้จะเปลี่ยนไปตามหน้าที่เลือก */}
      </div>
      <div className="d-flex justify-content-center gap-3">
        <Badge bg="secondary">SPU</Badge>-
        <Badge bg="secondary">SIT</Badge>-
        <Badge bg="secondary">CSI</Badge>
      </div>
      <a
        href="https://www.facebook.com/best.idk.2025"target="_blank" rel="noopener noreferrer">
        <i className="bi bi-facebook" style={{ fontSize: "3rem", marginRight: "20px" }} ></i>
      </a>
    </div>
    
  );
}

export default AppLayout;
