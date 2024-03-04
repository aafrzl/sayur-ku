import DashboardCardRevenue from '@/components/dashboard/dashboard-card-revenue'
import { Overview } from '@/components/dashboard/dashboard-charts'
import PlaygroundPages from '@/components/dashboard/dashboard-playground-pages'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { dataDashboardOrders, dataPlaygroundPages } from '@/lib/data/dashboardData'

export default async function DashboardPage() {
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
      <div className='grid grid-cols-7 gap-4 w-full'>
        <Card className='col-span-4'>
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Website</CardTitle>
            <CardDescription>
              <span className='text-xl font-semibold'>{dataPlaygroundPages.stat}</span>
              <span className='text-muted-foreground'> Total views</span>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PlaygroundPages />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
