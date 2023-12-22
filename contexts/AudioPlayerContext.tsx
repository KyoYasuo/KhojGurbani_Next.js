"use client"
import { createContext, useContext, useState, ReactNode } from 'react';

interface AudioPlayerContextProps {
    audioId: string;
    audioTitle: string;
    audioUrl: string;
    isPlaying: boolean;
    playAudio: (url: string, title: string, id: string) => void;
    pauseAudio: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextProps | undefined>(undefined);

interface AudioPlayerProviderProps {
    children: ReactNode;
}

export const AudioPlayerProvider: React.FC<AudioPlayerProviderProps> = ({ children }) => {
    const [audioId, setAudioId] = useState<string>('');
    const [audioTitle, setAudioTitle] = useState<string>('');
    const [audioUrl, setAudioUrl] = useState<string>('');
    const [isPlaying, setIsPlaying] = useState<boolean>(false);

    const playAudio = (url: string, title: string, id: string) => {
        setAudioId(id);
        setAudioTitle(title);
        setAudioUrl(url);
        setIsPlaying(true);
    };

    const pauseAudio = () => {
        setIsPlaying(false);
    };

    return (
        <AudioPlayerContext.Provider value={{ audioId, audioTitle, audioUrl, isPlaying, playAudio, pauseAudio }}>
            {children}
        </AudioPlayerContext.Provider>
    );
};

export const useAudioPlayer = (): AudioPlayerContextProps => {
    const context = useContext(AudioPlayerContext);
    if (!context) {
        throw new Error('useAudioPlayer must be used within an AudioPlayerProvider');
    }
    return context;
};
