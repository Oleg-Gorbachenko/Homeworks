import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';


type PropsType = {
    value2: number[]
    setValue2: (value2: number[]) => void
    setValue1: (value1: number) => void
    handleChange2: (event: Event,
                    newValue: number | number[],
                    activeThumb: number) => void
}

function valuetext(value: number) {
    return `${value}°C`;
}

export default function MinimumDistanceSlider(props: PropsType) {

    return (
        <Box sx={{width: 300}}>
            <Slider
                // getAriaLabel={() => 'Minimum distance shift'}
                value={props.value2}
                onChange={props.handleChange2}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
            />
        </Box>
    );
}