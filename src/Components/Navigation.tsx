import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Navigation = () => {
  const graphs = [
    {
      name: "Home",
      link: "/react-data-visualizaion",
    },
    {
        name: "Charts",
        link: "/react-data-visualizaion/chart",
      },
    {
      name: "Bar Chart",
      link: "/react-data-visualizaion/bar-chart",
    },
    {
      name: "Line Chart",
      link: "/react-data-visualizaion/line-chart",
    },
    {
      name: "Pie",
      link: "/react-data-visualizaion/bar-chart",
    },
    {
      name: "Doughut",
      link: "/react-data-visualizaion/bar-chart",
    },
  ];

  return (
    <Nav variant="pills" className="p-3 justify-content-center gap-3">
      {graphs.map((graph, index) => (
        <Nav.Item key={index}>
          <Link className="nav-link border" to={graph.link}>
            {graph.name}
          </Link>
        </Nav.Item>
      ))}
    </Nav>
  );
};

export default Navigation;
