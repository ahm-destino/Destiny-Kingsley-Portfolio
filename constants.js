
import React from 'react';
import { Brain, Cpu, Globe, Database, Code, Shield, MessageSquare, Eye, Smartphone, Zap } from 'lucide-react';

export const SKILLS = [
    {
        name: 'AI/ML Development',
        proficiency: 95,
        description: 'Expert in predictive models tailored for emerging markets and high-volatility environments.',
        icon: 'Brain'
    },
    {
        name: 'Computer Vision',
        proficiency: 90,
        description: 'Specialized in object detection and spatial analysis for agriculture and security.',
        icon: 'Eye'
    },
    {
        name: 'NLP',
        proficiency: 88,
        description: 'Building multilingual support for Swahili, Yoruba, and other major African languages.',
        icon: 'MessageSquare'
    },
    {
        name: 'Full Stack Development',
        proficiency: 92,
        description: 'Crafting responsive, low-latency interfaces with React and scalable Flask/FastAPI backends.',
        icon: 'Code'
    }
];

export const PROJECTS = [
    {
        id: 'microfinance-dashboard',
        title: 'Unified Microfinance Dashboard',
        category: 'FinTech',
        problem: 'Inefficient in-person visits for microfinance in rural Africa; lack of unified digital access.',
        solution: 'Web platform enabling online transactions, loan applications, and account management with AI fraud detection.',
        tech: ['React', 'Flask', 'PostgreSQL', 'Scikit-learn'],
        impact: ['Reduced office visits by 60%', 'Boosted user engagement by 40%', 'Streamlined loan approvals'],
        image: '/projects/micro-finance.mp4',
        video: '/projects/micro-finance.mp4'
    },
    {
        id: 'ai-trading-assistant',
        title: 'AI Trading Assistant',
        category: 'Finance',
        problem: 'Time-constrained traders in volatile African markets miss crucial opportunities.',
        solution: 'AI-powered assistant using LSTM models to predict trends with 78% accuracy and automated risk management.',
        tech: ['Python', 'TensorFlow', 'React', 'FastAPI'],
        impact: ['78% Prediction Accuracy', 'Saved users 80% of analysis time', 'Consistent 12% MoM returns'],
        image: '/projects/trading-assistant.mp4',
        video: '/projects/trading-assistant.mp4'
    },
    {
        id: 'nlp-customer-agent',
        title: 'Kohidojo NLP Agent',
        category: 'Customer Service',
        problem: 'Costly human support for growing fintech; need for 24/7 multilingual assistance.',
        solution: 'Multilingual chatbot (English/Swahili/Yoruba) with real-time sentiment analysis and automated ticket routing.',
        tech: ['HuggingFace', 'Transformers', 'React', 'Flask'],
        impact: ['Cut support costs by 50%', '35% higher CSAT score', 'Zero downtime 24/7 support'],
        image: '/projects/kohi-dojo.mp4',
        video: '/projects/kohi-dojo.mp4'
    },
    {
        id: 'veosense',
        title: 'Veosense: Blind Assistant',
        category: 'Accessibility',
        problem: 'Limited accessibility tools for visually impaired in Africa; navigation and object recognition challenges.',
        solution: 'Mobile AI app using CV and TTS to describe surroundings, read local currency, and guide users.',
        tech: ['OpenCV', 'TensorFlow Lite', 'React Native', 'AWS Polly'],
        impact: ['Guided 500+ users safely', '70% reduction in navigation errors', 'Localized for regional accents'],
        image: '/projects/veosense.mp4',
        video: '/projects/veosense.mp4'
    },
    {
        id: 'abia-ticketing',
        title: 'Abia State Bus Ticketing',
        category: 'GovTech',
        problem: 'Inefficient public transport; long queues and cash-based leakages.',
        solution: 'Digital ticketing platform with AI-driven route optimization and eligibility verification.',
        tech: ['React', 'Node.js', 'MongoDB', 'Google Maps API'],
        impact: ['Wait times halved', '30% increase in ridership', 'Enhanced revenue transparency'],
        image: '/projects/abia-transport.mp4',
        video: '/projects/abia-transport.mp4'
    }
];

export const TECH_STACK = [
    { name: 'Python', category: 'ML', icon: 'https://cdn.simpleicons.org/python/3776ab' },
    { name: 'TensorFlow', category: 'ML', icon: 'https://cdn.simpleicons.org/tensorflow/ff6f00' },
    { name: 'PyTorch', category: 'ML', icon: 'https://cdn.simpleicons.org/pytorch/ee4c2c' },
    { name: 'React', category: 'Web', icon: 'https://cdn.simpleicons.org/react/61dafb' },
    { name: 'Flask', category: 'Web', icon: 'https://cdn.simpleicons.org/flask/ffffff' },
    { name: 'OpenCV', category: 'ML', icon: 'https://cdn.simpleicons.org/opencv/5c3ee8' },
    { name: 'Docker', category: 'Cloud', icon: 'https://cdn.simpleicons.org/docker/2496ed' },
    { name: 'AWS', category: 'Cloud', icon: 'https://cdn.simpleicons.org/amazonwebservices/232f3e' },
    { name: 'PostgreSQL', category: 'DB', icon: 'https://cdn.simpleicons.org/postgresql/4169e1' },
    { name: 'MongoDB', category: 'DB', icon: 'https://cdn.simpleicons.org/mongodb/47a248' }
];
