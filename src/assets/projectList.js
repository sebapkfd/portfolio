import shopping from '../assets/shopping.png';
import battleship from '../assets/battleship.png';
import weather from '../assets/weather.png';
import javascript from '../assets/js-logo.png';
import react from '../assets/react-logo.png';
import html from '../assets/html-logo.png';
import css from '../assets/css-logo.png';
import git from '../assets/git-logo.png';
import npm from '../assets/npm-logo.png';
import webpack from '../assets/webpack-logo.png';
import jest from '../assets/jest-logo.png';
import card from '../assets/card.png';
import todo from '../assets/todo.png';
import resume from '../assets/resume.png';

const projectList = [
    {
        name: 'Shopping Cart',
        repo: 'https://github.com/sebapkfd/shopping-cart',
        link: 'https://sebapkfd.github.io/shopping-cart/',
        id: '1',
        showOnHome: true,
        techUsed: [{javascript}, {react}, {css}, {html}, {git}, {npm}],
        img: shopping,
    },
    {
        name: 'Battleship',
        repo: 'https://github.com/sebapkfd/battleship',
        link: 'https://sebapkfd.github.io/battleship/',
        id: '2',
        showOnHome: true,
        techUsed: [{javascript}, {react}, {css}, {html}, {git}, {npm}, {jest}],
        img: battleship
    },
    {
        name: 'Weather App',
        repo: 'https://github.com/sebapkfd/Weather-app',
        link: 'https://sebapkfd.github.io/Weather-app/',
        id: '3',
        showOnHome: true,
        techUsed: [{javascript}, {react}, {css}, {html}, {git}, {npm}],
        img: weather
    },
    {
        name: 'CV project',
        repo: 'https://github.com/sebapkfd/cv-project',
        link: 'https://sebapkfd.github.io/cv-project/',
        id: '4',
        showOnHome: true,
        techUsed: [{javascript}, {react}, {css}, {html}, {git}, {npm}],
        img: resume
    },
    {
        name: 'Todo list',
        repo: 'https://github.com/sebapkfd/todolist',
        link: 'https://sebapkfd.github.io/todolist/',
        id: '5',
        showOnHome: true,
        techUsed: [{javascript}, {webpack}, {css}, {html}, {git}],
        img: todo
    },
    {
        name: 'Memory Card Game',
        repo: 'https://github.com/sebapkfd/memory-card',
        link: 'https://sebapkfd.github.io/memory-card/',
        id: '6',
        showOnHome: true,
        techUsed: [{javascript}, {react}, {css}, {html}, {git}, {npm}],
        img: card
    }
]

export default projectList;