import DashboardCardRevenue from '@/components/dashboard/dashboard-card-revenue'
import { Overview } from '@/components/dashboard/dashboard-charts'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { dataDashboardOrders } from '@/lib/data/dashboardData'

//TODO: Implement Dashboard Page
//TODO: Implement Product Page (CRUD)
//TODO: Implement Feature Page (CRUD)
//TODO: Implement Orders Page (CRUD)
//TODO: Implement User Page (CRUD)
export default function DashboardPage() {
  return (
    <div className='flex flex-col items-center min-h-screen gap-4 py-14'>
      <h3 className='text-3xl font-bold text-leaf self-start'>
        Dashboard
      </h3>
      <div className='grid grid-cols-4 gap-2 w-full'>
        {dataDashboardOrders.map((item, index) => (
          <DashboardCardRevenue
            key={index}
            title={item.title}
            value={item.value}
            icon={item.icon}
          />
        ))}
      </div>
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent className="pl-2">
          <Overview />
        </CardContent>
      </Card>
    </div>
  )
}
