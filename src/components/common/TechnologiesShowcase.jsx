import UnicornLogo from '../../assets/UnicornLogo.png';
import { useState } from 'react';
import Angular from '../../assets/angular.png';
import React from '../../assets/react.png';
import TypeScript from '../../assets/typescript.png';
import Vue from '../../assets/vuejs.png';
import NextJs from '../../assets/nextjs.png';
import Bootstrap from '../../assets/bootstrap.png';
import Html from '../../assets/html.png';
import Css from '../../assets/css.png';
import NodeJs from '../../assets/NodeJs.png';
import CodeIgnitor from '../../assets/codeignitar.png';
import ExpressJs from '../../assets/expreejs.png';
import NestJs from '../../assets/nestjs.png';
import Laravel from '../../assets/laravel.png';
import Php from '../../assets/php.png';
import Python from '../../assets/python.png';
import Java from '../../assets/java.png';
import Net from '../../assets/net.png';
import ReactNative from '../../assets/reactnative.png';
import Flutter from '../../assets/flutter.png';
import Android from '../../assets/android.png';
import Ios from '../../assets/ios.png';
import WordPress from '../../assets/wordpress.png';
import MongoDb from '../../assets/mongodb.png';
import MySql from '../../assets/mysql.png';
import PostgreSql from '../../assets/postgreSql.png';
import GoogleCloud from '../../assets/googlecloud.png';
import Aws from '../../assets/aws.png';
import Kubernetes from '../../assets/kubernetes.png';
import Github from '../../assets/github.png';
import Ansible from '../../assets/ansible.png';
import Docker from '../../assets/docker.png';
import ClickUp from '../../assets/clickup.png';
import Wrike from '../../assets/wrike.png';
import Trello from '../../assets/trello.png';
import PhotoShop from '../../assets/photoshop.png';
import Illustrator from '../../assets/illustrator.png';
import Premier from '../../assets/premier.png';
import AfterEffect from '../../assets/aftereffect.png';
import Figma from '../../assets/figmaa.png';
import Adobe from '../../assets/adobe.png';

const TechnologiesShowcase = () => {
    const [activeCategory, setActiveCategory] = useState('Front End');
    
    const categories = [
        { name: 'Front End', color: 'bg-[#4587C7] text-white' },
        { name: 'Back End', color: 'bg-gray-200 text-black' },
        { name: 'Mobile', color: 'bg-gray-200 text-black' },
        { name: 'CMS', color: 'bg-gray-200 text-black' },
        { name: 'Data Base', color: 'bg-gray-200 text-black' },
        { name: 'DevOps & Cloud', color: 'bg-gray-200 text-black' },
        { name: 'Project Management', color: 'bg-gray-200 text-black' },
        { name: 'Graphic Design & UI/UX', color: 'bg-gray-200 text-black' }
    ];
    
    const technologies = {
        'Front End': [
            { name: 'Angular', icon: Angular  },
            { name: 'ReactJS', icon: React },
            { name: 'TypeScript', icon: TypeScript },
            { name: 'Vue.Js', icon: Vue },
            { name: 'Next.Js', icon: NextJs },
            { name: 'Bootstrap', icon: Bootstrap },
            { name: 'HTML', icon: Html },
            { name: 'CSS', icon: Css}
        ],
        'Back End': [
            { name: 'Node.js', icon: NodeJs },
            { name: 'Codeigniter', icon: CodeIgnitor},
            { name: 'ExpressJS', icon: ExpressJs },
            { name: 'NestJs', icon: NestJs },
            { name: 'Laravel', icon: Laravel },
            { name: 'Php', icon: Php },
            { name: 'Python', icon: Python },
            {name :'Java ' , icon : Java},
            { name: '.NET', icon: Net}
        ],
        'Mobile': [
            { name: 'React Native', icon: ReactNative },
            { name: 'Flutter', icon: Flutter},
            { name: 'iOS', icon: Ios },
            { name: 'Android', icon: Android },
           
        ],
        'CMS': [
            { name: 'WordPress', icon: WordPress},
           
        ],
        'Data Base': [
            { name: 'MongoDB', icon: MongoDb },
            { name: 'MySQL', icon: MySql },
            { name: 'PostgreSQL', icon: PostgreSql },
           
        ],
        'DevOps & Cloud': [
            { name: 'Google Cloud', icon: GoogleCloud },
             { name: 'AWS', icon: Aws },
              { name: 'Docker', icon: Docker },
            {name:'Ansible' , icon : Ansible},
            { name: 'Kubernetes', icon: Kubernetes },
            {name:'Github' , icon: Github},
          
        ],
        'Project Management': [
            { name: 'ClickUp', icon: ClickUp },
            { name: 'Wrike', icon: Wrike },
            { name: 'Trello', icon: Trello },
           
        ],
        'Graphic Design & UI/UX': [
            { name: 'PhotoShop', icon:PhotoShop },
            { name: 'Illustrator', icon: Illustrator },
            { name: 'Premier', icon: Premier },
            { name: 'AfterEffect', icon: AfterEffect },
            { name: 'Figma', icon: Figma },
            { name: 'Adobe', icon: Adobe },
        ]
    };
    
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-6 space-y-8">
            {/* Category Buttons - Responsive Layout */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4">
                {categories.map((category) => (
                    <button
                        key={category.name}
                        onClick={() => setActiveCategory(category.name)}
                        className={`
                            px-3 py-2 sm:px-4 sm:py-2.5 lg:px-5 lg:py-3 
                            rounded-full text-xs sm:text-sm lg:text-base font-medium 
                            transition-all duration-300 whitespace-nowrap
                            ${activeCategory === category.name 
                                ? 'bg-[#4587C7] text-white transform scale-105 shadow-lg' 
                                : 'bg-gray-200 text-black hover:bg-gray-300 hover:shadow-md'
                            }
                        `}
                    >
                        {category.name}
                    </button>
                ))}
            </div>
            
            {/* Technology Icons - Improved Responsive Grid */}
            <div className="w-full">
                <div 
                    className={`
                        grid gap-4 sm:gap-6 lg:gap-8 min-h-[200px] sm:min-h-[240px] lg:min-h-[280px]
                        place-items-center content-center
                        ${technologies[activeCategory]?.length === 1 ? 'grid-cols-1' : ''}
                        ${technologies[activeCategory]?.length === 2 ? 'grid-cols-2' : ''}
                        ${technologies[activeCategory]?.length === 3 ? 'grid-cols-3' : ''}
                        ${technologies[activeCategory]?.length >= 4 ? 
                            'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8' 
                            : ''
                        }
                    `}
                >
                    {technologies[activeCategory]?.map((tech, index) => (
                        <div 
                            key={`${activeCategory}-${tech.name}-${index}`}
                            className="flex flex-col items-center justify-center space-y-2 sm:space-y-3 
                                     p-2 sm:p-3 rounded-lg  transition-all duration-300 
                                     cursor-pointer group min-w-[80px] sm:min-w-[100px] lg:min-w-[120px]"
                        >
                            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 
                                          flex items-center justify-center ">
                                <img 
                                    src={tech.icon} 
                                    alt={tech.name} 
                                    className="
                                             object-contain transition-transform duration-300"
                                />
                            </div>
                            <span className="text-xs sm:text-sm lg:text-base font-medium 
                                           text-gray-700 text-center leading-tight max-w-full 
                                           px-1 group-hover:text-[#4587C7] transition-colors duration-300">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechnologiesShowcase;