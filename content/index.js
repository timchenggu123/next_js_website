export const journey = [
    {
        date: "2017.1-2017.4", 
        title: "Frontend Intern", 
        org: "QingPath Technologies",
        bg: "/qingpath.jpg"
    },
    {
        date: "2017.9-2017.12", 
        title: "Engineering Intern", 
        org: "South Fontenac",
        bg: "/sf.jpg",
    },
    {
        date: "2018.5-2018.8",
        title: "Data Analyst Intern",
        org: "Environment Canada",
        bg: "/environcan.jpg"
    },
    {
        date: "2020.1-2020.4",
        title: "Data Engineering Intern",
        org: "Wayfair",
        bg: "/wayfair.jpg"
    },
    {
        date: "2020.9-2020.12",
        title: "Software Engineering Intern",
        org: "AWS",
        bg: "/aws.jpg"
    },
    {
        date: "2021.9-2021.12",
        title: "ML Research Intern",
        org: "Huawei 2012 Labs",
        bg: "/huawei.jpg"
    },
    {
        date: "2022.1-2022.8",
        title: "ML Research Part-time",
        org: "Huawei 2012 Labs",
        bg: "/huawei.jpg"
    },
    {   
        date: "2016.9-2022.6", 
        title: "B.ASC. Comp.Eng.", 
        org: "University of Waterloo", 
        bg: "/qnc.jpg"
    },
    {
        date: "2022.9-2024.8",
        title: "M.ASC Comp.Eng.",
        org: "University of Toronto",
        bg: "/uoft.jpg"
    },
    {
        date: "2024.8 - Future",
        title: "Engineer",
        org: "Your Company",
        bg: "/tbd.jpg"
    }
]

