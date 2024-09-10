import * as React from "react"

import mine1 from "../../../public/mines/mine1.jpg"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import Image from "next/image"
import Map from "./maps"



export function MineCard({ mines }) {

    return (
        // <div className="p-3">
        <Card className="w-full p-5 grid grid-flow-col  grid-cols-2 gap-3">
            <CardHeader>
                <CardTitle className="text-5xl">{mines.Mine_Name}</CardTitle>
                <CardDescription className="text-2xl">{mines.State}</CardDescription>
                <CardDescription className="text-md">{mines.Description}</CardDescription>
                <div className="overflow-clip rounded-xl mt-10 pt-3">
                    {/* <Image src={mine1} alt="mine1" /> */}
                    {/* <div className="w-[40vw] h-[40vh] "> */}
                    <Map mines={mines} />

                    {/* </div> */}
                </div>
            </CardHeader>
            <CardContent>
                <div className="">
                    <div className="flex flex-col gap-3 ">
                        <div className="flex gap-3">
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">Coal Production</div><div>{mines.Coal_Production} tonnes/year</div></div>
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">Area Covered</div><div>{mines.Area_Covered} hectares<sup>2</sup></div></div>
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">Type </div><div>{mines.Mine_Type}</div></div>
                        </div>
                        <div className="flex gap-3">
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">Fuel Consumption</div><div>{mines.Fuel_Consumption} litre/year</div></div>
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">Electricity Consumption</div><div>{mines.Electricity_Consumption} MWh/year</div></div>
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">Explosives Used</div><div>{mines.Explosives_Used} kg/year</div></div>
                        </div>
                        <div className="flex gap-3">
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">Methane Emissions</div><div>{mines.Methane_Emissions} tonnes/year</div></div>
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">CO<sub>2</sub> Emissions </div><div>{mines.CO2_Emissions} tonnes/year</div></div>
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">Fugitive Emissions</div><div>{mines.Fugitive_Emissions} tonnes/year</div></div>
                        </div>
                        <div className="flex gap-3">
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">CH<sub>4</sub>CO<sub>2</sub></div><div>{mines.CH4_CO2e} tonnes/year</div></div>
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">Renewable Adoption Potential </div><div>{mines.Renewable_Adoption_Potential} tonnes CO2/year</div></div>
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">Carbon Sequestration Potential</div><div>{mines.Carbon_Sequestration_Potential} tonnes CO2/year</div></div>
                        </div>
                        <div className="flex gap-3">
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">Afforestation Potential</div><div>{mines.Afforestation_Potential} hectares</div></div>
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">Trees Plantable </div><div>{mines.Trees_Plantable}</div></div>
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">Deforestation Impact</div><div>{mines.Deforestation_Impact} tonnes CO2/year</div></div>
                        </div>
                        <div className="flex gap-3">
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">Methane Capture Potential</div><div>{mines.Methane_Capture_Potential} tonnes CO2e/year</div></div>
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">Energy Efficiency Gains </div><div>{mines.Energy_Efficiency_Gains} tonnes CO2/year</div></div>
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">Electrification Impact</div><div>{mines.Electrification_Impact} tonnes CO2/year</div></div>
                        </div>
                        <div className="flex gap-3">
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">Carbon Credits Potential</div><div>{mines.Carbon_Credits_Potential} tonnes CO2/year</div></div>
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">Carbon Credits Value </div><div>{mines.Carbon_Credit_Value} $/tonne CO2</div></div>
                            <div className="w-1/3 flex flex-col gap-1 border p-3 rounded-md"><div className="text-red-500">Estimated Revenue from credits</div><div>{mines.Estimated_Revenue_from_Credits} $/year</div></div>
                        </div>
                    </div>

                </div>

            </CardContent>
            <CardFooter className="flex justify-between">

            </CardFooter>
        </Card>
        // </div>
    )
}
