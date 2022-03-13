import "./App.css";
import { Navbar, Container, Nav, Button, Row, Col } from "react-bootstrap";
import {
  Badge,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import {
  FaCog,
  FaRegHandPointRight,
  FaWrench,
  FaLaptop,
  FaHammer,
  FaCubes,
  FaFacebook,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";

function App() {
  return (
    <>
      <div className="App">
        <section className="section1">
          <Navbar collapseOnSelect expand="lg" className="main-nav">
            <Container fluid>
              <Navbar.Brand href="#home">Tractian</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#features">About Us</Nav.Link>
                  <Nav.Link href="#pricing">Pricing</Nav.Link>
                  <Nav.Link href="#services">Services</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link href="#deets">Meet Customers</Nav.Link>

                  <Button href="#" className="demo-btn">
                    Schedule Demo
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
          <div className="content-wrap">
            <Container bg="light">
              <Row>
                <Col xs={12} md={6}>
                  <h1 className="title">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </h1>
                  <p className="sub-txt">
                    Curabitur feugiat ipsum dictum tortor mattis consectetur.
                    Praesent fermentum sodales risus sit amet eleifend.
                  </p>
                  <Button href="#" className="demo-btn">
                    Schedule Demo
                  </Button>
                </Col>
                <Col xs={12} md={6}>
                  <img src={require("./uploads/side-img.png")} alt="logo" />
                </Col>
              </Row>
            </Container>
          </div>
        </section>
        <section className="section2 section-lg pt-lg-0 mt--200">
          <Container>
            <Row className="justify-content-center">
              <Col lg="12">
                <Row className="row-grid">
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-4">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <h6 className="text-primary text-uppercase">
                          Mauris dignissim
                        </h6>
                        <p className="description mt-3">
                          Sed ac porttitor mi. Morbi laoreet a libero et
                          aliquam. Donec sit amet consequat turpis, a mattis
                          sapien. Curabitur ultricies leo mauris. Nulla faucibus
                          posuere maximus.
                        </p>
                        <div>
                          <Badge color="primary" pill className="mr-1">
                            design
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            system
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            creative
                          </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Learn more
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-4">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <h6 className="text-primary text-uppercase">
                          Urna velit
                        </h6>
                        <p className="description mt-3">
                          Pellentesque ut maximus nulla. Nam dignissim maximus
                          metus, sed finibus neque feugiat non. Aenean finibus
                          nulla vel ligula sagittis, ac vulputate eros
                          sollicitudin.
                        </p>
                        <div>
                          <Badge color="primary" pill className="mr-1">
                            design
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            system
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            creative
                          </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Learn more
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="4">
                    <Card className="card-lift--hover shadow border-0">
                      <CardBody className="py-4">
                        <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                          <i className="ni ni-check-bold" />
                        </div>
                        <h6 className="text-primary text-uppercase">
                          Sed viverra
                        </h6>
                        <p className="description mt-3">
                          Pellentesque habitant morbi tristique senectus et
                          netus et malesuada fames ac turpis egestas. Aenean
                          pellentesque mollis purus eu eleifend neque et augue
                          cursus.
                        </p>
                        <div>
                          <Badge color="primary" pill className="mr-1">
                            design
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            system
                          </Badge>
                          <Badge color="primary" pill className="mr-1">
                            creative
                          </Badge>
                        </div>
                        <Button
                          className="mt-4"
                          color="primary"
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Learn more
                        </Button>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section3 section-lg pt-lg-5 pb-lg-5 mt--200 s">
          <Container bg="light">
            <Row>
              <Col xs={12} md={6}>
                <img
                  src={require("./uploads/gear-img.png")}
                  alt="logo"
                  className="gear-img floating"
                />
              </Col>
              <Col xs={12} md={6}>
                <div className="main-icon fade-in">
                  <FaCog />
                </div>
                <div className="content">
                  <h1 className="py-2">Vestibulum pretium</h1>
                  <p>
                    {" "}
                    Cras sodales consectetur turpis eu dignissim. Nunc pulvinar
                    vulputate urna vel vulputate. Curabitur vel magna in dolor
                    interdum pulvinar eu laoreet metus.{" "}
                  </p>
                  <div className="listing">
                    <ul>
                      <li className="py-2 slide-right">
                        <span className="list-con ">
                          <FaRegHandPointRight />
                          <span className="px-2"> Pretium orci</span>
                        </span>
                      </li>
                      <li className="py-2 slide-right o">
                        <span className="list-con">
                          <FaRegHandPointRight />
                          <span className="px-2">Vel luctus</span>
                        </span>
                      </li>
                      <li className="py-2 slide-right t">
                        <span className="list-con">
                          <FaRegHandPointRight />
                          <span className="px-2">Vel luctus</span>Porttitor sed
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section4 section-lg pt-lg-5 pb-lg-5 mt--200">
          <Container bg="light">
            <Row>
              <Col xs={12} md={6}>
                <div className="second-icon fade-in">
                  <FaWrench />
                </div>
                <div className="content">
                  <h1 className="py-2">Vestibulum pretium</h1>
                  <p>
                    {" "}
                    Cras sodales consectetur turpis eu dignissim. Nunc pulvinar
                    vulputate urna vel vulputate. Curabitur vel magna in dolor
                    interdum pulvinar eu laoreet metus.{" "}
                  </p>
                  <p>
                    {" "}
                    Cras sodales consectetur turpis eu dignissim. Nunc pulvinar
                    vulputate urna vel vulputate. Curabitur vel magna in dolor
                    interdum pulvinar eu laoreet metus.{" "}
                  </p>
                  <p>
                    {" "}
                    Cras sodales consectetur turpis eu dignissim. Nunc pulvinar
                    vulputate urna vel vulputate. Curabitur vel magna in dolor
                    interdum pulvinar eu laoreet metus.{" "}
                  </p>
                </div>
              </Col>
              <Col xs={12} md={6}>
                <div className="img-div">
                  <img
                    src={require("./uploads/mech-img.jpg")}
                    alt="logo"
                    className="mech-img"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="section5 section-lg pt-lg-5 pb-lg-10 mt--200">
          <Container bg="light">
            <Row>
              <Col xs={12} md={12}>
                <div className="content text-center text-white">
                  <h1 className="py-2">Vestibulum pretium</h1>
                  <p>
                    Nullam et mauris non est porttitor convallis. Vivamus
                    pharetra, odio sed porta convallis, lacus leo rutrum lacus,
                    nec euismod urna massa id leo. Sed placerat imperdiet dui id
                    blandit. Ut felis risus, tincidunt in nibh sed, aliquam
                    gravida tellus. Sed a nisl et libero mattis eleifend
                    elementum vitae massa. Aliquam erat volutpat. Nulla
                    facilisis cursus pretium. Integer accumsan nec mauris in
                    laoreet. Quisque rutrum hendrerit eros, efficitur cursus
                    leo.
                  </p>
                </div>
              </Col>
            </Row>
            <div className="row-grid mt-5 pb-lg-5 row">
              <div className="col-lg-4">
                <div className=" shadow rounded-circle appl-ico">
                  <FaCubes />
                </div>
                <h5 className="text-white mt-3">Building tools</h5>
                <p className="text-white mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="col-lg-4">
                <div className=" shadow rounded-circle appl-ico">
                  <FaLaptop />
                </div>
                <h5 className="text-white mt-3">Grow your market</h5>
                <p className="text-white mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <div className="col-lg-4">
                <div className="shadow rounded-circle appl-ico">
                  <FaHammer />
                </div>
                <h5 className="text-white mt-3">Launch time</h5>
                <p className="text-white mt-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Container>
        </section>
        <section className="section6 section-lg pt-lg-5 pb-lg-10 mt--200">
          <Container bg="light">
            <Row>
              <Col xs={12} md={12}>
                <Form className="formcls shadow">
                  <FormGroup>
                    <Label for="exampleText">Name</Label>
                    <Input
                      type="text"
                      name="name"
                      id="exampleEmail"
                      placeholder="Name"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Email"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleText">Message</Label>
                    <Input
                      type="textarea"
                      name="text"
                      id="exampleText"
                      placeholder="Add your message here"
                    />
                  </FormGroup>

                  <Button>Submit</Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </section>

        <footer className="page-footer font-small blue pt-4 text-white">
          <Container>
            <div className="ocean">
              <div className="wave"></div>
              <div className="wave"></div>
              <div className="wave"></div>
            </div>
            <div className="row-grid mt-5 pb-lg-5 row">
              <div className="col-lg-4">
                <h4 className="text-upper">Trimid Unner</h4>
                <p>
                  Phasellus ut felis sit amet turpis tincidunt posuere. st
                  tortor tempus lectus, ut vehicula ante enim ornare erat. Sed
                  vitae egestas justo.{" "}
                </p>
              </div>
              <div className="col-lg-4">
                <h4>Morbi luctus</h4>
                <ul>
                  <li>
                    <a href="#ocl">Orci nec dictum</a>
                  </li>
                  <li>
                    <a href="#lac">Nam lacinia</a>
                  </li>
                  <li>
                    <a href="#in">In eleifend</a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4">
                <h4>Suspendisse auctor</h4>
                <ul>
                  <li>
                    <a href="#donec">Donec sit amet</a>
                  </li>
                  <li>
                    <a href="#mar">Mauris quis</a>
                  </li>
                  <li>
                    <a href="#sed">Sed ut elementum</a>
                  </li>
                </ul>
              </div>
            </div>
          </Container>

          <div className="footer-copyright text-center py-3">
            <ul className="social-list">
              <li>
                <a href="#fb">
                  {" "}
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a href="#li">
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a href="#tw">
                  <FaTwitterSquare />
                </a>
              </li>
            </ul>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
