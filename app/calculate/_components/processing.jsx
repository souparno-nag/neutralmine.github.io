"use client"
import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowUpDown, ChevronsUpDown, ChevronsUpDownIcon } from "lucide-react"

const coalProcessingMethods = [
    {
        value: "washing",
        label: "Coal Washing",
        description: "Cleaning coal to remove impurities like ash, sulfur, and other contaminants, improving its quality.",
        emission: 0.005
    },
    {
        value: "crushing",
        label: "Coal Crushing",
        description: "Reducing the size of coal to make it suitable for specific industrial uses or further processing.",
        emission: 0.002
    },
    {
        value: "screening",
        label: "Coal Screening",
        description: "Sorting crushed coal into different size fractions for various applications.",
        emission: 0.001
    },
    {
        value: "briquetting",
        label: "Coal Briquetting",
        description: "Compressing coal fines or small particles into larger, solid briquettes for easier handling and burning.",
        emission: 0.007
    },
    {
        value: "drying",
        label: "Coal Drying",
        description: "Removing moisture from coal to improve its combustion efficiency and reduce transportation weight.",
        emission: 0.003
    },
    {
        value: "gasification",
        label: "Coal Gasification",
        description: "Converting coal into synthetic gas (syngas) by reacting it with oxygen and steam under high pressure.",
        emission: 0.020
    },
    {
        value: "liquefaction",
        label: "Coal Liquefaction",
        description: "Converting coal into liquid fuels like synthetic diesel or gasoline through chemical processes.",
        emission: 0.025
    },
    {
        value: "carbonization",
        label: "Carbonization (Coke Production)",
        description: "Heating coal in the absence of air to produce coke, a high-carbon fuel used in steelmaking.",
        emission: 0.030
    },
    {
        value: "desulfurization",
        label: "Coal Desulfurization",
        description: "Removing sulfur from coal to reduce sulfur dioxide emissions during combustion.",
        emission: 0.010
    },
    {
        value: "pulverization",
        label: "Coal Pulverization",
        description: "Grinding coal into a fine powder to enhance its combustion efficiency in power plants.",
        emission: 0.004
    },
    {
        value: "blending",
        label: "Coal Blending",
        description: "Mixing different grades of coal to achieve desired quality or performance characteristics.",
        emission: 0.002
    },
    {
        value: "charcoal",
        label: "Charcoal Production",
        description: "Converting coal into charcoal by heating it in the absence of air, typically for industrial use.",
        emission: 0.015
    },
    {
        value: "pyrolysis",
        label: "Coal Pyrolysis",
        description: "Thermally decomposing coal at high temperatures to produce gases, liquids, and solid residues like coke.",
        emission: 0.018
    },
    {
        value: "pelletization",
        label: "Coal Pelletization",
        description: "Forming coal fines into pellets, often used for industrial heating or power generation.",
        emission: 0.006
    },
    {
        value: "fly-ash",
        label: "Fly Ash Recovery",
        description: "Capturing and processing fly ash, a byproduct of coal combustion, for use in cement or other materials.",
        emission: 0.005
    },
    {
        value: "slurry-dewatering",
        label: "Coal Slurry Dewatering",
        description: "Removing water from coal slurry (a mix of coal and water) to recover and reuse coal particles.",
        emission: 0.004
    }
];





export function Processing({ emission, setemission }) {
    const [show, setshow] = React.useState({})
    const [em, setem] = React.useState(0);
    const [labels, setlabels] = React.useState([])

    React.useEffect(() => {  //here em changes twice but rerendering occurs only once at the final value
        console.log(show, Object.keys(show).length, coalProcessingMethods.length);
        // console.log(em);
        setem(0);
        setlabels([]);
        for (let i = 0; i < Object.keys(show).length; i++) {
            for (let j = 0; j < coalProcessingMethods.length; j++) {
                if (Object.keys(show)[i] == coalProcessingMethods[j].value && show[Object.keys(show)[i]] == true) {
                    setem((prev) => Math.round((prev + coalProcessingMethods[j].emission) * 1000) / 1000)
                    setlabels((prev) => [...prev, coalProcessingMethods[j].value])
                }
            }
        }

        // console.log(em);

    }, [show])

    React.useEffect(() => {
        console.log("em is ", em);
        setemission({ ...emission, processing: em })
    }, [em])

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full text-start justify-between h-[50px]">{labels.length > 0 ? labels.join(", ") : "Select processing method/s"}<ChevronsUpDownIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Processing</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {coalProcessingMethods.map((el) => {
                    return (
                        <DropdownMenuCheckboxItem
                            key={el.value}
                            checked={show[el.value] == undefined ? false : show[el.value]}
                            onCheckedChange={() => {
                                setshow({ ...show, [el.value]: !show[el.value] })

                            }}
                        >
                            {el.label}
                        </DropdownMenuCheckboxItem>
                    )
                })}

            </DropdownMenuContent>
        </DropdownMenu>
    )
}

{/* {coalProcessingMethods.map((method) => (
    <DropdownMenuItem
        key={method.value}
        onClick={() => setemission(method.emission)}
    >
        {method.label}
    </DropdownMenuItem>
))} */}


