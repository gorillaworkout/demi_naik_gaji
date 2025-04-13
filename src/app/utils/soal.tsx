const questions = [
    {
      competency: 1,
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
      competency: 1,
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
      competency: 1,
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
      competency: 1,
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
      competency: 1,
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
      competency: 1,
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
      competency: 1,
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
      competency: 1,
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
      competency: 1,
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
      
      competency:1,
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
      competency:1,
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
      competency:1,
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
      competency:1,
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
      competency:1,
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
      competency:1,
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
      competency:1,
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
      competency:1,
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
      competency:1,
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
      competency:1,
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
      competency:1,
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
      competency:1,
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
      competency:1,
      question: "What does a dynamic component do?",
      options: [
        "A) Statically display content",
        "B) Handle external API calls",
        "C) Adapt its presentation or behavior based on user interactions",
        "D) Manage system-level variables"
      ],
      correct: "C) Adapt its presentation or behavior based on user interactions"
    },
    // ================================== COMPETENCY 2 ==========================================
    {
      competency:3,
      question: "What is the purpose of the Sitecore XM Cloud Deploy app?",
      options: [
        "A) To create and manage XM Cloud projects and environments",
        "B) To provide a cloud-based CDN for content delivery",
        "C) To manage Sitecore licensing and user authentication",
        "D) To serve as a front-end framework for building Sitecore components"
      ],
      correct: "A) To create and manage XM Cloud projects and environments"
    },
    {
      competency:3,
      question: "Which of the following best describes an XM Cloud project?",
      options: [
        "A) A logical grouping of XM Cloud environments",
        "B) A single instance of Sitecore XM Cloud",
        "C) A local development setup for Sitecore applications",
        "D) A standalone headless CMS"
      ],
      correct: "A) A logical grouping of XM Cloud environments"
    },
    {
      competency:3,
      question: "What is an XM Cloud environment?",
      options: [
        "A) A collection of reusable Sitecore components",
        "B) An isolated instance within an XM Cloud project",
        "C) A Sitecore package used to deploy projects",
        "D) A headless rendering host for Sitecore JSS applications"
      ],
      correct: "B) An isolated instance within an XM Cloud project"
    },
    {
      competency:3,
      question: "What is the primary purpose of the Starter Foundation Template?",
      options: [
        "A) To provide a pre-configured codebase for XM Cloud development",
        "B) To host Sitecore projects in a local environment",
        "C) To replace Sitecore Experience Edge",
        "D) To manage Sitecore authentication services"
      ],
      correct: "A) To provide a pre-configured codebase for XM Cloud development"
    },
    {
      competency:3,
      question: "Which software component is NOT required for running the XM Cloud Foundation Template locally?",
      options: [
        "A) .NET Core 6.0 SDK",
        "B) Node.js (LTS version)",
        "C) Windows PowerShell",
        "D) Kubernetes"
      ],
      correct: "D) Kubernetes"
    },
    {
      competency:3,
      question: "What is the role of Experience Edge in XM Cloud?",
      options: [
        "A) It provides a global CDN for content delivery",
        "B) It is a Sitecore JSS rendering engine",
        "C) It serves as the local development environment for XM Cloud",
        "D) It replaces the need for a Content Management instance"
      ],
      correct: "A) It provides a global CDN for content delivery"
    },
    {
      competency:3,
      question: "What is the purpose of the Sitecore CLI in XM Cloud development?",
      options: [
        "A) To interact with Sitecore instances using terminal commands",
        "B) To replace the need for Sitecore Content Editor",
        "C) To deploy front-end applications directly to Experience Edge",
        "D) To provide a visual interface for managing Sitecore users"
      ],
      correct: "A) To interact with Sitecore instances using terminal commands"
    },
    {
      competency:3,
      question: "Which statement about the local development setup for XM Cloud is true?",
      options: [
        "A) It requires Docker with Windows Containers enabled",
        "B) It does not require environment variables",
        "C) It cannot connect to the remote XM Cloud preview",
        "D) It only supports JavaScript-based applications"
      ],
      correct: "A) It requires Docker with Windows Containers enabled"
    },
    {
      competency:3,
      question: "What is the primary role of the authoring environment in XM Cloud?",
      options: [
        "A) To provide a backend interface for content creation and management",
        "B) To render the front-end website components",
        "C) To store static assets for the website",
        "D) To host Sitecore’s Experience Edge API"
      ],
      correct: "A) To provide a backend interface for content creation and management"
    },
    {
      competency:3,
      question: "Which command is used to initialize the local XM Cloud development environment?",
      options: [
        "A) ./init.ps1 -InitEnv",
        "B) npm run start:connected",
        "C) docker-compose up",
        "D) sitecore-cli deploy"
      ],
      correct: "A) ./init.ps1 -InitEnv"
    },
    {
      competency:3,
      question: "What happens when a new project is created in the XM Cloud Deploy app?",
      options: [
        "A) It automatically provisions an environment and runs an initial deployment",
        "B) It installs Sitecore locally on the developer’s machine",
        "C) It generates a static site using Next.js",
        "D) It replaces the need for source control repositories"
      ],
      correct: "A) It automatically provisions an environment and runs an initial deployment"
    },
    {
      competency:3,
      question: "How does a front-end developer work with XM Cloud using a 'FED-first' approach?",
      options: [
        "A) By connecting a local Next.js project to XM Cloud for real-time content updates",
        "B) By developing components exclusively using Sitecore Content Editor",
        "C) By creating content models before writing any code",
        "D) By using Docker to containerize the entire Sitecore environment"
      ],
      correct: "A) By connecting a local Next.js project to XM Cloud for real-time content updates"
    },
    {
      competency:3,
      question: "Which command is used to start the local Next.js site connected to XM Cloud?",
      options: [
        "A) npm run start:connected",
        "B) sitecore-cli start",
        "C) docker run sitecore/xmcloud",
        "D) yarn build && yarn serve"
      ],
      correct: "A) npm run start:connected"
    },
    {
      competency:3,
      question: "What is the purpose of the 'Available Renderings' setting in XM Cloud?",
      options: [
        "A) To define which components can be used within a site’s pages",
        "B) To enable component caching for improved performance",
        "C) To manage user roles and permissions",
        "D) To store JSON data for headless applications"
      ],
      correct: "A) To define which components can be used within a site’s pages"
    },
    {
      competency:3,
      question: "What is required to connect a local XM Cloud project to a remote XM Cloud environment?",
      options: [
        "A) Copying the environment variables from the Deploy app to the .env.local file",
        "B) Running the Sitecore Experience Editor inside a Docker container",
        "C) Cloning the Experience Edge repository",
        "D) Installing Kubernetes and Helm charts"
      ],
      correct: "A) Copying the environment variables from the Deploy app to the .env.local file"
    },
    {
      competency:3,
      question: "What is the first step to creating a site in XM Cloud?",
      options: [
        "A) Installing Node.js",
        "B) Opening the Deploy app and navigating to XM Cloud",
        "C) Cloning the environment repository",
        "D) Creating a new component"
      ],
      correct: "B) Opening the Deploy app and navigating to XM Cloud"
    },
    {
      competency:3,
      question: "What is the purpose of a collection when creating a site in XM Cloud?",
      options: [
        "A) It defines the available components in a site",
        "B) It groups sites according to a theme",
        "C) It sets up the database structure for the site",
        "D) It determines the site's default language"
      ],
      correct: "B) It groups sites according to a theme"
    },
    {
      competency:3,
      question: "What happens automatically when you create a new collection in XM Cloud?",
      options: [
        "A) A default page is generated",
        "B) A headless module with the same name is created",
        "C) A database instance is assigned",
        "D) The site is published immediately"
      ],
      correct: "B) A headless module with the same name is created"
    },
    {
      competency:3,
      question: "Which component is used to add content to a newly created page in XM Cloud?",
      options: [
        "A) Page Content",
        "B) Site Layout",
        "C) Component Wrapper",
        "D) Content Block"
      ],
      correct: "A) Page Content"
    },
    {
      competency:3,
      question: "Which command is used to clone an environment repository in XM Cloud?",
      options: [
        "A) npm install",
        "B) git clone",
        "C) npm run start",
        "D) node setup.js"
      ],
      correct: "B) git clone"
    },
    {
      competency:3,
      question: "Where do you set the environment variables for a local development setup in XM Cloud?",
      options: [
        "A) In the .env.local file",
        "B) In the package.json file",
        "C) In the Deploy app settings",
        "D) In the Next.js configuration"
      ],
      correct: "A) In the .env.local file"
    },
    {
      competency:3,
      question: "What command is used to install the required packages in the local development setup?",
      options: [
        "A) npm run start",
        "B) npm update",
        "C) npm install",
        "D) node setup.js"
      ],
      correct: "C) npm install"
    },
    {
      competency:3,
      question: "Which URL should you visit to preview your locally running XM Cloud project?",
      options: [
        "A) http://localhost:8000",
        "B) http://127.0.0.1:5000",
        "C) http://localhost:3000",
        "D) http://sitecore.local"
      ],
      correct: "C) http://localhost:3000"
    },
    {
      competency:3,
      question: "What approach does XM Cloud use for setting up local development?",
      options: [
        "A) Front-End Development (FED) first",
        "B) Back-End Development first",
        "C) Database-first approach",
        "D) Docker-based full-stack approach only"
      ],
      correct: "A) Front-End Development (FED) first"
    },
    {
      competency:3,
      question: "What is the recommended Node.js version for XM Cloud development?",
      options: [
        "A) Any version of Node.js",
        "B) The latest LTS version",
        "C) Node.js version 10 or earlier",
        "D) Version 8 with Docker support"
      ],
      correct: "B) The latest LTS version"
    },
    {
      competency:3,
      question: "What is the purpose of the `rendering` property in an XM Cloud component?",
      options: [
        "A) It defines the component’s appearance and data",
        "B) It specifies the site's navigation structure",
        "C) It stores database queries for content retrieval",
        "D) It is used for setting up authentication"
      ],
      correct: "A) It defines the component’s appearance and data"
    },
    {
      competency:3,
      question: "Which of the following parameters is used to apply CSS classes to an XM Cloud component?",
      options: [
        "A) Styles",
        "B) GridParameters",
        "C) RenderingIdentifier",
        "D) ComponentID"
      ],
      correct: "A) Styles"
    },
    {
      competency:3,
      question: "How do you create a new component in XM Cloud?",
      options: [
        "A) Modify the `site.config.js` file",
        "B) Create a new `.tsx` file in the components folder",
        "C) Use the XM Cloud interface to generate the component",
        "D) Run the `npm create-component` command"
      ],
      correct: "B) Create a new `.tsx` file in the components folder"
    },
    {
      competency:3,
      question: "What is the purpose of the `RenderingIdentifier` parameter in an XM Cloud component?",
      options: [
        "A) To apply custom CSS styles",
        "B) To link the component with analytics tracking",
        "C) To define the content hierarchy",
        "D) To set the default language"
      ],
      correct: "B) To link the component with analytics tracking"
    },
    {
      competency:3,
      question: "What happens when you push a new component to your XM Cloud repository?",
      options: [
        "A) It automatically deploys to XM Cloud",
        "B) It needs manual deployment",
        "C) It overwrites the previous component",
        "D) It creates a staging branch"
      ],
      correct: "A) It automatically deploys to XM Cloud"
    },
    {
      competency:3,
      question: "What is the purpose of rendering definitions in XM Cloud?",
      options: [
        "A) To define where the component's .tsx file is located",
        "B) To specify the data required for rendering the component",
        "C) To automatically generate required items for a component",
        "D) All of the above"
      ],
      correct: "D) All of the above"
    },
    {
      competency:3,
      question: "What should you do to ensure a cloned rendering is visible in Pages?",
      options: [
        "A) Set the Editable checkbox in the Customize Page section",
        "B) Change its file extension to .jsx",
        "C) Modify the component’s CSS",
        "D) Manually deploy it to the environment"
      ],
      correct: "A) Set the Editable checkbox in the Customize Page section"
    },
    {
      competency:3,
      question: "Which step is required when adding a new component to a site page in XM Cloud?",
      options: [
        "A) Run 'npm run build' before deploying",
        "B) Drag the component from the Components tab onto the page",
        "C) Manually edit the component’s HTML structure",
        "D) Update the database with new component data"
      ],
      correct: "B) Drag the component from the Components tab onto the page"
    },
    {
      competency:3,
      question: "What happens when you push a new component to your XM Cloud repository?",
      options: [
        "A) It automatically deploys to XM Cloud",
        "B) It needs manual deployment",
        "C) It overwrites the previous component",
        "D) It creates a staging branch"
      ],
      correct: "A) It automatically deploys to XM Cloud"
    },
    {
      competency:3,
      question: "What must be done after creating a rendering clone?",
      options: [
        "A) Modify the rendering’s parameters to reduce dependencies",
        "B) Change the component’s name in the project directory",
        "C) Restart the development server",
        "D) Delete the original rendering"
      ],
      correct: "A) Modify the rendering’s parameters to reduce dependencies"
    },
    {
      competency:3,
      question: "How can you change the repository linked to an XM Cloud project?",
      options: [
        "A) Go to 'Projects' and select 'Edit project' under 'Options'",
        "B) Delete the project and create a new one with the desired repository",
        "C) Modify the repository URL in the deployment settings",
        "D) Clone the repository locally and push it to the new repository"
      ],
      correct: "A) Go to 'Projects' and select 'Edit project' under 'Options'"
    },
    {
      competency:3,
      question: "What is the maximum number of non-production environments allowed in an XM Cloud project by default?",
      options: [
        "A) One",
        "B) Two",
        "C) Three",
        "D) Four"
      ],
      correct: "B) Two"
    },
    {
      competency:3,
      question: "Which step is necessary to restart an environment in XM Cloud?",
      options: [
        "A) Click 'Actions' and select 'Restart environment' in the project settings",
        "B) Delete the environment and create a new one",
        "C) Push an empty commit to the repository",
        "D) Rebuild the project from the CLI"
      ],
      correct: "A) Click 'Actions' and select 'Restart environment' in the project settings"
    },
    {
      competency:3,
      question: "What must be done to deploy a new build to an environment?",
      options: [
        "A) Click 'Actions' and select 'Build and deploy'",
        "B) Re-run 'npm install' in the local development environment",
        "C) Restart the entire XM Cloud project",
        "D) Delete previous deployments manually"
      ],
      correct: "A) Click 'Actions' and select 'Build and deploy'"
    },
    {
      competency:3,
      question: "How do you make a new component available in XM Cloud Pages?",
      options: [
        "A) Add it to 'Available Renderings' in the Content Editor",
        "B) Modify the JavaScript code to include a global function",
        "C) Manually edit the component’s CSS",
        "D) Push the component to a separate repository"
      ],
      correct: "A) Add it to 'Available Renderings' in the Content Editor'"
    },
    // ================================== COMPETENCY 3 ==========================================
    {
      competency:3,
      question: "How do you create a new component in the Components library?",
      options: [
        "A) Click 'Add component' in the library",
        "B) Edit an existing component",
        "C) Manually upload a component file",
        "D) Drag and drop a component from another project"
      ],
      correct: "A) Click 'Add component' in the library"
    },
    {
      competency:3,
      question: "What happens when you duplicate a component?",
      options: [
        "A) It creates a new component with no versions",
        "B) It copies the component along with all versions and responsive bundles",
        "C) It merges the component with an existing one",
        "D) It only copies the component’s metadata"
      ],
      correct: "B) It copies the component along with all versions and responsive bundles"
    },
    {
      competency:3,
      question: "Which of the following is required to delete a component permanently?",
      options: [
        "A) It must have at least one published version",
        "B) It must be in the archived state",
        "C) All its versions must be in draft state",
        "D) It must be duplicated first"
      ],
      correct: "C) All its versions must be in draft state"
    },
    {
      competency:3,
      question: "How can you move a component to another collection?",
      options: [
        "A) Click 'Edit component' and select a different collection",
        "B) Drag and drop the component into another collection",
        "C) Delete the component and recreate it in the desired collection",
        "D) Export the component and import it into the new collection"
      ],
      correct: "A) Click 'Edit component' and select a different collection"
    },
    {
      competency:3,
      question: "What is a page design used for in Sitecore?",
      options: [
        "A) To create a preset layout structure for pages",
        "B) To manage user permissions",
        "C) To store unpublished content",
        "D) To delete components"
      ],
      correct: "A) To create a preset layout structure for pages"
    },
    {
      competency:3,
      question: "Which tool can be used to create a page design?",
      options: [
        "A) Content Editor",
        "B) Experience Editor",
        "C) Both A and B",
        "D) Neither A nor B"
      ],
      correct: "C) Both A and B"
    },
    {
      competency:3,
      question: "How do you update the signature of a partial design?",
      options: [
        "A) Change the 'Signature' field in the partial design properties",
        "B) Modify the placeholder name in the component properties",
        "C) Delete the partial design and recreate it",
        "D) Only A and B"
      ],
      correct: "D) Only A and B"
    },
    {
      competency:3,
      question: "What is the purpose of a base partial design?",
      options: [
        "A) To create reusable layouts with common elements",
        "B) To store unpublished page versions",
        "C) To manage user roles",
        "D) To enable file uploads"
      ],
      correct: "A) To create reusable layouts with common elements"
    },
    {
      competency:3,
      question: "How do you assign a page design to a template?",
      options: [
        "A) In the Experience Accelerator tab, click 'Site Page Designs' and assign a design",
        "B) Manually edit the page HTML",
        "C) Modify the CSS file of the page",
        "D) Copy and paste elements from another page"
      ],
      correct: "A) In the Experience Accelerator tab, click 'Site Page Designs' and assign a design"
    },
    {
      competency:3,
      question: "What is the best way to ensure headers and footers remain consistent across pages?",
      options: [
        "A) Use a page design that includes them",
        "B) Manually add them to each page",
        "C) Duplicate pages to keep the same structure",
        "D) Save them as an image and insert them into each page"
      ],
      correct: "A) Use a page design that includes them"
    },
    {
      competency:3,
      question: "How do you create a new component in the Components library?",
      options: [
        "A) Click 'Add component' in the library",
        "B) Edit an existing component",
        "C) Manually upload a component file",
        "D) Drag and drop a component from another project"
      ],
      correct: "A) Click 'Add component' in the library"
    },
    {
      competency:3,
      question: "What is the purpose of a partial design in the Experience Editor?",
      options: [
        "A) To update text and add renderings that apply to multiple pages",
        "B) To create a standalone page layout",
        "C) To store page metadata",
        "D) To edit content in a single page only"
      ],
      correct: "A) To update text and add renderings that apply to multiple pages"
    },
    {
      competency:3,
      question: "How do you change a partial design in the Experience Editor?",
      options: [
        "A) Edit the HTML code directly",
        "B) Click 'Partial Design' on the Experience Accelerator tab and make changes",
        "C) Create a new page design",
        "D) Modify the CSS styles in the theme"
      ],
      correct: "B) Click 'Partial Design' on the Experience Accelerator tab and make changes"
    },
    {
      competency:3,
      question: "Which method has the highest precedence when assigning a page design?",
      options: [
        "A) Page design selected on a page level",
        "B) Rules defined for the site",
        "C) Page Design to Template Mapping",
        "D) Page layout inheritance"
      ],
      correct: "A) Page design selected on a page level"
    },
    {
      competency:3,
      question: "Where do you navigate to in order to create a rule to set a page design?",
      options: [
        "A) sitecore/Content/<site collection>/<site>/Presentation/Page Designs",
        "B) sitecore/Content/<site>/Page Rules",
        "C) sitecore/Layout/Page Design Rules",
        "D) sitecore/Content/<site>/Theme Editor"
      ],
      correct: "A) sitecore/Content/<site collection>/<site>/Presentation/Page Designs"
    },
    {
      competency:3,
      question: "What condition can be used in a rule to assign a page design?",
      options: [
        "A) The title field is empty",
        "B) The page is visited more than 100 times",
        "C) The user has admin privileges",
        "D) The page contains an image"
      ],
      correct: "A) The title field is empty"
    },
    {
      competency:3,
      question: "How do you change the order of component categories in the toolbox?",
      options: [
        "A) Reorganize items under Available Renderings",
        "B) Drag and drop categories in the Experience Editor",
        "C) Rename the categories in the system settings",
        "D) Update the component order in the Theme Editor"
      ],
      correct: "A) Reorganize items under Available Renderings"
    },
    {
      competency:3,
      question: "What is the benefit of restructuring components in the Experience Editor?",
      options: [
        "A) To organize frequently used components for easier access",
        "B) To make components load faster",
        "C) To lock component layouts",
        "D) To prevent users from adding new components"
      ],
      correct: "A) To organize frequently used components for easier access"
    },
    {
      competency:3,
      question: "How do you add a custom category and components in the Experience Editor?",
      options: [
        "A) Right-click 'Available Renderings', insert a new category, and add components",
        "B) Modify the Experience Editor source code",
        "C) Use a custom CSS class for the category",
        "D) Rename an existing category"
      ],
      correct: "A) Right-click 'Available Renderings', insert a new category, and add components"
    },
    {
      competency:3,
      question: "Which of the following is NOT a way to apply a page design?",
      options: [
        "A) Selecting a page design on a page level",
        "B) Defining rules for site-wide page design selection",
        "C) Mapping a page design to a content template",
        "D) Adding custom CSS to override the design"
      ],
      correct: "D) Adding custom CSS to override the design"
    },
    {
      competency:3,
      question: "Which of the following is the purpose of cloning an SXA rendering?",
      options: [
        "A) To delete an existing rendering",
        "B) To create an exact copy with a different name and styling",
        "C) To remove styling from an existing rendering",
        "D) To create a backup of the Sitecore system"
      ],
      correct: "B) To create an exact copy with a different name and styling"
    },
    {
      competency:3,
      question: "Why is it recommended to create a separate toolbox section for derivative renderings?",
      options: [
        "A) To avoid conflicts with standard SXA toolbox updates",
        "B) To make the rendering load faster",
        "C) To improve the rendering's visual appearance",
        "D) To prevent unauthorized users from accessing the rendering"
      ],
      correct: "A) To avoid conflicts with standard SXA toolbox updates"
    },
    {
      competency:3,
      question: "What is the function of the 'Rendering Parameters' tab when cloning a rendering?",
      options: [
        "A) It allows setting the rendering's CSS class",
        "B) It determines how the rendering parameters are inherited or copied",
        "C) It specifies where the rendering should be displayed",
        "D) It defines the module to which the rendering belongs"
      ],
      correct: "B) It determines how the rendering parameters are inherited or copied"
    },
    {
      competency:3,
      question: "Which of the following options allows the most flexibility when modifying an SXA rendering's view?",
      options: [
        "A) Use original MVC view file",
        "B) Copy MVC view file (specify path below)",
        "C) Select existing MVC view file (specify path below)",
        "D) Disable the MVC view file"
      ],
      correct: "B) Copy MVC view file (specify path below)"
    },
    {
      competency:3,
      question: "What is the main purpose of dynamic placeholders in Sitecore SXA?",
      options: [
        "A) To generate unique placeholder keys for components dynamically",
        "B) To remove placeholders from a rendering",
        "C) To prevent components from being nested within each other",
        "D) To limit the number of placeholders in a rendering"
      ],
      correct: "A) To generate unique placeholder keys for components dynamically"
    },
    {
      competency:3,
      question: "Which property must be added to a component to enable dynamic placeholders?",
      options: [
        "A) DynamicPlaceholderID",
        "B) EnableDynamicPlaceholders",
        "C) IsRenderingsWithDynamicPlaceholders",
        "D) ComponentPlaceholderKey"
      ],
      correct: "C) IsRenderingsWithDynamicPlaceholders"
    },
    {
      competency:3,
      question: "When defining a placeholder key for dynamic placeholders, what symbol is used to create unique identifiers?",
      options: [
        "A) #",
        "B) *",
        "C) {}",
        "D) $"
      ],
      correct: "C) {}"
    },
    {
      competency:3,
      question: "What is the main benefit of registering an external React component in XM Cloud?",
      options: [
        "A) It allows components to be reused within XM Cloud Pages",
        "B) It enables non-developers to write custom JavaScript code",
        "C) It prevents the use of SXA components",
        "D) It restricts styling customization"
      ],
      correct: "A) It allows components to be reused within XM Cloud Pages"
    },
    {
      competency:3,
      question: "Where should the external React component code be hosted before it can be used in XM Cloud?",
      options: [
        "A) On any Sitecore instance",
        "B) On an accessible rendering host URL",
        "C) In a local JSS folder",
        "D) Inside the Sitecore Experience Editor"
      ],
      correct: "B) On an accessible rendering host URL"
    },
    {
      competency:3,
      question: "What is a key advantage of using SXA components in Sitecore XM Cloud?",
      options: [
        "A) They provide built-in support for content variants",
        "B) They require manual HTML and JavaScript coding for every component",
        "C) They cannot be modified after deployment",
        "D) They only work in a headless setup"
      ],
      correct: "A) They provide built-in support for content variants"
    },
    // ================================== COMPETENCY 4 ==========================================
    {
      competency:4,
      question: "What is the purpose of Sitecore Content Serialization (SCS)?",
      options: [
        "A) To manage and deploy Sitecore configurations",
        "B) To serialize and version control Sitecore content items",
        "C) To create custom Sitecore templates",
        "D) To build Sitecore layouts"
      ],
      correct: "B) To serialize and version control Sitecore content items"
    },
    {
      competency:4,
      question: "Which command is used to validate serialized content items?",
      options: [
        "A) sitecore ser check",
        "B) sitecore ser inspect",
        "C) sitecore ser validate",
        "D) sitecore ser verify"
      ],
      correct: "C) sitecore ser validate"
    },
    {
      competency:4,
      question: "What does the `allowedPushOperations` property define?",
      options: [
        "A) How content items are pushed to Sitecore",
        "B) The maximum path length for serialization",
        "C) The security level for serialization commands",
        "D) The order of serialization"
      ],
      correct: "A) How content items are pushed to Sitecore"
    },
    {
      competency:4,
      question: "Which `allowedPushOperations` value enables creating, updating, and deleting items?",
      options: [
        "A) CreateOnly",
        "B) CreateAndUpdate",
        "C) CreateUpdateAndDelete",
        "D) DeleteOnly"
      ],
      correct: "C) CreateUpdateAndDelete"
    },
    {
      competency:4,
      question: "What does the `scope` property configure?",
      options: [
        "A) The database used for serialization",
        "B) The content items affected by serialization",
        "C) The serialization file format",
        "D) The file path of serialized items"
      ],
      correct: "B) The content items affected by serialization"
    },
    {
      competency:4,
      question: "Which scope value only serializes the specified item?",
      options: [
        "A) ItemAndChildren",
        "B) ItemAndDescendants",
        "C) SingleItem",
        "D) DescendantsOnly"
      ],
      correct: "C) SingleItem"
    },
    {
      competency:4,
      question: "Which scope option includes the item and all its descendants?",
      options: [
        "A) ItemAndChildren",
        "B) SingleItem",
        "C) ItemAndDescendants",
        "D) Ignored"
      ],
      correct: "C) ItemAndDescendants"
    },
    {
      competency:4,
      question: "Which command creates an SCS package?",
      options: [
        "A) dotnet sitecore ser pkg build",
        "B) dotnet sitecore ser pkg generate",
        "C) dotnet sitecore ser pkg create",
        "D) dotnet sitecore ser pkg init"
      ],
      correct: "C) dotnet sitecore ser pkg create"
    },
    {
      competency:4,
      question: "What is the default database for Sitecore Content Serialization?",
      options: [
        "A) core",
        "B) web",
        "C) master",
        "D) archive"
      ],
      correct: "C) master"
    },
    {
      competency:4,
      question: "How can you manually fix validation errors in serialized content?",
      options: [
        "A) By running `sitecore ser validate --fix`",
        "B) By deleting and reserializing content",
        "C) By restarting the Sitecore instance",
        "D) By editing the JSON configuration manually"
      ],
      correct: "A) By running `sitecore ser validate --fix`"
    },
    {
      competency:4,
      question: "Which component ensures shorter file paths in Sitecore Content Serialization?",
      options: [
        "A) Path hashing",
        "B) Content trimming",
        "C) File compression",
        "D) Path encoding"
      ],
      correct: "A) Path hashing"
    },
    {
      competency:4,
      question: "Which option can prevent changes from being pulled before running the watch command?",
      options: [
        "A) --no-sync",
        "B) --skip-pull",
        "C) --no-fetch",
        "D) --ignore-push"
      ],
      correct: "B) --skip-pull"
    },
    {
      competency:4,
      question: "What command is used to install an SCS package?",
      options: [
        "A) dotnet sitecore ser pkg install",
        "B) dotnet sitecore ser pkg deploy",
        "C) dotnet sitecore ser pkg add",
        "D) dotnet sitecore ser pkg publish"
      ],
      correct: "A) dotnet sitecore ser pkg install"
    },
    {
      competency:4,
      question: "Which command continuously monitors changes to serialized items?",
      options: [
        "A) dotnet sitecore ser watch",
        "B) dotnet sitecore ser monitor",
        "C) dotnet sitecore ser track",
        "D) dotnet sitecore ser observe"
      ],
      correct: "A) dotnet sitecore ser watch"
    },
    {
      competency:4,
      question: "What is the default value for `maxRelativePathLength`?",
      options: [
        "A) 100",
        "B) 130",
        "C) 150",
        "D) 240"
      ],
      correct: "B) 130"
    },
    {
      competency:4,
      question: "Which of these is NOT a valid Sitecore Content Serialization scope?",
      options: [
        "A) SingleItem",
        "B) ItemAndChildren",
        "C) DescendantsOnly",
        "D) AllItems"
      ],
      correct: "D) AllItems"
    },
    {
      competency:4,
      question: "What is required in an include property for serialization?",
      options: [
        "A) `database`",
        "B) `path`",
        "C) `scope`",
        "D) `maxRelativePathLength`"
      ],
      correct: "B) `path`"
    },
    {
      competency:4,
      question: "Which file must be modified to set the maximum path length for serialization?",
      options: [
        "A) sitecore.config",
        "B) serialization.json",
        "C) sitecore.json",
        "D) package.json"
      ],
      correct: "C) sitecore.json"
    },
    {
      competency:4,
      question: "Which subcommand provides verbose logging for troubleshooting?",
      options: [
        "A) --debug",
        "B) --trace",
        "C) --verbose",
        "D) --log"
      ],
      correct: "C) --verbose"
    },
    {
      competency:4,
      question: "What does the `--allow-file-changes` option do in the watch command?",
      options: [
        "A) Prevents accidental overwrites",
        "B) Allows file changes even if underlying state is modified",
        "C) Disables auto-pull behavior",
        "D) Clears previously serialized items"
      ],
      correct: "B) Allows file changes even if underlying state is modified"
    },
    {
      competency:4,
      question: "How does Sitecore Content Serialization help in CI/CD?",
      options: [
        "A) By allowing automatic content serialization and deserialization",
        "B) By eliminating the need for backups",
        "C) By preventing content changes in production",
        "D) By restricting access to Sitecore items"
      ],
      correct: "A) By allowing automatic content serialization and deserialization"
    },
    {
      competency:4,
      question: "Which command is required before running serialization commands?",
      options: [
        "A) sitecore ser init",
        "B) sitecore ser enable",
        "C) sitecore ser start",
        "D) sitecore ser config"
      ],
      correct: "A) sitecore ser init"
    },
    // ================================== COMPETENCY 5 ==========================================
    {
      competency:5,
      question: "What type of API does Experience Edge use to retrieve content?",
      options: [
        "A) REST API",
        "B) GraphQL API",
        "C) SOAP API",
        "D) JSON-RPC API"
      ],
      correct: "B) GraphQL API"
    },
    {
      competency:5,
      question: "Which endpoint should be used to access approved and published content in Experience Edge?",
      options: [
        "A) Token API",
        "B) Admin API",
        "C) Delivery API",
        "D) Experience API"
      ],
      correct: "C) Delivery API"
    },
    {
      competency:5,
      question: "Which search criterion would you use to find content that includes the word 'apple' anywhere in the field value?",
      options: [
        "A) Exact",
        "B) StartsWith",
        "C) Contains",
        "D) EndsWith"
      ],
      correct: "C) Contains"
    },
    {
      competency:5,
      question: "Which mutation is used to create a new item in Sitecore using GraphQL?",
      options: [
        "A) newItem()",
        "B) createItem()",
        "C) insertItem()",
        "D) generateItem()"
      ],
      correct: "B) createItem()"
    },
    {
      competency:5,
      question: "What does the `permanently` parameter do in the `deleteItem` mutation?",
      options: [
        "A) Makes the item visible permanently",
        "B) Archives the item instead of deleting it",
        "C) Performs a soft delete",
        "D) Ensures the item is completely removed from Sitecore"
      ],
      correct: "D) Ensures the item is completely removed from Sitecore"
    },
    {
      competency:5,
      question: "Which API allows you to manage your Sitecore content using GraphQL, including creating templates and custom UIs?",
      options: [
        "A) Layout API",
        "B) Publishing API",
        "C) Authoring and Management API",
        "D) Item Delivery API"
      ],
      correct: "C) Authoring and Management API"
    },
    {
      competency:5,
      question: "What must be done before using the GraphQL IDE for the Authoring and Management API?",
      options: [
        "A) Set the GraphQL role to Admin",
        "B) Disable GraphQL security",
        "C) Enable and authorize the IDE access",
        "D) Restart the Sitecore instance"
      ],
      correct: "C) Enable and authorize the IDE access"
    },
    {
      competency:5,
      question: "Which feature in Experience Edge can notify you when a publishing job finishes?",
      options: [
        "A) GraphQL IDE",
        "B) Token API",
        "C) CLI plugin",
        "D) Webhooks"
      ],
      correct: "D) Webhooks"
    },
    {
      competency:5,
      question: "Which search criterion uses similarity parameters to match typos or variations?",
      options: [
        "A) Proximity",
        "B) Fuzzy",
        "C) Wildcard",
        "D) Regex"
      ],
      correct: "B) Fuzzy"
    },
    {
      competency:5,
      question: "Which SDK can be used with Experience Edge to render layout service data in a front-end application?",
      options: [
        "A) React SDK",
        "B) Sitecore MVC SDK",
        "C) Sitecore JavaScript SDK (JSS)",
        "D) Jamstack SDK"
      ],
      correct: "C) Sitecore JavaScript SDK (JSS)"
    },
    {
      competency:5,
      question: "What environment variable must be set to enable the GraphQL IDE in XM Cloud?",
      options: [
        "A) Sitecore_Enable_GraphQL",
        "B) GraphQL_IDE_Enable",
        "C) Sitecore_GraphQL_ExposePlayground",
        "D) Enable_GraphQL_IDE"
      ],
      correct: "C) Sitecore_GraphQL_ExposePlayground"
    },
    {
      competency:5,
      question: "Which role must a user have to access the GraphQL IDE?",
      options: [
        "A) sitecore\\Sitecore Developers",
        "B) sitecore\\Sitecore Client Users",
        "C) sitecore\\Sitecore Administrators",
        "D) sitecore\\GraphQL Users"
      ],
      correct: "B) sitecore\\Sitecore Client Users"
    },
    {
      competency:5,
      question: "How do you authorize the GraphQL IDE to make requests?",
      options: [
        "A) Add token in GraphQL variables",
        "B) Add API key in endpoint URL",
        "C) Set the Authorization header with Bearer token",
        "D) Enable Basic Auth in browser settings"
      ],
      correct: "C) Set the Authorization header with Bearer token"
    },
    {
      competency:5,
      question: "Where can you obtain the access token after logging in via `dotnet sitecore cloud login`?",
      options: [
        "A) From the browser's localStorage",
        "B) In the .sitecore/access.token file",
        "C) In the ./sitecore/user.json file",
        "D) Printed in the console output"
      ],
      correct: "C) In the ./sitecore/user.json file"
    },
    {
      competency:5,
      question: "Which API provides access to approved and published content?",
      options: [
        "A) Management API",
        "B) Authoring API",
        "C) Delivery API",
        "D) Layout API"
      ],
      correct: "C) Delivery API"
    },
    {
      competency:5,
      question: "What is the base URL for the Delivery API?",
      options: [
        "A) https://sitecorecloud.io/api/graphql",
        "B) https://xmcloud.sitecore.com/graphql",
        "C) https://edge.sitecorecloud.io/api/graphql",
        "D) https://api.sitecorecloud.io/graphql"
      ],
      correct: "C) https://edge.sitecorecloud.io/api/graphql"
    },
    {
      competency:5,
      question: "What command is used to log into XM Cloud to obtain the initial access token?",
      options: [
        "A) sitecore cloud connect",
        "B) dotnet sitecore cloud login",
        "C) xmcloud login",
        "D) sitecore login"
      ],
      correct: "B) dotnet sitecore cloud login"
    },
    {
      competency:5,
      question: "What HTTP method is used to retrieve a token from an automation client?",
      options: [
        "A) GET",
        "B) PUT",
        "C) PATCH",
        "D) POST"
      ],
      correct: "D) POST"
    },
    {
      competency:5,
      question: "Which of the following is recommended regarding enabling the GraphQL IDE?",
      options: [
        "A) Enable it only in staging environments",
        "B) Enable it only in production environments",
        "C) Enable it only in local environments",
        "D) Enable it only in nonproduction environments"
      ],
      correct: "D) Enable it only in nonproduction environments"
    },
    {
      competency:5,
      question: "What endpoint should be used in the IDE for Authoring and Management API?",
      options: [
        "A) /sitecore/api/authoring/graphql",
        "B) /sitecore/api/graphql/management",
        "C) /sitecore/api/authoring/graphql/v1/",
        "D) /sitecore/management/graphql/v1"
      ],
      correct: "C) /sitecore/api/authoring/graphql/v1/"
    },
    {
      competency:5,
      question: "What header must be included in all requests to the Delivery API?",
      options: [
        "A) Authorization",
        "B) Content-Type",
        "C) sc_apikey",
        "D) x-api-key"
      ],
      correct: "C) sc_apikey"
    },
    {
      competency:5,
      question: "Which scopes are required when creating an API key for the Delivery API?",
      options: [
        "A) audience-management and content-read",
        "B) audience-delivery and content-#everything#",
        "C) delivery-read and content-all",
        "D) delivery-access and content-global"
      ],
      correct: "B) audience-delivery and content-#everything#"
    },
    {
      competency:5,
      question: "What is the base URL for the Token API?",
      options: [
        "A) https://api.sitecorecloud.io/token",
        "B) https://edge.sitecorecloud.io/api/token/v1",
        "C) https://edge.sitecorecloud.io/api/apikey/v1",
        "D) https://cloud.sitecore.net/api/auth/v1"
      ],
      correct: "C) https://edge.sitecorecloud.io/api/apikey/v1"
    },
    {
      competency:5,
      question: "What type of token is used in the `Authorization` header to access the Token API?",
      options: [
        "A) Personal access token",
        "B) Bearer token (JWT)",
        "C) API key",
        "D) Session token"
      ],
      correct: "B) Bearer token (JWT)"
    },
    {
      competency:5,
      question: "Which endpoint is used to generate a new API key in the Token API?",
      options: [
        "A) /generate",
        "B) /createkey",
        "C) /new",
        "D) /"
      ],
      correct: "D) /"
    },
    {
      competency:5,
      question: "Which header is required to get an API key by its token?",
      options: [
        "A) Authorization",
        "B) x-api-token",
        "C) sc_apikey",
        "D) api-key-token"
      ],
      correct: "C) sc_apikey"
    },
    {
      competency:5,
      question: "What does the `ListAll` endpoint return?",
      options: [
        "A) Only revoked API keys",
        "B) All created JWT tokens",
        "C) A list of API keys with pagination metadata",
        "D) The last 10 API key usages"
      ],
      correct: "C) A list of API keys with pagination metadata"
    },
    {
      competency:5,
      question: "What is the HTTP verb for revoking an API key using its hash?",
      options: [
        "A) DELETE",
        "B) PUT",
        "C) POST",
        "D) PATCH"
      ],
      correct: "B) PUT"
    },
    {
      competency:5,
      question: "Which endpoint do you use to rename an API key by token?",
      options: [
        "A) /renamebyhash/{token}",
        "B) /renametoken",
        "C) /renamebytoken",
        "D) /updatekeyname"
      ],
      correct: "C) /renamebytoken"
    },
    {
      competency:5,
      question: "What is returned when a new API key is successfully created?",
      options: [
        "A) JSON with scopes and label",
        "B) JWT access token",
        "C) Base64 string token",
        "D) Hashed token identifier"
      ],
      correct: "C) Base64 string token"
    },
    {
      competency:5,
      question: "What is the base URL for the Admin API?",
      options: [
        "a) https://admin.sitecorecloud.io/api/admin/v1",
        "b) https://edge.sitecorecloud.io/api/admin/v1",
        "c) https://api.sitecorecloud.io/admin/v1",
        "d) https://www.sitecorecloud.io/api/admin/v1"
      ],
      correct: "b) https://edge.sitecorecloud.io/api/admin/v1"
    },
    {
      competency:5,
      question: "Which HTTP verb is used to clear the cache for a tenant in the Admin API?",
      options: [
        "a) POST",
        "b) PUT",
        "c) GET",
        "d) DELETE"
      ],
      correct: "d) DELETE"
    },
    {
      competency:5,
      question: "What is required in the Authorization header for Admin API requests?",
      options: [
        "a) API Key",
        "b) Bearer Token",
        "c) JWT Token",
        "d) Both b and c"
      ],
      correct: "d) Both b and c"
    },
    {
      competency:5,
      question: "Which endpoint is used to remove tenant data from the storage in the Admin API?",
      options: [
        "a) /webhooks",
        "b) /settings",
        "c) /content",
        "d) /cache"
      ],
      correct: "c) /content"
    },
    {
      competency:5,
      question: "What format should the body be in when using the PATCH operation on the /settings endpoint?",
      options: [
        "a) application/json",
        "b) application/xml",
        "c) application/json-patch+json",
        "d) application/x-www-form-urlencoded"
      ],
      correct: "c) application/json-patch+json"
    },
    {
      competency:5,
      question: "Which status code indicates a successful webhook creation using the Admin API?",
      options: [
        "a) 200 OK",
        "b) 201 Created",
        "c) 202 Accepted",
        "d) 204 No Content"
      ],
      correct: "b) 201 Created"
    },
    {
      competency:5,
      question: "What does the contentCacheTtl parameter represent in the Admin API response?",
      options: [
        "a) The total number of content items in cache",
        "b) The time-to-live (TTL) for content cache",
        "c) The total number of API requests made",
        "d) The time-to-live for media items only"
      ],
      correct: "b) The time-to-live (TTL) for content cache"
    },
    {
      competency:5,
      question: "Which method should be used to retrieve all webhooks for a tenant?",
      options: [
        "a) GET /settings",
        "b) POST /webhooks",
        "c) GET /webhooks",
        "d) DELETE /webhooks/{id}"
      ],
      correct: "c) GET /webhooks"
    },
    {
      competency:5,
      question: "How do you specify the TTL (Time-to-Live) for cache in the Admin API settings?",
      options: [
        "a) As a single value in seconds",
        "b) Using the format {days}.{hours}:{minutes}:{seconds}",
        "c) As a string without any specific format",
        "d) Using only hours and minutes"
      ],
      correct: "b) Using the format {days}.{hours}:{minutes}:{seconds}"
    },
    {
      competency:5,
      question: "What does the response format look like when successfully updating settings using the PUT /settings endpoint?",
      options: [
        "a) JSON object with updated settings",
        "b) Text message confirming the update",
        "c) 204 No Content",
        "d) JSON object with status code only"
      ],
      correct: "a) JSON object with updated settings"
    },
    // ================================== COMPETENCY 6 ==========================================
    {
      competency:6,
      question: "What is the purpose of using page templates in Sitecore XM Cloud?",
      options: [
        "a) To ensure all pages share the same header, footer, and key sections",
        "b) To allow developers to write custom HTML for each page",
        "c) To add extra security to the website",
        "d) To create A/B tests for all pages"
      ],
      correct: "a) To ensure all pages share the same header, footer, and key sections"
    },
    {
      competency:6,
      question: "What does the 'Personalize' tab in the page builder allow you to do?",
      options: [
        "a) Create different content for different audiences",
        "b) Track site analytics",
        "c) Edit site settings",
        "d) Add templates to the site"
      ],
      correct: "a) Create different content for different audiences"
    },
    {
      competency:6,
      question: "How can you test the performance of different page variants in Sitecore?",
      options: [
        "a) By conducting A/B/n tests",
        "b) By manually checking each variant",
        "c) By publishing multiple versions",
        "d) By comparing page designs"
      ],
      correct: "a) By conducting A/B/n tests"
    },
    {
      competency:6,
      question: "Which of the following is true about partial designs in Sitecore?",
      options: [
        "a) They consist of reusable layouts like headers, footers, and main sections",
        "b) They are used to create individual page designs",
        "c) They can only be applied to the footer section of a page",
        "d) They are used to add content to the pages"
      ],
      correct: "a) They consist of reusable layouts like headers, footers, and main sections"
    },
    {
      competency:6,
      question: "What is the first step in creating a new page design in Sitecore?",
      options: [
        "a) Assign a page design to a data template",
        "b) Create a new page",
        "c) Add partial designs to the page canvas",
        "d) Publish the page design"
      ],
      correct: "c) Add partial designs to the page canvas"
    },
    {
      competency:6,
      question: "In which section of the Sitecore page builder can you view and manage page content?",
      options: [
        "a) Editor",
        "b) Templates",
        "c) Analyze",
        "d) Personalize"
      ],
      correct: "a) Editor"
    },
    {
      competency:6,
      question: "What happens when you publish a partial design in Sitecore?",
      options: [
        "a) The partial design becomes available for use in pages",
        "b) The design is deleted from the system",
        "c) The design is only applied to a single page",
        "d) It automatically updates all page content"
      ],
      correct: "a) The partial design becomes available for use in pages"
    },
    {
      competency:6,
      question: "What can you do in the 'Analyze' tab of the page builder?",
      options: [
        "a) Check site performance and insights",
        "b) Modify the page layout",
        "c) Add language versions",
        "d) Create new page templates"
      ],
      correct: "a) Check site performance and insights"
    },
    {
      competency:6,
      question: "What is the recommended way to ensure pages share the same header and footer?",
      options: [
        "a) Use partial designs",
        "b) Manually insert code into each page",
        "c) Set a global header in the content editor",
        "d) Apply the same page template for each page"
      ],
      correct: "a) Use partial designs"
    },
    {
      competency:6,
      question: "What is the role of the 'Components' tab in the page builder?",
      options: [
        "a) It displays the components available for the site",
        "b) It allows you to add new pages",
        "c) It shows analytics for the site",
        "d) It manages site users"
      ],
      correct: "a) It displays the components available for the site"
    },
    {
      competency:6,
      question: "What is the first step to assign a page design to a template?",
      options: [
        "a) Click on the Page Design tab",
        "b) Duplicate an existing template",
        "c) Create a new page template",
        "d) Save the page design"
      ],
      correct: "b) Duplicate an existing template"
    },
    {
      competency:6,
      question: "What is the purpose of the 'Datasource Location' field in SXA?",
      options: [
        "a) It defines where to store the data source items",
        "b) It specifies where the user can search for the data source",
        "c) It sets the template for the data source",
        "d) It provides access to rendering data"
      ],
      correct: "b) It specifies where the user can search for the data source"
    },
    {
      competency:6,
      question: "What does the 'Can select Page as a data source' option enable?",
      options: [
        "a) It allows selecting the current page as a data source for renderings",
        "b) It automatically generates a data source",
        "c) It stores data from multiple pages",
        "d) It locks the data source for specific users"
      ],
      correct: "a) It allows selecting the current page as a data source for renderings"
    },
    {
      competency:6,
      question: "What happens when you duplicate an existing template in the page builder?",
      options: [
        "a) You create a new page design",
        "b) The original template is overwritten",
        "c) The duplicated template gets the same page design",
        "d) A new page is created based on the template"
      ],
      correct: "c) The duplicated template gets the same page design"
    },
    {
      competency:6,
      question: "What is a reusable data source in SXA?",
      options: [
        "a) A data source that cannot be reused across multiple pages",
        "b) A data source that can be shared across different components",
        "c) A static data source used for one page only",
        "d) A data source automatically created when a component is added"
      ],
      correct: "b) A data source that can be shared across different components"
    },
    {
      competency:6,
      question: "What is the 'Datasource Template' field used for in SXA?",
      options: [
        "a) It defines the template for the data source item",
        "b) It specifies which component uses the data source",
        "c) It stores the content for the page",
        "d) It defines how to display data on the page"
      ],
      correct: "a) It defines the template for the data source item"
    },
    {
      competency:6,
      question: "What is the role of the 'Data source' field in SXA?",
      options: [
        "a) It stores the content for the page",
        "b) It links the component to the actual data source item",
        "c) It specifies where to find the data source",
        "d) It determines the permissions for data sources"
      ],
      correct: "b) It links the component to the actual data source item"
    },
    {
      competency:6,
      question: "What happens when you rename a local data source item in SXA?",
      options: [
        "a) The link between the component and data source is broken",
        "b) The system automatically updates all references to the data source",
        "c) The component stops displaying the content",
        "d) The data source item is automatically deleted"
      ],
      correct: "a) The link between the component and data source is broken"
    },
    {
      competency:6,
      question: "What is the benefit of using the 'Auto-generated data source' feature?",
      options: [
        "a) It automatically creates and stores data when the rendering is added",
        "b) It allows users to manually create data sources",
        "c) It ensures the data source is shared across all components",
        "d) It links data sources across multiple pages"
      ],
      correct: "a) It automatically creates and stores data when the rendering is added"
    },
    {
      competency:6,
      question: "What should you do if you rename a local data source item?",
      options: [
        "a) Reselect the item in the data source selection dialog",
        "b) Delete the item and create a new one",
        "c) Change all references to absolute paths",
        "d) Let the system update the references automatically"
      ],
      correct: "a) Reselect the item in the data source selection dialog"
    },
    {
      competency:6,
      question: "What should you do if you rename a local data source item?",
      options: [
        "a) Reselect the item in the data source selection dialog",
        "b) Delete the item and create a new one",
        "c) Change all references to absolute paths",
        "d) Let the system update the references automatically"
      ],
      correct: "a) Reselect the item in the data source selection dialog"
    },
    {
      competency:6,
      question: "What is the main purpose of setting the 'Source' field in Sitecore?",
      options: [
        "a) To define the default language",
        "b) To limit the data source selection area",
        "c) To set the fallback item",
        "d) To enable personalization"
      ],
      correct: "b) To limit the data source selection area"
    },
    {
      competency:6,
      question: "What does the Source field report script help identify?",
      options: [
        "a) Missing templates",
        "b) Fields without a Source field set",
        "c) Broken media links",
        "d) Misconfigured layouts"
      ],
      correct: "b) Fields without a Source field set"
    },
    {
      competency:6,
      question: "Where can you configure simulated device widths for previewing in Pages?",
      options: [
        "a) /sitecore/system/Modules/Devices",
        "b) /sitecore/system/Settings/Foundation/Experience Accelerator/Horizon/Devices",
        "c) /sitecore/system/Marketing/Devices",
        "d) /sitecore/Content/Device Settings"
      ],
      correct: "b) /sitecore/system/Settings/Foundation/Experience Accelerator/Horizon/Devices"
    },
    {
      competency:6,
      question: "What visibility setting makes a device type unavailable in Pages?",
      options: [
        "a) Optional",
        "b) Hidden",
        "c) Fixed",
        "d) Disabled"
      ],
      correct: "d) Disabled"
    },
    {
      competency:6,
      question: "What happens if you try to delete a component with a published version?",
      options: [
        "a) It gets permanently deleted",
        "b) It gets archived instead of deleted",
        "c) It is locked by the system",
        "d) It is moved to trash"
      ],
      correct: "b) It gets archived instead of deleted"
    },
    {
      competency:6,
      question: "Where do you click to create a new component collection in XM Cloud Components?",
      options: [
        "a) In the Content Editor",
        "b) In the Pages app",
        "c) In the Components library",
        "d) In the Media Library"
      ],
      correct: "c) In the Components library"
    },
    {
      competency:6,
      question: "What feature allows a component to have multiple visual representations?",
      options: [
        "a) Device simulation",
        "b) Data bindings",
        "c) Component versions",
        "d) Component themes"
      ],
      correct: "c) Component versions"
    },
    {
      competency:6,
      question: "What is a responsive bundle in XM Cloud Components?",
      options: [
        "a) A precompiled theme file",
        "b) A device configuration setting",
        "c) A component that changes layout based on screen width",
        "d) A plugin to add CSS"
      ],
      correct: "c) A component that changes layout based on screen width"
    },
    {
      competency:6,
      question: "How do you restore a previously published and deleted component version?",
      options: [
        "a) Run a restore script from the Content Editor",
        "b) Open recycle bin and click restore",
        "c) Scroll to 'Show archived versions' and click Unarchive",
        "d) Duplicate the original component"
      ],
      correct: "c) Scroll to 'Show archived versions' and click Unarchive"
    },
    {
      competency:6,
      question: "How do you create a version of a component for a specific breakpoint in Sitecore XM Cloud?",
      options: [
        "a) Click 'Add Version' and assign a component ID",
        "b) Click 'Duplicate version', then set the desired breakpoints in 'Breakpoint settings'",
        "c) Change the grid layout in the Style Library",
        "d) Clone the page and select a new layout"
      ],
      correct: "b) Click 'Duplicate version', then set the desired breakpoints in 'Breakpoint settings'"
    },
    {
      competency:6,
      question: "What happens if you do not select any breakpoints for a component version?",
      options: [
        "a) The version will not be visible on any screen",
        "b) The version will only be shown on mobile",
        "c) The version will apply to all screen sizes",
        "d) The version will apply only to desktop sizes"
      ],
      correct: "c) The version will apply to all screen sizes"
    },
    {
      competency:6,
      question: "Which default screen width qualifies as 'Extra Large' according to Sitecore's Style Library?",
      options: [
        "a) Less than 576px",
        "b) 768px to 991px",
        "c) 992px to 1199px",
        "d) 1200px to 1400px"
      ],
      correct: "d) 1200px to 1400px"
    },
    {
      competency:6,
      question: "Where should you upload your custom grid's CSS file?",
      options: [
        "a) sitecore/Media Library/System",
        "b) sitecore/Media Library/Feature/Experience Accelerator",
        "c) sitecore/System/Settings/Grid Styles",
        "d) sitecore/Templates/GridThemes"
      ],
      correct: "b) sitecore/Media Library/Feature/Experience Accelerator"
    },
    {
      competency:6,
      question: "What is the purpose of the Grid Definition item in SXA?",
      options: [
        "a) Defines the layout of pages at runtime",
        "b) Includes all grid system-specific items like devices and classes",
        "c) Contains the global theme settings for the site",
        "d) Links component styles to HTML templates"
      ],
      correct: "b) Includes all grid system-specific items like devices and classes"
    },
    {
      competency:6,
      question: "Which field in the Grid Definition item determines how placeholders behave when fixed?",
      options: [
        "a) Flex",
        "b) Row Class",
        "c) Fixed",
        "d) Wrapping Tag"
      ],
      correct: "c) Fixed"
    },
    {
      competency:6,
      question: "Why is changing the grid system after creating a site not recommended?",
      options: [
        "a) It requires reinstallation of Sitecore modules",
        "b) It breaks component versioning",
        "c) It breaks layout due to existing references to the old grid",
        "d) It resets all content to default"
      ],
      correct: "c) It breaks layout due to existing references to the old grid"
    },
    {
      competency:6,
      question: "Which field in the Grid Definition item specifies the .cshtml file used for page layout?",
      options: [
        "a) Grid body view path",
        "b) Grid field parser type",
        "c) Rendering parameters field type",
        "d) Default component layout"
      ],
      correct: "a) Grid body view path"
    },
    {
      competency:6,
      question: "Which rendering parameter field type is used by default in SXA grids?",
      options: [
        "a) Sitecore.XA.Foundation.Grid.Parser.BasicParser",
        "b) GridRenderingParametersDefaultField, Sitecore.XA",
        "c) Sitecore.XA.Foundation.Grid.Fields.FieldRenderers.GridRenderingParametersFieldRenderer, Sitecore.XA.Foundation.Grid",
        "d) Sitecore.XA.Foundation.Fields.BasicFieldRenderer"
      ],
      correct: "c) Sitecore.XA.Foundation.Grid.Fields.FieldRenderers.GridRenderingParametersFieldRenderer, Sitecore.XA.Foundation.Grid"
    },
    {
      competency:6,
      question: "What is the purpose of the 'Grid Setup' item in SXA?",
      options: [
        "a) To determine component spacing rules",
        "b) To add the grid to the site creation wizard and manage dependencies",
        "c) To define the breakpoints for different devices",
        "d) To assign custom styles to each page"
      ],
      correct: "b) To add the grid to the site creation wizard and manage dependencies"
    },
    // ===========================================COMPETENCY 7 =================================

    {
      competency:7,
      question: "Who can invite team members and manage app access in Sitecore Cloud Portal?",
      options: [
        "a) Content Author",
        "b) Sitecore Developer",
        "c) Organization Admin or Organization Owner",
        "d) XM Cloud User"
      ],
      correct: "c) Organization Admin or Organization Owner"
    },
    {
      competency:7,
      question: "What additional tasks can Organization Admins or Owners perform in Sitecore Cloud Portal?",
      options: [
        "a) Create workflows",
        "b) Assign language fallback",
        "c) Enable SSO, MFA, and create support cases",
        "d) Approve content"
      ],
      correct: "c) Enable SSO, MFA, and create support cases"
    },
    {
      competency:7,
      question: "What are the three levels of access control in XM Cloud?",
      options: [
        "a) Project, Environment, Role",
        "b) User, Role, Domain",
        "c) Team, App, Permission",
        "d) Member, Role, Access Right"
      ],
      correct: "b) User, Role, Domain"
    },
    {
      competency:7,
      question: "What is the function of a role in XM Cloud access management?",
      options: [
        "a) Assigning one-time passwords",
        "b) Mapping domains to users",
        "c) Grouping users and assigning permissions collectively",
        "d) Generating login tokens"
      ],
      correct: "c) Grouping users and assigning permissions collectively"
    },
    {
      competency:7,
      question: "How is a user added to an XM Cloud app?",
      options: [
        "a) By creating a local account manually",
        "b) By sending an invitation from XM Cloud Tools",
        "c) By inviting them to the Sitecore Cloud Portal and giving them app access",
        "d) By configuring domain settings"
      ],
      correct: "c) By inviting them to the Sitecore Cloud Portal and giving them app access"
    },
    {
      competency:7,
      question: "When does a user account get created in an XM Cloud app?",
      options: [
        "a) After assigning a role in the domain",
        "b) When the user logs in to the app for the first time",
        "c) When a user is added to the workflow",
        "d) After publishing content"
      ],
      correct: "b) When the user logs in to the app for the first time"
    },
    {
      competency:7,
      question: "How can you assign roles and access rights to a user in XM Cloud?",
      options: [
        "a) Via the user profile page",
        "b) Through Sitecore CLI only",
        "c) Using Access Management or claims mapping",
        "d) From the domain admin panel"
      ],
      correct: "c) Using Access Management or claims mapping"
    },
    {
      competency:7,
      question: "Which XM Cloud app role always has the highest level of permissions?",
      options: [
        "a) Content Author",
        "b) Organization Member",
        "c) Admin",
        "d) User"
      ],
      correct: "c) Admin"
    },
    {
      competency:7,
      question: "What is true about users with 'Organization Admin' role in Sitecore Cloud Portal?",
      options: [
        "a) They can be deleted from the app directly",
        "b) They automatically receive the highest role in all XM Cloud apps",
        "c) They must be manually assigned to each role",
        "d) They can only manage one app at a time"
      ],
      correct: "b) They automatically receive the highest role in all XM Cloud apps"
    },
    {
      competency:7,
      question: "How can you remove or change the role of an Admin user in XM Cloud?",
      options: [
        "a) Through the Access Management page in XM Cloud",
        "b) Using the CLI tool",
        "c) By changing settings in the domain",
        "d) From the Sitecore Cloud Portal"
      ],
      correct: "d) From the Sitecore Cloud Portal"
    },
    {
      competency:7,
      question: "What is the purpose of claims mapping in Sitecore XM Cloud?",
      options: [
        "a) To create new Sitecore roles",
        "b) To assign XM Cloud roles based on identity provider claims",
        "c) To store user data in Sitecore database",
        "d) To manage analytics data"
      ],
      correct: "b) To assign XM Cloud roles based on identity provider claims"
    },
    {
      competency:7,
      question: "Where do you configure the mapping of IdP claims to Sitecore ID token claims?",
      options: [
        "a) In the Sitecore Role Manager",
        "b) In the config file on XM Cloud environment",
        "c) On the Sitecore Cloud Portal SSO page",
        "d) In the user profile settings"
      ],
      correct: "c) On the Sitecore Cloud Portal SSO page"
    },
    {
      competency:7,
      question: "What type of regular expressions can be used in claim value matching?",
      options: [
        "a) PCRE",
        "b) Java syntax",
        "c) ECMAScript syntax",
        "d) Python syntax"
      ],
      correct: "c) ECMAScript syntax"
    },
    {
      competency:7,
      question: "Where should you place the CustomClaims.config file in the XM Cloud environment?",
      options: [
        "a) root folder",
        "b) authoring/platform/App_Config/Include",
        "c) /data/claims",
        "d) wwwroot/config"
      ],
      correct: "b) authoring/platform/App_Config/Include"
    },
    {
      competency:7,
      question: "What role is assigned to all users in the example claims mapping?",
      options: [
        "a) Sitecore\\Developer",
        "b) Sitecore\\Campaign Manager",
        "c) Sitecore\\Default User",
        "d) Sitecore\\Analytics Reader"
      ],
      correct: "c) Sitecore\\Default User"
    },
    {
      competency:7,
      question: "What must the IdP return in order for XM Cloud to assign roles automatically?",
      options: [
        "a) HTML forms",
        "b) Username and password",
        "c) ID token or SAML response with proper claims",
        "d) API key and secret"
      ],
      correct: "c) ID token or SAML response with proper claims"
    },
    {
      competency:7,
      question: "What prefix is added to a target claim in the Sitecore token?",
      options: [
        "a) sitecore_",
        "b) idp_",
        "c) The SSO connection ID",
        "d) claim_"
      ],
      correct: "c) The SSO connection ID"
    },
    {
      competency:7,
      question: "How many claims mappings can you define per SSO connection?",
      options: [
        "a) 10",
        "b) 15",
        "c) 20",
        "d) Unlimited"
      ],
      correct: "c) 20"
    },
    {
      competency:7,
      question: "What happens if multiple claims are mapped with the same name in one token exchange?",
      options: [
        "a) Only the first one is used",
        "b) Sitecore merges them automatically",
        "c) Claims mapping fails and a warning is shown",
        "d) The user is logged out"
      ],
      correct: "c) Claims mapping fails and a warning is shown"
    },
    {
      competency:7,
      question: "Which claim value is used in the example to assign the Campaign Manager role?",
      options: [
        "a) ^default_user$",
        "b) ^developer$",
        "c) ^campaign_manager$",
        "d) ^admin$"
      ],
      correct: "c) ^campaign_manager$"
    },
    {
      competency:7,
      question: "What is the purpose of using roles in Sitecore XM Cloud?",
      options: [
        "a) To limit user login times",
        "b) To group users for security access management",
        "c) To assign users to workflows",
        "d) To store user passwords securely"
      ],
      correct: "b) To group users for security access management"
    },
    {
      competency:7,
      question: "Where can you manage roles in Sitecore XM Cloud?",
      options: [
        "a) Content Editor",
        "b) Experience Editor",
        "c) Role Manager",
        "d) Domain Manager"
      ],
      correct: "c) Role Manager"
    },
    {
      competency:7,
      question: "What happens to a role’s access rights when the role is deleted?",
      options: [
        "a) They are transferred to all users",
        "b) They are removed from the content tree",
        "c) They remain stored on the individual items",
        "d) They are deleted permanently"
      ],
      correct: "c) They remain stored on the individual items"
    },
    {
      competency:7,
      question: "Which role gives access to the Experience Editor’s Presentation tab?",
      options: [
        "a) Author",
        "b) Designer",
        "c) Developer",
        "d) Sitecore Client Authoring"
      ],
      correct: "b) Designer"
    },
    {
      competency:7,
      question: "Which role includes both design and authoring capabilities?",
      options: [
        "a) Author",
        "b) Developer",
        "c) Sitecore Client Designing",
        "d) Sitecore Client Maintaining"
      ],
      correct: "b) Developer"
    },
    {
      competency:7,
      question: "Which role has access to template editing features and reporting tools?",
      options: [
        "a) Sitecore Client Translating",
        "b) Sitecore Client Authoring",
        "c) Sitecore Client Maintaining",
        "d) Sitecore Client Publishing"
      ],
      correct: "c) Sitecore Client Maintaining"
    },
    {
      competency:7,
      question: "How are users added to a role in XM Cloud?",
      options: [
        "a) Through the User Manager only",
        "b) By editing the user’s profile",
        "c) In the Role Manager > Members section",
        "d) Through the Publishing Wizard"
      ],
      correct: "c) In the Role Manager > Members section"
    },
    {
      competency:7,
      question: "Which role is automatically assigned to all users?",
      options: [
        "a) Developer",
        "b) Author",
        "c) Everyone",
        "d) Sitecore Client Users"
      ],
      correct: "c) Everyone"
    },
    {
      competency:7,
      question: "What must be done to assign a new role to all domains?",
      options: [
        "a) Assign the role to the root item",
        "b) Keep the role in the default XM Cloud domain",
        "c) Set global permissions",
        "d) Use Role Sync"
      ],
      correct: "b) Keep the role in the default XM Cloud domain"
    },
    {
      competency:7,
      question: "Which role gives access to maintain users and domains?",
      options: [
        "a) Sitecore Client Securing",
        "b) Sitecore Client Account Managing",
        "c) Sitecore Local Administrators",
        "d) Sitecore Client Configuring"
      ],
      correct: "b) Sitecore Client Account Managing"
    },
    {
      competency:7,
      question: "Which role provides minimal access, allowing only login to the Desktop?",
      options: [
        "a) Sitecore Client Users",
        "b) Sitecore Client Authoring",
        "c) Sitecore Limited Content Editor",
        "d) Developer"
      ],
      correct: "a) Sitecore Client Users"
    },
    {
      competency:7,
      question: "To add access rights to a new role, you must:",
      options: [
        "a) Map claims",
        "b) Edit the config files",
        "c) Assign access rights manually",
        "d) Use User Manager"
      ],
      correct: "c) Assign access rights manually"
    },
    {
      competency:7,
      question: "Which role is not part of the role database but still used for access rights?",
      options: [
        "a) Developer",
        "b) Everyone",
        "c) Author",
        "d) Sitecore Client Authoring"
      ],
      correct: "b) Everyone"
    },
    {
      competency:7,
      question: "Which role allows a user to perform republishing?",
      options: [
        "a) Sitecore Client Authoring",
        "b) Sitecore Client Advanced Publishing",
        "c) Developer",
        "d) Author"
      ],
      correct: "b) Sitecore Client Advanced Publishing"
    },
    {
      competency:7,
      question: "What is a characteristic of a user with multiple roles?",
      options: [
        "a) User can log in only once a day",
        "b) Access rights are averaged",
        "c) User gains all access rights from all roles",
        "d) User must choose a primary role"
      ],
      correct: "c) User gains all access rights from all roles"
    },
    {
      competency:7,
      question: "Which role limits Content Editor to Home, Review, and Publish tabs?",
      options: [
        "a) Sitecore Limited Page Editor",
        "b) Sitecore Client Authoring",
        "c) Sitecore Limited Content Editor",
        "d) Author"
      ],
      correct: "c) Sitecore Limited Content Editor"
    },
    {
      competency:7,
      question: "Which role allows access to configure item appearance and attributes?",
      options: [
        "a) Sitecore Client Configuring",
        "b) Sitecore Client Securing",
        "c) Sitecore Client Site Managing",
        "d) Sitecore Client Publishing"
      ],
      correct: "a) Sitecore Client Configuring"
    },
    {
      competency:7,
      question: "Which role gives access to the Sitecore translation features?",
      options: [
        "a) Sitecore Client Site Managing",
        "b) Sitecore Client Translating",
        "c) Sitecore Client Users",
        "d) Sitecore Client Authoring"
      ],
      correct: "b) Sitecore Client Translating"
    },
    {
      competency:7,
      question: "When you delete a role, what happens to its members?",
      options: [
        "a) They are removed from Sitecore",
        "b) They are reassigned to another role",
        "c) They lose all permissions granted by that role",
        "d) Nothing changes"
      ],
      correct: "c) They lose all permissions granted by that role"
    },
    {
      competency:7,
      question: "Which of the following is **not** automatically included in the Developer role?",
      options: [
        "a) Sitecore Client Authoring",
        "b) Sitecore Client Designing",
        "c) Sitecore Client Maintaining",
        "d) Sitecore Client Users"
      ],
      correct: "c) Sitecore Client Maintaining"
    },
    // ========================COMPETENCY 8 ==========================================
    {
      competency:8,
      question: "What happens when a field value is NULL in a Sitecore item?",
      options: [
        "a) The field is ignored entirely",
        "b) The field uses the standard value from its data template",
        "c) The field displays an error",
        "d) The field automatically becomes blank"
      ],
      correct: "b) The field uses the standard value from its data template"
    },
    {
      competency:8,
      question: "Which of the following tokens replaces itself with the name of the item during creation?",
      options: [
        "a) $id",
        "b) $parentname",
        "c) $name",
        "d) $now"
      ],
      correct: "c) $name"
    },
    {
      competency:8,
      question: "Where are standard values stored in Sitecore?",
      options: [
        "a) As a hidden field in each item",
        "b) As a property in the Sitecore database",
        "c) As a child item under the data template",
        "d) In the web.config file"
      ],
      correct: "c) As a child item under the data template"
    },
    {
      competency:8,
      question: "Which Sitecore tab contains the option to reset layout details to standard values?",
      options: [
        "a) Configure",
        "b) Presentation",
        "c) Content",
        "d) Developer"
      ],
      correct: "b) Presentation"
    },
    {
      competency:8,
      question: "What must be checked to convert a blank field into NULL so that standard values can apply?",
      options: [
        "a) Use Standard Value",
        "b) Reset to Default",
        "c) Reset Blank",
        "d) Enable Null"
      ],
      correct: "c) Reset Blank"
    },
    {
      competency:8,
      question: "Which method can be used in .NET to reset a field to its standard value?",
      options: [
        "a) item.Fields.ResetValue()",
        "b) item.ResetField()",
        "c) field.Reset()",
        "d) Sitecore.Field.ResetAll()"
      ],
      correct: "c) field.Reset()"
    },
    {
      competency:8,
      question: "What is the main benefit of defining insert options in standard values instead of individual items?",
      options: [
        "a) Better performance",
        "b) Easier localization",
        "c) Centralized management and consistency",
        "d) Improved layout rendering"
      ],
      correct: "c) Centralized management and consistency"
    },
    {
      competency:8,
      question: "Which pipeline is used by Sitecore to construct the list of effective insert options?",
      options: [
        "a) renderLayout",
        "b) uiGetMasters",
        "c) insertItems",
        "d) itemCreator"
      ],
      correct: "b) uiGetMasters"
    },
    {
      competency:8,
      question: "What is the difference between assigned insert options and effective insert options?",
      options: [
        "a) Assigned options are temporary, effective options are permanent",
        "b) Effective options are resolved at runtime using assigned options and rules",
        "c) Assigned options apply to users, effective options apply to admins",
        "d) There is no difference"
      ],
      correct: "b) Effective options are resolved at runtime using assigned options and rules"
    },
    {
      competency:8,
      question: "What happens if multiple base templates define a standard value for the same field?",
      options: [
        "a) The values are merged together",
        "b) All values are ignored",
        "c) The value from the first template in the inheritance list is used",
        "d) Sitecore throws a conflict error"
      ],
      correct: "c) The value from the first template in the inheritance list is used"
    },
    {
      competency:8,
      question: "What defines the structure of items in Sitecore?",
      options: [
        "a) Fields",
        "b) Sections",
        "c) Data templates",
        "d) Base templates"
      ],
      correct: "c) Data templates"
    },
    {
      competency:8,
      question: "What happens when you change a data template in Sitecore?",
      options: [
        "a) The items based on the template are immediately republished",
        "b) The change applies to all items based on the template without changing their revision numbers",
        "c) The items based on the template are deleted",
        "d) The items based on the template are automatically updated in the database"
      ],
      correct: "b) The change applies to all items based on the template without changing their revision numbers"
    },
    {
      competency:8,
      question: "What is the primary purpose of data template sections in Sitecore?",
      options: [
        "a) To organize fields for easier navigation in the content editor",
        "b) To define the layout of the Sitecore item",
        "c) To set field validation rules",
        "d) To add security settings for the data template"
      ],
      correct: "a) To organize fields for easier navigation in the content editor"
    },
    {
      competency:8,
      question: "Which of the following is true about base templates in Sitecore?",
      options: [
        "a) They override fields in the data template",
        "b) Fields from base templates are merged into the data template",
        "c) Base templates are only used for layout definition",
        "d) Base templates cannot be used in data templates"
      ],
      correct: "b) Fields from base templates are merged into the data template"
    },
    {
      competency:8,
      question: "What happens when you add a section to a data template in Sitecore?",
      options: [
        "a) The section is added to the data template and visible in the content editor",
        "b) The section is added but hidden from the content editor",
        "c) The section automatically becomes a base template",
        "d) The section is ignored if not associated with a field"
      ],
      correct: "a) The section is added to the data template and visible in the content editor"
    },
    {
      competency:8,
      question: "Which of the following actions can you perform in the Template Manager in Sitecore?",
      options: [
        "a) Edit base templates",
        "b) Add a new field to an existing data template",
        "c) Change the data template associated with an item",
        "d) Delete a content item"
      ],
      correct: "b) Add a new field to an existing data template"
    },
    {
      competency:8,
      question: "In Sitecore, how are icons configured for a data template?",
      options: [
        "a) Icons are automatically assigned based on the template type",
        "b) Icons must be manually set using the Configure tab",
        "c) Icons are set for individual items, not templates",
        "d) Icons are inherited from the base template"
      ],
      correct: "b) Icons must be manually set using the Configure tab"
    },
    {
      competency:8,
      question: "Which statement is true about the inheritance of base templates in Sitecore?",
      options: [
        "a) Data templates can inherit from multiple base templates",
        "b) A base template cannot be inherited by another template",
        "c) Only the first base template is used for a data template",
        "d) Inheritance is not supported in data templates"
      ],
      correct: "a) Data templates can inherit from multiple base templates"
    },
    {
      competency:8,
      question: "What happens if a data template field is defined in both the data template and a base template?",
      options: [
        "a) The field value from the data template is used",
        "b) The field value from the base template is used",
        "c) The field values from both templates are merged",
        "d) Sitecore throws an error"
      ],
      correct: "b) The field value from the base template is used"
    },
    {
      competency:8,
      question: "How can you change the template associated with an item in Sitecore?",
      options: [
        "a) By editing the item's content",
        "b) By using the Configure tab and clicking 'Change Template'",
        "c) By modifying the base templates in the Template Manager",
        "d) By deleting the item and creating a new one with the desired template"
      ],
      correct: "b) By using the Configure tab and clicking 'Change Template'"
    },
    {
      competency:8,
      question: "What does a section in a data template in Sitecore help with?",
      options: [
        "a) Grouping related fields for better organization",
        "b) Defining access control for fields",
        "c) Setting default values for fields",
        "d) Creating validation rules for fields"
      ],
      correct: "a) Grouping related fields for better organization"
    },
    {
      competency:8,
      question: "What happens when a base template defines a field but the data template does not?",
      options: [
        "a) The field is ignored by Sitecore",
        "b) The field value from the base template is inherited",
        "c) The field is added to the data template automatically",
        "d) Sitecore throws a conflict error"
      ],
      correct: "b) The field value from the base template is inherited"
    },
    {
      competency:8,
      question: "Which of the following options is not available in the Template Manager for a data template?",
      options: [
        "a) Add a field",
        "b) Edit a field's settings",
        "c) Change the template icon",
        "d) Republish all items associated with the template"
      ],
      correct: "d) Republish all items associated with the template"
    },
    {
      competency:8,
      question: "How can you view hidden items in the Template Manager or Content Editor?",
      options: [
        "a) By selecting the 'Show Hidden Items' checkbox in the View tab",
        "b) By using a special admin account to unlock hidden items",
        "c) By searching for hidden items specifically",
        "d) By using the Developer Tools in the browser"
      ],
      correct: "a) By selecting the 'Show Hidden Items' checkbox in the View tab"
    },
    {
      competency:8,
      question: "What is the purpose of the 'Add Site Language' script in Sitecore?",
      options: [
        "a) To add a new language version to the entire site",
        "b) To translate existing content to a new language",
        "c) To add language-specific fields to items",
        "d) To enable localization of the site for multiple languages"
      ],
      correct: "a) To add a new language version to the entire site"
    },
    {
      competency:8,
      question: "Where do you add languages to a Sitecore environment?",
      options: [
        "a) sitecore/System/Languages",
        "b) sitecore/System/Sites",
        "c) sitecore/Content/Localization",
        "d) sitecore/Content/Settings"
      ],
      correct: "a) sitecore/System/Languages"
    },
    {
      competency:8,
      question: "What happens when you add a language version to an SXA site in Sitecore?",
      options: [
        "a) All site items and field values are copied from the source language to the target language",
        "b) Only standard values for templates are copied to the new language",
        "c) Only layout details are replicated",
        "d) The site content is automatically translated into the new language"
      ],
      correct: "a) All site items and field values are copied from the source language to the target language"
    },
    {
      competency:8,
      question: "What should you do before adding a new language version in Sitecore?",
      options: [
        "a) Ensure that the target languages have been added to the environment",
        "b) Change the site structure to accommodate multiple languages",
        "c) Define new field values for each language",
        "d) Translate all content manually"
      ],
      correct: "a) Ensure that the target languages have been added to the environment"
    },
    {
      competency:8,
      question: "How can you add a language version to a Sitecore SXA site?",
      options: [
        "a) Right-click the site item and select 'Add Site Language' from the Scripts menu",
        "b) Manually edit the content of the site item",
        "c) Use the Sitecore PowerShell console to add a language",
        "d) Create a new item for the language in the 'Content' section"
      ],
      correct: "a) Right-click the site item and select 'Add Site Language' from the Scripts menu"
    },
    {
      competency:8,
      question: "Where can you find the option to view your site in a different language in Sitecore?",
      options: [
        "a) In the Versions tab, under the Language group",
        "b) In the Site Settings menu",
        "c) In the Content Editor's Language section",
        "d) In the Sitecore Control Panel"
      ],
      correct: "a) In the Versions tab, under the Language group"
    },
    {
      competency:8,
      question: "What is the Experience Edge schema in Sitecore designed for?",
      options: [
        "a) It is a read-only GraphQL schema for headless Sitecore development",
        "b) It is used to manage the content delivery system in Sitecore",
        "c) It stores all site data and templates for faster access",
        "d) It allows for real-time updates of the Sitecore experience"
      ],
      correct: "a) It is a read-only GraphQL schema for headless Sitecore development"
    },
    {
      competency:8,
      question: "Which query in the Experience Edge schema allows querying an item by its path or ID?",
      options: [
        "a) item",
        "b) layout",
        "c) search",
        "d) site"
      ],
      correct: "a) item"
    },
    {
      competency:8,
      question: "What does the 'search' query in the Experience Edge schema allow you to do?",
      options: [
        "a) Search for items by field value or common properties",
        "b) Retrieve layout data for a specific item",
        "c) Query the entire Sitecore content tree",
        "d) Look up site-specific metadata"
      ],
      correct: "a) Search for items by field value or common properties"
    },
    {
      competency:8,
      question: "What should you do if your Experience Edge query is too complex?",
      options: [
        "a) Break the query into multiple smaller queries",
        "b) Increase the query complexity limit",
        "c) Use more fields in your query",
        "d) Simplify the template structure"
      ],
      correct: "a) Break the query into multiple smaller queries"
    },
    {
      competency:8,
      question: "In the Experience Edge schema, what does the '_parent' field represent?",
      options: [
        "a) The ID of the item's immediate parent",
        "b) The parent site of the item",
        "c) The field that stores metadata about the parent item",
        "d) A reference to the parent template"
      ],
      correct: "a) The ID of the item's immediate parent"
    },
    {
      competency:8,
      question: "What is a special field available for content search in the Experience Edge schema?",
      options: [
        "a) _path",
        "b) _created",
        "c) _author",
        "d) _template"
      ],
      correct: "a) _path"
    },
    {
      competency:8,
      question: "In Sitecore Experience Edge, what does the '_hasLayout' field indicate?",
      options: [
        "a) Whether the item has presentation details/layout data",
        "b) The layout of the item based on its template",
        "c) The default layout applied to all items",
        "d) Whether the layout has been customized"
      ],
      correct: "a) Whether the item has presentation details/layout data"
    },
    {
      competency:8,
      question: "How can you manipulate an image using Sitecore Experience Edge?",
      options: [
        "a) By applying query parameters such as width (w) and height (h)",
        "b) By uploading a new version of the image",
        "c) By using the 'Edit Media' option in the Media Library",
        "d) By setting image permissions"
      ],
      correct: "a) By applying query parameters such as width (w) and height (h)"
    },
    {
      competency:8,
      question: "Which image file formats are supported for manipulation in Sitecore Experience Edge?",
      options: [
        "a) avif, webp, jpeg",
        "b) png, jpg, svg",
        "c) jpeg, bmp, tiff",
        "d) gif, webp, png"
      ],
      correct: "a) avif, webp, jpeg"
    },
    {
      competency:8,
      question: "What is the 'first' argument used for in paginated queries in the Experience Edge schema?",
      options: [
        "a) To define the number of results to return",
        "b) To specify the starting point of the query",
        "c) To determine which field to search by",
        "d) To filter the query results by date"
      ],
      correct: "a) To define the number of results to return"
    },
    {
      competency:8,
      question: "What does the 'endCursor' in a paginated query result indicate?",
      options: [
        "a) The cursor used to obtain the next page of results",
        "b) The total number of available results",
        "c) The field to apply a filter on in the next query",
        "d) The point at which the query stops"
      ],
      correct: "a) The cursor used to obtain the next page of results"
    },
    {
      competency:8,
      question: "What does a naming collision in GraphQL schema types indicate?",
      options: [
        "a) The newest creation date item or field has '_{guid}' appended to the name",
        "b) The schema is not compatible with Sitecore's naming conventions",
        "c) The item or field name is duplicated and needs to be resolved manually",
        "d) The schema needs to be regenerated for consistency"
      ],
      correct: "a) The newest creation date item or field has '_{guid}' appended to the name"
    }
  ];
  
  export default questions;
  