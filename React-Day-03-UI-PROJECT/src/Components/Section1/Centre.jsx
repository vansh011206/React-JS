import React from 'react'
import InfoCard from './InfoCard';
import { MoveUpRight } from 'lucide-react';
const Centre = () => {
    return (
        <div className='flex flex-row items-center justify-between px-16 py-12'>
            <div className="left w-1 h-100 flex flex-col justify-between">
                <div className="left-upper w-1">
                    <h1 className="text-5xl font-bold mb-4">Empowering Digital Creators</h1>
                    <div className="w-80 mb-6">
                        <p className="w-full text-sm mb-6">Join our platform to unleash your creativity and connect with a vibrant community of digital makers.</p>
                    </div>
                </div>
                <div className="left-lower">
                    <button><MoveUpRight /></button>
                </div>
            </div>

            <div className="right flex flex-wrap gap-6 justify-center">
                <InfoCard
                    number="1"
                    image="https://images.unsplash.com/photo-1517841905240-472988babdf9"
                    description="Prime customers that have access to bank credentials and are satisfied with the current product"
                    status="Satisfied"
                />

                {/* Card 2 */}
                <InfoCard
                    number="2"
                    image="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
                    description="Young professionals actively using digital banking and looking for faster transactions"
                    status="Active"
                />

                {/* Card 3 ✅ */}
                <InfoCard
                    number="3"
                    image="https://images.unsplash.com/photo-1531123897727-8f129e1688ce"
                    description="New users exploring digital services who need guidance and onboarding support"
                    status="New User"
                />

            </div>
        </div>
    )
}

export default Centre;




