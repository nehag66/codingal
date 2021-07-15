import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
  Input,
  Collapse,
} from "reactstrap";

const ModalExample = (props) => {
  const { EndClass, className } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => setIsOpen(!isOpen);

  const [isOpenOther, setIsOpenOther] = useState(false);
  const onClickHandlerOther = () => setIsOpenOther(!isOpenOther);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        End Class
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalBody>
          <FormGroup tag="fieldset">
            <legend>Select a reason to end class</legend>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" /> Class completed
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio1" onClick={onClickHandler} />{" "}
                Class interrupted
              </Label>
            </FormGroup>

            <Collapse isOpen={isOpen}>
              <FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2" /> Student didn't show up
                    for the class
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2" />
                    Student got disconnected
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input type="radio" name="radio2" />I got disconnected
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="radio"
                      name="radio2"
                      onClick={onClickHandlerOther}
                    />
                    Other reason
                  </Label>
                  <Collapse isOpen={isOpen}>
                    <FormGroup>
                      <Input type="textarea" name="text" id="exampleText" />
                    </FormGroup>
                  </Collapse>
                </FormGroup>
              </FormGroup>
            </Collapse>
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            End Class
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
