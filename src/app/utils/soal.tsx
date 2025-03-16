const questions = [
    {
      question: "What is an organization in Sitecore XM Cloud?",
      options: [
        "A) A logical grouping of XM Cloud environments",
        "B) A business unit that manages team members and Sitecore products",
        "C) A collection of components and renderings",
        "D) A GraphQL API-based service endpoint"
      ],
      correct: "B) A business unit that manages team members and Sitecore products"
    },
    {
      question: "What tool is used to create and manage XM Cloud projects?",
      options: [
        "A) Experience Edge",
        "B) Content Editor",
        "C) Deploy app",
        "D) Cloud Portal"
      ],
      correct: "C) Deploy app"
    },
    {
      question: "Which of the following is NOT included in an XM Cloud environment?",
      options: [
        "A) Content Management (CM) instance",
        "B) Rendering hosts",
        "C) Machine Learning models",
        "D) Environment variables"
      ],
      correct: "C) Machine Learning models"
    },
    {
      question: "What is the main purpose of the Content Management (CM) instance?",
      options: [
        "A) To store and serve user analytics",
        "B) To create, store, and manage site content",
        "C) To manage environment variables",
        "D) To monitor the Sitecore Cloud Portal"
      ],
      correct: "B) To create, store, and manage site content"
    },
    {
      question: "What does a project in XM Cloud contain?",
      options: [
        "A) Multiple organizations",
        "B) A logical grouping of environments",
        "C) Only production environments",
        "D) A set of environment variables"
      ],
      correct: "B) A logical grouping of environments"
    },
    {
      question: "What is the function of Experience Edge in XM Cloud?",
      options: [
        "A) It manages environment deployments",
        "B) It handles user authentication",
        "C) It retrieves content using GraphQL and distributes it via a CDN",
        "D) It controls access to the Cloud Portal"
      ],
      correct: "C) It retrieves content using GraphQL and distributes it via a CDN"
    },
    {
      question: "What are renderings used for in XM Cloud?",
      options: [
        "A) Managing user permissions",
        "B) Storing and managing environment variables",
        "C) Defining individual components in the headless application",
        "D) Configuring the Cloud Portal"
      ],
      correct: "C) Defining individual components in the headless application"
    },
    {
      question: "What is a rendering variant?",
      options: [
        "A) A predefined environment configuration",
        "B) A variation of a rendering to display data differently",
        "C) An instance of the Content Management system",
        "D) A Sitecore Cloud Portal feature"
      ],
      correct: "B) A variation of a rendering to display data differently"
    },
    {
      question: "What is a data source in XM Cloud?",
      options: [
        "A) The location of environment variables",
        "B) The main interface for project management",
        "C) Content managed outside a specific component and called at runtime",
        "D) A storage location for rendering definitions"
      ],
      correct: "C) Content managed outside a specific component and called at runtime"
    },
    {
      question: "What is the purpose of the Sitecore Cloud Portal?",
      options: [
        "A) Managing external APIs",
        "B) Providing analytics and reporting",
        "C) Centralizing access to Sitecore DXP products and managing users",
        "D) Handling rendering configurations"
      ],
      correct: "C) Centralizing access to Sitecore DXP products and managing users"
    },
    {
      question: "What is the XM Cloud starter kit?",
      options: [
        "A) A cloud-based analytics tool",
        "B) A code base to kickstart XM Cloud implementations",
        "C) A data source for external APIs",
        "D) A rendering configuration tool"
      ],
      correct: "B) A code base to kickstart XM Cloud implementations"
    },
    {
      question: "What are environment variables used for in XM Cloud?",
      options: [
        "A) Managing user permissions",
        "B) Storing key-value pairs for environment configuration",
        "C) Controlling Cloud Portal access",
        "D) Handling content translation"
      ],
      correct: "B) Storing key-value pairs for environment configuration"
    },
    {
      question: "What are system environment variables?",
      options: [
        "A) User-defined key-value pairs",
        "B) Custom fields for renderings",
        "C) Core settings that control the XM Cloud environment",
        "D) Project-level identifiers"
      ],
      correct: "C) Core settings that control the XM Cloud environment"
    },
    {
      question: "Which of the following is a user-controlled environment variable?",
      options: [
        "A) System-level identifiers",
        "B) Core configuration files",
        "C) Predefined variables that users can modify",
        "D) GraphQL endpoints"
      ],
      correct: "C) Predefined variables that users can modify"
    },
    {
      question: "What is the role of the rendering host?",
      options: [
        "A) To store user analytics",
        "B) To render dynamic pages and interact with the CM instance",
        "C) To manage access to Sitecore DXP products",
        "D) To handle API requests"
      ],
      correct: "B) To render dynamic pages and interact with the CM instance"
    },
    {
      question: "What is a site collection?",
      options: [
        "A) A group of renderings",
        "B) A logical grouping of environments",
        "C) A parent item that groups related sites for content sharing",
        "D) A Cloud Portal access control feature"
      ],
      correct: "C) A parent item that groups related sites for content sharing"
    },
    {
      question: "What is a standard template in XM Cloud?",
      options: [
        "A) A core rendering definition",
        "B) The default base template from which others inherit",
        "C) A project-level environment variable",
        "D) An external data source"
      ],
      correct: "B) The default base template from which others inherit"
    },
    {
      question: "What does the Deploy app do after creating a project?",
      options: [
        "A) Monitors user interactions",
        "B) Generates environment variables",
        "C) Executes the provision, build, and deploy processes",
        "D) Manages Cloud Portal permissions"
      ],
      correct: "C) Executes the provision, build, and deploy processes"
    },
    {
      question: "What type of data is stored in a field?",
      options: [
        "A) User permissions",
        "B) Environment configurations",
        "C) Data about an item, such as text, numbers, or links",
        "D) Sitecore templates"
      ],
      correct: "C) Data about an item, such as text, numbers, or links"
    },
    {
      question: "What is a rendering definition?",
      options: [
        "A) A parent item for grouping sites",
        "B) A reference to a rendering parameter template",
        "C) An API endpoint for GraphQL",
        "D) A user access control system"
      ],
      correct: "B) A reference to a rendering parameter template"
    },
    {
      question: "Which of the following describes an internal data source?",
      options: [
        "A) Data stored in external databases",
        "B) Data created and managed within XM Cloud",
        "C) Data shared across multiple organizations",
        "D) Data retrieved from Experience Edge"
      ],
      correct: "B) Data created and managed within XM Cloud"
    },
    {
      question: "What does a dynamic component do?",
      options: [
        "A) Statically display content",
        "B) Handle external API calls",
        "C) Adapt its presentation or behavior based on user interactions",
        "D) Manage system-level variables"
      ],
      correct: "C) Adapt its presentation or behavior based on user interactions"
    }
  ];
  
  export default questions;
  