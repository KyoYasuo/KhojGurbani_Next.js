'use client'

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import { useAudioPlayer } from '@/contexts/AudioPlayerContext';
import ReactPlayer from 'react-player';
import { toast } from 'react-toastify';
import { PlayPauseButton } from './PlayPauseButton';
import clsx from 'clsx';

const AudioPlayer: React.FC = () => {

    const { audioId, audioTitle, audioUrl, isPlaying, pauseAudio, playAudio } = useAudioPlayer();
    const playerRef = useRef<ReactPlayer>(null);
    const sliderRef = useRef<HTMLDivElement>(null);

    const [isShow, setIsShow] = useState<boolean>(false);

    const [duration, setDuration] = useState<number | null>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [loadedTime, setLoadedTime] = useState<number>(0);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        if (audioUrl) setIsShow(true);
        setIsLoading(true);
        setDuration(0);
        setCurrentTime(0);
        setLoadedTime(0);
    }, [audioUrl]);

    const handleError = (error: any) => {
        toast.error(error);
    }

    const handleReady = () => {
        setIsLoading(false);
    }

    const handleBuffer = () => {
        setIsLoading(true)
    }

    const handleDuration = (duration: number) => {
        setDuration(duration);
    };
    const handleProgress = (progress: { played: number; playedSeconds: number; loaded: number; loadedSeconds: number; }) => {
        setCurrentTime(progress.playedSeconds);
        setLoadedTime(progress.loadedSeconds);
    };

    const handlePlayPause = () => {
        if (playerRef.current && !isLoading) {
            isPlaying ? pauseAudio() : playAudio(audioUrl, audioTitle, audioId);
        }
    }

    const handleBackward = () => {
        if (playerRef.current) {
            playerRef.current.seekTo(playerRef.current.getCurrentTime() - 15, 'seconds');
        }
    };

    const handleForward = () => {
        if (playerRef.current) {
            playerRef.current.seekTo(playerRef.current.getCurrentTime() + 15, 'seconds');
        }
    };

    const handleMouseDown = () => {
        if (playerRef.current) {
            setIsDragging(true);
        }
    };

    useEffect(() => {
        const handleMouseUp = (event: { clientX: number; }) => {
            if (isDragging && sliderRef.current && playerRef.current) {
                const rect = sliderRef.current.getBoundingClientRect();
                const offsetX = event.clientX - rect.left;
                const newValue = offsetX / rect.width;
                playerRef.current.seekTo(newValue * (duration || 0), 'seconds');
                setIsDragging(false);
            }
        }

        const handleMouseMove = (event: { clientX: number; }) => {
            if (isDragging && sliderRef.current && playerRef.current) {
                const rect = sliderRef.current.getBoundingClientRect();
                const offsetX = event.clientX - rect.left;
                const newValue = offsetX / rect.width;
                playerRef.current.seekTo(newValue * (duration || 0), 'seconds');
            }
        };

        if (isDragging) {
            document.addEventListener('mousemove', handleMouseMove);
            document.addEventListener('mouseup', handleMouseUp);

            return () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [duration, isDragging]);

    function convertStoMs(seconds: number) {
        const minutes = Math.floor(seconds / 60);
        const extraSeconds = Math.round(seconds % 60);
        return `${String(minutes).padStart(2, '0')}:${String(extraSeconds).padStart(2, '0')}`;
    }

    return (
        <div className={clsx(isShow ? 'md:mt-20 mt-28' : 'mt-0', 'transition-all')}>
            <button
                className={clsx(isShow ? 'md:bottom-20 bottom-28' : 'bottom-0', 'transition-all fixed right-0 h-8 w-8 z-50 bg-black bg-opacity-40 p-1')}
                onClick={() => {
                    if (audioUrl) setIsShow(!isShow);
                    else toast.error("please load the audio first");
                }}
            >
                {
                    isShow ?
                        <Image src='/Images/SVG/arrow_down.svg' alt='pause' width={24} height={24} />
                        :
                        <Image src='/Images/SVG/arrow_up.svg' alt='play' width={24} height={24} />
                }
            </button>

            <div
                className={clsx(isShow ? 'bottom-0 ' : 'md:-bottom-20 -bottom-28 ', 'fixed left-0 w-full h-28 md:h-20 z-50 bg-white transition-all border-t-2 border-[#607D8B]')}
            >
                <ReactPlayer
                    ref={playerRef}
                    url={audioUrl}
                    controls={false}
                    playing={isPlaying}
                    progressInterval={100}
                    onProgress={handleProgress}
                    onDuration={handleDuration}
                    onReady={handleReady}
                    onBuffer={handleBuffer}
                    onError={handleError}
                    className="hidden"
                />
                {(duration && duration != Infinity) ?
                    <div className='relative flex flex-col-reverse md:flex-row items-center h-full'>
                        <div className='absolute left-0 top-2 w-full transition-all text-center text-xs'>{audioTitle}</div>
                        <div className='flex justify-around items-center w-64 md:w-40 mb-1 md:mb-0'>
                            <button onClick={handleBackward}>
                                <Image src='/images/svg/backward-15-seconds.svg' alt='backward' width={32} height={32} />
                            </button>
                            <PlayPauseButton onClick={handlePlayPause} isPlaying={isPlaying} isSelected={true} size={2} />
                            <button onClick={handleForward}>
                                <Image src='/images/svg/forward-15-seconds.svg' alt='forward' width={32} height={32} />
                            </button>
                        </div>
                        < div className='flex md:grow items-center w-full'>
                            <div className='w-16 text-center'>{convertStoMs(currentTime)}</div>
                            <div className='grow cursor-pointer'
                                onMouseDown={handleMouseDown}
                            >
                                <div ref={sliderRef} className="relative h-2 w-full bg-gray-200 rounded-md">
                                    <div className='absolute h-2 bg-gray-300 rounded-md transition-width' style={{ width: `${loadedTime * 100 / (duration || 1)}%` }}></div>
                                    <div className='absolute h-2 bg-[#0B79BE] rounded-md transition-width' style={{ width: `${currentTime * 100 / (duration || 1)}%` }}></div>
                                </div>
                            </div>
                            <div className='w-16 text-center'>-{convertStoMs((duration || 0) - currentTime)}</div>
                        </div>
                    </div>
                    :
                    <div className='flex md:flex-row-reverse md:gap-2 flex-col justify-center items-center h-full'>
                        <div className='transition-all text-center text-base'>{audioTitle}</div>
                        <PlayPauseButton onClick={handlePlayPause} isPlaying={isPlaying} isSelected={true} size={2} />
                    </div>
                }
            </div>

        </div >
    );
};

export default AudioPlayer;