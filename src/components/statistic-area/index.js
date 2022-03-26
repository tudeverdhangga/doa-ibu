import React from 'react';
import Item from './item'
import statistic_area from '../../dump/statistic_area.json'

const StatisticArea = () => {
    return (
        <>
            <div className="statistic-area py-20 w-full">
                <div className="layer"></div>
                <div className="mx-auto container relative text-center justify-items-center text-white grid grid-cols-2 md:grid-cols-4 gap-4">
                    {statistic_area.statistic?.map(item => 
                        <Item data={item} />
                    )}
                </div>
            </div>
        </>
    )
}

export default StatisticArea