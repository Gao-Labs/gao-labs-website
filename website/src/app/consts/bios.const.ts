import { Person } from '../types/Person.type'

const imageDir = "../../../assets/headshots/"

export const people: Person[] =[
  {
    name: 'Dr. H. Oliver Gao, PhD',
    type: "pi",
    title: 'Director of Cornell Systems Engineering',
    role: 'Lab Head',
    bio: 'Dr. Gao is the Director of the Cornell Systems Engineering and Howard Simpson Professor of Engineering at Cornell University. Gao is an international leading expert in urban infrastructure, transportation, and health (environmental  health, public health) systems analytics/modeling and innovation for healthy living in smart communities. His research focuses on urban technology, data science, integrated computational engineering models, and trans-disciplinary systems solutions for intelligent urban systems, low carbon and low emission transportation, and human-centered urban design for environment and public health. He is an elected member in the graduate fields of 1) Civil and Environmental Engineering, 2) Computer Science and Engineering; 3) Air Quality in Earth and Atmospheric Science, and 4) Systems Engineering at Cornell University.',
    image: imageDir + 'oliver-group.jpg',
    email: "hg55@cornell.edu"
  },
{'name': 'Dr. Tim Fraser, PhD', type: 'postdoc', 'bio': 'Timothy (Tim) Fraser is a research associate with the Systems Engineering Program at Cornell University. He is a computational social scientist, studying how communities can reduce their emissions and improve their resilience. He has authored 40 peer-reviewed studies and five chapters on urban resilience, disasters, energy, health, and the pandemic in the US and Japan. His recent has been funded by multiple external grants from Fulbright & the Natural Hazards Center, as well as internal grants from Northeastern University. Prior to Cornell, he taught as an instructor and earned his Ph.D. in political science from Northeastern University from 2017 to 2022. In 2016, he was a Fulbright Fellow at Kyushu University, Japan. Tim teaches statistics and research methods, using examples from environmental policy, and enjoys leading research with undergraduates and master’s students. He also runs tutorials on data science in R.', 'title': 'Research Associate', 'image': "../../../assets/headshots/Fraser_headshot_2022 - 560x560.jpg", 'role': 'Lead Developer', 'team': 'CAT', 'linkedinUrl': 'https://www.linkedin.com/in/timothy-fraser-698786186/', 'websiteUrl': 'https://timothyfraser.com/cv/', 'email': 'tmf77@cornell.edu'},
{
  name: 'Erin Murphy',
  type: "staff",
  title: 'Programmer',
  team: "uTech",
  role: "PPS Multi-City Developer",
  bio: 'Erin is a staff developer and key contributor to the uTech and PPS projects. Leveraging her experience in full-stack development, she also created this website from scratch using Angular and regularly assists the CAT team with various projects. Her skills include Python, Pandas, and web/mobile development with TypeScript, React (Native), and Angular.',
  image: imageDir + 'erinheadshot3.JPG',
  linkedinUrl: "https://www.linkedin.com/in/erinmurphy843/",
  githubUrl: "https://github.com/em843",
  email: "erinmurphy843@gmail.com"
},
{'name': 'Kuceli Englama',  type: "masters", 'bio': "Kuceli Susan Englama is a software developer with expertise in front-end engineering. She is currently pursuing her master's degree in computer science at Cornell University and previously earned her bachelor of science in software engineering from the American University of Nigeria, where she graduated with top honors. She is working on the Nationwide Emission Analyzer Project at uTECH, developing front-end components using ReactJS. Kuceli co-founded The Favor Busam Foundation, which supports impoverished individuals through educational initiatives and basic amenities. Her leadership extends to her role as a founding board member at Visqorium, where she managed company administration and conducted competitive analysis in the non-fungible token market.", 'title': 'MEng Student', 'image': imageDir + 'IMG_8549 - Kuceli Englama.jpg', 'role': 'Front End Developer', 'team': 'uTech', 'yearIfPastMember': 2023, 'linkedinUrl': 'https://www.linkedin.com/in/kucelienglama/', 'websiteUrl': 'https://kucelienglama.netlify.app', 'email': 'englamakuceli@gmail.com'},
{'name': 'Dr. Charlle  Sy, PhD', type: "postdoc",'bio': 'Dr. Charlle Sy is a professor in Industrial & Systems Engineering at De La Salle University-Manila. She received the 2023 Underwriters Laboratories ASEAN-U.S. Science Prize for Women for her work on energy and electrification. She developed an algorithmic framework called Target-Oriented Robust Optimization (TORO) which integrates uncertainty at the point of decision-making and guarantees computational tractability. Dr. Sy has extensively used TORO for the design of sustainable systems in energy, production, and water networks.', 'title': 'Visiting Scholar', 'image': "../../../assets/headshots/KRP09089ed - Charlle Sy.jpeg", 'team': 'CAT', 'yearIfPastMember': 2024, 'email': 'cls384@cornell.edu'},
{'name': 'Junjia Liang', type: "masters",'bio': "Junjia Liang has Master's degree in Engineering from Cornell University and a background in Business Administration, adept in Python, SQL, data visualization, MATLAB, and cloud computing.", 'title': 'MEng student', 'image': imageDir + 'IMG_4791 - Junjia Liang.jpg', 'team': 'uTech', 'yearIfPastMember': 2024, 'linkedinUrl': 'www.linkedin.com/in/junjia-liang-5914922b4', 'email': 'jxl1758@cornll.edu', 'githubUrl': 'https://github.com/jjliang555'},
{'name': 'Songyang Ruan', type: "masters",'bio': "Songyang is an MS student in the Regional Science program at Cornell University, focusing on spatial data analytics and computational methods for the system engineering field. Before coming to Cornell, he received a BS in Business Intelligence and Data Analytics at the University of Macau with an exchange semester at Xi'an Jiaotong University's Big Data Management and Applications program.", 'title': 'MS Student', 'image': "../../../assets/headshots/selfie_sq - horatio juan.jpg", 'team': 'CAT', 'yearIfPastMember': 2024, 'linkedinUrl': 'https://www.linkedin.com/in/horatioj/', 'websiteUrl': 'https://horatioj.github.io/', 'githubUrl': 'https://github.com/Horatioj'},
{'name': 'Ryan Mao', type: "masters", 'bio': 'Ryan is currently an M.Eng student studying CS at Cornell University. He completed his undergraduate at the same institution, studying CS and ORIE. He is a contributor to the GreenTech project in Spring 2024.', 'title': 'MEng Student', 'image': imageDir + 'Screenshot 2024-04-18 at 10.02.41\u202fPM - Ryan Mao.png', 'team': 'uTech', 'yearIfPastMember': 2024, 'linkedinUrl': 'https://www.linkedin.com/in/ryanwmao/'},
{'name': 'Dr. Mohammad  Tayarani, PhD', type: "postdoc",'bio': "As a visiting scientist at Cornell University, Dr. Mohammad Tayarani's focus revolves around a groundbreaking modeling framework for transportation, air quality, and justice. At the heart of his research is the development of a digital twin—a sophisticated simulation tool that brings together various aspects like land use, transportation, emissions, air quality, and justice. This tool helps us better understand and tackle complex challenges in urban development and environmental sustainability.\n \nHe uses data-driven methods to build automated simulation models, employing advanced techniques like machine learning to understand how transportation systems affect climate change, air quality and justice. By analyzing big datasets, he aims to uncover practical insights that can guide policy-making and promote fairness within communities.\n \nHe has worked on environmental policy at Consumer Reports and California Air Resources Board, focusing on the Low Carbon Fuel Standard. Now, as a Senior Data Scientist at California Public Utility Commission-TLAB, Mohammad analyzes data related to Transportation Network Companies (TNCs) and Autonomous Vehicle (AV) operations. His work helps shape regulations that encourage innovation while ensuring public safety in transportation technology.", 'title': 'Visiting Scientist', 'image': "../../../assets/headshots/IMG_4422 - Mohammad Tayarani.jpeg", 'team': 'uTech', 'email': 'mt789@cornell.edu'},
{'name': 'Youchen Shao', type: "masters",'bio': 'Youchen joined the Emissions Analyzer team as a DevOps engineer in Spring 24. He is a self-motivated quick learner focusing on writing high-performance, user-friendly, and maintenance-free programs. He collaborated with his teammates to determine the deployment diagram and the hardware specifications. He created high-standard Docker images for the MOVES software, backend, and frontend for deployment on Cornell Server and AWS.', 'title': 'MEng Student', 'image': imageDir + 'bio - Youchen Shao.jpg', 'role': 'DevOps Engineer', 'team': 'uTech', 'yearIfPastMember': 2024, 'linkedinUrl': 'https://www.linkedin.com/in/youchenshao/', 'githubUrl': 'https://github.com/xiaoshaoyc'},
{'name': 'Peilin Li', type: "masters",'bio': 'Peilin is a Systems Engineering MS student.', 'title': 'MS Student', 'image': imageDir + 'IMG_7377 copy - Peilin Li.JPG', 'team': 'CAT', 'yearIfPastMember': 2023, 'linkedinUrl': 'https://www.linkedin.com/in/peilin-li-5165a7204/', 'email': 'pl593@cornell.edu'},
{'name': 'Dr. Xinlai Liu, PhD', type: "postdoc",'bio': 'Dr. Xinlai Liu is a postdoctoral associate in the Systems Engineering Program at Cornell University. As a sustainability scientist, he studies the use of blockchain, digital twins, and artificial intelligence to enhance environmental sustainability and mitigate climate change. He has published over 20 peer-reviewed papers on ESG assessment, smart manufacturing, and supply chains. Prior to joining Cornell, he earned his Ph.D. in Industrial and Manufacturing Systems Engineering from the University of Hong Kong, between 2019 and 2023.', 'title': 'Postdoctoral associate', 'image': imageDir + 'Xinlai Liu - XL Liu.jpg', 'team': 'CAT', 'yearIfPastMember': 2023, 'email': 'xl957@cornell.edu'},
{'name': 'Hansal Shah', type: "masters",'bio': 'Hansal Shah, CS student at Cornell, is working as a Data Engineer at Gao Labs in uTech. He has been developing an automated ETL data pipeline for processing, storing and analyzing different types of data, understanding the relationships between them, and making it ready for end-user consumption.', 'title': 'MEng Student', 'image': imageDir + 'me - Hansal Shah.jpg', 'role': 'Data Engineer', 'team': 'uTech', 'yearIfPastMember': 2023, 'linkedinUrl': 'https://www.linkedin.com/in/hansalms/', 'websiteUrl': 'https://hansalshah007.github.io/portfolio/', 'email': 'hansalshah100@gmail.com', 'githubUrl': 'https://github.com/HansalShah007'},
{'name': 'Nick Kunz', type: "phd",'bio': 'Nick Kunz is a PhD Student in Systems Engineering at Cornell University. His research interests lie at the intersection of data science, urban planning, and engineering.', 'title': 'PhD Student', 'image': imageDir + 'nick v2 - Nick Kunz.jpg', 'yearIfPastMember': 2022, 'websiteUrl': 'https://nickkunz.com/', 'email': 'nhk37@cornell.edu', 'githubUrl': 'https://github.com/nickkunz'},
{'name': 'Jiacheng Sun', type: "masters",'bio': 'Jiacheng Sun is MEng Computer Science student. He used his software and game development experience to help develop an interactive 3D smart city panel and deploy it to the web page.', 'title': 'MEng Student', 'image': imageDir + 'Photo - Jiacheng Sun.jpg', 'role': 'Developer', 'team': 'CAT', 'yearIfPastMember': 2024, 'linkedinUrl': 'https://www.linkedin.com/in/jiacheng-sun-68a1391b6/', 'websiteUrl': 'https://jiachengme.com/', 'email': 'sunjiacheng4545@gmail.com'},
{'name': 'Ibrahim Fazili', type: "masters",'bio': 'Ibrahim is an MEng student in Computer Science at Cornell University. \nHe is one of the developer at Gao Labs, working on the TDM team. Previously, he graduated as a computer science specialist from the University of Toronto, Canada. His area of interests include distributed systems and machine learning. He really likes music and history!', 'title': 'MEng Student', 'image': imageDir + 'WhatsApp Image 2024-04-26 at 1.45.34 AM - Ibrahim Fazili.jpeg', 'role': 'Developer for TDM team', 'team': 'uTech', 'yearIfPastMember': 2024, 'linkedinUrl': 'https://www.linkedin.com/in/ibrahimfazili/', 'email': 'iif4@cornell.edu', 'githubUrl': 'https://github.com/IbrahimFazili'},
{'name': 'Tong Duan', type: "masters",'bio': 'Tong is a CS MEng student at Cornell University. He is working as a backend developer for uTech Emission Analyzer, and used mostly Node.js and JavaScript to build the backend for the emission analyzer app.', 'title': 'MEng Student', 'image': imageDir + 'Profile - Tong Duan.jpg', 'role': 'Backend Developer', 'team': 'uTech', 'yearIfPastMember': 2023, 'websiteUrl': 'https://ttdd273.github.io/'},
{'name': 'Michael Wu', type: "masters",'bio': 'Michael is a Computer Science student doing his Master of Engineering. He completed his undergrad for Computer Science and Electrical and Computer Engineering at Cornell last may. As an aspiring software engineer, Michael has previously interned at Visa and Coinbase. In his free time, Michael likes to read, hike, and play poker.', 'title': 'MEng Student', 'image': imageDir + 'IMG_4464 - Michael Wu.jpg', 'role': 'Developer', 'team': 'uTech', 'yearIfPastMember': 2024, 'linkedinUrl': 'https://www.linkedin.com/in/michaelwu314/', 'email': 'mw773@cornell.edu'},
{'name': 'Peculiar  Lawrence', type: "masters",'bio': "Peculiar is currently pursuing her MEg in Biomedical Engineering at Cornell University. She is one of the Master's student on the Quality Checker portion of the CAT AI team. Using her knowledge from her Lean Six Sigma training, she worked to assess how well a generative AI model is at grading its own responses vs human coders. In addition this, she worked on also assess how well it works at detecting errors at comparable rates to human coders?", 'title': 'MEng Student', 'image': "../../../assets/headshots/Screenshot 2024-04-28 135813 - Peculiar Lawrence.png", 'team': 'CAT', 'yearIfPastMember': 2024, 'linkedinUrl': 'https://www.linkedin.com/in/peculiarlawrence/', 'email': 'pl635@cornell.edu'},
{'name': 'Carnell Zhou', type: "masters",'bio': 'Carnell graduated in Spring 2024 from the Cornell MEng program in CS. He contributed to the data acquisition aspect of the uTech pipeline, acquiring different sources of map data. He enjoys playing video games with his friends in his free time.', 'title': 'MEng Student', 'image': imageDir + 'Carnell Zhou.jpeg', 'role': 'Data Acquisition Developer', 'team': 'uTech', 'yearIfPastMember': 2024},
{'name': 'Mahak Bindal', type: "masters",'bio': 'Mahak graduated in 2023, completing her undergraduate degree in Computer Science in May, and her MEng in December. She worked on CAT API, helping build a Docker image to run MOVES on Linux. Now, she works at Bloomberg as a Software Engineer.', 'title': 'MEng Student', 'image': imageDir + 'Mahak Bindal Photo - Mahak Bindal.JPG', 'role': 'Developer', 'team': 'CAT', 'yearIfPastMember': 2023, 'linkedinUrl': 'https://www.linkedin.com/in/mahakbindal/'},
{'name': 'Carl Closs', type: "staff",'bio': 'Carl is the first staff developer in the lab, being brought on in 2022. They are one of the key contributors to the PPS project.  Their skills include data analysis in (geo)pandas, Python in general, and MOVES wrangling.', 'title': 'Applications Programmer III', 'image': imageDir + 'headshot - Carl Closs.png', 'role': 'Staff Developer', 'team': 'uTech', 'yearIfPastMember': 2022, 'email': 'cjc384@cornell.edu', 'githubUrl': 'https://github.com/ccloss65536'},
{'name': 'Megh Khaire', type: "masters",'bio': 'Megh is one of the backend developers at UTech, currently working on creating the UTech Engine database and API server.', 'title': 'Meng', 'image': imageDir + 'photo - Megh Khaire.jpg', 'role': 'Backend Developer', 'team': 'uTech', 'yearIfPastMember': 2023, 'linkedinUrl': 'https://www.linkedin.com/in/megh-khaire', 'githubUrl': 'https://github.com/megh-khaire/'},
{'name': 'Dr. Cafer Avcı, PhD', type: "postdoc", 'bio': 'Cafer is a postdoctoral research associate in the Civil & Environmental Engineering Department. Holding PhD in computer science, he has expertise in software development, robo-taxis, transportation modeling, and traffic & vehicle simulation. He possesses extensive R&D experience spanning his own projects, international collaborations, industrial experience, and involvement with start-ups. Currently, he is leading the uTECH development.', 'title': 'Postdoctoral Research Associate', 'role': 'uTech Systems Architect', 'image': "../../../assets/headshots/cafer.jpg", 'yearIfPastMember': 2023, 'linkedinUrl': 'https://linkedin.com/in/cafer-avci', 'websiteUrl': 'https://caferavci.com/'},
{'name': 'Yizhou Wang', type: "masters",'bio': "Yizhou Wang is an urban planner deeply committed to fostering sustainable communities through the integration of data insights. With a Master's from Cornell University and a Bachelor's from Xi’an Jiaotong-Liverpool University, she specializes in GIS analysis, policy development, climate resilience, and transportation planning. Her professional journey has included intensive studies on urban density dynamics and contributing to pioneering research in climate resilience. Additionally, her experience as a real estate and transportation data analyst has enabled her to devise innovative solutions to complex urban challenges.", 'title': 'Master of Regional Planning', 'image': imageDir + '证件 - Yizhou Wang.jpg', 'team': 'uTech', 'yearIfPastMember': 2024, 'linkedinUrl': 'https://www.linkedin.com/in/yizhou-wang-974a111ba/', 'email': 'yw2552@cornell.edu', 'githubUrl': 'https://github.com/YizhouWang19'},
{'name': 'Dr. Carmel Fiscko, PhD', type: "postdoc",'bio': 'Carmel Fiscko is an Ezra Systems Postdoctoral Associate at Cornell University working with Professors Francesca Parise and Oliver Gao. She earned her PhD in Electrical and Computer Engineering at Carnegie Mellon University in 2023 advised by Professors Soummya Kar and Bruno Sinopoli, where she also received her MS in 2019. She received her BS Cum Laude in Electrical Engineering in 2017 from the University of California at San Diego. She was selected as a 2019 National Science Foundation Graduate Research Fellow, 2022 iREDEFINE Fellow, and 2020 Hsu Chang Memorial Fellow in ECE. Her research focuses in understanding agent decision-making processes, with broader interests in multi-agent reinforcement learning, game theory, optimization, and control.', 'title': 'Ezra Systems Postdoctoral Associate', 'image': imageDir + 'cf - Carmel Fiscko.png', 'yearIfPastMember': 2024, 'websiteUrl': 'https://sites.coecis.cornell.edu/cfiscko/', 'email': 'cfiscko@cornell.edu'},
{'name': 'Ricky Takkar', type: "phd",'bio': 'Ricky Takkar is a Systems PhD student whose research focuses on identifying aspects of complex sociotechnical problems that can be tackled through technical means, especially those tied to computer science. His current project involves enhancing traceability in buyer-driven commodity chains based on novel system invariants. He is designing specifications to satisfy these invariants using a combination of blockchain technology, including smart contracts, and human intervention. Ricky holds a BS in Computer Engineering from Syracuse University.', 'title': 'PhD Student', 'image': imageDir + '1714678434.827008 - Ricky Takkar.JPG', 'linkedinUrl': 'https://www.linkedin.com/in/rt~/', 'websiteUrl': 'https://rickytakkar.com/'},
{'name': 'Dr. Aadhithiyan Subramaniyan, PhD', type: "postdoc", 'bio': 'Aadhithiyan Subramaniyan is a postdoctoral researcher at Cornell University, specializing in systems engineering. With a strong background in Mathematics, his expertise extends across diverse topics, including synchronization of complex dynamical networks, Machine learning, digital twins, Multi-agent systems, Neural networks and Supply chain systems. He has published numerous papers in high-impact journals, showcasing his ability to address real-world challenges through innovative research. His current role at Cornell builds upon over 3 years of extensive PhD research, further refining his skills in high-impact research, collaboration, and mentoring. His academic journey includes a Ph.D. from Alagappa University, India, and an M.Phil. in Mathematics from Periyar University, India.', 'title': 'Postdoctoral Research Associate', 'image': "../../../assets/headshots/Aadhithiya - Aadhithiyan subramaniyan.jpg", 'yearIfPastMember': 2023, 'linkedinUrl': 'https://www.linkedin.com/in/aadhithiyan-subramaniyan-187b70139/?originalSubdomain=in'},
{'name': 'Alireza Yazdiani', type: "phd",'bio': "Alireza is a Ph.D. candidate at Cornell University, deeply engaged in exploring the intersection of transportation engineering and climate action. He earned his bachelor's degree in Civil Engineering from the University of Tehran (2015-2019) and completed his master’s degree in Transportation Engineering and Planning at Sharif University of Technology (2019-2022). His master's thesis focused on the time-dependent electric vehicle routing problem in shared travel. His current research interests are centered on developing frameworks to analyze and optimize transportation systems, aiming to enhance climate resilience and minimize environmental impacts.", 'title': 'PhD Student', 'image': imageDir + 'Alireza Yazdiani.jpeg', 'team': 'CAT', 'yearIfPastMember': 2023, 'linkedinUrl': 'https://www.linkedin.com/in/alireza-yazdiani/', 'email': 'ay373@cornell.edu'},
{'name': 'Qingyuan Guo', type: "masters",'bio': "Qingyuan is an MEng student graduating in 2024. He works on the project 'Air Quality Machine Learning (AQML) - Predictive Analysis for Transportation Pollution' with Postdoc Mohammad and Dr. Alireza. He is also a member of the project 'CAT Cred/Quality Checker' with Dr. Fraser.", 'title': 'MEng Student', 'image': imageDir + '微信图片_20240425030117 - Qingyuan Guo.jpg', 'team': 'CAT', 'yearIfPastMember': 2024},
{'name': 'Linpei  Huang', type: "masters",'bio': 'Linpei Huang is a master student in the systems engineering program at Cornell University. His research field focused on how to build low-carbon cities and optimize emissions in transportation systems. His bachelor graduated from Sichuan University and the University of Pittsburgh in industrial engineering from 2019 to 2023.', 'title': 'Master Student', 'image': "../../../assets/headshots/Weixin Image_20240503014141 - Linpei Huang.jpg", 'role': 'Contributor', 'team': 'CAT', 'yearIfPastMember': 2023, 'linkedinUrl': 'https://www.linkedin.com/in/linpei-huang-573554261/', 'email': 'lh699@cornell.edu'},
{'name': 'Xinwei Li', type: "postdoc",'bio': "Dr. Xinwei Li is a postdoctoral associate in the School of Civil & Environmental Engineering at Cornell University. Since joining Gao's lab in January 2023, she has been responsible for architecting the CAT systems. Prior to this, she earned a PhD in Transportation Technology and Policy, along with a MS in Statistics, from the University of California, Davis. Her research focuses on the intersection of environment, transportation, and energy systems, particularly on reducing the environmental, health and energy impacts of transportation systems through innovative mobility techniques.", 'title': 'Research Associate', 'image': "../../../assets/headshots/李欣蔚证件照2 - Xinwei Li.png", 'role': 'CAT Systems Architect', 'team': 'CAT', 'email': 'xinweili734@gmail.com'},
]