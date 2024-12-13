
const commands_detail = {
    "help": "Show this help message",
    "clear": "Clear the terminal",
    "name": "Get the Full Name",
    "address": "Get the address",
    "pincode": "Get the pincode",
    "about": "Get a brief introduction about me",
    "experience": "Get my work experience",
    "skills": "Get my technical skills",
    "projects": "Get a list of my projects",
    "project <project_name>": "Get details about a specific project",
    "github": "Get my GitHub profile link",
    "linkedin": "Get my LinkedIn profile link",
    "stackoverflow": "Get my Stack Over Flow profile link",
    "packages": "Get my Python Package list",
    "packages <package_name>": "Get my Python Package details",
    "experiences": "Get my Experience List",
    "experiences <company name>": "Get my Experience Company details",
    "contact": "Get my contact information",
    "education": "Get my educational background",
    "certifications": "Get my certifications and achievements",
    "languages": "Get the programming languages I'm proficient in",
    "frameworks": "Get the frameworks and libraries I've worked with",
    "databases": "Get the databases I've worked with",
    "operatingsystems": "Get the operating systems I've worked with",
    "achievements": "Get my achievements and awards",
    "awards": "Get my awards and recognition",
    "publications": "Get my publications and research papers",
    "presentations": "Get my presentations and talks",
    "volunteer": "Get my volunteer work and community service",
    "hobbies": "Get my hobbies and interests",
    "interests": "Get my interests and passions",
    "goals": "Get my career goals and aspirations",
    "resume": "Get my resume and CV",
    "portfolio": "Get my portfolio and showcase",
    "blog": "Get my blog and articles",
    "socialmedia": "Get my social media profiles",
    "email": "Get my email address",
    "phone": "Get my phone number",
    "location": "Get my location and address",
    "timezone": "Get my timezone and location",
    "availability": "Get my availability and schedule",
    "services": "Get my services and offerings",
    "rates": "Get my rates and pricing",
    "testimonials": "Get my testimonials and reviews",
    "clients": "Get my clients and projects",
    "partners": "Get my partners and collaborations",
    "network": "Get my network and connections",
    "recommendations": "Get my recommendations and endorsements",
  };