export const projects = [
    // {
    //     title: "timgu.me",
    //     institution: "Personal Project",
    //     description: "Personal website for showcasing my projects and resume.",
    //     tech: "Next.js, React, TailwindCSS, Framer Motion, TypeScript",
    // },
    {
        title: "Strato",
        institution: "M.ASC Research @ University of Toronto",
        description: "Rust-powered, software defined application space overlay network for speeding up inter-DC ML.",
        tech: "Rust, TypeScript, PostgresSQL, Docker",
        slides: [
            {
                img: "/strato/strato.svg",
                title:"Motivation",
                description: "Accelerating collaborative ML training across multiple geo-distributed data centers or cloud services without requiring data to be shared.",
            },
            {
                img: "/strato/strato1.svg",
                title:"Core Design",
                description: "Strato is software defined, consisting of a centralized controller and an array of nodes which collectively form an overlay network.",
            },
            {
                img: "/strato/strato2.svg",
                title:"Controller",
                description: "Powered by TypeScript and PostgresSQL, the controller is capable of actively monitoring network performance and dynamically install routes for flow granularity through a database-oriented API.",
            },
            {
                img: "/strato/strato3.svg",
                title:"Node",
                description: "Powered by Rust's powerful tokio runtime, the node is capable of forwarding packets through parallel routes concurrently at Gbps throughput using multiple cores.",
            } 
        ]
    },
    {
        title:"DeepTE",
        institution: "Huawei 2012 Labs",
        description: "Machine learning based traffic engineering algorithm for large scale networks.",
        tech: "Python, PyTorch, SK-Learn, Pandas",
        slides: [
            {
                img: "/classified.svg",
                title:"Motivation",
                description: "Network traffic engineering (TE) aims to optimize network resource allocation for each data flow. Computing optimal solutions for large-scale network is unscalable. DeepTE employs an ML-based approach to approximate the optimal solution instead.",
            },
            {
                img: "/classified.svg",
                title:"Core Challenges Solved",
                description: "TE problems are formulated as constrained optimization problems. However, training a neural network to approximate the optimal solution while respecting the contraints is inherently difficult. DeepTE employs a novel approach to solve this problem.",
            },
            {
                img: "/classified.svg",
                title:"Performance Achieved",
                description: "DeepTE is able to achieve over 95% accuracy in predicting the optimal solution for TE problems with 1000+ nodes and 10000+ flows. This is more than 100x improvement over the state-of-the-art solutions.",
            },
        ]
    },
    {
        title:"DeepPen",
        institution: "B.ASC Capstone @ University of Waterloo",
        description: "Web application for benchmarking ML adversarial attack algorithms.",
        tech: "PyTorch, TensorFlow, Flask, Ruby on Rails, MangoDB, Docker, JavaScript",
        slides: [
            {
                img: "/deeppen/deeppen1.png",
                title:"Motivation",
                description: "ML models can be vulnerable to various adversarial attacks algorithms. However, there is no standard benchmarking tool for comparing the performance of these different attack algorithms. DeepPen aims to solve this problem by providing a web application where researchers can upload their attack algorithms and compare their performance against other algorithms.",
            },
            {
                img: "/deeppen/deeppen2.png",
                title:"High-level Design",
                description: "Four core-modules: Frontend, Backend, Storage, and Sandbox. Front-end presents a simple, clean interface for the user to interact with. Storage allows persistence of results and metrics per user. Back-end defines a communication interface between the user (front-end) and the other subsystems via REST API. Sandbox subsystem handles all aspects of neural network code execution",
            },
            {
                img: "/deeppen/deeppen3.png",
                title:"Frontend",
                description: "Frontend screenshot 1. Interactive code eidtor for users to upload their attack algorithms. User can also choose environmental settings to run their scripts.",
            },
            {
                img: "/deeppen/deeppen4.png",
                title:"Fontend",
                description: "Frontend screenshot 2. Experiment configuration model allowing the user to specify the parameters of the experiment, including and the size of models to be attacked, and the test data to be used",
            },
            {
                img: "/deeppen/deeppen5.png",
                title:"Fontend",
                description: "Frontend screenshopt 3. Data inspector for the result of the experiment. User can view the how each individual adversaril data sample as bitmap. Data colored in red indicates that the attach was successful, green otherwise.",
            },
            {
                img: "/deeppen/deeppen6.png",
                title:"Fontend",
                description: "Frontend screenshopt 4. Comprehensive dashboard for comparing how different attack algorithms perform against each other. User can also view the performance of each individual attack algorithm.",
            },
            {
                img: "/deeppen/deeppen7.png",
                title:"SandBox",
                description: "Overview of Sandbox. Sandbox is a docker container that is responsible for executing the user's attack algorithm. It is also responsible for collecting the results of the attack and returning it to the user. For every request, a new virutal environment is created to ensure that the user's code is executed in isolation.",
            },
            {
                img: "/deeppen/deeppen8.png",
                title:"SandBox",
                description: "Horizontal scalability of Sandbox. Sandbox is designed to be horizontally scalable. This allows DeepPen to handle a large number of concurrent requests. The number of Sandbox instances can be scaled up or down based on the current load.",
            },
            {
                img: "/deeppen/deeppen9.png",
                title:"SandBox",
                description: "Sequence diagram for processing one request. The user's code is executed in a virtual environment. The results of the attack are then returned to the user.",
            },
        ]
    },
    {
        title:"CloudFormation BI",
        institution: "Amazon Web Services",
        description: "Business Intelligence pipelines for tracking usage of new software feature released for ClouFormation.",
        tech: "Java, Kotlin, AWS, Ruby, DynamoDB, Spark",
        slides: [
            {
                img: "/aws/aws.jpeg",
                title:"Motivation",
                description: "CloudFormation is a service that allows users to provision and manage AWS resources through a declarative template. CloudFormation is a highly complex service with many features. It is important to track how users are using these features to inform future product development.",
            },
            {
                img: "/aws/bi.jpg",
                title:"Core Challenges Solved",
                description: "CloudFormation is a highly complex service with. It is challenging to decide where to insert metrics collection algorithms that can collect business metrics accurately while minimally impacting the performance of critical datapaths. Moreover, the data collected needs to be integrated with existing BI pipelines, which is challenging due to the large number of existing pipelines.",
            },
            {
                img: "/aws/meeting.jpg",
                title:"Project Responsibilities",
                description: "As an intern, I was given the rare opportunity to lead the design and implementation of the entire project. I was responsible for drafting design proposals, leading internal design meetings, integrating the data with existing BI pipelines, designing the data schema for the new data, and finally, deploying the pipelines to 21 regions across the world.",
            },
        ]
    }
]