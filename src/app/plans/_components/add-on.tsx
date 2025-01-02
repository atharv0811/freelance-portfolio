import { Card } from "@/components/ui/card"

interface AddOnProps {
    name: string
    price: number
    period: string
}

const AddOn = ({ name, price, period }: AddOnProps) => {
    return (
        <Card className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
            <p className="text-gray-700">
                ${price}/{period}
            </p>
        </Card>
    )
}

export default AddOn;