import { useEffect, useState, useRef } from "react";
import { fetchTodos } from "../data/todos";
import { Form, Table, Badge, Button, Modal } from "react-bootstrap";

const Todos = () => {
  const [todosRaw, setTodosRaw] = useState([]);
  const [todos, setTodos] = useState([]);
  const [onlyWaiting, setOnlyWaiting] = useState(false)
  const [itemsPerPage, setItemsPerPage] = useState(5)
  const [numPages, setNumPages] = useState(3)
  const [curPages, setCurPages] = useState(1)
  const newTitleRef = useRef()
  const NewIdRef = useRef()

  useEffect(() => {
    setTodosRaw(fetchTodos());
  }, []);

  useEffect(() => {
    if(onlyWaiting)
      setTodos(todosRaw.filter((todo) =>  !todo.completed))
    else
      setTodos(todosRaw)
    
  }, [todosRaw,onlyWaiting]);

 

 useEffect(() => {
  setNumPages(Math.ceil( todos.length / itemsPerPage))
 }, [todos,itemsPerPage])

 useEffect(() => {
  if(numPages <= 0) setCurPages(0)
  else if(curPages > numPages) setCurPages(numPages)
  else if(curPages === 0) setCurPages(1)
}, [numPages])

const waitingClicked = (id) => {

 todosRaw.find((todo) => {
    return todo.id === id
  }).completed = true

  setTodosRaw([...todosRaw])
}

const deleteClicked = (id) => {
  setTodosRaw(todosRaw.filter((todo) => todo.id !== id))

}

const saveClicked = (id, title) => {
  if(title.trim() !== ''){
    setTodosRaw( [...todosRaw, 
      {
      userId: 1,
      id,
      title,
      completed: false
    }]) 
    
  }
  handleClose()
}

const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>ID</Form.Label>
              <Form.Control
                value={ todosRaw.reduce( (prev, todo) => {
                  return todo.id > prev ? todo.id : prev
                }, -1) + 1}
                disabled = {true}
                ref={NewIdRef}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Title</Form.Label>
              <Form.Control 
                placeholder="add new"
                as='textarea'
                rows={3}
                ref={newTitleRef}
              />

            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => saveClicked(Number(NewIdRef.current.value), newTitleRef.current.value)}>
            Save 
          </Button>
        </Modal.Footer>
      </Modal>

      <Form>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
          <Form.Check // prettier-ignore
            type="switch"
            id="custom-switch"
            // label={"Show only"}
            onChange={(e) => setOnlyWaiting(e.target.checked)}
          />
          Show only&nbsp;<Button variant="warning">waiting&nbsp;<i class="bi bi-clock"></i></Button> 
          </div>
          <Form.Select aria-label="Default select example" className="w-25" onChange={(e) => setItemsPerPage(e.target.value)}>
            <option value={5}>5 item per page</option>
            <option value={10} checked>10 item per page</option>
            <option value={50}>50 item per page</option>
            <option value={100}>100 item per page</option>
          </Form.Select>
        </div>
      </Form>

      <div>
        <Table striped bordered hover>
          <thead className="table-dark">
            <tr>
              <th className="text-center" style={{ width: "3rem" }}>
                ID
              </th>
              <th className="text-center">Title</th>
              <th className="text-end" style={{ width: "12rem" }}>
                Completed&nbsp;
                <Button onClick={() => {handleShow()}}>
                  <i className='bi bi-plus'></i>
              </Button>
              </th>
            </tr>
          </thead>
          <tbody>
            {
              todos.filter((todo, index) => 
                 (index >= (curPages - 1) * itemsPerPage && index <= curPages * itemsPerPage - 1)
              )
              .map((todo) => {
              return (
                <tr>
                  <td className="text-center">
                    <h5>
                        <Badge bg="secondary">{todo.id}</Badge>
                    </h5>
                  </td>
            
                  <td>{todo.title}</td>
                  
                    <td className="text-end">
                      <h5>
                        {todo.completed ? 
                        (<Badge bg ='success' className="fs-6">done</Badge> )
                        : 
                        (<Button variant="warning" onClick={() => waitingClicked(todo.id)}>waiting&nbsp;<i class="bi bi-clock"></i></Button>)}
                        &nbsp;
                        <Button variant="danger" onClick={() => {deleteClicked(todo.id)}}> 
                            <i class="bi bi-trash"></i>
                        </Button>
                      </h5>
                    </td>
            
                </tr>
              );
            })
          }
          </tbody>
        </Table>
      </div>
          
      <div className="text center">
        <Button variant="outline-primary" onClick={() => setCurPages(1)} disabled={curPages === 1 ? true : false}>First</Button>&nbsp;
        <Button variant="outline-primary"onClick={() => curPages > 1 && setCurPages((p) => p - 1)} disabled={curPages === 1 ? true : false}>Previous</Button>&nbsp;
        <span>
            {curPages}/{numPages}&nbsp;
        </span>
        <Button variant="outline-primary" onClick={() => curPages < numPages && setCurPages((p) => p + 1)} disabled={curPages === numPages}>Next</Button>&nbsp;
        <Button variant="outline-primary" onClick={() => setCurPages(numPages)} disabled={curPages === numPages}>Last</Button>&nbsp;
      </div>
    </>
  );
};

export default Todos;
