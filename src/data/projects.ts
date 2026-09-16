import skincareProjectImage from "@/assets/skin-care-ecommerce-project.jpg";

export interface PortfolioProject {
  name: string;
  slug: string;
  description: string;
  fullDescription: string;
  stack: string[];
  impact: string;
  features: string[];
  focus: string[];
  image?: string;
}

export const projects: PortfolioProject[] = [
  {
    name: "Skin Care E-Commerce Website",
    slug: "skin-care-e-commerce-website",
    description:
      "A complete Full-Stack e-commerce application for browsing, managing, and purchasing skincare products.",
    fullDescription:
      "A responsive Full-Stack e-commerce website that brings the customer shopping experience and product administration together in one application. It demonstrates my ability to work across interface development, server-side logic, authentication, and relational data.",
    stack: ["HTML", "CSS", "JavaScript", "PHP", "Laravel", "MySQL"],
    impact: "Primary Full-Stack project",
    features: [
      "Product browsing and detailed product pages",
      "Shopping cart and user authentication",
      "Responsive, dynamic customer-facing pages",
      "Admin dashboard for adding, updating, and deleting products",
    ],
    focus: [
      "End-to-end web application development",
      "Front-end and back-end integration",
      "Authentication and product-management workflows",
      "Relational data management with MySQL",
    ],
    image: skincareProjectImage,
  },
  {
    name: "Library Management System",
    slug: "library-management-system",
    description:
      "A relational database system for organizing books, authors, customers, employees, and book types.",
    fullDescription:
      "A Microsoft Access database application designed to organize core library records and make day-to-day data entry, searching, and reporting easier through a customized interface.",
    stack: ["Microsoft Access", "Relational Databases", "SQL"],
    impact: "Database design and management project",
    features: [
      "Structured data for books, authors, customers, employees, and book types",
      "CRUD operations through customized forms",
      "Search and filtering queries",
      "Reports, navigation, validation, and table relationships",
    ],
    focus: [
      "Relational database design",
      "Data integrity and validation",
      "Usable forms and navigation",
      "Querying, filtering, and reporting",
    ],
  },
  {
    name: "OOP Shape Calculator System",
    slug: "oop-shape-calculator-system",
    description:
      "A Java desktop application that calculates area and volume using core object-oriented programming principles.",
    fullDescription:
      "A desktop calculator built in Java with a graphical interface and separate shape classes. The project applies inheritance and polymorphism while supporting saved and loaded data through file handling.",
    stack: ["Java", "Eclipse", "GUI", "OOP"],
    impact: "Object-oriented Java application",
    features: [
      "Area and volume calculations for different geometric shapes",
      "Graphical user interface",
      "Inheritance, polymorphism, and separate shape classes",
      "File handling for saving and loading data",
    ],
    focus: [
      "Object-oriented software design",
      "Reusable class structures",
      "Desktop interface development",
      "Persistent local file handling",
    ],
  },
];