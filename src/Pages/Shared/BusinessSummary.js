import React from 'react';
import BusinessSummaryInfo from './BusinessSummaryInfo';
import clock from '../../assets/icons/clock.svg'
const BusinessSummary = () => {
    return (
        <div>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-5'>
                <BusinessSummaryInfo cardname="Feedbacks" cardTitle="300+" img="https://static.vecteezy.com/system/resources/previews/002/266/103/original/positive-good-feedback-icon-vector.jpg"></BusinessSummaryInfo>
                <BusinessSummaryInfo cardname="Complete Projects" cardTitle="350" img="https://previews.123rf.com/images/arcady31/arcady311612/arcady31161200081/67623690-project-completed-vector-icon.jpg"></BusinessSummaryInfo>
                <BusinessSummaryInfo cardname="Happy Clients" cardTitle="200+" img="https://icons.iconarchive.com/icons/custom-icon-design/silky-line-user/512/users-icon.png"></BusinessSummaryInfo>
            </div>
        </div>
    );
};

export default BusinessSummary;
