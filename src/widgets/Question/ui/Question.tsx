import {FC, useState} from 'react';
import {
    Card,
    CardActions,
    CardContent,
    Divider,
    FormControlLabel,
    IconButton,
    Stack,
    Switch,
} from "@mui/material";
import {IoEllipsisVerticalSharp} from "react-icons/io5";
import {Variant} from "shared/ui/Variant/Variant";
import {QuestionHeader} from "./QuestionHeader";


interface variants {
    id: number;
    text: string;
}

const mockVariants: variants[] = [
    {
        id: 0,
        text: "Вариан 1"
    },
    {
        id: 1,
        text: "Вариан 2"
    },
    {
        id: 2,
        text: "Вариан 3"
    }
]

interface QuestionProps {
}

export const Question: FC<QuestionProps> = () => {
    const [optionVariants, setOption] = useState<string>('radio');
    const [value, setValue] = useState<number>()

    const handleSetOption = (option: string) => {
        setOption(option)
    }
    const handleSetValue = (value: number) => {
        setValue(value)
    }

    return (
        <Card>
            <CardContent>
                <QuestionHeader option={optionVariants} setOption={handleSetOption}/>
                <Stack spacing={2}>
                    {mockVariants.map((variant) => (
                        <Variant
                            key={variant.id}
                            optionVariant={optionVariants}
                            variant={variant}
                            selectedValue={value}
                            setValue={handleSetValue}
                        />
                    ))}
                </Stack>
            </CardContent>
            <Divider/>
            <CardActions sx={{justifyContent: "flex-end"}}>
                <FormControlLabel
                    control={<Switch/>}
                    label="Обязательный"
                />
                <Divider orientation="vertical" variant="middle" flexItem/>
                <IconButton>
                    <IoEllipsisVerticalSharp/>
                </IconButton>
            </CardActions>
        </Card>
    );
};