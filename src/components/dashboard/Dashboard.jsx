import React from 'react';
import { FaAngleDown, FaArrowRight } from "react-icons/fa6";
import '../../styles/Dashboard.css';
import humanAnatomy from '../../assets/human_anatomy.png';
import { healthStatusData } from '../../data/healthData';
import HealthStatusCards from './HealthStatusCards';
import activity_graph from '../../assets/activity_graph.jpg';
import Calendar from './AppointmentSection';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <div className='AnatomySection'>

                <div className='dashboard-heading'>
                    <h2>Dashboard</h2>
                    <p><span>This week</span><FaAngleDown /></p>
                </div>

                <div className='HealthStatusCards'>
                    <div className='anatomy-img'>
                        <img src={humanAnatomy} alt="Human Anatomy" />
                    </div>
                    <div className='status-cards'>
                        <HealthStatusCards data={healthStatusData} />
                        <p><span>Details</span><FaArrowRight /></p>
                    </div>
                </div>

                <div className='ActivitySection'>
                    <div className='activity-heading'>
                        <h4>Activity</h4>
                        <p><span>3 appointments on this week</span></p>
                    </div>
                    <div className='activity-chart'>
                        <img src={activity_graph} alt="" />
                    </div>
                </div>
            </div>

            <div className='AppointmentSection'>
                <Calendar />
            </div>
        </div>
    )
}

export default Dashboard;