import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../style/Home.css';

const Info = () => {
    const [selectedDept, setSelectedDept] = useState('Electricity');

    const departmentDetails = {
        Electricity: [
            { name: 'John Doe', designation: 'Chief Engineer', contact: '+1 111 222 333' },
            { name: 'Jane Smith', designation: 'Assistant Engineer', contact: '+1 444 555 666' },
            { name: 'Mark Lee', designation: 'Technician', contact: '+1 777 888 999' },
        ],
        Sanitation: [
            { name: 'Sara Ali', designation: 'Sanitation Head', contact: '+1 123 456 789' },
            { name: 'Tom Hardy', designation: 'Field Supervisor', contact: '+1 321 654 987' },
            { name: 'Rita Gomez', designation: 'Worker', contact: '+1 234 567 890' },
        ],
        Geography: [
            { name: 'Alan Walker', designation: 'Geographer', contact: 'alan@region.gov' },
            { name: 'Nina Brown', designation: 'Research Officer', contact: 'nina@region.gov' },
            { name: 'David Chen', designation: 'Cartographer', contact: 'david@region.gov' },
        ],
        'Census Department': [
            { name: 'Emily Rose', designation: 'Census Officer', contact: '+1 999 888 777' },
            { name: 'Oliver Twist', designation: 'Data Analyst', contact: '+1 666 555 444' },
            { name: 'Sophia Hill', designation: 'Surveyor', contact: '+1 333 222 111' },
        ],
    };

    return (
        <div className="p-4 info-main">
            {/* Filter Buttons */}
            <div className="flex justify-evenly flex-wrap gap-2 mb-6">
                {Object.keys(departmentDetails).map((dept) => (
                    <button
                        key={dept}
                        className={`filter-btn text-lg rounded-2xl border-2 transition cursor-pointer ${
                            selectedDept === dept ? 'select' : 'notselect'
                        }`}
                        
                        onClick={() => setSelectedDept(dept)}
                    >
                        {dept}
                    </button>
                ))}
            </div>

            {/* Table for Selected Department */}
            <div className="overflow-x-auto">
                <table className="min-w-full border  bg-white rounded-md">
                    <thead style={{backgroundColor:"#262626"}} className="text-white">
                        <tr>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Designation</th>
                            <th className="py-2 px-4 border-b">Contact</th>
                        </tr>
                    </thead>
                    <tbody>
                        {departmentDetails[selectedDept].map((person, index) => (
                            <tr style={{backgroundColor:"#F1FFE7"}} key={index} className="hover:bg-blue-50 transition">
                                <td className="text-center py-2 px-4 border-b font-medium">{person.name}</td>
                                <td className="text-center py-2 px-4 border-b">{person.designation}</td>
                                <td className="text-center py-2 px-4 border-b">{person.contact}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="mt-4 text-center">
    <Link to={'/officals/'}>
        <button style={{backgroundColor:"#262626"}}  className="cursor-pointer  text-white px-4 py-2 rounded-md hover:bg-blue-600 transition border border-rounded">
            More contacts...
        </button>
    </Link>
</div>
        </div>
    );
};

export default Info;
