import React from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'


function HW11() {
    const [value1, setValue1] = React.useState<number>(0);
    const [value2, setValue2] = React.useState<number[]>([20, 60]);

    const onChangeRange = (value: number) => {
        if (value2[0] < value2[1]) {
            setValue1(value)
            setValue2([value, value2[1]])
        } else {
// первый ползунок залипает на максимальном значении
        }
    }

    const handleChange2 = (
        event: Event,
        newValue: number | number[],
        // activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }
        setValue2(newValue as number[]);
        setValue1(value2[0])
    };
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>
                {/*<span>{value1}</span>*/}
                <SuperRange
                    value1={value1}
                    onChangeRange={onChangeRange}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                {/*<span>{value1}</span>*/}
                <SuperDoubleRange
                    value2={value2}
                    setValue2={setValue2}
                    setValue1={setValue1}
                    handleChange2={handleChange2}
                    // сделать так чтоб value1 и value2 изменялось
                />
                {/*<span>{value2}</span>*/}
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
