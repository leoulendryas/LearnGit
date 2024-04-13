export default function DashboardLayout({
  children,
  user,
  revenue,
  notifications

}: {
  children: React.ReactNode;
  user: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode
}) {
  return (
    <div style={{display:"flex"}}>
      <div>{children}</div>
      <div style={{display:'flex' , flexDirection:'column'}}>
        <div>{user}</div>
        <div>{revenue}</div>
      </div>
      <div>{notifications}</div>
    </div>
  )
}