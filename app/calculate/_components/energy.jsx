import React from 'react'
import { cn } from "@/lib/utils"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Check } from 'lucide-react';
import { Input } from '@/components/ui/input'

const energyConsumptionAtMineSite = [
    {
        value: "electricity",
        label: "Electricity Consumption",
        description: "Electricity consumed by various operations, including coal processing, ventilation, lighting, and machinery operation.",
        energyConsumption: 45, // kWh per tonne of coal
        unit: "kWh/tonne",
        emission: 0.85, // kg CO₂ per kWh
        emissionUnit: "kg CO₂/kWh"
    },
    {
        value: "diesel",
        label: "Diesel Consumption",
        description: "Diesel fuel used by mining trucks, heavy machinery, and other equipment at the mining site.",
        energyConsumption: 2.5, // liters per tonne of coal
        unit: "liters/tonne",
        emission: 2.68, // kg CO₂ per liter of diesel
        emissionUnit: "kg CO₂/liter"
    }
];



const Energy = ({ emission, setemission }) => {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")
    return (
        <div className="flex">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        aria-expanded={open}
                        className="w-full justify-between h-[50px]">
                        Energy Consumption
                    </Button></PopoverTrigger>
                <PopoverContent className="w-[300px] p-0 ">
                    <Command>
                        <CommandInput placeholder="Search extraction method..." />
                        <CommandList>
                            <CommandEmpty>Energy method not found.</CommandEmpty>
                            <CommandGroup >
                                {energyConsumptionAtMineSite.map((energy) => (
                                    <CommandItem
                                        key={energy.value}
                                        value={energy.value}
                                        onSelect={(currentValue) => {
                                            setValue(currentValue === value ? "" : currentValue)
                                            setOpen(false)
                                            setemission({ ...emission, energy: energy.emission })
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                "mr-2 h-4 w-4",
                                                value === energy.value ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                        {energy.label}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>

            <Input className="w-full" value={value == "electricty" ? 'kWh' : 'litres'} onChange={(e) => setemission({ ...emission, energy: e.target.value })} />
        </div>
    )
}

export default Energy