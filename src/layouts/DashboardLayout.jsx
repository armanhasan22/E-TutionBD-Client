// import React from 'react';
// import { Link } from 'react-router';
// import { Outlet } from 'react-router';

// const DashboardLayout = () => {
//     return (
   
//                   <div className="drawer lg:drawer-open max-w-7xl mx-auto">
//   <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
//   <div className="drawer-content">
//     {/* Navbar */}
//     <nav className="navbar w-full bg-base-300">
//       <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
//         {/* Sidebar toggle icon */}

//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path><path d="M9 4v16"></path><path d="M14 10l2 2l-2 2"></path></svg>
//       </label>
//       <div className="px-4 text-blue-950 font-bold">TutionBD Dashboard</div>
//     </nav>
//     {/* Page content here */}
//     <Outlet></Outlet>

//     <div className="p-4">Page Content</div>
//   </div>

//   <div className="drawer-side is-drawer-close:overflow-visible">
//     <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
//     <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
//       {/* Sidebar content here */}


//       <ul className="menu w-full grow">
//         {/* List item */}
//         <li>
//           <Link to="/" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
//             {/* Home icon */}


//             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
//             <span className="is-drawer-close:hidden text-secondary font-semibold">Homepage</span>
//           </Link>
//         </li>

// </div>
//         </div>

//     );
// };

// export default DashboardLayout;


import React from 'react';
import { BsBookFill } from 'react-icons/bs';
import { NavLink } from 'react-router';
import { Link } from 'react-router';
import { Outlet } from 'react-router';
import useRole from '../hooks/UseRole';
import TutorDashboard from '../DashBoard/TutorDashboard/TutorDashboard';
import StudentDashboard from '../DashBoard/Student-DashBoard/StudentDashboard';
import { LiaChalkboardTeacherSolid } from 'react-icons/lia';
import { GiTeacher } from 'react-icons/gi';


const DashboardLayout = () => {
    
const {role}= useRole()

    return (
        <div className="drawer lg:drawer-open max-w-7xl mx-auto">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300">
                    <label htmlFor="my-drawer-4" aria-label="open sidebar" className="btn btn-square btn-ghost">
                        {/* Sidebar toggle icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                            <path d="M9 4v16"></path>
                            <path d="M14 10l2 2l-2 2"></path>
                        </svg>
                    </label>
                    <div className="px-4 text-blue-950 font-bold">TutionBD Dashboard</div>
                </nav>
                {/* Page content here */}
                <Outlet />
                <div className="p-4">Page Content</div>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        {/* List item */}
                        <li>
                            <Link to="/" className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
                                {/* Home icon */}
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor" className="my-1.5 inline-block size-4">
                                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                </svg>
                                <span className="is-drawer-close:hidden text-blue-950  font-bold">Homepage</span>
                            </Link>
                        </li>

                        
{/* our dashboard links */}


{/* <li> 
    <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="StudentDashBoard"
    to="/dashboard/StudentDashboard" >
       <BsBookFill />
        <span className="is-drawer-close:hidden font-bold text-blue-950 ">Student DashBoard</span>
     
        </NavLink>
    
  
</li> */}


{/* <li>
    {
    role ==='user' && <> 

    <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Browse Tution"
    to="/dashboard/browseTutions" >
       <BsBookFill />
        <span className="is-drawer-close:hidden font-bold text-blue-950 ">Browse Tution </span>
     
        </NavLink>
    
    <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="MyTutions"
    to="/dashboard/my-tutions" >
       <BsBookFill />
        <span className="is-drawer-close:hidden font-bold text-blue-950 ">My Tutions</span>
     
        </NavLink>
    
  <StudentDashboard></StudentDashboard>

    
  


  
    
    
    
    </>
}

</li>
<li>
{
    role ==='tutor' && <>
    <li>
<TutorDashboard></TutorDashboard>

    </li>
    
    
    
    </>
}

</li> */}
<li>

    {role === 'user' && <>
   
     <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Browse Tution"
    to="/dashboard/browseTutions" >
       <BsBookFill />
        <span className="is-drawer-close:hidden font-bold text-blue-950 ">Browse Tution </span>
     
        </NavLink>
    
    <NavLink className="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="MyTutions"
    to="/dashboard/my-tutions" >
<GiTeacher />


        <span className="is-drawer-close:hidden font-bold text-blue-950 ">My Tutions</span>
     
        </NavLink>
    {/* <StudentDashboard /> */}
</>}

{role === "tutor" && (
  <>
    <li>
      <Link to="/dashboard/tutor-dashboard">Tutor Dashboard</Link>
    </li>
  </>
)}


</li>





                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
