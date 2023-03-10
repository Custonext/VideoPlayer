import React from 'react';
import { AspectRatio, Box, Center, Collapse, HStack, IconButton, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Stack, Text, useTheme } from "@chakra-ui/react";
import moment from "moment";
import { useRef, useState } from "react";
import { RiFullscreenFill, RiPauseFill, RiPlayFill, RiVolumeMuteFill, RiVolumeUpFill } from "react-icons/ri";
import useVideoPlayer from "../hooks/useVideoPlayer";
import { useFullscreen, useIdle } from '@mantine/hooks';

export function VideoPlayer({ title, thumbnail, video, color, ratio }) {
    const bgImage = thumbnail || '';
    const aspectRatio = ratio === 'square' ? 1 / 1 : ratio === 'classic' ? 4 / 3 : ratio == 'wide'? 21 / 9: 16 / 9;
    const chakraCol = useTheme() ;
    // check if color is a valid color: Gray Red Orange Yellow Green Teal Blue Cyan Purple
    const validColor = (color) => {
        const colors = ['gray', 'red', 'orange', 'yellow', 'green', 'teal', 'blue', 'cyan', 'purple'];
        return colors.includes(color);
    }
    const checkedColor = validColor(color) ? color : 'gray';
    const colorScheme = (chakraCol.colors[checkedColor]);


    const { ref, toggle, fullscreen } = useFullscreen();
    const idle = useIdle(4000);
    const [isHovering, setIsHovering] = useState(false);
    const videoElement = useRef(null);
    const {
        playerState,
        togglePlay,
        handleOnTimeUpdate,
        handleVideoProgress,
        handleVideoSpeed,
        toggleMute,
        toggleFullscreen
    } = useVideoPlayer(videoElement);
    const handleMouseOver = () => {
        setIsHovering(true);
    };

    const handleMouseOut = () => {
        setIsHovering(false)
    };
    const toggleVideoSpeed = () => {
        if (playerState.speed == 2) handleVideoSpeed(0.5);
        else {
            handleVideoSpeed(playerState.speed + 0.25);
        }
    };


    const videoDuration = videoElement.current && videoElement.current.duration;
    const timeFormatting = videoDuration >= 3600 ? "HH:mm:ss" : "mm:ss";
    const formattedDuration = moment.utc(videoDuration * 1000).format(timeFormatting);
    const currentTime = moment.utc((videoDuration / 100 * playerState.progress) * 1000).format(timeFormatting);
    const videoTapped = () => {
        const screenWidth = window.innerWidth;
        if(screenWidth < 768) {
            toggle();
        } else {
            togglePlay();
        }
    }

    return (
        <AspectRatio ratio={aspectRatio} position='relative' width='full' maxH={'100vh'} bgColor={colorScheme[50]}>
            <Box w='full' position={'absolute'} top={0} ref={ref}>
                {!video ? <></> :
                    <video
                        ref={videoElement}
                        title={title}
                        width='100%'
                       style={{maxHeight: '100vh'}}
                        poster={bgImage}
                        preload="metadata"
                        src={video}
                        onTimeUpdate={handleOnTimeUpdate}
                    />}
                {playerState.isPlaying ?

                    <Stack p={0} spacing={0} align={'center'} position='absolute' bottom={0} width='full' height='full' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
                        <Box flex={1} w='full' h="full" onClick={videoTapped}></Box>


                        <Box w='full' bg={colorScheme[500]}>
                            <Collapse startingHeight={0} in={isHovering && !idle} pb={0}  >
                                <HStack w='full' spacing={3}>
                                    <IconButton rounded={'0'} icon={<RiPauseFill />} variant='ghost' _hover={{ color: 'black', backgroundColor: 'whiteAlpha.800' }} color='whiteAlpha.800' onClick={togglePlay} />
                                    <Text px={3} textAlign='right' fontSize={'xs'} color='whiteAlpha.800'>{currentTime} / {formattedDuration}</Text>
                                    <Slider flex={{ base: 2, lg: 5 }} colorScheme={''} size={'sm'} value={playerState.progress}
                                        onChange={(e) => handleVideoProgress(e)}>
                                        <SliderTrack h="full" opacity={isHovering ? 0.7 : 0.5}>
                                            <SliderFilledTrack transition={isHovering ? '0' : 'width 1s'} />
                                        </SliderTrack>
                                        <SliderThumb outlineColor='transparant' borderColor='white' />
                                    </Slider>
                                    <IconButton 
                                    alignContent={'center'} display={{base:'none',sm:'inline-flex'}}  bgColor={colorScheme[500]} rounded={'0'} icon={playerState.isMuted ? <RiVolumeMuteFill /> : <RiVolumeUpFill />} variant='ghost' _hover={{ color: 'black', backgroundColor: 'whiteAlpha.800' }} color='whiteAlpha.800' onClick={toggleMute} />

                            //* Speed toggle thrue
                                    <IconButton display={{base:'none',sm:'inline-flex'}} bgColor={colorScheme[500]} rounded={'0'} icon={<Text py={2} fontSize={'xs'}>{playerState.speed}x</Text>} variant='ghost' _hover={{ color: 'black', backgroundColor: 'whiteAlpha.800' }} color='whiteAlpha.800' onClick={() => toggleVideoSpeed()} />



                                    <IconButton bgColor={colorScheme[500]} rounded={'0'} icon={<RiFullscreenFill />} variant='ghost' _hover={{ color: 'black', backgroundColor: 'whiteAlpha.800' }} color='whiteAlpha.800' onClick={toggle} />

                                </HStack>
                            </Collapse>
                        </Box>
                    </Stack>
                    :

                    <Stack position='absolute' top={0} width='full' height='full' bgColor={'#44444466'} onClick={togglePlay}>
                        <Center flex={1}>
                            <IconButton borderRadius={'full'} color={colorScheme[500]} bg={'white'} boxSize='70px' fontSize={'30'} icon={<RiPlayFill />} boxShadow='xl' />
                        </Center>
                        
                    </Stack>
                }
            </Box>
        </AspectRatio>);
}