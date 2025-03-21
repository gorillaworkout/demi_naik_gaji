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
    },
    // competency 2
    {
      "question": "What is the purpose of the Sitecore XM Cloud Deploy app?",
      "options": [
        "A) To create and manage XM Cloud projects and environments",
        "B) To provide a cloud-based CDN for content delivery",
        "C) To manage Sitecore licensing and user authentication",
        "D) To serve as a front-end framework for building Sitecore components"
      ],
      "correct": "A) To create and manage XM Cloud projects and environments"
    },
    {
      "question": "Which of the following best describes an XM Cloud project?",
      "options": [
        "A) A logical grouping of XM Cloud environments",
        "B) A single instance of Sitecore XM Cloud",
        "C) A local development setup for Sitecore applications",
        "D) A standalone headless CMS"
      ],
      "correct": "A) A logical grouping of XM Cloud environments"
    },
    {
      "question": "What is an XM Cloud environment?",
      "options": [
        "A) A collection of reusable Sitecore components",
        "B) An isolated instance within an XM Cloud project",
        "C) A Sitecore package used to deploy projects",
        "D) A headless rendering host for Sitecore JSS applications"
      ],
      "correct": "B) An isolated instance within an XM Cloud project"
    },
    {
      "question": "What is the primary purpose of the Starter Foundation Template?",
      "options": [
        "A) To provide a pre-configured codebase for XM Cloud development",
        "B) To host Sitecore projects in a local environment",
        "C) To replace Sitecore Experience Edge",
        "D) To manage Sitecore authentication services"
      ],
      "correct": "A) To provide a pre-configured codebase for XM Cloud development"
    },
    {
      "question": "Which software component is NOT required for running the XM Cloud Foundation Template locally?",
      "options": [
        "A) .NET Core 6.0 SDK",
        "B) Node.js (LTS version)",
        "C) Windows PowerShell",
        "D) Kubernetes"
      ],
      "correct": "D) Kubernetes"
    },
    {
      "question": "What is the role of Experience Edge in XM Cloud?",
      "options": [
        "A) It provides a global CDN for content delivery",
        "B) It is a Sitecore JSS rendering engine",
        "C) It serves as the local development environment for XM Cloud",
        "D) It replaces the need for a Content Management instance"
      ],
      "correct": "A) It provides a global CDN for content delivery"
    },
    {
      "question": "What is the purpose of the Sitecore CLI in XM Cloud development?",
      "options": [
        "A) To interact with Sitecore instances using terminal commands",
        "B) To replace the need for Sitecore Content Editor",
        "C) To deploy front-end applications directly to Experience Edge",
        "D) To provide a visual interface for managing Sitecore users"
      ],
      "correct": "A) To interact with Sitecore instances using terminal commands"
    },
    {
      "question": "Which statement about the local development setup for XM Cloud is true?",
      "options": [
        "A) It requires Docker with Windows Containers enabled",
        "B) It does not require environment variables",
        "C) It cannot connect to the remote XM Cloud preview",
        "D) It only supports JavaScript-based applications"
      ],
      "correct": "A) It requires Docker with Windows Containers enabled"
    },
    {
      "question": "What is the primary role of the authoring environment in XM Cloud?",
      "options": [
        "A) To provide a backend interface for content creation and management",
        "B) To render the front-end website components",
        "C) To store static assets for the website",
        "D) To host Sitecore’s Experience Edge API"
      ],
      "correct": "A) To provide a backend interface for content creation and management"
    },
    {
      "question": "Which command is used to initialize the local XM Cloud development environment?",
      "options": [
        "A) ./init.ps1 -InitEnv",
        "B) npm run start:connected",
        "C) docker-compose up",
        "D) sitecore-cli deploy"
      ],
      "correct": "A) ./init.ps1 -InitEnv"
    },
    {
      "question": "What happens when a new project is created in the XM Cloud Deploy app?",
      "options": [
        "A) It automatically provisions an environment and runs an initial deployment",
        "B) It installs Sitecore locally on the developer’s machine",
        "C) It generates a static site using Next.js",
        "D) It replaces the need for source control repositories"
      ],
      "correct": "A) It automatically provisions an environment and runs an initial deployment"
    },
    {
      "question": "How does a front-end developer work with XM Cloud using a 'FED-first' approach?",
      "options": [
        "A) By connecting a local Next.js project to XM Cloud for real-time content updates",
        "B) By developing components exclusively using Sitecore Content Editor",
        "C) By creating content models before writing any code",
        "D) By using Docker to containerize the entire Sitecore environment"
      ],
      "correct": "A) By connecting a local Next.js project to XM Cloud for real-time content updates"
    },
    {
      "question": "Which command is used to start the local Next.js site connected to XM Cloud?",
      "options": [
        "A) npm run start:connected",
        "B) sitecore-cli start",
        "C) docker run sitecore/xmcloud",
        "D) yarn build && yarn serve"
      ],
      "correct": "A) npm run start:connected"
    },
    {
      "question": "What is the purpose of the 'Available Renderings' setting in XM Cloud?",
      "options": [
        "A) To define which components can be used within a site’s pages",
        "B) To enable component caching for improved performance",
        "C) To manage user roles and permissions",
        "D) To store JSON data for headless applications"
      ],
      "correct": "A) To define which components can be used within a site’s pages"
    },
    {
      "question": "What is required to connect a local XM Cloud project to a remote XM Cloud environment?",
      "options": [
        "A) Copying the environment variables from the Deploy app to the .env.local file",
        "B) Running the Sitecore Experience Editor inside a Docker container",
        "C) Cloning the Experience Edge repository",
        "D) Installing Kubernetes and Helm charts"
      ],
      "correct": "A) Copying the environment variables from the Deploy app to the .env.local file"
    },
    {
      "question": "What is the first step to creating a site in XM Cloud?",
      "options": [
        "A) Installing Node.js",
        "B) Opening the Deploy app and navigating to XM Cloud",
        "C) Cloning the environment repository",
        "D) Creating a new component"
      ],
      "correct": "B) Opening the Deploy app and navigating to XM Cloud"
    },
    {
      "question": "What is the purpose of a collection when creating a site in XM Cloud?",
      "options": [
        "A) It defines the available components in a site",
        "B) It groups sites according to a theme",
        "C) It sets up the database structure for the site",
        "D) It determines the site's default language"
      ],
      "correct": "B) It groups sites according to a theme"
    },
    {
      "question": "What happens automatically when you create a new collection in XM Cloud?",
      "options": [
        "A) A default page is generated",
        "B) A headless module with the same name is created",
        "C) A database instance is assigned",
        "D) The site is published immediately"
      ],
      "correct": "B) A headless module with the same name is created"
    },
    {
      "question": "Which component is used to add content to a newly created page in XM Cloud?",
      "options": [
        "A) Page Content",
        "B) Site Layout",
        "C) Component Wrapper",
        "D) Content Block"
      ],
      "correct": "A) Page Content"
    },
    {
      "question": "Which command is used to clone an environment repository in XM Cloud?",
      "options": [
        "A) npm install",
        "B) git clone",
        "C) npm run start",
        "D) node setup.js"
      ],
      "correct": "B) git clone"
    },
    {
      "question": "Where do you set the environment variables for a local development setup in XM Cloud?",
      "options": [
        "A) In the .env.local file",
        "B) In the package.json file",
        "C) In the Deploy app settings",
        "D) In the Next.js configuration"
      ],
      "correct": "A) In the .env.local file"
    },
    {
      "question": "What command is used to install the required packages in the local development setup?",
      "options": [
        "A) npm run start",
        "B) npm update",
        "C) npm install",
        "D) node setup.js"
      ],
      "correct": "C) npm install"
    },
    {
      "question": "Which URL should you visit to preview your locally running XM Cloud project?",
      "options": [
        "A) http://localhost:8000",
        "B) http://127.0.0.1:5000",
        "C) http://localhost:3000",
        "D) http://sitecore.local"
      ],
      "correct": "C) http://localhost:3000"
    },
    {
      "question": "What approach does XM Cloud use for setting up local development?",
      "options": [
        "A) Front-End Development (FED) first",
        "B) Back-End Development first",
        "C) Database-first approach",
        "D) Docker-based full-stack approach only"
      ],
      "correct": "A) Front-End Development (FED) first"
    },
    {
      "question": "What is the recommended Node.js version for XM Cloud development?",
      "options": [
        "A) Any version of Node.js",
        "B) The latest LTS version",
        "C) Node.js version 10 or earlier",
        "D) Version 8 with Docker support"
      ],
      "correct": "B) The latest LTS version"
    },
    {
      "question": "What is the purpose of the `rendering` property in an XM Cloud component?",
      "options": [
        "A) It defines the component’s appearance and data",
        "B) It specifies the site's navigation structure",
        "C) It stores database queries for content retrieval",
        "D) It is used for setting up authentication"
      ],
      "correct": "A) It defines the component’s appearance and data"
    },
    {
      "question": "Which of the following parameters is used to apply CSS classes to an XM Cloud component?",
      "options": [
        "A) Styles",
        "B) GridParameters",
        "C) RenderingIdentifier",
        "D) ComponentID"
      ],
      "correct": "A) Styles"
    },
    {
      "question": "How do you create a new component in XM Cloud?",
      "options": [
        "A) Modify the `site.config.js` file",
        "B) Create a new `.tsx` file in the components folder",
        "C) Use the XM Cloud interface to generate the component",
        "D) Run the `npm create-component` command"
      ],
      "correct": "B) Create a new `.tsx` file in the components folder"
    },
    {
      "question": "What is the purpose of the `RenderingIdentifier` parameter in an XM Cloud component?",
      "options": [
        "A) To apply custom CSS styles",
        "B) To link the component with analytics tracking",
        "C) To define the content hierarchy",
        "D) To set the default language"
      ],
      "correct": "B) To link the component with analytics tracking"
    },
    {
      "question": "What happens when you push a new component to your XM Cloud repository?",
      "options": [
        "A) It automatically deploys to XM Cloud",
        "B) It needs manual deployment",
        "C) It overwrites the previous component",
        "D) It creates a staging branch"
      ],
      "correct": "A) It automatically deploys to XM Cloud"
    },
    {
      "question": "What is the purpose of rendering definitions in XM Cloud?",
      "options": [
        "A) To define where the component's .tsx file is located",
        "B) To specify the data required for rendering the component",
        "C) To automatically generate required items for a component",
        "D) All of the above"
      ],
      "correct": "D) All of the above"
    },
    {
      "question": "What should you do to ensure a cloned rendering is visible in Pages?",
      "options": [
        "A) Set the Editable checkbox in the Customize Page section",
        "B) Change its file extension to .jsx",
        "C) Modify the component’s CSS",
        "D) Manually deploy it to the environment"
      ],
      "correct": "A) Set the Editable checkbox in the Customize Page section"
    },
    {
      "question": "Which step is required when adding a new component to a site page in XM Cloud?",
      "options": [
        "A) Run 'npm run build' before deploying",
        "B) Drag the component from the Components tab onto the page",
        "C) Manually edit the component’s HTML structure",
        "D) Update the database with new component data"
      ],
      "correct": "B) Drag the component from the Components tab onto the page"
    },
    {
      "question": "What happens when you push a new component to your XM Cloud repository?",
      "options": [
        "A) It automatically deploys to XM Cloud",
        "B) It needs manual deployment",
        "C) It overwrites the previous component",
        "D) It creates a staging branch"
      ],
      "correct": "A) It automatically deploys to XM Cloud"
    },
    {
      "question": "What must be done after creating a rendering clone?",
      "options": [
        "A) Modify the rendering’s parameters to reduce dependencies",
        "B) Change the component’s name in the project directory",
        "C) Restart the development server",
        "D) Delete the original rendering"
      ],
      "correct": "A) Modify the rendering’s parameters to reduce dependencies"
    },
    {
      "question": "How can you change the repository linked to an XM Cloud project?",
      "options": [
        "A) Go to 'Projects' and select 'Edit project' under 'Options'",
        "B) Delete the project and create a new one with the desired repository",
        "C) Modify the repository URL in the deployment settings",
        "D) Clone the repository locally and push it to the new repository"
      ],
      "correct": "A) Go to 'Projects' and select 'Edit project' under 'Options'"
    },
    {
      "question": "What is the maximum number of non-production environments allowed in an XM Cloud project by default?",
      "options": [
        "A) One",
        "B) Two",
        "C) Three",
        "D) Four"
      ],
      "correct": "B) Two"
    },
    {
      "question": "Which step is necessary to restart an environment in XM Cloud?",
      "options": [
        "A) Click 'Actions' and select 'Restart environment' in the project settings",
        "B) Delete the environment and create a new one",
        "C) Push an empty commit to the repository",
        "D) Rebuild the project from the CLI"
      ],
      "correct": "A) Click 'Actions' and select 'Restart environment' in the project settings"
    },
    {
      "question": "What must be done to deploy a new build to an environment?",
      "options": [
        "A) Click 'Actions' and select 'Build and deploy'",
        "B) Re-run 'npm install' in the local development environment",
        "C) Restart the entire XM Cloud project",
        "D) Delete previous deployments manually"
      ],
      "correct": "A) Click 'Actions' and select 'Build and deploy'"
    },
    {
      "question": "How do you make a new component available in XM Cloud Pages?",
      "options": [
        "A) Add it to 'Available Renderings' in the Content Editor",
        "B) Modify the JavaScript code to include a global function",
        "C) Manually edit the component’s CSS",
        "D) Push the component to a separate repository"
      ],
      "correct": "A) Add it to 'Available Renderings' in the Content Editor'"
    },
    // Competency 3
    {
      "question": "How do you create a new component in the Components library?",
      "options": [
        "A) Click 'Add component' in the library",
        "B) Edit an existing component",
        "C) Manually upload a component file",
        "D) Drag and drop a component from another project"
      ],
      "correct": "A) Click 'Add component' in the library"
    },
    {
      "question": "What happens when you duplicate a component?",
      "options": [
        "A) It creates a new component with no versions",
        "B) It copies the component along with all versions and responsive bundles",
        "C) It merges the component with an existing one",
        "D) It only copies the component’s metadata"
      ],
      "correct": "B) It copies the component along with all versions and responsive bundles"
    },
    {
      "question": "Which of the following is required to delete a component permanently?",
      "options": [
        "A) It must have at least one published version",
        "B) It must be in the archived state",
        "C) All its versions must be in draft state",
        "D) It must be duplicated first"
      ],
      "correct": "C) All its versions must be in draft state"
    },
    {
      "question": "How can you move a component to another collection?",
      "options": [
        "A) Click 'Edit component' and select a different collection",
        "B) Drag and drop the component into another collection",
        "C) Delete the component and recreate it in the desired collection",
        "D) Export the component and import it into the new collection"
      ],
      "correct": "A) Click 'Edit component' and select a different collection"
    },
    {
      "question": "What is a page design used for in Sitecore?",
      "options": [
        "A) To create a preset layout structure for pages",
        "B) To manage user permissions",
        "C) To store unpublished content",
        "D) To delete components"
      ],
      "correct": "A) To create a preset layout structure for pages"
    },
    {
      "question": "Which tool can be used to create a page design?",
      "options": [
        "A) Content Editor",
        "B) Experience Editor",
        "C) Both A and B",
        "D) Neither A nor B"
      ],
      "correct": "C) Both A and B"
    },
    {
      "question": "How do you update the signature of a partial design?",
      "options": [
        "A) Change the 'Signature' field in the partial design properties",
        "B) Modify the placeholder name in the component properties",
        "C) Delete the partial design and recreate it",
        "D) Only A and B"
      ],
      "correct": "D) Only A and B"
    },
    {
      "question": "What is the purpose of a base partial design?",
      "options": [
        "A) To create reusable layouts with common elements",
        "B) To store unpublished page versions",
        "C) To manage user roles",
        "D) To enable file uploads"
      ],
      "correct": "A) To create reusable layouts with common elements"
    },
    {
      "question": "How do you assign a page design to a template?",
      "options": [
        "A) In the Experience Accelerator tab, click 'Site Page Designs' and assign a design",
        "B) Manually edit the page HTML",
        "C) Modify the CSS file of the page",
        "D) Copy and paste elements from another page"
      ],
      "correct": "A) In the Experience Accelerator tab, click 'Site Page Designs' and assign a design"
    },
    {
      "question": "What is the best way to ensure headers and footers remain consistent across pages?",
      "options": [
        "A) Use a page design that includes them",
        "B) Manually add them to each page",
        "C) Duplicate pages to keep the same structure",
        "D) Save them as an image and insert them into each page"
      ],
      "correct": "A) Use a page design that includes them"
    },
    {
      "question": "How do you create a new component in the Components library?",
      "options": [
        "A) Click 'Add component' in the library",
        "B) Edit an existing component",
        "C) Manually upload a component file",
        "D) Drag and drop a component from another project"
      ],
      "correct": "A) Click 'Add component' in the library"
    },
    {
      "question": "What is the purpose of a partial design in the Experience Editor?",
      "options": [
        "A) To update text and add renderings that apply to multiple pages",
        "B) To create a standalone page layout",
        "C) To store page metadata",
        "D) To edit content in a single page only"
      ],
      "correct": "A) To update text and add renderings that apply to multiple pages"
    },
    {
      "question": "How do you change a partial design in the Experience Editor?",
      "options": [
        "A) Edit the HTML code directly",
        "B) Click 'Partial Design' on the Experience Accelerator tab and make changes",
        "C) Create a new page design",
        "D) Modify the CSS styles in the theme"
      ],
      "correct": "B) Click 'Partial Design' on the Experience Accelerator tab and make changes"
    },
    {
      "question": "Which method has the highest precedence when assigning a page design?",
      "options": [
        "A) Page design selected on a page level",
        "B) Rules defined for the site",
        "C) Page Design to Template Mapping",
        "D) Page layout inheritance"
      ],
      "correct": "A) Page design selected on a page level"
    },
    {
      "question": "Where do you navigate to in order to create a rule to set a page design?",
      "options": [
        "A) sitecore/Content/<site collection>/<site>/Presentation/Page Designs",
        "B) sitecore/Content/<site>/Page Rules",
        "C) sitecore/Layout/Page Design Rules",
        "D) sitecore/Content/<site>/Theme Editor"
      ],
      "correct": "A) sitecore/Content/<site collection>/<site>/Presentation/Page Designs"
    },
    {
      "question": "What condition can be used in a rule to assign a page design?",
      "options": [
        "A) The title field is empty",
        "B) The page is visited more than 100 times",
        "C) The user has admin privileges",
        "D) The page contains an image"
      ],
      "correct": "A) The title field is empty"
    },
    {
      "question": "How do you change the order of component categories in the toolbox?",
      "options": [
        "A) Reorganize items under Available Renderings",
        "B) Drag and drop categories in the Experience Editor",
        "C) Rename the categories in the system settings",
        "D) Update the component order in the Theme Editor"
      ],
      "correct": "A) Reorganize items under Available Renderings"
    },
    {
      "question": "What is the benefit of restructuring components in the Experience Editor?",
      "options": [
        "A) To organize frequently used components for easier access",
        "B) To make components load faster",
        "C) To lock component layouts",
        "D) To prevent users from adding new components"
      ],
      "correct": "A) To organize frequently used components for easier access"
    },
    {
      "question": "How do you add a custom category and components in the Experience Editor?",
      "options": [
        "A) Right-click 'Available Renderings', insert a new category, and add components",
        "B) Modify the Experience Editor source code",
        "C) Use a custom CSS class for the category",
        "D) Rename an existing category"
      ],
      "correct": "A) Right-click 'Available Renderings', insert a new category, and add components"
    },
    {
      "question": "Which of the following is NOT a way to apply a page design?",
      "options": [
        "A) Selecting a page design on a page level",
        "B) Defining rules for site-wide page design selection",
        "C) Mapping a page design to a content template",
        "D) Adding custom CSS to override the design"
      ],
      "correct": "D) Adding custom CSS to override the design"
    },
    {
      "question": "Which of the following is the purpose of cloning an SXA rendering?",
      "options": [
        "A) To delete an existing rendering",
        "B) To create an exact copy with a different name and styling",
        "C) To remove styling from an existing rendering",
        "D) To create a backup of the Sitecore system"
      ],
      "correct": "B) To create an exact copy with a different name and styling"
    },
    {
      "question": "Why is it recommended to create a separate toolbox section for derivative renderings?",
      "options": [
        "A) To avoid conflicts with standard SXA toolbox updates",
        "B) To make the rendering load faster",
        "C) To improve the rendering's visual appearance",
        "D) To prevent unauthorized users from accessing the rendering"
      ],
      "correct": "A) To avoid conflicts with standard SXA toolbox updates"
    },
    {
      "question": "What is the function of the 'Rendering Parameters' tab when cloning a rendering?",
      "options": [
        "A) It allows setting the rendering's CSS class",
        "B) It determines how the rendering parameters are inherited or copied",
        "C) It specifies where the rendering should be displayed",
        "D) It defines the module to which the rendering belongs"
      ],
      "correct": "B) It determines how the rendering parameters are inherited or copied"
    },
    {
      "question": "Which of the following options allows the most flexibility when modifying an SXA rendering's view?",
      "options": [
        "A) Use original MVC view file",
        "B) Copy MVC view file (specify path below)",
        "C) Select existing MVC view file (specify path below)",
        "D) Disable the MVC view file"
      ],
      "correct": "B) Copy MVC view file (specify path below)"
    },
    {
      "question": "What is the main purpose of dynamic placeholders in Sitecore SXA?",
      "options": [
        "A) To generate unique placeholder keys for components dynamically",
        "B) To remove placeholders from a rendering",
        "C) To prevent components from being nested within each other",
        "D) To limit the number of placeholders in a rendering"
      ],
      "correct": "A) To generate unique placeholder keys for components dynamically"
    },
    {
      "question": "Which property must be added to a component to enable dynamic placeholders?",
      "options": [
        "A) DynamicPlaceholderID",
        "B) EnableDynamicPlaceholders",
        "C) IsRenderingsWithDynamicPlaceholders",
        "D) ComponentPlaceholderKey"
      ],
      "correct": "C) IsRenderingsWithDynamicPlaceholders"
    },
    {
      "question": "When defining a placeholder key for dynamic placeholders, what symbol is used to create unique identifiers?",
      "options": [
        "A) #",
        "B) *",
        "C) {}",
        "D) $"
      ],
      "correct": "C) {}"
    },
    {
      "question": "What is the main benefit of registering an external React component in XM Cloud?",
      "options": [
        "A) It allows components to be reused within XM Cloud Pages",
        "B) It enables non-developers to write custom JavaScript code",
        "C) It prevents the use of SXA components",
        "D) It restricts styling customization"
      ],
      "correct": "A) It allows components to be reused within XM Cloud Pages"
    },
    {
      "question": "Where should the external React component code be hosted before it can be used in XM Cloud?",
      "options": [
        "A) On any Sitecore instance",
        "B) On an accessible rendering host URL",
        "C) In a local JSS folder",
        "D) Inside the Sitecore Experience Editor"
      ],
      "correct": "B) On an accessible rendering host URL"
    },
    {
      "question": "What is a key advantage of using SXA components in Sitecore XM Cloud?",
      "options": [
        "A) They provide built-in support for content variants",
        "B) They require manual HTML and JavaScript coding for every component",
        "C) They cannot be modified after deployment",
        "D) They only work in a headless setup"
      ],
      "correct": "A) They provide built-in support for content variants"
    },
    // competency 4
    {
      "question": "What is the purpose of Sitecore Content Serialization (SCS)?",
      "options": [
        "A) To manage and deploy Sitecore configurations",
        "B) To serialize and version control Sitecore content items",
        "C) To create custom Sitecore templates",
        "D) To build Sitecore layouts"
      ],
      "correct": "B) To serialize and version control Sitecore content items"
    },
    {
      "question": "Which command is used to validate serialized content items?",
      "options": [
        "A) sitecore ser check",
        "B) sitecore ser inspect",
        "C) sitecore ser validate",
        "D) sitecore ser verify"
      ],
      "correct": "C) sitecore ser validate"
    },
    {
      "question": "What does the `allowedPushOperations` property define?",
      "options": [
        "A) How content items are pushed to Sitecore",
        "B) The maximum path length for serialization",
        "C) The security level for serialization commands",
        "D) The order of serialization"
      ],
      "correct": "A) How content items are pushed to Sitecore"
    },
    {
      "question": "Which `allowedPushOperations` value enables creating, updating, and deleting items?",
      "options": [
        "A) CreateOnly",
        "B) CreateAndUpdate",
        "C) CreateUpdateAndDelete",
        "D) DeleteOnly"
      ],
      "correct": "C) CreateUpdateAndDelete"
    },
    {
      "question": "What does the `scope` property configure?",
      "options": [
        "A) The database used for serialization",
        "B) The content items affected by serialization",
        "C) The serialization file format",
        "D) The file path of serialized items"
      ],
      "correct": "B) The content items affected by serialization"
    },
    {
      "question": "Which scope value only serializes the specified item?",
      "options": [
        "A) ItemAndChildren",
        "B) ItemAndDescendants",
        "C) SingleItem",
        "D) DescendantsOnly"
      ],
      "correct": "C) SingleItem"
    },
    {
      "question": "Which scope option includes the item and all its descendants?",
      "options": [
        "A) ItemAndChildren",
        "B) SingleItem",
        "C) ItemAndDescendants",
        "D) Ignored"
      ],
      "correct": "C) ItemAndDescendants"
    },
    {
      "question": "Which command creates an SCS package?",
      "options": [
        "A) dotnet sitecore ser pkg build",
        "B) dotnet sitecore ser pkg generate",
        "C) dotnet sitecore ser pkg create",
        "D) dotnet sitecore ser pkg init"
      ],
      "correct": "C) dotnet sitecore ser pkg create"
    },
    {
      "question": "What is the default database for Sitecore Content Serialization?",
      "options": [
        "A) core",
        "B) web",
        "C) master",
        "D) archive"
      ],
      "correct": "C) master"
    },
    {
      "question": "How can you manually fix validation errors in serialized content?",
      "options": [
        "A) By running `sitecore ser validate --fix`",
        "B) By deleting and reserializing content",
        "C) By restarting the Sitecore instance",
        "D) By editing the JSON configuration manually"
      ],
      "correct": "A) By running `sitecore ser validate --fix`"
    },
    {
      "question": "Which component ensures shorter file paths in Sitecore Content Serialization?",
      "options": [
        "A) Path hashing",
        "B) Content trimming",
        "C) File compression",
        "D) Path encoding"
      ],
      "correct": "A) Path hashing"
    },
    {
      "question": "Which option can prevent changes from being pulled before running the watch command?",
      "options": [
        "A) --no-sync",
        "B) --skip-pull",
        "C) --no-fetch",
        "D) --ignore-push"
      ],
      "correct": "B) --skip-pull"
    },
    {
      "question": "What command is used to install an SCS package?",
      "options": [
        "A) dotnet sitecore ser pkg install",
        "B) dotnet sitecore ser pkg deploy",
        "C) dotnet sitecore ser pkg add",
        "D) dotnet sitecore ser pkg publish"
      ],
      "correct": "A) dotnet sitecore ser pkg install"
    },
    {
      "question": "Which command continuously monitors changes to serialized items?",
      "options": [
        "A) dotnet sitecore ser watch",
        "B) dotnet sitecore ser monitor",
        "C) dotnet sitecore ser track",
        "D) dotnet sitecore ser observe"
      ],
      "correct": "A) dotnet sitecore ser watch"
    },
    {
      "question": "What is the default value for `maxRelativePathLength`?",
      "options": [
        "A) 100",
        "B) 130",
        "C) 150",
        "D) 240"
      ],
      "correct": "B) 130"
    },
    {
      "question": "Which of these is NOT a valid Sitecore Content Serialization scope?",
      "options": [
        "A) SingleItem",
        "B) ItemAndChildren",
        "C) DescendantsOnly",
        "D) AllItems"
      ],
      "correct": "D) AllItems"
    },
    {
      "question": "What is required in an include property for serialization?",
      "options": [
        "A) `database`",
        "B) `path`",
        "C) `scope`",
        "D) `maxRelativePathLength`"
      ],
      "correct": "B) `path`"
    },
    {
      "question": "Which file must be modified to set the maximum path length for serialization?",
      "options": [
        "A) sitecore.config",
        "B) serialization.json",
        "C) sitecore.json",
        "D) package.json"
      ],
      "correct": "C) sitecore.json"
    },
    {
      "question": "Which subcommand provides verbose logging for troubleshooting?",
      "options": [
        "A) --debug",
        "B) --trace",
        "C) --verbose",
        "D) --log"
      ],
      "correct": "C) --verbose"
    },
    {
      "question": "What does the `--allow-file-changes` option do in the watch command?",
      "options": [
        "A) Prevents accidental overwrites",
        "B) Allows file changes even if underlying state is modified",
        "C) Disables auto-pull behavior",
        "D) Clears previously serialized items"
      ],
      "correct": "B) Allows file changes even if underlying state is modified"
    },
    {
      "question": "How does Sitecore Content Serialization help in CI/CD?",
      "options": [
        "A) By allowing automatic content serialization and deserialization",
        "B) By eliminating the need for backups",
        "C) By preventing content changes in production",
        "D) By restricting access to Sitecore items"
      ],
      "correct": "A) By allowing automatic content serialization and deserialization"
    },
    {
      "question": "Which command is required before running serialization commands?",
      "options": [
        "A) sitecore ser init",
        "B) sitecore ser enable",
        "C) sitecore ser start",
        "D) sitecore ser config"
      ],
      "correct": "A) sitecore ser init"
    }
  ];
  
  export default questions;
  