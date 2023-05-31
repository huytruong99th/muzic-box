import React from 'react'
import { useForm } from "react-hook-form";
import "./CustomerForm.css"

function CustomerForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
      } = useForm();
    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="customer-information">
            <div>
                <label htmlFor="name">Nhập Tên của bạn:</label>
                <input
                {...register("name", {
                    validate: (value) => value !== "",
                    required: true, 
                    maxLength: 50
                })}
                />
                {errors.name && <p>Vui lòng nhập tên.</p>}
            </div>  
            <div>
                <label htmlFor="tel">Nhập SĐT của bạn:</label>
                <input
                type="tel"
                maxLength="10"
                pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                {...register("tel", {
                    validate: (value) => value.length === 10,
                    required: true, 
                    maxLength: 10,
                })}
                />
                {errors.tel && <p>Vui lòng nhập SĐT.</p>}
            </div>
            <div>
                <label htmlFor="email">Nhập Email của bạn (tuỳ chọn):</label>
                <input
                type="email"
                maxLength="50"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                {...register("email", {
                       
                })}
                />
            </div>
            <div>
                <label htmlFor="note">Ghi chú dành cho nhân viên:</label>
                <input
                type="text"
                {...register("note")}
                />
            </div>
            <input type="submit" value="ĐẶT PHÒNG" />
        </form>
    );
}

export default CustomerForm