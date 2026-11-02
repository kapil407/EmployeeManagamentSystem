import { useState } from "react";
import EmployeeSideBar from "../Employee/EmployeeSideBar";
import { motion } from "motion/react";

import {
  FaWallet,
  FaCoins,
  FaGift,
  FaMinusCircle,
  FaMoneyBillWave,
  FaFileInvoice,
  FaEye,
  FaDownload,
  FaRupeeSign,
  FaCircle,
  FaTimes,
  FaPrint,
  FaCalendarAlt,
} from "react-icons/fa";

const EmpSalary = () => {

  const [selectedMonth, setSelectedMonth] = useState("2026-10");
  const [showPayslip, setShowPayslip] = useState(false);

  // Demo salary data
  const salaryData = {
    monthlySalary: 50000,
    allowances: 5000,
    deductions: 3000,
    netSalary: 52000,

    employeeId: "BW1024",
    employeeName: "Rahul Sharma",
    department: "Software Development",
    designation: "Backend Developer",

    paymentDate: "05 Nov, 2026",
  };

  const salaryHistory = [
    { month: "October 2026", date: "2026-10", gross: 55000, deduction: 3000, net: 52000, status: "Paid" },
    { month: "September 2026", date: "2026-09", gross: 55000, deduction: 3000, net: 52000, status: "Paid" },
    { month: "August 2026", date: "2026-08", gross: 55000, deduction: 3000, net: 52000, status: "Paid" },
    { month: "July 2026", date: "2026-07", gross: 55000, deduction: 3000, net: 52000, status: "Paid" },
    { month: "June 2026", date: "2026-06", gross: 55000, deduction: 3000, net: 52000, status: "Paid" },
  ];

  const selectedSalary = salaryHistory.find(
    (item) => item.date === selectedMonth
  );

  const selectedMonthName = selectedSalary?.month || "October 2026";

  const formatMoney = (amount) =>
    amount.toLocaleString("en-IN");

  const totalEarnings = 660000;
  const totalDeductions = 36000;
  const totalPaid = 624000;

  const handlePrint = () => {
    window.print();
  };

  const selectedPayslip = selectedSalary || salaryHistory[0];

  return (
    <div className="min-h-screen w-full flex bg-slate-900">

      <EmployeeSideBar />

      <motion.main 
      initial={{
        opacity:0,y:0
      }}
      whileInView={{opacity:1,y:0}}
      transition={{
        duration:.4
      }}
      className="flex-1 min-w-0 px-3 m-2">

        <div className="border border-slate-700 bg-slate-800 rounded-xl px-4 py-1.5">

          {/* Page Header */}
          <header className="mb-1">

            <h1 className="text-3xl font-bold text-cyan-400">
              Salary
            </h1>

            <p className="text-gray-400 text-sm mt-1">
              View your salary details, payslips and payment history.
            </p>

          </header>

          {/* Salary Banner */}
          <section className="bg-gradient-to-r from-blue-900 to-indigo-900 border border-blue-800 rounded-xl py-1 px-4 flex items-center justify-between mb-1.5">

            <div className="flex items-center gap-4">

              <FaWallet className="text-4xl text-blue-300" />

              <div>
                <h2 className="text-xl font-bold text-white">
                  My Salary
                </h2>

                <p className="text-blue-200 text-sm">
                  Manage your salary and payment details.
                </p>
              </div>

            </div>

            
          </section>

          {/* Salary Summary Cards */}
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-1 mb-1.5">

          
            <div className="flex items-center gap-4 justify-center text-white bg-slate-700 rounded-xl py-1.5 ">
                <FaCoins size={50} className="text-green-400 bg-green-500/15 p-2 rounded-xl"/>
                <div className="flex items-center flex-col">
                    <span className="font-bold  text-slate-400">Monthly Salary</span>
                    <span className="text-xl font-bold ">{salaryData.monthlySalary}</span>
                </div>
            </div>

           
             <div className="flex items-center gap-4 justify-center text-white bg-slate-700 rounded-xl py-1.5 ">
                <FaGift size={50} className="text-blue-400 bg-blue-500/15 p-2 rounded-xl"/>
                <div className="flex items-center flex-col">
                    <span className="font-bold  text-slate-400">Allowances</span>
                    <span className="text-xl font-bold ">{salaryData.allowances}</span>
                </div>
            </div>


              <div className="flex items-center gap-4 justify-center text-white bg-slate-700 rounded-xl py-1.5 ">
                <FaMinusCircle size={50} className="text-red-400 bg-red-500/15 p-2 rounded-xl"/>
                <div className="flex items-center flex-col">
                    <span className="font-bold  text-slate-400">Deductions</span>
                    <span className="text-xl font-bold ">{salaryData.deductions}</span>
                </div>
            </div>

          
             <div className="flex items-center gap-4 justify-center text-white bg-slate-700 rounded-xl py-1.5 ">
                <FaWallet size={50} className="text-purple-400 bg-purple-500/15 p-2 rounded-xl"/>
                <div className="flex items-center flex-col">
                    <span className="font-bold  text-slate-400">Net Salary</span>
                    <span className="text-xl font-bold ">{salaryData.netSalary}</span>
                </div>
            </div>

          </section>

          {/* Main Grid */}
          <section className="grid grid-cols-1 xl:grid-cols-2 gap-2">

            {/* Latest Payslip */}
            <div className="bg-slate-700 rounded-xl px-4  py-1.5">

              <header className="flex flex-wrap justify-between items-center gap-3 border-b border-slate-600 pb-2 mb-1">

                <h2 className="text-xl font-bold text-white flex items-center gap-3">
                  <FaFileInvoice className="text-cyan-400" />
                  Latest Payslip
                </h2>

                <select
                  value={selectedMonth}
                  onChange={(e) => setSelectedMonth(e.target.value)}
                  className="bg-slate-800 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm outline-none focus:border-cyan-400"
                >

                  {salaryHistory.map((item) => (
                    <option key={item.date} value={item.date}>
                      {item.month}
                    </option>
                  ))}

                </select>

              </header>

              {/* Employee Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-1">

                <div className="space-y-2">

                  <DetailRow
                    label="Employee ID"
                    value={salaryData.employeeId}
                  />

                  <DetailRow
                    label="Name"
                    value={salaryData.employeeName}
                  />

                  <DetailRow
                    label="Department"
                    value={salaryData.department}
                  />

                  <DetailRow
                    label="Designation"
                    value={salaryData.designation}
                  />

                </div>

                <div className="space-y-2">

                  <DetailRow
                    label="Pay Period"
                    value={selectedMonthName}
                  />

                  <DetailRow
                    label="Payment Date"
                    value={salaryData.paymentDate}
                  />

                  <DetailRow
                    label="Payment Status"
                    value={selectedSalary?.status || "Not Available"}
                  />

                </div>

              </div>

              {/* Earnings */}
              <div className="bg-slate-800 rounded-lg px-3 py-2 mb-2 mt-2">

                <div className="flex justify-between items-center bg-green-500/15 text-green-400 rounded-lg px-3 py-2 ">

                  <h3 className="font-bold">
                    Earnings
                  </h3>

                  <span className="font-bold">
                    ₹{formatMoney(salaryData.monthlySalary + salaryData.allowances)}
                  </span>

                </div>

                <AmountRow
                  label="Basic Salary"
                  amount={salaryData.monthlySalary}
                />

                <AmountRow
                  label="Allowances"
                  amount={salaryData.allowances}
                />

              </div>

              {/* Deductions */}
              <div className="bg-slate-800 rounded-lg px-3 mb-1.5 py-1">

                <div className="flex justify-between items-center bg-red-500/15 text-red-400 rounded-lg px-3 mb-1">

                  <h3 className="font-bold">
                    Deductions
                  </h3>

                  <span className="font-bold">
                    ₹{formatMoney(salaryData.deductions)}
                  </span>

                </div>

                <AmountRow label="Provident Fund (PF)" amount={1500} />

                <AmountRow label="Professional Tax" amount={200} />

                <AmountRow label="Other Deductions" amount={1300} />

              </div>

              {/* Net Salary */}
              <div className="border border-blue-400 bg-blue-500/10 rounded-xl px-4 mt-3 py-1 flex justify-between items-center">

                <h2 className="text-lg font-bold text-white">
                  Net Salary (In Hand)
                </h2>

                <h2 className="text-2xl font-bold text-cyan-400 flex items-center">
                  <FaRupeeSign />
                  {formatMoney(selectedPayslip.net)}
                </h2>

              </div>

              {/* Buttons */}
              {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1.5">

                <button
                  onClick={() => setShowPayslip(true)}
                  className="bg-slate-800 hover:bg-slate-600 border border-slate-600 text-white rounded-lg py-3 flex justify-center items-center gap-2 font-semibold"
                >
                  <FaEye />
                  View Payslip
                </button>

                <button
                  onClick={handlePrint}
                  className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 rounded-lg py-3 flex justify-center items-center gap-2 font-bold"
                >
                  <FaDownload />
                  Download / Print
                </button>

              </div> */}

            </div>

            {/* Right Side */}
            <div className="flex flex-col gap-1.5">

              {/* Annual Overview */}
              <div className="bg-slate-700 rounded-xl px-4 py-2 ">

                <h2 className="text-xl font-bold text-white mb-2">
                  Salary Overview (This Year)
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-around gap-5">

                  {/* Circular Chart */}
                  <div
                    className="w-40 h-40 rounded-full flex items-center justify-center shrink-0"
                    style={{
                      background: "conic-gradient(#22c55e 94.5%, #334155 0)"
                    }}
                  >

                    <div className="w-32 h-32 rounded-full bg-slate-800 flex flex-col items-center justify-center">

                      <h2 className="text-xl font-bold text-white">
                        ₹{formatMoney(totalPaid)}
                      </h2>

                      <span className="text-gray-400 text-xs">
                        Net Paid
                      </span>

                    </div>

                  </div>

                  {/* Overview Details */}
                  <div className="w-full space-y-4">

                    <OverviewRow
                      label="Total Earnings"
                      amount={totalEarnings}
                      color="text-green-400"
                    />

                    <OverviewRow
                      label="Total Deductions"
                      amount={totalDeductions}
                      color="text-red-400"
                    />

                    <OverviewRow
                      label="Net Paid"
                      amount={totalPaid}
                      color="text-blue-400"
                    />

                  </div>

                </div>

              </div>

              {/* Salary History */}
              <div className="bg-slate-700 rounded-xl px-4 py-1 flex-1">

                <header className="flex justify-between items-center mb-2">

                  <h2 className="text-xl font-bold text-white">
                    Salary History
                  </h2>

                  <span className="text-cyan-400 text-sm">
                    {salaryHistory.length} Records
                  </span>

                </header>

                <div className="overflow-x-auto">

                  <table className="w-full min-w-[520px] text-left text-sm">

                    <thead>

                      <tr className="bg-slate-600 text-gray-200">

                        <th className="p-3">Month</th>

                        <th className="p-3">Gross Salary</th>

                        <th className="p-3">Deductions</th>

                        <th className="p-3">Net Salary</th>

                        <th className="p-3">Status</th>

                      </tr>

                    </thead>

                    <tbody>

                      {salaryHistory.map((item) => (

                        <tr
                          key={item.date}
                          onClick={() => setSelectedMonth(item.date)}
                          className={`border-b border-slate-600 text-white cursor-pointer hover:bg-slate-600/50 ${
                            selectedMonth === item.date ? "bg-slate-600/50" : ""
                          }`}
                        >

                          <td className="p-3 whitespace-nowrap">
                            {item.month.split(" ")[0]}
                          </td>

                          <td className="p-3 whitespace-nowrap">
                            ₹{formatMoney(item.gross)}
                          </td>

                          <td className="p-3 whitespace-nowrap">
                            ₹{formatMoney(item.deduction)}
                          </td>

                          <td className="p-3 whitespace-nowrap font-semibold">
                            ₹{formatMoney(item.net)}
                          </td>

                          <td className="p-3">

                            <span className="bg-green-600/20 text-green-400 border border-green-600/30 px-2 py-1 rounded-full text-xs">
                              {item.status}
                            </span>

                          </td>

                        </tr>

                      ))}

                    </tbody>

                  </table>

                </div>

              </div>

            </div>

          </section>

        </div>

      </motion.main>

      {/* Payslip Modal */}
      {showPayslip && (

        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-3">

          <div className="bg-slate-800 border border-slate-600 rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">

            <header className="sticky top-0 bg-slate-800 border-b border-slate-600 p-4 flex justify-between items-center">

              <h2 className="text-xl font-bold text-white">
                Salary Payslip
              </h2>

              <button
                onClick={() => setShowPayslip(false)}
                className="text-gray-400 hover:text-red-400 text-xl"
              >
                <FaTimes />
              </button>

            </header>

            <div id="payslip-content" className="p-5 text-white">

              <div className="text-center border-b border-slate-600 pb-5 mb-5">

                <h1 className="text-2xl font-bold text-cyan-400">
                  BlueWave Technologies
                </h1>

                <p className="text-gray-400 text-sm mt-1">
                  Salary Payslip - {selectedMonthName}
                </p>

              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">

                <DetailRow label="Employee ID" value={salaryData.employeeId} />

                <DetailRow label="Employee Name" value={salaryData.employeeName} />

                <DetailRow label="Department" value={salaryData.department} />

                <DetailRow label="Designation" value={salaryData.designation} />

              </div>

              <h3 className="font-bold text-green-400 mb-3">
                Earnings
              </h3>

              <AmountRow label="Basic Salary" amount={salaryData.monthlySalary} />

              <AmountRow label="Allowances" amount={salaryData.allowances} />

              <div className="border-t border-slate-600 mt-3 pt-3 mb-5">
                <AmountRow
                  label="Gross Salary"
                  amount={salaryData.monthlySalary + salaryData.allowances}
                />
              </div>

              <h3 className="font-bold text-red-400 mb-3">
                Deductions
              </h3>

              <AmountRow label="PF" amount={1500} />

              <AmountRow label="Professional Tax" amount={200} />

              <AmountRow label="Other Deductions" amount={1300} />

              <div className="border-t border-slate-600 mt-5 pt-4">

                <div className="flex justify-between text-xl font-bold text-cyan-400">
                  <span>Net Salary</span>

                  <span>
                    ₹{formatMoney(selectedPayslip.net)}
                  </span>
                </div>

              </div>

            </div>

            <footer className="p-4 border-t border-slate-600 flex justify-end gap-3">

              <button
                onClick={() => setShowPayslip(false)}
                className="bg-slate-600 hover:bg-slate-500 text-white px-5 py-2 rounded-lg"
              >
                Close
              </button>

              <button
                onClick={handlePrint}
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold px-5 py-2 rounded-lg flex items-center gap-2"
              >
                <FaPrint /> Print
              </button>

            </footer>

          </div>

        </div>

      )}

    </div>
  );
};


