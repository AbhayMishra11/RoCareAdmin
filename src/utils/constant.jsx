import appStore from '../assets/appStore.png'
import playstore from '../assets/googleplay.png'
import x from '../assets/X.png'
import facebook from '../assets/Facebook.png'
import insta from '../assets/Instagram.png'
import linkedin from '../assets/Linkedin.png'
import video1 from '../assets/v1.png'
import video2 from '../assets/v2.png'
import video3 from '../assets/v3.png'
import video4 from '../assets/v4.png'
import { LuMapPin, LuLayoutDashboard } from "react-icons/lu";
import { GoPeople } from "react-icons/go";
import { GrUserWorker } from "react-icons/gr";
import { FaHandshakeSimple, FaHandsHoldingCircle, FaGears } from "react-icons/fa6";


export const footerItems = [
    {
        heading: "Company",
        items: [
            { id: 1, name: "About Us", path: "/about-us" },
            { id: 2, name: "Terms & Conditions", path: "/terms-conditions" },
            { id: 3, name: "Privacy Policy", path: "/privacy-policy" },
            { id: 4, name: "Careers", path: "/careers" }
        ]
    },
    {
        heading: "For Customers",
        items: [{ id: 1, name: "Contact Us", path: "/contact-us" }]
    },
    {
        heading: "For Partners",
        items: [{ id: 1, name: "Register as a professional", path: "/register-professional" }]
    },
    {
        heading: "Social Links",
        socialIcons: [
            { id: 1, icon: x, link: "https://twitter.com" },
            { id: 2, icon: facebook, link: "https://facebook.com" },
            { id: 3, icon: insta, link: "https://instagram.com" },
            { id: 4, icon: linkedin, link: "https://linkedin.com" },
        ],
        appLinks: [
            { id: 1, img: playstore, link: "https://www.apple.com/app-store/" },
            { id: 2, img: appStore, link: "https://play.google.com/store" }
        ]
    }
];
    

export const recommendedVideoItems = [
    {
        id: 1,
        img: video4,
        title: 'How to make payment for your service and purchase?',
    },
    {
        id: 2,
        img: video1,
        title: 'Why you need to buy AMC for your RO?',
    },
    {
        id: 3,
        img: video2,
        title: 'How to book service for your RO?',
    },
    {
        id: 4,
        img: video3,
        title: 'How to purchase AMC for your RO?',
    },
    {
        id: 5,
        img: video4,
        title: 'How to make payment for your service and purchase?',
    },
]

export const sidebarItems = [
    {
        groupName: '',
        groupItems: [
            {
                id: 1,
                name: 'Dashboard',
                icon: <LuLayoutDashboard />,
                path: '/dashboard'
            },
            {
                id: 2,
                name: 'City',
                icon: <LuMapPin />,
                path: '/city'
            },
        ],

    },
    {
        groupName: 'Services & Products',
        groupItems: [
            {
                id: 1,
                name: 'Services',
                icon: <FaGears />,
                path: '/services'
            },
            {
                id: 2,
                name: 'Products',
                icon: <FaHandsHoldingCircle />,
                path:'/product',
            },
        ],

    },
    {
        groupName: 'Users',
        groupItems: [
            {
                id: 1,
                name: 'Customers',
                icon: <GoPeople />,
                path:'/customers',
            },
            {
                id: 2,
                name: 'Technician',
                icon: <GrUserWorker />,
                path:'/serviceEngineer',
            },
            {
                id: 3,
                name: 'Partner',
                icon: <FaHandshakeSimple />,
                path:'/partner',
            },
        ],

    },
    {
        groupName: 'Orders',
        groupItems: [
            {
                id: 1,
                name: 'Pending Orders',
                icon: <GoPeople />,
                path:'/pending-orders',
            },
            {
                id: 2,
                name: 'Complete Orders',
                icon: <GrUserWorker />,
                path:'/CompleteOrders',
            },
            {
                id: 3,
                name: 'Cancelled Orders',
                icon: <FaHandshakeSimple />,                
                path:'/CancelledOrder',
            },
            {
                id: 1,
                name: 'Offers',
                icon: <GoPeople />,
                path:'/Offers',
            },
            {
                id: 2,
                name: 'Banners',
                icon: <GrUserWorker />,
                path:'/Banners',
            },
            {
                id: 3,
                name: 'Testimonial',
                icon: <FaHandshakeSimple />,                
                path:'/Testimonial',
            },
            {
                id: 3,
                name: 'Inventory Management ',
                icon: <FaHandshakeSimple />,                
                path:'/Inventory Management',
            },
            {
                id: 3,
                name: 'Payment Gateway ',
                icon: <FaHandshakeSimple />,                
                path:'/Payment Gateway',
            },
        ],

    },
    {
        groupName: 'Technicians Activity',
        groupItems: [
            {
                id: 1,
                name: 'Pending Services',
                icon: <GoPeople />,
                path:'/pendingServices',

            },
            {
                id: 2,
                name: 'Technicians Activity',
                icon: <GrUserWorker />,
                path:'/technicianActivity',

            },
            {
                id: 3,
                name: 'Technicians Monitor',
                icon: <FaHandshakeSimple />,
                path:'/technicianMonitoring',

            },
        ],

    },
    {
        groupName: 'Partners Activity',
        groupItems: [
            {
                id: 1,
                name: 'Service List',
                icon: <GoPeople />,                
                path:'/service-list',
            },
            {
                id: 2,
                name: 'Existing Client List',
                icon: <GrUserWorker />,                
                path:'/client-list',
            },
            {
                id: 3,
                name: 'Partner Payout List',
                icon: <FaHandshakeSimple />,
                path:'/payout-list',

            },
        ],

    },

]