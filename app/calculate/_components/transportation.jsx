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

const frameworks = [
    {
        value: "truck",
        label: "Truck Transportation",
        description: "Transporting coal via heavy-duty trucks over roadways.",
        emission: 0.115
    },
    {
        value: "rail",
        label: "Rail Transportation",
        description: "Transporting coal via freight trains over railways.",
        emission: 0.020
    },
    {
        value: "ship",
        label: "Ship Transportation (Bulk Carrier)",
        description: "Transporting coal via bulk carrier ships, typically over long distances by sea.",
        emission: 0.015
    },
    {
        value: "barge",
        label: "Barge Transportation",
        description: "Transporting coal via barges on rivers or canals.",
        emission: 0.030
    },
    {
        value: "pipeline-slurry",
        label: "Pipeline Slurry Transportation",
        description: "Transporting coal as a slurry (a mixture of coal and water) through pipelines.",
        emission: 0.025
    },
    {
        value: "conveyor-belt",
        label: "Conveyor Belt Transportation",
        description: "Transporting coal over short to medium distances via conveyor belts, often within a mining site.",
        emission: 0.003
    },
    {
        value: "air",
        label: "Air Transportation",
        description: "Transporting coal via cargo aircraft (rare, used in emergencies or specific conditions).",
        emission: 1.000
    },
    {
        value: "intermodal",
        label: "Intermodal Transportation",
        description: "Using multiple modes (e.g., rail to ship) to transport coal, with transfers at intermodal terminals.",
        emission: "Varies (depends on combination of modes used)"
    },
    {
        value: "electric-rail",
        label: "Electric Rail Transportation",
        description: "Transporting coal via electrified rail systems, typically with lower emissions than diesel trains.",
        emission: 0.010
    },
    {
        value: "diesel-locomotive",
        label: "Diesel Locomotive Rail Transport",
        description: "Transporting coal via diesel-powered locomotives on railways.",
        emission: 0.025
    },
    {
        value: "hybrid-truck",
        label: "Hybrid Truck Transportation",
        description: "Using hybrid (diesel-electric) trucks for coal transport.",
        emission: 0.080
    },
    {
        value: "trolley-assisted",
        label: "Trolley-Assisted Truck Transport",
        description: "Trucks equipped with electric trolley assistance, often used in mining regions with steep grades.",
        emission: 0.060
    },
    {
        value: "cable-car",
        label: "Cable Car/Bucket Tramway",
        description: "Aerial cable cars or bucket tramways for transporting coal, usually over difficult terrain.",
        emission: 0.050
    }
];


export function Transportation({ emission, setemission }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full  justify-between"
                >
                    {value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : "Select the transportation method..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0 ">
                <Command>
                    <CommandInput placeholder="Search transportation method..." />
                    <CommandList>
                        <CommandEmpty>Transportation method not found.</CommandEmpty>
                        <CommandGroup >
                            {frameworks.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                        setemission({ ...emission, transportation: framework.emission })
                                    }}
                                >
                                    <Check
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            value === framework.value ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                    {framework.label}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}
