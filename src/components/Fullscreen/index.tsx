import type { ReactNode } from 'react';

interface FullScreenProps {
    children: ReactNode;
    backgroundColor?: string;
    className?: string;
}

const FullScreen = ({ 
    children, 
    backgroundColor = 'bg-white',
    className = '' 
}: FullScreenProps) => {
    return (
        <section 
            className={`w-full flex justify-center ${backgroundColor} ${className}`}
        >
            <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                {children}
            </div>
        </section>
    );
};

export default FullScreen;
