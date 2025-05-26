import React from "react";
import "../../styles/HealthStatusCards.css";

const HealthStatusCards = ({ data }) => {
    return (
        <div className="card-container">
            {data.map((item, idx) => {
                const statusColor = item.progress >= 70 ? 'green' : item.progress >= 50 ? 'orange' : 'red';
                return (
                    <div key={idx} className="card">
                        <div className="card-header">
                            <span className="card-icon">{item.icon}</span>
                            <div>
                                <div className="card-title">{item.name}</div>
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="card-date">Date: {item.date}</div>
                            <div className="progress-bar">
                                <div
                                    className={`progress-fill ${statusColor}`}
                                    style={{ width: `${item.progress}%` }}
                                ></div>
                            </div>
                        </div>

                    </div>
                );
            }
            )}
        </div>
    );
};

export default HealthStatusCards;