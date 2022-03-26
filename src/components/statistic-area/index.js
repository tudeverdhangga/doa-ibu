import React from 'react';
import Item from './item'
import statistic_area from '../../dump/statistic_area.json'

const StatisticArea = () => {
    return (
        <>
            <div className="statistic-area py-20">
                <div className="layer"></div>
                <div className="mx-auto container relative text-center flex justify-center text-white">
                    {statistic_area.statistic?.map(item => 
                        <Item data={item} />
                    )}
                </div>
            </div>
        </>
    )
}

export default StatisticArea