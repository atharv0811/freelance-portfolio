import { Card } from '@/components/ui/card'
import AddOn from './_components/add-on'
import PlanCard from './_components/plan-cards'

const plans = [
    {
        name: "Starter Package",
        description: "Ideal for individuals or small businesses needing a simple, professional online presence.",
        price: 300,
        features: [
            "Custom responsive design (up to 3 pages)",
            "Basic SEO setup (meta tags, alt texts)",
            "Contact form integration",
            "Mobile and tablet-friendly design",
            "Social media links integration",
        ],
        timeline: "1-2 weeks",
        support: "1-month post-launch support for minor updates",
    },
    {
        name: "Advanced Package",
        description: "Best for small businesses looking for an enhanced online presence with more functionality.",
        price: 500,
        features: [
            "Custom responsive design (up to 5 pages)",
            "On-page SEO optimization",
            "Blog or portfolio section setup",
            "Google Maps integration",
            "CMS integration (e.g., WordPress) for easy content updates",
            "Basic website analytics setup",
        ],
        timeline: "2-3 weeks",
        support: "3-month post-launch support",
    },
    {
        name: "Premium Package",
        description: "Perfect for businesses looking for a polished and feature-rich website.",
        price: 800,
        features: [
            "Custom responsive design (up to 7 pages)",
            "Advanced on-page SEO optimization",
            "E-commerce functionality (up to 5 products)",
            "Custom animations or transitions",
            "CMS integration (e.g., WordPress or Sanity)",
            "Website performance optimization (speed, usability)",
            "Advanced website analytics setup",
        ],
        timeline: "4-5 weeks",
        support: "6-month post-launch support",
    },
]

const addOns = [
    { name: "Website Maintenance", price: 100, period: "month" },
    { name: "Domain and Hosting Assistance", price: 250, period: "year" },
    { name: "Additional Pages", price: 50, period: "page" },
]

const PlansPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                <h1 className="text-4xl font-extrabold text-[#221b68] text-center mb-16">Our Website Plans</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {plans.map((plan, index) => (
                        <div key={index} className="h-full">
                            <PlanCard {...plan} />
                        </div>
                    ))}
                </div>
                <Card className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-[#221b68] mb-4">Optional Add-Ons</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {addOns.map((addOn, index) => (
                            <AddOn key={index} {...addOn} />
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default PlansPage