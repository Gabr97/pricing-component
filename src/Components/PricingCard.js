import React from 'react'

function PricingCard(props) {
    return (
        <div className={`${props.plan == 'professional' ? 'pro' : ''} card`}>
            <div className='card-body'>
                <span className='plan-title'>{props.plan}</span>
                <span className='price'>
                    <b>$
                        {props.monthlySelection ? props.monthly : props.anually}
                    </b>
                    {props.monthlySelection ? ' /month' : ' /year'}
                </span>
                <div className='line'></div>
                <ul className='plan-features'>
                    <li>{props.features}</li>
                    <li>{props.components}</li>
                    <li>{props.tools ? 'Build tools and examples' : ''}</li>
                </ul>
                <a className='get-started'>
                    get started
                </a>
            </div>
        </div>
    )
}
export default PricingCard