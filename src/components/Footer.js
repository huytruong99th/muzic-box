import React from 'react'
import './Footer.css'

function Footer() {

  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='footer-about'>
                <h2>VỀ KARAOKE MUZICBOX</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae nunc a erat laoreet facilisis at vitae mi. Suspendisse fermentum massa vel massa rhoncus finibus. Cras malesuada velit non suscipit lobortis. Phasellus id maximus metus. Maecenas nec placerat orci, eget molestie erat. </p>
            </div>
            <div className='footer-location'>
                <h2>HỆ THỐNG KARAOKE MUZICBOX</h2>
                <div className='location-item'>
                    <h3><li>MUZICBOX Ô CHỢ DỪA</li></h3>
                    <p>Địa chỉ: 237 Ô Chợ Dừa, Q. Đống Đa, Hà Nội<br/>SĐT: 024 666 888</p>
                </div>
                <div className='location-item'>
                <h3><li>MUZICBOX XÃ ĐÀN</li></h3>
                    <p>Địa chỉ: 128 Xã Đàn, Q. Đống Đa, Hà Nội<br/>SĐT: 024 666 777</p>
                </div>
                <div className='location-item'>
                <h3><li>MUZICBOX ĐƯỜNG LÁNG</li></h3>
                    <p>Địa chỉ: 1027 Láng, Q. Đống Đa, Hà Nội<br/>SĐT: 024 666 666</p>
                </div>
                <div className='location-item'>
                <h3><li>MUZICBOX HỒ TÙNG MẬU</li></h3>
                    <p>Địa chỉ: 666 Hồ Tùng Mậu, Q. Cầu Giấy, Hà Nội<br/>SĐT: 024 666 555</p>
                </div>
                <div className='location-item'>
                <h3><li>MUZICBOX TRÀN KHÁT CHÂN</li></h3>
                    <p>Địa chỉ: 207 TRÀN KHÁT CHÂN, Q. Hai Bà Trưng, Hà Nội<br/>SĐT: 024 666 444</p>
                </div>
            </div>
            <div className='footer-map'>
                <h2>BẢN ĐỒ</h2>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3188085547763!2d105.82517035116908!3d21.019925985934446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab783f088fd3%3A0x2a9f6ae076676627!2zMTI3LTE2MSBQLiDDlCBDaOG7oyBE4burYSwgQ2jhu6MgROG7q2EsIMSQ4buRbmcgxJBhLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1681274884713!5m2!1svi!2s" width="450" height="300" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
        <div className='footer-copyright'>
            <h3>Bản quyền thuộc về hệ thống Karaoke MuzicBox. Copyright © MuzicBox 2023.</h3>
        </div>
    </div>
  )
}

export default Footer