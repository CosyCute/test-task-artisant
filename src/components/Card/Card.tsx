import React from 'react';
import './Card.scss'
import { Product } from '../../App';
export interface CardItemProps {
    element: Product
}

const Card = (props: CardItemProps) => {
    return (
        <div className='card'>
            <div className='card-top'>
                <div>
                    <p>created by</p>
                    <span>{props.element.created_by.display_name}</span>
                </div>
                <div className='nft-name'>
                    <span>
                        {props.element.name}
                    </span>
                </div>
            </div>
            <div className='card-bottom'>
                <div className='quantity'>
                    <p>available</p>
                    <span>{props.element.quantity_available} of {props.element.quantity_nfts_created}</span>
                </div>
                <div className='price'>
                    <p>price</p>
                    <span>{props.element.initial_price} ETH</span>
                </div>
            </div>
        </div>
    );
};

export default Card;