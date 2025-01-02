import { Card } from '@/components/ui/card';
import { Users, FileText, Eye, TrendingUp } from 'lucide-react';

const stats = [
    {
        label: 'Total Posts',
        value: '124',
        icon: FileText,
        trend: '+12.5%',
        color: 'bg-blue-500',
    },
    {
        label: 'Total Users',
        value: '3,124',
        icon: Users,
        trend: '+8.2%',
        color: 'bg-green-500',
    },
    {
        label: 'Page Views',
        value: '45.2K',
        icon: Eye,
        trend: '+23.1%',
        color: 'bg-purple-500',
    },
    {
        label: 'Engagement Rate',
        value: '12.3%',
        icon: TrendingUp,
        trend: '+4.3%',
        color: 'bg-orange-500',
    },
];

const DashboardStats = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-3">
            {stats.map((stat) => {
                const Icon = stat.icon;
                return (
                    <Card
                        key={stat.label}
                        className="bg-white rounded-lg p-6 shadow-sm border border-gray-200"
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className={`p-3 rounded-lg ${stat.color} bg-opacity-10`}>
                                <Icon className={`text-${stat.color.split('-')[1]}-500`} size={24} />
                            </div>
                            <span className="text-green-500 text-sm font-medium">
                                {stat.trend}
                            </span>
                        </div>
                        <h3 className="text-gray-500 text-sm font-medium">{stat.label}</h3>
                        <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                    </Card>
                );
            })}
        </div>
    );
}

export default DashboardStats;