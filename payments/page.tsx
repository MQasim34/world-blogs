import { columns, Payment } from "@/payments/columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  
  // Fetch data from your API here.
  return [
   {
    id: "728ed52f",
    PostTitle: "Master React Table: Build Dynamic Data Tables Easily",
    author: 'Qasim',
    categoies: 'coding',
    date: '11-02-2025',
    amount: 100,
    // status: "pending",
  },
  {
    id: "489e1d42",
    PostTitle: "10 Common TanStack Table Mistakes to Avoid",
    author: 'Qasim',
    categoies: 'mistakes',
    date: '11-02-2025',
    amount: 125,
    // status: "processing",
  },
  {
    id: "489de1d42",
    PostTitle: "Next.js + Shadcn UI: Perfect Data Table Setup",
    categoies: 'nextjs',
    author: 'Qasim',
    date: '11-02-2025',
    amount: 125,
    // status: "processing",
  },
  ]
}

export default async function payments() {
  const data = await getData()
  // console.log("Fetched data:", data)

  return (
    <div className="container mx-auto">
      <DataTable columns={columns} data={data} />
    </div>
  )
}