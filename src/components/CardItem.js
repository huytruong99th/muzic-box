import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';

function CardItem(props) {
    const [locationPermission, setLocationPermission] = useState(false)

    const handleClick = () => {
        const newStore = props.text;
        if (props.onClick() === undefined) {
            window.scrollTo(0, 0);
        }
        props.onClick(newStore);
        
        };

    const renderType = props.renderType;
    const checkPermission = () => {
        navigator.permissions.query({ name: "geolocation" }).then((result) => {
          if (result.state === "granted") {
            setLocationPermission(true);
          } else {
            setLocationPermission(false);
          }
        })
      }

    setInterval(checkPermission, 500);

  return (
        renderType ? <li className='cards__item' onClick={handleClick} value={props.text}>
            <Link className='cards__item__link' to={props.path}>
                <figure className='cards__item__pic-wrap' data-category={props.label}>
                    { locationPermission && props.distance !== null ? 
                        <div className='cards__item__distance__layer'>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 64 64" width="24"><g id="Pin"><path d="m32 0a24.0319 24.0319 0 0 0 -24 24c0 17.23 22.36 38.81 23.31 39.72a.99.99 0 0 0 1.38 0c.95-.91 23.31-22.49 23.31-39.72a24.0319 24.0319 0 0 0 -24-24zm0 35a11 11 0 1 1 11-11 11.0066 11.0066 0 0 1 -11 11z"/></g></svg>
                            <p>&nbsp;&nbsp;{props.distance}</p>
                        </div>
                    :
                    <></>
                    }
                    <img src={props.src} alt='Phong Karaoke' className='cards__item__img' />
                </figure>
                <div className='cards__item__info'>
                    <h5 className='cards__item__text'>{props.text}</h5>
                </div>
            </Link>
        </li>
        :
        <li className='cards__item__list'>
                <div className='cards__item__list__info'>
                        <h5 className='cards__item__list__text'>{props.text}</h5>
                        <div>
                            { /*locationPermission &&*/ props.distance !== null ? <div className='cards__item__list__distance'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="28" viewBox="0 0 64 64" width="28"><g id="Pin"><path d="m32 0a24.0319 24.0319 0 0 0 -24 24c0 17.23 22.36 38.81 23.31 39.72a.99.99 0 0 0 1.38 0c.95-.91 23.31-22.49 23.31-39.72a24.0319 24.0319 0 0 0 -24-24zm0 35a11 11 0 1 1 11-11 11.0066 11.0066 0 0 1 -11 11z"/></g></svg>
                                <p>{props.distance}</p>
                            </div>
                            :
                            <></>
                            }
                        </div>
                </div>
                <div className='cards__item__list__action'>
                    <Button buttonStyle='btn--primary' buttonSize='btn--small' className='first-btn' path={props.path}>ĐẶT PHÒNG</Button>
                    <Button buttonStyle='btn--outline' buttonSize='btn--small'>CHỈ ĐƯỜNG</Button>
                </div>
        </li>
  );
}

export default CardItem