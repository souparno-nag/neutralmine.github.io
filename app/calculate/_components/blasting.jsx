"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

const blastingMethods = [
    {
        value: "open-cut-blasting",
        label: "Open Cut Blasting",
        description: "Used in surface mining to fragment rock and coal, making it easier to remove the overburden and access coal seams.",
        emission: 0.050 // Emission factor in kg CO₂/tonne of coal mined
    },
    {
        value: "underground-blasting",
        label: "Underground Blasting",
        description: "Used to fragment rock within an underground coal mine, often in conjunction with other mining methods such as longwall or room-and-pillar mining.",
        emission: 0.040
    },
    {
        value: "controlled-blasting",
        label: "Controlled Blasting",
        description: "A method used to minimize overbreak and to control ground vibrations and noise by using precise timing of the blast.",
        emission: 0.030
    },
    {
        value: "cast-blasting",
        label: "Cast Blasting",
        description: "Used in open-pit mining where the overburden is cast (thrown) into adjacent mined-out areas, reducing the need for haulage.",
        emission: 0.060
    },
    {
        value: "secondary-blasting",
        label: "Secondary Blasting",
        description: "Used to break oversized rocks or boulders that are too large to be handled by the primary crusher.",
        emission: 0.020
    },
    {
        value: "vibration-controlled-blasting",
        label: "Vibration Controlled Blasting",
        description: "A method designed to control vibrations in sensitive areas, often using electronic detonators for precise timing.",
        emission: 0.025
    },
    {
        value: "pre-splitting",
        label: "Pre-Splitting",
        description: "A technique to create a fracture plane along the final perimeter of the blast, minimizing overbreak and preserving slope stability.",
        emission: 0.035
    },
    {
        value: "decked-blasting",
        label: "Decked Blasting",
        description: "Involves placing multiple explosive charges in a single borehole, separated by inert material to control energy distribution.",
        emission: 0.045
    },
    {
        value: "air-decking",
        label: "Air Decking",
        description: "Involves creating an air gap within the explosive column to increase the efficiency of the blast and reduce overall explosive usage.",
        emission: 0.038
    },
    {
        value: "cushion-blasting",
        label: "Cushion Blasting",
        description: "Used for final trimming and smoothing of the blast surface to reduce damage and create a better final surface.",
        emission: 0.032
    },
    {
        value: "smooth-blasting",
        label: "Smooth Blasting",
        description: "A technique to minimize overbreak by closely spacing holes along the final face and using light charges.",
        emission: 0.028
    },
    {
        value: "line-drilling",
        label: "Line Drilling",
        description: "A method where closely spaced, small-diameter holes are drilled along a line to create a controlled break.",
        emission: 0.022
    }
];


export function Blasting({ emission, setemission }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full h-[50px] justify-between"
                >
                    {value
                        ? blastingMethods.find((blastingMethod) => blastingMethod.value === value)?.label
                        : "Select the blasting method..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0 ">
                <Command>
                    <CommandInput placeholder="Search blasting method..." />
                    <CommandList>
                        <CommandEmpty>Blasting method not found.</CommandEmpty>
                        <CommandGroup >
                            {blastingMethods.map((blastingMethod) => (
                                <CommandItem
                                    key={blastingMethod.value}
                                    value={blastingMethod.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                        setemission({ ...emission, blasting: blastingMethod.emission })
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === blastingMethod.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {blastingMethod.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
