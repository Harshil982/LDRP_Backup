import React from 'react'

export const DashboardAccount = ({ source }) => {
    return (
        <div className='w-full bg-white shadow-xl rounded-lg p-6 mt-8' >
            <div className='flex justify-between items-center flex-wrap' >
                <div className='flex items-center flex-wrap'>
                    <img src={source} alt="Profile-1" className='w-14 mt-6' />
                    <div className='lg:ml-6 md:ml-6 xl:ml-6 sm:ml-6 ml-0 mt-6' >
                        <p className='text-xl font-bold' >Account Name</p>
                        <p className='text-gray-400' >jdsgflksf90@gamil.com</p>
                    </div>
                </div>
                <svg width="30" height="30" className='mt-6' viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.5 10C24.5711 10 26.25 8.32107 26.25 6.25C26.25 4.17893 24.5711 2.5 22.5 2.5C20.4289 2.5 18.75 4.17893 18.75 6.25C18.75 8.32107 20.4289 10 22.5 10Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M7.5 18.75C9.57107 18.75 11.25 17.0711 11.25 15C11.25 12.9289 9.57107 11.25 7.5 11.25C5.42893 11.25 3.75 12.9289 3.75 15C3.75 17.0711 5.42893 18.75 7.5 18.75Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22.5 27.5C24.5711 27.5 26.25 25.8211 26.25 23.75C26.25 21.6789 24.5711 20 22.5 20C20.4289 20 18.75 21.6789 18.75 23.75C18.75 25.8211 20.4289 27.5 22.5 27.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M10.7375 16.8875L19.275 21.8625" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M19.2625 8.13751L10.7375 13.1125" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <p className='mt-6 font-semibold' >many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
            <div className='flex items-center mt-8' >
                {/* Link icon */}
                <svg className='w-7 cursor-pointer' viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.125 17C19.125 21.505 15.4841 25.1458 10.9791 25.1458C6.47415 25.1458 2.83331 21.505 2.83331 17C2.83331 12.495 6.47415 8.85416 10.9791 8.85416" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M14.1667 17C14.1667 12.3108 17.9775 8.5 22.6667 8.5C27.3559 8.5 31.1667 12.3108 31.1667 17C31.1667 21.6892 27.3559 25.5 22.6667 25.5" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                {/* Like */}
                <svg className='w-7 ml-10 cursor-pointer' height="35" viewBox="0 0 34 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.62093 33.1831H5.04837C4.23989 33.1831 3.46453 32.8546 2.89285 32.2698C2.32117 31.685 2 30.8918 2 30.0648V19.1507C2 18.3237 2.32117 17.5305 2.89285 16.9457C3.46453 16.3609 4.23989 16.0324 5.04837 16.0324H9.62093M20.2902 12.9141V6.67746C20.2902 5.43692 19.8085 4.24719 18.951 3.37C18.0934 2.4928 16.9304 2 15.7177 2L9.62093 16.0324V33.1831H26.8137C27.5489 33.1916 28.2623 32.928 28.8225 32.4409C29.3826 31.9539 29.7519 31.2761 29.8621 30.5325L31.9655 16.5001C32.0318 16.0532 32.0023 15.5969 31.8791 15.1628C31.7559 14.7287 31.5419 14.3271 31.2519 13.986C30.962 13.6449 30.603 13.3724 30.1998 13.1873C29.7967 13.0022 29.359 12.909 28.9171 12.9141H20.2902Z" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                {/* DisLike */}
                <svg className='w-7 ml-10 cursor-pointer' viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24.2414 2.33328H28.311C29.1736 2.31826 30.0118 2.61547 30.6665 3.16849C31.3211 3.7215 31.7467 4.49182 31.8623 5.33322V15.833C31.7467 16.6744 31.3211 17.4447 30.6665 17.9978C30.0118 18.5508 29.1736 18.848 28.311 18.833H24.2414M13.5721 21.8329V27.8328C13.5721 29.0263 14.0538 30.1708 14.9114 31.0147C15.7689 31.8586 16.9319 32.3327 18.1446 32.3327L24.2414 18.833V2.33328H7.04857C6.31341 2.3251 5.60002 2.57866 5.03984 3.04725C4.47966 3.51584 4.11043 4.16788 4.0002 4.88323L1.89682 18.383C1.83051 18.8129 1.85998 19.2519 1.98318 19.6696C2.10639 20.0872 2.32039 20.4735 2.61036 20.8017C2.90032 21.1298 3.25932 21.392 3.66248 21.5701C4.06564 21.7482 4.50332 21.8378 4.94519 21.8329H13.5721Z" stroke="#D9D9D9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
        </div>
    )
}
