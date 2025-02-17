'use client'
import { useEffect } from 'react';

const DonutProgress = () => {
    useEffect(() => {
        const handleAppearance = () => {
            const progressBars = document.querySelectorAll('.progress-bar');
            
            progressBars.forEach(progressBar => {
                const progressContent = progressBar.querySelector('.progress-content') as HTMLElement | null;
                const progressNumberMark = progressBar.querySelector('.progress-number-mark') as HTMLElement | null;
                
                if (!progressContent || !progressNumberMark) {
                    console.error('Required elements not found in progress bar');
                    return; // Skip this progress bar
                }
                
                const percentage = parseFloat(progressBar.getAttribute('data-percentage') || '0');
                
                // Animate progress content
                progressContent.style.width = percentage + '%';
                
                // Animate progress number mark
                const animateProgressNumberMark = (num: number) => {
                    const data = Math.round(num * 10) / 10;
                    
                    const percentElement = progressNumberMark.querySelector('.percent');
                    if (percentElement) {
                        percentElement.innerHTML = data + '%';
                    }
                    
                    progressNumberMark.style.left = percentage + '%';
                };
                
                let count = 0;
                const intervalId = setInterval(() => {
                    animateProgressNumberMark(count);
                    count++;
                    if (count > percentage || count > 100) clearInterval(intervalId);
                }, 30);
            });
        };
        
        const setupObserver = () => {
            const contentProgressBox = document.querySelector('.content-progress-box');
            if (contentProgressBox) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            handleAppearance();
                            observer.unobserve(entry.target);
                        }
                    });
                });
                
                observer.observe(contentProgressBox);
            } else {
                // If the container isn't found, try to run the animation immediately
                console.warn('content-progress-box not found, running animation immediately');
                handleAppearance();
            }
        };
        
        // Ensure DOM is loaded before attempting to set up observers
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', setupObserver);
        } else {
            setupObserver();
        }
        
        return () => {
            // Clean up intervals if component unmounts
            // No need to clear intervals here since they are cleared in the handleAppearance function
        };
    }, []);
    
    return null;
};

export default DonutProgress;