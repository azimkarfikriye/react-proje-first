 import Button from 'react-bootstrap/Button';
 import Card from 'react-bootstrap/Card';

 function CardComponent({title, icon, content}) {
   return (
    <div className="col-lg-6 col-xxl-4 mb-4">
       <Card className="bg-light border-0 ">
      <Card.Body className="text-center p-5 p-lg-5 pt-0 pt-lg-0">
      <div style={{marginTop:"-25px", fontSize:"1.5rem"}}className="bg-primary d-inline-block feature bg-gradient p-3 text-white rounded-3 mb-4 ">{icon}</div>
       <h2 className="fw-bold fs-2">{title}</h2>
       <p className="fs-5">{content}</p>
       </Card.Body>
    </Card>
     </div>
    
  );
}

 export default CardComponent;


