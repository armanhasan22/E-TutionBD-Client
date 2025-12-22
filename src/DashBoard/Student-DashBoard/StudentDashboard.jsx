import React from 'react';
import BrowseTutions from '../../BrowseTutions/BrowseTutions';
import MyTutions from '../MyTutions/MyTutions';
import useAuth from '../../hooks/useAuth';
import { Navigate } from 'react-router';

const StudentDashboard = () => {
    const { user } = useAuth();

    // Check if user exists and has student role
    if (!user) {
        // If not logged in
        return <Navigate to="/login" replace />;
    }

    if (user.role !== 'user') {
        // If logged in but not a student
        return <Navigate to="/unauthorized" replace />;
    }

    // If logged in and student
    return (
        <div>
         <BrowseTutions></BrowseTutions>
     <MyTutions></MyTutions>
        </div>
    );
};

export default StudentDashboard;
