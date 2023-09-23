const listOfEvents = [
    {
        title: "Meta, Front-End Developer Professional Certificate",
        location: "Sydney, Australia",
        description:
            "Prepare for a career in Front-end Development",
        buttonText: "View Certificates",
        date: "Jun 2023 - present",
        icon: "cpt",
        refLink: '/'
    },

    {
        title: "Bio Page",
        location: "Sydney, Australia",
        description:
            "Built bio page for myself, through the use of HTML, CSS, JavaScript, React.js, and p5.js, to showcase my projects, as well as my academic/traing certificates.",
        buttonText: "Go to my bio page",
        date: "September 2023",
        icon: "project",
        refLink: "https://achillesreaper.github.io/bio/"
    },
    

    {
        title: "UTS, Master of Information Technology ",
        location: "Sydney, Australia",
        description:
            "major in Software Development",
        buttonText: "View Certificates",
        date: "1 Aug 2023",
        icon: "school",
        refLink: '/'
    },

    {
        title: "University of Michigam, Python for Everybody ",
        location: "Sydney, Australia",
        description:
            "This Specialization introduces fundamental programming concepts including data structures, networked application program interfaces, and databases, using the Python programming language.",
        buttonText: "View Certificate",
        date: "29 Jun 2023",
        icon: "cpt",
        refLink: '/'
    },


    {
        title: "Lixi Limited",
        location: "Sydney, Australia",
        description:
            "A internship role responsible for a project reviewing the loan serviceability calculation process, defining a generic serviceability calculation, and accordingly build a calculator which can be integrated to LIXI’s current system.",
        buttonText: "View Company Website",
        date: "Feburary 2023 - May 2023",
        icon: "work",
        refLink: 'https://lixi.org.au/'
    },


    {
        title: "UTS Environment",
        location: "Sydney, Australia",
        description:
            "This is a UTS project. Visualizing multiple types of data collected by FEIT UTS with original design on interaction and presentation. Technologies involved Processing, Processing Sounds and ControlP5, API, JSON, Python, GitHub.",
        buttonText: "View Project Demo",
        date: "October 2022",
        icon: "project",
        refLink: 'https://youtu.be/wl4TmeNfV6s'
    },

    {
        title: "Better Health",
        location: "Sydney, Australia",
        description:
            "A full stack project for a local business with the use of Java, MySQL, JBDC, javax, batch scripting to create a simple bookkeeping system in local device.",
        buttonText: "View Project Demo",
        date: "August 2022",
        icon: "project",
        refLink: 'https://www.youtube.com/watch?v=S9te6TwZNVo'
    },


    {
        title: "Bubble Pop",
        location: "Sydney, Australia",
        description:
            "A client-side-only iOS game",
        buttonText: "View Project Demo",
        date: "May 2022",
        icon: "project",
        refLink: 'https://www.youtube.com/watch?v=PZ8vjW1kqTk'
    },

    {
        title: "Online Grocery Store",
        location: "Sydney, Australia",
        description:
            "This is a UTS project. An e-commerce web application with both server and client side by using HTML, CSS, PHP, MySQL, JavaScript, AWS Beanstalk, GitHub.",
        buttonText: "View Project Demo",
        date: "May 2022",
        icon: "project",
        refLink: 'https://youtu.be/gNohrjJ1RSA'
    },

    {
        title: "Datamining in Action",
        location: "Sydney, Australia",
        description:
            "This is a UTS project. This is an individual project for students acting as data scientists at a consulting company. The objective was to make predictions on a given dataset with attributes that have unknown definitions. The built classifiers were uploaded and competed on Kaggle. Technologies involved: Python, Jupyter Notebook, pandas, numpy, matplotlib, imblearn, sklearn",
        buttonText: "View My Ranking (10620084)", 
        date: "May 2021",
        icon: "project",
        refLink: 'https://www.kaggle.com/competitions/2021a-uts-data-analytics-assignment-3/leaderboard?tab=public'
    }

    ,
    
    {
        title: "Yee Tai Capital Limited",
        location: "Hong Kong",
        description:
            "Worked as a director to build an asset management firm.",
        buttonText: "",
        date: "January 2019 - April 2021",
        icon: "work",
        refLink: ''
    }
    ,
    {
        title: "Lion International",
        location: "Hong Kong",
        description:
            "Overseen the securities and futures business.",
        buttonText: "View Company Website",
        date: "Jun 2016 – Jan 2019",
        icon: "work",
        refLink: 'https://www.libkr.com.hk/'
    }
    ,
    {
        title: "China Galaxy International ",
        location: "Hong Kong",
        description:
            "Managed investment portfolio for clients; Generated around 20% profit per annum.",
        buttonText: "View Company Website",
        date: "Aug 2013 – Jan 2016",
        icon: "work",
        refLink: 'https://en.chinastock.com.hk/'
    },

    {
        title: "Global Association of Risk Management, Financial Risk Manager",
        location: "Hong Kong",
        description:
            "A globally recognized professional certification for individuals working in the field of risk management within the financial industry",
        buttonText: "View Certificate",
        date: "15 Apr 2015",
        icon: "cpt",
        refLink: '/'
    },

    {
        title: "BOCOM International ",
        location: "Hong Kong",
        description:
            "Provided account services and investment advice to clients.",
        buttonText: "View Company Website",
        date: "Sep 2012 – Aug 2013",
        icon: "work",
        refLink: 'https://www.bocomgroup.com/'
    },

    {
        title: "ICBC International ",
        location: "Hong Kong",
        description:
            "Provided account services and investment advice to clients. Managed over 300 clients.",
        buttonText: "View Company Website",
        date: "Jun 2010 – Sep 2012",
        icon: "work",
        refLink: 'https://www.icbci.com.hk/'
    },

    {
        title: "UTS, Bachelor of Business ",
        location: "Sydney, Australia",
        description:
            "major in Finance, submajor in Banking",
        buttonText: "View Certificate",
        date: "16 Aug 2009",
        icon: "school",
        refLink: '/'
    }
]

const timelineElements = listOfEvents.map((e, i) => {
    return {
        id: i + 1,
        ...e,
    }
})

export default timelineElements;