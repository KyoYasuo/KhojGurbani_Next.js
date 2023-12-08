'use client'
// // Import necessary modules and components
// import Image from 'next/image';
// import React, { useRef, useState, useEffect, useCallback } from 'react';
// import ReactPlayer from 'react-player';

// // Define the props interface
// interface AudioPlayerProps {
//     url: string;
// }

// // Define the AudioPlayer component
// const AudioPlayer: React.FC<AudioPlayerProps> = ({ url }) => {
//     // State and ref initialization
//     const playerRef = useRef<ReactPlayer>(null);
//     const sliderRef = useRef<HTMLDivElement>(null);
//     const [isPlaying, setIsPlaying] = useState(false);
//     const [currentTime, setCurrentTime] = useState<number>(0);
//     const [seekTime, setSeekTime] = useState<number>(0);
//     const [duration, setDuration] = useState<number | null>(null);
//     const [value, setValue] = useState<number>(0);
//     const [isDragging, setIsDragging] = useState<boolean>(false);

//     // Handle mouse down event on the slider
//     const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
//         event.preventDefault();
//         setIsDragging(true);
//     };

//     const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
//         if (isDragging && sliderRef.current) {
//             const rect = sliderRef.current.getBoundingClientRect();
//             const offsetX = event.clientX - rect.left;
//             const newValue = (offsetX / rect.width) * 100;
//             setValue(Math.min(100, Math.max(0, newValue)));
//         }
//     }, [isDragging, sliderRef]);

//     const handleMouseUp = useCallback(() => {
//         setIsDragging(false);
//     }, []);

//     // Handle play/pause button click
//     const handlePlayPause = () => {
//         setIsPlaying(!isPlaying);
//     };

//     // Handle backward button click
//     const handleBackward = () => {
//         if (playerRef.current) {
//             const newTime = Math.max(0, currentTime - 15);
//             playerRef.current.seekTo(newTime, 'seconds');
//         }
//     };

//     // Handle forward button click
//     const handleForward = () => {
//         if (playerRef.current) {
//             const newTime = Math.min(duration || 0, currentTime + 15);
//             playerRef.current.seekTo(newTime, 'seconds');
//         }
//     };

//     // Handle progress during playback
//     const handleProgress = (progress: { played: number; playedSeconds: number }) => {
//         setCurrentTime(progress.playedSeconds);
//     };

//     // Handle duration of the audio
//     const handleDuration = (duration: number) => {
//         setDuration(duration);
//     };

//     // Update seek time when the slider value changes
//     useEffect(() => {
//         if (isDragging) {
//             const newSeekTime = (value / 100) * (duration || 0);
//             setSeekTime(newSeekTime);
//         }
//     }, [value, duration, isDragging]);

//     useEffect(() => {
//         if (playerRef.current) {
//             playerRef.current.seekTo(seekTime, 'seconds');
//         }
//     }, [seekTime]);

//     useEffect(() => {
//         if (duration && duration > 0) setValue(currentTime * 100 / duration);
//     }, [currentTime, duration]);

//     // Cleanup event listeners on component unmount
//     useEffect(() => {
//         const onMouseMove = (event: MouseEvent) => handleMouseMove(event as unknown as React.MouseEvent<HTMLDivElement>);
//         const onMouseUp = () => handleMouseUp();

//         if (isDragging) {
//             document.addEventListener('mousemove', onMouseMove);
//             document.addEventListener('mouseup', onMouseUp);

//             return () => {
//                 document.removeEventListener('mousemove', onMouseMove);
//                 document.removeEventListener('mouseup', onMouseUp);
//             };
//         }
//     }, [isDragging, handleMouseMove, handleMouseUp]);

//     // Function to convert seconds to MM:SS format
//     function convertStoMs(seconds: number) {
//         const minutes = Math.floor(seconds / 60);
//         const extraSeconds = Math.round(seconds % 60);
//         return `${String(minutes).padStart(2, '0')}:${String(extraSeconds).padStart(2, '0')}`;
//     }

//     // Return the JSX for the AudioPlayer component
//     return (
//         <div className='bg-white fixed w-full z-50 bottom-0 left-0 h-16'>
//             <ReactPlayer
//                 ref={playerRef}
//                 url={url}
//                 controls={false}
//                 playing={isPlaying}
//                 progressInterval={100}
//                 onProgress={handleProgress}
//                 onDuration={handleDuration}
//                 className="hidden"
//             />
//             <div className='flex justify-around items-center'>
//                 <div className='flex justify-between items-center'>
//                     <button onClick={handleBackward}>
//                         <Image src='/Images/SVG/backward-15-seconds.svg' alt='backward' width={35} height={35} />
//                     </button>
//                     <button onClick={handlePlayPause}>
//                         {isPlaying ? <Image src='/Images/SVG/pause.svg' alt='pause' width={50} height={50} />
//                             : <Image src='/Images/SVG/play.svg' alt='play' width={50} height={50} />}
//                     </button>
//                     <button onClick={handleForward}>
//                         <Image src='/Images/SVG/forward-15-seconds.svg' alt='forward' width={35} height={35} />
//                     </button>
//                 </div>
//                 <div>{convertStoMs(currentTime)}</div>
//                 <div
//                     ref={sliderRef}
//                     className="relative h-2 w-10/12 bg-gray-300 rounded-md cursor-pointer"
//                     onMouseDown={handleMouseDown}
//                 >
//                     <div
//                         className="absolute h-full bg-blue-500 rounded-md"
//                         style={{ width: `${value}%` }}
//                     ></div>
//                 </div>
//                 <div>{convertStoMs((duration || 0) - currentTime)}</div>
//             </div>
//         </div>
//     );
// };

// // Export the AudioPlayer component
// export default AudioPlayer;


// components/AudioPlayer.tsx
import { useEffect, useRef } from 'react';
import { useAudioPlayer } from '@/contexts/AudioPlayerContext';
import ReactPlayer from 'react-player';

const AudioPlayer: React.FC = () => {
    const { audioUrl, isPlaying, pauseAudio } = useAudioPlayer();
    const playerRef = useRef<ReactPlayer | null>(null);

    useEffect(() => {
        return () => {
            // Cleanup when the component unmounts
            pauseAudio();
        };
    }, [pauseAudio]);

    return (
        <div className='fixed bottom-0 left-0 w-full z-50'>
            <ReactPlayer url={audioUrl} playing={isPlaying} ref={playerRef} controls/>
        </div>
    );
};

export default AudioPlayer;