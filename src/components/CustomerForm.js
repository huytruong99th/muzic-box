import React, {useState} from 'react'
import { useForm } from "react-hook-form";
import "./CustomerForm.css"

function CustomerForm() {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(!openModal);
    }
    const handleCloseModal = () => {
        setOpenModal(!openModal);
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();

    const onSubmit = (data) => {
        
        setTimeout(setOpenModal(true), 2000);
    };

    return (
        <div>
            { openModal ? 
            <div className="success-noti">
                <div className="success-noti-center" >
                    <p id="success-message">Đặt phòng thành công!</p>
                    <div class="checkmark-wrapper">
                        <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                        </svg>
                    </div>
                    <div className='btnClose'>
                        <i className="fi fi-sr-cross-circle btnClose-1" onClick={handleCloseModal}></i>
                    </div>
                </div>
                <div className="success-noti-layer" onClick={handleCloseModal} >
                </div>
            </div> : <></>}
            <form onSubmit={handleSubmit(onSubmit)} className="customer-information">
                <div>
                    <label htmlFor="name">Nhập Tên của bạn:</label>
                    <input
                        type="text"
                        name="name"
                        {...register("name", {
                            required: true
                        })}
                    />
                    {errors.name && <p>Vui lòng nhập tên.</p>}
                </div>  
                <div>
                    <label htmlFor="tel">Nhập SĐT của bạn:</label>
                    <input
                        type="tel"
                        name="tel"
                        maxLength="10"
                        {...register("tel", {
                            required: true,
                            pattern: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
                        })}
                    />
                    {errors.tel && <p>Vui lòng nhập SĐT.</p>}
                </div>
                <div>
                    <label htmlFor="email">Nhập Email của bạn (tuỳ chọn):</label>
                    <input
                        type="email"
                        name="email"
                        maxLength="50"
                        {...register("email", {
                            pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/
                        })}
                    />
                    {errors.email && <p>Vui lòng nhập đúng định dạng Email.</p>}
                </div>
                <div>
                    <label htmlFor="note">Ghi chú dành cho nhân viên:</label>
                    <input
                    type="text"
                    name="note"
                    {...register("note")}
                    />
                </div>
                <input type="submit" value="ĐẶT PHÒNG" />
            </form>
        </div>
    );
}

export default CustomerForm