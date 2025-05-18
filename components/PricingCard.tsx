import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import clsx from "clsx"; // Optional but recommended for cleaner class merging

interface PricingCardProps {
    title: string;
    description: string;
    price: string;
    features: string[];
    risk: string;
    className?: string;
}

export default function PricingCard({
    title,
    description,
    price,
    features,
    risk,
    className,
}: PricingCardProps) {
    return (
        <Card className={clsx("mt- w-[280px] bg-gradient-to-b from-[#19091F] to-[#010001] text-white shadow-none border border-white/10 font-manrope", className)}>
            <CardContent className="p-6 flex flex-col justify-between h-full">
                <div>
                    <h2 className="text-2xl font-semibold mb-1">{title}</h2>
                    <p className="text-sm text-gray-300 mb-4">{description}</p>
                    <div className="text-3xl font-bold text-white mb-2">{price}</div>
                    <div className="text-sm font-medium text-purple-300 mb-4">
                        Risk Exposure: {risk}
                    </div>
                    <ul className="space-y-1 text-sm text-gray-300">
                        {features.map((f, idx) => (
                            <li key={idx}>• {f}</li>
                        ))}
                    </ul>
                </div>

                <Button className="px-3 py-2 bg-[#6E50AD] hover:bg-[#8f4d90] text-white font-medium mt-4 rounded-full">
                    Start Trading
                </Button>
            </CardContent>
        </Card>
    );
}
