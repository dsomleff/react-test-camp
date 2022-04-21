import { useState } from 'react';
import { Form, Button, Popover } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';

export default function SummaryForm() {
    const [checked, setChecked] = useState(false);
    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>No ice cream will be delivered</Popover.Body>
        </Popover>
    );
    const checkboxLabel = (
        <span>
            I agree to
            <OverlayTrigger
                placement="right"
                overlay={popover}
            >
                <span style={{ color: 'blue' }}> Terms&Conditions</span>
            </OverlayTrigger>
        </span>
    );

    return (
        <Form>
            <Form.Group controlId="terms-and-conditions">
                <Form.Check
                    type="checkbox"
                    checked={checked}
                    onChange={e => setChecked(e.target.checked)}
                    label={checkboxLabel}
                />
            </Form.Group>

            <Button
                variant="primary"
                type="submit"
                disabled={!checked}
            >
                Confirm order
            </Button>
        </Form>
    );
}
