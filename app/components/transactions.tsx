"use client"

type Transaction = {
  id: number
  name: string
  amount: string
  date: string
  status: string
}

const transactions: Transaction[] = [
  { id: 1, name: "Amazon", amount: "-₹2000", date: "12 May", status: "Completed" },
  { id: 2, name: "Netflix", amount: "-₹500", date: "10 May", status: "Completed" },
  { id: 3, name: "Salary", amount: "+₹50000", date: "01 May", status: "Received" },
]

export default function Transactions() {

  return (

    <div className="bg-white p-6 rounded-xl shadow mt-8">

      <h2 className="text-xl font-bold mb-4">
        Recent Transactions
      </h2>

      <table className="w-full">

        <thead>

          <tr className="text-left text-gray-500 border-b">

            <th className="py-3">Name</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {transactions.map((t) => (

            <tr key={t.id} className="border-b hover:bg-gray-50">

              <td className="py-3 font-medium">
                {t.name}
              </td>

              <td className={
                t.amount.startsWith("+")
                  ? "text-green-600"
                  : "text-red-500"
              }>
                {t.amount}
              </td>

              <td>
                {t.date}
              </td>

              <td>

                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">

                  {t.status}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  )
}