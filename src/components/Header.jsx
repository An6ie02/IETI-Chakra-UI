import { Box, Heading, Image, VStack, Stack, Button } from '@chakra-ui/react'

export const Header = () => {
    return (
        <Box width='100%' height='30vh' display='flex' justifyContent='center' alignItems='center' position='relative'>
            <Image width='100%' height='100%' objectFit='cover' opacity={0.9} src="src\assets\bicycle.jpg" alt="Landscape by bike" />
            <VStack position='absolute' color='white' spacing={4}>
                <Heading as='h1' size='xl' mb={4}>DOMINA EL TERRENO</Heading>
                <Stack direction={["column", "row"]} spacing={4}>
                    <Button variant='outline' color='white'>VER DETALLES</Button>
                    <Button variant='outline' color='white'>VER VIDEO</Button>
                </Stack>
            </VStack>
        </Box>
    )
}