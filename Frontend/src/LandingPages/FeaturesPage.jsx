const FeaturesLandingPage = () => {
  return (
    <>
      <div className="text-white flex flex-col gap-2 bg-slate-950 h-full">
        <div className="flex flex-col justify-center items-center mt-4">
          <h1 className="text-cyan-400 border px-2 py-1 rounded-lg">
            Features
          </h1>
          <h1 className="text-3xl font-bold">
            Everything <span className="text-cyan-400">You Need</span>{" "}
          </h1>
          <h1 className="text-gray-400">
            A complete solution to manage your organization efficiently.
          </h1>
        </div>
        <div className="flex  justify-center gap-4 mt-1 items-center">
          <div className="flex flex-col border bg-white/5 rounded-lg border-cyan-950 justify-center px-3 py-2">
            <h1 className="text-xl text-cyan-600 font-bold">Employee </h1>
            <h1 className="text-gray-400">
              Manage employee <br />
              profiles, departments,
              <br />
              and roles
            </h1>
          </div>
          <div className="flex flex-col border bg-white/5 rounded-lg border-cyan-950 justify-center px-3 py-2">
            <h1 className="text-xl text-cyan-600 font-bold">Attendance </h1>
            <h1 className="text-gray-400">
              Track daily attendance <br /> and working hours <br />{" "}
              efficiently.
            </h1>
          </div>
          <div className="flex flex-col border bg-white/5 rounded-lg border-cyan-950 justify-center px-3 py-2">
            <h1 className="text-xl text-cyan-600 font-bold">Leave </h1>
            <h1 className="text-gray-400">
              Apply, approve <br /> and manage employee <br /> leaves.
            </h1>
          </div>
          <div className="flex flex-col border bg-white/5 rounded-lg border-cyan-950 justify-center px-3 py-2">
            <h1 className="text-xl text-cyan-600 font-bold">Task </h1>
            <h1 className="text-gray-400">
              Assign and track tasks <br /> with deadlines and <br />{" "}
              priorities.
            </h1>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center mt-2">
          <h1 className="border border-cyan-600 px-2 py-1 rounded-xl text-cyan-400">
            Role-Based Access
          </h1>
          <h1 className="text-3xl font-bold">
            Built For <span className="text-cyan-400"> Every Role</span>
          </h1>
          <h1 className="text-gray-400">
            Different dashboards for different responsibilties
          </h1>
        </div>
        <div className="flex justify-center items-center gap-8">
          <div className="flex flex-col border border-cyan-950 px-3 py-2 rounded-xl">
            <h1 className="font-bold  text-cyan-600">Admin</h1>
            <h1>Manage your organization</h1>
            <h1>Manage employees</h1>
            <h1> Create departments</h1>
            <h1>View reports</h1>
            <h1>System settings</h1>
          </div>
          <div className="flex flex-col border border-cyan-950 px-3 py-2 rounded-xl">
            <h1 className="font-bold  text-cyan-600">Manager</h1>
            <h1>Manage your team</h1>
            <h1>View team members</h1>
            <h1>Assign tasks</h1>
            <h1>Approve leave requests</h1>
            <h1>Track attendence</h1>
          </div>
          <div className="flex flex-col border border-cyan-950 px-3 py-2 rounded-xl">
            <h1 className="font-bold  text-cyan-400">Employee</h1>
            <h1>View Profile</h1>
            <h1>Track Attendance</h1>
            <h1>Manage Your Tasks</h1>
            <h1>Apply for Leave</h1>
            <h1>View Leave Status</h1>
          </div>
        </div>
      </div>
    </>
  );
};
export default FeaturesLandingPage;
