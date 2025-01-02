import { Card } from '@/components/ui/card'
import { Check } from 'lucide-react'

interface PlanCardProps {
    name: string
    description: string
    price: number
    features: string[]
    timeline: string
    support: string
}

const PlanCard = ({ name, description, price, features, timeline, support }: PlanCardProps) => {
    return (
        <Card className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
            <div className="px-6 py-8 flex-grow">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{name}</h3>
                <p className="text-gray-600 mb-4">{description}</p>
                <p className="text-4xl font-bold text-gray-900 mb-6">${price}</p>
                <ul className="mb-6">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center mb-2">
                            <Check className="h-5 w-5 text-green-500 mr-2" />
                            <span className="text-gray-700">{feature}</span>
                        </li>
                    ))}
                </ul>
                <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700"><strong>Timeline:</strong> {timeline}</p>
                    <p className="text-gray-700"><strong>Support:</strong> {support}</p>
                </div>
            </div>
            {/* <div className="px-6 py-4 mt-auto">
                <button className="w-full bg-[#6930c3] text-white py-2 px-4 rounded-md hover:bg-[#5521aa] transition duration-300">
                    Choose Plan
                </button>
            </div> */}
        </Card>
    )
}

export default PlanCard;