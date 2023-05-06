import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {

const handleClick = () => {
    const newLocation = props.value;
    if (props.onClick() === undefined) {
        window.scrollTo(0, 0);
    }
    props.onClick(newLocation);
}

  return (
        <li className='cards__item' onClick={handleClick} value={props.value}>
            <Link className='cards__item__link' to={props.path}>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    <img src={props.src} alt='Phong Karaoke' className='cards__item__img' />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                </div>
            </Link>
        </li>
  );
}

export default CardItem