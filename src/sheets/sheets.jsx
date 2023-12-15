import React from 'react';
import './sheets.css';

export function Sheets() {
    return (
        <div>
            <h1>
                    Community Character Sheets
            </h1>
            <div className="pSheets">
                <button className="displaybutton" onclick="displaySheets()">Show All Sheets</button>
            </div>
        </div>
    );
}