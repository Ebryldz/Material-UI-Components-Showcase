import { Stack } from "@mui/material";
import React from "react";
import { Divider } from "@mui/material";

function MUIStack() {
    return (
        <div>
            <div>
                <Stack> {/* stack= flex-direction=column olan bir div  */}
                    <div>Item1</div>
                    <div>Item2</div>
                    <div>Item3</div>
                </Stack>
            </div>

            <div>
                <Stack
                    direction='row' spacing={10}
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    <div>Item1</div>
                    <div>Item2</div>
                    <div>Item3</div>
                </Stack>
            </div>

            <div>
                <Stack
                    direction='column' spacing={2}
                    divider={<Divider orientation='horizontal' flexItem />}
                >
                    <div>Item1</div>
                    <div>Item2</div>
                    <div>Item3</div>
                </Stack>
            </div>

            <div>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }} spacing={2}
                    divider={<Divider orientation='horizontal' flexItem />}
                >
                    <div>Item1</div>
                    <div>Item2</div>
                    <div>Item3</div>
                </Stack>
            </div>

        </div>
    );
}

export default MUIStack;

