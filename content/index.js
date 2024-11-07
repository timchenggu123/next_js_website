export const journey = [
    {
        date: "2017.1-2017.4", 
        title: "Frontend Intern", 
        org: "QingPath Technologies",
        bg: "/qingpath.jpg",
        bullets: [
            "Assisted in Agile Web Development using Html, JavaScript, and CSS.",
            "Created Work Progress Reports.",
            "Collected and documented Customer Feedbacks.",
        ],
        skills: "HTML · CSS · JavaScript"
    },
    {
        date: "2017.9-2017.12", 
        title: "Engineering Intern", 
        org: "South Fontenac",
        bg: "/sf.jpg",
        bullets:[
            "Helped the township build a traffic data management and visualization tool in native Excel, using custom VBA and JavaScript. Includes a interactive map visualization module created using GoogleMaps API.",
            "Produced various engineering design drafts and drafts.",
            "Assisted the engineers in the township's public works office with drafting project proposals.",
            "Supervised various contractor projects in the township including constructions and roadwork."
        ],
        skills:"VisualLisp · VBA · JavaScript"
    },
    {
        date: "2018.5-2018.8",
        title: "Data Analyst Intern",
        org: "Environment Canada",
        bg: "/environcan.jpg",
        bullets:[
            "Analyzed PM 2.5 data between 2003 and 2017 using R and MatLab. Result presented at August 2018 NAPS lab managers meeting.", 
            "Manged NAPS SQLServer database. Created data pipelines and validated large volume of lab data both programmatically and mnaully, using a combination of SQL, MatLab, VBA, and R.",
            "Created custom softwares using MatLab and R as requested by the supervising engineer.",
            "Designed a new version NAPS lab information management system using VBA and Microsoft Access.",
        ],
        skills: "MATLAB · VBA · Python · R"
    },
    {
        date: "2020.1-2020.4",
        title: "Data Engineering Intern",
        org: "Wayfair",
        bg: "/wayfair.jpg",
        bullets:[
            "Created internal automatic data model verification pipelines, accelerating data verification process by up to 400× using the latest technologies in Python and R.",
            "Created and managed internal data delivery pipelines between multiple data storage solutions implemented with MySQL, PostgreSQL, VerticaSQL, Microsoft Access, and Google Cloud Platform.",
          ],
        skills: "SQL · NoSQL · Python · R"
    },
    {
        date: "2020.9-2020.12",
        title: "Software Engineering Intern",
        org: "AWS",
        bg: "/aws.jpg",
        bullets:[
            "Designed and implemented multiple core business metric pipelines as part of AWS Cloud Formation, driving multi-billion dollar business decisions with cutting-edge technologies of Kotlin, Java, AWS EC2, AWS DynamoDB, AWS Athena.",
            "Hosted and led design meetings with the AWS Cloud Formation team for software architecture design and integration strategies.",
            "Managed and deployed software feature to 21 AWS regions and created key maintenance pipelines with Ruby."
          ],
        skills: "Amazon EC2 · Amazon Dynamodb · AWS CloudFormation · AWS Identity and Access Management (AWS IAM) · AWS Athena · NoSQL · Kotlin · Cloud · Ruby · AWS · Apache Spark · Python · Java · JavaScript"
    },
    {
        date: "2021.9-2022.8",
        title: "ML Research Intern",
        org: "Huawei 2012 Labs",
        bg: "/huawei.jpg",
        bullets: [
            "Lead the design and implementation of a GNN/transformer-based regression model for approximating the solutions for NP-hard multi-commodity-flow problems. The model yields solutions within 95% of the theoretical optimum and is between 100-10000× faster than traditional algorithms. Python, PyTorch, PyTorch Geometrics.",
            "Engineered distributed ML pipelines for training and inference that accommodate 30-billion-parameter models among up to 4 Nvidia V100 GPUs with PyTorch Distributed.",
            "Built and deployed multiple data pipelines using Numpy and Pandas."
          ],
        skills: "PyTorch · Machine Learning · Transformer · GNN"

    },
    {   
        date: "2016.9-2022.6", 
        title: "B.ASC. Comp.Eng.", 
        org: "University of Waterloo", 
        bg: "/qnc.jpg",
        bullets:[
            "Cumulative Grade Point Average: 84.3%",
            "Capstone Project: DeepPen, an web app capable of automatically benchmarking adversarial ML attack algorithms against a large array of standardized datasets and models.",
            "Software lead of Waterloo Concrete Canoe Team. Created a custom software for streamlined paramterized design with Grasshopper, python, and VBA.",
            "Project lead of FlowAI, a productivity desktop software capable of generating excel statics and charts based on live speech. Winner at 2019 Hack the North.",
            "Project lead of SaveMI, an android app capable of recognizing potential allergy sources from food based on photos. Winner at 2019 Eng Hack.",
        ]
    },
    {
        date: "2022.9-2024.8",
        title: "M.ASC Comp.Eng.",
        org: "University of Toronto",
        bg: "/uoft.jpg",
        bullets:[
            "Grade Point Average: 4.0",
            "Research Focus: Developing High-speed inter-cloud data transportation layer for accelerating distributed machine learning (Paper under review).",
        ],
        skills: "PyTorch · Rust · JavaScript · DeepSpeed"
    },
    {
        // working at AMD
        date: "2024.8 - Now",
        title: "Senior SDE - AI Sowftware",
        org: "AMD",
        bg: "/amd.jpg",
        bullets:[
            "Develop and maintain the ROCm stack code base for supporting the cutting edge Radon and Instinct series GPUs.",
            "Evaluate and propose new ROCM features along with stack-level integration strategies across component teams.",
            "Demonstrate system level understanding of the ROCm stack and perform end-to-end debugging.",
            "Ensure outstanding relationship with clients, drive open-source community engagmment and satisfaction, as well as manage expectations",
          ],
        skills: "C++ · ROCm · CUDA · Python"
    },
    {
        date: "??? - Future",
        title: "Engineer",
        org: "Your Company",
        bg: "/tbd.svg",
        bullets:[
            "Building visually stunning websites complete with clean animations, optimized with the latest Next.js features.",
            "Creating fast servers using Rust, Javascript, Python. Containerize the server with Docker and Kubernetes. Deploy and maintain your apps in the AWS Cloud.",
            "Building efficient and secure data pipelines using SQL or no SQL.",
            "Wmpower your app with fine-tuned LLM models, or build and train a custom model from scratch using PyTorch."
        ]
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
                img: "/strato/strato.png",
                title:"Motivation",
                description: "Distributed Machine Learning across the Internet is critical for training models with private and sensitive data. However, the slow speed of wide-area-network poses a bottleneck in model synchronization. Strato aims to solve this problem by creating a software-defined network that is optimized to speed up the data pattern of intern-DC ML training.",
            },
            {
                img: "/strato/strato1.png",
                title:"Exceptional Performance",
                description: "Leveraging Rust's powerful zero-cost abstraction and ownsership model, Strato is capable of achieving multi-Gbps throughput on mid-tier cloud vCPUs. The performance is further augmented with coroutines and async I/O, thanks to Rust's powerful tokio runtime. Fairness in ensured in packet processing between coroutines to cater to the needs of distributed communciation algorithms such as RingAllReduce.",
            },
            {
                img: "/strato/strato2.png",
                title:"Dynamic multi-path routing",
                description: "To bypass the bottleneck of the slow WAN, Strato employs a real-time multi-path routing algorithm that is capable of dynamically selecting the best path for each stream on the current network condition. The optimzation is performed on a centralzied controller that seamlessly can be easily extended via a database-oriented API. ",
            },
            {
                img: "/strato/strato3.png",
                title:"Seamless Integration with ML Frameworks",
                description: "Strato is carefully engineered with NCCL and OpenMPI in mind, and seamlessly supports high-level distributed ML frameworks from PyTorch Distributed to HuggingFace Accelerate and DeepSpeed.",
            } 
        ]
    },
    {
        title:"DeepTE",
        institution: "Huawei 2012 Labs",
        description: "Machine learning-based traffic engineering algorithm for large scale networks.",
        tech: "Python, PyTorch, SK-Learn, Pandas",
        slides: [
            {
                img: "/deepte/deepte1.png",
                title:"Motivation",
                description: "Network traffic engineering (TE) aims to optimize network resource allocation for each data flow. Computing optimal solutions for large-scale network is time-consuming for large networks, which opens up opportunity for an ML-based approach to approximate the optimal solution.",
            },
            {
                img: "/deepte/deepte2.png",
                title:"Core Challenges Solved",
                description: "TE problems are formulated as constrained optimization problems. However, training a neural network to approximate the optimal solution while respecting the contraints is inherently difficult. DeepTE solves this problem with the novel mechanism Gradient Descent-based Feasibility Projection that guarantees the solution meets contraints within finite iterations.",
            },
            {
                img: "/deepte/deepte3.png",
                title:"Effecient Model Design",
                description: "DeepTE's core deep neural network model combines the power of state-of-the-art GroupRevGNN to comprehend the relationship between nodes and flows in the large network topology, and leverages parallel fully connected layers to approximate optimal solutions taking into account of the global network state. The model is trained with unsupervised learning and reinforcement learning, and is designed with a parallelism in mind to accelerate training and inference.",
            },
            {
                img: "/deepte/deepte4.png",
                title:"Performance Achieved",
                description: "DeepTE is able to achieve over 95% accuracy in predicting the optimal solution for TE problems with 1000+ nodes and 10000+ flows. Not only does this out-performs state-of-the-art works in terms of accuracy, it also does so under 100ms, which is over 100x improvement in terms of speed.",
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
        description: "Business Intelligence pipelines for tracking usage of new software feature released for CloudFormation.",
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