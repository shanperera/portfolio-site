import React from 'react';
import { Box, Text } from 'grommet';

class Introduction extends React.Component{
    render(){
        return(
            <Box margin={{ horizontal: "xlarge", vertical: "small"}} pad="xlarge">
                <Box align="center" justify="center">
                    <Text size="xlarge">Hello, I'm Shan. </Text>
                </Box>
            </Box>
        )
    }

}

export default Introduction;