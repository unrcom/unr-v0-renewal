import { redirect } from "next/navigation"
import { isAuthenticated } from "@/lib/auth"
import { getContactSubmissions } from "@/app/actions/admin"
import { AdminDashboard } from "@/components/admin-dashboard"

export default async function AdminPage() {
  if (!(await isAuthenticated())) {
    redirect("/admin/login")
  }

  const submissions = await getContactSubmissions()

  return <AdminDashboard submissions={submissions} />
}
