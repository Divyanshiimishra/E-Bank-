import { ArrowUpRight } from "lucide-react"

type CardProps = {
  title: string
  amount: string
}

export default function Card({ title, amount }: CardProps) {

  return (

    <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">

      <div className="flex justify-between items-center">

        <h3 className="text-gray-500">
          {title}
        </h3>

        <ArrowUpRight size={20} className="text-green-500" />

      </div>

      <p className="text-3xl font-bold mt-4">
        {amount}
      </p>

    </div>

  )
}