// Salary Card
const SalaryCard = ({ title, amount, icon, color, bg }) => (

  <div className="bg-slate-700 rounded-xl p-4 flex items-center gap-4">

    <div className={`p-4 rounded-full text-2xl ${color} ${bg}`}>
      {icon}
    </div>

    <div>

      <p className="text-gray-300 text-sm">
        {title}
      </p>

      <h2 className="text-2xl font-bold text-white flex items-center">
        <FaRupeeSign size={18} />
        {amount.toLocaleString("en-IN")}
      </h2>

    </div>

  </div>
);


// Detail Row
const DetailRow = ({ label, value }) => (

  <div className="flex flex-col sm:flex-row sm:justify-between gap-1 border-b border-slate-600 pb-2">

    <span className="text-gray-400 text-sm">
      {label}
    </span>

    <span className="text-white text-sm font-semibold">
      {value}
    </span>

  </div>
);


// Amount Row
const AmountRow = ({ label, amount }) => (

  <div className="flex justify-between items-center py-2 text-sm">

    <span className="text-gray-300">
      {label}
    </span>

    <span className="text-white font-semibold">
      ₹{amount.toLocaleString("en-IN")}
    </span>

  </div>
);


// Annual Overview Row
const OverviewRow = ({ label, amount, color }) => (

  <div className="flex justify-between items-center border-b border-slate-600 pb-3">

    <span className="flex items-center gap-2 text-gray-300 text-sm">
      <FaCircle className={color} />
      {label}
    </span>

    <span className="font-bold text-white text-sm">
      ₹{amount.toLocaleString("en-IN")}
    </span>

  </div>
);

export default EmpSalary;
