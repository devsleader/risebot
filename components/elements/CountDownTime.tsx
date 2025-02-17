// import Countdown from './CountDown'
import dynamic from 'next/dynamic';
import React from 'react';

const Countdown = dynamic(() => import('./Countdown'), {
    ssr: false,
});

// Define the number of milliseconds in a day
const msInADay = 24 * 60 * 60 * 1000; // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds

export default function CountDownTime() {
    const currentTime = new Date();
    const endDateTime = new Date(currentTime.getTime() + 2 * msInADay); // Set end date to 2 days from now

    return (
        <>
            <Countdown endDateTime={endDateTime.toString()} /> {/* Convert to string for compatibility */}
        </>
    );
}