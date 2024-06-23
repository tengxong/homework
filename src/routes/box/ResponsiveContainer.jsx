
import React from 'react'
import './ResponsiveContainer.css';
import { Typography } from '@mui/material';

export default function ResponsiveContainer() {
    return (
            <div className="Text">
                {[...Array(3).keys()].map((num) => (
                    <div className="box" key={num + 1}>{num + 1}</div>
                ))}
            </div>
    )

}