const commands = {
    help: (term) => {
      term.writeln('Available commands:')
      for (const [command, value] of Object.entries(commands_detail)) {
        term.writeln(`  ${command}   - ${value}`)
      }
    },
    clear: (term) => {
      term.clear()
    },
    echo: (args) => {
      term.writeln(args.join(' '))
    },
    date: (term) => {
      term.writeln(new Date().toLocaleString())
    },
    fortune: (term) => {
      const fortunes = [
        "A journey of a thousand miles begins with a single step.",
        "The best way to predict the future is to invent it.",
        "Stay hungry, stay foolish.",
        "The only way to do great work is to love what you do.",
        "Innovation distinguishes between a leader and a follower.",
      ]
      term.writeln(fortunes[Math.floor(Math.random() * fortunes.length)])
    },
    name: (term) => {
      term.writeln('Muhammed Rahil M')
    },
    address: (term) => {
      term.writeln('Madathingal (House), South Puthalam, Areecode, Malappuram, Kerala, India')
    },
    pincode: (term) => {
      term.writeln('673639')
    },
    about: (term) => {
      term.writeln(`👋 Hello! I'm Muhammed Rahil, a passionate Python developer and seasoned backend engineer with a deep understanding of software development. I thrive in crafting robust and efficient solutions using cutting-edge technologies. 💼 In my professional journey, I've honed my skills in Python, Django, and database management systems like PostgreSQL and MySQL. My proficiency in version control with Git and experience collaborating on projects through platforms like Bitbucket and Jira have been integral to my success. 🚀 I embrace the Agile methodology, allowing me to adapt quickly to changing requirements and deliver results with precision. My ability to multitask effectively enables me to tackle complex projects while maintaining a keen eye for detail. 🌐 I'm enthusiastic about staying up-to-date with the ever-evolving tech landscape, which empowers me to create innovative and scalable solutions. I'm a firm believer in continuous learning, and I'm always excited to take on new challenges.Looking forward to connecting with like-minded professionals and sharing insights into the world of software engineering!`)
    },
    experience: (term) => {
      term.writeln('I have 3 years of experience in software development.')
      const experience = ["Swynfords","ZaigoInfotech"]
      for (let index = 0; index < experience.length; index++) {
        const element = experience[index];
        term.writeln(`${index + 1} - ${element} Pvt Ltd, about known company details please type 'experience ${element}'`)
      }
    },
    skills: (term) => {
      let skill_list = ["Python","Django","Django Restframework","Flask", "Celery","Redis", "Web Scrapping","Thread","Pool of Threads","Cron job", "PostgreSQL","MySQL","Work bench", "Jira Software", "Bitbucket", "Git And GitHub","Postman", "Docker","Figma","HTML 5","CSS", "Bootstrap", "JavaScript", "Ajax", "Axios","Javascript","JQuery","Cron Job","Bootstrap","Software Developement","agile methodology","Microservice Architecture","Api Development","Pandas","debugging","Problem Solver","JWT Authentication"]
      for (let index = 0; index < skill_list.length; index++) {
        const element = skill_list[index];
        term.writeln(`${index + 1} - ${element}`)
      }
    },
    // projects: (term) => {
    //   term.writeln('I have worked on several projects, including a web scraper and a chatbot.')
    // },
    // project: (term, args) => {
    //   if (args.length === 0) {
    //     term.writeln('Please specify a project name.')
    //   } else {
    //     const projectName = args[0]
    //     if (projectName === 'web-scraper') {
    //       term.writeln('This is a web scraper project that extracts data from websites.')
    //     } else if (projectName === 'chatbot') {
    //       term.writeln('This is a chatbot project that uses natural language processing to respond to user queries.')
    //     } else {
    //       term.writeln('Project not found.')
    //     }
    //   }
    // },
    github: (term) => {
      term.writeln('https://github.com/muhammedrahil')
    },
    linkedin: (term) => {
      term.writeln('https://www.linkedin.com/in/muhammed-rahil-m-a22a03264/')
    },
    stackoverflow: (term) => {
      term.writeln('https://stackoverflow.com/users/26818017/muhammed-rahil-m')
    },
    packages: (term) => {
      term.writeln('I have created several Python packages')
      let package_list = ["cloudspark","threadyq"]
      for (let index = 0; index < package_list.length; index++) {
        const element = package_list[index];
        term.writeln(`${index + 1} - ${element}`)
      }
    },
    'packages <package_name>': (args) => {
      if (args.length === 0) {
        term.writeln('Please specify a package name.')
      } else {
        const packageName = args[0]
        if (packageName === 'data-analysis') {
          term.writeln('This is a package for data analysis that provides functions for data cleaning and visualization.')
        } else {
          term.writeln('Package not found.')
        }
      }
    },
    experiences: (term) => {
      term.writeln('I have worked at several companies, including ABC Corporation and DEF Inc.')
    },
    'experiences <company_name>': (args) => {
      if (args.length === 0) {
        term.writeln('Please specify a company name.')
      } else {
        const companyName = args[0]
        if (companyName === 'ABC Corporation') {
          term.writeln('I worked at ABC Corporation as a software developer for 2 years.')
        } else if (companyName === 'DEF Inc') {
          term.writeln('I worked at DEF Inc as a software developer for 3 years.')
        } else {
          term.writeln('Company not found.')
        }
      }
    },
    contact: (term) => {
      term.writeln('You can contact me at muhammedrahilm@gmail.com or +91 1234567890.')
    },
    education: (term) => {
      term.writeln('I have a Bachelor\'s degree in Computer Science from XYZ University.')
    },
    certifications: (term) => {
      term.writeln('I have several certifications, including a certification in data science.')
    },
    languages: (term) => {
      term.writeln('I am proficient in several programming languages, including JavaScript, Python, and Java.')
    },
    frameworks: (term) => {
      term.writeln('I have experience with several frameworks, including React and Django.')
    },
    databases: (term) => {
      term.writeln('I have experience with several databases, including MySQL and MongoDB.')
    },
    operatingsystems: (term) => {
      term.writeln('I have experience with several operating systems, including Windows, macOS, and Linux.')
    },
    achievements: (term) => {
      term.writeln('I have several achievements, including winning a hackathon and publishing a research paper.')
    },
    awards: (term) => {
      term.writeln('I have received several awards, including a best paper award and a best project award.')
    },
    publications: (term) => {
      term.writeln('I have published several research papers, including a paper on machine learning and a paper on data science.')
    },
    presentations: (term) => {
      term.writeln('I have given several presentations, including a presentation on artificial intelligence and a presentation on cybersecurity.')
    },
    volunteer: (term) => {
      term.writeln('I have volunteered for several organizations, including a non-profit organization and a community group.')
    },
    hobbies: (term) => {
      term.writeln('I have several hobbies, including reading, writing, and coding.')
    },
    interests: (term) => {
      term.writeln('I am interested in several topics, including artificial intelligence, machine learning, and data science.')
    },
    goals: (term) => {
      term.writeln('I have several career goals, including becoming a lead developer and starting my own company.')
    },
    resume: (term) => {
      term.writeln('You can view my resume at https://example.com/resume')
    },
    portfolio: (term) => {
      term.writeln('You can view my portfolio at https://example.com/portfolio')
    },
    blog: (term) => {
      term.writeln('You can view my blog at https://example.com/blog')
    },
    socialmedia: (term) => {
      term.writeln('You can find me on social media at https://example.com/socialmedia')
    },
    email: (term) => {
      term.writeln('You can contact me at muhammedrahilm@gmail.com')
    },
    phone: (term) => {
      term.writeln('You can contact me at +91 1234567890')
    },
    location: (term) => {
      term.writeln('I am located in Madathingal (House), South Puthalam, Areecode, Malappuram, Kerala, India')
    },
    timezone: (term) => {
      term.writeln('I am in the UTC+5:30 timezone')
    },
    availability: (term) => {
      term.writeln('I am available from 9am to 5pm, Monday to Friday')
    },
    services: (term) => {
      term.writeln('I offer several services, including software development, data analysis, and cybersecurity consulting')
    },
    rates: (term) => {
      term.writeln('My rates are competitive and vary depending on the project')
    },
    testimonials: (term) => {
      term.writeln('I have received several testimonials from satisfied clients')
    },
    clients: (term) => {
      term.writeln('I have worked with several clients, including ABC Corporation and DEF Inc')
    },
    partners: (term) => {
      term.writeln('I have partnered with several companies, including XYZ Inc and ABC Corp')
    },
    network: (term) => {
      term.writeln('I have a strong network of professionals in the industry')
    },
    recommendations: (term) => {
      term.writeln('I have received several recommendations from satisfied clients and partners')
    },
  }

export default commands;
