import React, {useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import '../styles/skill.scss'

function Skill() {
    useEffect(() => {
        Aos.init({duration:1000});
    },[])
    return (
        <div className = 'skillSection'>
            <div data-aos='fade-up' className = 'line-right'/>
            <h3 data-aos='fade-up' className= 'title'>SKILLS</h3>
            <div data-aos='fade-up' className = 'skill-about'>
                <p>
                I’m a full stack developer with knowledge in different technologies. If I don’t know something I always try to wrap my head around quickly.
                </p>
            </div>
            <div data-aos='fade-up' className = 'skill-svg'>
            {/* c++ */}
            <svg width="105" height="118" viewBox="0 0 105 118" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0)">
            <path d="M52.5 93.9527C33.2009 93.9527 17.5 78.273 17.5 58.9999C17.5 39.7269 33.2009 24.0471 52.5 24.0471C64.9531 24.0471 76.5673 30.7396 82.8097 41.5126L67.6626 50.2658C64.5383 44.8735 58.7279 41.5235 52.5 41.5235C42.8503 41.5235 35 49.3632 35 58.9999C35 68.6363 42.8503 76.4763 52.5 76.4763C58.7286 76.4763 64.539 73.1263 67.6636 67.733L82.8107 76.4859C76.5683 87.2599 64.9538 93.9527 52.5 93.9527Z" fill="white"/>
            <path d="M87.5 57.0581H83.6109V53.1746H79.7224V57.0581H75.8333V60.9416H79.7224V64.8255H83.6109V60.9416H87.5V57.0581Z" fill="white"/>
            <path d="M102.083 57.0581H98.1942V53.1746H94.3058V57.0581H90.4167V60.9416H94.3058V64.8255H98.1942V60.9416H102.083V57.0581Z" fill="white"/>
            </g>
            <defs>
            <clipPath id="clip0">
            <rect width="105" height="118" fill="white"/>
            </clipPath>
            </defs>
            </svg>
            {/* node */}
            <svg width="199" height="199" viewBox="0 0 199 199" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M98.4895 144.257C98.0053 144.257 97.5237 144.13 97.0998 143.885L92.6761 141.267C92.0157 140.898 92.3381 140.767 92.556 140.691C93.4372 140.385 93.6157 140.314 94.5563 139.781C94.6541 139.726 94.7841 139.747 94.8853 139.806L98.2839 141.824C98.4069 141.892 98.5807 141.892 98.6941 141.824L111.944 134.176C112.068 134.106 112.147 133.964 112.147 133.818V118.527C112.147 118.377 112.068 118.237 111.941 118.161L98.6965 110.52C98.5741 110.449 98.4116 110.449 98.2882 110.52L85.0471 118.164C84.9184 118.237 84.8368 118.382 84.8368 118.527V133.818C84.8368 133.964 84.9184 134.103 85.0457 134.172L88.6755 136.269C90.6449 137.254 91.8509 136.094 91.8509 134.929V119.832C91.8509 119.618 92.0223 119.45 92.2359 119.45H93.9158C94.1261 119.45 94.2999 119.618 94.2999 119.832V134.929C94.2999 137.557 92.8684 139.065 90.3766 139.065C89.6108 139.065 89.0078 139.065 87.3246 138.235L83.8501 136.235C82.9917 135.739 82.4604 134.811 82.4604 133.818V118.527C82.4604 117.533 82.9917 116.606 83.8501 116.112L97.0998 108.455C97.9383 107.981 99.0527 107.981 99.8845 108.455L113.134 116.112C113.992 116.608 114.525 117.533 114.525 118.527V133.818C114.525 134.811 113.992 135.735 113.134 136.235L99.8845 143.885C99.461 144.13 98.9804 144.257 98.4895 144.257Z" fill="white"/>
            <path d="M102.582 133.722C96.7841 133.722 95.5695 131.061 95.5695 128.828C95.5695 128.616 95.74 128.446 95.9523 128.446H97.6654C97.8567 128.446 98.0163 128.584 98.0461 128.771C98.3048 130.515 99.0759 131.395 102.582 131.395C105.374 131.395 106.562 130.763 106.562 129.283C106.562 128.429 106.225 127.795 101.887 127.37C98.2617 127.012 96.0193 126.211 96.0193 123.311C96.0193 120.637 98.2726 119.043 102.051 119.043C106.296 119.043 108.396 120.516 108.662 123.677C108.672 123.786 108.634 123.89 108.561 123.972C108.488 124.048 108.387 124.094 108.28 124.094H106.561C106.383 124.094 106.225 123.967 106.189 123.794C105.776 121.959 104.773 121.373 102.051 121.373C99.0033 121.373 98.6491 122.435 98.6491 123.23C98.6491 124.194 99.067 124.474 103.182 125.019C107.254 125.557 109.188 126.319 109.188 129.181C109.188 132.068 106.781 133.722 102.582 133.722Z" fill="white"/>
            <path d="M118.716 117.509H119.162C119.526 117.509 119.594 117.253 119.594 117.104C119.594 116.712 119.324 116.712 119.175 116.712H118.716V117.509ZM118.175 116.253H119.162C119.5 116.253 120.162 116.253 120.162 117.01C120.162 117.537 119.824 117.645 119.621 117.712C120.014 117.739 120.04 117.996 120.094 118.361C120.121 118.59 120.162 118.983 120.242 119.117H119.635C119.621 118.983 119.526 118.253 119.526 118.213C119.487 118.05 119.431 117.969 119.229 117.969H118.73V119.117H118.175V116.253ZM116.993 117.678C116.993 118.868 117.953 119.827 119.128 119.827C120.317 119.827 121.277 118.847 121.277 117.678C121.277 116.49 120.304 115.544 119.128 115.544C117.966 115.544 116.993 116.476 116.993 117.678ZM121.688 117.686C121.688 119.09 120.539 120.239 119.135 120.239C117.743 120.239 116.581 119.104 116.581 117.686C116.581 116.24 117.77 115.131 119.135 115.131C120.513 115.131 121.688 116.24 121.688 117.686Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M57.4589 84.4314C57.4589 83.8208 57.1375 83.2597 56.6105 82.9572L42.5627 74.8728C42.3253 74.7328 42.0589 74.6602 41.7896 74.6493H41.6443C41.3757 74.6602 41.1097 74.7328 40.8686 74.8728L26.8208 82.9572C26.2971 83.2597 25.9714 83.8208 25.9714 84.4314L26.0023 106.2C26.0023 106.503 26.1595 106.785 26.4258 106.933C26.6865 107.09 27.0089 107.09 27.2686 106.933L35.6173 102.153C36.1453 101.839 36.4667 101.286 36.4667 100.68V90.5102C36.4667 89.9039 36.7878 89.3428 37.3138 89.0413L40.8686 86.9939C41.1336 86.841 41.4231 86.766 41.719 86.766C42.0085 86.766 42.3054 86.841 42.5627 86.9939L46.1165 89.0413C46.6426 89.3428 46.9649 89.9039 46.9649 90.5102V100.68C46.9649 101.286 47.2906 101.843 47.8153 102.153L56.1617 106.933C56.4234 107.09 56.7504 107.09 57.0098 106.933C57.2685 106.785 57.4314 106.503 57.4314 106.2L57.4589 84.4314Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M123.748 95.7666C123.748 95.9178 123.667 96.0581 123.536 96.1334L118.711 98.9148C118.58 98.99 118.418 98.99 118.287 98.9148L113.462 96.1334C113.33 96.0581 113.25 95.9178 113.25 95.7666V90.1949C113.25 90.0437 113.33 89.9034 113.462 89.8274L118.286 87.0408C118.418 86.9648 118.58 86.9648 118.711 87.0408L123.536 89.8274C123.667 89.9034 123.748 90.0437 123.748 90.1949V95.7666ZM125.052 54.5063C124.789 54.3603 124.468 54.3633 124.208 54.5159C123.949 54.6681 123.79 54.9467 123.79 55.2475V76.8059C123.79 77.0178 123.676 77.2141 123.493 77.3203C123.31 77.4264 123.083 77.4264 122.899 77.3203L119.381 75.2931C118.856 74.9903 118.21 74.991 117.685 75.2935L103.632 83.4037C103.107 83.7068 102.783 84.267 102.783 84.8733V101.097C102.783 101.703 103.107 102.263 103.631 102.567L117.684 110.683C118.209 110.986 118.856 110.986 119.382 110.683L133.437 102.567C133.961 102.263 134.285 101.703 134.285 101.097V60.655C134.285 60.0401 133.952 59.473 133.415 59.1731L125.052 54.5063Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M171.847 90.0492C172.369 89.7457 172.691 89.1865 172.691 88.5819V84.6503C172.691 84.0457 172.369 83.4862 171.846 83.1827L157.883 75.0758C157.358 74.7703 156.71 74.77 156.183 75.0734L142.135 83.1837C141.61 83.4868 141.286 84.0467 141.286 84.653V100.872C141.286 101.483 141.614 102.046 142.143 102.347L156.104 110.302C156.619 110.596 157.25 110.599 157.768 110.311L166.212 105.618C166.48 105.469 166.647 105.188 166.649 104.882C166.651 104.576 166.488 104.293 166.223 104.14L152.086 96.0262C151.822 95.8749 151.659 95.5937 151.659 95.2902V90.2071C151.659 89.9039 151.821 89.6233 152.084 89.4721L156.484 86.9355C156.746 86.7843 157.069 86.7843 157.331 86.9355L161.733 89.4721C161.996 89.6233 162.157 89.9039 162.157 90.2071V94.2063C162.157 94.5101 162.32 94.7907 162.583 94.9419C162.846 95.0938 163.17 95.0925 163.432 94.9403L171.847 90.0492Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M156.826 89.2895C156.927 89.2311 157.051 89.2311 157.152 89.2895L159.848 90.845C159.949 90.9034 160.011 91.0108 160.011 91.1272V94.2409C160.011 94.3577 159.949 94.4648 159.848 94.5232L157.152 96.079C157.051 96.1374 156.927 96.1374 156.826 96.079L154.132 94.5232C154.031 94.4648 153.969 94.3577 153.969 94.2409V91.1272C153.969 91.0108 154.031 90.9034 154.132 90.845L156.826 89.2895Z" fill="white"/>
            <path d="M79.1874 75.245L65.2508 83.2892C64.7294 83.5897 64.4087 84.1456 64.4087 84.7469V100.849C64.4087 101.45 64.7294 102.006 65.2501 102.307L79.1867 110.358C79.7078 110.659 80.3499 110.659 80.8713 110.358L94.8109 102.307C95.3319 102.006 95.6526 101.45 95.6526 100.849V84.7476C95.6526 84.1456 95.3319 83.5897 94.8105 83.2892L80.8706 75.245C80.6102 75.0944 80.3197 75.0195 80.0288 75.0195C79.7383 75.0195 79.4474 75.0944 79.1874 75.245Z" fill="url(#paint0_linear)"/>
            <g opacity="0.660004">
            <g opacity="0.660004">
            <path opacity="0.660004" d="M94.7402 83.2891L80.8622 75.2445C80.7233 75.1642 80.5747 75.1072 80.4221 75.0697L64.7356 101.904C64.8676 102.063 65.0268 102.201 65.2092 102.307L79.1701 110.358C79.5863 110.598 80.0679 110.643 80.511 110.5L95.1667 83.6632C95.0519 83.5166 94.9116 83.3879 94.7402 83.2891Z" fill="#4B4B4B"/>
            </g>
            </g>
            <path d="M79.9283 75.0224C79.6726 75.0383 79.4199 75.1126 79.1907 75.245L65.3838 83.2123L80.3827 110.537C80.5396 110.499 80.6928 110.442 80.8381 110.358L94.7449 102.307C95.2653 102.006 95.52 101.45 95.52 100.849V100.786L80.4756 75.0838C80.3247 75.0416 80.1691 75.0204 80.0139 75.0204C79.9854 75.0204 79.9569 75.0211 79.9283 75.0224Z" fill="url(#paint1_linear)"/>
            <defs>
            <linearGradient id="paint0_linear" x1="64.4084" y1="92.8014" x2="95.6527" y2="92.8014" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="0.00530134" stop-color="white"/>
            <stop offset="0.725388" stop-color="#AFB1B3"/>
            <stop offset="1" stop-color="#AFB1B3"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="64.1924" y1="92.7785" x2="96.4231" y2="92.7785" gradientUnits="userSpaceOnUse">
            <stop stop-color="#AFB1B3"/>
            <stop offset="0.274612" stop-color="#AFB1B3"/>
            <stop offset="0.994699" stop-color="white"/>
            <stop offset="1" stop-color="white"/>
            </linearGradient>
            </defs>
            </svg>
            {/* express */}
            <svg width="178" height="89" viewBox="0 0 178 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M59.3333 61.9336V27.7501H61.1875V33.1272C61.4064 32.8888 61.6087 32.6355 61.7927 32.3692C63.3413 29.1563 66.6076 27.1286 70.1735 27.1687C74.401 27.0426 77.8364 28.6075 79.8552 32.3692C81.1399 34.7062 81.8469 37.3166 81.917 39.9824C81.9872 42.6483 81.4186 45.2922 80.2587 47.6936C78.3778 51.9092 73.732 54.0051 68.7584 53.2353C67.2106 53.1037 65.7204 52.5865 64.4238 51.731C63.1272 50.8754 62.0656 49.7087 61.3358 48.3373V61.9321L59.3333 61.9336ZM61.1875 39.8423L61.6028 43.8562C62.3356 48.4248 65.0367 51.1245 69.2776 51.6318C71.2691 51.9592 73.3126 51.5859 75.0597 50.5753C76.8067 49.5648 78.1493 47.9797 78.8584 46.0901C80.5079 42.1592 80.3863 37.7092 78.5321 33.8704C77.7752 32.1765 76.4876 30.7751 74.8637 29.8778C73.2399 28.9805 71.3681 28.6361 69.5312 28.8968C67.8071 29.0222 66.1648 29.6815 64.8324 30.7831C63.5001 31.8846 62.544 33.3738 62.0968 35.0437C61.7019 36.624 61.3983 38.2256 61.1875 39.8408V39.8423ZM119.776 44.4881C119.495 46.8949 118.349 49.1177 116.552 50.743C114.755 52.3684 112.428 53.2857 110.005 53.3243C102.23 53.7159 98.5808 48.5524 98.0009 42.5939C97.5975 39.3581 98.1228 36.0743 99.5153 33.1257C100.485 31.1031 102.073 29.4414 104.049 28.3816C106.026 27.3218 108.289 26.9188 110.51 27.231C112.621 27.4105 114.623 28.2494 116.231 29.6292C117.84 31.0089 118.973 32.8595 119.472 34.9191C119.867 36.7953 120.158 38.6919 120.343 40.6003H99.9218C99.5435 46.0026 102.446 50.3458 106.561 51.393C111.686 52.6538 116.066 50.4333 117.657 45.5605C118.01 44.3101 118.653 44.1336 119.79 44.4881H119.776ZM99.9069 38.8707H118.173C118.058 33.1154 114.475 28.9324 109.614 28.8849C104.126 28.7959 100.146 32.8113 99.9069 38.8707ZM123.551 44.6142H125.342C125.407 45.9332 125.836 47.2085 126.58 48.2998C127.323 49.3911 128.354 50.2561 129.557 50.7997C131.069 51.4798 132.714 51.8103 134.371 51.7667C136.027 51.723 137.653 51.3063 139.126 50.5475C139.929 50.1859 140.602 49.5864 141.054 48.8301C141.505 48.0738 141.714 47.1971 141.651 46.3185C141.697 45.4712 141.466 44.6319 140.992 43.9279C140.518 43.2239 139.828 42.6936 139.025 42.4173C137.056 41.6846 134.961 41.2811 132.954 40.6373C130.866 40.0428 128.824 39.2961 126.844 38.4034C123.611 36.8252 123.41 30.6782 127.071 28.7321C128.946 27.6744 131.055 27.1028 133.207 27.0697C135.359 27.0365 137.486 27.5428 139.392 28.5422C141.756 29.8476 143.063 32.4835 142.674 35.1579H141.139C141.139 35.0837 141 35.0185 141 34.9428C140.81 30.0478 136.695 28.517 132.278 28.9472C130.943 29.0955 129.677 29.499 128.491 30.0953C127.777 30.4211 127.183 30.9605 126.79 31.639C126.396 32.3174 126.224 33.1013 126.295 33.8822C126.297 34.6637 126.54 35.4256 126.993 36.0631C127.445 36.7006 128.083 37.1824 128.82 37.4422C130.748 38.1498 132.795 38.6037 134.79 39.1585L139.611 40.4193C140.707 40.779 141.668 41.4627 142.367 42.3802C143.065 43.2977 143.469 44.4057 143.524 45.5576C143.91 48.146 142.59 50.6899 140.255 51.8691C136.039 54.2543 129.096 53.6239 126.003 50.6083C124.421 49.0167 123.538 46.8555 123.556 44.6127L123.551 44.6142ZM166.242 35.1594H164.562C164.562 34.9324 164.473 34.7144 164.448 34.5408C164.421 33.2822 163.963 32.071 163.149 31.1104C162.335 30.1498 161.216 29.4981 159.979 29.2646C157.645 28.5953 155.156 28.7152 152.898 29.6058C152.005 29.8614 151.218 30.3991 150.656 31.1387C150.094 31.8782 149.787 32.7799 149.78 33.7087C149.748 34.6207 150.032 35.5158 150.584 36.2426C151.135 36.9694 151.921 37.4833 152.809 37.6974L160.483 39.6672C161.313 39.8663 162.131 40.115 162.931 40.4119C165.378 41.3019 167.04 43.5743 167.114 46.1717C167.151 47.443 166.802 48.6957 166.113 49.7652C165.425 50.8348 164.429 51.6711 163.257 52.1643C161.476 52.9735 159.545 53.4016 157.589 53.4213C155.632 53.4409 153.694 53.0517 151.896 52.2785C150.418 51.6412 149.171 50.5664 148.322 49.1987C147.474 47.8311 147.064 46.2363 147.15 44.629H148.79C149.407 47.6031 151.45 50.0802 154.252 51.2521C157.054 52.4239 160.253 52.1361 162.802 50.4867C163.566 50.0891 164.201 49.4807 164.631 48.7336C165.06 47.9864 165.267 47.1319 165.226 46.271C165.264 45.4231 165.024 44.5859 164.543 43.8865C164.062 43.187 163.367 42.6634 162.561 42.3951C160.592 41.6623 158.497 41.2722 156.49 40.6151C154.39 40.0297 152.336 39.2915 150.343 38.4064C147.187 36.8534 146.935 30.7569 150.533 28.8122C152.431 27.7101 154.581 27.118 156.776 27.0935C158.97 27.0691 161.134 27.6132 163.055 28.6728C164.155 29.3288 165.039 30.2903 165.602 31.4401C166.164 32.59 166.381 33.8786 166.224 35.149L166.242 35.1594ZM56.2821 52.7072C55.6212 52.9572 54.8916 52.9565 54.2311 52.7054C53.5706 52.4542 53.0248 51.97 52.6969 51.344L46.1702 42.318L45.2239 41.0571L37.65 51.3574C37.3413 51.9564 36.8251 52.4226 36.1978 52.6688C35.5705 52.915 34.875 52.9245 34.2413 52.6954L43.9986 39.6049L34.9206 27.7768C36.2675 27.2903 37.7686 27.8184 38.5177 29.0377L45.2817 38.175L52.0858 29.0733C52.3968 28.4845 52.9133 28.0306 53.5371 27.7979C54.161 27.5651 54.8486 27.5698 55.4692 27.811L51.9463 32.4849L47.1744 38.6957C47.042 38.8139 46.936 38.9588 46.8635 39.1209C46.7909 39.283 46.7534 39.4585 46.7534 39.6361C46.7534 39.8137 46.7909 39.9892 46.8635 40.1513C46.936 40.3133 47.042 40.4583 47.1744 40.5765L56.2628 52.7072H56.2821ZM97.7116 27.6508V29.4308C96.4349 29.347 95.1548 29.5319 93.9539 29.9735C92.753 30.4151 91.6581 31.1036 90.7398 31.9945C89.8214 32.8854 89.1001 33.959 88.6224 35.146C88.1446 36.3329 87.9211 37.6068 87.9661 38.8855C87.9661 43.0428 87.9661 47.2001 87.9661 51.3574V52.771H86.1609V27.762H87.9409V32.8869C90.1244 29.1489 93.4945 27.762 97.7235 27.6611L97.7116 27.6508ZM10.8773 39.4418L11.6723 35.5154C13.8558 27.7516 22.7558 24.5209 28.879 29.3299C32.4642 32.1453 33.3587 36.1339 33.1836 40.6284H12.9851C12.6588 48.6562 18.4512 53.5038 25.8604 51.0296C28.302 50.1396 30.1398 48.1104 30.745 45.5887C31.1366 44.3279 31.7834 44.1113 32.9671 44.4762C32.7697 46.0131 32.2263 47.4853 31.378 48.782C30.5296 50.0787 29.3983 51.1661 28.0691 51.9626C25.8731 53.1636 23.3536 53.6394 20.8709 53.3221C18.3881 53.0048 16.0693 51.9106 14.2459 50.1959C12.4422 48.1682 11.3534 45.605 11.1413 42.8979C11.1413 42.4529 10.993 42.0376 10.8891 41.6371C10.8793 40.8885 10.8743 40.1567 10.8743 39.4418H10.8773ZM13.0103 38.8989H31.2761C31.1619 33.0798 27.4891 28.9516 22.5912 28.9131C17.1384 28.8389 13.2373 32.8765 12.997 38.8737L13.0103 38.8989Z" fill="white"/>
            </svg>
            {/* react */}
            <svg width="146" height="103" viewBox="0 0 146 103" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M115.548 51.3012C115.548 45.6779 108.49 40.3489 97.6686 37.0441C100.166 26.0399 99.0559 17.285 94.1656 14.4821C93.0384 13.8246 91.7204 13.5132 90.281 13.5132V17.3715C91.0787 17.3715 91.7204 17.5273 92.258 17.8214C94.6165 19.171 95.6396 24.3097 94.8419 30.9192C94.6512 32.5456 94.339 34.2585 93.9575 36.006C90.5585 35.1755 86.8474 34.5353 82.9455 34.1201C80.6043 30.9192 78.1765 28.0124 75.7313 25.469C81.3847 20.2264 86.6913 17.3542 90.2984 17.3542V13.4958C85.5294 13.4958 79.2864 16.8871 72.974 22.7698C66.6616 16.9217 60.4186 13.5651 55.6496 13.5651V17.4234C59.2393 17.4234 64.5632 20.2783 70.2167 25.4863C67.7888 28.0297 65.361 30.9192 63.0545 34.1201C59.1353 34.5353 55.4242 35.1755 52.0252 36.0233C51.6263 34.2931 51.3315 32.6148 51.1234 31.0057C50.3083 24.3962 51.3142 19.2575 53.6553 17.8906C54.1756 17.5792 54.8519 17.4408 55.6496 17.4408V13.5824C54.1929 13.5824 52.8749 13.8938 51.7304 14.5513C46.8573 17.3542 45.7648 26.0919 48.2794 37.0614C37.4928 40.3835 30.4694 45.6952 30.4694 51.3012C30.4694 56.9244 37.5275 62.2535 48.3487 65.5582C45.8515 76.5624 46.9614 85.3173 51.8518 88.1202C52.979 88.7777 54.2969 89.0892 55.7536 89.0892C60.5226 89.0892 66.7656 85.6979 73.078 79.8152C79.3904 85.6633 85.6334 89.02 90.4024 89.02C91.8591 89.02 93.1771 88.7085 94.3217 88.051C99.1947 85.2481 100.287 76.5105 97.7727 65.5409C108.525 62.2361 115.548 56.9071 115.548 51.3012ZM92.969 39.7606C92.3274 41.9926 91.5296 44.2938 90.6279 46.595C89.9169 45.2108 89.1712 43.8266 88.3561 42.4424C87.5584 41.0583 86.7086 39.7087 85.8589 38.3937C88.3214 38.7571 90.6972 39.2069 92.969 39.7606ZM85.0265 58.1874C83.6738 60.5232 82.2865 62.7379 80.8471 64.7969C78.2632 65.0218 75.6446 65.1429 73.0087 65.1429C70.3901 65.1429 67.7715 65.0218 65.2049 64.8142C63.7655 62.7552 62.3608 60.5578 61.0082 58.2393C59.6902 55.9728 58.4936 53.6716 57.4011 51.3531C58.4763 49.0346 59.6902 46.7161 60.9909 44.4495C62.3435 42.1137 63.7308 39.899 65.1702 37.84C67.7541 37.6151 70.3727 37.494 73.0087 37.494C75.6273 37.494 78.2459 37.6151 80.8124 37.8227C82.2518 39.8817 83.6565 42.0791 85.0091 44.3976C86.3271 46.6642 87.5237 48.9654 88.6162 51.2839C87.5237 53.6024 86.3271 55.9208 85.0265 58.1874ZM90.6279 55.9381C91.5643 58.2566 92.362 60.5751 93.021 62.8244C90.7493 63.3781 88.3561 63.8453 85.8762 64.2086C86.726 62.8763 87.5757 61.5095 88.3734 60.108C89.1712 58.7238 89.9169 57.3223 90.6279 55.9381ZM73.0434 74.3996C71.4306 72.7386 69.8178 70.8873 68.2224 68.8629C69.7831 68.9321 71.3785 68.984 72.9913 68.984C74.6214 68.984 76.2342 68.9494 77.8123 68.8629C76.2516 70.8873 74.6388 72.7386 73.0434 74.3996ZM60.1411 64.2086C57.6786 63.8453 55.3028 63.3954 53.031 62.8417C53.6726 60.6097 54.4704 58.3086 55.3721 56.0074C56.0831 57.3915 56.8288 58.7757 57.6439 60.1599C58.459 61.5441 59.2914 62.8936 60.1411 64.2086ZM72.9566 28.2027C74.5694 29.8637 76.1822 31.7151 77.7776 33.7394C76.2169 33.6702 74.6215 33.6183 73.0087 33.6183C71.3785 33.6183 69.7658 33.6529 68.1877 33.7394C69.7484 31.7151 71.3612 29.8637 72.9566 28.2027ZM60.1238 38.3937C59.274 39.726 58.4243 41.0929 57.6266 42.4943C56.8288 43.8785 56.0831 45.2627 55.3721 46.6469C54.4357 44.3284 53.638 42.0099 52.979 39.7606C55.2507 39.2242 57.6439 38.7571 60.1238 38.3937ZM44.4295 60.0561C38.2905 57.4434 34.3193 54.0176 34.3193 51.3012C34.3193 48.5847 38.2905 45.1416 44.4295 42.5462C45.9209 41.9061 47.551 41.3351 49.2332 40.7987C50.2216 44.19 51.5223 47.7196 53.135 51.3358C51.5396 54.9346 50.2563 58.447 49.2852 61.8209C47.5684 61.2845 45.9382 60.6963 44.4295 60.0561ZM53.7593 84.7809C51.4009 83.4314 50.3777 78.2926 51.1754 71.6832C51.3662 70.0567 51.6783 68.3438 52.0599 66.5963C55.4588 67.4268 59.17 68.067 63.0719 68.4822C65.413 71.6832 67.8408 74.5899 70.286 77.1333C64.6326 82.3759 59.326 85.2481 55.719 85.2481C54.9386 85.2308 54.2796 85.0751 53.7593 84.7809ZM94.8939 71.5966C95.709 78.2061 94.7032 83.3448 92.362 84.7117C91.8418 85.0232 91.1655 85.1616 90.3677 85.1616C86.778 85.1616 81.4541 82.3067 75.8007 77.0987C78.2285 74.5553 80.6564 71.6659 82.9628 68.4649C86.8821 68.0497 90.5932 67.4095 93.9922 66.5617C94.391 68.3092 94.7032 69.9875 94.8939 71.5966ZM101.57 60.0561C100.079 60.6963 98.449 61.2672 96.7668 61.8036C95.7784 58.4124 94.4777 54.8827 92.8649 51.2666C94.4604 47.6677 95.7437 44.1553 96.7148 40.7814C98.4316 41.3178 100.062 41.9061 101.588 42.5462C107.727 45.1589 111.698 48.5847 111.698 51.3012C111.681 54.0176 107.709 57.4607 101.57 60.0561Z" fill="white"/>
            <path d="M72.9913 59.208C77.3683 59.208 80.9165 55.6679 80.9165 51.3009C80.9165 46.9339 77.3683 43.3938 72.9913 43.3938C68.6144 43.3938 65.0662 46.9339 65.0662 51.3009C65.0662 55.6679 68.6144 59.208 72.9913 59.208Z" fill="white"/>
            </svg>
            {/* p5 */}
            <svg width="103" height="111" viewBox="0 0 103 111" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31.8065 62.3188C31.0748 61.327 30.1508 60.5246 29.0316 59.9141C27.913 59.3047 26.602 59 25.097 59C23.6774 59 22.4075 59.316 21.2899 59.9487C20.1713 60.5814 19.2137 61.3951 18.4193 62.3869C17.6223 63.381 17.0208 64.5102 16.6123 65.7749C16.2026 67.0397 16 68.305 16 69.5687C16 70.8334 16.2026 72.0868 16.6123 73.3278C17.0208 74.571 17.6223 75.6882 18.4193 76.6823C19.2143 77.6753 20.1713 78.4776 21.2899 79.0859C22.4075 79.6964 23.6774 80 25.097 80C26.602 80 27.913 79.6851 29.0316 79.0524C30.1502 78.4198 31.0748 77.6072 31.8065 76.6131C32.5372 75.6201 33.0857 74.491 33.452 73.2262C33.8173 71.9614 34 70.6972 34 69.4325C34 68.1677 33.8173 66.9143 33.452 65.6722C33.0857 64.4307 32.5372 63.3129 31.8065 62.3188Z" fill="white"/>
            <path d="M0 0V111H103V0H0ZM40.3519 77.0487C39.6446 79.1989 38.6354 81.0714 37.3271 82.6667C36.0187 84.262 34.4316 85.5355 32.5648 86.4813C30.6979 87.4289 28.5836 87.903 26.2251 87.903C24.0358 87.903 22.0304 87.4173 20.2067 86.4471C18.3819 85.4757 16.9775 84.1586 15.991 82.4924H15.8627V103.579H8.13917V53.6397H15.5403V58.2863H15.7339C16.1193 57.6397 16.6234 56.9803 17.246 56.3099C17.8687 55.6394 18.6304 55.0387 19.5317 54.506C20.432 53.9761 21.4514 53.5357 22.5884 53.1883C23.7242 52.8421 25.0019 52.6678 26.4181 52.6678C28.6062 52.6678 30.6224 53.1192 32.4683 54.0203C34.313 54.9237 35.9006 56.1606 37.2317 57.7321C38.5605 59.3048 39.5902 61.1546 40.3206 63.2809C41.0495 65.4084 41.4144 67.6974 41.4144 70.148C41.4144 72.5985 41.0603 74.898 40.3519 77.0487ZM73.5436 78.1584C72.6633 80.3086 71.4724 82.1241 69.9711 83.6026C68.4686 85.0835 66.7091 86.217 64.6929 87.0025C62.6767 87.7879 60.5306 88.1813 58.2572 88.1813C54.4372 88.1813 51.2183 87.2203 48.6021 85.3026C46.8016 83.9832 45.3444 82.3204 44.2145 80.3335L49.8032 74.6894L49.8895 74.6551C50.5326 76.5979 51.6049 78.1578 53.1073 79.3372C54.6087 80.516 56.3903 81.1062 58.4497 81.1062C59.6076 81.1062 60.702 80.8988 61.7316 80.4811C62.7624 80.0657 63.6627 79.4656 64.4357 78.6778C65.2077 77.8923 65.819 76.9087 66.2697 75.7311C66.7204 74.5523 66.9457 73.2225 66.9457 71.7427C66.9457 69.8465 66.6444 68.2738 66.0444 67.0259C65.4433 65.7779 64.6611 64.7711 63.6955 64.0089C62.73 63.2466 61.6454 62.7139 60.4454 62.4135C59.2437 62.1126 58.0206 61.9633 56.7769 61.9633C55.9176 61.9633 55.007 62.0324 54.0415 62.1707C53.076 62.3101 52.1315 62.5065 51.2092 62.761C50.2857 63.0154 49.3854 63.3047 48.5062 63.6266C47.6258 63.9514 46.8425 64.2982 46.1574 64.6671L46.9293 37.8258H72.8665V45.3156H54.2658L53.8162 55.9288C54.545 55.6975 55.4135 55.536 56.4222 55.4419C57.4308 55.3513 58.3424 55.3036 59.1575 55.3036C61.3888 55.3036 63.4589 55.6511 65.3683 56.3442C67.2773 57.0372 68.9409 58.0441 70.356 59.3611C71.7733 60.6799 72.8768 62.2991 73.6703 64.2163C74.4644 66.1364 74.8612 68.3435 74.8612 70.8405C74.8617 73.5693 74.4218 76.0082 73.5436 78.1584ZM93.6991 50.5885L90.8727 52.7973L87.9352 48.608L85.0715 52.6899L82.3184 50.4299L85.106 46.3166L80.582 44.558L81.6499 41.017L86.1885 42.5938V37.5347H89.8295V42.6013L94.3347 41.1361L95.4015 44.6742L90.9093 46.3259L93.6991 50.5885Z" fill="white"/>
            </svg>

            </div>
        </div>
    )
}

export default Skill