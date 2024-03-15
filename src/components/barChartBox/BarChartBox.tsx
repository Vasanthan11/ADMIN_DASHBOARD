import "./barChartBox.scss"
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";


type Props = {
    title: string;
    color: string;
    dataKey: string;
    chartData: object[];
}


const BarChartBox = (props: Props) => {
    return (
        <div className="barChartBox">
            <h1>{props.title}</h1>

            <div className="chart">
                <ResponsiveContainer width="100%" height={150}>
                    {/* height is given to avaid the overflow of the content and cursor is add to avoid hover effect */}
                    <BarChart width={150} height={40} data={props.chartData}>

                        {/* tooltip is used for making interactive animation on the charts */}
                        <Tooltip
                            contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
                            labelStyle={{ display: "none" }}
                            cursor={{ fill: "none" }} />
                        <Bar dataKey={props.dataKey} fill={props.color} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default BarChartBox