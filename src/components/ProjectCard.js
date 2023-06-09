import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, discreption, imgUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imgUrl} />
                <div className="proj-txtx">
                    <h4>{discreption}</h4>
                    <span></span>
                </div>
            </div>
        </Col>
    )
}