import DashboardStats from "./_components/dashboard-stats"
import RecentPosts from "./_components/recent-posts"

const Dashboard = () => {
    return (
        <div className="my-2">
            <DashboardStats />
            <RecentPosts />
        </div>
    )
}

export default Dashboard