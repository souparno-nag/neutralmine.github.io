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
        value: "surface-mining",
        label: "Surface Mining",
        description: "Extracting coal by removing the overburden (layers of soil and rock) above coal seams. Common types include strip mining, open-pit mining, and mountaintop removal.",
        emission: 0.036
    },
    {
        value: "underground-mining",
        label: "Underground Mining",
        description: "Extracting coal from deep below the Earth's surface through tunnels or shafts. This method is used when coal seams are too deep for surface mining. Common types include longwall mining and room-and-pillar mining.",
        emission: 0.027
    },
    {
        value: "mountaintop-removal",
        label: "Mountaintop Removal",
        description: "A form of surface mining where the summit or summit ridge of a mountain is removed to access buried coal seams. This method is controversial due to its environmental impact.",
        emission: 0.040
    },
    {
        value: "longwall-mining",
        label: "Longwall Mining",
        description: "A type of underground mining where a long wall of coal is mined in a single slice, typically with a shearer. The coal is then conveyed out of the mine. This method is efficient but can cause subsidence.",
        emission: 0.030
    },
    {
        value: "room-and-pillar",
        label: "Room and Pillar Mining",
        description: "A method of underground mining in which rooms of coal are mined, leaving pillars to support the roof. The pillars may be partially extracted later, a process known as retreat mining.",
        emission: 0.025
    },
    {
        value: "highwall-mining",
        label: "Highwall Mining",
        description: "A method that involves mining coal from exposed seams along the highwall of a surface mine. A continuous miner is remotely controlled to extract coal, making it an extension of surface mining.",
        emission: 0.033
    },
    {
        value: "auger-mining",
        label: "Auger Mining",
        description: "A technique where a large drill, or auger, is used to bore into a coal seam to extract coal. This method is typically used where the overburden is too thick for highwall mining.",
        emission: 0.028
    },
    {
        value: "continuous-mining",
        label: "Continuous Mining",
        description: "A form of underground mining that uses a continuous miner machine to cut coal from the seam and convey it to the surface. This method is efficient for extracting coal from relatively flat seams.",
        emission: 0.022
    },
    {
        value: "retreat-mining",
        label: "Retreat Mining",
        description: "A method in room-and-pillar mining where the pillars are mined as the miners retreat, allowing the roof to collapse behind them. This technique maximizes coal recovery but is riskier.",
        emission: 0.035
    },
    {
        value: "shaft-mining",
        label: "Shaft Mining",
        description: "A type of underground mining that involves sinking a vertical or near-vertical shaft down to the coal seam. Coal is extracted and lifted to the surface using lifts or skips.",
        emission: 0.029
    },
    {
        value: "drift-mining",
        label: "Drift Mining",
        description: "A method of accessing coal seams that are exposed at the surface by driving a horizontal or nearly horizontal tunnel into the seam. This method is usually used for seams that lie near the surface.",
        emission: 0.020
    },
    {
        value: "slope-mining",
        label: "Slope Mining",
        description: "A method where a sloping tunnel is constructed to access coal seams that are not deep enough for shaft mining but too deep for drift mining. The coal is transported up the slope to the surface.",
        emission: 0.023
    },
    {
        value: "bord-and-pillar",
        label: "Bord and Pillar Mining",
        description: "An older method of underground mining where 'bords' (rooms) are mined into the seam and the 'pillars' of coal are left to support the roof. It’s similar to room and pillar mining.",
        emission: 0.025
    },
    {
        value: "hydraulic-mining",
        label: "Hydraulic Mining",
        description: "A method of coal extraction using high-pressure jets of water to dislodge coal from the seam. This technique is more commonly used for softer coals or in situations where other methods are impractical.",
        emission: 0.045
    },
    {
        value: "placer-mining",
        label: "Placer Mining",
        description: "Not typically used for coal, but involves the extraction of minerals from alluvial deposits. If applied to coal, it would involve extracting coal from riverbeds or other sedimentary environments.",
        emission: 0.015
    },
    {
        value: "block-caving",
        label: "Block Caving",
        description: "An underground mining method used mainly for minerals but can be adapted for coal, where large blocks of the coal seam are undercut, causing them to collapse under their own weight.",
        emission: 0.032
    }
];


export function Extraction({ emission, setemission }) {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-full justify-between h-[50px]"
                >
                    {value
                        ? frameworks.find((framework) => framework.value === value)?.label
                        : "Select the extraction method..."}
                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[300px] p-0 ">
                <Command>
                    <CommandInput placeholder="Search extraction method..." />
                    <CommandList>
                        <CommandEmpty>Extraction method not found.</CommandEmpty>
                        <CommandGroup >
                            {frameworks.map((framework) => (
                                <CommandItem
                                    key={framework.value}
                                    value={framework.value}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                        setemission({ ...emission, extraction: framework.emission })
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
