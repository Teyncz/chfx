import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, } from "@/components/ui/chart"
import { useEffect, useState } from "react"


type Tick = {
    id: number;
    close: number;
    date: string;
};

type CurrenciesTicksChartProps = {
    outputCurrency: string;
    currenciesTicks: Tick[]
};

interface ChartData {
    month: string;
    close: number;
}

export function CurrenciesTicksChart({ outputCurrency, currenciesTicks }: CurrenciesTicksChartProps) {
    const [chartData, setChartData] = useState<ChartData[]>([]);
    const [currencyChange, setCurrencyChange] = useState<number>(0);
    const [interval, setInterval] = useState<number>(50);

    useEffect(() => {
        const handleResize = () => {
          const width = window.innerWidth;
    
          if (width < 600) {
            setInterval(100);  
            console.log('100')
          } else if (width < 900) {
            setInterval(70); 
            console.log('70')
          } else {
            setInterval(50);  
            console.log('50')
          }
        };
    
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    useEffect(() => {
        const updatedChartData = currenciesTicks.map((tick) => {
            const dayMonth = new Date(tick.date).toLocaleDateString("default", { day: "2-digit", month: "2-digit" });
            return {
                month: dayMonth,
                close: Number(tick.close),
            };
        });

        if (currenciesTicks.length > 0) {
            setCurrencyChange(Number((((currenciesTicks[currenciesTicks.length - 1].close / currenciesTicks[0].close) - 1) * 100).toFixed(2)));
        }

        setChartData(updatedChartData);
    }, [currenciesTicks]);

    const minValue = Math.min(...chartData.map((tick) => tick.close));
    const maxValue = Math.max(...chartData.map((tick) => tick.close));

    const chartConfig = {
        close: {
            label: "Valeur",
            color: "hsl(var(--chart-1))",
        },
    } satisfies ChartConfig


    return (
        <Card className="max-w-[800px] mx-auto ">
            <CardHeader>
                <CardTitle>Graphique {outputCurrency} / CHF</CardTitle>
                <CardDescription>
                    Évolution du prix de {outputCurrency} par rapport au franc suisse au cours de l&apos;année écoulée.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData}
                        margin={{
                            left: 12,
                            right: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} horizontal={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={true}
                            axisLine={true}
                            tickMargin={8}
                            tickFormatter={(value) => value.slice(0, 5)}
                            interval={interval}  
                        />
                        <YAxis
                            orientation="right"
                            stroke="0"
                            domain={[minValue, maxValue]}
                            tickFormatter={(value) => value.toFixed(5)}
                            tick={{ 
                                dx: -50, 
                                dy: -5,
                              }}
                            width={0.1} 
                            fill="#FFFFFF"
                            
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="dot" hideLabel />}
                        />
                        <Area
                            dataKey="close"
                            type="linear"
                            fill="#F54B3E"
                            fillOpacity={0.4}
                            stroke="#F54B3E"
                            strokeWidth={1}
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex max-w-[800px] w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            La devise EUR a évolué de {currencyChange} % par rapport au franc suisse sur les 12 dernier mois.
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    )
}