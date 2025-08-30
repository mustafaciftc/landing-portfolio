import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaCode, FaMobile, FaPalette } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const PortfolioLanding = () => {
    const projects = [
        {
            title: "Portfolio Website",
            description: "Modern, responsive portfolio website built with React and Bootstrap.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            tags: ["React", "Bootstrap", "CSS"],
            link: "#"
        },
        {
            title: "E-commerce App",
            description: "Full-featured e-commerce platform with payment integration and user dashboard.",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            tags: ["React", "Node.js", "MongoDB"],
            link: "#"
        },
        {
            title: "Chat App",
            description: "Real-time messaging application with multiple rooms and media sharing.",
            image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
            tags: ["Socket.io", "React", "Express"],
            link: "#"
        }
    ];

    const skills = [
        { name: "Frontend Development", icon: <FaCode />, description: "React, Vue, HTML5, CSS3, JavaScript" },
        { name: "Responsive Design", icon: <FaMobile />, description: "Bootstrap, Tailwind, Mobile-first approach" },
        { name: "UI/UX Design", icon: <FaPalette />, description: "Figma, Adobe XD, User-centered design" }
    ];

    return (
        <div className="portfolio-container">
            {/* Navbar */}
            <Navbar bg="white" expand="lg" fixed="top" className="portfolio-navbar shadow-sm">
                <Container>
                    <Navbar.Brand href="#" className="fw-bold fs-3 text-primary">Web Developer</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#about" className="fw-medium">About</Nav.Link>
                            <Nav.Link href="#skills" className="fw-medium">Skills</Nav.Link>
                            <Nav.Link href="#projects" className="fw-medium">Projects</Nav.Link>
                            <Nav.Link href="#contact" className="fw-medium">Contact</Nav.Link>
                        </Nav>
                        <Button variant="primary" className="ms-3 rounded-pill px-4">Hire Me</Button>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            {/* Hero Section */}
            <section className="hero-section">
                <Container>
                    <Row className="min-vh-100 align-items-center">
                        <Col lg={6}>
                            <div className="hero-content">
                                <h1 className="display-4 fw-bold mb-4">Hi, I'm <span className="text-primary">Ali Yılmaz</span></h1>
                                <h2 className="display-6 fw-semibold mb-4">Web Developer & UI Designer</h2>
                                <p className="lead mb-5">
                                    I create modern, fast and responsive web applications with a focus on user experience and clean code.
                                </p>
                                <div className="d-flex flex-wrap gap-3">
                                    <Button variant="primary" size="lg" className="rounded-pill px-4">
                                        View My Work
                                    </Button>
                                    <Button variant="outline-primary" size="lg" className="rounded-pill px-4">
                                        <FaDownload className="me-2" />
                                        Download CV
                                    </Button>
                                </div>
                            </div>
                        </Col>
                        <Col lg={6} className="d-none d-lg-block">
                            <div className="hero-image-container">
                                <img 
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                                    alt="Ali Yılmaz" 
                                    className="hero-image rounded-circle"
                                />
                                <div className="floating-element element-1"></div>
                                <div className="floating-element element-2"></div>
                                <div className="floating-element element-3"></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* About Section */}
            <section id="about" className="py-5 bg-light">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={6} className="mb-5 mb-lg-0">
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                                alt="About Ali Yılmaz"
                                className="img-fluid rounded-3 shadow"
                            />
                        </Col>
                        <Col lg={6}>
                            <h2 className="display-5 fw-bold mb-4">About Me</h2>
                            <p className="lead mb-4">
                                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions for businesses worldwide.
                            </p>
                            <p className="mb-4">
                                My expertise includes building responsive web applications, creating intuitive user interfaces, and implementing robust backend systems. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                            </p>
                            <div className="d-flex flex-wrap gap-3">
                                <Button variant="primary" className="rounded-pill">
                                    <FaDownload className="me-2" />
                                    Download CV
                                </Button>
                                <Button variant="outline-primary" className="rounded-pill">
                                    Contact Me
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-5">
                <Container>
                    <Row className="text-center mb-5">
                        <Col>
                            <h2 className="display-5 fw-bold mb-3">My Skills</h2>
                            <p className="lead text-muted">I specialize in these areas</p>
                        </Col>
                    </Row>
                    <Row>
                        {skills.map((skill, index) => (
                            <Col md={4} key={index} className="mb-4">
                                <Card className="h-100 border-0 skill-card">
                                    <Card.Body className="text-center p-4">
                                        <div className="skill-icon mb-3">
                                            {skill.icon}
                                        </div>
                                        <Card.Title as="h3" className="fs-4 fw-bold mb-3">{skill.name}</Card.Title>
                                        <Card.Text className="text-muted">
                                            {skill.description}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-5 bg-light">
                <Container>
                    <Row className="text-center mb-5">
                        <Col>
                            <h2 className="display-5 fw-bold mb-3">My Projects</h2>
                            <p className="lead text-muted">Check out some of my recent work</p>
                        </Col>
                    </Row>
                    <Row>
                        {projects.map((project, index) => (
                            <Col lg={4} md={6} key={index} className="mb-4">
                                <Card className="h-100 border-0 project-card">
                                    <div className="project-image-container">
                                        <Card.Img variant="top" src={project.image} />
                                        <div className="project-overlay">
                                            <Button variant="primary" className="rounded-pill">View Project</Button>
                                        </div>
                                    </div>
                                    <Card.Body className="p-4">
                                        <Card.Title as="h3" className="fs-4 fw-bold mb-3">{project.title}</Card.Title>
                                        <Card.Text className="text-muted mb-3">
                                            {project.description}
                                        </Card.Text>
                                        <div className="d-flex flex-wrap gap-2">
                                            {project.tags.map((tag, i) => (
                                                <Badge key={i} bg="light" text="dark" className="rounded-pill px-3 py-2">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-5">
                <Container>
                    <Row className="text-center mb-5">
                        <Col lg={8} className="mx-auto">
                            <h2 className="display-5 fw-bold mb-3">Let's Work Together</h2>
                            <p className="lead mb-4">
                                I'm available for freelance projects and full-time opportunities. Feel free to reach out if you want to collaborate with me.
                            </p>
                            <Button variant="primary" size="lg" className="rounded-pill px-4">
                                <FaEnvelope className="me-2" />
                                Get in Touch
                            </Button>
                        </Col>
                    </Row>
                    <Row className="text-center mt-5">
                        <Col>
                            <div className="d-flex justify-content-center gap-4 social-icons">
                                <a href="#" className="text-dark fs-3"><FaGithub /></a>
                                <a href="#" className="text-primary fs-3"><FaLinkedin /></a>
                                <a href="#" className="text-dark fs-3"><FaXTwitter /></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Footer */}
            <footer className="bg-dark text-light py-5">
                <Container>
                    <Row className="text-center">
                        <Col>
                            <p className="mb-0">© {new Date().getFullYear()} Web Developer. All rights reserved.</p>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div>
    );
}

export default PortfolioLanding;