// Header.jsx

import './HeaderStyle.css'

function Header() {
    return (
        <section id="header" style={{width: '100%', margin: '0 auto'}}>
            <div className="-brand">
                <div className="-logo">
                    <img src="https://ptcdn.info/mobile/logo-mobile-pantip-white.png" alt=""/>
                </div>
            </div>
            <div className="-center">
                <div className="-top">
                    <div className="-up">
                        <div className="-end-item"><i className="bi bi-chat-right-dots-fill"  style={{fontSize:'24px'}}></i></div>
                        <p>ตั้งกระทู้</p>     
                    </div>
                    <div className="-up">
                        <div className="-end-item"><i className="bi bi-people-fill"  style={{fontSize:'24px'}}></i></div>
                        <p>คอมมูนิตี้</p>
                    </div>
                </div>
            </div>
            <div className="-end">
                <div className="-up">
                    <div className="-end-item"><i className="bi bi-person-fill" style={{fontSize:'24px'}}></i></div>
                    <p>เข้าสู่ระบบ / สมัครสมาชิก</p>     
                </div>
            </div>
        </section>
    )
}
  
  export default Header;  
  