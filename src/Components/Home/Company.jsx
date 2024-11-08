'use client'

import { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'

export default function Company() {
    const [isHovered, setIsHovered] = useState(false)
    const logosRef = useRef(null)

    const logos = [
        { name: 'Urban Crown', src: '/public/companyLogo1.png' },
        { name: 'Urban Crown', src: '/public/companyLogo2.png' },
        { name: 'Urban Crown', src: '/public/companyLogo3.png' },
        { name: 'Urban Crown', src: '/public/companyLogo4.png' },
        { name: 'Urban Crown', src: '/public/companyLogo5.png' },
    ]

    const allLogos = [...logos, ...logos]

    useEffect(() => {
        const context = gsap.context(() => {
            const animation = gsap.to(logosRef.current, {
                xPercent: -50,
                repeat: -1,
                ease: 'linear',
                duration: 30,
            })
            if (isHovered) {
                animation.pause()
            } else {
                animation.resume()
            }
        }, [isHovered])

        return () => context.revert()
    }, [isHovered])

    return (
        <section className="w-full py-12 bg-background border-t border-gray-200">
            <div className="container flex flex-col md:flex-row items-center px-4 md:px-6 justify-between">
                <div className="text-center md:text-left w-full md:w-1/2 space-y-4 md:px-[10%]">
                    <h2 className="text-3xl font-bold tracking-tighter ">
                        Partnerships with leading
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 max-w-[600px] mx-auto md:mx-0">
                        Canadian Insurance Providers
                    </p>
                </div>

                <div
                    className="logos mt-8 md:mt-0 md:ml-auto relative overflow-hidden bg-clouds w-full md:w-1/2"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        ref={logosRef}
                        className="flex items-center justify-start gap-8 py-4"
                        style={{
                            width: 'fit-content'
                        }}
                    >
                        {allLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-center min-w-[120px] h-16 grayscale hover:grayscale-0 transition-all duration-200"
                            >
                                <img
                                    src={logo.src}
                                    alt={`${logo.name} logo`}
                                    className="max-w-full max-h-full object-contain"
                                    width={80}
                                    height={40}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <style>{`
        .bg-clouds {
          background: radial-gradient(circle, rgba(255, 255, 255, 0.7) 0%, rgba(230, 230, 250, 0.3) 40%, transparent 70%);
          position: relative;
          z-index: 1;
        }

        .bg-clouds::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, rgba(240, 240, 255, 0.5) 20%, transparent 100%);
          z-index: -1;
          filter: blur(20px);
        }
      `}</style>
        </section>
    )
}
