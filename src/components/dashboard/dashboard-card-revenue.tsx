import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatCurrency } from '@/lib/utils'
import { BarChart, DollarSign, ShoppingCartIcon, UserIcon } from 'lucide-react'

interface Props {
  title: string,
  value: number,
  icon: string
}

export default function DashboardCardRevenue({ title, value, icon }: Props) {

  const _renderValue = (title: string, value: number) => {
    switch (title) {
      case "Total Revenue":
        return formatCurrency(value)
      case "Total Sales":
        return formatCurrency(value)
      default:
        return value
    }
  }

  const _renderIcon = (icon: string) => {
    switch (icon) {
      case "shoppingCart":
        return <ShoppingCartIcon size={24} className="text-leaf" />
      case "currencyDollar":
        return <DollarSign size={24} className="text-leaf" />
      case "chartBar":
        return <BarChart size={24} className="text-leaf" />
      case "userIcon":
        return <UserIcon size={24} className="text-leaf" />
      default:
        return <ShoppingCartIcon size={24} className="text-leaf" />
    }
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          {title}
        </CardTitle>
        {_renderIcon(icon)}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">
          {_renderValue(title, value)}
        </div>
      </CardContent>
    </Card>
  )
}
