import React from 'react';

function Data({ stats }) {
    return (
        <div className="data">
            <div className="Total_stu">
                <h4>Total Students</h4>
                <p>{stats.placed + stats.unplaced}</p>
            </div>

            <div className="Placed">
                <h4>Placed Students</h4>
                <p>{stats.placed}</p>
            </div>

            <div className="Unplaced">
                <h4>Unplaced Students</h4>
                <p>{stats.unplaced}</p>
            </div>
        </div>
    );
}

export default Data;
